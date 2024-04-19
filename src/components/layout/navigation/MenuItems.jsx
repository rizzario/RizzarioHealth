import {
    useState,
    useRef,
} from "react";
import Dropdown from "./Dropdown";

const MenuItems = ({ items }) => {

    const [isdropdown, toggleDropdown] = useState(false);
    const closeTimeoutRef = useRef(null);

    const MouseEnter = () => {
        toggleDropdown(true);
        clearTimeout(closeTimeoutRef.current);
    };
    const MouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => {
            toggleDropdown(false);
        }, 10);
        
    };
    const handleContentMouseEnter = () => {
        clearTimeout(closeTimeoutRef.current);
    };

    return (
        <li className="inline-flex flex-column px-2">
            {items.submenu ? (
                <>
                    <div
                        className="float-left overflow-hidden"
                        onMouseEnter={MouseEnter}
                        onMouseLeave={MouseLeave}
                    >
                    <button 
                        to={items.url} 
                        className="navigation-tab-btn"
                        aria-expanded={isdropdown ? "true" : "false"} 
                        onMouseEnter={MouseEnter} >
                        <div className="flex items-center gap-1">
                            {items.title}
                            <i className="fa-solid fa-chevron-down" id="chevron-down" />
                        </div>
                    </button>
                    {/* {isdropdown && ( */}
                        <Dropdown 
                            submenus={items.submenu}
                            isdropdown={isdropdown ? 1 : 0}
                            handleContentMouseEnter={handleContentMouseEnter}
                            renderMenuOnMount={false}
                        />
                    {/* )} */}
                    </div>
                </>
            ) : (
                <>
                    <div className="float-left overflow-hidden">
                        <button to={items.url} 
                            className="navigation-tab-btn" >
                            <div className="flex items-center gap-1">
                                {items.title}
                            </div>
                        </button>
                    </div>
                </>
            )}
        </li>
    );
};

export default MenuItems;