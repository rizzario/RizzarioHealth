import { 
    Link,
    Form,
    useLoaderData,
    useNavigation,
    useSubmit,
    Outlet,
} from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import {
    searchLogo,
    crossLogo,
} from "../../Images/images";
import Logo from "../mainlogo/Logo";
import { menuItemsData } from "./navigation/MenuItemsData";
import MenuItems from "./navigation/MenuItems";
import { getContacts } from "../../pages/contact/contacts";
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

//Set Style component
const NavigationContainer = styled.nav
    `
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 8px;
        width: 100%;
        height: auto;
        position: relative;
        padding: 10px 4%;
        align-items: center;
        background-color: var(--green);
    `;

const LinkContainer = styled.div
    `
        display: flex;
        justify-content: center;
        width: 100%;
    `;

const UnsortLink = styled.ul
    `
        list-style: none;
        padding: 0;
        margin: 0 auto;
    `;

// const ListLink = styled.li
//     `
//         display: inline-flex;
//         padding: 0 5px;
//     `;

// const GroupButton = styled(Link)
//     `
//         font-family: "Open Sans", sans-serif;
//         font-optical-sizing: auto;
//         font-weight: 600;
//         font-style: normal;
//         font-size: 18px;
//         color: white;
//         text-decoration: none;
//         padding: 5px;
//     `;

// const ButtonDiv = styled.div
//     `
//         display: flex;
//         align-items: center;
//         gap: 5px;
//     `;

const SearchContainer = styled(Form)
    `
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 38%;
        position: absolute;
        gap: 5px;
        transition: 0.5s all ease;
        right: 9%;
        top: 48%;
    `;

const ContactContainer = styled.div
    `
        width: 48%;
        display: flex;
        justify-content: flex-end;
    `;

const ButtonImageSearch = styled.div
    `
        right: 5%;
        padding: 2px;
        position: absolute;
        background-image: ${props => props.isshowform 
            ? `url(${searchLogo})` 
            : `url(${crossLogo})`};
        background-position: center;
        background-repeat: no-repeat;
        height: 2rem;
        width: 2rem;
    `;

// export async function loader( {request} ) {
//     const url = new URL(request.url);
//     const s = url.searchParams.get("s");
//     const details = await getContacts(s);
//     return { details};
// }
function shouldForwardProp(propName, target) {
    if (typeof target === "string") {
        return isPropValid(propName);
    }
    return true;
}

export default function Navigation() {
    // const { s } = useLoaderData();
    const { s } = useState("");
    // const navigation = useNavigation();
    const searching = navigation.location && new URLSearchParams(navigation.location.search).has("s");
    const submit = useSubmit();
    const [isshowform, toggleForm] = useState(true);

    const setToggleForm = () => {
        toggleForm(!isshowform);
    }
    <StyleSheetManager shouldForwardProp={isshowform} />

    return(
        <>
            <NavigationContainer>
                <Logo />
                <LinkContainer id="navigation-tab">
                    <UnsortLink id="navigation-tab-group-btn">
                        {menuItemsData.map((menu, index) => {
                            return <MenuItems items={menu} key={index} />;
                        })}
                    </UnsortLink>
                    <SearchContainer 
                        id="rizzario-search-form" 
                        role="search"
                        // style={{opacity: showform ? '1':'0' }}
                        className={isshowform ? "appear-toggle" : ""}
                    >
                        <input
                            id="search"
                            className={searching? "loading" : ""}
                            aria-label="Search"
                            placeholder="Search RizzarioHealth"
                            type="search"
                            name="s"
                            defaultValue={s}
                            onChange={(event) => {
                                const isFirstSearch = s == null;
                                // submit(event.currentTarget.form, { replace: !isFirstSearch, })
                            }}
                        />
                        <div 
                            id="nav-search-spinner" 
                            aria-hidden hidden={!searching} 
                        />
                        <div className="sr-only" aria-live="polite"></div>
                    </SearchContainer>
                    <ContactContainer>
                        <ButtonImageSearch 
                            id="search-icon"
                            onClick={setToggleForm}
                            isshowform={isshowform ? 1 : 0}
                        />
                    </ContactContainer>
                </LinkContainer>
            </NavigationContainer>
            <Outlet />
        </>
    );
};