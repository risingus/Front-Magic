import { useEffect, useRef } from 'react'
import './styles.scss'


export function ButtonWithRipple() {
	const buttonRef = useRef<HTMLButtonElement>(null)

	function rippleEffect(event: any) {
		if (!event?.target) return
		if (!buttonRef?.current) return
		if (!buttonRef.current.contains(event.target)) return
		const button = buttonRef.current
		const circle = document.createElement('span')
		const diameter = Math.max(button.clientWidth, button.clientHeight)
		const radius = diameter / 2

		circle.style.width = circle.style.height = `${diameter}px`
		circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`
		circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`
		circle.classList.add('ripple')

		const ripple = button.getElementsByClassName('ripple')?.[0]

		if (ripple) {
			ripple.remove()
		}

		button.appendChild(circle)
	}


	return (
		<button ref={buttonRef} className='buttonRipple' onClick={rippleEffect}>
			Click Me
		</button>
	)
}
