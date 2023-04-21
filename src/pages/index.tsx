import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'

export default function Home() {
  return (
    <main className="min-h-screen  bg-[#f8f8f8]">
      <Nav />
      <div className='flex justify-center mt-6'>
        <div>
          <div className='p-6'>
            <div className='flex flex-col items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-[#f5cf56]">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              <p className='text-[#f5cf56]'>お気に入り</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center w-2/3 bg-white'>
          <div className='flex items-center justify-between px-4 py-3 w-full bg-[#e6e6e6]'>
            <p className='text-black text-2xl ml-4'>新規集計</p>
            <div>
              <button className='rounded mr-10 bg-[#ffd64f] py-1.5 px-3'>お気に入り保存</button>
              <button className='rounded bg-[#e85b70] py-1.5 px-3'>条件をクリア</button>
            </div>
          </div>
          <div>集計条件</div>
        </div>
      </div>
    </main>
  )
}
