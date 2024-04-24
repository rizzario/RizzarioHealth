import {
    Link,
} from 'react-router-dom';
import React from "react";

const Dropdown = ({ submenus, isdropdown }) => {

    const MouseEnter = () => {
        isdropdown = 1;
    };
    const MouseLeave = () => {
        isdropdown = !isdropdown;
    };
    
    return (
        <>
            <div className={`maintriangle ${isdropdown ? 'dropdown-appear' : 'dropdown-hidden'}`}>
                <div className="subtriangle">
                </div>
            </div>
            <div
                className={`navigation-group-dropdown ${isdropdown ? 'dropdown-appear' : 'dropdown-hidden'}`}
                isdropdown={isdropdown ? 1: 0}
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave}
            >
                {submenus.map((submenu, index) => (
                    <Link to={submenu.url} key={index}
                        className="block float-none px-4 py-3 text-white" >
                        {submenu.title}
                    </Link>
                ))}
            </div>
        </>
    );
};
export default Dropdown;