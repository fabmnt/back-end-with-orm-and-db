import { isWorking } from '@/working'

export const isAppWorking = () => isWorking()

if (isAppWorking()) {
	console.log('App is working')
}
