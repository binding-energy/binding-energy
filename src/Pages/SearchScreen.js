import React, { useState } from "react";
import { useGlobalState } from "../Components/Context";
import CustomInput from "../Components/CustomInput";
import CustomButton from "../Components/CustomButton";
import { useNavigate } from "react-router-dom";
const SearchScreen = () => {
    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)

    const [errMsg1, setErrMsg1] = useState("");
    const [errMsg2, setErrMsg2] = useState("");

    const {
        Z,
        setZ,
        N,
        setN,
    } = useGlobalState();

    const onClick = () => {
        if (Z && N) {
            nav('/calulations')
            setError1(false);
            setError2(false);
        }
        else if (!Z && !N) {
            setError1(true);
            setErrMsg1("This field cannot be empty!")
            setError2(true);
            setErrMsg2("This field cannot be empty!")
        }
        else if (!Z) {
            setError1(true);
            setErrMsg1("This field cannot be empty!")
        }
        else if (!N) {
            setError2(true);
            setErrMsg2("This field cannot be empty!")
        }

     }
    const nav = useNavigate();

    return (
        <div className="grid grid-cols-2 p-0 h-screen " >

            {/* Description */}
            <div className="bg-black text-white p-6 px-0 items-center " >
                <h1 className=" text-end text-5xl font-semibold" >Binding Ener</h1>
                <h2 className=" text-center text-2xl mb-2 font-normal mt-12"  >What is Nuclear Binding Energy?</h2>

                <div className="grid justify-items-center px-6">
                    <p className="text-wrap md:text-xl sm:text-sm m-4 font-normal lg:leading-[40px] md:leading-[30px] " >
                        Nuclear binding energy is the amount of energy required to separate a particle
                        from a system of particles or to disperse all the particles of the system.
                        This website calculates the binding energy of given isotopes using two methods.
                        The first method is the mass defect approach,
                        which is where you find the difference between the summation of the mass of the individual parts of an atom
                        and the mass of the atom itself. The second method is by using the liquid drop model,
                        an experimental model that can be used to determine an atom's binding energy.
                    </p>
                </div>


            </div>

            {/* Search */}
            <div className="bg-white p-6 px-0 justify-center " >

                <h1 className=" text-start text-5xl font-semibold">gy Calculator</h1>
                <h2 className=" text-center text-2xl font-normal mb-2  mt-12" >Enter Isotope Properties:</h2>

                <div className="grid justify-items-center " >
                    <CustomInput placeholder={"Enter the number of protons (Z)"} value={Z} onChange={({ target }) => { setZ(target.value) }} error={error1} error_message={errMsg1} />
                    <CustomInput placeholder={"Enter the number of neutrons (N)"} value={N} onChange={({ target }) => { setN(target.value) }} error={error2} error_message={errMsg2} />


                    <div className=" mx-[110px]" >
                        <CustomButton title={"Search"} onClick={() => onClick()} />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default SearchScreen;