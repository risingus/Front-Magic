import { Outlet, useLocation } from 'react-router-dom';
import styles from './styles.module.scss'
import { RadialMenu } from '../../components/RadialMenu';

export const DefaultLayout = () => {
  const { pathname } = useLocation()

  const title = pathname.replaceAll('/', '')

  return (
    <div className={styles.layoutContainer}>
      <RadialMenu />
      <h1
        style={
          title === 'image-slider'
            ? {
              position: 'absolute',
              zIndex: '3',
              left: 0,
              right: 0
            }
            : title === 'mouse-blob'
              ? {
                display: 'none'
              }
              : {}
        }
      >
        {title}
      </h1>
      <Outlet />
    </div>
  )

}