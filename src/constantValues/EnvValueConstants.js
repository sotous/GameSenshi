const env = process.env

const ENV_FIREBASE_CONFIG = Object.freeze({
	apiKey: env.REACT_APP_API_KEY,
	authDomain: env.REACT_APP_AUTH_DOMAIN,
	databaseURL: env.REACT_APP_DATABASE_URL,
	projectId: env.REACT_APP_PROJECT_ID,
	storageBucket: env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: env.REACT_APP_MESSAGING_SENDER_ID,
	appId: env.REACT_APP_APP_ID,
})

const ENV_TWITCH_CLIENT = env.REACT_APP_TWITCH_CLIENT
const ENV_TWITCH_REDIRECT = env.REACT_APP_TWITCH_REDIRECT

export { ENV_FIREBASE_CONFIG, ENV_TWITCH_CLIENT, ENV_TWITCH_REDIRECT }