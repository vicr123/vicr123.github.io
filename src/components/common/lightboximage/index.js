import React, {useState} from "react";
import Styles from "./lightboximage.module.css";

function LightboxImage({src, alt, className, style}) {
    const [showing, setShowing] = useState(false);

    const show = () => setShowing(true);
    const hide = () => setShowing(false);

    return <>
        <img src={src} alt={alt} className={`${Styles.image} ${className}`} style={style} onClick={show} />
        <div className={Styles.lightbox} style={{display: showing ? "flex" : "none"}} onClick={hide}>
            <img src={src} alt={alt} />
        </div>
    </>
}

export default LightboxImage;