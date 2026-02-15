'use client'

import { companyConfig } from '@/config/company'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TermsOfService() {
  const { t } = useLanguage()
  const name = companyConfig.name

  return (
    <>
      <Header />
      <div className="min-h-screen pt-24 pb-16 bg-navy">
        <div className="container-brand px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-heading text-white mb-4">
                {t('Terms of Service', 'Conditions Générales d\'Utilisation')}
              </h1>
              <p className="text-lg text-white/50">
                {t('Last updated', 'Dernière mise à jour')}: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="brand-card space-y-8">
              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('1. Acceptance of Terms', '1. Acceptation des Conditions')}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {t(
                    `By accessing and using the ${name} website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
                    `En accédant et en utilisant le site web de ${name}, vous acceptez d'être lié par les termes et dispositions de cet accord. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce service.`
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('2. Use License', '2. Licence d\'Utilisation')}
                </h2>
                <p className="text-white/60 leading-relaxed mb-4">
                  {t(
                    `Permission is granted to temporarily download one copy of the materials (information or software) on ${name}'s website for personal, non-commercial transitory viewing only.`,
                    `La permission est accordée de télécharger temporairement une copie des documents (informations ou logiciels) sur le site web de ${name} pour un usage personnel et non-commercial uniquement.`
                  )}
                </p>
                <p className="text-white/60 leading-relaxed">
                  {t(
                    'This is the grant of a license, not a transfer of title, and under this license you may not:',
                    'Il s\'agit de l\'octroi d\'une licence, et non d\'un transfert de propriété. En vertu de cette licence, vous ne pouvez pas :'
                  )}
                </p>
                <ul className="list-disc list-inside text-white/60 mt-2 space-y-1 ml-4">
                  <li>{t('Modify or copy the materials', 'Modifier ou copier les documents')}</li>
                  <li>{t('Use the materials for any commercial purpose or for any public display', 'Utiliser les documents à des fins commerciales ou pour toute présentation publique')}</li>
                  <li>{t('Attempt to reverse engineer any software contained on the website', 'Tenter de rétro-ingénierer tout logiciel contenu sur le site')}</li>
                  <li>{t('Remove any copyright or other proprietary notations from the materials', 'Supprimer tout droit d\'auteur ou autre mention de propriété des documents')}</li>
                  <li>{t('Transfer the materials to another person or "mirror" the materials on any other server', 'Transférer les documents à une autre personne ou « copier » les documents sur un autre serveur')}</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('3. Disclaimer', '3. Avertissement')}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {t(
                    `The materials on ${name}'s website are provided on an 'as is' basis. ${name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`,
                    `Les documents sur le site web de ${name} sont fournis « en l'état ». ${name} ne donne aucune garantie, expresse ou implicite, et décline par la présente toute autre garantie, y compris, sans limitation, les garanties implicites de qualité marchande, d'adéquation à un usage particulier ou de non-violation de la propriété intellectuelle.`
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('4. Limitations', '4. Limitations')}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {t(
                    `In no event shall ${name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ${name}'s website.`,
                    `En aucun cas ${name} ou ses fournisseurs ne pourront être tenus responsables de tout dommage (y compris, sans limitation, les dommages liés à la perte de données ou de bénéfices, ou à l'interruption d'activité) découlant de l'utilisation ou de l'impossibilité d'utiliser les documents sur le site de ${name}.`
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('5. Accuracy of Materials', '5. Exactitude des Documents')}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {t(
                    `The materials appearing on ${name}'s website could include technical, typographical, or photographic errors. ${name} does not warrant that any of the materials on its website are accurate, complete, or current. ${name} may make changes to the materials contained on its website at any time without notice.`,
                    `Les documents figurant sur le site web de ${name} peuvent contenir des erreurs techniques, typographiques ou photographiques. ${name} ne garantit pas que les documents de son site web soient exacts, complets ou à jour. ${name} peut apporter des modifications aux documents de son site à tout moment sans préavis.`
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('6. Links', '6. Liens')}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {t(
                    `${name} has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ${name} of the site. Use of any such linked website is at the user's own risk.`,
                    `${name} n'a pas examiné tous les sites liés à son site web et n'est pas responsable du contenu de ces sites liés. L'inclusion d'un lien n'implique pas l'approbation du site par ${name}. L'utilisation de tout site lié se fait aux risques de l'utilisateur.`
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('7. Modifications', '7. Modifications')}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {t(
                    `${name} may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.`,
                    `${name} peut réviser ces conditions d'utilisation à tout moment sans préavis. En utilisant ce site web, vous acceptez d'être lié par la version en vigueur de ces Conditions Générales d'Utilisation.`
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('8. Governing Law', '8. Droit Applicable')}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {t(
                    'These terms and conditions are governed by and construed in accordance with the laws of France and you irrevocably submit to the exclusive jurisdiction of the courts in that location.',
                    'Ces conditions sont régies et interprétées conformément aux lois françaises et vous vous soumettez irrévocablement à la juridiction exclusive des tribunaux français.'
                  )}
                </p>
              </div>

              <div>
                <h2 className="font-heading text-white mb-4">
                  {t('9. Contact Information', '9. Informations de Contact')}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {t(
                    'If you have any questions about these Terms of Service, please contact us at:',
                    'Si vous avez des questions concernant ces Conditions Générales d\'Utilisation, veuillez nous contacter à :'
                  )}{' '}
                  <a href={`mailto:${companyConfig.contact.email}`} className="text-blue-light hover:text-blue underline">
                    {companyConfig.contact.email}
                  </a>
                </p>
              </div>

              <div className="border-t border-white/[0.06] pt-6">
                <p className="text-sm text-white/30 text-center">
                  {t(
                    `These Terms of Service are effective as of ${new Date().toLocaleDateString()}`,
                    `Ces Conditions Générales d'Utilisation sont en vigueur depuis le ${new Date().toLocaleDateString()}`
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
