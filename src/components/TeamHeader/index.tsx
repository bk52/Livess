import { SIDE } from "../../types"
import styles from "./index.module.css"
import cx from "classnames"

const TeamHeader: React.FC<{
  icon: string
  name: string
  score?: number
  side: SIDE
}> = ({ icon, name, score, side }) => {
  return (
    <div
      className={cx(
        styles.teamHeader,
        side === SIDE.CT ? styles.counter : styles.terrorist
      )}
    >
      <img src={icon} />
      <div className={styles.name}>{name}</div>
      <div className={styles.score}>{score || 0}</div>
    </div>
  )
}

export default TeamHeader
