const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Awesome PT',
  tagline: 'A curated list of awesome private tracker tools.',
  url: 'https://awesome-pt.netlify.app',
  baseUrl: '/',

	i18n: {
		defaultLocale: 'en',    
		locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: { 
        title: 'Awesome PT',
        items: [
          { type: 'localeDropdown', position: 'right' },
          { label: 'GitHub', position: 'right', href: 'https://github.com/sabersalv/awesome-pt' },
        ]
      },
      colorMode: {
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
