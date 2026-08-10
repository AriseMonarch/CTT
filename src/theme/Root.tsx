import type {ReactNode} from 'react';
import ThemePicker from '@site/src/components/ThemePicker';

export default function Root({children}: {children: ReactNode}): ReactNode {
  return <><ThemePicker />{children}</>;
}
