// UserCreate.js
import * as React from 'react'
import { Create, SimpleForm, TextInput, PasswordInput } from 'react-admin'

const UserCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source='username' />
			<PasswordInput source='password' />
			<TextInput source='email' />
		</SimpleForm>
	</Create>
)

export default UserCreate
