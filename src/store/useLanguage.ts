import { create } from 'zustand';
import { LanguageType } from '../types/LanguageType';

type LanguageStore = {
    language: LanguageType;
    toggleLanguage: () => void;
    getViewLanguage: () => LanguageType;
};

const useLanguageStore = create<LanguageStore>((set, get) => ({
    language: LanguageType.BR,

    toggleLanguage: () =>
        set((state) => ({
            language:
                state.language === LanguageType.BR
                    ? LanguageType.EN
                    : LanguageType.BR,
        })),

    getViewLanguage: () =>
        get().language === LanguageType.BR ? LanguageType.EN : LanguageType.BR,
}));

export default useLanguageStore;
