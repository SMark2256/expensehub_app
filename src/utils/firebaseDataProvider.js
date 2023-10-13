// firebaseDataProvider.js
import { onValue, ref, get, push, update, remove } from 'firebase/database' // Használjuk a Firebase Realtime Database-t
import db from './firebaseConfig'

const dataProvider = {
	getList: async (resource, params) => {
		const resourceRef = ref(db, resource)
		const snapshot = await get(resourceRef)
		if (snapshot.exists()) {
			const data = snapshot.val()
			const records = Object.keys(data).map(key => ({
				id: key,
				...data[key],
			}))
			console.log(records)

			return {
				data: records,
				total: records.length,
			}
		} else {
			return {
				data: [],
				total: 0,
			}
		}
	},
	getOne: async (resource, params) => {
		const resourceRef = ref(db, `${resource}/${params.id}`)
		const snapshot = await get(resourceRef)
		if (snapshot.exists()) {
			return {
				data: { id: params.id, ...snapshot.val() },
			}
		} else {
			return {
				data: {},
			}
		}
	},
	create: async (resource, params) => {
		// Az új rekord hozzáadása a Firebase Realtime Database-hez
		const newRecordRef = push(ref(db, resource), params.data)
		const newRecordSnapshot = await get(newRecordRef)

		return {
			data: { id: newRecordRef.key, ...newRecordSnapshot.val() },
		}
	},
	update: async (resource, params) => {
		const { id, data } = params
		const resourceRef = ref(db, `${resource}/${id}`)

		try {
			await update(resourceRef, data)
			return { data: { id, ...data } }
		} catch (error) {
			// Handle the error appropriately
			throw new Error('Failed to update the record')
		}
	},
	delete: async (resource, params) => {
		const { id } = params
		const resourceRef = ref(db, `${resource}/${id}`)

		try {
			await remove(resourceRef)
			return { data: { id } }
		} catch (error) {
			// Handle the error appropriately
			throw new Error('Failed to delete the record')
		}
	},
	deleteMany: async (resource, ids) => {
		try {
			const resourceRef = ref(db, resource)
			const promises = ids.map(id => remove(ref(resourceRef, id)))
			await Promise.all(promises)
			return { data: ids }
		} catch (error) {
			throw new Error(`Failed to delete records: ${error.message}`)
		}
	},
	// Implementáld további műveleteket (getOne, create, update, delete) szükség szerint
}

export default dataProvider
