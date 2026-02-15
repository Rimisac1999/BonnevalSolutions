'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

type Lang = 'en' | 'fr'

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (en: string, fr: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: (en) => en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const t = useCallback(
    (en: string, fr: string) => (lang === 'fr' ? fr : en),
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
