import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'
import z from 'zod'

config()

const envSchema = z.object({
	TURSO_CONNECTION_URL: z.string(),
	TURSO_AUTH_TOKEN: z.string(),
})

const envParsed = envSchema.parse(process.env)

export default defineConfig({
	schema: './src/db/schema.ts',
	out: './migrations',
	dialect: 'turso',
	dbCredentials: {
		url: envParsed.TURSO_CONNECTION_URL,
		authToken: envParsed.TURSO_AUTH_TOKEN,
	},
})
