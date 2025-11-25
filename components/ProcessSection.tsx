'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import Image from 'next/image';

interface ProcessStep {
  id: number;
  titleKey: string;
  descriptionKey: string;
  image: string;
}

export default function ProcessSection() {
  const t = useTranslations('process');

  const steps: ProcessStep[] = [
    {
      id: 1,
      titleKey: 'steps.harvest.title',
      descriptionKey: 'steps.harvest.description',
      image: '/manos.png',
    },
    {
      id: 2,
      titleKey: 'steps.coldPress.title',
      descriptionKey: 'steps.coldPress.description',
      image: '/prensado.png',
    },
    {
      id: 3,
      titleKey: 'steps.bottling.title',
      descriptionKey: 'steps.bottling.description',
      image: '/envasado.png',
    },
    {
      id: 4,
      titleKey: 'steps.delivery.title',
      descriptionKey: 'steps.delivery.description',
      image: '/envios.png',
    },
  ];

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

  const textVariants = {
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

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32">
        {/* Section Header */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, margin: '-100px'}}
          transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1] as const}}
          className="text-center mb-16 sm:mb-20 lg:mb-28"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-neutral-900 tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Editorial Zig-Zag Layout */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-32">
          {steps.map((step, index) => {
            const isEven = index % 2 === 1;
            const stepNumber = String(step.id).padStart(2, '0');

            return (
              <div
                key={step.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Text Content */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, margin: '-100px'}}
                  variants={textVariants}
                  className={`relative space-y-6 ${isEven ? 'lg:col-start-2' : ''}`}
                >
                  {/* Large Step Number Background */}
                  <div className="absolute -top-8 -left-4 sm:-left-8 text-[120px] sm:text-[140px] lg:text-[160px] font-serif font-light text-neutral-200/40 leading-none select-none pointer-events-none">
                    {stepNumber}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div className="inline-block">
                      <span className="text-sm font-medium text-[#768948] uppercase tracking-[0.15em]">
                        Paso {stepNumber}
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-neutral-900 tracking-tight leading-tight">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-lg">
                      {t(step.descriptionKey)}
                    </p>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{once: true, margin: '-100px'}}
                  variants={imageVariants}
                  className={`relative ${isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                    <Image
                      src={step.image}
                      alt={t(step.titleKey)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Subtle overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
