// UserEdit.js
import * as React from 'react'
import { Edit, PasswordInput, SimpleForm, TextInput } from 'react-admin'

const UserEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source='username' />
			<PasswordInput source='password' />
			<TextInput source='email' />
		</SimpleForm>
	</Edit>
)

export default UserEdit
