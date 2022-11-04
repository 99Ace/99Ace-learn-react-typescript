type NavbarProps = {
    name:string,
    messageCount : number,
    isLoggedIn : boolean
}
const Navbar =(props : NavbarProps) => {
    return <>
    <h1>Navbar</h1>
    <p>Welcome, {props.name}!</p>
    <p>There are total {props.messageCount} unread messages</p>
    {
        props.isLoggedIn? <div>Online</div>: <div>Offline</div>
    }

    </>
}
export default Navbar;