import { useEffect, useRef, PointerEvent } from 'react';
import styles from './styles.module.scss';


export const MouseBlob = () => {
  const blobRef = useRef(null);

  function moveBlob(event: any) {
    if (!blobRef?.current) return;
    const { clientX, clientY } = event;

    blobRef.current.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 3000, fill: 'forwards' })

  }

  return (
    <div className={styles.blobContainer} onPointerMove={moveBlob}>
      <h1 className={styles.text}>MOVE THE BLOB</h1>
      <div className={styles.blob} ref={blobRef}></div>
      <div className={styles.blur}></div>
    </div>
  )
}