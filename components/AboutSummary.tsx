'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import {motion} from 'framer-motion';
import Image from 'next/image';

export default function AboutSummary() {
  const t = useTranslations('aboutSummary');

  const certifications = [
    {id: 1, name: 'IFS Food', logo: '/ifs.png'},
    {id: 2, name: 'ISO 14001', logo: '/iso140001.jpg'},
    {id: 3, name: 'GlobalGAP', logo: '/global2.png'},
    {id: 4, name: 'Agricultura Ecológica', logo: '/hoja.png'},
    {id: 5, name: 'Halal', logo: '/halal.webp'},
  ];

  const fadeInUp = {
    hidden: {opacity: 0, y: 30},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const imageVariants = {
    hidden: {opacity: 0, scale: 0.95},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Split Screen Section */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content - Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: '-100px'}}
            variants={fadeInUp}
            className="space-y-8"
          >
            {/* Kicker */}
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-medium text-[#768948] uppercase tracking-[0.15em]">
                {t('kicker')}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-neutral-900 tracking-tight leading-tight">
              {t('title')}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 font-light leading-relaxed max-w-xl">
              {t('description')}
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/sobre-nosotros"
                className="group inline-flex items-center gap-3 px-10 py-4 bg-[#768948] text-white overflow-hidden relative transition-all duration-500 ease-out hover:shadow-[0_8px_24px_rgba(118,137,72,0.25)]"
              >
                <span className="relative z-10 font-serif text-base tracking-[0.02em] font-normal transition-transform duration-500 group-hover:translate-x-[-4px]">
                  {t('cta')}
                </span>
                <svg
                  className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                {/* Elegant shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Link>
            </div>
          </motion.div>

          {/* Image - Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: '-100px'}}
            variants={imageVariants}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <Image
                src="/olivares2.jpg"
                alt={t('imageAlt')}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certifications Block */}
      <div className="relative bg-stone-50 border-y border-neutral-200/50">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
          {/* Section Title */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1] as const}}
            className="text-center mb-12 sm:mb-16"
          >
            <h3 className="text-xs sm:text-sm font-medium text-neutral-900 uppercase tracking-[0.15em]">
              {t('certifications.title')}
            </h3>
          </motion.div>

          {/* Logos Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: '-100px'}}
            transition={{staggerChildren: 0.1, delayChildren: 0.2}}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-center"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={fadeInUp}
                className="flex items-center justify-center group cursor-default"
              >
                <div className="relative w-full h-20 sm:h-24 flex items-center justify-center px-4 transition-all duration-500 group-hover:scale-105">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    width={120}
                    height={80}
                    className="object-contain max-h-full w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-500 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
