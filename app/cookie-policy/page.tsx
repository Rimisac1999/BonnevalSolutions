'use client'

import { companyConfig } from '@/config/company'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CookiePolicy() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 pb-16 bg-navy">
        <div className="container-brand px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-heading text-white mb-4">
                {t('Cookie Policy', 'Politique de Cookies')}
              </h1>
              <p className="text-lg text-white/50">
                {t('Last updated', 'Dernière mise à jour')}: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="brand-card space-y-8">
              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('1. Introduction', '1. Introduction')}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {t(
                    `At ${companyConfig.name}, we believe in transparency and respect for your privacy. This Cookie Policy explains how we handle cookies on our website.`,
                    `Chez ${companyConfig.name}, nous croyons en la transparence et le respect de votre vie privée. Cette Politique de Cookies explique comment nous gérons les cookies sur notre site web.`
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('2. Our Cookie Policy', '2. Notre Politique de Cookies')}
                </h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  <strong className="text-white">
                    {t(
                      'We do not use cookies on our website.',
                      'Nous n\'utilisons pas de cookies sur notre site web.'
                    )}
                  </strong>{' '}
                  {t(
                    'Our site is designed to function without any tracking or storage mechanisms. You can browse our website freely without concerns about cookie consent or tracking.',
                    'Notre site est conçu pour fonctionner sans aucun mécanisme de suivi ou de stockage. Vous pouvez parcourir notre site web librement sans vous soucier du consentement aux cookies ou du suivi.'
                  )}
                </p>
                <p className="text-white/60 leading-relaxed">
                  {t('When you visit our website, we do not:', 'Lorsque vous visitez notre site, nous ne :')}
                </p>
                <ul className="list-disc list-inside text-white/60 mt-2 space-y-1 ml-4">
                  <li>{t('Set any cookies on your device', 'Plaçons aucun cookie sur votre appareil')}</li>
                  <li>{t('Use session or persistent cookies', 'Utilisons pas de cookies de session ou persistants')}</li>
                  <li>{t('Employ third-party tracking cookies', 'Utilisons pas de cookies de suivi tiers')}</li>
                  <li>{t('Store any browsing preferences', 'Stockons aucune préférence de navigation')}</li>
                  <li>{t('Track your behavior across our site', 'Suivons pas votre comportement sur notre site')}</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('3. Third-Party Services', '3. Services Tiers')}
                </h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  {t('Our website may contain links to external services:', 'Notre site web peut contenir des liens vers des services externes :')}
                </p>
                <ul className="list-disc list-inside text-white/60 mt-2 space-y-1 ml-4">
                  <li><strong className="text-white">{t('Intranet Portal:', 'Portail Intranet :')}</strong> {t('Links to our internal business systems', 'Liens vers nos systèmes métier internes')}</li>
                  <li><strong className="text-white">{t('Client Portal:', 'Portail Client :')}</strong> {t('Links to client-specific services', 'Liens vers des services spécifiques aux clients')}</li>
                  <li><strong className="text-white">{t('External Tools:', 'Outils Externes :')}</strong> {t('Links to third-party tools and services', 'Liens vers des outils et services tiers')}</li>
                </ul>
                <p className="text-white/60 leading-relaxed mt-4">
                  {t(
                    'These external services may use their own cookies and have their own privacy policies. We encourage you to review their policies before providing any personal information.',
                    'Ces services externes peuvent utiliser leurs propres cookies et avoir leurs propres politiques de confidentialité. Nous vous encourageons à consulter leurs politiques avant de fournir des informations personnelles.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('4. Future Changes', '4. Modifications Futures')}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {t(
                    'If we ever change our cookie policy in the future, we will update this page and clearly describe what would change before it takes effect. We are committed to maintaining transparency about our data practices.',
                    'Si nous modifions notre politique de cookies à l\'avenir, nous mettrons à jour cette page et décrirons clairement les changements avant leur entrée en vigueur. Nous nous engageons à maintenir la transparence sur nos pratiques en matière de données.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('5. Contact Information', '5. Informations de Contact')}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {t(
                    'If you have any questions about this Cookie Policy or our data practices, please contact us at:',
                    'Si vous avez des questions concernant cette Politique de Cookies ou nos pratiques en matière de données, veuillez nous contacter à :'
                  )}{' '}
                  <a href={`mailto:${companyConfig.contact.email}`} className="text-blue-light hover:text-blue underline">
                    {companyConfig.contact.email}
                  </a>
                </p>
              </div>

              <div className="border-t border-white/[0.06] pt-6">
                <p className="text-sm text-white/30 text-center">
                  {t(
                    `This Cookie Policy is effective as of ${new Date().toLocaleDateString()}`,
                    `Cette Politique de Cookies est en vigueur depuis le ${new Date().toLocaleDateString()}`
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
