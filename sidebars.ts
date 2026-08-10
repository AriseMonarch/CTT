import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  technicianSidebar: [
    // ============================================================
    // GETTING STARTED
    // ============================================================

    'getting-started',

    // ============================================================
    // TOOLS
    // ============================================================

    {
      type: 'category',
      label: 'Tools',
      collapsible: true,
      collapsed: false,

      items: [
        // -------------------------
        // Diagnostics
        // -------------------------

        {
          type: 'category',
          label: 'Diagnostics',
          description: 'Hardware and software diagnostic tools.',
          collapsible: true,
          collapsed: false,

          link: {
            type: 'generated-index',
            title: 'Diagnostics',
            description: 'Tools for identifying hardware and software issues.',
          },

          items: [
            'tools/hardware-diagnostics',
            'tools/software-diagnostics',
          ],
        },

        // -------------------------
        // Utilities & Recovery
        // -------------------------

        {
          type: 'category',
          label: 'Utilities & Recovery',
          collapsible: true,
          collapsed: false,

          items: [
            'tools/utilities',
            'tools/file-recovery',
            'tools/bootable-usb',
          ],
        },

        // -------------------------
        // Security
        // -------------------------

        {
          type: 'category',
          label: 'Security',
          collapsible: true,
          collapsed: false,

          items: [
            'tools/antivirus',
            'tools/virus-removers',
          ],
        },

        // -------------------------
        // Performance & Reference
        // -------------------------

        {
          type: 'category',
          label: 'Performance & Reference',
          collapsible: true,
          collapsed: false,

          items: [
            'tools/benchmark-software',
            'tools/benchmark-results',
            'tools/guides',
          ],
        },
      ],
    },

    // ============================================================
    // PLATFORMS
    // ============================================================

    {
      type: 'category',
      label: 'Platforms',
      collapsible: true,
      collapsed: false,

      items: [
        // -------------------------
        // Windows
        // -------------------------

        {
          type: 'category',
          label: 'Windows',
          collapsible: true,
          collapsed: false,

          items: [
            'platforms/windows/index',
            'platforms/windows/commands',
            'platforms/windows/repair',
            'platforms/windows/networking',
            'platforms/windows/troubleshooting',
          ],
        },

        // -------------------------
        // Linux
        // -------------------------

        {
          type: 'category',
          label: 'Linux',
          collapsible: true,
          collapsed: false,

          items: [
            'platforms/linux/index',
            'platforms/linux/commands',
            'platforms/linux/repair',
            'platforms/linux/networking',
            'platforms/linux/troubleshooting',
          ],
        },

        // -------------------------
        // Android
        // -------------------------

        {
          type: 'category',
          label: 'Android',
          description: 'Android phone and carrier reference material.',
          collapsible: true,
          collapsed: false,

          items: [
            'platforms/android/index',
            'platforms/android/diagnostics',
            'platforms/android/android-mmi',
            'platforms/android/gsm-ussd',
            'platforms/android/repair',
            'platforms/android/troubleshooting',
          ],
        },
      ],
    },
  ],
};

export default sidebars;