'use client';

import {Link} from '@/i18n/routing';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {useDemo} from '@/contexts/DemoContext';

export default function HeroSection() {
  const t = useTranslations('hero');
  const { showDemoMessage } = useDemo();
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 sm:py-28 md:py-12">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-12 md:gap-16 md:items-center">
          
          {/* Content - Left Column */}
          <div className="md:col-span-7 flex flex-col gap-8 sm:gap-10">
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-light text-neutral-900 leading-[1.1] tracking-tight order-1">
              {t('title')}<br />
              {t('titleExtra')}{' '}
              <span className="italic font-normal">{t('titleHighlight')}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 leading-relaxed font-light max-w-xl order-2">
              {t('subtitle')}<br />
              {t('subtitleSecond')}
            </p>

            {/* CTA Buttons - Premium Luxury Design */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4 order-3">
              {/* Primary Button - Filled with elegant hover */}
              <button
                onClick={showDemoMessage}
                className="group relative inline-flex items-center justify-center px-12 py-5 bg-[#768948] text-white overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_8px_24px_rgba(118,137,72,0.25)]"
              >
                <span className="relative z-10 font-serif text-lg tracking-[0.02em] font-normal transition-transform duration-500 group-hover:translate-y-[-1px]">
                  {t('cta.shop')}
                </span>
                {/* Elegant shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              
              {/* Secondary Button - Outlined with sophisticated border animation */}
              <button
                onClick={showDemoMessage}
                className="group relative inline-flex items-center justify-center px-12 py-5 bg-transparent text-[#768948] overflow-hidden transition-all duration-500"
              >
                {/* Animated border */}
                <span className="absolute inset-0 border border-[#768948]/30 transition-all duration-500 group-hover:border-[#768948]"></span>
                
                {/* Subtle underline that grows on hover */}
                <span className="absolute bottom-4 left-12 right-12 h-[1px] bg-[#768948] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></span>
                
                <span className="relative z-10 font-serif text-lg tracking-[0.02em] font-normal transition-all duration-500 group-hover:text-[#5f6d3a] group-hover:translate-y-[-1px]">
                  {t('cta.varieties')}
                </span>
              </button>
            </div>

            {/* Mobile-only product image shown under CTAs */}
            <div className="relative w-full aspect-[3/4] bg-neutral-50 rounded-sm overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] mt-6 order-4 md:hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-100 to-stone-100">
                <Image
                  src="/geminihero.png"
                  alt={t('imageAlt')}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Trust Indicators - Refined */}
            <div className="pt-12 border-t border-neutral-200 order-5 md:order-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Cosecha temprana */}
                <div className="flex flex-col items-start gap-3 group cursor-default">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#768948]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5" opacity="0.5" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[11px] font-medium text-neutral-900 uppercase tracking-[0.05em]">
                      {t('trust.earlyHarvest.title')}
                    </span>
                    <span className="block text-[9px] font-light text-neutral-500 italic leading-tight">
                      {t('trust.earlyHarvest.subtitle')}
                    </span>
                  </div>
                </div>

                {/* Prensado en frío */}
                <div className="flex flex-col items-start gap-3 group cursor-default">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#768948]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[11px] font-medium text-neutral-900 uppercase tracking-[0.05em]">
                      {t('trust.coldPressed.title')}
                    </span>
                    <span className="block text-[9px] font-light text-neutral-500 italic leading-tight">
                      {t('trust.coldPressed.subtitle')}
                    </span>
                  </div>
                </div>

                {/* Edición limitada */}
                <div className="flex flex-col items-start gap-3 group cursor-default">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#768948]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.3" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[11px] font-medium text-neutral-900 uppercase tracking-[0.05em]">
                      {t('trust.limitedEdition.title')}
                    </span>
                    <span className="block text-[9px] font-light text-neutral-500 italic leading-tight">
                      {t('trust.limitedEdition.subtitle')}
                    </span>
                  </div>
                </div>

                {/* Desde Andalucía */}
                <div className="flex flex-col items-start gap-3 group cursor-default">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#768948]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[11px] font-medium text-neutral-900 uppercase tracking-[0.05em]">
                      {t('trust.andalusia.title')}
                    </span>
                    <span className="block text-[9px] font-light text-neutral-500 italic leading-tight">
                      {t('trust.andalusia.subtitle')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Image - Right Column */}
          <div className="hidden md:block md:col-span-5 md:row-span-2 relative order-4 md:order-2 -translate-y-12">
            <div className="relative aspect-[3/4] bg-neutral-50 rounded-sm overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              {/* Placeholder for product image */}
            
                <Image
                  src="/geminihero.png"
                  alt={t('imageAlt')}
                  fill
                  className="object-cover"
                  priority
                />
               
           

              {/* Subtle premium badge */}
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg border border-neutral-200/50">
                <p className="text-xs font-medium text-neutral-900 uppercase tracking-widest">{t('badge')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
