import React from "react";
import Crash from "./crash.svg";
import Styles from "./index.module.css";

export default function() {
    return <main className={Styles.root}>
        <h1 className={Styles.heading}>Oh, bonkers!</h1>
        <Crash className={Styles.crash} />
        <div className={Styles.lower}>
            <div>Let's get you back on the right track.</div>
            <a href={"/"}><button className="button">Go Home</button></a>
        </div>
    </main>
}