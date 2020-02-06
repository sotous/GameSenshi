import styled, { css } from 'styled-components'
import React, { memo } from 'react'

const responsiveCssGenerator = (mapping = {}, min = true) => {
	const cssR = (responsiveness = '') => {
		let cssString = null
		if (typeof responsiveness === 'string') {
			cssString = responsiveness
		} else {
			cssString = []
			for (const prop in responsiveness) {
				if (responsiveness[prop] !== undefined && mapping[prop] !== undefined) {
					cssString = [
						...cssString,
						`
			@media (${min ? 'min' : 'max'}-width: ${mapping[prop]}px) {`,
						responsiveness[prop],
						`
		}
			`,
					]
				}
			}
		}
		return cssString
	}

	const isComponentHtml = component =>
		typeof component === 'string' ? styled[component] : styled(component)

	const specificityWrapper = (responsiveness = '', level) => css`
		${'&'.repeat(level)} {
			${cssR(responsiveness)}
		}
	`

	const styledR = (component, responsiveness = '', level = 3) => {
		return isComponentHtml(component)`
	 ${specificityWrapper(responsiveness, level)}
	 `
	}
	const styledHOC = Comp => {
		const STYLED_CSS = 'styledCss'
		const CompNew = memo(props => {
			//eslint-disable-next-line
			const { [STYLED_CSS]: styledCss, ...otherProps } = props // prevent styledCss from entering Comp props
			return <Comp {...otherProps} />
		})

		return styled(CompNew)`
			${props => {
				const { [STYLED_CSS]: styledCss } = props
				if (styledCss) {
					//for(const prop)
				} else {
					return ''
				}
			}}
		`
	}

	return { cssR, styledR, styledHOC }
}

const mapping = {
	xs: 0,
	sx: 500,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
}

const { cssR, styledR } = responsiveCssGenerator(mapping, true)

export { cssR, styledR, css }
