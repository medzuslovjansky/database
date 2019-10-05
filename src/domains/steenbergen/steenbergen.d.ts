declare namespace steenbergen {
    export type RawRecord = {
        index: number;
        lemmas: string;
        modifiers: string;
        partOfSpeech: string;
        category: string;
        translations: string;
        intelligibility: string;
        origin: string;
    };

    export type Record = {
        index: number;
        lemmas: string;
        modifiers: string;
        partOfSpeech: PartOfSpeech;
        category?: Category;
        translations: string;
        intelligibility: IntelligibilityTag[];
        origin: Origin;
    };

    export type PartOfSpeech =
        'adj.' |
        'adv.' |
        'conj.' |
        'f.' |
        'f.indecl.' |
        'f.pl.' |
        'f.sg.' |
        'intj.' |
        'm.' |
        'm./f.' |
        'm.anim.' |
        'm.indecl.' |
        'm.pl.' |
        'm.sg.' |
        'n.' |
        'n.indecl.' |
        'n.pl.' |
        'n.sg.' |
        'num.' |
        'num.card.' |
        'num.coll.' |
        'num.diff.' |
        'num.fract.' |
        'num.mult.' |
        'num.ord.' |
        'num.subst.' |
        'particle' |
        'phrase' |
        'prefix' |
        'prep.' |
        'prep. + gen.' |
        'pron.dem.' |
        'pron.indef.' |
        'pron.int.' |
        'pron.pers.' |
        'pron.poss.' |
        'pron.rec.' |
        'pron.refl.' |
        'pron.rel.' |
        'suffix' |
        'v.aux. ipf.' |
        'v.aux. pf.' |
        'v.intr. ipf.' |
        'v.intr. ipf./pf.' |
        'v.intr. pf.' |
        'v.ipf.' |
        'v.pf.' |
        'v.refl. ipf.' |
        'v.refl. ipf./pf.' |
        'v.refl. pf.' |
        'v.tr. ipf.' |
        'v.tr. ipf./pf.' |
        'v.tr. pf.' ;

    export enum Category {
        _maybe_Regular = 1,
        _unknown2 = 2,
        _unknown3 = 3,
        _maybe_Archaic = 4,
        _maybe_Neologism = 5,
        _maybe_Slavicism = 9,
    }

    export type IntelligibilityTag = {
        id: IntelligibilityId;
        tilde: 'none' | 'before' | 'after' | 'both';
        notes?: string;
    };

    export type IntelligibilityId =
        'z'   |
        'v'   |
        'j'   |
        'be'  |
        'bg'  |
        'bm'  |
        'cs'  |
        'csb' |
        'cu'  |
        'cz'  |
        'dsb' |
        'hr'  |
        'hsb' |
        'iw'  |
        'mk'  |
        'ns'  |
        'ocs' |
        'pl'  |
        'ps'  |
        're'  |
        'ru'  |
        'rue' |
        'sb'  |
        'sh'  |
        'sk'  |
        'sl'  |
        'sr'  |
        'ub'  |
        'uk'  |
        'yu'  |
        'i'   |
        'ij'  |
        'in'  |
        'iz'  |
        'jc'  |
        'jn'  |
        'n'   |
        'sx'  ;

    export enum Origin {
        Deutsch = 'D',
        English = 'E',
        French = 'F',
        Germanic = 'G',
        Italian = 'I',
        _MaybeConstructedWord = 'M',
        Netherlands = 'N',
        _MaybeOrient = 'O',
        Slavic = 'S',
        Turkic = 'T',
    }
}
