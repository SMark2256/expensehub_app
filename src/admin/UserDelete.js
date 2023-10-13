import * as React from 'react'
import { DeleteWithConfirmButton, SimpleForm, useDelete } from 'react-admin'
import { Button } from 'ra-ui-materialui'

const UserDelete = props => {
	const { record, resource } = props
	const { loading, handleDelete } = useDelete(resource, record.id, record)

	return (
		<DeleteWithConfirmButton {...props}>
			<SimpleForm>
				<h3>Are you sure you want to delete this user?</h3>
				<Button
					label='Delete'
					disabled={loading}
					onClick={handleDelete}
				/>
			</SimpleForm>
		</DeleteWithConfirmButton>
	)
}

export default UserDelete
