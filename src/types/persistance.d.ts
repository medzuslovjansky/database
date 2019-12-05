declare namespace persistence {
    export type Dictionary = GenericDictionary | InterslavicDictionary;

    export type GenericDictionary = {
        language: Language; // primary key
        records: BaseLemma[];
    };

    export type InterslavicDictionary = {
        language: Language.Interslavic;
        records: InterslavicLemma[];
    };

    export type Lemma = {
        id: string; // e.g., steen-18250
        value: string; // kot

        dictionary: Dictionary;
        definitions: Definition[];
    };

    export type InterslavicLemma = Lemma & {
        morphology: Morphology;
        definitions: InterslavicDefinition[];
    };

    export type Definition = {
        id: string; // kot-1
        variants: Lemma[]; // e.g. [{ altana }, { altanka }]
        interpretation?: Document;
    };

    export type InterslavicDefinition = Definition & {
        intelligibility: InterslavicIntelligibility;
    };

    export type InterslavicIntelligibility = {
        status: VoteStatus;
        origin?: Origin;
        byLanguage: Partial<Record<SlavicLanguage, IntelligibiltyLevel>>;
    };

    export type Document<F extends Format> = InlineDocument<F> | ExternalDocument<F>;

    export type InlineDocument<F extends Format> = {
      type: 'inline';
      format: F;
      value: string;
    };

    export type ExternalDocument<F extends Format> = {
      type: 'external';
      format: F;
      uri: string;
    };

    export type Format = PlainTextFormat | MarkdownFormat;
0
    export type PlainTextFormat = {
      type: 'text/plain';
      text: string;
    };

    export type MarkdownFormat = {
      type: 'text/markdown';
      text: string;
    };
}
