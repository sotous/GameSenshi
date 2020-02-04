import { Subscribe, Provider } from 'unstated'
import { STATE, RESET_STATE } from './constants'
import { StateContainer } from './StateContainer'

import {
	storeAlert,
	storeAlertShow,
	storeAlertToggle,
	storeAlertSetState,
	storeAlertResetState,
	STORE_ALERT_STATE_BODY,
	STORE_ALERT_STATE_IS_OPEN,
	STORE_ALERT_STATE_COLOR,
	STORE_ALERT_STATE_ICON,
} from './Alert'

import {
	storeModal,
	storeModalShow,
	storeModalClose,
	storeModalToggle,
	storeModalGetItem,
	storeModalSetItem,
	storeModalInitialize,
	storeModalRemoveItem,
	storeModalProcessLinking,
	storeModalOnContinue,
	storeModalSetState,
	storeModalResetState,
	storeModalClear,
	storeModalSimpleError,
	storeModalGetRedirectUrl,
	STORE_MODAL_STATE_BODY,
	STORE_MODAL_STATE_TITLE,
	STORE_MODAL_STATE_LOADER,
	STORE_MODAL_STATE_IS_OPEN,
	STORE_MODAL_STATE_CONTINUED_CALLBACK,
} from './Modal'

import {
	storeSignIn,
	storeSignInShow,
	storeSignInClose,
	storeSignInToggle,
	storeSignInSetState,
	storeSignInResetState,
	storeSignInOnSuccessfulSubmission,
	STORE_SIGN_IN_STATE_EMAIL,
	STORE_SIGN_IN_STATE_IS_OPEN,
	STORE_SIGN_IN_STATE_SUBMITTED_CALLBACK,
} from './SignIn'

import {
	storeProgress,
	storeProgressShow,
	storeProgressClose,
	storeProgressSetState,
	storeProgressResetState,
	STORE_PROGRESS_STATE_VALUE,
	STORE_PROGRESS_STATE_COLOR,
	STORE_PROGRESS_STATE_IS_OPEN,
} from './Progress'

import {
	storeUser,
	storeUserSetState,
	storeUserResetState,
	storeUserSetSigningIn,
	storeUserInitialize,
	storeUserResetAvatar,
	storeUserOnSignIn,
	storeUserGetSignedIn,
	STORE_USER_STATE_BIRTH_DATE,
	STORE_USER_STATE_LANGUAGES,
	STORE_USER_STATE_SIGNED_IN,
	STORE_USER_STATE_GENDER,
	STORE_USER_STATE_AVATAR,
	STORE_USER_STATE_DISPLAY_NAME,
	STORE_USER_STATE_UID,
	STORE_USER_STATE_EMAIL,
	STORE_USER_STATE_COUNTRY,
	STORE_USER_STATE_PHONE_NUMBER,
	STORE_USER_STATE_PROVIDER_DATA,
	STORE_USER_STATE_EMAIL_VERIFIED,
	STORE_USER_STATE_SIGNING_IN,
} from './User'

import {
	storeWrapper,
	storeWrapperSetState,
	storeWrapperResetState,
	storeWrapperSetOffsetTop,
	STORE_WRAPPER_STATE_OFFSET_TOP,
} from './Wrapper'

import {
	storeSound,
	storeSoundSetState,
	storeSoundResetState,
	storeSoundSetUuid,
	STORE_SOUND_STATE_UUID,
} from './Sound'

import {
	storeAlertSide,
	storeAlertSideShow,
	storeAlertSideToggle,
	storeAlertSideSetState,
	storeAlertSideResetState,
	STORE_ALERT_SIDE_STATE_BODY,
	STORE_ALERT_SIDE_STATE_IS_OPEN,
	STORE_ALERT_SIDE_STATE_COLOR,
	STORE_ALERT_SIDE_STATE_ICON,
} from 'AlertSide'

export {
	STATE,
	RESET_STATE,
	Provider,
	Subscribe,
	StateContainer,
	storeUser,
	storeUserSetState,
	storeUserResetState,
	storeUserSetSigningIn,
	storeUserInitialize,
	storeUserResetAvatar,
	storeUserOnSignIn,
	storeUserGetSignedIn,
	STORE_USER_STATE_BIRTH_DATE,
	STORE_USER_STATE_LANGUAGES,
	STORE_USER_STATE_SIGNED_IN,
	STORE_USER_STATE_GENDER,
	STORE_USER_STATE_AVATAR,
	STORE_USER_STATE_DISPLAY_NAME,
	STORE_USER_STATE_UID,
	STORE_USER_STATE_EMAIL,
	STORE_USER_STATE_COUNTRY,
	STORE_USER_STATE_PHONE_NUMBER,
	STORE_USER_STATE_PROVIDER_DATA,
	STORE_USER_STATE_EMAIL_VERIFIED,
	STORE_USER_STATE_SIGNING_IN,
	storeAlert,
	storeAlertShow,
	storeAlertToggle,
	storeAlertSetState,
	storeAlertResetState,
	STORE_ALERT_STATE_BODY,
	STORE_ALERT_STATE_IS_OPEN,
	STORE_ALERT_STATE_COLOR,
	STORE_ALERT_STATE_ICON,
	storeProgress,
	storeProgressShow,
	storeProgressClose,
	storeProgressSetState,
	storeProgressResetState,
	STORE_PROGRESS_STATE_VALUE,
	STORE_PROGRESS_STATE_COLOR,
	STORE_PROGRESS_STATE_IS_OPEN,
	storeSignIn,
	storeSignInShow,
	storeSignInClose,
	storeSignInToggle,
	storeSignInSetState,
	storeSignInResetState,
	storeSignInOnSuccessfulSubmission,
	STORE_SIGN_IN_STATE_EMAIL,
	STORE_SIGN_IN_STATE_IS_OPEN,
	STORE_SIGN_IN_STATE_SUBMITTED_CALLBACK,
	storeModal,
	storeModalShow,
	storeModalClose,
	storeModalToggle,
	storeModalGetItem,
	storeModalSetItem,
	storeModalInitialize,
	storeModalRemoveItem,
	storeModalProcessLinking,
	storeModalOnContinue,
	storeModalSetState,
	storeModalResetState,
	storeModalClear,
	storeModalSimpleError,
	storeModalGetRedirectUrl,
	STORE_MODAL_STATE_BODY,
	STORE_MODAL_STATE_TITLE,
	STORE_MODAL_STATE_LOADER,
	STORE_MODAL_STATE_IS_OPEN,
	STORE_MODAL_STATE_CONTINUED_CALLBACK,
	storeWrapper,
	storeWrapperSetState,
	storeWrapperResetState,
	storeWrapperSetOffsetTop,
	STORE_WRAPPER_STATE_OFFSET_TOP,
	storeSound,
	storeSoundSetState,
	storeSoundResetState,
	storeSoundSetUuid,
	STORE_SOUND_STATE_UUID,
	storeAlertSide,
	storeAlertSideShow,
	storeAlertSideToggle,
	storeAlertSideSetState,
	storeAlertSideResetState,
	STORE_ALERT_SIDE_STATE_BODY,
	STORE_ALERT_SIDE_STATE_IS_OPEN,
	STORE_ALERT_SIDE_STATE_COLOR,
	STORE_ALERT_SIDE_STATE_ICON,
}
