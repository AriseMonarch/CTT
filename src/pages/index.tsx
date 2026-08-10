import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/getting-started">
            Open the knowledge base
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Computer technician tool collection" description="Tools for diagnosing, repairing, and optimizing computers.">
      <HomepageHeader />
      <main>
        <section className={styles.quickLinks}>
          <div className="container">
            <div className="row">
              <article className="col col--4"><h2>Hardware</h2><p>Diagnostic tools for system information, sensors, storage, memory, and components.</p><Link to="/docs/tools/hardware-diagnostics">Browse hardware tools →</Link></article>
              <article className="col col--4"><h2>Software</h2><p>Windows diagnostics, utilities, recovery, security, and benchmarking resources.</p><Link to="/docs/tools/software-diagnostics">Browse software tools →</Link></article>
              <article className="col col--4"><h2>Platforms</h2><p>Windows commands plus Linux and Android reference material.</p><Link to="/docs/platforms/windows-commands">Browse platforms →</Link></article>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
