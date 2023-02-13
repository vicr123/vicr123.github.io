import React from "react";
import Layout from '@theme/Layout';
import Container from "../container";
import styles from "../../pages/styles.module.css";
import Index from "../common/hero";

function ProjectPage({children, name, genericName, gradient, cardStyle = 0, buttons = [], darkText = false}) {
    return <Layout>
        <Index title={name} subtitle={genericName} style={{background: `linear-gradient(to top right, rgb${gradient[0]}, rgb${gradient[1]})`, color: darkText ? "black" : "white"}} cardStyle={cardStyle}>
            <div className={styles.buttonContainer}>
                {buttons.map((x, i) => <a href={x.href}><button className="button">{x.text}</button></a>)}
            </div>
        </Index>
        {children}
    </Layout>
}

export default ProjectPage;