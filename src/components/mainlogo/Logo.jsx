import { 
    Link,
    Outlet } from "react-router-dom";
import styled from "styled-components";
import { mainLogo } from "../../Images/images";
import 'bootstrap/dist/css/bootstrap.min.css';

const LogoButton = styled(Link)
    `
        text-decoration: none;
    `;

const LogoContainer = styled.div
    `
        display: flex;
        flex-direction: columns;
    `;

const HeavyLogo = styled.div
    `
        font-family: "Open Sans", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-weight: 900;
        font-size: 20px;
        color: black;
    `;
const PlainLogo = styled.div
    `
        font-family: "Open Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 600;
        font-style: normal;
        font-size: 22px;
        color: white;
        text-decoration: none;
    `;

export default function Logo() {
    return(
        <LogoButton reloadDocument to="./" id="navigation-main-logo">
            <LogoContainer>
                <HeavyLogo>Rizz@rio<img src={mainLogo} alt="LeatLogo" />
                </HeavyLogo>
                <PlainLogo>HEALTH</PlainLogo>
            </LogoContainer>
        </LogoButton>
    )
};