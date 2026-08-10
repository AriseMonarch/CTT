---
sidebar_position: 1
---

import PlatformBadges from '@site/src/components/PlatformBadges';

# Windows Commands

<PlatformBadges items={['windows']} />

## Disk and file-system issues

```text
chkdsk /f
sfc /scannow
diskpart
DISM /Online /Cleanup-Image /RestoreHealth
```

## Network and connectivity issues

```text
ipconfig /?
netsh winsock reset
netsh int ip reset
ping /?
nslookup
hostname
tracert /?
arp /?
systeminfo
netstat
```
