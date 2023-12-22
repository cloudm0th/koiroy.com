import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <span className='text-green-400 font-bold text-5xl hover:text-red-500'>
        koiroy
      </span>
      <span className='text-grey-400 transition-all duration-500 text-5xl hover:text-3xl'>
        KOIROY
      </span>
      <span className='text-grey hover:text-fuchsia-400 transition duration-500 text-5xl'>
        koiroy
      </span>
    </div>
  )
}
