import { ButtonWithRipple } from './ButtonWithRipple'
import { SpotlightButton } from './SpotlightButton'
import styles from './styles.module.scss'


const buttons = [
  {
    title: 'ripple',
    component: <ButtonWithRipple />
  },
  {
    title: 'spotlight',
    component: <SpotlightButton />
  }
] as const

const Buttons = () => {
  return (
    <div className={styles.buttonsContainer}>
      {
        buttons.map((button) => {
          return (
            <div>
              <strong>{button.title}</strong>
              {button.component}
            </div>
          )
        })
      }
    </div>

  )
}

export { Buttons }