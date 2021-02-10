import React from 'react';
import ReactDOM from 'react-dom';

import styles from './popover.module.css';

let currentPopover = null;

class Popover extends React.Component {
    static mount(popover) {
        let popoverElement = document.getElementById("popoverContainer");
        if (!popoverElement) {
            console.log("Creating popover element");
            popoverElement = document.createElement("div");
            popoverElement.setAttribute("id", "popoverContainer");
            document.body.appendChild(popoverElement);
        }

        ReactDOM.render(popover, popoverElement);
        document.body.classList.add("popoverOpen");
        currentPopover = popover;
    }

    static unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById("popoverContainer"));
        document.body.classList.remove("popoverOpen");
    }

    render() {
        return <div className={styles.background}>
            <div style={{flexGrow: 1}} onClick={Popover.unmount} />
            <div className={styles.popover}>
                <div className={styles.popoverHeader}>
                    <button className={styles.popoverBackButton} onClick={Popover.unmount} />
                    <span className={styles.popoverHeaderTitle}>{this.props.title}</span>
                </div>
                <div className={styles.popoverContainer}>
                    {this.props.children}
                </div>
            </div>
        </div>
    }
}

export default Popover;