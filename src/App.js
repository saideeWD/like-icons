
import './App.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useEffect, useState } from 'react';

function App() {
  const [like ,setLike] = useState(' ');
const [users, setUser] = useState([]);
const[single, singleUser] = useState({});
const [randomUser, setRandomUser] = useState({});

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=> setUser(data));

  // single user
  fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res=>res.json())
  .then(data=> singleUser(data));
  // Random user
  fetch('https://randomuser.me/api/')
  .then(res=>res.json())
  .then(data=> setRandomUser(data.results[0]));

})

console.log(randomUser)
 
  return (
    <div className="App">

    
        <ThumbUpIcon onClick={()=>setLike(like ?'':'primary')} color={like}></ThumbUpIcon>
        <AccessAlarmIcon ></AccessAlarmIcon>
        <h5>Name : {single.name}</h5>
        {/* <h5> Random : {randomUser.name && randomUser.name.first}</h5> */}
        <h5> Random : {randomUser.name?.first}</h5>
        
        {
          users.map(user => <li>{user.name}</li>)
        }
     
       
    </div>
  );
}

export default App;
