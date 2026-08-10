import type {ReactNode} from 'react';

import fluentMdl2Json from '@iconify-json/fluent-mdl2/icons.json';
import materialSymbolsJson from '@iconify-json/material-symbols/icons.json';
import qlementineIconsJson from '@iconify-json/qlementine-icons/icons.json';

import styles from './styles.module.css';

type IconData = {
  body: string;
  width?: number;
  height?: number;
  left?: number;
  top?: number;
};

type IconSet = {
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  icons?: Record<string, IconData>;
};

type SvgIcon = {
  body: string;
  width: number;
  height: number;
  left: number;
  top: number;
};

type BadgeType =
  // Operating systems
  | 'windows'
  | 'macos'
  | 'linux'
  | 'android'
  | 'ios'
  | 'chromeos'
  | 'ubuntu'
  | 'debian'
  | 'fedora'
  | 'arch'
  | 'freebsd'
  | 'openbsd'
  | 'netbsd'
  | 'raspberry-pi'

  // Platforms / devices
  | 'bootable'
  | 'cross'
  | 'mobile'
  | 'desktop'
  | 'server'
  | 'vm'
  | 'docker'

  // Source / licensing
  | 'opensource'
  | 'closed-source'
  | 'free'
  | 'paid'

  // Application type
  | 'portable'
  | 'cli'
  | 'gui'
  | 'web'

  // Connectivity
  | 'offline'
  | 'online'

  // Permissions
  | 'admin'
  | 'root'

  // Services / integrations
  | 'github'
  | 'gitlab'
  | 'bitbucket'
  | 'social'
  | 'cloud'
  | 'api'

  // Other
  | 'recommended'
  | 'official'
  | 'third-party'
  | 'warning'
  | 'experimental';

const fluentMdl2 = fluentMdl2Json as unknown as IconSet;
const materialSymbols = materialSymbolsJson as unknown as IconSet;
const qlementineIcons = qlementineIconsJson as unknown as IconSet;

/**
 * Generic fallback SVG.
 *
 * This prevents the entire Docusaurus page from crashing when
 * an Iconify icon is missing from an installed collection.
 */
const fallbackIcon: SvgIcon = {
  body: `
    <path
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z"
      fill="currentColor"
    />
  `,
  width: 24,
  height: 24,
  left: 0,
  top: 0,
};

/**
 * Safely retrieve an icon from an Iconify JSON collection.
 *
 * IMPORTANT:
 * Do not throw if the icon doesn't exist.
 * A missing icon should never crash the entire Docusaurus page.
 */
function localIcon(
  collection: IconSet,
  name: string,
): SvgIcon {
  const icon = collection.icons?.[name];

  if (!icon) {
    console.warn(
      `[PlatformBadges] Icon "${name}" was not found. Using fallback icon.`,
    );

    return fallbackIcon;
  }

  return {
    body: icon.body,
    width: icon.width ?? collection.width ?? 16,
    height: icon.height ?? collection.height ?? 16,
    left: icon.left ?? collection.left ?? 0,
    top: icon.top ?? collection.top ?? 0,
  };
}

type Badge = {
  icon: SvgIcon;
  label: string;
};

/**
 * Badge definitions.
 *
 * Only icons that are known to exist in the installed collections
 * are referenced here. If one is missing, localIcon() automatically
 * falls back instead of crashing the site.
 */
