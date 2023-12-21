import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-[100dvh] width-full overflow-scroll hide-scrollbars flex flex-col justify-center items-center bg-fuchsia-950'>
      <h1 className='koiroy-title'>Koiroy yo</h1>
      <Image
        className='m-4'
        alt='koiroy logo'
        src='/vercel.svg'
        width={600}
        height={400}
      />
      <Image
        className='m-4'
        alt='koiroy logo'
        src='/next.svg'
        width={300}
        height={300}
      />
    </main>
  )
}
