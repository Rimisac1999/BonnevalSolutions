'use client'

import { motion } from 'framer-motion'
import {
  Globe,
  Megaphone,
  GearSix,
  ChatCircleDots,
  Phone,
  Wrench,
  MagnifyingGlass,
} from '@phosphor-icons/react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Globe,
      name: t('Websites & Web Apps', 'Sites Web & Applications'),
      description: t(
        'Modern, fast, responsive websites and web apps built to convert visitors into customers.',
        'Sites web et applications modernes, rapides et responsives conçus pour convertir les visiteurs en clients.'
      ),
    },
    {
      icon: Megaphone,
      name: t('Digital Marketing', 'Marketing Digital'),
      description: t(
        'Strategic digital marketing campaigns that grow your online presence and drive real results.',
        'Campagnes de marketing digital stratégiques qui développent votre présence en ligne et génèrent des résultats concrets.'
      ),
    },
    {
      icon: GearSix,
      name: t('Automation', 'Automatisation'),
      description: t(
        'Streamline repetitive tasks and complex workflows with intelligent automation tools.',
        'Simplifiez les tâches répétitives et les workflows complexes avec des outils d\'automatisation intelligents.'
      ),
    },
    {
      icon: ChatCircleDots,
      name: t('AI Agents & Chatbots', 'Agents IA & Chatbots'),
      description: t(
        'Custom AI agents and chatbots that handle customer service, lead generation, and internal processes.',
        'Agents IA et chatbots personnalisés pour le service client, la génération de leads et les processus internes.'
      ),
    },
    {
      icon: Phone,
      name: t('Voice Agents', 'Agents Vocaux'),
      description: t(
        'AI-powered voice agents for phone support, appointment booking, and automated outreach.',
        'Agents vocaux alimentés par l\'IA pour le support téléphonique, la prise de rendez-vous et la prospection automatisée.'
      ),
    },
    {
      icon: Wrench,
      name: t('Custom Solutions', 'Solutions Sur Mesure'),
      description: t(
        'Bespoke digital tools and integrations tailored to your specific business challenges.',
        'Outils numériques et intégrations sur mesure adaptés à vos défis métier spécifiques.'
      ),
    },
    {
      icon: MagnifyingGlass,
      name: t('Local SEO', 'SEO Local'),
      description: t(
        'Get found by local customers. Optimize your Google presence and dominate local search results.',
        'Faites-vous trouver par les clients locaux. Optimisez votre présence Google et dominez les résultats de recherche locaux.'
      ),
    },
  ]

  return (
    <section id="services" className="section-padding bg-navy">
      <div className="container-brand">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-white mb-4">
            {t('What We Build', 'Ce Que Nous Construisons')}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t(
              'End-to-end digital systems designed to solve real problems and grow your business.',
              'Systèmes numériques de bout en bout conçus pour résoudre de vrais problèmes et développer votre entreprise.'
            )}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="brand-card group"
            >
              <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold transition-colors duration-300">
                <service.icon size={22} weight="duotone" className="text-gold group-hover:text-navy transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-white mb-2">{service.name}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
