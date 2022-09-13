import React, { } from 'react';
import ContentWhiteBlock from './UI/ContentWhiteBlock';
import './UsersList.scss';

function UsersList({ users }) {
	if (users.length > 0) {
		return (
			<ContentWhiteBlock>
				<ul className="users-list">
					{users.map(user => (
						<li className="users-item" key={user.id}>{`${user.username} (${user.age} years old)`}</li>
					))}
				</ul>
			</ContentWhiteBlock>
		);
	}
}

export default UsersList;