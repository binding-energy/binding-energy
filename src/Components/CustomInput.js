import React from "react";
const CustomInput = (props) => {

    return (
        <>
            <div className="justify-center">
                <input className={ !props.error ? " border-2 px-2 rounded-md my-2 w-[360px] h-[40px] text-black " : "border-2 px-2 rounded-md my-2 w-[360px] h-[40px] text-black border-red-600"} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
            </div>
            {props.error && <h1 className=" w-[360px] text-red-600" >{props.error_message}</h1>}
            {/* style={{ color: 'red', alignSelf: 'start', width: 300, } */}
        </>
    )
}
export default CustomInput;