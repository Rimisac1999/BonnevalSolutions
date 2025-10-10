/**
 * PORTFOLIO MINI-SHOWCASE COMPONENT
 * 
 * Featured website portfolio showcase for the homepage.
 * Displays 2 featured projects with a link to the full portfolio page.
 */

'use client'

import { motion } from 'framer-motion'
import { ArrowRightIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const featuredProjects = [
  {
    name: 'Demian Pictures',
    url: 'demianpictures.co.uk',
    description: 'Professional photography portfolio website with modern design and optimized image galleries.',
    tags: ['Web Design', 'Portfolio', 'Photography'],
    image: '/placeholder-project.svg', // Placeholder for now
  },
  {
    name: 'Bon Château',
    url: 'bonchateau.com',
    description: 'Elegant wine estate website with booking system and product showcase.',
    tags: ['E-commerce', 'Booking System', 'Luxury Brand'],
    image: '/placeholder-project.svg', // Placeholder for now
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-gradient-to-br from-secondary-50 to-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recent websites we've built for clients across different industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <GlobeAltIcon className="w-16 h-16 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Screenshot</p>
                  <p className="text-xs text-gray-500">Coming Soon</p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.name}
                </h3>
                
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary-600 hover:text-primary-700 mb-3 inline-flex items-center"
                >
                  {project.url}
                  <ArrowRightIcon className="w-3 h-3 ml-1" />
                </a>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Full Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/portfolio"
            className="btn-secondary inline-flex items-center group"
          >
            Discover More Projects
            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

