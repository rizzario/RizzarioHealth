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
        position: absolute;
        padding: 0;
        align-items: center;
        background-color: var(--green);
        z-index: 5;
    `;

const NavContainer = styled.div
    `
        display: flex;
        margin: 0 5%;
        width: 100%;
        height: 50px;
    `;

const LinkContainer = styled.div
    `
        position: relative;
        width: 55%;
    `;

const ContactContainer = styled.div
    `
        position: relative;
        width: 45%;
        display: flex;
        margin-top: 2px;
    `;

const UnsortLink = styled.ul
    `
        list-style: none;
        padding: 0;
        margin: 0 4%;
        position: absolute;
    `;
    // display: ${props => props.isshowform
    //     ? `flex`
    //     : `none`};
const SearchForm = styled(Form)
    `
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: ${props => props.isshowform
            ? `85%`
            : `0`};;
        position: absolute;
        gap: 5px;
        transition: 0.5s all ease;
        right: 14%;
    `;
const SearchFormIcon = styled.input
    `
        display: ${props => props.isshowform
            ? `block`
            : `none`};
    `;

const ButtonImageSearch = styled.div
    `
        margin-top: 3px;
        right: 5%;
        padding: 2px;
        position: absolute;
        background-image: ${props => props.isshowform 
            ? `url(${searchLogo})` 
            : `url(${crossLogo})`};
        transition: background-image: 0.5s ease;
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
    const [isshowform, toggleForm] = useState(false);

    const setToggleForm = () => {
        toggleForm(!isshowform);
    }
    

    return(
        <>
            <NavigationContainer>
                <Logo />
                <NavContainer id="navigation-tab">
                    <LinkContainer>
                        <UnsortLink id="navigation-tab-group-btn">
                            {menuItemsData.map((menu, index) => {
                                return <MenuItems items={menu} key={index} />;
                            })}
                        </UnsortLink>
                    </LinkContainer>
                    <ContactContainer id="Test">
                        <SearchForm 
                            id="rizzario-search-form" 
                            role="search"
                            isshowform={isshowform ? 1 : 0}
                        >
                            <SearchFormIcon
                                id="search"
                                className={searching? "loading" : ""}
                                isshowform={isshowform ? 1 : 0}
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
                        </SearchForm>
                        <ButtonImageSearch 
                            id="search-icon"
                            onClick={setToggleForm}
                            isshowform={isshowform ? 0 : 1}
                        />
                    </ContactContainer>
                </NavContainer>
            </NavigationContainer>
            <Outlet />
        </>
    );
};