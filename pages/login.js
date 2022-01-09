import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
function login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      {" "}
      <Image
        className="w-52 ml-10"
        src="https://links.papareact.com/9xl"
        alt="brand-logo"
        width={208}
        height={208}
      />{" "}
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          {" "}
          <button
            className="bg-[#18D860] text-white p-5 mt-6 rounded-full"
            onClick={() => {
              signIn(provider.id, { callbackUrl: "/" });
            }}
          >
            {" "}
            Login with <b>{provider.name}</b>{" "}
          </button>{" "}
        </div>
      ))}{" "}
    </div>
  );
}
export default login;
export async function getServerSideProps() {
  const providers = await getProviders();
  return { props: { providers } };
}
