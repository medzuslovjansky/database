import RawRecord = steenbergen.RawRecord;
import {chain} from 'lodash';

export function fixIndices(rawRecords: RawRecord[]): RawRecord[] {
    return chain(rawRecords)
        .groupBy((r: RawRecord) => [
            r.lemmas,
            r.modifiers,
            r.partOfSpeech
        ].join(':'))
        .mapValues((values: RawRecord[]): RawRecord[] => {
            return values.length > 1
                ? values.map((record, i) => ({
                    ...record,
                    index: i + 1
                }))
                : values;
        })
        .values()
        .flatten()
        .value();
}
