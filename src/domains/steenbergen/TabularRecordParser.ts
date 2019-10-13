import TabularRecord = steenbergen.TabularRecord;

export class TabularRecordParser {
    private readonly _records: TabularRecord[];

    constructor() {
        this._records = [];
    }

    getDatabase() {
        return this._records;
    }

    parse(line: string): void {
        const tabRecord = this._parsePreliminary(line);
        if (tabRecord) {
            this._records.push(tabRecord);
        }
    }

    private _parsePreliminary(line: string): TabularRecord | null {
        if (!line.startsWith('nms[')) {
            return null;
        }

        const start = line.indexOf("'");
        const end = line.lastIndexOf("'");

        if (start === -1 || end === -1 || start >= end) {
            return null;
        }

        const stringContent = line.substring(start + 1, end);
        const columns = stringContent.split('\t');

        if (columns.length !== 7) {
            return null;
        }

        return {
            primary_form: columns[0],
            secondary_form: columns[1],
            part_of_speech: columns[2],
            incidence: columns[3],
            translations: columns[4],
            lexicon: columns[5],
            origin: columns[6],
        };
    }
}