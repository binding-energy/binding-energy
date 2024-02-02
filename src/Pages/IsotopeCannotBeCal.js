import React from "react";
import CustomButton from "../Components/CustomButton";
import { useNavigate } from "react-router-dom";
const IsotopeCannotBeCal = (props) => {
    const nav = useNavigate();
    return (

        <div>
            {/* <FontAwesomeIcon icon="fas fa-frown" /> */}
            {/* ICON */}
            <div className="flex flex-col items-center  h-screen bg-[#6f263d] text-white p-10" >
                <div className="m-4 mb-3 self-center">
                    {/* <h1 className=" text-white text-3xl font-semibold ">Calculating<Typed className=" text-white text-3xl font-semibold " strings={["..."]} typeSpeed={120} backSpeed={140} loop /></h1> */}
                    <h1 className="  text-5xl font-bold text-center mb-6">{props.element}:</h1>
                    
                    <div>
                        <h1 className="  text-3xl font-semibold text-start">Number of protons (Z) = {props.z}</h1>
                        <h1 className="  text-3xl font-semibold text-start">Number of neutrons (N) = {props.n}</h1>
                        <h1 className="  text-3xl font-semibold text-start">Atomic Mass: unkown</h1>
                    </div>


                </div>
                <div>
                    
                <h1 className="  text-3xl font-semibold text-center my-4">Due to the atomic mass of this element being unknown at the moment, <br/> we are unable to calculate this isotope's binding energy at this time.</h1>
                    <h1 className="  text-3xl font-semibold text-center m">Would you like to search again?</h1>
                </div>
                <div className="self-center">
                    <CustomButton title={"GO BACK"} onClick={() => nav('/')} />
                </div>
            </div>
            {/* BUTTON */}
            {/* <div>
                <CustomButton title={"GO BACK"} />
            </div> */}
        </div>
    )
}
export default IsotopeCannotBeCal;
