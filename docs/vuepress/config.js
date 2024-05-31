import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'es-ES',

  title: 'Digitalización',
  description: 'Iniciación al mundo digital',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      { text: 'Digitalización', link: '/digitalizacion/' },
      { text: 'Inkscape', link: '/inkscape/' },
      { text: 'GIMP', link: '/gimp/' },
      { text: 'HTML', link: '/html/' },
      { text: 'Scratch', link: '/scratch/' },
      { text: 'Audacity', link: '/audacity/' },
      { text: 'OpenShot', link: '/openshot/' },
    ],
  }),

  bundler: viteBundler(),
})
