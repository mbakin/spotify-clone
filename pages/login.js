import { getProviders, signIn } from 'next-auth/react';ß

function login() {
  return (
    <div>
      login page?
    </div>
  )
}

export default login

export async function getServerSideProps() {
  const providers = await getProviders()

  return{
    props: {
      providers,
    }
  }
}
