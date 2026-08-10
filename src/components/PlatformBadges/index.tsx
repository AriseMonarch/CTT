import type {ReactNode} from 'react';
import fluentMdl2 from '@iconify-json/fluent-mdl2/icons.json';
import materialSymbols from '@iconify-json/material-symbols/icons.json';
import qlementineIcons from '@iconify-json/qlementine-icons/icons.json';
import styles from './styles.module.css';

type Platform = 'windows' | 'linux' | 'macos' | 'android' | 'bootable' | 'cross';
type IconSet = {
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  icons: Record<string, {body: string; width?: number; height?: number; left?: number; top?: number}>;
};
type SvgIcon = {body: string; width: number; height: number; left: number; top: number};

function localIcon(collection: IconSet, name: string): SvgIcon {
  const icon = collection.icons[name];
  if (!icon) throw new Error(`Missing bundled Iconify icon: ${name}`);
  return {
    body: icon.body,
    width: icon.width ?? collection.width ?? 16,
    height: icon.height ?? collection.height ?? 16,
    left: icon.left ?? collection.left ?? 0,
    top: icon.top ?? collection.top ?? 0,
  };
}

// These are the same Iconify collections and icon names used by FMHY, rendered
// as local SVG data so icons work in the static Docusaurus output too.
const platforms: Record<Platform, {icon: SvgIcon; label: string}> = {
  windows: {icon: localIcon(qlementineIcons, 'windows-24'), label: 'Windows'},
  macos: {icon: localIcon(qlementineIcons, 'mac-fill-16'), label: 'macOS'},
  linux: {icon: localIcon(fluentMdl2, 'linux-logo-32'), label: 'Linux'},
  android: {icon: localIcon(qlementineIcons, 'android-fill-24'), label: 'Android'},
  bootable: {icon: localIcon(materialSymbols, 'usb-rounded'), label: 'Bootable USB'},
  cross: {icon: localIcon(materialSymbols, 'devices-rounded'), label: 'Cross-platform'},
};

export default function PlatformBadges({items}: {items: Platform[]}): ReactNode {
  return (
    <span className={styles.badges} aria-label={`Supported platforms: ${items.map((item) => platforms[item].label).join(', ')}`}>
      {items.map((item) => (
        <span className={styles.badge} key={item} title={platforms[item].label}>
          <svg
            aria-hidden="true"
            className={styles.icon}
            focusable="false"
            viewBox={`${platforms[item].icon.left} ${platforms[item].icon.top} ${platforms[item].icon.width} ${platforms[item].icon.height}`}
            dangerouslySetInnerHTML={{__html: platforms[item].icon.body}}
          />
        </span>
      ))}
    </span>
  );
}
