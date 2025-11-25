'use client';

import { useState } from 'react';
import {Link, usePathname, useRouter} from '@/i18n/routing';
import {useLocale, useTranslations} from 'next-intl';
import { useCart } from '@/contexts/CartContext';
import { useDemo } from '@/contexts/DemoContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  
  const t = useTranslations('header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { openCart, getCartCount } = useCart();
  const { showDemoMessage } = useDemo();
  
  const cartCount = getCartCount();

  const navLinks = [
    { name: t('nav.shop'), href: '/tienda' },
    { name: t('nav.varieties'), href: '/variedades' },
    { name: t('nav.about'), href: '/sobre-nosotros' },
    { name: t('nav.blog'), href: '/blog' },
    { name: t('nav.contact'), href: '/contacto' },
  ];
  
  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, {locale: newLocale});
    setIsLangMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-serif text-stone-800 tracking-tight">
              Oiltopía
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={showDemoMessage}
                className="text-sm font-medium text-stone-700 hover:text-amber-700 transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="text-stone-700 hover:text-amber-700 transition-colors duration-200 flex items-center gap-1"
                aria-label="Cambiar idioma"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                <span className="text-xs font-medium uppercase hidden sm:inline">{locale}</span>
              </button>
              
              {/* Language Dropdown */}
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-sm shadow-lg border border-stone-200 py-1 z-50">
                  <button
                    onClick={() => handleLanguageChange('es')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors ${
                      locale === 'es' ? 'text-amber-700 font-medium' : 'text-stone-700'
                    }`}
                  >
                    Español
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-stone-50 transition-colors ${
                      locale === 'en' ? 'text-amber-700 font-medium' : 'text-stone-700'
                    }`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>
            
            {/* Account Icon */}
            <button
              onClick={showDemoMessage}
              className="text-stone-700 hover:text-amber-700 transition-colors duration-200"
              aria-label={t('account')}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Cart Icon with Counter */}
            <button
              onClick={openCart}
              className="relative text-stone-700 hover:text-amber-700 transition-colors duration-200"
              aria-label={t('cart')}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-stone-700 hover:text-amber-700 transition-colors duration-200"
              aria-label="Menú"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-stone-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    setIsMenuOpen(false);
                    showDemoMessage();
                  }}
                  className="text-base font-medium text-stone-700 hover:text-amber-700 transition-colors duration-200 py-2 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
