import { component$, useSignal } from '@builder.io/qwik';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ = component$(() => {
  const faqItems: FAQItem[] = [
    {
      question: '¿Cuanto cuesta utilizar TuTaller?',
      answer: 'Nuestra plataforma ofrece una experiencia de usuario amigable y un sistema de reserva intuitivo. Dodgers, ofrecemos un servicio de calidad y confianza para nuestros clientes.'
    },
    {
      question: '¿Qué garantía ofrecen los talleres en sus reparaciones?',
      answer: 'La garantía que ofrecen los talleres depende del servicio que presten, basicamente son 2 años para materiales y la mano de obra'
    },
    {
      question: '¿Cuál es la diferencia entre TuTaller y otros servicios de reparación?',
      answer: 'Nuestra plataforma ofrece una experiencia de usuario amigable y un sistema de reserva intuitivo. Además, ofrecemos un servicio de calidad y confianza para nuestros clientes.'
    },
  
    {
      question: '¿Cómo encuentro el taller adecuado?',
      answer: 'Utiliza nuestros filtros avanzados para buscar por ubicación, especialidad, marca de vehículo y tipo de servicio. También puedes ver las calificaciones y reseñas de otros usuarios para tomar una decisión informada.'
    },
    {
      question: '¿Cuánto tiempo tarda una reparación?',
      answer: 'Los tiempos varían según el tipo de servicio. Cada taller proporciona un estimado detallado antes de comenzar el trabajo. Además, recibirás actualizaciones en tiempo real sobre el progreso de tu reparación.'
    },
    {
      question: '¿Tienen servicio de recogida?',
      answer: 'Muchos de nuestros talleres asociados ofrecen servicio de recogida y entrega a domicilio. Puedes ver esta opción en el perfil de cada taller y solicitar el servicio directamente desde la plataforma.'
    },
    {
      question: '¿Qué métodos de pago aceptan?',
      answer: 'Aceptamos múltiples formas de pago, incluyendo tarjetas de crédito/débito, transferencias bancarias y pagos móviles. Todos los pagos se procesan de manera segura a través de nuestra plataforma.'
    }
  ];

  const openIndex = useSignal<number | null>(null);

  return (
    <section class="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p class="mt-4 text-lg text-white/70">
            Todo lo que necesitas saber sobre TuTaller
          </p>
        </div>

        <div class="grid gap-6 mt-12 md:grid-cols-2">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              class="overflow-hidden rounded-xl transition-all duration-300 bg-white/10 hover:bg-white/20"
            >
              <button
                class="flex justify-between items-center px-6 py-4 w-full text-left"
                onClick$={() => {
                  openIndex.value = openIndex.value === index ? null : index;
                }}
              >
                <span class="text-lg font-medium text-white">
                  {item.question}
                </span>
                <span class={`ml-6 flex-shrink-0 text-accent transition-transform duration-300 ${openIndex.value === index ? 'rotate-180' : ''}`}>
                  <svg 
                    class="w-6 h-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              <div 
                class={`px-6 pb-4 transition-all duration-300 ${
                  openIndex.value === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p class="text-base text-white/70">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div class="mt-12 text-center">
          <p class="text-white/70">
            ¿No encuentras lo que buscas?{' '}
            <a href="#contact" class="font-medium text-accent hover:text-accent/90">
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
});
