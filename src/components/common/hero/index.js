import React from "react";
import BaseHero from "./baseHero";

function Index({title, subtitle, children, style, cardStyle = 0, className}) {
    return <BaseHero cardStyle={cardStyle} style={style} className={className}>
        <h1 className="hero__title">{title}</h1>
        <h2>{subtitle}</h2>
        {children}
    </BaseHero>
}

export default Index;