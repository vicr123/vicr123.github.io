import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Container from '../components/container';
import Popover from '../components/popover';
import Projects from '../js/projects';
import BaseHero from "../components/common/hero/baseHero";

const announcements = [
    {
        
    }
]

const apps = [
    {
        title: 'theDesk',
        tagline: 'Now in Beta 3!',
        description: <>
            A desktop environment
        </>
    }
]

function Feature(props) {
    const imgUrl = useBaseUrl(props.imageUrl);

    let click = () => {
        if (props.href) {
            window.location = props.href;
            return;
        }

        Popover.mount(<Popover title={props.title}>
            {props.popover}
        </Popover>)
    }

    return (
        <div className={clsx('col col--3', styles.feature)} onClick={click}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={props.title} />
                </div>
            )}
            <b>{props.title}</b>
            <p>{props.description}</p>
        </div>
    );
}

function App(props) {
    return <Container className={styles.appContainer}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </Container>
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title="Home Page"
            description="Creator of Qt Utilities and applications.">
            <main>
                <BaseHero className={`${styles.mainContainer} ${styles.headContainer}`} style={{color: "white"}}>
                    <h2>Hi, I'm</h2>
                    <h1 className="hero__title">{siteConfig.title}</h1>
                </BaseHero>
                <Container className={styles.subContainer}>
                    I create Qt utilities and applications.
                </Container>
                {Projects && Projects.length > 0 && (
                    <section className={styles.Projects}>
                        <div className="container">
                            <div className="row">
                                {Projects.map((props, idx) => (
                                    props.featured ? <Feature key={idx} {...props} /> : null
                                ))}
                                <Feature key="viewall" href="projects" title="View All" description="See more projects" imageUrl="img/viewall.svg" />
                            </div>
                        </div>
                    </section>
                )}
                <Container className={styles.subContainer} style={{backgroundColor: "rgb(0, 100, 255)", color: "white"}}>
                    Welcome to the new website!
                </Container>
                <Container className={styles.textSubContainer} style={{backgroundColor: "rgb(0, 100, 255)", color: "white"}}>
                    I've recently updated the website. View the <a href="/blog/2021/02/11/new-site">blog post</a> for more details!
                </Container>
            </main>
        </Layout>
    );
}

export default Home;
