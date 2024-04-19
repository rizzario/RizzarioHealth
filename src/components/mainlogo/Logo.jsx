import { 
    Link,
} from "react-router-dom";
import { mainLogo } from "../../Images/images";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Logo() {
    return(
        <Link reloadDocument to="./" className="no-underline" id="navigation-main-logo">
            <div className="flex flex-row pt-2.5">
                <div className="font-sans text-20I text-black flex flex-row content-center items-center">
                    Rizz@rio
                    <img className="size-6" src={mainLogo} alt="LeatLogo" />
                </div>
                <div className="font-sans text-22I text-white no-underline">
                    HEALTH
                </div>
            </div>
        </Link>
    )
};