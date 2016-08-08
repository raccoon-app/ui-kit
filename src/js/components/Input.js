import React, { Component, PropTypes } from 'react';

class Input extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
        };
    }

    setValue(value) {
        this.setState({ value });
    }

    render() {
        const { type, name, label } = this.props;
        const { value } = this.state;

        return (
            <div>
                <label className="auth-form__label" htmlFor={name}>{label}</label>
                <input className="auth-form__input" type={type} name={name} id={name} value={value}
                    onChange={(event) => this.setValue(event.target.value)}
                />
            </div>
        );
    }
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default Input;
