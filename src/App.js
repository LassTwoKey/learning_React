import React, { useState } from 'react';
import './App';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';

function App() {
	const [users, setUsers] = useState([]);

	const onAddUserHandler = (user) => {
		setUsers(prevUsers => [user, ...prevUsers]);
	}

	return (
		<div className="wrapper">
			<AddUser users={users} addHandler={onAddUserHandler} />
			<UsersList users={users} />
		</div>
	);
}

export default App;
