import React from "react";

const Footer = (props) => {
    return (
        <div className="container-fluid">
        <hr />
            <div className="text-center title text-uppercase">
            <small>
                <span className="text-danger">Powered by {props.name} </span> | <span className="text-muted"> Email me :  {props.email} </span>
            </small>
            </div>
        </div>
    );
}

export default Footer;