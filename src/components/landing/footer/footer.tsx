import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Newsletter } from '../newsletter/newsletter';


export const Footer = component$(() => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Documentation', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Security', href: '#' },
    ],
    social: [
      {
        name: 'Twitter',
        href: '#',
        icon: (
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: 'GitHub',
        href: '#',
        icon: (
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: (
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              clip-rule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <footer class="relative bg-background">
      {/* Gradient Backgrounds */}
      <div class="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/10 to-accent/25"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_50%)] opacity-80"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-accent/15 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10"></div>

      {/* Content */}
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Product Links */}
          <div>
            <h3 class="text-sm font-semibold text-heading">Product</h3>
            <ul class="mt-4 space-y-3">
              {footerLinks.product.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} class="text-sm text-body hover:text-heading">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 class="text-sm font-semibold text-heading">Company</h3>
            <ul class="mt-4 space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} class="text-sm text-body hover:text-heading">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 class="text-sm font-semibold text-heading">Legal</h3>
            <ul class="mt-4 space-y-3">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} class="text-sm text-body hover:text-heading">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <Newsletter />
        </div>

        {/* Bottom Section */}
        <div class="border-t border-border/30 py-8">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p class="text-sm text-body">
              &copy; {currentYear} Tutaller.eu All rights reserved.
            </p>

            {/* Social Links */}
            <div class="flex space-x-6">
              {footerLinks.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  class="text-body hover:text-heading transition-colors"
                  aria-label={`${item.name} profile`}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
