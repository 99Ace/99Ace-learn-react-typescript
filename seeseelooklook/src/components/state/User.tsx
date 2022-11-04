import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}
export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    // another way is as follows;
    // const [user, setUser] = useState<AuthUser>({} as AuthUser)
    // const handleLogout = () => { setUser({}) }

    const handleLogin = () => { setUser({ name: "John", email: "john@example.com" }) }
    const handleLogout = () => { setUser(null) }
    return <>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is {user?.name}</div>
        <div>User email is {user?.email}</div>

    </>
}