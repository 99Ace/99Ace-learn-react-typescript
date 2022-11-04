type NavbarProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}
export const OptionalType = (props: NavbarProps) => {
    const { messageCount = 0 } = props
    return <>
        <h1>Option Type</h1>
        <p>Welcome, {props.name}!</p>
        <p>There are total {messageCount} unread messages</p>
        {
            props.isLoggedIn ? <div>Online</div> : <div>Offline</div>
        }

    </>
}
