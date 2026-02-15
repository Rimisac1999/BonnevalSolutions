'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Hero gradient background (§3.5) */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Subtle glow accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glow opacity-50 -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/[0.03] blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative section-padding pt-32 pb-24">
        <div className="container-brand text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            {/* Overline badge */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-pill bg-blue/10 border border-blue/20 text-blue-light text-xs font-semibold uppercase tracking-wider"
            >
              {t('AI-Powered Business Automation', 'Automatisation IA pour Entreprises')}
            </motion.p>

            {/* H1 — Space Grotesk via font-heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading text-white leading-tight"
            >
              {t('Build smarter systems.', 'Des systèmes plus intelligents.')}{' '}
              <span className="text-gradient">{t('Grow faster.', 'Croître plus vite.')}</span>
            </motion.h1>

            {/* Subhead — Inter 20px, white at 70% opacity, max-w 600px */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-[600px] mx-auto"
            >
              {t(
                'We build websites and integrate AI into your business — lead generation, voice agents, chatbots, and automation that delivers measurable results.',
                'Nous construisons des sites web et intégrons l\'IA dans votre entreprise — génération de leads, agents vocaux, chatbots et automatisation qui livre des résultats mesurables.'
              )}
            </motion.p>

            {/* CTA buttons — primary gradient + ghost secondary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#contact" className="btn-primary group text-base">
                {t('Get Started', 'Commencer')}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="btn-secondary text-base">
                {t('Our Services', 'Nos Services')}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
