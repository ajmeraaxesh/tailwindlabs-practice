const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
        './src/**/*.js',
    ],
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/ui')({
            layout: 'sidebar',
        }),
    ],
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
        './src/**/*.js',
        './public/**/*.js',
        './public/**/*.html',
    ],
}
