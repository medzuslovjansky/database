declare namespace persistence {
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

    export type IntelligibiltyLevel =
      LegacyIntelligibility |
      CompleteIntelligibility |
      EducatedIntelligibility |
      FalseIntelligibility |
      NoIntelligibility ;

    export interface Intelligibility {
      comment: Document;
      translations: Definition[];
    }

    export interface LegacyIntelligibility extends Intelligibility {
      level: 'unknown';
      intelligible?: boolean;
    }

    export interface CompleteIntelligibility extends Intelligibility {
      level: 'complete';
      twins: Definition[];
    }

    export interface LikelyIntelligibility extends Intelligibility {
      level: 'likely';
      related: Definition[];
      likelihood?: number;
    }

    export interface FalseIntelligibility extends Intelligibility {
      level: 'false';
      lookalikes: Lemma[];
    }

    export interface NoIntelligibility extends Intelligibility {
      level: 'none';
    }
}
