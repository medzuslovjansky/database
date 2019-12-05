declare namespace persistence {
    export enum SlavicLanguage {
        Belarusian = 'bel',
        Bosnian = 'bos',
        Bulgarian = 'bul',
        Croatian = 'hrv',
        Czech = 'ces',
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

    export enum Language {
        ...SlavicLanguage,

        English = 'eng',
        German = 'deu',
        Interslavic = 'isv',
    }
}
