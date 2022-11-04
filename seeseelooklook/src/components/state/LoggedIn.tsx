import { useState } from "react"

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => { setIsLoggedIn(true) }
    const handleLogout = () => { setIsLoggedIn(false) }
    return <>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <h1>User is {isLoggedIn ? "logged in" : "logged out"}</h1>

    </>
}