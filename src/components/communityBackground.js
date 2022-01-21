import React from "react";
import Styles from './communityBackground.module.css';
import path from "path-browserify"

class CommunityBackground extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fsActive: false
        }
    }

    toggleFullScreen() {
        this.setState(state => ({
            fsActive: !state.fsActive
        }));
    }

    fsStyles() {
        let styles = [Styles.FullScreenRoot];
        if (this.state.fsActive) styles.push(Styles.Active);
        return styles.join(" ");
    }

    render() {
        return <>
            <div className={Styles.Root} onClick={this.toggleFullScreen.bind(this)} style={{
                background: `url(${this.props.data.filename}) center center/cover`
            }}>
                <div className={Styles.Scrim}>
                    <h1 className={Styles.ImageName}>{this.props.data.name}</h1>
                    <span>by {this.props.data.author}</span>
                </div>
            </div>
            <div onClick={this.toggleFullScreen.bind(this)} className={this.fsStyles()}>
                <div className={Styles.FsImage} style={{
                    backgroundImage: `url(${this.props.data.filename})`
                }} onClick={e => e.stopPropagation()} />

                <div className={Styles.FsMeta}>
                    <h1 className={Styles.FsTitle}>{this.props.data.name}</h1>
                    <span className={Styles.FsAuthor}>by {this.props.data.author}</span>
                    <span className={Styles.FsCopyright}>{this.props.data.copyright}</span>
                    <a href={this.props.data.filename} download={path.parse(this.props.data.filename).base} className={Styles.FsDownload}>Download</a>
                </div>
            </div>
        </>
    }
}

export default CommunityBackground;