const badges: Partial<Record<BadgeType, Badge>> = {
  // ============================================================
  // OPERATING SYSTEMS
  // ============================================================

  windows: {
    icon: localIcon(qlementineIcons, 'windows-24'),
    label: 'Windows',
  },

  macos: {
    icon: localIcon(qlementineIcons, 'mac-fill-16'),
    label: 'macOS',
  },

  linux: {
    icon: localIcon(fluentMdl2, 'linux-logo-32'),
    label: 'Linux',
  },

  android: {
    icon: localIcon(qlementineIcons, 'android-fill-24'),
    label: 'Android',
  },

  ios: {
    icon: localIcon(qlementineIcons, 'ios-16'),
    label: 'iOS',
  },

  // ============================================================
  // PLATFORM / DEVICE
  // ============================================================

  bootable: {
    icon: localIcon(materialSymbols, 'usb-rounded'),
    label: 'Bootable USB',
  },

  cross: {
    icon: localIcon(materialSymbols, 'devices-rounded'),
    label: 'Cross-platform',
  },

  mobile: {
    icon: localIcon(materialSymbols, 'smartphone'),
    label: 'Mobile',
  },

  desktop: {
    icon: localIcon(materialSymbols, 'desktop-windows'),
    label: 'Desktop',
  },

  server: {
    icon: localIcon(materialSymbols, 'dns'),
    label: 'Server',
  },

  vm: {
    icon: localIcon(materialSymbols, 'computer'),
    label: 'Virtual Machine',
  },

  docker: {
    icon: localIcon(materialSymbols, 'deployed-code'),
    label: 'Docker',
  },

  // ============================================================
  // SOURCE / LICENSING
  // ============================================================

  opensource: {
    // </> style icon
    icon: localIcon(materialSymbols, 'code'),
    label: 'Open Source',
  },

  'closed-source': {
    icon: localIcon(materialSymbols, 'lock'),
    label: 'Closed Source',
  },

  free: {
    icon: localIcon(materialSymbols, 'money-off'),
    label: 'Free',
  },

  paid: {
    icon: localIcon(materialSymbols, 'payments'),
    label: 'Paid',
  },

  // ============================================================
  // APPLICATION TYPE
  // ============================================================

  portable: {
    icon: localIcon(materialSymbols, 'folder-open'),
    label: 'Portable',
  },

  cli: {
    icon: localIcon(materialSymbols, 'terminal'),
    label: 'CLI',
  },

  gui: {
    icon: localIcon(materialSymbols, 'desktop-windows'),
    label: 'GUI',
  },

  web: {
    icon: localIcon(materialSymbols, 'language'),
    label: 'Web',
  },

  // ============================================================
  // CONNECTIVITY
  // ============================================================

  offline: {
    icon: localIcon(materialSymbols, 'cloud-off'),
    label: 'Offline',
  },

  online: {
    icon: localIcon(materialSymbols, 'cloud'),
    label: 'Online',
  },

  cloud: {
    icon: localIcon(materialSymbols, 'cloud'),
    label: 'Cloud',
  },

  api: {
    icon: localIcon(materialSymbols, 'api'),
    label: 'API',
  },

  // ============================================================
  // PERMISSIONS
  // ============================================================

  admin: {
    icon: localIcon(materialSymbols, 'admin-panel-settings'),
    label: 'Administrator',
  },

  root: {
    icon: localIcon(materialSymbols, 'security'),
    label: 'Root',
  },

  // ============================================================
  // SERVICES
  // ============================================================

  github: {
    icon: localIcon(materialSymbols, 'github'),
    label: 'GitHub',
  },

  gitlab: {
    icon: localIcon(materialSymbols, 'gitlab'),
    label: 'GitLab',
  },

  bitbucket: {
    icon: localIcon(materialSymbols, 'code'),
    label: 'Bitbucket',
  },

  social: {
    icon: localIcon(materialSymbols, 'share'),
    label: 'Social Media',
  },

  // ============================================================
  // OTHER
  // ============================================================

  recommended: {
    icon: localIcon(materialSymbols, 'star'),
    label: 'Recommended',
  },

  official: {
    icon: localIcon(materialSymbols, 'verified'),
    label: 'Official',
  },

  'third-party': {
    icon: localIcon(materialSymbols, 'extension'),
    label: 'Third-party',
  },

  warning: {
    icon: localIcon(materialSymbols, 'warning'),
    label: 'Warning',
  },

  experimental: {
    icon: localIcon(materialSymbols, 'science'),
    label: 'Experimental',
  },
};

type PlatformBadgesProps = {
  items: BadgeType[];
};

export default function PlatformBadges({
  items,
}: PlatformBadgesProps): ReactNode {
  const validItems = items.filter(
    (item): item is BadgeType => Boolean(badges[item]),
  );

  if (validItems.length === 0) {
    return null;
  }

  return (
    <span
      className={styles.badges}
      aria-label={`Tags: ${validItems
        .map((item) => badges[item]!.label)
        .join(', ')}`}
    >
      {validItems.map((item) => {
        const badge = badges[item];

        if (!badge) {
          return null;
        }

        const icon = badge.icon;

        return (
          <span
            className={styles.badge}
            key={item}
            title={badge.label}
            aria-label={badge.label}
          >
            <svg
              aria-hidden="true"
              className={styles.icon}
              focusable="false"
              viewBox={`${icon.left} ${icon.top} ${icon.width} ${icon.height}`}
              dangerouslySetInnerHTML={{
                __html: icon.body,
              }}
            />
          </span>
        );
      })}
    </span>
  );
}