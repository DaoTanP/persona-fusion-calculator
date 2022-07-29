import React from "react";

export default function PersonaCard(props) {
    const handleClick = () => {
        props.onClick(...props.onClickParam);
    }

    if (props.isVertical) {
        return (
            <div className="card-v" onClick={handleClick}>
                <img
                    className="card-v-media"
                    src={props.image || props.persona.image}
                    alt={props.name || props.persona.name}
                />
                <div>
                    <h1 className="card-v-title">
                        {props.name || props.persona.name}
                    </h1>
                    <div className="card-v-description">
                        <p>{'Level ' + props.level || props.persona.level}</p>
                        <p>{props.arcana || props.persona.arcana}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="card-h" onClick={handleClick}>
            <img
                className="card-h-media disappeared"
                src={props.image || props.persona.image || ''}
                alt={props.name || props.persona.name}
            />
            <h1 className="card-h-title">
                {props.name || props.persona.name}
            </h1>
            <p className="card-h-description">
                {'Level ' + (props.level || props.persona.level)}
            </p>
            <p className="card-h-subtext">
                {props.arcana || props.persona.arcana}
            </p>
        </div>
    );
}


// export default PersonaCard;