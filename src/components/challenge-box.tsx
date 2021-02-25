import styles from '../assets/styles/components/challenge-box.module.css'

export function ChallengeBox() {
  const hasActiveChallenge = true

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Get 400 xp</header>
          <main>
            <img src="icons/body.svg" alt="" />
            <strong>New Challenge</strong>
            <p>Go and walk during 3 minutes</p>
          </main>
          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Failed
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Concluded
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finish a cycle to receive challenge !</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Level up completing the challenges !
          </p>
        </div>
      )}
    </div>
  )
}
