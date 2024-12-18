import { component$ } from '@builder.io/qwik';

export const Newsletter = component$(() => {
  return (
    <div class="relative p-6 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm border border-accent/20">
      {/* Decorative elements */}
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.accent/10),transparent_70%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.accent/10),transparent_70%)]"></div>
      
      {/* Content */}
      <div class="relative">
        <h3 class="text-lg font-semibold text-heading">Stay in the loop</h3>
        <p class="mt-2 text-sm text-body">
          Get exclusive access to <span class="text-accent font-medium">AI-powered</span> features and early updates.
        </p>
        <form class="mt-4">
          <div class="flex flex-col gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email"
              class="w-full rounded-md border-2 border-border bg-white/50 backdrop-blur-sm px-4 py-2.5 text-sm text-body placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition duration-200"
            />
            <button
              type="submit"
              class="w-full rounded-md bg-gradient-to-r from-accent to-accent/90 px-4 py-2.5 text-sm font-semibold text-white hover:from-accent/90 hover:to-accent/80 focus:outline-none focus:ring-2 focus:ring-accent/20 transition duration-200 shadow-sm group"
            >
              <span class="relative inline-flex items-center gap-1">
                Subscribe for Updates
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="w-4 h-4 transition-transform group-hover:translate-x-0.5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fill-rule="evenodd" 
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                    clip-rule="evenodd" 
                  />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});
