'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeSimple, Phone, MapPin } from '@phosphor-icons/react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getCompanyInfo, companyConfig } from '@/config/company'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Bonneval Solutions Website',
          subject: `New contact from ${formData.name}`,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const contactItems = [
    { icon: EnvelopeSimple, label: 'Email', value: getCompanyInfo.contactEmail(), href: `mailto:${getCompanyInfo.contactEmail()}` },
    { icon: Phone, label: t('Phone', 'Téléphone'), value: getCompanyInfo.contactPhone(), href: `tel:${getCompanyInfo.contactPhone()}` },
    { icon: MapPin, label: t('Location', 'Localisation'), value: companyConfig.contact.location, href: null },
  ]

  return (
    <section id="contact" className="section-padding bg-navy">
      <div className="container-brand">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-white mb-4">
            {t('Let\'s Talk', 'Parlons-en')}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {t(
              'Have a project in mind? Tell us about it and we\'ll get back to you within 24 hours.',
              'Vous avez un projet en tête ? Parlez-nous en et nous vous répondrons sous 24 heures.'
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-success/10 border border-success/30 rounded-card">
                <p className="text-success font-medium">
                  {t('Message sent! We\'ll be in touch soon.', 'Message envoyé ! Nous vous recontacterons bientôt.')}
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red/10 border border-red/30 rounded-card">
                <p className="text-red-light font-medium">
                  {t('Something went wrong. Please try again.', 'Une erreur est survenue. Veuillez réessayer.')}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-1.5">
                    {t('Name', 'Nom')} *
                  </label>
                  <input
                    type="text" id="name" name="name" required
                    value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface-1 border border-white/[0.06] text-white placeholder-white/30 rounded-input focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                    placeholder={t('Your name', 'Votre nom')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email" id="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface-1 border border-white/[0.06] text-white placeholder-white/30 rounded-input focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-1.5">
                  {t('Message', 'Message')} *
                </label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface-1 border border-white/[0.06] text-white placeholder-white/30 rounded-input focus:ring-2 focus:ring-gold focus:border-transparent transition-colors resize-none"
                  placeholder={t('Tell us about your project...', 'Parlez-nous de votre projet...')}
                />
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto disabled:opacity-50">
                {isSubmitting ? t('Sending...', 'Envoi...') : t('Send Message', 'Envoyer')}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center">
                  <item.icon size={20} weight="duotone" className="text-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/40 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-white hover:text-blue-light transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
