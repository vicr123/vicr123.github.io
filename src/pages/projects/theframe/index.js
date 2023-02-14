import React from "react";
import ProjectPage from "../../../components/pages/project";
import Container from "../../../components/container";
import styles from "../../styles.module.css";

function Page() {
    const buttons = [
        {
            href: "https://github.com/vicr123/theframe/releases",
            text: "Get theFrame"
        },
        {
            href: "https://github.com/vicr123/theframe",
            text: "GitHub"
        }
    ];

    return <ProjectPage name="theFrame" genericName="Animation Tool" gradient={["(255, 100, 100)", "(255, 200, 200)"]} cardStyle={2} buttons={buttons} darkText={true}>
        <Container className={styles.stuffContainer}>
            <h2>Overview</h2>
            <p>theFrame is an animation tool that can create simple animations from shapes.</p>
            <ul>
                <li>Simple timeline based interface makes it easy to get started</li>
                <li>Easing curves make it easy to create natural feeling animations</li>
                <li>Render your animations into a video that can be viewed with a garden-variety video player</li>
            </ul>
        </Container>
    </ProjectPage>
}

export default Page;