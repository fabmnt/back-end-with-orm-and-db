import { it, expect } from 'vitest'
import { isAppWorking } from '../src/main'

it('should work', () => {
	expect(isAppWorking()).toBe(true)
})
