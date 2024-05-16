import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const NavBar = (props) => {
    const nav = useNavigate()
    let bol = props.bol;
    return (
        <div className="bg-[#6f263d] text-white flex justify-between items-start h-[200px] w-[485px] md:w-[700px] lg:w-[900px] mx-auto p-8 shadow-md hero">
            {
            bol ? (
                    <div className="mr-2" >
                        <FaArrowLeft size={60} className="w-[50px] h-[45px] p-2" onClick={() => {
                            nav('/')
                        }} />
                    </div>
                )
                : (
                    <div></div>
                )

            }
            {/* <h1 className="px-2 w-full text-start text-[20px] font-semibold" >Nuclear binding Energy Calculator.</h1> */}

        </div>
    )
}

export default NavBar;