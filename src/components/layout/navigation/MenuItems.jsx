import {
    Link,
} from "react-router-dom";
import {
    useState,
    useRef,
} from "react";
import Dropdown from "./Dropdown";
import styled, {
    keyframes,
} from "styled-components";

const ListLink = styled.li
    `
        display: inline-flex;
        padding: 0 8px;
        flex-direction: column;
    `;

const DropdownContainer = styled.div
    `
        float: left;
        overflow: hidden;
    `;

const animateHighlight = keyframes
    `
    from {
        background-position: 0 0;
    }
    to {
        background-position: 200% 0;
    }
    `;

const GroupButton = styled.button
    `
        font-family: "Open Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
        font-size: 18px;
        color: white;
        background: inherit;
        outline: none;
        text-decoration: none;
        border: none;
        box-shadow: none;
        padding: 5px;
        margin: 0;
        height: 50px;

        &:hover {
            box-shadow: none;
            color: black;
        }
    `;

const ButtonDiv = styled.div
    `
        display: flex;
        align-items: center;
        gap: 5px;
    `;

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
        <ListLink >
            {items.submenu ? (
                <>
                    <DropdownContainer
                        onMouseEnter={MouseEnter}
                        onMouseLeave={MouseLeave}
                    >
                    <GroupButton 
                        to={items.url} 
                        className="navigation-tab-btn"
                        aria-expanded={isdropdown ? "true" : "false"} 
                        onMouseEnter={MouseEnter} >
                        <ButtonDiv>
                            {items.title}
                            <i className="fa-solid fa-chevron-down" id="chevron-down" />
                        </ButtonDiv>
                    </GroupButton>
                    {/* {isdropdown && ( */}
                        <Dropdown 
                            submenus={items.submenu}
                            isdropdown={isdropdown ? 1 : 0}
                            handleContentMouseEnter={handleContentMouseEnter}
                            renderMenuOnMount={false}
                        />
                    {/* )} */}
                    </DropdownContainer>
                </>
            ) : (
                <GroupButton to={items.url} className="navigation-tab-btn">
                    <ButtonDiv>
                        {items.title}
                    </ButtonDiv>
                </GroupButton>
            )}
        </ListLink>
    );
};

export default MenuItems;