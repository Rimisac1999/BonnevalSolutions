'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  const steps = [
    {
      num: '01',
      title: t('Listen', 'Écouter'),
      desc: t('We start by understanding your challenge — no jargon, no assumptions.', 'Nous commençons par comprendre votre défi — sans jargon, sans suppositions.'),
    },
    {
      num: '02',
      title: t('Design', 'Concevoir'),
      desc: t('We map out the right solution using the best tools for the job.', 'Nous concevons la bonne solution en utilisant les meilleurs outils pour le travail.'),
    },
    {
      num: '03',
      title: t('Build', 'Construire'),
      desc: t('We deliver a working solution — tested, integrated, and ready to go.', 'Nous livrons une solution fonctionnelle — testée, intégrée et prête à l\'emploi.'),
    },
    {
      num: '04',
      title: t('Support', 'Accompagner'),
      desc: t('We stick around to optimize, iterate, and make sure it keeps delivering value.', 'Nous restons pour optimiser, itérer et nous assurer que la valeur est au rendez-vous.'),
    },
  ]

  return (
    <section id="about" className="section-padding bg-surface-1">
      <div className="container-brand">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-white mb-6">
              {t('Built to Solve Problems', 'Conçu pour Résoudre des Problèmes')}
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              {t(
                'Bonneval Solutions builds practical systems for real business challenges. Whether you need a simple website or a complex AI-powered automation, we bring the same focus: understand the problem, then solve it well.',
                'Bonneval Solutions construit des systèmes pratiques pour de vrais défis business. Que vous ayez besoin d\'un site web simple ou d\'un système d\'automatisation complexe alimenté par l\'IA, nous apportons la même rigueur : comprendre le problème, puis le résoudre efficacement.'
              )}
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              {t(
                'Based in France, working globally. We combine technical expertise with a straightforward approach — no bloat, no buzzwords, just systems that work.',
                'Basés en France, nous travaillons à l\'international. Nous combinons expertise technique et approche directe — pas de superflu, pas de jargon, juste des systèmes qui fonctionnent.'
              )}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-bold text-gold">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-white/50">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
