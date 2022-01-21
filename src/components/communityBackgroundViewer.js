import React from "react";
import Styles from "./communityBackgroundViewer.module.css"
import path from "path-browserify"
import CommunityBackground from "./communityBackground";

class CommunityBackgroundViewer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            backgrounds: null,
            shownBackgrounds: [],
            query: ""
        }
    }

    async componentDidMount() {
        let metadata = await fetch("/theshell/backgrounds/backgrounds.json");
        metadata = await metadata.json();
        metadata.shift();

        //Randomise the order of the backgrounds
        metadata = metadata.map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)

        let backgrounds = await Promise.all(metadata.map(async url => {
            let metadata = await fetch(url);
            metadata = await metadata.json();
            metadata.filename = path.resolve(url, "../", metadata.filename);
            return metadata;
        }));

        this.setState({
            backgrounds: backgrounds,
            shownBackgrounds: backgrounds
        })
    }

    search(e) {
        let query = e.target.value;

        if (query === "") {
            this.setState({
                query: "",
                shownBackgrounds: this.state.backgrounds
            });
        } else {
            let backgrounds = this.state.backgrounds.filter(data => {
                if (data.name?.toLowerCase()?.includes(query.toLowerCase())) return true;
                if (data.author?.toLowerCase()?.includes(query.toLowerCase())) return true;
                return false;
            })
            this.setState({
                query: query,
                shownBackgrounds: backgrounds
            });
        }

    }

    render() {
        if (this.state.backgrounds) {
            return <div className={Styles.Root}>
                <input className={Styles.SearchBox} type="text" placeholder={"Search Community Backgrounds"} onChange={this.search.bind(this)} value={this.state.query} />
                {this.state.shownBackgrounds.map(data => <CommunityBackground data={data} />)}
            </div>
        } else {
            return <div className={Styles.Root}>
                Preparing community backgrounds...
            </div>
        }
    }
}

export default CommunityBackgroundViewer;