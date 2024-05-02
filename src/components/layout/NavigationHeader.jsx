import { 
    Link,
    Form,
    useLoaderData,
    useNavigation,
    useSubmit,
} from "react-router-dom";
import { 
    useState,
    Suspense,
} from "react";
import styled from "styled-components";
import Logo from "../mainlogo/Logo";
import { menuItemsData } from "./navigation/MenuItemsData";
import MenuItems from "./navigation/MenuItems";
import { getContacts } from "../../pages/contact/contacts";
import isPropValid from '@emotion/is-prop-valid';

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

export default function NavigationHeader() {
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
        <Suspense fallback={<></>}>
            <nav className="navigationbar" >
                <Logo />
                <div className="navigation-div" id="navigation-tab">
                    <div className="navigation-link-div">
                        <ul className="navigation-ul" id="navigation-tab-group-btn">
                            {menuItemsData.map((menu, index) => {
                                return <MenuItems items={menu} key={index} />;
                            })}
                        </ul>
                    </div>
                    <div className="contact-div" id="Test">
                        <Form 
                            id="rizzario-search-form" 
                            role="search"
                            className={`form-search ${isshowform ? 'form-disp':'form-hide'}`}
                            isshowform={isshowform ? 1 : 0}
                        >
                            <input
                                id="search"
                                className={`${isshowform ? 'input-disp':'input-hide'} `}
                                // ${searching ? 'form-loading' : ''}`
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
                        </Form>
                        <div 
                            id="search-icon"
                            className={`imagesearch ${isshowform ? 'crossLogo' : 'searchLogo'}`}
                            onClick={setToggleForm}
                            isshowform={isshowform ? 0 : 1} />
                    </div>
                </div>
            </nav>
        </Suspense>
    );
};