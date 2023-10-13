// UserList.js
import * as React from 'react'
import {
	List,
	Datagrid,
	TextField,
	EditButton,
	DeleteButton,
} from 'react-admin'

const UserList = () => (
	<List>
		<Datagrid>
			<TextField source='id' />
			<TextField source='username' />
			<TextField source='email' />
			<EditButton basePath='/' />
			<DeleteButton basePath='/' />
		</Datagrid>
	</List>
)

export default UserList
