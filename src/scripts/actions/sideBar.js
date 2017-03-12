import { SHOW_SIDEBAR, HIDE_SIDEBAR } from '../constants/constants'

export function showSideBar() {
	return { type: SHOW_SIDEBAR }
}

export function hideSideBar() {
	return { type: HIDE_SIDEBAR }
}