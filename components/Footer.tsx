'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { legal, companyConfig } from '@/config/company'
import Image from 'next/image'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-surface-1 border-t border-white/[0.06]">
      <div className="container-brand px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src={companyConfig.branding.logo}
            alt="Bonneval Solutions"
            width={140}
            height={36}
            className="h-8 w-auto"
          />

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
            <a href={legal.privacyPolicy} className="hover:text-blue-light transition-colors">
              {t('Privacy', 'Confidentialité')}
            </a>
            <a href={legal.termsOfService} className="hover:text-blue-light transition-colors">
              {t('Terms', 'Conditions')}
            </a>
            <a href={legal.cookiePolicy} className="hover:text-blue-light transition-colors">
              Cookies
            </a>
          </div>

          <p className="text-sm text-white/30">
            {`© ${new Date().getFullYear()} Bonneval Solutions`}
          </p>
        </div>
      </div>
    </footer>
  )
}
