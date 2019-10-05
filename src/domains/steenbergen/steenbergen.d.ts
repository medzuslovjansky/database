declare namespace steenbergen {
    export type TabularRecord = {
        primary_form: string;
        secondary_form: string;
        translations: string;
        part_of_speech: string;
        incidence: string;
        lexicon: string;
        origin: string;
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

    export enum VoteStatus {
        Common = 1,
        Regional = 2,
        Individual = 3,
        Archaic = 4,
        Artificial = 5,
        Questionable = 9,
        Deprecated = 99,
    }

    export type RegionalTag =
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
        German = 'G',
        International = 'I',
        Artificial = 'M',
        Netherlands = 'N',
        Oriental = 'O',
        Slavic = 'S',
        Turkic = 'T',
    }
}
