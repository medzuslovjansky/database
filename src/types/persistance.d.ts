declare namespace persistence {
    export type DictionaryItem = {
        definitions: Definition[];
    };

    export type Definition = {
        id: string; // for example: "adv. I", "adv. II", "adj. I"
        forms: Lemma[];
        interpretation?: Interpretation;
        translation: Partial<Record<Language, Translation>>;
        intelligibility: Intelligibility;
    };

    export type Lemma = {
        id: string;
        morphology: Morphology;
        definition: Definition;
    };

    export type Interpretation = {
        uri: string;
    };

    export type Intelligibility = {
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
        plurality?: Plurality;
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

    export enum Plurality {
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

    export type Inflection = {
      record: DictionaryItem;
    };

    export type NounInflection = Inflection & {
      plurality: Plurality;
      case: NounCase;
    };

    export enum NounCase = {
      Nominative = 'nom',
      Genitive = 'gen',
      Accusative = 'acc',
      Dative = 'dat',
      Instrumental = 'ins',
      Locative = 'loc',
      Vocative = 'voc',
    };

    export type AdjectiveInflection = Inflection & {
      plurality: Plurality;
      case: AdjectiveCase;
      comparative?: ComparativeDegree;
    };

    export enum AdjectiveCase = {
      Nominative = 'nom',
      Genitive = 'gen',
      Accusative = 'acc',
      Dative = 'dat',
      Instrumental = 'ins',
      Locative = 'loc',
    };

    export enum ComparativeDegree = {
      Normal = 'normal',
      Relative = 'relative',
      Super = 'super',
    };
}
