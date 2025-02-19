'use client'

import { useRouter } from 'next/router'
import en from '../locales/en.json'
import es from '../locales/es.json'

const translations = { en, es }

export function useTranslation() {
  const router = useRouter()
  const { locale } = router

  const t = (key) => {
    const translation = translations[locale]?.[key]
    if (!translation) {
      console.warn(`Translation not found for key: ${key}`)
      return key
    }
    return translation
  }

  return { t, locale }
}