// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/lib/util/colors'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  customVariables: ['~/assets/variables.scss'],
  customProperties: true,
  treeShake: true,
  defaultAssets: {
    font: {
      family: 'Montserrat:wght@100;200;300;400;500;600;700;800;900'
    }
  },
  theme: {
    options: {
      customProperties: true,
      cspNonce: 'dQw4w9WgXcQ'
    },
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.grey.darken1,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      },
      light: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.grey.darken1,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  }
})
