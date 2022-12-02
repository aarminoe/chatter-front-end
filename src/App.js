import Header from './Header';
import './App.css';
import React, {useState, useEffect} from 'react';
import SignUp from './SignUp';
import ChatBox from './Chatbox';
function App() {

  const [addUser, setAddUser] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/user/all")
    .then(resp => resp.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div className="App">
      <p><Header/></p>
      <ChatBox />
      <p>
        <SignUp />
      </p>
    </div>
  );
}

export default App;
