import { Outlet, Link } from "react-router-dom";
import menu from "../assets/icons8-menu-240.png";
import home from "../assets/icons8-home-240.png";
import about from "../assets/icons8-about-240.png";
import contacts from "../assets/icons8-contacts-240.png";
import {useState} from "react";

const Layout = () => {
    const [nav, setNav] = useState(true)
    return (<>
        <div className="md:w-1/3 bg-blue-100 w-full p-4 sticky top-0 z-10 md:rounded-r-2xl">
            <nav className=" sticky top-0 flex md:flex-col gap-4 md:items-end items-start justify-between mr-4">
                <div className="">
                    <h1 className="text-2xl font-bold">
                        <Link className="text-inherit" to="/home">Recipe App</Link>
                    </h1>
                </div>
                <div className="flex flex-col items-end">
                    <img onClick={()=>setNav(!nav)} className="w-10 md:hidden cursor-pointer hover:bg-blue-200 rounded-3xl p-1" src={menu}/>
                    <ul className={nav ? "hidden md:flex flex-col gap-2": "flex md:flex flex-col gap-2"}>
                        <li>
                            <Link to="/home" className="flex items-center gap-2 hover:text-gray-400" href="#">
                                <img className="w-8" src={home}/>
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <a className="flex items-center gap-2 hover:text-gray-400" href="#">
                                <img className="w-8" src={about}/>
                                <span>About</span>
                            </a>
                        </li>
                        <li>
                            <a className="flex items-center gap-2 hover:text-gray-400" href="#">
                                <img className="w-8" src={contacts}/>
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul></div>
            </nav>
        </div>

        <Outlet/>
        </>
    )
};

export default Layout;