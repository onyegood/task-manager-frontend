import React from "react";

interface PropData {
    id: string;
    type: string;
    className: string;
    placeholder: string;
    name: string;
    title: string;
    error?: string;
    value: string;
    touched?: boolean;
    handleChange: any;
    handleBlur: any;
}
const InputField = (props: PropData) => {
    const {
        title,
        error,
        touched,
        handleChange,
        handleBlur,
    } = props;
    return (
        <>
            <label>{title}</label>
            <input
                {...props}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {error && touched && <p className="small text-danger mt-2">{error}</p>}
        </>
    )
}

export default InputField;