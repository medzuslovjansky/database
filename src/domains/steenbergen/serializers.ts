import {chain} from 'lodash';
import RawRecord = steenbergen.RawRecord;

export function deserializeSteenbergenDictionary(lines: string[]) {
    const rawRecords = lines.map(deserializeLine);
}


