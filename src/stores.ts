import type { Writable } from 'svelte/store'
import { localStorageStore } from './utilities/LocalStorageStore'

export const darkMode: Writable<boolean | undefined> = localStorageStore('darkMode', undefined)
