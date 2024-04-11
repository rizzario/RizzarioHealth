import styled, { 
    keyframes, 
} from "styled-components";
import {
    Link,
} from 'react-router-dom';
import React, {
    useState
} from "react";

const slideRight = keyframes
    `
        from {
            transform: translateX(-25%);
        }
        to {
            transform: translateX(0%);
        }
    `;

const NavigationGroupDropdown = styled.div
    `
        position: absolute;
        background-color: black;
        top: 50px;
        min-width: 160px;
        height: auto;
        padding: 1rem 1.5rem;
        display: ${({isdropdown}) => (isdropdown ? 'block' : 'none')};
        z-index: 5;
        opacity: ${({isdropdown}) => (isdropdown ? '1' : '0')};
        animation: ${slideRight} 0.2s;
    `;
const ButtonDropdown = styled(Link)
    `
        display: block;
        float: none;
        padding: 12px 16px;
        color: white;
    `;

const Dropdown = ({ submenus, isdropdown }) => {

    const MouseEnter = () => {
        isdropdown = 1;
    };
    const MouseLeave = () => {
        isdropdown = !isdropdown;
    };

    return (
        <NavigationGroupDropdown
            isdropdown={isdropdown ? 1 : 0}
            onMouseEnter={MouseEnter} 
            onMouseLeave={MouseLeave}
        >
            {submenus.map((submenu, index) => (
                <ButtonDropdown 
                    to={submenu.url} 
                    key={index}>
                    {submenu.title}
                </ButtonDropdown>
            ))}
        </NavigationGroupDropdown>
    );
};
export default Dropdown;