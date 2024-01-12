import React from "react";

const IsotopeNotFound = () => {
    return (
        <div>
            {/* <FontAwesomeIcon icon="fas fa-frown" /> */}
            {/* ICON */}
            <div className="flex flex-row items-center justify-center h-screen bg-black " >
                <div className="m-2 mb-3 self-center">
                    {/* <h1 className=" text-white text-3xl font-semibold ">Calculating<Typed className=" text-white text-3xl font-semibold " strings={["..."]} typeSpeed={120} backSpeed={140} loop /></h1> */}
                    <h1 className=" text-white text-3xl font-semibold ">Sorry, but this Isotope is nonexistent!</h1>
                </div>
            </div>
            {/* BUTTON */}
            {/* <div>
                <h1 className="text-center ">Go Back</h1>
            </div> */}
        </div>
    )
}
export default IsotopeNotFound;