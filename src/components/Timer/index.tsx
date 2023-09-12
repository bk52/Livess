import styles from "./index.module.css"

const formatTime = (time?: number): string => {
  if (!time) return "-"
  const minutes = Math.floor(time / 60)
  const seconds = time % 60
  return `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`
}

const Timer: React.FC<{
  remainingTime?: number
  gameType: string
}> = ({ remainingTime, gameType }) => {
  return (
    <div className={styles.timerBg}>
      <div className={styles.timerContainer}>
        <div className={styles.timer}>{formatTime(remainingTime)}</div>
        <div className={styles.gameType}>{gameType}</div>
      </div>
    </div>
  )
}

export default Timer
