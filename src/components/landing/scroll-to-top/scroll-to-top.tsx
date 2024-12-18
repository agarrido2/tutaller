import { component$, useSignal, $, useOnWindow } from '@builder.io/qwik';

export const ScrollToTop = component$(() => {
  const isVisible = useSignal(false);

  // Función para hacer scroll suave hacia arriba
  const scrollToTop = $(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Detectar scroll usando useOnWindow
  useOnWindow(
    'scroll',
    $(() => {
      isVisible.value = window.scrollY > window.innerHeight * 0.3;
    })
  );

  return (
    <button
      onClick$={scrollToTop}
      class={`fixed bottom-8 right-8 p-3 rounded-full bg-accent text-white shadow-lg transition-all duration-300 hover:bg-accent/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-accent/20 ${
        isVisible.value ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
});
