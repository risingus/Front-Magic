import { useEffect, useRef } from "react";
import './styles.scss'

interface ButtonProps {
  text: string
}


export const Button = ({text, ...rest}: ButtonProps) => {
  const buttonRef = useRef(null as any);

  function focusButtonMove(event: any) {
		if (!event?.target && !buttonRef?.current) return;
		buttonRef.current.style.setProperty('--xPosition', `${event.clientX - buttonRef.current.offsetLeft}px`);
		buttonRef.current.style.setProperty('--yPosition', `${event.clientY - buttonRef.current.offsetTop}px`);
	}


  useEffect(() => {
    document.addEventListener('pointermove', focusButtonMove)

    return () => {
      document.removeEventListener('pointermove', focusButtonMove)
    }
  }, [])

  return (
      <button
        {...rest}
        className="buttonTest"
        ref={buttonRef}
      >
        {text}
      <div>
        {text}        
      </div>
    </button>
  )
}