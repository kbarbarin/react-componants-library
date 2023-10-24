import React from "react";
import './PopUp.css'
import Button from "../Button/Button";

export default function PopUp (props) {
    return (
        <div className="popup">
            {props.children}
            <Button onClick={props.onClose}>Close</Button>
        </div>
    );
}