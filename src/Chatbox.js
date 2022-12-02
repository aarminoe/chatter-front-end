function ChatBox({allUsers}) {
    return (
        <div>
            {allUsers.map((user) => {
            return (
                <div>{user.userName}</div>
                )
            })}
        </div>
    )
}

export default ChatBox