import React from "react";

const CustomButton = (props) => {
    return (
        <div className="">
            <button className=" bg-black text-white w-[100px] h-[35px] my-3 rounded-lg" onClick={props.onClick}>
                {props.title}
            </button>
        </div>
    )
}
export default CustomButton;