import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserList from './components/UserList/UserList';
import EachUser from './components/EachUser/EachUser';
import './App.scss';

function App() {

  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const updatePage = (currentPage, type) => {
    let newPage = currentPage;
    type === 'next' ? newPage += 1 : newPage--;

    setPage(newPage);
  };


  useEffect(() => {
    axios.get(`http://localhost:9000/users?pageNumber=${page}`)
    .then((data) => {
      setUsers(data.data)
    })
  }, [page]);

  return (
    <div className="App">
      {currentUser ?
        <div className="profile-page">
          <h1>Employee Profile</h1>
          <EachUser user={currentUser} closeUser={setCurrentUser} />
        </div> :
        <div>
        <UserList users={users} setUser={setCurrentUser} currentPage={page} changePage={updatePage}/>
        </div>
      }
    </div>
  );
}

export default App;
