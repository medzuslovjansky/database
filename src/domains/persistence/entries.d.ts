
declare namespace persistence {
    export type Entry =
        Noun;

    export type Noun = {
        partOfSpeech: 'noun';
        version: 1;
        gender: Gender;
        plurality?: PluralityRestriction;
        indeclinable?: true;
        animate?: true;
    };

    export enum Gender {
        Masculine = 'm',
        Feminine = 'f',
        Neuter = 'n',
    }

    export enum PluralityRestriction {
        Singular = 'sg',
        Plural = 'pl',
    }

    export type Adjective = {
        partOfSpeech: 'adjective';
    };

    export type Adverb = {
        partOfSpeech: 'adverb';
    };

    export type Conjugation = {
        partOfSpeech: 'conjugation';
    };

    export type Numeral = {
        partOfSpeech: 'numeral';
        numeralType: NumeralType;
    };

    export type NumeralType =
        'cardinal' |
        'collective' |
        'differential' |
        'fractional' |
        'multiplicative' |
        'ordinal' |
        'substantivised' ;

    export type Interjection = {
        partOfSpeech: 'interjection';
    };


    export type Pronoun = {
        partOfSpeech: 'pronoun';
        pronounType: PronounType;
    };

    export type PronounType =
        'demonstrative' |
        'indefinite' |
        'intensive' |
        'personal' |
        'possesive' |
        'reciprocal' |
        'reflexive' |
        'relative' ;

    export type Prefix = {
        partOfSpeech: 'prefix';
    };

    export type Suffix = {
        partOfSpeech: 'suffix';
    };

    export type Particle = {
        partOfSpeech: 'particle';
    };

    export type Phraseme = {
        partOfSpeech: 'phraseme';
    };

    export type Verb = {
        partOfSpeech: 'verb';

        // "v.aux. ipf.": "verb (auxiliary, imperfect)",
        // "v.aux. pf.": "verb (auxiliary, perfect)",
        // "v.intr. ipf.": "verb (intransitive, imperfect)",
        // "v.intr. ipf./pf.": "verb (intransitive, imperfect, perfect)",
        // "v.intr. pf.": "verb (intransitive, perfect)",
        // "v.ipf.": "verb (imperfect)",
        // "v.pf.": "verb (perfect)",
        // "v.refl. ipf.": "verb (reflexive, imperfect)",
        // "v.refl. ipf./pf.": "verb (reflexive, imperfect, perfect)",
        // "v.refl. pf.": "verb (reflexive, perfect)",
        // "v.tr. ipf.": "verb (transitive, imperfect)",
        // "v.tr. ipf./pf.": "verb (transitive, imperfect, perfect)",
        // "v.tr. pf.": "verb (transitive, perfect)"
    };

    export type Preposition = {
        partOfSpeech: 'preposition';
        genitive?: true;
    };
}
