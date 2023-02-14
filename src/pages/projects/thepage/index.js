import React from "react";
import ProjectPage from "../../../components/pages/project";
import Container from "../../../components/container";
import styles from "../../styles.module.css";

function Page() {
    const buttons = [
        {
            href: "https://github.com/vicr123/thepage/releases",
            text: "Get thePage"
        },
        {
            href: "https://github.com/vicr123/thepage",
            text: "GitHub"
        }
    ];

    return <ProjectPage name="thePage" genericName="Document Viewer" gradient={["(50, 50, 100)", "(50, 50, 200)"]} cardStyle={1} buttons={buttons}>
        <Container className={styles.stuffContainer}>
            <h2>Overview</h2>
            <p>thePage is a document viewer for PDF files.</p>
            <ul>
                <li>Uncluttered interface ensures that the document is the star of the show</li>
                <li>Tabbed interface allows you to switch easily between multiple documents</li>
                <li>Lightning fast and lightweight</li>
            </ul>
        </Container>
    </ProjectPage>
}

export default Page;