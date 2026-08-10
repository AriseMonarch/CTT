import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Computer Technician Tools',
  tagline: 'The Open Source Knowledge base for fixing, configuring, securing, and understanding technology and much more...',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ctt.mrcyo.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MRCYODev', // Change before deploying to GitHub Pages.
  projectName: 'CTT', // Change before deploying to GitHub Pages.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CTT',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'technicianSidebar',
          position: 'left',
          label: 'Knowledge Base',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Start here',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'Reference',
          items: [
            {
              label: 'Hardware diagnostics',
              to: '/docs/tools/hardware-diagnostics',
            },
            {
              label: 'Utilities',
              to: '/docs/tools/utilities',
            },
          ],
        },
        {
          title: 'Platforms',
          items: [
            {
              label: 'Windows commands',
              to: '/docs/platforms/windows/commands',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Computer Technician Tools. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
