import ProjectPage from "../../../components/pages/project";
import Container from "../../../components/container";
import styles from "../../styles.module.css";
import React from "react";
import ScrollDots from "../../../components/common/scrolldots";
import Featurenotes from "../../../components/common/featurenotes";

import SearchImage from "./search.png";
import BurnImage from "./burn.png";

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
            <h2>Overview</h2>
            <p>Play and organise your music. theBeat automatically discovers music on your computer and presents it in an easy-to-use interface.</p>
            <ul>
                <li>Automatically categorise your music</li>
                <li>Blazing fast search</li>
                <li>Quickly find tracks by author and artist</li>
                <li>Create playlists to quickly access the music you love</li>
            </ul>
        </Container>
        <ScrollDots>
            {[
                <Featurenotes title={"Lightning Fast Search"} image={SearchImage} imageAlt={"Searching in theBeat"}>
                    <p>theBeat is blazingly fast at searching your library. By the time you finish typing your search query, theBeat has already found the track you were after.</p>
                    <p>(Coming in 4.0) Search is only two key presses away - activate search by pressing the SHIFT key twice. Search is not limited to tracks; type in any album, artist, or even an action like Repeat, and theBeat will do it for you instantly.</p>
                </Featurenotes>,
                <Featurenotes title={"Play and burn CDs"} image={BurnImage} imageAlt={"Burning in theBeat"} right={true}>
                    <p>It's easy to play and burn CDs in theBeat. theBeat will even contact MusicBrainz in order to retrieve information about the CD you're playing.</p>
                    <p>And when it's time to burn, theBeat easily allows you to create a playlist with all the music that you want to burn and burn it all to a CD for you, in the format that you want.</p>
                </Featurenotes>
            ]}
        </ScrollDots>
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