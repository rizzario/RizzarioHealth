import { 
  useRouteError, 
  useNavigate, 
  Link, 
} from "react-router-dom";


export default function ErrorPage() {

  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-7xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link reloadDocument to="./" className="p-[10px] rounded-[10px] bg-green-1 font-sans no-underline text-white hover:text-black outeline-none shadow-none">
          Home Page
        </Link>
      </div>
    </>
  );
}