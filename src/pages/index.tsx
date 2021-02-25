import Head from 'next/head'
import style from '../assets/styles/pages/home.module.css'
import { ChallengeBox } from '../components/challenge-box'
import { CompletedChallenges } from '../components/completed-challenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/experience-bar'
import { Profile } from '../components/Profile'

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>MoveIt Timer</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
