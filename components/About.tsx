'use client'

import { motion } from 'framer-motion'
import { 
  BuildingOfficeIcon, 
  UserGroupIcon, 
  LightBulbIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const targetClients = [
  'Small-to-medium businesses',
  'Companies needing digital transformation',
  'Businesses migrating from legacy platforms',
  'Organizations seeking AI integration',
  'Teams requiring custom solutions',
  'Growing companies across diverse industries'
]

const approach = [
  {
    title: 'Problem Definition',
    description: 'Understanding your unique challenges before jumping to solutions.'
  },
  {
    title: 'Solution Design',
    description: 'Crafting practical, scalable approaches tailored to your business context.'
  },
  {
    title: 'Implementation',
    description: 'Hands-on development and deployment with clear communication.'
  },
  {
    title: 'Support & Growth',
    description: 'Ongoing guidance to ensure solutions evolve with your business.'
  }
]

const technologies = [
  'Voiceflow & ChatGPT',
  'n8n Workflow Automation',
  'Airtable & Notion',
  'Custom AI Solutions',
  'API Integrations',
  'Data Analytics Platforms'
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-secondary-50 to-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-100 text-secondary-800 text-sm font-medium mb-6"
              >
                <LightBulbIcon className="w-4 h-4 mr-2" />
                About Bonneval Solutions
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Your Partner in{' '}
                <span className="text-gradient">Digital Transformation</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Bonneval Solutions brings a unique approach to digital consulting, combining technical expertise 
                with problem-defining skills developed across diverse industries. We specialize in helping 
                small-to-medium businesses navigate AI integration, web development, and digital transformation.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Our methodology emphasizes understanding your specific challenges first—a skill honed through 
                experience in complex environments. We deliver practical, scalable solutions tailored to your 
                business context, not one-size-fits-all templates.
              </p>
            </div>

            {/* Target Clients */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <BuildingOfficeIcon className="w-5 h-5 mr-2 text-primary-600" />
                Target Clients
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {targetClients.map((client, index) => (
                  <motion.div
                    key={client}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <CheckCircleIcon className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{client}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Approach & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Our Approach */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <UserGroupIcon className="w-5 h-5 mr-2 text-primary-600" />
                Our Approach
              </h3>
              <div className="space-y-4">
                {approach.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-primary-600">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-primary-300 hover:text-primary-700 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Meet the Founder
              </h4>
              <p className="text-gray-600 mb-4">
                Learn more about the experience and approach behind Bonneval Solutions.
              </p>
              <a
                href="/founder"
                className="btn-secondary w-full text-center"
              >
                Founder Story
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 