import LoginScreen from '@screens/Login'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sapo Kanban - SignIn</title>
      </Head>
      <LoginScreen />
    </div>
  )
}
