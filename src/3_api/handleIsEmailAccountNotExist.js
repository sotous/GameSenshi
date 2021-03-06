import { auth } from '1_fire_init'
import { simplerResponseHandling } from '1_utils'
import { UNEXPECTED_ERROR_CODE_2 } from '0_constants'

const handleIsEmailAccountNotExist = email => {
	return auth()
		.fetchSignInMethodsForEmail(email)
		.then(methods => {
			if (methods.includes('password')) {
				return simplerResponseHandling(
					false,
					'this email is already registered!'
				)
			} else {
				return simplerResponseHandling(
					true,
					'This email is available for registration!'
				)
			}
		})
		.catch(err => {
			return simplerResponseHandling(false, UNEXPECTED_ERROR_CODE_2, err)
		})
}

export { handleIsEmailAccountNotExist }
