import React from "react";

const CustomButton = (props) => {
    return (
        <div className="">
            <button className=" bg-[#ffcd00] text-white w-[150px] h-[45px] my-3 rounded-lg" onClick={props.onClick}>
                <p className="text-md" >{props.title}</p>
            </button>
        </div>
    )
}
export default CustomButton;