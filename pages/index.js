import Head from 'next/head';
import ContentButton from './components/ContentButton';
import DiscordButton from './components/DiscordButton';
import Nav from './components/Nav';

export default function Home() {

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        <title>ZeroAuthority DAO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="font-inter absolute bg-hero bg-cover bg-no-repeat lg:w-screen h-min drop-shadow-lg">
        <Nav />
        <div className="my-60 lg:my-20">
        <div className="font-black text-white text-8xl 2xl:text-9xl pl-10 mt-40 xl:mt-0 ml-20">
          Remember why <br/> you started
        </div>
        <div className="text-white leading-7 text-3xl 2xl:text-4xl md:text-2xl pl-10 mt-10 md:mt-10 ml-20">
        Zero Authority is a comunity of people who believe in <br/> open source and permissionless
        systems built on <br/> Stacks and secured by Bitcoin
        </div>
        <ContentButton />
        </div>
      </div>

      <div className="absolute px-64 lg:px-[29rem] 2xl:px-[48rem] top-[140%] lg:top-3/4 font-inter lg:pb-20 lg:mt-20">
        <div className="font-black text-5xl 2xl:text-7xl mt-40 w-96 xl:w-[70%]">
          Join us in
          building a
          better Internet
        </div>
        <div className="leading-7 text-2xl md:text-xl 2xl:text-2xl mt-10 w-[30rem] 2xl:w-[45rem]">
        Zero Authority brings together the best content
        in the Stacks and Bitcoin ecosystems to help web3
        enthusiasts, developers, and degens build a user-owned
        Internet secured by Bitcoin.
        </div>
        <DiscordButton />
      </div>
    </>
  )
}
