import React from "react";
import ProjectPage from "../../components/pages/project";

function Page() {
    const buttons = [
        {
            href: "https://github.com/vicr123/contemporary-theme",
            text: "Qt theme on GitHub"
        },
        {
            href: "https://github.com/vicr123/contemporary-icons",
            text: "Icons on GitHub"
        },
        {
            href: "/typeface/contemporary.zip",
            text: "Download the font"
        }
    ];

    return <ProjectPage name="Contemporary" genericName="Design Language" gradient={["(100, 0, 255)", "(200, 0, 255)"]} cardStyle={1} buttons={buttons}>

    </ProjectPage>
}

export default Page;