import React from "react";
import ProjectPage from "../../../components/pages/project";
import Container from "../../../components/container";
import styles from "../../styles.module.css";

function Page() {
    const buttons = [
        {
            href: "https://github.com/vicr123/theslate/releases",
            text: "Get theSlate"
        },
        {
            href: "https://github.com/vicr123/theslate",
            text: "GitHub"
        }
    ];

    return <ProjectPage name="theSlate" genericName="Text Editor" gradient={["(100, 100, 255)", "(200, 200, 255)"]} cardStyle={0} buttons={buttons}>
        <Container className={styles.stuffContainer}>
            <h2>Overview</h2>
            <p>theSlate is a snappy text/code editor.</p>
            <ul>
                <li>Syntax highlighting allows you to read code easily</li>
                <li>Edit configuration files with ease</li>
                <li>Commit to Git without ever leaving theSlate</li>
            </ul>
        </Container>
    </ProjectPage>
}

export default Page;