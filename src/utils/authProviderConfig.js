const authProviderConfig = {
	// Firebase projekt konfiguráció
	firebaseConfig: {
		apiKey: 'AIzaSyDz46SaT3U0Klwx9UMOJxRys60vUSkfnpQ',
		authDomain: 'expensehub-8508d.firebaseapp.com',
		databaseURL:
			'https://expensehub-8508d-default-rtdb.europe-west1.firebasedatabase.app',
		projectId: 'expensehub-8508d',
		storageBucket: 'expensehub-8508d.appspot.com',
		messagingSenderId: '628288553379',
		appId: '1:628288553379:web:341793de2dacbdb5045a16',
		measurementId: 'G-HB024YT93D',
	},

	// Firebase autentikációs beállítások
	persistence: 'local', // local, session, none
	allowAnonymous: true, // true or false

	// Firebase szolgáltatások
	firebaseServices: ['auth', 'database', 'storage'],
}

export default authProviderConfig
