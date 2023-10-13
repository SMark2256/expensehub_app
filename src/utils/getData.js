//getData
import db from './firebaseConfig.js'
import { ref, onValue } from 'firebase/database'

const getUsers = setUsers => {
	try {
		// Axios példa:
		// const response = await axios.get( `https://ig-food-menus.herokuapp.com/best-foods` );
		// const data = await response.data;
		// console.log(data);

		// const foodselements = [];
		// for (const key in data) {
		//   foodselements.push({
		//         id: data[key].id,
		//         name: data[key].name,
		//         img: data[key].img,
		//         price: data[key].price,
		//         rate: data[key].rate,
		//     });
		// }
		// setFoods(foodselements);
		// console.log(foodselements);

		const fireRequest = ref(db, `/users`)
		onValue(fireRequest, snapshot => {
			snapshot.forEach(childSnapshot => {
				const response = childSnapshot.val()

				const data = response
				console.log(data)
				const usersArray = []

				for (const key in data) {
					usersArray.push({
						id: key,
						name: data[key].username,
						email: data[key].email,
					})
				}
				//console.log(foodselements)
				setUsers(usersArray)
			})
		})
	} catch (e) {
		console.log(e)
	}
}

export default getUsers
