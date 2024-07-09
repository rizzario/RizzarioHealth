import { 
  useRouteError, 
  Link, 
} from "react-router-dom";


export default function ErrorPage() {

  const error = useRouteError();
  console.error(error);

  return (
    <>
      <section className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="text-green-3 text-22I font-sans font-bold">404</h1>
          <h1 className="mt-4 text-20I font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-16 leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link 
              reloadDocument to="./" 
              className="rounded-md bg-green-2 px-3.5 py-2.5 text-16 font-bold text-white shadow-sm hover:bg-green-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-3">
                Go back home
            </Link>
            <a href="#" className="text-16 font-semibold text-gray-main-900">Contact support <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </section>
    </>
  );
}