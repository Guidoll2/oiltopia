'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useDemo } from '@/contexts/DemoContext';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const { showDemoMessage } = useDemo();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Oiltopia Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h3 className="text-2xl font-serif text-white">Oiltopía</h3>
            </div>
            <p className="text-stone-400 leading-relaxed max-w-md font-light">
              {t('description')}
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-5">
            <h4 className="text-white font-serif text-lg mb-6">{t('contact.title')}</h4>
            
            {/* Address */}
            <div className="flex gap-3 text-sm">
              <MapPin className="w-5 h-5 text-stone-500 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-stone-400">Ctra. Cañete de las Torres, km 0,800</p>
                <p className="text-stone-400">14640 Villa del Río (Córdoba)</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 text-sm">
              <Phone className="w-5 h-5 text-stone-500 flex-shrink-0" />
              <div className="space-y-1">
                <a 
                  href="tel:+34639912438"
                  className="text-stone-400 hover:text-white transition-colors block"
                >
                  +34 639 91 24 38
                </a>
                <a 
                  href="tel:+34957177873"
                  className="text-stone-400 hover:text-white transition-colors block"
                >
                  957 177 873
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3 text-sm">
              <Mail className="w-5 h-5 text-stone-500 flex-shrink-0" />
              <a 
                href="mailto:info@oiltopia.es"
                className="text-stone-400 hover:text-white transition-colors"
              >
                info@oiltopia.es
              </a>
            </div>
          </div>

          {/* Legal Column */}
          <div className="space-y-5">
            <h4 className="text-white font-serif text-lg mb-6">{t('legal.title')}</h4>
            <nav className="flex flex-col space-y-3">
              <button
                onClick={showDemoMessage}
                className="text-sm text-stone-400 hover:text-white transition-colors text-left"
              >
                {t('legal.legalNotice')}
              </button>
              <button
                onClick={showDemoMessage}
                className="text-sm text-stone-400 hover:text-white transition-colors text-left"
              >
                {t('legal.qualityPolicy')}
              </button>
              <button
                onClick={showDemoMessage}
                className="text-sm text-stone-400 hover:text-white transition-colors text-left"
              >
                {t('legal.privacyPolicy')}
              </button>
              <button
                onClick={showDemoMessage}
                className="text-sm text-stone-400 hover:text-white transition-colors text-left"
              >
                {t('legal.cookiesPolicy')}
              </button>
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800 my-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-stone-500 font-light">
            © {new Date().getFullYear()} Oiltopía. {t('rights')}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/aceiteoiltopia/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-800 hover:bg-[#768948] flex items-center justify-center transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://wa.me/34639912438"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-800 hover:bg-[#768948] flex items-center justify-center transition-all duration-300 group"
              aria-label="WhatsApp"
            >
              <svg
                className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
