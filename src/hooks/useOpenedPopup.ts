import React from 'react'

export const useOpenedPopup = (modalNode: HTMLDivElement | null) => {
	const [isOpenPopup, setIsOpenPopup] = React.useState(false)
	const closeModalOutsideHelper = React.useCallback(
		(e: Event) => {
			const path = e.composedPath()

			if (modalNode && !path.includes(modalNode)) {
				setIsOpenPopup(false)
				document.body.removeEventListener('click', closeModalOutsideHelper)
			}
		},
		[modalNode]
	)

	const removeEventHelper = () => {
		document.body.removeEventListener('click', closeModalOutsideHelper)
	}

	React.useEffect(() => {
		if (isOpenPopup) {
			document.body.addEventListener('click', closeModalOutsideHelper)
		} else {
			removeEventHelper()
		}

		return () => removeEventHelper()
	}, [isOpenPopup])

	return {
		isOpenPopup,
		setIsOpenPopup,
	}
}
