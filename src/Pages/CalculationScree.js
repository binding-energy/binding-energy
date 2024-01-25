
// importing constant parameters
import { mass_of_proton, mass_of_neutron, mass_of_electron, aV, aS, aC, aA, aP } from '../Functions/constants.js'


import React from "react";
import { BE_func, mass_defect_func, splitElementName } from "../Functions";
import { useGlobalState } from "../Components/Context";
import { liquid_drop_model, elements } from "../Functions";
import { useEffect } from "react";
import { useState } from "react";
import Typed from 'react-typed';
import IsotopeNotFound from "./IsotopeNotFound";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
//TODO:404 screen
const CalulationScreen = () => {
    const [data, setData] = useState();
    const nav = useNavigate()
    const {
        Z,
        N,
    } = useGlobalState();
    const apiCall = async () => {
        try {
            const url = `https://physics-poc.onrender.com/data?z=${Z}&n=${N}`;

            const response = await fetch(url);
            if (response.ok) {
                const json = await response.json();
                setData(json);
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        apiCall();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!data) {
        return (
            <div className="flex flex-row items-center justify-center h-screen bg-black " >
                <div className="m-2 mb-3 self-center">
                    {/* <h1 className=" text-white text-3xl font-semibold ">Calculating<Typed className=" text-white text-3xl font-semibold " strings={["..."]} typeSpeed={120} backSpeed={140} loop /></h1> */}
                    {/* <h1 className=" text-white text-3xl font-semibold ">Calculating<Typed className=" text-white text-3xl font-semibold " strings={["..."]} typeSpeed={120} backSpeed={140} loop /></h1> */}
                    <h1 className=" text-white text-3xl font-semibold animate-bounce"> Nuclide Search and Binding Energy Calculation<Typed className=" text-white text-3xl font-semibold " strings={["..."]} typeSpeed={120} backSpeed={140} loop /></h1>
                </div>
            </div>
        )
    }
    if (data.msg === "Sorry, but this Isotope is nonexistent!") {
        return (
            <IsotopeNotFound />
        )

    }
    if (data["z"] === "0") {
        return (
            <IsotopeNotFound />
        )
    }

    const atomic_mass = parseInt(data['atomic_mass']) / 1000000;
    const atomic_number = parseInt(data['z'])
    const neutron_number = parseInt(data['n']);
    const element = elements(data['symbol']) + "-" + (atomic_number + neutron_number);
    const elementName = splitElementName(element);
    const mass_number = atomic_number + neutron_number
    return (
        <div className="grid grid-cols-2 p-0 h-screen " >

            {/* Mass Defect */}
            <div className="bg-black text-white p-6 px-0 items-center " >

                <div className="grid grid-cols-2">

                    <div className="mr-2" >
                        <FaArrowLeft size={60} className="w-[55px] h-[45px] p-2" onClick={() => {
                        nav('/')
                    }} />
                    </div>
                    <h1 className=" text-end text-5xl font-bold" >{elementName[0]}</h1>
                    <br />
                    <h1 className=" text-end text-5xl font-bold" > Z = {atomic_number}  </h1>

                </div>
                

                <h2 className=" text-center text-2xl mb-2 font-semibold mt-12"  > The Mass Defect Approach</h2>

                <p className="text-wrap md:text-xl sm:text-sm m-4 mx-8 font-normal lg:leading-[40px] md:leading-[30px]">
                    Binding Energy (B.E.) = Δm c<sup>2</sup>
                    <br />
                    Mass Defect: Δm = [ Z (m<sub>p</sub> + m<sub>e</sub>) + N m<sub>n</sub> ] - m<sub>atom</sub>
                    <br />                    
                    Mass of Proton: m<sub>p</sub> = {mass_of_proton} amu
                    <br />
                    Mass of Neutron: m<sub>n</sub> = {mass_of_neutron} amu
                    <br />
                    Mass of Electron: m<sub>e</sub> = {mass_of_electron} amu
                    <br />
                    Mass of Nuclide: m<sub>atom</sub> = {atomic_mass} amu
                    <br />   
                    Conversion Factor: 1 amu = 931.493614838934 MeV/c<sup>2</sup>
                    <br />  
                    <hr class="hey-that’s-my-line" />                 
                    Δm = {mass_defect_func(atomic_mass, atomic_number, neutron_number).toFixed(8)} amu
                    <br />
                    B.E. = {BE_func(atomic_mass, atomic_number, neutron_number)} MeV
                    <br />
                    B.E. per nucleon (B.E./A): {(BE_func(atomic_mass, atomic_number, neutron_number) / mass_number ).toFixed(8)} MeV
                    <br />
                    <hr class="hey-that’s-my-line" />                       
                    IAEA-NDS (B.E./A): {(data['binding'] / 1000).toFixed(8)} MeV
                </p>
            </div>

            {/* Liquid Drop Model */}
            <div className="bg-white p-6 px-0 justify-center " >
                <h1 className=" text-start text-5xl font-bold">{elementName[1]}</h1>
                <h1 className=" text-start text-5xl font-bold" > N = {neutron_number} </h1>

                <h2 className=" text-center text-2xl font-semibold mb-2  mt-12" > The Liquid Drop Model</h2>
                <p className="text-wrap md:text-xl sm:text-sm m-4 mx-8 font-normal lg:leading-[40px] md:leading-[30px]">
                    B.E. = a<sub>V</sub>A - a<sub>S</sub>A<sup>2/3</sup> - a<sub>c</sub>Z(Z-1)A<sup>-1/3</sup> - a<sub>A</sub>(N-Z)<sup>2</sup>A<sup>-1</sup> ± a<sub>P</sub>A<sup>-1/2</sup>
                    <br />
                    Volume term coefficient: a<sub>V</sub> = {aV} MeV
                    <br />
                    Surface term coefficient: a<sub>S</sub> = {aS} MeV
                    <br />
                    Coulomb term coefficient: a<sub>C</sub> = {aC} MeV                    
                    <br />
                    Asymmetry term coefficient: a<sub>A</sub> = {aA} MeV
                    <br />
                    Pairing term coefficient: a<sub>P</sub> = {aP} MeV
                    <br />
                    <hr class="hey-that’s-my-line" />    
                    B.E.: {liquid_drop_model(atomic_number, neutron_number).toFixed(8) } MeV 
                    <br />
                    B.E./A: {(liquid_drop_model(atomic_number, neutron_number) / mass_number).toFixed(8) } MeV
                    <br />
                    <hr class="hey-that’s-my-line" />
                    IAEA-NDS (B.E./A): {(data['binding'] / 1000).toFixed(8)} MeV
                </p>
            </div>

            {/* <div className="col-span-2 bg-white lg:hidden md:m-1" ></div> */}

            {/*Summary */}
            {/* <div className="mt-0 bg-black text-white py-2 px-0 items-start col-span-2 mb-10" >
                <h2 className=" text-start text-2xl mb-2 font-normal mt-6 px-6"  >Summary</h2>
                <p className="px-4 text-wrap md:text-xl sm:text-sm m-4 font-normal lg:leading-[40px] md:leading-[30px] " >
                    According to our mass defect calculations, the binding energy of {element} is approxiately {mass_defect_func(atomic_mass, atomic_number, neutron_number)}
                    MeV and the binding energy per nucleon is approxiately {(mass_defect_func(atomic_mass, atomic_number, neutron_number) / atomic_mass).toFixed(8)}.
                    According to our liquid drop model calculations, the binding energy of {element} is approxiately {liquid_drop_model(atomic_mass, atomic_number, neutron_number).toFixed(8)} Mev and the binding energy per nucleon is approxiately {(liquid_drop_model(atomic_mass, atomic_number, neutron_number) / atomic_mass).toFixed(8)} MeV.
                </p>

            </div> */}

            {/* <div className="mt-0 bg-white text-black py-2 px-0 items-start col-span-2 j " >

            </div> */}
            {/* <div  className="col-span-2 items-center" >
                <button className=" bg-black text-white w-[100px] h-[35px] my-3 rounded-lg">
                    {"Go BACK"}
                </button>
            </div> */}

        </div>
    )
}
export default CalulationScreen;
