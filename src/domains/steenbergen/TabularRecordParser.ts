import TabularRecord = steenbergen.TabularRecord;

export class TabularRecordParser {
    private _previous: TabularRecord | null;

    constructor() {
        this._previous = null;
    }

    parse(line: string): TabularRecord {
        const record = this._parsePreliminary()

        this._previous = record;
        return record;
    }

    private _parsePreliminary(line: string): TabularRecord {
        const start = line.indexOf("'");
        const end = line.lastIndexOf("'");
        const stringContent = line.substring(start + 1, end);
        const columns = stringContent.split('\t');

        return {
            primary_form: columns[0],
            secondary_form: columns[1],
            translations: columns[2],
            part_of_speech: columns[3],
            incidence: columns[4],
            lexicon: columns[5],
            origin: columns[6],
        };
    }

    private _resolveIndex(record: TabularRecord): TabularRecord {
        if (this._previous === null) {
            return record;
        }

        const prev = this._previous;
        if (record.lemmas !== prev.lemmas) return record;
        if (record.partOfSpeech !== prev.partOfSpeech) return record;

        if (prev.index === 0) {
            prev.index = 1;
        }

        record.index = prev.index + 1;
        return record;
    }
}