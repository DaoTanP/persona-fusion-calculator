import React from "react";

// class PersonaCard extends React.Component {
//     handleClick = () => {
//         this.props.onClick(...this.props.onClickParam);
//     }
//     render() {
//         return (
//             <div className="card-small" onClick={this.handleClick}>
//                 <img src={this.props.image} alt={this.props.name} className="card-small-media" />
//                 <div>
//                     <h1 className="card-small-title">{this.props.name}</h1>
//                     <div className="card-small-description">
//                         <p>{'Level ' + this.props.level}</p>
//                         <p>{this.props.arcana}</p>
//                     </div>
//                     <div className="card-small-subtext">
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default function PersonaCard(props) {
    const handleClick = () => {
        props.onClick(...props.onClickParam);
    }
    return (
        <div className="card-small" onClick={handleClick}>
            <img src={props.image} alt={props.name} className="card-small-media" />
            <div>
                <h1 className="card-small-title">{props.name}</h1>
                <div className="card-small-description">
                    <p>{'Level ' + props.level}</p>
                    <p>{props.arcana}</p>
                </div>
                <div className="card-small-subtext">
                </div>
            </div>
        </div>
    );
}


// export default PersonaCard;