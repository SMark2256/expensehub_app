// App.js
import React, { useState, useEffect } from 'react'
import dataProvider from './utils/firebaseDataProvider'
import AdminComp from './Admin'

function App() {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [loadin2, setLoading2] = useState(true)

	useEffect(() => {
		// Az adatok lekérése a Firebase Realtime Database-ból
		dataProvider.getList('users').then(response => {
			setData(response.data)
			setLoading(false)
		})
	}, [])

	return (
		<div>
			{loading ? (
				<p>Loading...</p>
			) : (
				<div>
					{/* Az alkalmazás többi része, amely használja a letöltött adatokat */}
					{/* <RegistrationForm data={data} /> */}
					{/* <Admin dataProvider={dataProvider}>
		<Resource
			name='users'
			list={UserList}
		/>
		<Resource
			name='posts'
			list={UserList}
		/>
		<Resource
			name='comments'
			list={UserList}
		/>
	</Admin>
	 */}
					<AdminComp />
				</div>
			)}
		</div>
	)
}

export default App
