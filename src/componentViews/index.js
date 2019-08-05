import { ExportMultiOrganisms } from 'componentpMultiOrganisms'

import IndexPage from 'componentViews/IndexPage.jsx'
import ProfilePage from 'componentViews/ProfilePage.jsx'
//import SettingsPage from 'componentViews/SettingsPage'
import SignInPage from 'componentViews/SignInPage'
import SignUpPage from 'componentViews/SignUpPage'
import PasswordResetPage from 'componentViews/PasswordResetPage'

export const ExportViews = {
	...ExportMultiOrganisms,
	IndexPage,
	ProfilePage,
	//SettingsPage,
	SignInPage,
	SignUpPage,
	PasswordResetPage,
}