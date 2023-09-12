import styles from "./index.module.css"

const PlayerTitle: React.FC<{
  imageUrl: string
  logoUrl: string
  playerName: string
}> = ({ imageUrl, logoUrl, playerName }) => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <img src={imageUrl} />
      </div>
      <div className={styles.player}>
        <img src={logoUrl} />
        <div className={styles.playerName}>{playerName}</div>
      </div>
    </div>
  )
}

export default PlayerTitle
