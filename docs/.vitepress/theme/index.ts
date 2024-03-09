import DefaultTheme from 'vitepress/theme'

import MyLayout from './components/MyLayout.vue'

import './styles/custom.css'

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp(ctx) {
    // register global component
  },
};
