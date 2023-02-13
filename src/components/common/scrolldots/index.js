import React, {useEffect, useRef, useState} from "react";
import Styles from "./scrollldots.module.css";
import Container from "../../container";

function ScrollDot({index, isCurrent, setCurrentIndexChange}) {
    return <div className={`${Styles.scrollDot} ${isCurrent ? Styles.scrollDotActive : ""}`} onClick={() => setCurrentIndexChange(index)}>

    </div>
}

function ScrollDotsScroller({items, currentIndex, setCurrentIndexChange}) {
    return <Container className={Styles.scrollerPositioner}>
        <div className={Styles.scrollerContainer}>
            {items.map((x, i) => <ScrollDot index={i} isCurrent={i === currentIndex} setCurrentIndexChange={setCurrentIndexChange} />)}
        </div>
    </Container>
}

function ScrollDotItem({children, index, setCurrentIndex, currentIndexChange, fadeIn}) {
    let [opacity, setOpacity] = useState(1);
    let ref = useRef();
    let anchorRef = useRef();

    let scroll = () => {
        let rect = ref.current.getBoundingClientRect();
        if (rect.top <= 100) {
            // We can set the current index here because elements later down will set the index later
            setCurrentIndex(index);
        }

        if (fadeIn) {
            if (rect.top > 500) {
                setOpacity(0.3);
            } else if (rect.top < 100) {
                setOpacity(1);
            } else {
                setOpacity(0.3 + 0.7 * (1 - ((rect.top - 100) / 400)));
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scroll);
        return () => {
            window.removeEventListener("scroll", scroll);
        }
    }, [])

    useEffect(() => {
        if (currentIndexChange === index) {
            anchorRef.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [currentIndexChange])

    return <div ref={ref} style={{opacity: opacity}}>
        <div ref={anchorRef} className={Styles.scrollDotItemAnchor} />
        {children}
    </div>;
}

function ScrollDots({children, fadeIn = true}) {
    let [currentIndex, setCurrentIndex] = useState(0);
    let [currentIndexChange, setCurrentIndexChange] = useState(-1);

    //Reset the currentIndexChange variable to -1 after it is changed so the user can click on the same dot
    useEffect(() => {
        if (currentIndexChange !== -1) setCurrentIndexChange(-1);
    }, [currentIndexChange])

    return <div className={Styles.scrollDotsRoot}>
        <ScrollDotsScroller items={children} currentIndex={currentIndex} setCurrentIndexChange={setCurrentIndexChange} />
        <div>
            {children.map((x, i) => <ScrollDotItem fadeIn={fadeIn} index={i} setCurrentIndex={setCurrentIndex} currentIndexChange={currentIndexChange}>{x}</ScrollDotItem>)}
        </div>
    </div>
}

export default ScrollDots;