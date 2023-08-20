import image1 from "../assets/stew.jpg";
import image2 from "../assets/curry.jpg";
import image3 from "../assets/noodles.jpg";
import {Link} from "react-router-dom";

function Home(){
    return (
        <main className="md:w-2/3 w-full flex flex-col justify-around p-8">
            <div className="w-fit md:self-end self-center">
                <a className="text-red-600 mr-4 font-bold p-1 border-2 border-red-600 rounded-lg hover:bg-red-300 hover:text-white" href="#">Log in</a>
                <a className="text-red-600 font-bold p-1 border-2 border-red-600 rounded-lg hover:bg-red-300 hover:text-white" href="#">Sign up</a>
            </div>

            <header>
                <h2 className="text-6xl">Recipes</h2>
                <h3 className="text-2xl">For Customers</h3>
            </header>

            <div className="mt-6">
                <h4 className="text-2xl mb-4">Latest Recipes</h4>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 w-full">
                    <Link to="/detail">
                        <div className="shadow-md bg-blue-100 rounded-lg hover:scale-105 transition-transform ease-in-out duration-300">
                            <img className="w-full h-3/4 rounded-t-lg" src={image1} alt="stew"/>
                            <div className="w-full flex flex-col pl-4">
                                <span className="font-bold text-gray-600">5 Bean Chili Stew</span>
                                <span>Recipe by Mario</span>
                            </div>
                        </div>
                    </Link>

                    <div className="shadow-md bg-blue-100 rounded-lg hover:scale-105 transition-transform ease-in-out duration-300">
                        <img className="w-full h-3/4 rounded-t-lg" src={image2} alt="stew"/>
                        <div className="w-full flex flex-col pl-4">
                            <span className="font-bold text-gray-600">5 Bean Chili Stew</span>
                            <span>Recipe by Mario</span>
                        </div>
                    </div>
                    <div className="shadow-md bg-blue-100 rounded-lg hover:scale-105 transition-transform ease-in-out duration-300">
                        <img className="w-full h-3/4 rounded-t-lg" src={image3} alt="stew"/>
                        <div className="w-full flex flex-col pl-4">
                            <span className="font-bold text-gray-600">5 Bean Chili Stew</span>
                            <span>Recipe by Mario</span>
                        </div>
                    </div>
                </div>

                <h4 className="text-2xl mb-4 mt-6">Most Popular</h4>

                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 w-full">

                    <div className="shadow-md bg-blue-100 rounded-lg hover:scale-105 transition-transform ease-in-out duration-300">
                        <img className="w-full h-3/4 rounded-t-lg" src={image1} alt="stew"/>
                        <div className="w-full flex flex-col pl-4">
                            <span className="font-bold text-gray-600">5 Bean Chili Stew</span>
                            <span>Recipe by Mario</span>
                        </div>
                    </div>

                    <div className="shadow-md bg-blue-100 rounded-lg hover:scale-105 transition-transform ease-in-out duration-300">
                        <img className="w-full h-3/4 rounded-t-lg" src={image2} alt="stew"/>
                        <div className="w-full flex flex-col pl-4">
                            <span className="font-bold text-gray-600">5 Bean Chili Stew</span>
                            <span>Recipe by Mario</span>
                        </div>
                    </div>
                    <div className="shadow-md bg-blue-100 rounded-lg hover:scale-105 transition-transform ease-in-out duration-300">
                        <img className="w-full h-3/4 rounded-t-lg" src={image3} alt="stew"/>
                        <div className="w-full flex flex-col pl-4">
                            <span className="font-bold text-gray-600">5 Bean Chili Stew</span>
                            <span>Recipe by Mario</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-2">
                <div className="border-2 border-blue-400 rounded-2xl p-2 font-medium bg-blue-300 hover:bg-blue-100 hover:cursor-pointer">Load more</div>
            </div>
        </main>
    )
}
export default Home;