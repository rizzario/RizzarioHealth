import { useRouteError, useNavigate, Link, } from "react-router-dom";
import styled from "styled-components";

const ErrorHandle = styled.div
  `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `;

const HomeButton = styled.div
  `
    background-color: var(--green);
    padding: 10px;
    border-radius: 10px;
  `;

const HeaderAlert = styled.h1
  `
    font-size: 72px;
  `;

export default function ErrorPage() {

  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <ErrorHandle>
        <HeaderAlert>Oops!</HeaderAlert>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link reloadDocument to="./" >
          <HomeButton>Home Page</HomeButton>
        </Link>
      </ErrorHandle>
    </>
  );
}