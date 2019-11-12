import {
	ROUTE_TO,
	ROUTE_FROM,
	ROUTE_PATH,
	ROUTE_ACCESSIBILITY,
	ROUTE_ACCESSIBILITY_PRIVATE,
	ROUTE_ACCESSIBILITY_PUBLIC,
	ROUTE_ACCESSIBILITY_FREE,
	ROUTE_PAGE_INDEX,
	ROUTE_PAGE_SEARCHED,
	ROUTE_PAGE_PROFILE,
	ROUTE_PAGE_SIGN_UP,
	ROUTE_PAGE_SIGN_IN,
	ROUTE_PAGE_SETTINGS,
	ROUTE_PAGE_SETTINGS_COMMON,
	ROUTE_PAGE_SETTINGS_GENERAL,
	ROUTE_PAGE_PASSWORD_RESET,
	ROUTE_PAGE_POLICY,
	ROUTE_PAGE_POLICY_COMMON,
	ROUTE_PAGE_POLICY_PRIVACY,
	ROUTE_PAGE_CHECKOUT,
	history,
} from 'routes/constants'

const routes = [
	{
		[ROUTE_PATH]: ROUTE_PAGE_INDEX,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_FREE,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_PROFILE,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_FREE,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_SEARCHED,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_FREE,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_SETTINGS_COMMON,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_PRIVATE,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_POLICY_COMMON,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_FREE,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_CHECKOUT,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_FREE,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_SIGN_UP,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_PUBLIC,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_SIGN_IN,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_PUBLIC,
	},
	{
		[ROUTE_PATH]: ROUTE_PAGE_PASSWORD_RESET,
		[ROUTE_ACCESSIBILITY]: ROUTE_ACCESSIBILITY_PUBLIC,
	},
]

// the order of array is very important, the lowest is the root path
const redirects = [
	{
		[ROUTE_FROM]: ROUTE_PAGE_POLICY,
		[ROUTE_TO]: ROUTE_PAGE_POLICY_PRIVACY,
	},
	{
		[ROUTE_FROM]: ROUTE_PAGE_SETTINGS,
		[ROUTE_TO]: ROUTE_PAGE_SETTINGS_GENERAL,
	},
	{
		[ROUTE_FROM]: '/',
		[ROUTE_TO]: ROUTE_PAGE_INDEX,
	},
]

const toIndexIfPublic = location => {
	const pathname = location ? location.pathname : history.location.pathname
	const isPublic = routes.some(route => {
		return (
			route[ROUTE_ACCESSIBILITY] === ROUTE_ACCESSIBILITY_PUBLIC &&
			route[ROUTE_PATH].toLowerCase() === pathname.toLowerCase()
		)
	})
	return isPublic ? ROUTE_PAGE_INDEX : pathname
}

export { routes, redirects, toIndexIfPublic }
