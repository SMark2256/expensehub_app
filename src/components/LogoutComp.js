import React from 'react'
import { useHistory } from 'react-router-dom' // If you're using React Router
import { signOut } from 'firebase/auth'
// import { auth } from './firebaseConfig' // Import your Firebase configuration.

function Logout() {
	const history = useHistory()

	const handleLogout = async () => {
		try {
			await signOut(auth)
			// User has successfully logged out.
			history.push('/login') // Redirect to the login page.
		} catch (error) {
			// Handle logout errors here.
			console.error(error)
		}
	}

	return (
		<div>
			<button onClick={handleLogout}>Logout</button>
		</div>
	)
}

export default Logout
