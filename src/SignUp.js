import React, {useState} from "react"

function SignUp() {

    const [user, setUser] = useState("")
    const [pin, setPin] = useState("")

    function handleUserChange(e) {
        setUser(e.target.value);
    }

    function handlePinChange(e) {
        setPin(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:8080/user/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName: user,
                password: pin
            })
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                Enter Username:
                <input onChange={handleUserChange}/>
            </div>
            <div>
                Enter Pin:
                <input onChange={handlePinChange}/>
            </div>
            <button>Join!</button>
        </form>
    )
}

export default SignUp