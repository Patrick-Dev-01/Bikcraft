import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

interface TextareaProps{
    name: string;
}

export default function Textarea({ name, ...rest }: TextareaProps){
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const { fieldName, defaultValue, registerField, error, clearError } = useField(name);
    
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: textareaRef.current,
            path: 'value',
        })
    }, [registerField, fieldName])

    return (
        <>
            <textarea ref={textareaRef} name={name} defaultValue={defaultValue} 
            {...rest}
            onFocus={clearError}/>
            { error && <span style={{ color: '#f00' }}>{ error }</span> }
        </>
    )
}