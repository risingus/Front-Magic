import { useEffect, useState } from 'react';
import { List, X, MagicWand } from '@phosphor-icons/react';
import wand from '../../assets/img/wand.png'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss';

export const RadialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('a')
    const linksList = Array.from(links)
    linksList.forEach((link, index) => {
      if (index === 0) {
        link.style.marginLeft = '10rem';
        return
      }
      if (index === linksList.length - 1) {
        link.style.marginLeft = '10rem';
        return
      }
      link.style.marginLeft = '16.5rem';
    })

  }, [])


  return (
    <>
      <button className={styles.menuButton} onClick={() => setIsOpen((state) => !state)}>
        {
          isOpen
            ? <X size={26} />
            : <List size={26} />
        }
      </button>

      {
        isOpen && (
          <div className={styles.menuContainer} >
            <div className={styles.menu}>
              <div>
                <img src={wand} alt="" />
              </div>
              <section>
                <Link to='hacker-text'>
                  <MagicWand weight='fill' size={32} />
                  Hacker-Text
                </Link>

                <Link to='image-slider'>
                  <MagicWand weight='fill' size={32} />
                  Img Slider
                </Link>

                <Link to='mouse-blob'>
                  <MagicWand weight='fill' size={32} />
                  mouse-blob
                </Link>

                <Link to='buttons'>
                  <MagicWand weight='fill' size={32} />
                  buttons
                </Link>
              </section>
            </div>
          </div>

        )
      }




    </>
  )
}