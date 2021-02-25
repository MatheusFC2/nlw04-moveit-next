import { useState, useEffect } from 'react'
import styles from '../assets/styles/components/countdown.module.css'

let countdownTimeout: NodeJS.Timeout

export function Countdown() {
  const defaultTime = 0.1 * 60
  const [time, setTime] = useState(defaultTime)
  const [isActive, setActive] = useState(false)
  const [hasFinished, setFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountDown() {
    setActive(true)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setActive(false)
    setTime(defaultTime)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setFinished(true)
      setActive(false)
      setTime(defaultTime)
    }
  }, [isActive, time])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button type="button" disabled className={styles.countdownButton}>
          Cycle finished
        </button>
      ) : (
        <>
          {!isActive ? (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountDown}
            >
              Start a cycle
            </button>
          ) : (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Stop cycle
            </button>
          )}
        </>
      )}
    </div>
  )
}
