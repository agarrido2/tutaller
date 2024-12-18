import { component$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

export const About = component$(() => {
  const values = [
    {
      title: 'Innovación Continua',
      description: 'Impulsamos el futuro de la gestión de proyectos con tecnología AI de vanguardia.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm-1-7.208a2.5 2.5 0 1 1 2 0V16h-2v-3.208z"
          />
        </svg>
      ),
    },
    {
      title: 'Excelencia Operativa',
      description: 'Optimizamos cada aspecto de la gestión de proyectos para resultados excepcionales.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m23 12l-2.44-2.79l.34-3.69l-3.61-.82l-1.89-3.2L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5l.34 3.7L1 12l2.44 2.79l-.34 3.7l3.61.82L8.6 22.5l3.4-1.47l3.4 1.46l1.89-3.19l3.61-.82l-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81l1.48-1.48l2.32 2.33l5.85-5.87l1.48 1.48l-7.33 7.35z"
          />
        </svg>
      ),
    },
    {
      title: 'Enfoque Humano',
      description: 'Creamos soluciones que potencian equipos y mejoran la colaboración.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1a7 7 0 0 0-14 0a1 1 0 0 0 1 1z"
          />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: '100%', label: 'Satisfacción del Cliente' },
    { value: '24/7', label: 'Soporte Técnico' },
    { value: '+500', label: 'Empresas Confían en Nosotros' },
    { value: '5+', label: 'Años de Experiencia' },
  ];

  return (
    <section id="about" class="overflow-hidden py-24 bg-background">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header */}
        <div class="mx-auto max-w-3xl text-center">
          <span class="text-sm font-medium tracking-wide uppercase text-accent">Sobre Nosotros</span>
          <h2 class="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            Transformando la Gestión de Proyectos con <span class="text-accent">AI</span>
          </h2>
          <p class="mt-4 text-lg text-body">
            En Okios, combinamos la experiencia en gestión de proyectos con tecnología AI de vanguardia
            para crear soluciones que impulsan el éxito de tu equipo.
          </p>
        </div>

        {/* Values Grid */}
        <div class="grid gap-8 mt-20 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} class="relative group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-lg blur-[2px] opacity-25 group-hover:opacity-100 transition duration-200"></div>
              <div class="relative p-6 bg-white rounded-lg">
                <div class="flex justify-center items-center mb-4 w-12 h-12 rounded-lg text-accent bg-accent/10">
                  {value.icon}
                </div>
                <h3 class="mb-2 text-lg font-semibold text-heading">{value.title}</h3>
                <p class="text-body">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div class="mt-20">
          <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} class="relative group">
                <div class="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-lg blur-[2px] opacity-25 group-hover:opacity-100 transition duration-200"></div>
                <div class="relative overflow-hidden px-4 pt-5 pb-12 bg-white rounded-lg shadow sm:px-6 sm:pt-6">
                  <dt class="text-sm font-medium truncate text-body">{stat.label}</dt>
                  <dd class="flex items-baseline pb-6 sm:pb-7">
                    <p class="text-2xl font-semibold text-accent">{stat.value}</p>
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Team Section */}
        <div class="mt-20">
          <div class="mx-auto mb-12 max-w-3xl text-center">
            <h3 class="text-2xl font-bold text-heading">Nuestro Equipo</h3>
            <p class="mt-4 text-lg text-body">
              Un equipo apasionado de expertos en tecnología y gestión de proyectos
              trabajando para transformar la forma en que las empresas gestionan sus proyectos.
            </p>
          </div>

          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member Card */}
            <div class="relative group">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent/50 rounded-lg blur-[2px] opacity-25 group-hover:opacity-100 transition duration-200"></div>
              <div class="overflow-hidden relative bg-white rounded-lg shadow">
                <Image
                  src="/assets/images/team/ceo.jpg"
                  alt="CEO"
                  width={400}
                  height={400}
                  loading="eager"
                  layout="fullWidth"
                  background="auto"
                  class="object-cover w-full h-64 rounded-t-lg"
                />
                <div class="p-6">
                  <h4 class="text-lg font-semibold text-heading">Antonio Garrido</h4>
                  <p class="text-accent">CEO & Fundador</p>
                  <p class="mt-2 text-body">
                    Expert en AI y gestión de proyectos con más de 15 años de experiencia
                    liderando equipos de tecnología.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div class="mt-20 text-center">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent">
            <span class="text-sm font-medium">¿Listo para transformar tu gestión de proyectos?</span>
          </div>
          <div class="flex justify-center mt-8 space-x-4">
            <button class="btn btn-primary">Programa una Demo</button>
            <button class="btn btn-secondary">Contacta con Nosotros</button>
          </div>
        </div>
      </div>
    </section>
  );
});
