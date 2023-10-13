// import React, { useState } from 'react'
// import {
// 	createUserWithEmailAndPassword,
// 	signInWithEmailAndPassword,
// } from 'firebase/auth'
// // import { auth } from '../utils/firebaseConfig' // Import your Firebase configuration.

// const SignUp = () => {
// 	const [email, setEmail] = useState('')
// 	const [password, setPassword] = useState('')

// 	const handleSignUp = async () => {
// 		try {
// 			await createUserWithEmailAndPassword(auth, email, password)
// 			// User has been registered successfully.
// 		} catch (error) {
// 			// Handle registration errors here.
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
// 			<button onClick={handleSignUp}>Sign Up</button>
// 		</div>
// 	)
// }

// // Implement a similar Login component for user login.
// export default SignUp
