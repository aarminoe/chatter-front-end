import Header from './Header';
import './App.css';
import React, {useState, useEffect} from 'react';
import SignUp from './SignUp';
import ChatBox from './Chatbox';
import Message from './Message';
function App() {

  const [addUser, setAddUser] = useState(false);
  const [allUsers, setAllUsers] = useState(null)
  const [seeUsers, setSeeUsers] = useState(false)

  useEffect(() => {
    fetch("http://localhost:8080/user/all")
    .then(resp => resp.json())
    .then(data => setAllUsers(data))
  }, [])

  return (
    <div className="App">
      <p><Header/></p>
      <button onClick={() => setSeeUsers((seeUsers) => !seeUsers)}>See Users</button>
      {seeUsers ? <ChatBox allUsers={allUsers}/> : null}
      
      <p>
        <SignUp />
      </p>
      <div>
        <Message />
      </div>
    </div>
  );
}

export default App;
