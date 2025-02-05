import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/libsql'
import * as schema from './schema'
import z from 'zod'

config()

const envSchema = z.object({
	TURSO_CONNECTION_URL: z.string(),
	TURSO_AUTH_TOKEN: z.string(),
})

const envParsed = envSchema.parse(process.env)

export const db = drizzle({
	schema,
	connection: {
		url: envParsed.TURSO_CONNECTION_URL,
		authToken: envParsed.TURSO_AUTH_TOKEN,
	},
})
