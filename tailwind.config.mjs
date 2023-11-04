const defaultTheme = require('tailwindcss/defaultTheme')
import { colors } from './colors'
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['ManropeVariable', 'Manrope', ...defaultTheme.fontFamily.sans],
                mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono]
            },
            colors,
            typography: ({ theme }) => ({
                base: {
                    css: {
                        '--tw-prose-body': theme('colors.base[800]'),
                        '--tw-prose-headings': theme('colors.purple.DEFAULT'),
                        '--tw-prose-links': theme('colors.blue.light'),
                        '--tw-prose-invert-body': theme('colors.base[200]'),
                        '--tw-prose-invert-headings': theme('colors.orange.light'),
                        '--tw-prose-invert-links': theme('colors.blue.light'),
                    }
                }
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
    darkMode: 'class',
}
