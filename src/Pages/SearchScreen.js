import React from "react";
import NavBar from "../Components/SearchScreenComps/Nav.bar";
import Hero from "../Components/SearchScreenComps/Hero";

const SearchScreen = () => {

    return (
    <div className="flex flex-col items-start p-0 bg-white text-black h-full" >
        <NavBar />
        <Hero />
    </div>
    )
}
export default SearchScreen;