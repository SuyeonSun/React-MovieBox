import Link from "next/link";
import {useRouter} from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav>
          <FontAwesomeIcon icon={faVideo} size="2x"></FontAwesomeIcon>
          <div>
            <Link href="/">
              <a style={{textDecoration:'none', color: 'white'}} className={router.pathname === "/" ? "active" : ""}>MOVIE BOX</a>
            </Link>
          </div>
        </nav>
    );
}