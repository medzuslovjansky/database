import * as _ from "lodash";
import * as fs from "fs";
import * as path from "path";
import * as os from "os";

import {SRC_ROOT} from "../../../utils/config";
import {TabularRecordParser} from "../TabularRecordParser";

const steen_en = fs.readFileSync(path.join(SRC_ROOT, '__tests__/steen-js/en.js'), 'utf8').split(os.EOL);

describe('TabularRecordParser', () => {

    it.skip('should not change index if the record is unique', () => {
        const parser = new TabularRecordParser();
        for (const line of steen_en) {
            parser.parse(line);
        }

        const db = parser.getDatabase();
        expect(db).toHaveLength(17518);

        const is_abbreviation = / \[[^\]]{1,5}\]$/;
        const single_word = /^\w+(-\w+)?!?$/;
        const prefix = /^\w+-$/;
        const suffix = /^-\w+$/;
        const i___i = /^\w+ \.\.\. \w+$/;
        const i___i___ = /^\w+ \.\.\. \w+ \.\.\.$/;

        const isRegular = (s: string) => s.split(' ').every(w => single_word.test(w)) && containsOneOrNone(s, '!');
        const isTemplate = (s: string) => i___i.test(s) || i___i___.test(s);

        const containsOne = (str: string, sub: string) => {
            return str.includes(sub) && str.indexOf(sub) === str.lastIndexOf(sub);
        };

        const containsOneOrNone = (str: string, sub: string) => {
            return !str.includes(sub) || str.indexOf(sub) === str.lastIndexOf(sub);
        };

        const hasHyphen = (s: string) => prefix.test(s) || suffix.test(s);

        const hasForms_2 = (s: string) => containsOne(s, ', ') && s.split(', ').every(ss => isRegular(ss) || hasHyphen(ss));

        const known = (s: string) => [
            isRegular, isTemplate,
            hasForms_2, hasHyphen, isTemplate,
        ].some(f => f(s));

        const isAbbreviation = (s: string) => containsOne(s, ' [') && containsOne(s, ']') && is_abbreviation.test(s) && known(s.substr(0, s.indexOf(' [')));

        const isWeird = (s: string) => !known(s) && !isAbbreviation(s);

        db.forEach(rec => {
            rec.primary_form = _.deburr(rec.primary_form);
        });

        const forms = db.filter(r => r.part_of_speech !== 'prefix' && r.part_of_speech !== 'suffix');

        expect({
            weird: forms.filter(f => isWeird(f.primary_form)),
            hyphen: forms.filter(f => hasHyphen(f.primary_form)),
            template: forms.filter(f => isTemplate(f.primary_form)),
            regular: forms.filter(f => isRegular(f.primary_form)),
            forms_2: forms.filter(f => hasForms_2(f.primary_form)),
            abbr: forms.filter(f => isAbbreviation(f.primary_form)),
        }).toMatchSnapshot();
    })
});