import Card1 from "./card1.svg";
import Styles from "./hero.module.css";
import Card2 from "./card2.svg";
import Card from "./card.svg";
import Container from "../../container";
import React from "react";

function BaseHero({children, cardStyle = 0, style, className}) {
    let card;

    switch (cardStyle) {
        case 1:
            card = <Card1 className={`${Styles.heroCard} ${Styles.heroCard1}`} />
            break;
        case 2:
            card = <Card2 className={`${Styles.heroCard} ${Styles.heroCard2}`} />
            break;
        case 0:
        default:
            card = <Card className={`${Styles.heroCard} ${Styles.heroCard0}`} />
    }

    return <Container className={`${className} ${Styles.heroContainer}`} style={style}>
        {card}
        <div className={Styles.heroItems}>
            {children}
        </div>
    </Container>
}

export default BaseHero;