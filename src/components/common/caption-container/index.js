import React from "react";
import Styles from "./imagewithcaption.module.css"

export default function CaptionContainer({children, caption}) {
    return <div className={Styles.container}>
        <div className={Styles.image}>
            {children}
        </div>
        <div className={Styles.caption}>
            {caption}
        </div>
    </div>
}