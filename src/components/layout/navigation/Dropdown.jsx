import styled from "styled-components";
import React from "react";

const NavigationGroupDropdown = styled.div
`
    display: ${props => (props.dropdown ? 'block' : 'none')};
    position: absolute;
    background-color: black;
    top: 98px;
    width: 100vw;
    left: 0;
    padding: 1rem 1.5rem;
    z-index: 3;
`;

const Dropdown = ({ submenus, isDropdown }) => {
    const dropdown = isDropdown;
    return (
        <NavigationGroupDropdown dropdown={dropdown ? 1 : 0} >
            <ul className="dropdown">
                {submenus.map((submenu, index) => (
                    <li key={index} className="dropdown">
                        <a href={submenu.url}>{submenu.title}</a>
                    </li>
                ))}
            </ul>
        </NavigationGroupDropdown>
    );
};
export default Dropdown;