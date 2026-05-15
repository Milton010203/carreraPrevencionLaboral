const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: ['./index.html', './scripts/**/*.js'],
      safelist: [
        'active',
        'show',
        'collapse',
        'navbar-toggler',
        'navbar-collapse'
      ]
    })
  ]
};
