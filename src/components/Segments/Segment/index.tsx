import styles from "./index.module.css"
import cx from "classnames"
import { ISegment, SIDE } from "../../../types"
import SegmentIcon from "../SegmentIcon"

const Segment: React.FC<{ segment: ISegment }> = ({ segment }) => {
  const CT = segment.teams.filter((team) => team.side === SIDE.CT)[0]
  const T = segment.teams.filter((team) => team.side === SIDE.T)[0]
  return (
    <div className={styles.segment}>
      <div className={cx([styles.segmentTeam, styles.counter])}>
        <SegmentIcon won={CT.won} winType={CT.winType} />
      </div>
      <div
        className={cx([
          styles.segmentNumber,
          segment.started && !segment.finished ? styles.active : null,
        ])}
      >
        {segment.sequenceNumber}
      </div>
      <div className={cx([styles.segmentTeam, styles.terrorist])}>
        <SegmentIcon won={T.won} winType={T.winType} />
      </div>
    </div>
  )
}

export default Segment
