import React from "react"

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = (props: InputProps) => {
    return (
        <>
            <label>Name: </label>
            <input type="text" onChange={props.handleChange} value={props.value} />
        </>
    )
}