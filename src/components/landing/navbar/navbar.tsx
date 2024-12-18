import { component$, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const Navbar = component$(() => {
  const isMenuOpen = useSignal(false);

  return (
    <nav class="fixed top-0 right-0 left-0 z-50 bg-gradient-to-r border-b backdrop-blur-md from-black/50 via-black/30 to-black/50 border-white/10">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          {/* Logo */}
          <div class="flex-shrink-0 text-2xl font-bold text-white font-lufga">
            TuTaller
          </div>

          {/* Desktop Navigation */}
          <div class="hidden items-center space-x-8 md:flex">
            <Link href="#features" class="transition-colors text-white/90 hover:text-white">Funcionalidad</Link>
            <Link href="#about" class="transition-colors text-white/90 hover:text-white">Ventajas</Link>
            <Link href="#pricing" class="transition-colors text-white/90 hover:text-white">Servicios</Link>
            <Link href="#contact" class="transition-colors text-white/90 hover:text-white">Preguntas</Link>
            <Link href="#contact" class="transition-colors text-white/90 hover:text-white">Nosotros</Link>
          </div>

          {/* Language Selector and CTA Buttons */}
          <div class="hidden items-center space-x-4 md:flex">
            <Link
              href="/login"
              class="px-4 py-2 text-white rounded-lg border transition-colors border-white/20 hover:bg-white/10"
            >
              Login
            </Link>

            <Link 
              href="#get-started" 
              class="px-4 py-2 text-white rounded-lg transition-colors bg-accent hover:bg-accent/90"
            >
              Empezar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div class="md:hidden">
            <button
              onClick$={() => isMenuOpen.value = !isMenuOpen.value}
              class="p-2 text-white rounded-md hover:bg-white/10"
              aria-expanded="false"
            >
              <span class="sr-only">Abrir menú principal</span>
              {/* Icon when menu is closed */}
              <svg
                class={`${isMenuOpen.value ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                class={`${isMenuOpen.value ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div class={`${isMenuOpen.value ? 'block' : 'hidden'} md:hidden`}>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <Link href="#features" class="block px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10">Como Funciona</Link>
            <Link href="#about" class="block px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10">Talleres</Link>
            <Link href="#pricing" class="block px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10">Servicios</Link>
            <Link href="#contact" class="block px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10">Contacto</Link>
          </div>
          <div class="px-2 pt-4 pb-3 border-t border-white/10">
            <Link
              href="/login"
              class="block px-3 py-2 rounded-md text-white/90 hover:text-white hover:bg-white/10"
            >
              Login
            </Link>
            <Link
              href="#get-started"
              class="block px-3 py-2 mt-1 text-white rounded-md bg-accent hover:bg-accent/90"
            >
              Empezar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
});
