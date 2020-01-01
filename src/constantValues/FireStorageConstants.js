const STORAGE_USER_AVATAR = 'userAvatar'

const storagePathUserAvatar = uid => {
	return `${STORAGE_USER_AVATAR}/${uid}.jpg`
}

const CREATED_AT = 'createdAt'
const UPDATED_AT = 'updatedAt'

const FIRESTORE_USER = 'users/'
const FIRESTORE_SETTINGS = 'settings/'
const fireStorePathSettingsNotification = uid => {
	return FIRESTORE_USER + uid + '/' + FIRESTORE_SETTINGS + 'notifications/'
}

const FIRESTORE_SETTINGS_NOTIFICATION_EMAIL = 'email'
const FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES = 'orderUpdates'
const FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER = 'newsletter'
const FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_CHATS = 'chats'
const FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_COMMENTS = 'comments'
const FIRESTORE_SETTINGS_NOTIFICATION_PUSH = 'push'
const FIRESTORE_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES = 'orderUpdates'
const FIRESTORE_SETTINGS_NOTIFICATION_PUSH_CHATS = 'chats'
const FIRESTORE_SETTINGS_NOTIFICATION_PUSH_COMMENTS = 'comments'

const firestorePathSettingsGeneral = uid => {
	return FIRESTORE_USER + uid + '/' + FIRESTORE_SETTINGS + 'general/'
}

const FIRESTORE_SETTINGS_GENERAL_DISPLAY_NAME = 'displayName'
const FIRESTORE_SETTINGS_GENERAL_LANGUAGES = 'languages'
const FIRESTORE_SETTINGS_GENERAL_USER_AVATAR = STORAGE_USER_AVATAR
const FIRESTORE_SETTINGS_GENERAL_SHORT_ID = 'shortId'

const FIRESTORE_SENSHI_BADGES_VERIFIED = 'verified'
const FIRESTORE_SENSHI_BADGES_FEMALE = 'female'
const FIRESTORE_SENSHI_BADGES_RISING_STAR = 'risingStar'
const FIRESTORE_SENSHI_BADGES_ONLINE = 'online'

const FIRESTORE_CHANNELS_FACEBOOK = 'facebook'
const FIRESTORE_CHANNELS_TWITCH = 'twitch'
const FIRESTORE_CHANNELS_YOUTUBE = 'youtube'

const FIRESTORE_GAMES_DOTA2 = 'Dota2'
const FIRESTORE_GAMES_PUBG = 'PUBG'
const FIRESTORE_GAMES_LOL = 'LOL'
const FIRESTORE_GAMES_APEX = 'Apex'
const FIRESTORE_GAMES_FORTNITE = 'Fortnite'

export {
	CREATED_AT,
	UPDATED_AT,
	storagePathUserAvatar,
	STORAGE_USER_AVATAR,
	FIRESTORE_USER,
	FIRESTORE_SETTINGS,
	fireStorePathSettingsNotification,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_ORDER_UPDATES,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_NEWS_LETTER,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_CHATS,
	FIRESTORE_SETTINGS_NOTIFICATION_EMAIL_COMMENTS,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH_ORDER_UPDATES,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH_CHATS,
	FIRESTORE_SETTINGS_NOTIFICATION_PUSH_COMMENTS,
	firestorePathSettingsGeneral,
	FIRESTORE_SETTINGS_GENERAL_DISPLAY_NAME,
	FIRESTORE_SETTINGS_GENERAL_LANGUAGES,
	FIRESTORE_SETTINGS_GENERAL_USER_AVATAR,
	FIRESTORE_SETTINGS_GENERAL_SHORT_ID,
	FIRESTORE_SENSHI_BADGES_VERIFIED,
	FIRESTORE_SENSHI_BADGES_FEMALE,
	FIRESTORE_SENSHI_BADGES_RISING_STAR,
	FIRESTORE_SENSHI_BADGES_ONLINE,
	FIRESTORE_CHANNELS_FACEBOOK,
	FIRESTORE_CHANNELS_TWITCH,
	FIRESTORE_CHANNELS_YOUTUBE,
	FIRESTORE_GAMES_DOTA2,
	FIRESTORE_GAMES_PUBG,
	FIRESTORE_GAMES_LOL,
	FIRESTORE_GAMES_APEX,
	FIRESTORE_GAMES_FORTNITE,
}