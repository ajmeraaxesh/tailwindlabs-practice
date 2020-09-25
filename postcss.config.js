// const purgecss = require('@fullhuman/postcss-purgecss')({
//     content: ['./src/**/*.jsx', './src/**/*.js', './public/index.html'],
//     css: ['./src/tailwind.css'],
//     // Include any special characters you're using in this regular expression
//     defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || [],
// })

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        // ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
        require('postcss-preset-env')({ stage: 1 }),
    ],
}
