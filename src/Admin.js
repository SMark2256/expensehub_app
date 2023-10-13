// Admin.js
import React from 'react'
import { Admin, Resource } from 'react-admin'
//import { FirebaseAuthProvider } from 'react-admin-firebase'
import firebaseDataProvider from './utils/firebaseDataProvider'
import authProviderConfig from './utils/authProviderConfig'
import UserList from './admin/UserList'
import UserCreate from './admin/UserCreate'
import UserEdit from './admin/UserEdit'
import UserDelete from './admin/UserDelete'
import Login from './components/LoginComp'
import SignUp from './components/RegistrationComp'

// import { PostList, PostEdit, PostCreate } from './Post'
// import { CommentList, CommentEdit, CommentCreate } from './Comment'

// Firebase konfiguráció importálása a külön fájlból

// const authProvider = FirebaseAuthProvider(db, {
// 	userProfilePath: 'users',
// 	userAdminProp: 'isAdmin',
// })

const AdminComp = () => (
	<Admin
		dataProvider={firebaseDataProvider}
		//authProvider={FirebaseAuthProvider(authProviderConfig)}
	>
		<Resource
			name='users'
			list={UserList}
			edit={UserEdit}
			create={UserCreate}
			delete={UserDelete}
		/>
		{/* Bejelentkezési és regisztrációs nézet */}
		{/* <Resource
			name='login'
			list={Login}
		/>
		<Resource
			name='registration'
			list={SignUp}
		/> */}
	</Admin>
)

export default AdminComp
