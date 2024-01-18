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
                        Nuclear Binding Energy is the energy required to break a nucleus into its constituent nucleons (protons and neutrons), or the energy released when these nucleons combine to form a nucleus. 
                        This process involves a phenomenon known as the "mass defect," where the mass of a nucleus is actually less than the total mass of its constituent nucleons. 
                        According to Einstein's mass-energy equivalence principle, the difference in mass translates into the binding energy of the nucleus.

            Example: The hydrogen-2 nucleus, also called a deuteron, is the simplest kind of nucleus with one proton and one neutron, requires an input of 2.23 million electron volts (MeV) energy to disassemble. 
            In contrast, when a neutron and proton come together to create a deuteron, 2.23 MeV of energy is released as gamma radiation.

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
