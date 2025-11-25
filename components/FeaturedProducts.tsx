'use client';

import {Link} from '@/i18n/routing';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {useDemo} from '@/contexts/DemoContext';

interface Product {
  id: string;
  nameKey: string;
  varietyKey: string;
  price: string;
  image: string;
  descriptionKey: string;
}

export default function FeaturedProducts() {
  const t = useTranslations('featuredProducts');
  const { showDemoMessage } = useDemo();
  const products: Product[] = [
    {
      id: '1',
      nameKey: 'products.arbequina.name',
      varietyKey: 'products.arbequina.variety',
      price: '24,90',
      image: '/arbequina.png',
      descriptionKey: 'products.arbequina.description',
    },
    {
      id: '2',
      nameKey: 'products.picual.name',
      varietyKey: 'products.picual.variety',
      price: '28,90',
      image: '/picual.png',
      descriptionKey: 'products.picual.description',
    },
    {
      id: '3',
      nameKey: 'products.arbosana.name',
      varietyKey: 'products.arbosana.variety',
      price: '26,90',
      image: '/arbosana.png',
      descriptionKey: 'products.arbosana.description',
    },
    {
      id: '4',
      nameKey: 'products.blend.name',
      varietyKey: 'products.blend.variety',
      price: '34,90',
      image: '/bio500.png',
      descriptionKey: 'products.blend.description',
    },
  ];

  return (
    <section className="bg-neutral-50 py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-neutral-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-neutral-600 font-light max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-sm overflow-hidden shadow-[0_2px_12px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgb(0,0,0,0.12)] transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-neutral-100 overflow-hidden">
                {/* Placeholder - Replace with actual product images */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-100 to-stone-100">
                  
                  <Image
                    src={product.image}
                    alt={t(product.nameKey)}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-300"
                  />
              
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-neutral-900 tracking-tight">
                    {t(product.nameKey)}
                  </h3>
                  <p className="text-sm text-neutral-500 font-light">
                    {t(product.varietyKey)}
                  </p>
                </div>

                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  {t(product.descriptionKey)}
                </p>

                <div className="flex items-end justify-between pt-2">
                  <div>
                    <span className="text-2xl font-light text-neutral-900">
                      {product.price}€
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={showDemoMessage}
                  className="block w-full text-center px-6 py-3 bg-neutral-900 text-white text-sm font-medium tracking-wide hover:bg-neutral-800 transition-colors duration-200"
                >
                  {t('addToCart')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Link */}
        <div className="text-center mt-16">
          <button
            onClick={showDemoMessage}
            className="inline-flex items-center gap-2 text-neutral-900 font-medium hover:text-neutral-600 transition-colors duration-200 group"
          >
            <span className="border-b border-neutral-900 group-hover:border-neutral-600">
              {t('viewAll')}
            </span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
