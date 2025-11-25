'use client';

import { useCart } from '@/contexts/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useDemo } from '@/contexts/DemoContext';

const FREE_SHIPPING_THRESHOLD = 60;

export default function CartSidebar() {
  const { isOpen, closeCart, cartItems, updateQuantity, removeItem, getCartTotal } = useCart();
  const t = useTranslations('cart');
  const { showDemoMessage } = useDemo();

  const subtotal = getCartTotal();
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const hasEarnedFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingCost = hasEarnedFreeShipping ? 0 : 4.90;
  const total = subtotal + shippingCost;
  const progressPercentage = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={closeCart}
          />

          {/* Sidebar Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.4 }}
            className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-stone-50 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
              <h2 className="text-2xl font-serif text-stone-900">{t('title')}</h2>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-stone-200/50 rounded-full transition-colors"
                aria-label={t('close')}
              >
                <X className="w-5 h-5 text-stone-600" />
              </button>
            </div>

            {/* Shipping Progress Bar */}
            <div className="px-6 py-4 bg-white border-b border-stone-200">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  {hasEarnedFreeShipping ? (
                    <p className="text-emerald-700 font-medium">
                      ✓ {t('freeShipping')}
                    </p>
                  ) : (
                    <p className="text-stone-600">
                      {t('remainingForFreeShipping')} <span className="font-semibold text-stone-900">€{remainingForFreeShipping.toFixed(2)}</span> {t('forFreeShipping')}
                    </p>
                  )}
                </div>
                <div className="relative h-1.5 bg-stone-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`absolute top-0 left-0 h-full rounded-full ${
                      hasEarnedFreeShipping ? 'bg-emerald-600' : 'bg-amber-600'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-24 h-24 bg-stone-200 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-12 h-12 text-stone-400"
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
                  </div>
                  <p className="text-stone-500 font-serif text-lg">{t('emptyCart')}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      {/* Product Image */}
                      <div className="relative w-24 h-24 flex-shrink-0 bg-white rounded-lg overflow-hidden border border-stone-200">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-stone-900 text-base leading-tight mb-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-stone-500 mb-2">{item.variant}</p>
                        <p className="font-semibold text-stone-900 mb-3">
                          €{item.price.toFixed(2)}
                        </p>

                        <div className="flex items-center justify-between">
                          {/* Quantity Selector */}
                          <div className="flex items-center gap-3 bg-white border border-stone-300 rounded-md px-2 py-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="text-stone-600 hover:text-stone-900 transition-colors p-1"
                              aria-label={t('decreaseQuantity')}
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-sm font-medium text-stone-900 w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="text-stone-600 hover:text-stone-900 transition-colors p-1"
                              aria-label={t('increaseQuantity')}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Remove Button */}
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-stone-500 hover:text-red-600 transition-colors p-1"
                            aria-label={t('removeItem')}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-stone-200 bg-white px-6 py-5">
                {/* Subtotal & Shipping */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600">{t('subtotal')}</span>
                    <span className="font-medium text-stone-900">€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone-600">{t('shipping')}</span>
                    <span className={`font-medium ${hasEarnedFreeShipping ? 'text-emerald-700' : 'text-stone-900'}`}>
                      {hasEarnedFreeShipping ? t('free') : `€${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-lg font-serif pt-2 border-t border-stone-200">
                    <span className="text-stone-900">{t('total')}</span>
                    <span className="font-semibold text-stone-900">€{total.toFixed(2)}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={showDemoMessage}
                  className="w-full bg-[#768948] hover:bg-[#5f6f39] text-white font-medium py-4 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {t('checkout')}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
