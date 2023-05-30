import { ReactNode, useEffect, useRef } from "react";
import './styles.scss'

interface ButtonProps {
  children: ReactNode
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  const buttonRef = useRef(null as any)



  function focusButtonMove(event: any) {
    console.dir(event.target)
    if (!event?.target) return;
    if (!buttonRef?.current) return
    if (!buttonRef.current.contains(event?.target)) return

    const xPosition = Math.max((event.clientX - buttonRef.current.offsetLeft) / 16);

    const yPosition = Math.max((event.clientY - buttonRef.current.offsetTop) / 16);

    event?.target.style.setProperty('--xPosition', `${xPosition}rem`);
    event?.target.style.setProperty('--yPosition', `${yPosition}rem`);
  }

  return (
      <button
      ref={buttonRef}
      {...rest} 
        className="buttonTest"
        onPointerMove={focusButtonMove}
      >
        {children}
      <div>
          {children}
      </div>
    </button>
  )
}