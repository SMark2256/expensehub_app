// import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom' // If you're using React Router
// import { signInWithEmailAndPassword } from 'firebase/auth'
// // import { auth } from './firebaseConfig' // Import your Firebase configuration.

// function Login() {
// 	const [email, setEmail] = useState('')
// 	const [password, setPassword] = useState('')
// 	const history = useHistory()

// 	const handleLogin = async () => {
// 		try {
// 			await signInWithEmailAndPassword(auth, email, password)
// 			// User has successfully logged in.
// 			history.push('/dashboard') // Redirect to a protected route.
// 		} catch (error) {
// 			// Handle login errors here.
// 			console.error(error)
// 		}
// 	}

// 	return (
// 		<div>
// 			<input
// 				type='email'
// 				placeholder='Email'
// 				value={email}
// 				onChange={e => setEmail(e.target.value)}
// 			/>
// 			<input
// 				type='password'
// 				placeholder='Password'
// 				value={password}
// 				onChange={e => setPassword(e.target.value)}
// 			/>
// 			<button onClick={handleLogin}>Login</button>
// 		</div>
// 	)
// }

// export default Login
