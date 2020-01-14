import {
	ROUTES,
	ROUTE_PATH,
	ROUTE_ACCESSIBILITY,
	ROUTE_ACCESSIBILITY_PUBLIC,
	ROUTE_ACCESSIBILITY_PRIVATE,
	ROUTE_PAGE_INDEX,
	history,
} from 'routes/constants'

const LAST_ROUTE = 'lastRoute'
const LAST_ROUTE_REAL = 'lastRouteReal'

const setLastRoute = pathname => {
	localStorage.setItem(LAST_ROUTE, pathname)
	localStorage.setItem(LAST_ROUTE_REAL, history.location.pathname)
}

const goLastRoute = () => {
	const lastRoute = localStorage.getItem(LAST_ROUTE)
	if (lastRoute) {
		history.replace(lastRoute)
		localStorage.removeItem(LAST_ROUTE)
		localStorage.removeItem(LAST_ROUTE_REAL)
	}
}

const parseRouteParamValues = route => {
	const [pathnameNoParam, param] = route.split(':')
	if (param) {
		try {
			const paramValues = param
				.split('(')[1]
				.split(')')[0]
				.split('|')

			return paramValues.map(paramValue =>
				(pathnameNoParam + paramValue).toLowerCase()
			)
		} catch (err) {
			return [pathnameNoParam]
		}
	} else {
		return [route]
	}
}

const isLocationPublic = lastLocation => {
	const isCurrentLocationPublic = ROUTES.some(route => {
		const pathnames = parseRouteParamValues(route[ROUTE_PATH])
		return (
			route[ROUTE_ACCESSIBILITY] === ROUTE_ACCESSIBILITY_PUBLIC &&
			pathnames.some(pathname =>
				history.location.pathname.toLowerCase().includes(pathname)
			)
		)
	})
	if (isCurrentLocationPublic && lastLocation) {
		const isLastLocationPublic = ROUTES.some(route => {
			const pathnames = parseRouteParamValues(route[ROUTE_PATH])
			return (
				route[ROUTE_ACCESSIBILITY] === ROUTE_ACCESSIBILITY_PUBLIC &&
				pathnames.some(pathname =>
					lastLocation.pathname.toLowerCase().includes(pathname)
				)
			)
		})
		return isLastLocationPublic ? ROUTE_PAGE_INDEX : lastLocation.pathname
	} else if (isCurrentLocationPublic && !lastLocation) {
		return ROUTE_PAGE_INDEX
	} else {
		return lastLocation.pathname
	}
}

const isLocationPrivate = () => {
	const isCurrentLocationPrivate = ROUTES.some(route => {
		const pathnames = parseRouteParamValues(route[ROUTE_PATH])
		return (
			route[ROUTE_ACCESSIBILITY] === ROUTE_ACCESSIBILITY_PRIVATE &&
			pathnames.some(pathname =>
				window.location.pathname.toLowerCase().includes(pathname)
			)
		)
	})

	return isCurrentLocationPrivate ? ROUTE_PAGE_INDEX : window.location.pathname
}

export { isLocationPublic, setLastRoute, goLastRoute, isLocationPrivate }