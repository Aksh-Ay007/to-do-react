import React from "react";
import PropTypes from 'prop-types';

function Button(props) {
    return <button className={props.className} onClick={props.handleClick}>{props.btnText}</button>;
}

Button.propTypes = {
    className: PropTypes.string,
    handleClick: PropTypes.func,
    btnText: PropTypes.string
};

export default Button;
