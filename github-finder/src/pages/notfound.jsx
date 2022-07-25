import { Link } from "react-router-dom";
import {FaHome} from "react-icons/fa"; 

function NotFound() {
  return (
    <div class="h-screen w-screen flex items-center">
      <div class="container flex flex-col md:flex-row items-center justify-center px-5d">
        <div class="max-w-md">
          <div class="text-5xl font-dark font-bold">Oops!</div>
          <p class="text-2xl md:text-3xl font-light leading-normal my-2">
            Sorry we couldn't find this page.{" "}
          </p>
          <Link to="/" className="btn btn-outline">
            <FaHome className="mr-2"/>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
