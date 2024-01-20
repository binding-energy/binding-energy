import React from "react";
import { mass_defect_be, mass_defect, splitElementName } from "../Functions";
import { useGlobalState } from "../Components/Context";
import { liquid_drop_model, elements } from "../Functions";
import { useEffect } from "react";
import { useState } from "react";
import IsotopeNotFound from "./IsotopeNotFound";
import Typed from 'react-typed';

//TODO:404 screen
const CalulationScreen = () => {
    const [data, setData] = useState();

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
                    <h1 className=" text-white text-3xl font-semibold animate-bounce">Calculating<Typed className=" text-white text-3xl font-semibold " strings={["..."]} typeSpeed={120} backSpeed={140} loop /></h1>

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
    const nutreon_number = parseInt(data['n']);
    const element = elements(data['symbol']) + "-" + (atomic_number + nutreon_number);
    const elementName = splitElementName(element);
    const mass_of_proton = 1.007276466583; // unit amu //1.007825031898 1.00782518 1.007276466621  1.007276466583
    const mass_of_nutreon = 1.00866491590; // unit amu // 1.00866491590
    const mass_of_electron = 5.48579909065 * (10 ** -4);
    return (
        <div className="grid grid-cols-2 p-0 h-screen " >

            {/* Mass Defect */}
            <div className="bg-black text-white p-6 px-0 items-center " >
                <h1 className=" text-end text-5xl font-bold" >{elementName[0]}</h1>
                <h2 className=" text-center text-2xl mb-2 font-semibold mt-12"  >Mass Defect</h2>

                <p className="text-wrap md:text-xl sm:text-sm m-4 mx-8 font-normal lg:leading-[40px] md:leading-[30px]">
                    Equation: B.E. = Δmc<sup>2</sup>
                    <br />
                    Mass of Proton: {mass_of_proton} amu
                    <br />
                    Mass of Nuetron: {mass_of_nutreon} amu
                    <br />
                    Mass of Electron: {mass_of_electron} amu
                    <br />
                    Atomic Number (Z): {atomic_number}
                    <br />
                    Nuetron Number (N): {nutreon_number}
                    <br />
                    Atomic Mass: {atomic_mass}
                    <br />
                    Mass Defect (Δm): {mass_defect(atomic_mass, atomic_number, nutreon_number).toFixed(4)} amu
                    <br />
                    Binding Energy (B.E): {mass_defect_be(atomic_mass, atomic_number, nutreon_number)} MeV
                    <br />
                    Binding Energy per nucleon (B.E/A): Binding Energy: {(mass_defect_be(atomic_mass, atomic_number, nutreon_number) / atomic_mass).toFixed(8)} MeV
                    <br />
                    Library Binding Energy per nucleon (B.E/A): {data['binding'] / 1000} MeV
                </p>
            </div>

            {/* Liquid Drop Model */}
            <div className="bg-white p-6 px-0 justify-center " >
                <h1 className=" text-start text-5xl font-bold">{elementName[1]}</h1>
                <h2 className=" text-center text-2xl font-semibold mb-2  mt-12" >Liquid Drop Model</h2>
                <p className="text-wrap md:text-xl sm:text-sm m-4 mx-8 font-normal lg:leading-[40px] md:leading-[30px]">
                    Equation: B.E. = a<sub>V</sub>A - a<sub>S</sub>A<sup>2/3</sup> - a<sub>c</sub>Z(Z-1)<sup>2</sup>/A<sup>1/3</sup> - a<sub>A</sub>(A-2Z)<sup>2</sup>/A<sup>2</sup> + δ(Z,A)
                    <br />
                    a<sub>V</sub> = 15.85 MeV
                    <br />
                    a<sub>S</sub> = 18.34 MeV
                    <br />
                    a<sub>A</sub> = 23.21 MeV
                    <br />
                    a<sub>C</sub> = 0.714 MeV
                    <br />
                    a<sub>P</sub> = 12.00 MeV
                    <br />
                    Atomic Mass (A): {atomic_mass.toFixed(0)}
                    <br />
                    Atomic Number (Z): {atomic_number}
                    <br />
                    Binding Energy (B.E): {liquid_drop_model(atomic_mass, atomic_number, nutreon_number).toFixed(4)} MeV
                    <br />
                    Binding Energy per nucleon (B.E/A): {liquid_drop_model(atomic_mass, atomic_number, nutreon_number) / atomic_mass} MeV
                    <br />
                    Library Binding Energy per nucleon (B.E/A): {data['binding'] / 1000} MeV
                </p>
            </div>

            {/* <div className="col-span-2 bg-white lg:hidden md:m-1" ></div> */}

            {/*Summary */}
            {/* <div className="mt-0 bg-black text-white py-2 px-0 items-start col-span-2 mb-10" >
                <h2 className=" text-start text-2xl mb-2 font-normal mt-6 px-6"  >Summary</h2>
                <p className="px-4 text-wrap md:text-xl sm:text-sm m-4 font-normal lg:leading-[40px] md:leading-[30px] " >
                    According to our mass defect calculations, the binding energy of {element} is approxiately {mass_defect_be(atomic_mass, atomic_number, nutreon_number)}
                    MeV and the binding energy per nucleon is approxiately {(mass_defect_be(atomic_mass, atomic_number, nutreon_number) / atomic_mass).toFixed(2)}.
                    According to our liquid drop model calculations, the binding energy of {element} is approxiately {liquid_drop_model(atomic_mass, atomic_number, nutreon_number).toFixed(2)} Mev and the binding energy per nucleon is approxiately {(liquid_drop_model(atomic_mass, atomic_number, nutreon_number) / atomic_mass).toFixed(2)} MeV.
                </p>

            </div> */}

            {/* <div className="mt-0 bg-white text-black py-2 px-0 items-start col-span-2 j " >

            </div> */}
        </div>
    )
}
export default CalulationScreen;