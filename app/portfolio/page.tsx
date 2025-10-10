/**
 * PORTFOLIO PAGE
 * 
 * Full portfolio showcase page displaying all website projects.
 * Includes featured projects and coming soon projects.
 */

'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRightIcon, GlobeAltIcon, CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/outline'
import { external } from '@/config/company'

const projects = [
  {
    name: 'Demian Pictures',
    url: 'demianpictures.co.uk',
    description: 'Professional photography portfolio website featuring a clean, modern design with optimized image galleries and responsive layouts. Built to showcase visual work beautifully across all devices.',
    tags: ['Web Design', 'Portfolio', 'Photography', 'Responsive'],
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    status: 'live',
  },
  {
    name: 'Bon Château',
    url: 'bonchateau.com',
    description: 'Elegant wine estate website with integrated booking system and product showcase. Features sophisticated design reflecting the luxury brand, with e-commerce capabilities and content management.',
    tags: ['E-commerce', 'Booking System', 'Luxury Brand', 'CMS'],
    tech: ['Next.js', 'Stripe', 'CMS Integration'],
    status: 'live',
  },
  {
    name: 'Microneagle',
    url: 'microneagle.com',
    description: 'Advanced microservices platform with comprehensive dashboard and analytics. Currently in final development stages with launch planned soon.',
    tags: ['SaaS', 'Dashboard', 'Analytics', 'Enterprise'],
    tech: ['Next.js', 'TypeScript', 'API Integration'],
    status: 'coming-soon',
  },
]

export default function PortfolioPage() {
  const liveProjects = projects.filter(p => p.status === 'live')
  const upcomingProjects = projects.filter(p => p.status === 'coming-soon')

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 sm:pt-28">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-secondary-50">
          <div className="container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-800 text-sm font-medium"
              >
                <CodeBracketIcon className="w-4 h-4 mr-2" />
                Our Work
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Website <span className="text-gradient">Portfolio</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Modern, responsive websites built with cutting-edge technologies. 
                Each project tailored to client needs and industry requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Live Projects */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Live <span className="text-gradient">Projects</span>
              </h2>
              <p className="text-xl text-gray-600">
                Websites currently online and serving real users
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {liveProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center p-8 z-10">
                      <GlobeAltIcon className="w-20 h-20 text-primary-600 mx-auto mb-3" />
                      <p className="text-gray-600 font-medium">Website Screenshot</p>
                      <p className="text-sm text-gray-500">Coming Soon</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-200/50 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {project.name}
                      </h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Live
                      </span>
                    </div>
                    
                    <a
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 mb-4 inline-flex items-center font-medium"
                    >
                      {project.url}
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </a>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm text-gray-500 mb-2">Built with:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Projects */}
        {upcomingProjects.length > 0 && (
          <section className="section-padding bg-gradient-to-br from-secondary-50 to-white">
            <div className="container-max">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Coming <span className="text-gradient">Soon</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Projects currently in development
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {upcomingProjects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 opacity-90"
                  >
                    {/* Project Image Placeholder */}
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                      <div className="text-center p-8">
                        <SparklesIcon className="w-20 h-20 text-gray-400 mx-auto mb-3" />
                        <p className="text-gray-500 font-medium">In Development</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-2xl font-semibold text-gray-900">
                          {project.name}
                        </h3>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                          Coming Soon
                        </span>
                      </div>
                      
                      <p className="text-gray-500 mb-4 inline-flex items-center font-medium">
                        {project.url}
                      </p>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-sm text-gray-500 mb-2">Tech stack:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

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
                Ready to Build Your Website?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Whether you need a new website, want to migrate from WordPress, or need a custom solution, 
                we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={external.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center"
                >
                  Schedule a Consultation
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

