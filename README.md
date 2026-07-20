# Puertas El Jefe

Sitio web profesional para el negocio de puertas **Puertas El Jefe**. Diseñado pensando en clientes que llegan principalmente desde Instagram, con enfoque mobile-first y tiempos de carga rápidos.

## Características

- ✅ Diseño 100% responsive (mobile-first)
- ✅ Integración con WhatsApp e Instagram
- ✅ Botones flotantes de contacto rápido
- ✅ Galería de productos
- ✅ Formulario de cotización con envío a WhatsApp
- ✅ Animaciones suaves con Framer Motion
- ✅ Optimizado para redes sociales (Open Graph)
- ✅ Listo para GitHub Pages y Vercel

## Tecnologías

- Vite + React + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Instalación local

```bash
npm install
npm run dev
```

## Construcción para producción

```bash
npm run build
```

## Despliegue en GitHub Pages

1. Sube este repositorio a GitHub.
2. Ve a **Settings > Pages**.
3. En **Source** selecciona **GitHub Actions**.
4. El workflow en `.github/workflows/deploy.yml` construirá y desplegará automáticamente el sitio con cada push a `main`.

> El archivo `vite.config.ts` ya está configurado con `base: './'` para que funcione correctamente en GitHub Pages.

## Personalizar datos de contacto

Edita los siguientes archivos para actualizar teléfono, redes sociales y correo:

- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
- `src/components/FloatingButtons.tsx`

Busca y reemplaza `5210000000000` por tu número de WhatsApp (incluyendo código de país) y `@puertaseljefe` por tus usuarios reales de redes sociales.

## Créditos

- Logo proporcionado por el cliente.
- Imágenes de Pexels.
