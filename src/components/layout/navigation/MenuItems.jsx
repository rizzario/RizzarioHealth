import {
    Link,
} from "react-router-dom";
import {
    useState,
} from "react";
import Dropdown from "./Dropdown";
import styled from "styled-components";

const ListLink = styled.li
    `
        display: inline-flex;
        padding: 0 5px;
    `;

const GroupButton = styled(Link)
    `
        font-family: "Open Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
        font-size: 18px;
        color: white;
        text-decoration: none;
        padding: 5px;
    `;

const ButtonDiv = styled.div
    `
        display: flex;
        align-items: center;
        gap: 5px;
    `;

const MenuItems = ({ items }) => {

    const [isDropdown, toggleDropdown] = useState(false);

    const setToggleDropdown = () => {
        toggleDropdown(!isDropdown);
    };

    const MouseEnter = () => {
        toggleDropdown(true);
    };
    const MouseLeave = () => {
        toggleDropdown(false);
    };
    return (
        <ListLink>
            {typeof items.submenu !== "undefined" ? (
                <>
                <GroupButton 
                    to={items.url} 
                    className="navigation-tab-btn"
                    onMouseEnter={MouseEnter}
                    onMouseLeave={MouseLeave}>
                    <ButtonDiv>
                        {items.title}
                        <i className="fa-solid fa-chevron-down" id="chevron-down" />
                    </ButtonDiv>
                </GroupButton>
                <Dropdown 
                    submenus={items.submenu} 
                    isDropdown={isDropdown} />
                </>
            ) : (
                <GroupButton to={items.url} className="navigation-tab-btn">
                    <ButtonDiv>
                        {items.title}
                        <i className="fa-solid fa-chevron-down" id="chevron-down" />
                    </ButtonDiv>
                </GroupButton>
            )}
        </ListLink>
    );
};

export default MenuItems;