import Container from "../../components/container";
import styles from "../styles.module.css";
import React from "react";
import ProjectPage from "../../components/pages/project";

function Page() {
    const buttons = [
        {
            href: "https://github.com/vicr123/thedesk",
            text: "GitHub"
        }
    ];

    return <ProjectPage name="theDesk" genericName="Desktop Environment" buttons={buttons} gradient={["(0, 100, 0)", "(0, 200, 0)"]}>
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
    </ProjectPage>
}

export default Page;