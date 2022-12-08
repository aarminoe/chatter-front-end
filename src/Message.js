function Message({messages}) {
    return(
        <div>
            {messages.map((message) => {
                return (<div>
                    {message.messageText}
                    </div>)
            })}
        </div>
    )
}

export default Message