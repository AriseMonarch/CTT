import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  technicianSidebar: [
    'getting-started',
    {
      type: 'category',
      label: 'Tools',
      items: [
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
          items: ['tools/hardware-diagnostics', 'tools/software-diagnostics'],
        },
        {
          type: 'category',
          label: 'Utilities & Recovery',
          collapsible: true,
          collapsed: false,
          items: ['tools/utilities', 'tools/file-recovery', 'tools/bootable-usb'],
        },
        {
          type: 'category',
          label: 'Security',
          collapsible: true,
          collapsed: false,
          items: ['tools/antivirus', 'tools/virus-removers'],
        },
        {
          type: 'category',
          label: 'Performance & Reference',
          collapsible: true,
          collapsed: false,
          items: ['tools/benchmark-software', 'tools/benchmark-results', 'tools/guides'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Platforms',
      items: [
        {
          type: 'category',
          label: 'Windows',
          items: ['platforms/windows-commands'],
        },
        {
          type: 'category',
          label: 'Linux',
          items: ['platforms/linux'],
        },
        {
          type: 'category',
          label: 'Android',
          description: 'Android phone and carrier reference material.',
          collapsible: true,
          collapsed: false,
          link: {
            type: 'generated-index',
            title: 'Android',
            description: 'Android diagnostics, MMI codes, and GSM / USSD references.',
          },
          items: ['platforms/android', 'platforms/android-mmi', 'platforms/gsm-ussd'],
        },
      ],
    },
  ],
};

export default sidebars;
