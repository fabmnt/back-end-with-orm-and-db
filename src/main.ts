import { db } from '@/db'
;(async () => {
	const users = await db.query.usersTable.findMany()
	console.log(users)
})()
