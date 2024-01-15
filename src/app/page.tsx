import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <span className='text-green-400 text-[100pt] hover:text-red-500 transition-all duration-500 text-5xl hover:text-[200pt]'>
        koiroy
      </span>
    </div>
  )
}
