import { useEffect, useRef, PointerEvent } from 'react';
import styles from './styles.module.scss';


export const MouseBlob = () => {
  const containerRef = useRef(null as any)
  const blobRef = useRef(null as any);

  function moveBlob(event: any) {
    if (!blobRef?.current) return;
    if (!containerRef?.current) return;

    if (!containerRef.current.contains(event.target)) return

    const { clientX, clientY } = event;

    blobRef.current.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 3000, fill: 'forwards' })
  }

  return (
    <div
      ref={containerRef}
      className={styles.blobContainer}
      onPointerMove={moveBlob}
    >
      <h1 className={styles.text}>MOVE THE BLOB</h1>
      <div className={styles.blob} ref={blobRef}></div>
      <div className={styles.blur}></div>
    </div>
  )
}