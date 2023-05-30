import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss'
import { Drawer } from '../../components/Drawer';

export const DefaultLayout = () => {

  return (
    <div className={styles.layoutContainer}>
      <Drawer />
      <main className={styles.mainContent}>
        <h1>aqui</h1>
        <Outlet />
      </main>
    </div>
  )

}