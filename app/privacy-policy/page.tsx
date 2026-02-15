'use client'

import { companyConfig } from '@/config/company'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function PrivacyPolicy() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 pb-16 bg-navy">
        <div className="container-brand px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-heading text-white mb-4">
                {t('Privacy Policy', 'Politique de Confidentialité')}
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
                    `${companyConfig.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you visit our website.`,
                    `${companyConfig.name} (« nous » ou « notre ») s'engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous traitons les informations lorsque vous visitez notre site web.`
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('2. Information We Collect', '2. Informations Collectées')}
                </h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  <strong className="text-white">
                    {t(
                      'We collect no personal data from visitors to our website.',
                      'Nous ne collectons aucune donnée personnelle des visiteurs de notre site web.'
                    )}
                  </strong>{' '}
                  {t(
                    'Our website is a static informational site that does not require user accounts, login credentials, or personal information.',
                    'Notre site web est un site informatif statique qui ne nécessite ni compte utilisateur, ni identifiants de connexion, ni informations personnelles.'
                  )}
                </p>
                <p className="text-white/60 leading-relaxed">
                  {t('When you visit our website, we do not:', 'Lorsque vous visitez notre site, nous ne :')}
                </p>
                <ul className="list-disc list-inside text-white/60 mt-2 space-y-1 ml-4">
                  <li>{t('Collect personal information (names, emails, phone numbers)', 'Collectons pas d\'informations personnelles (noms, e-mails, numéros de téléphone)')}</li>
                  <li>{t('Use tracking cookies or analytics', 'Utilisons pas de cookies de suivi ou d\'analyses')}</li>
                  <li>{t('Store any data about your visit', 'Stockons aucune donnée sur votre visite')}</li>
                  <li>{t('Monitor your browsing behavior', 'Surveillons pas votre comportement de navigation')}</li>
                  <li>{t('Require user registration or accounts', 'Exigeons pas d\'inscription ou de compte')}</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('3. Cookies', '3. Cookies')}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  <strong className="text-white">
                    {t('We do not use cookies on our website.', 'Nous n\'utilisons pas de cookies sur notre site web.')}
                  </strong>{' '}
                  {t(
                    'Our site is designed to function without any tracking or storage mechanisms. You can browse our website freely without concerns about cookie consent or tracking.',
                    'Notre site est conçu pour fonctionner sans aucun mécanisme de suivi ou de stockage. Vous pouvez parcourir notre site web librement sans vous soucier du consentement aux cookies ou du suivi.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('4. Third-Party Services', '4. Services Tiers')}
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
                    'These external services have their own privacy policies and data collection practices. We encourage you to review their policies before providing any personal information.',
                    'Ces services externes ont leurs propres politiques de confidentialité et pratiques de collecte de données. Nous vous encourageons à consulter leurs politiques avant de fournir des informations personnelles.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('5. Contact Information', '5. Informations de Contact')}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {t(
                    'If you have any questions about this Privacy Policy or our data practices, please contact us at:',
                    'Si vous avez des questions concernant cette Politique de Confidentialité ou nos pratiques en matière de données, veuillez nous contacter à :'
                  )}{' '}
                  <a href={`mailto:${companyConfig.contact.email}`} className="text-blue-light hover:text-blue underline">
                    {companyConfig.contact.email}
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('6. Changes to This Policy', '6. Modifications de cette Politique')}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {t(
                    'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.',
                    'Nous pouvons mettre à jour cette Politique de Confidentialité de temps en temps. Toute modification sera publiée sur cette page avec une date de révision mise à jour. Nous vous encourageons à consulter cette politique régulièrement.'
                  )}
                </p>
              </div>

              <div className="border-t border-white/[0.06] pt-6">
                <p className="text-sm text-white/30 text-center">
                  {t(
                    `This Privacy Policy is effective as of ${new Date().toLocaleDateString()}`,
                    `Cette Politique de Confidentialité est en vigueur depuis le ${new Date().toLocaleDateString()}`
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
