import React from 'react';
import Container from '../components/container';
import styles from '../pages/styles.module.css';

const features = [
    {
        title: 'theDesk',
        imageUrl: 'img/thedesk.svg',
        featured: true,
        description: <>
            Desktop environment
        </>,
        popover: <>
            <Container className={`${styles.headContainer}`} style={{background: "linear-gradient(to top right, rgb(0, 100, 0), rgb(0, 200, 0))", color: "white"}}>
                    <h1 className="hero__title">theDesk</h1>
                    <h2>Desktop Environment</h2>
                    <div className={styles.buttonContainer}>
                        <a href="https://github.com/vicr123/thedesk"><button className="button">GitHub</button></a>
                    </div>
            </Container>
            <Container className={styles.prerelease}>
                <h3>WARNING</h3>
                theDesk is prerelease software, intended for early adopters and folks that want to test new stuff.
            </Container>
            <Container className={styles.stuffContainer}>
                <h2>Overview</h2>
                <p>theDesk is a desktop environment that lets you focus on what you're working on.</p>
                <ul>
                    <li>Your apps take center stage while theDesk sneaks away quietly on the edge</li>
                    <li>Quickly launch an app by typing its name</li>
                </ul>
            </Container>
        </>
    },
    {
        title: 'Contemporary',
        imageUrl: 'img/contemporary.svg',
        description: <>
            Design Language
        </>,
        popover: <>
            <Container className={`${styles.headContainer}`} style={{background: "linear-gradient(to top right, rgb(100, 0, 255), rgb(200, 0, 255))", color: "white"}}>
                    <h1 className="hero__title">Contemporary</h1>
                    <h2>Design Language</h2>
                    <div className={styles.buttonContainer}>
                        <a href="https://github.com/vicr123/thedesk"><button className="button">GitHub</button></a>
                        <a href="/typeface/contemporary.zip"><button className="button">Download the font</button></a>
                    </div>
            </Container>
        </>
    },
    {
        title: 'theBeat',
        imageUrl: 'img/thebeat.svg',
        featured: true,
        description: <>
            Audio Player
        </>,
        popover: <>
            <Container className={`${styles.headContainer}`} style={{background: "linear-gradient(to top right, rgb(255, 100, 0), rgb(255, 200, 0))", color: "black"}}>
                    <h1 className="hero__title">theBeat</h1>
                    <h2>Audio Player</h2>
                    <div className={styles.buttonContainer}>
                        <a href="https://help.vicr123.com/docs/thebeat/install"><button className="button">Get theBeat</button></a>
                        <a href="https://help.vicr123.com/docs/thebeat/intro"><button className="button">View Help</button></a>
                        <a href="https://github.com/vicr123/thebeat"><button className="button">GitHub</button></a>
                    </div>
            </Container>
            <Container className={styles.stuffContainer}>
                <img src="/thebeat/screenshots/screenshot1.png" />
            </Container>
            <Container className={styles.stuffContainer}>
                <h2>Overview</h2>
                <p>Play and organise your music. theBeat automatically discovers music on your computer and presents it in an easy-to-use interface.</p>
                <ul>
                    <li>Automatically categorise your music</li>
                    <li>Blazing fast search</li>
                    <li>Quickly find tracks by author and artist</li>
                    <li>Create playlists to quickly access the music you love</li>
                </ul>
            </Container>
            <Container>
                <h2>Features</h2>
                <ul>
                    <li>Quick library search</li>
                    <li>Unparalleled system integration</li>
                    <li>Cross platform</li>
                    <li>Lightning fast search</li>
                    <li>Play, burn and import CDs</li>
                </ul>
            </Container>
        </>
    },
    {
        title: 'theFrame',
        imageUrl: 'img/theframe.svg',
        description: <>
            Animation Tool
        </>,
        popover: <>
            <Container className={`${styles.headContainer}`} style={{background: "linear-gradient(to top right, rgb(255, 100, 100), rgb(255, 200, 200))", color: "black"}}>
                    <h1 className="hero__title">theFrame</h1>
                    <h2>Animation Tool</h2>
                    <div className={styles.buttonContainer}>
                        <a href="https://github.com/vicr123/theframe/releases"><button className="button">Get theFrame</button></a>
                        <a href="https://github.com/vicr123/theframe"><button className="button">GitHub</button></a>
                    </div>
            </Container>
            <Container className={styles.stuffContainer}>
                <h2>Overview</h2>
                <p>theFrame is an animation tool that can create simple animations from shapes.</p>
                <ul>
                    <li>Simple timeline based interface makes it easy to get started</li>
                    <li>Easing curves make it easy to create natural feeling animations</li>
                    <li>Render your animations into a video that can be viewed with a garden-variety video player</li>
                </ul>
            </Container>
        </>
    },
    {
        title: 'thePage',
        imageUrl: 'img/thepage.svg',
        description: <>
            Document Viewer
        </>,
        popover: <>
            <Container className={`${styles.headContainer}`} style={{background: "linear-gradient(to top right, rgb(50, 50, 100), rgb(50, 50, 200))", color: "white"}}>
                    <h1 className="hero__title">thePage</h1>
                    <h2>Document Viewer</h2>
                    <div className={styles.buttonContainer}>
                        <a href="https://github.com/vicr123/thepage/releases"><button className="button">Get thePage</button></a>
                        <a href="https://github.com/vicr123/thepage"><button className="button">GitHub</button></a>
                    </div>
            </Container>
            <Container className={styles.stuffContainer}>
                <h2>Overview</h2>
                <p>thePage is a document viewer for PDF files.</p>
                <ul>
                    <li>Uncluttered interface ensures that the document is the star of the show</li>
                    <li>Tabbed interface allows you to switch easily between multiple documents</li>
                    <li>Lightning fast and lightweight</li>
                </ul>
            </Container>
        </>
    },
    {
        title: 'theSlate',
        imageUrl: 'img/theslate.svg',
        featured: true,
        description: <>
            Text Editor
        </>,
        popover: <>
            <Container className={`${styles.headContainer}`} style={{background: "linear-gradient(to top right, rgb(100, 100, 255), rgb(200, 200, 255))", color: "white"}}>
                    <h1 className="hero__title">theSlate</h1>
                    <h2>Text Editor</h2>
                    <div className={styles.buttonContainer}>
                        <a href="https://github.com/vicr123/theslate/releases"><button className="button">Get theSlate</button></a>
                        <a href="https://github.com/vicr123/theslate"><button className="button">GitHub</button></a>
                    </div>
            </Container>
            <Container className={styles.stuffContainer}>
                <h2>Overview</h2>
                <p>theSlate is a snappy text/code editor.</p>
                <ul>
                    <li>Syntax highlighting allows you to read code easily</li>
                    <li>Edit configuration files with ease</li>
                    <li>Commit to Git without ever leaving theSlate</li>
                </ul>
            </Container>
        </>
    }
];

export default features;