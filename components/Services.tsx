'use client'

import { motion } from 'framer-motion'
import { 
  CogIcon, 
  ChatBubbleLeftRightIcon, 
  DocumentTextIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'
import { external } from '@/config/company'

const services = [
  {
    name: 'AI Automation',
    description: 'Voice & text AI agents, social media automation, outreach campaigns, and intelligent workflow solutions.',
    icon: ChatBubbleLeftRightIcon,
    features: ['Voice & text AI agents', 'Social media automation', 'Outreach campaigns', 'Process automation'],
    color: 'primary'
  },
  {
    name: 'Website Development',
    description: 'Custom-built modern websites using Next.js, React, and other cutting-edge frameworks.',
    icon: ComputerDesktopIcon,
    features: ['Modern frameworks', 'Responsive design', 'SEO optimized', 'Fast performance'],
    color: 'secondary'
  },
  {
    name: 'Website Migration',
    description: 'Migrate from WordPress, Shopify, or legacy platforms to modern, maintainable solutions.',
    icon: WrenchScrewdriverIcon,
    features: ['Platform migration', 'Data preservation', 'SEO continuity', 'Performance boost'],
    color: 'primary'
  },
  {
    name: 'ERP Solutions',
    description: 'Small-scale ERP development, implementation advice, and integration for growing businesses.',
    icon: CogIcon,
    features: ['Custom ERP development', 'Implementation advice', 'System integration', 'Training & support'],
    color: 'secondary'
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions from AI automation to modern web development and ERP systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-${service.color}-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {service.name}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className={`w-2 h-2 bg-${service.color}-500 rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a
                  href="#contact"
                  className={`inline-flex items-center text-${service.color}-600 hover:text-${service.color}-700 font-medium text-sm group-hover:underline`}
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help with AI automation, modern web development, or digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={external.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center"
              >
                Schedule a Consultation
              </a>
              <a
                href="#contact"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Send a Message
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 