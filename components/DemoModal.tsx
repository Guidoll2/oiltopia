'use client';

import { useDemo } from '@/contexts/DemoContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function DemoModal() {
  const { isOpen, closeDemoMessage } = useDemo();
  const t = useTranslations('demo');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeDemoMessage}
          >
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.3 }}
              className="relative bg-stone-50 rounded-2xl shadow-2xl max-w-lg w-full p-8 md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeDemoMessage}
                className="absolute top-4 right-4 p-2 hover:bg-stone-200/50 rounded-full transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5 text-stone-600" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-amber-100">
                  <Image
                    src="/logo.png"
                    alt="Developer Logo"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-serif text-stone-900">
                  {t('title')}
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  {t('description')}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/34675497068?text=Hola, me gustaría más información sobre el desarrollo completo del proyecto Oiltopia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1fb855] text-white font-medium py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {t('contactButton')} (WhatsApp)
                </a>

                {/* Email Button */}
                <a
                  href="mailto:guido.llaurado@gmail.com?subject=Consulta sobre proyecto Oiltopia&body=Hola Guido, me gustaría más información sobre el desarrollo completo del proyecto Oiltopia."
                  className="flex items-center justify-center gap-2 w-full bg-[#768948] hover:bg-[#5f6f39] text-white font-medium py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t('contactButton')} (Email)
                </a>

                {/* Secondary Button */}
                <button
                  onClick={closeDemoMessage}
                  className="w-full text-stone-600 hover:text-stone-900 font-medium py-3 transition-colors text-center"
                >
                  {t('continueButton')}
                </button>
              </div>

              {/* Optional Footer Note */}
              <p className="mt-6 text-xs text-center text-stone-500">
                {t('footerNote')}
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
