import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

interface InputProps{
    name: string;
}

export default function Input({ name, ...rest }: InputProps){
    const inputRef = useRef<HTMLInputElement>(null);

    const { fieldName, defaultValue, registerField, error, clearError } = useField(name);
    
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [registerField, fieldName])

    return (
        <>
            <input 
                ref={inputRef} 
                type="text" name={name} 
                defaultValue={defaultValue}
                onFocus={clearError} 

                {...rest}
            />
            { error && <span style={{ color: '#f00' }}>{ error }</span> }
        </>
    )
}