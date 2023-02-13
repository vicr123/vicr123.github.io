import React from "react";
import Styles from "./featurenotes.module.css";
import Container from "../../container";

function FeatureNotes({title, children, image, right = false}) {
    return <Container>
        <div className={`${Styles.featureNotesRoot} ${right && Styles.right}`}>
            {image && <img src={image} className={Styles.image} />}
            <h2 className={Styles.title}>{title}</h2>
            <div className={Styles.notes}>
                {children}
            </div>
        </div>
    </Container>
}

export default FeatureNotes;