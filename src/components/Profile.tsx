import styles from '../assets/styles/components/profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/MatheusFC2.png" alt="Matheus Campos" />
      <div>
        <strong>Matheus Campos</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          level 1
        </p>
      </div>
    </div>
  )
}
