import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Image } from '@unpic/qwik';
import { About } from '~/components/landing/about/about';
import { Contact } from '~/components/landing/contact/contact';
import { FAQ } from '~/components/landing/faq/faq';
import { Features } from '~/components/landing/features/features';
import { ProjectManagement } from '~/components/landing/project-management/project-management';
import { Ranking } from '~/components/landing/ranking/ranking';

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <section class="relative min-h-screen">
        {/* Background Image */}
        <div class="overflow-hidden absolute inset-0 z-0">
          <Image
            src="assets/images/sections/hero_image_1.png"
            alt="Fondo del taller"
            layout="fullWidth"
            height={800}
            width={1200}
            class="object-cover w-full h-full"
            priority
          />
          <div class="absolute inset-0 bg-black/30" /> {/* Overlay para mejorar legibilidad */}
        </div>

        {/* Content Container */}
        <div class="flex relative z-10 flex-col min-h-screen lg:flex-row">
          {/* CTO Section (2/3 en desktop, full en mobile) */}
          <div class="flex items-center p-6 w-full lg:p-12 lg:w-2/3">
            <div class="mx-auto max-w-2xl lg:mx-0">
              <h1 class="mb-6 text-4xl font-bold text-center text-white lg:text-5xl lg:text-left">
                Encuentra el Taller Perfecto para tu Vehículo
              </h1>
              <p class="mb-8 text-lg text-center lg:text-xl text-white/90 lg:text-left">
                Conectamos conductores con los mejores talleres mecánicos. 
                Precios transparentes, servicios de calidad y reseñas verificadas.
              </p>
              <div class="flex justify-center lg:justify-start">
                <button class="px-8 py-3 font-medium text-white rounded-lg bg-accent hover:bg-accent/90">
                  Comienza Ahora
                </button>
              </div>
            </div>
          </div>

          {/* Rankings Section (1/3 en desktop, full en mobile) */}
          <div class="flex items-center p-6 w-full backdrop-blur-md lg:p-8 lg:w-1/3 bg-white/10">
            <Ranking />
          </div>
        </div>
      </section>

      <Features />
      <ProjectManagement />
      <About />
      <FAQ />
      <Contact />
    </>
  );
});

export const head: DocumentHead = {
  title: 'TuTaller - Encuentra el mejor taller para tu vehículo',
  meta: [
    {
      name: 'description',
      content: 'Conectamos conductores con los mejores talleres mecánicos. Precios transparentes, servicios de calidad y reseñas verificadas.',
    },
    {
      name: 'keywords',
      content: 'taller mecánico, reparación coches, mantenimiento vehículos, mecánico cerca, presupuesto taller',
    },
    {
      property: 'og:title',
      content: 'TuTaller - Tu Plataforma de Confianza para Servicios Mecánicos',
    },
    {
      property: 'og:description',
      content: 'Encuentra el taller perfecto para tu vehículo. Compara precios, lee reseñas y agenda citas fácilmente.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:locale',
      content: 'es_ES',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'TuTaller - Servicios Mecánicos de Confianza',
    },
    {
      name: 'twitter:description',
      content: 'Conectamos conductores con los mejores talleres mecánicos. Servicios de calidad garantizados.',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://tutaller.com',
    },
  ],
};
