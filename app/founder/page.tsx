/**
 * FOUNDER PAGE
 * 
 * Dedicated page showcasing the founder's background, experience, and approach.
 * Highlights Africa experience and problem-defining methodology.
 */

'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  GlobeAltIcon,
  LightBulbIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { external } from '@/config/company'

const highlights = [
  {
    icon: GlobeAltIcon,
    title: 'International Experience',
    description: 'Developed problem-solving expertise across diverse cultural and business contexts.'
  },
  {
    icon: LightBulbIcon,
    title: 'Problem-Defining Approach',
    description: 'Emphasis on understanding challenges before proposing solutions.'
  },
  {
    icon: BriefcaseIcon,
    title: 'Cross-Industry Expertise',
    description: 'Experience spanning multiple sectors and business environments.'
  },
  {
    icon: AcademicCapIcon,
    title: 'Technical Foundation',
    description: 'Strong technical skills in AI, web development, and system integration.'
  }
]

export default function FounderPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium"
                >
                  <SparklesIcon className="w-4 h-4 mr-2" />
                  Meet the Founder
                </motion.div>

                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                  Casimir de Hauteclocque
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founder & Principal Consultant at Bonneval Solutions
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  With a unique background spanning diverse industries and international contexts, 
                  I bring a problem-first approach to digital transformation. My experience has taught 
                  me that the most effective solutions come from truly understanding the challenge before 
                  jumping to implementation.
                </p>
              </motion.div>

              {/* Right Column - Photo Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                      <SparklesIcon className="w-16 h-16 text-primary-600" />
                    </div>
                    <p className="text-gray-600">Professional Photo</p>
                    <p className="text-sm text-gray-500">Coming Soon</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Experience <span className="text-gradient">Highlights</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A unique blend of international experience and technical expertise
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-6 bg-gradient-to-br from-primary-50 to-white rounded-xl border border-gray-100"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Africa Story Section */}
        <section className="section-padding bg-gradient-to-br from-secondary-50 to-white">
          <div className="container-max max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                The <span className="text-gradient">Problem-First</span> Approach
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Working across diverse industries and complex environments taught me a crucial lesson: 
                the best solutions start with truly understanding the problem. Too often, consultants 
                jump straight to implementation without taking the time to define what they're actually solving.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                This problem-defining ability—developed through experience in challenging contexts—is at 
                the core of how Bonneval Solutions operates. Whether it's AI integration, web development, 
                or digital transformation, we start by understanding your specific challenges, not applying 
                one-size-fits-all solutions.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Small-to-medium businesses across diverse industries face unique challenges. My approach 
                combines technical expertise with the patience to understand context, constraints, and goals 
                before proposing solutions. This ensures we build systems that actually work for your business, 
                not just systems that look impressive on paper.
              </p>

              <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why This Matters
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Solutions tailored to your actual needs, not industry buzzwords</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Clear communication about what's possible and what's practical</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Implementation that considers your business context and constraints</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Long-term thinking about scalability and maintainability</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Let's Work Together
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Interested in working with someone who takes the time to understand your challenges? 
                Let's discuss how we can help your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={external.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Schedule a Call
                </a>
                <a
                  href="/#contact"
                  className="btn-secondary inline-flex items-center"
                >
                  Send a Message
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

