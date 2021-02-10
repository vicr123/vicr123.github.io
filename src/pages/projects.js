import React from 'react';
import clsx from 'clsx';
import Projects from '../js/projects';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Container from '../components/container';
import styles from './styles.module.css';
import Popover from '../components/popover';

function ProjectItem(props) {
    const imgUrl = useBaseUrl(props.imageUrl);

    let click = () => {
        Popover.mount(<Popover title={props.title}>
            {props.popover}
        </Popover>)
    }

    return (
        <div className={styles.feature} onClick={click}>
            <Container>
                <div className={styles.featureList}>
                    {imgUrl && (
                        <img className={styles.featureListImage} src={imgUrl} alt={props.title} />
                    )}
                    {props.title}
                </div>
            </Container>
        </div>
    );
}

function Page() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title="Projects"
            description="Victor Tran projects">
            <main>
                <Container className={styles.prerelease}>
                    <h3>NOTE</h3>
                    I have not finished writing descriptions for all of my apps. This list only represents a subset of my projects. For a more complete list, please refer to my <a href="https://old.vicr123.com">old website</a> or my <a href="https://github.com/vicr123">GitHub profile</a>.
                </Container>
                <Container className={styles.stuffContainer}>
                    <h1>Projects</h1>
                    Here's a list of the projects I've worked on.
                </Container>
                {Projects && Projects.length > 0 && (
                    <section className={styles.Projects}>
                            <div className={styles.projectList}>
                                {Projects.map((props, idx) => (
                                    <ProjectItem key={idx} {...props} />
                                ))}
                            </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Page;
