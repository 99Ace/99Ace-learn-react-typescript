import React from "react"

type ButtonProps = {
    // function takes nothing and return nothing (void)
    handleClick1: () => void

    // function takes in event and return nothing (void)
    handleClick2: (event: React.MouseEvent<HTMLButtonElement>) => void

    // function takes in event and id and return nothing (void)
    handleClick3: (
        event: React.MouseEvent<HTMLButtonElement>,
        id: number) => void


}

export const Button = (props: ButtonProps) => {
    return <button onClick={event => props.handleClick3(event, 1)}>Click</button>
}