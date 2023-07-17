import Container from "../../../components/container";
import styles from "../../styles.module.css";
import React from "react";
import ProjectPage from "../../../components/pages/project";
import ScrollDots from "../../../components/common/scrolldots";
import FeatureNotes from "../../../components/common/featurenotes";
import CenterStageImage from "./centerstage.png";
import GatewayImage from "./gateway.png";
import HarmonyImage from "./harmony.png";
import CommunityImage from "./community.png";

function Page() {
    const buttons = [
        {
            href: "https://github.com/vicr123/thedesk",
            text: "GitHub"
        }
    ];

    return <ProjectPage name="theDesk" genericName="Desktop Environment" buttons={buttons} gradient={["(0, 100, 0)", "(0, 200, 0)"]}>
        <Container className={styles.stuffContainer}>
            <h2>Overview</h2>
            <p>theDesk is a desktop environment that lets you focus on what you're working on.</p>
            <ul>
                <li>Your apps take center stage while theDesk sneaks away quietly on the edge</li>
                <li>Quickly launch an app by typing its name</li>
            </ul>
        </Container>
        <ScrollDots>
            {[
                <FeatureNotes title={"Your apps take center stage"} image={CenterStageImage} imageAlt={"Screenshot of theDesk"}>
                    <p>While you're at work, theDesk tucks neatly away into the top edge of your screen, and just because it's small doesn't mean it's not informative - one quick glance at the status bar will tell you all you need to know about your system.</p>
                    <p>And when it's time to switch contexts, it's easy to call up theDesk just by smashing your mouse to the top of the screen.</p>
                </FeatureNotes>,
                <FeatureNotes title={"Lightning fast search"} image={GatewayImage} imageAlt={"Screenshot of the Gateway"} right={true}>
                    <p>The Gateway lets you open any app just by typing its name. And it's really easy to call up too - a quick press of the SUPER key or a three finger swipe from left to right on a touchpad will call it up, so it's always a breeze to start an app.</p>
                    <p>If you're the type to browse the menu looking at the categories instead, the Gateway also does that.</p>
                </FeatureNotes>,
                <FeatureNotes title={"Harmonic"} image={HarmonyImage} imageAlt={"Screenshot of Status Center"}>
                    <p>Everything in theDesk has been designed to fit together as a whole. No matter what you're doing, all the features you expect are there, waiting for you.</p>
                    <p>And if you also use other Victor Tran applications, they will fit right in as well.</p>
                </FeatureNotes>,
                <FeatureNotes title={"Community Powered"} image={CommunityImage} right={true}>
                    <p>Just like all Victor Tran software, theDesk is open source, so you're free to view all of its inner workings, and submit fixes and improvements.</p>
                    <p><a href="/community-backgrounds">Community Backgrounds</a> ensure that your desktop background is never boring. theDesk will obtain new community backgrounds from the Internet, so you'll always have something breathtaking to look at.</p>
                </FeatureNotes>,
            ]}
        </ScrollDots>

    </ProjectPage>
}

export default Page;