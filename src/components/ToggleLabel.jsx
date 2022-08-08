import React from "react";

export default class ToggleLabel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    style = {
        ...this.props.style,
        userSelect: 'none',
        cursor: "pointer"
    }

    handleClick(e) {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));

        if (typeof this.props.onClick === 'function')
            this.props.onClick(e);

        this.handleChange(e);
    }

    handleChange(e) {
        if (typeof this.props.onChange === 'function') {
            e.target.checked = !this.state.isToggleOn
            this.props.onChange(e);
        }

    }

    render() {
        return (
            <label onClick={this.handleClick} {...this.props} style={this.style}>
                {this.props.children}
                <span className="material-symbols-outlined">
                    {!this.state.isToggleOn ? 'south' : 'north'}
                </span>
            </label>
        );
    }
}