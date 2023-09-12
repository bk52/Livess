import styles from "./index.module.css"
import { Weapon_Images } from "../Assets"
import { IWeaponKills } from "../../types"

const WeaponStatsRow: React.FC<{
  weapon: string
  count: number
}> = ({ weapon, count }) => {
  return (
    <tr className={styles.row}>
      <td className={styles.imgContainer}>
        <img src={Weapon_Images[weapon]} />
      </td>
      <td className={styles.weaponInfo}>{weapon}</td>
      <td className={styles.killInfo}>{count}</td>
    </tr>
  )
}

const WeaponStats: React.FC<{
  weaponKills: IWeaponKills
}> = ({ weaponKills }) => {
  const weaponStats = Object.keys(weaponKills).map((key) => (
    <WeaponStatsRow key={key} weapon={key} count={weaponKills[key]} />
  ))

  return (
    <table className={styles.table}>
      <thead className={styles.headerRow}>
        <tr>
          <td colSpan={2} className={styles.col}>
            Weapons
          </td>
          <td className={styles.col}>Kills</td>
        </tr>
      </thead>
      <tbody>{weaponStats}</tbody>
    </table>
  )
}

export default WeaponStats
