declare namespace persistence {
    export type Morphology =
          AdjectiveMorphology
        | AdverbMorphology
        | ConjunctionMorphology
        | InterjectionMorphology
        | NounMorphology
        | NumeralMorphology
        | ParticleMorphology
        | PhrasemeMorphology
        | PrefixMorphology
        | PrepositionMorphology
        | PronounMorphology
        | SuffixMorphology
        | VerbMorphology
        ;

    export type AdjectiveMorphology = {
        partOfSpeech: Adjective;
        plurality: Plurality;
        case: AdjectiveCase;
        comparative: ComparativeDegree;
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

    export type AdverbMorphology = MorphologyStub<Adverb>;
    export type ConjunctionMorphology = MorphologyStub<Conjunction>;
    export type InterjectionMorphology = MorphologyStub<Interjection>;

    export type NounMorphology = {
      partOfSpeech: Noun;
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

    export type NumeralMorphology = MorphologyStub<Numeral>;
    export type ParticleMorphology = MorphologyStub<Particle>;
    export type PhrasemeMorphology = MorphologyStub<Phraseme>;
    export type PrefixMorphology = MorphologyStub<Prefix>;
    export type PrepositionMorphology = MorphologyStub<Preposition>;
    export type PronounMorphology = MorphologyStub<Pronoun>;
    export type SuffixMorphology = MorphologyStub<Suffix>;
    export type VerbMorphology = MorphologyStub<Verb>;

    export type MorphologyStub<T> = {
        partOfSpeech: T;
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
        name: 'adjective';
    };

    export type Adverb = {
        name: 'adverb';
    };

    export type Conjunction = {
        name: 'conjunction';
    };

    export type Interjection = {
        name: 'interjection';
    };

    export type Noun = {
        name: 'noun';
        gender: Gender;
        plurality?: Plurality;
        indeclinable?: true;
        animate?: true;
    };

    export type Numeral = {
        name: 'numeral';
        numeralType: NumeralType;
    };

    export type Particle = {
        name: 'particle';
    };

    export type Phraseme = {
        name: 'phraseme';
    };

    export type Prefix = {
        name: 'prefix';
    };

    export type Preposition = {
        name: 'preposition';
        genitive?: true;
    };

    export type Pronoun = {
        name: 'pronoun';
        pronounType: PronounType;
    };

    export type Suffix = {
        name: 'suffix';
    };

    export type Verb = {
        name: 'verb';

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
}
