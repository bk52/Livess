import { WIN_TYPES } from "../../../types"
import styles from "./index.module.css"
import { Skull, Defuser, Bomb, Timer } from "../../Icons"

const SegmentIcon: React.FC<{ won?: boolean; winType: WIN_TYPES }> = ({
  won,
  winType,
}) => {
  if (!won) return null

  if (winType === WIN_TYPES.OPPONENT_ELIMINATED)
    return (
      <div className={styles.segmentIcon}>
        <Skull />
      </div>
    )
  else if (winType === WIN_TYPES.BOMB_DEFUSED)
    return (
      <div className={styles.segmentIcon}>
        <Defuser />
      </div>
    )
  else if (winType === WIN_TYPES.BOMB_EXLODED)
    return (
      <div className={styles.segmentIcon}>
        <Bomb />
      </div>
    )
  else if (winType === WIN_TYPES.TIME_EXPIRED)
    return (
      <div className={styles.segmentIcon}>
        <Timer />
      </div>
    )
}

export default SegmentIcon
