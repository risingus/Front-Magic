import { Link } from 'react-router-dom';
import styles from './styles.module.scss'

export const Drawer = () => {
	return (
		<div className={styles.drawer}>
			<div className={styles.drawerHeader}>
				Front-Magics 🤩
			</div>

			<div className={styles.linksContainer}>
				<Link to='buttons'>
					Buttons
				</Link>

				image-slider

				<Link to='hacketText'>
					Hacker Text
				</Link>

				<Link to='image-slider'>
					image-slider
				</Link>

				<Link to='mouse-blob'>
					mouse-blob
				</Link>

			</div>

		</div>
	)
}
