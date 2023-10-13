import { useEffect, useState } from 'react'
import getUsers from '../utils/getData'

const UserListComp = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		getUsers().then(data => setUsers(data))
	}, [])

	return (
		<div className='flex flex-row'>
			{users.map((user, index) => {
				return (
					<div
						key={index}
						className='flex basis-1/4 flex-col justify-center'>
						<p>{user.name}</p>
						<p>{user.email}</p>
					</div>
				)
			})}
		</div>
	)
}

export default UserListComp
