import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import Center from '../components/Center'
import styles from '../styles/Home.module.css'
import { getSession } from 'next-auth/react'

export default function Home() {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <main className='flex'>
        <Sidebar/>
        <Center />
      </main>
    
    </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    }
  }
}