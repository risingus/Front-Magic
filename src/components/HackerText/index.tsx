import styles from './styles.module.scss'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null as any;


export const HackerText = () => {
  const text = '@RISINGUS'

  function scrambleText(event: any) {
    let iteration = 0;

    clearInterval(interval)

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split('')
        .map((letter: string, index: number) => {
          if (index < iteration) {
            return text[index]
          }

          return letters[Math.floor(Math.random() * 26)]
        })
        .join('');


      if (iteration >= text.length) {
        clearInterval(interval)
      }

      iteration += 1 / 3
    }, 30)
  }

  return <h1 className={styles.text} onPointerEnter={scrambleText}> {text}</h1 >
}