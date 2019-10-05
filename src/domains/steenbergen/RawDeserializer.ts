import RawRecord = steenbergen.RawRecord;

export class RawDeserializer {
    private _previous: RawRecord | null;

    constructor() {
        this._previous = null;
    }

    deserializeLine(line: string): RawRecord {
        const [
            lemmas,
            modifiers,
            partOfSpeech,
            category,
            translations,
            intelligibility,
            origin,
        ] = line.split('\t');


        const record = this._resolveIndex({
            index: 0,
            lemmas,
            modifiers,
            partOfSpeech,
            category,
            translations,
            intelligibility,
            origin,
        });

        this._previous = record;
        return record;
    }

    private _resolveIndex(record: RawRecord): RawRecord {
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