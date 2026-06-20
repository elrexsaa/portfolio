<template>
  <footer class="py-10 border-t border-ink-800/5 dark:border-cream-100/5">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 rounded-full border border-gold-500 flex items-center justify-center">
            <span class="font-serif text-xs font-bold text-gold-500">E</span>
          </div>
          <span class="font-serif text-sm font-semibold text-ink-900 dark:text-cream-50">Portofolio - Khrysdyan Elga Rexsa Purba</span>
        </div>

        <!-- Copyright -->
        <p class="font-sans text-xs text-ink-400 dark:text-cream-200/30 text-center">
          © {{ new Date().getFullYear() }} Khrysdyan Elga Rexsa Purba. {{ $t('footer.rights') }}
        </p>

        <!-- Social links -->
        <div class="flex items-center gap-3">
          <a
            v-for="link in socials"
            :key="link.name"
            :href="link.url"
            :title="link.name"
            target="_blank"
            rel="noopener noreferrer"
            class="w-8 h-8 rounded-full border border-ink-800/10 dark:border-cream-100/10 flex items-center justify-center text-ink-500 dark:text-cream-200/50 hover:border-gold-400 hover:text-gold-500 dark:hover:border-gold-400 dark:hover:text-gold-400 transition-all duration-300"
          >
            <span v-html="link.icon" class="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/elrexsaa',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>',
  },
  {
    name: 'Email',
    url: 'mailto:rexsaelga@gmail.com',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/@elgarexsaa',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>',
  },
]
</script>
