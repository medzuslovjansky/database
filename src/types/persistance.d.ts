declare namespace persistence {
    export type DictionaryItem = {
        forms: string[];
        definitions: Definition[];
    };

    export type Definition = {
        id: string; // for example: "adv. I", "adv. II", "adj. I"
        morphology: Morphology;
        interpretation?: string;
        translation: Partial<Record<Language, Translation>>;
        compatibility: Compatibility;
    };

    export type Compatibility = {
        status: VoteStatus;
        origin?: Origin;
        occurrence: Partial<Record<Language, boolean>>;
    };

    export type Morphology = {
        partOfSpeech: PartOfSpeech;
    };

    export type PartOfSpeech =
          Adjective
        | Adverb
        | Conjunction
        | Interjection
        | Noun
        | Numeral
        | Particle
        | Phraseme
        | Prefix
        | Preposition
        | Pronoun
        | Suffix
        | Verb
        ;

    export type Adjective = {
        type: 'adjective';
    };

    export type Adverb = {
        type: 'adverb';
    };

    export type Conjunction = {
        type: 'conjunction';
    };

    export type Interjection = {
        type: 'interjection';
    };

    export type Noun = {
        type: 'noun';
        gender: Gender;
        plurality?: PluralityRestriction;
        indeclinable?: true;
        animate?: true;
    };

    export type Numeral = {
        type: 'numeral';
        numeralType: NumeralType;
    };

    export type Particle = {
        type: 'particle';
    };

    export type Phraseme = {
        type: 'phraseme';
    };

    export type Prefix = {
        type: 'prefix';
    };

    export type Preposition = {
        type: 'preposition';
        genitive?: true;
    };

    export type Pronoun = {
        type: 'pronoun';
        pronounType: PronounType;
    };

    export type Suffix = {
        type: 'suffix';
    };

    export type Verb = {
        type: 'verb';

        auxiliary?: true;
        imperfect?: true;
        intransitive?: true;
        perfect?: true;
        reflexive?: true;
        transitive?: true;
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

    export type NumeralType =
        'cardinal' |
        'collective' |
        'differential' |
        'fractional' |
        'multiplicative' |
        'ordinal' |
        'substantivized' ;

    export type PronounType =
        'demonstrative' |
        'indefinite' |
        'intensive' |
        'personal' |
        'possessive' |
        'reciprocal' |
        'reflexive' |
        'relative' ;

    export type Translation = AtomicTranslation | TranslationGroup;

    export type AtomicTranslation = InlineTranslation | ExternalTranslation;

    export type TranslationGroup = AmbiguityGroup | SynonymicGroup;

    export type DefiniteTranslation = SynonymicGroup | AtomicTranslation;

    export type InlineTranslation = {
        type: 'inline';
        value: string;
    };

    export type ExternalTranslation = {
        type: 'external';
        ref: string;
    };

    export type AmbiguityGroup = {
        type: 'ambiguity';
        items: DefiniteTranslation[];
    };

    export type SynonymicGroup = {
        type: 'synonyms';
        items: AtomicTranslation[];
    };

    export enum VoteStatus {
        Common = 1,
        Regional = 2,
        Individual = 3,
        Archaic = 4,
        Artificial = 5,
        Questionable = 9,
        Deprecated = 99,
    }

    export enum Origin {
        Artificial = 'M',
        Dutch = 'N',
        English = 'E',
        French = 'F',
        German = 'G',
        GreekLatin = 'I',
        Slavic = 'S',
        Turkic = 'T',
    }

    export enum Language {
        Belarusian = 'bel',
        Bosnian = 'bos',
        Bulgarian = 'bul',
        Croatian = 'hrv',
        Czech = 'ces',
        English = 'eng',
        Kashubian = 'csb',
        LowerSorbian = 'dsb',
        Macedonian = 'mkd',
        Montenegrin = 'cnr',
        OldChurchSlavonic = 'chu',
        OldRussian = 'orv',
        Polabian = 'pox',
        Polish = 'pol',
        Russian = 'rus',
        Rusyn = 'rue',
        Serbian = 'srp',
        Silesian = 'sli',
        Slovak = 'slk',
        Slovenian = 'slv',
        Ukrainian = 'ukr',
        UpperSorbian = 'hsb',
    }
}
