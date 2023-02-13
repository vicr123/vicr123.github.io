import ProjectPage from "../../components/pages/project";
import Container from "../../components/container";
import styles from "../styles.module.css";
import React from "react";
import ScrollDots from "../../components/common/scrolldots";

function Page() {
    const buttons = [
        {
            href: "https://help.vicr123.com/docs/thebeat/install",
            text: "Get theBeat"
        },
        {
            href: "https://help.vicr123.com/docs/thebeat/intro",
            text: "View Help"
        },
        {
            href: "https://github.com/vicr123/thebeat",
            text: "GitHub"
        }
    ];

    return <ProjectPage name="theBeat" genericName="Audio Player" gradient={["(255, 100, 0)", "(255, 200, 0)"]} buttons={buttons} cardStyle={2} darkText={true}>
        <Container className={styles.stuffContainer}>
            <img src="/thebeat/screenshots/screenshot1.png" />
        </Container>
        <ScrollDots>
            {[

                <Container>
                    <h2>Features</h2>
                    <ul>
                        <li>Quick library search</li>
                        <li>Unparalleled system integration</li>
                        <li>Cross platform</li>
                        <li>Lightning fast search</li>
                        <li>Play, burn and import CDs</li>
                    </ul>
                </Container>,

                <Container>
                    <h2>Features</h2>
                    <ul>
                        <li>Quick library search</li>
                        <li>Unparalleled system integration</li>
                        <li>Cross platform</li>
                        <li>Lightning fast search</li>
                        <li>Play, burn and import CDs</li>
                    </ul>
                </Container>,

                <Container>
                    <h2>Features</h2>
                    <ul>
                        <li>Quick library search</li>
                        <li>Unparalleled system integration</li>
                        <li>Cross platform</li>
                        <li>Lightning fast search</li>
                        <li>Play, burn and import CDs</li>
                    </ul>
                </Container>,

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
            ]}
        </ScrollDots>
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
    </ProjectPage>
}

export default Page;