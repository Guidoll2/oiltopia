# Oiltopía - Configuración de Internacionalización (i18n)

Este proyecto utiliza `next-intl` para soporte multiidioma con español e inglés.

## 🌐 Idiomas Soportados

- **Español (es)** - Idioma por defecto
- **English (en)**

## 📁 Estructura de Archivos

```
oiltopia/
├── app/
│   └── [locale]/          # Páginas con routing dinámico por idioma
│       ├── layout.tsx     # Layout con provider de next-intl
│       └── page.tsx       # Página principal
├── components/
│   ├── Header.tsx         # Header con selector de idioma
│   ├── HeroSection.tsx    # Hero con traducciones
│   └── FeaturedProducts.tsx
├── locales/
│   ├── en.json           # Traducciones en inglés
│   └── es.json           # Traducciones en español
├── i18n/
│   ├── routing.ts        # Configuración de rutas
│   └── request.ts        # Configuración de mensajes
└── middleware.ts         # Detección automática de idioma
```

## 🚀 Características

### Detección Automática de Idioma
El middleware detecta automáticamente el idioma preferido del navegador del usuario y redirige a la versión correcta.

### Selector de Idioma
El header incluye un selector de idioma con ícono de traducción que permite cambiar entre español e inglés.

### URLs Localizadas
- Español: `https://tudominio.com/es/...`
- Inglés: `https://tudominio.com/en/...`
- Raíz: `https://tudominio.com/` → redirige según idioma del navegador

## 🛠️ Uso en Componentes

### Componentes del Cliente ('use client')

```tsx
'use client';
import {useTranslations, useLocale} from 'next-intl';
import {Link, useRouter, usePathname} from '@/i18n/routing';

export default function MyComponent() {
  const t = useTranslations('namespace');
  const locale = useLocale(); // 'es' o 'en'
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('nav.about')}</Link>
    </div>
  );
}
```

### Componentes del Servidor

```tsx
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';

export default function MyServerComponent() {
  const t = useTranslations('namespace');
  
  return <h1>{t('title')}</h1>;
}
```

## 📝 Agregar Traducciones

1. Edita `locales/es.json` para agregar texto en español
2. Edita `locales/en.json` para agregar la traducción en inglés
3. Usa la clave en tus componentes con `t('clave')`

Ejemplo:
```json
// locales/es.json
{
  "common": {
    "welcome": "Bienvenido"
  }
}

// locales/en.json
{
  "common": {
    "welcome": "Welcome"
  }
}
```

```tsx
// En tu componente
const t = useTranslations('common');
<h1>{t('welcome')}</h1>
```

## 🔗 Navegación

Siempre usa el componente `Link` de `@/i18n/routing` en lugar del de Next.js:

```tsx
import {Link} from '@/i18n/routing';

// Automáticamente mantiene el idioma actual
<Link href="/products">Products</Link>
```

## 🌍 Cambiar de Idioma Programáticamente

```tsx
import {useRouter, usePathname} from '@/i18n/routing';

const router = useRouter();
const pathname = usePathname();

// Cambiar a inglés
router.replace(pathname, {locale: 'en'});
```

## 📦 Dependencias

- `next-intl` - Librería de internacionalización para Next.js App Router

## 🔧 Configuración

La configuración principal está en:
- `middleware.ts` - Detección y redirección de idioma
- `i18n/routing.ts` - Definición de idiomas y rutas
- `i18n/request.ts` - Carga de mensajes de traducción
- `next.config.ts` - Plugin de next-intl
