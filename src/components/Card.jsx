import React from 'react';
import Button from "./Button";

class Card extends React.Component {
    render() {
        return (
            <div className="card bordered-xs"
                onClick={() => console.warn('https://m.youtube.com/watch?v=' + this.props.video)}>
                <img src={this.props.image}
                    alt="" className="img-fluid" />
                <div className="card-body">
                    <div className="card-detail">
                        <h6 className="txt-wrapped max-line-2 mar-tb-xs">
                            {this.props.title}
                        </h6>
                        <p className='display-inline'>{this.props.viewCount + " lượt xem"}</p>
                        <Button
                            content={this.props.likeCount}
                            href={'https://m.youtube.com/watch?v=' + this.props.video}
                            target='_blank'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;