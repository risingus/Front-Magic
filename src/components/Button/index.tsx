import { ReactNode, useEffect, useRef } from "react";
import './styles.scss'

interface ButtonProps {
  children: ReactNode
}

export const Button = ({ children, ...rest }: ButtonProps) => {

  function focusButtonMove(event: any) {
    // if (!event?.target) return;
    event?.target.style.setProperty('--xPosition', `${event.clientX - event?.target.offsetLeft}px`);
    event?.target.style.setProperty('--yPosition', `${event.clientY - event?.target.offsetTop}px`);
  }

  return (
    <div>

      <button
        {...rest}
        className="buttonTest"
        onPointerMove={focusButtonMove}
      >
        {children}
      <div>
          {children}
      </div>
    </button>
    </div>
  )
}