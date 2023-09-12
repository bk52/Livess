import styles from "./index.module.css"
import cx from "classnames"
import { PAGES } from "../../types"
import { BackArrow, Stats, Triggers, Settings } from "../Icons"

const Navbar: React.FC<{
  active: PAGES
  setPage: (page: PAGES) => void
}> = ({ active, setPage }) => {
  const goBack = () => {
    if (active === PAGES.PLAYER_STATS) setPage(PAGES.TEAM_STATS)
    else setPage(PAGES.MAIN)
  }

  return (
    <div className={styles.navBar}>
      <button onClick={() => goBack()} className={styles.backButton}>
        <BackArrow />
      </button>

      <div className={styles.buttonContainer}>
        <button
          onClick={() => setPage(PAGES.TEAM_STATS)}
          className={cx([
            styles.menuButtons,
            active === PAGES.PLAYER_STATS || active === PAGES.TEAM_STATS
              ? styles.active
              : null,
          ])}
        >
          <Stats />
        </button>
        <button
          onClick={() => setPage(PAGES.TRIGGERS)}
          className={cx([
            styles.menuButtons,
            active === PAGES.TRIGGERS ? styles.active : null,
          ])}
        >
          <Triggers />
        </button>
        <button
          onClick={() => setPage(PAGES.SETTINGS)}
          className={cx([
            styles.menuButtons,
            active === PAGES.SETTINGS ? styles.active : null,
          ])}
        >
          <Settings />
        </button>
      </div>
    </div>
  )
}

export default Navbar
