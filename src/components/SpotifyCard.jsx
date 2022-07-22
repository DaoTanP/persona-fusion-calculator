import React from 'react';
import 'material-symbols/outlined.css';

function SpotifyCard2({ title, description, image, background }) {
    let icon = 'play_arrow'
    const handlePlayClick = () => {
        if (icon === 'play_arrow')
            icon = 'pause'
        else
            icon = 'play_arrow'
    }
    return (
        <div className="card" style={{ background: { background } }}>
            <img src={image} alt="" className="card-media" />
            <div className="card-text">
                <h1 className="card-title">{title}</h1>
                <p className="card-description txt-wrapped max-line-2">
                    {description}
                </p>
                <div className="card-subtext">
                    <div className="media-progress">
                        <div className="progress-bar-wrapper">
                            <div className="progress-bar"></div>
                        </div>
                        {/* <div>15:23</div>
                        <div>34:40</div> */}
                    </div>
                    <button className="play-button" onClick={handlePlayClick}>
                        <span className="button-icon material-symbols-outlined">
                            {icon}
                        </span>
                        {/* <span className="button-text">Play</span> */}
                    </button>
                </div>
            </div>
        </div>
    );
}

class SpotifyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isPlaying: false }
    }

    handlePlayClick = () => {
        this.setState({ isPlaying: !this.state.isPlaying })
    }

    render() {
        return (
            <div className="card" style={{ backgroundColor: this.props.background }}>
                <img src={this.props.image} alt="" className="card-media" />
                <div className="card-text">
                    <h1 className="card-title txt-wrapped max-line-2">{this.props.title}</h1>
                    <p className="card-description txt-wrapped max-line-2">
                        {this.props.description}
                    </p>
                    <div className="card-subtext">
                        <div className="media-progress">
                            <div className="progress-bar-wrapper">
                                <div className="progress-bar"></div>
                            </div>
                            {/* <div>15:23</div>
                            <div>34:40</div> */}
                        </div>
                        <div>-02:09</div>
                        <button className="play-button" onClick={this.handlePlayClick}>
                            <span className="button-icon material-symbols-outlined" style={{ color: this.props.background }}>
                                {this.state.isPlaying ? 'pause' : 'play_arrow'}
                            </span>
                            {/* <span className="button-text">Play</span> */}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpotifyCard;