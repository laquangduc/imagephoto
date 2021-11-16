module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundColor: theme => ({
        'primary': '#121212',
      }),
    },
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
}
