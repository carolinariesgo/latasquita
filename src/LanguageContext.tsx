import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export type Lang = 'es' | 'en'

const LanguageContext = createContext<{
  lang: Lang
  toggleLang: () => void
}>({ lang: 'es', toggleLang: () => {} })

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() =>
    (localStorage.getItem('tasquita-lang') as Lang) || 'es'
  )

  const toggleLang = () => {
    const next: Lang = lang === 'es' ? 'en' : 'es'
    setLang(next)
    localStorage.setItem('tasquita-lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
