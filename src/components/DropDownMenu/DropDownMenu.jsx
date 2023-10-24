import React, { useState } from "react";
import './DropDownMenu.css';

export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectItem = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
        if (props.onItemClick) {
            props.onItemClick(item);
        }
    };

    const { label } = props;

    const items = React.Children.toArray(props.children);

    return (
        <div className={`dropdown ${isOpen ? 'open' : ''}`}>
            <button className={`dropdown-toggle ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                {selectedItem || label}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {items.map((item, index) => (
                        <li key={index} onClick={() => selectItem(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
