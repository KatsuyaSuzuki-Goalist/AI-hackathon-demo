import Image from 'next/image'
import Nav from '@/components/Nav'
import MonthSelect from '@/components/MonthSelect'
import Tab from '@/components/Tab'
import LinePlot from '@/components/linePlot'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f8f8]">
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
            <p className='text-2xl ml-4'>新規集計</p>
            <div>
              <button className='text-white rounded mr-10 bg-[#ffd64f] py-1.5 px-3'>お気に入り保存</button>
              <button className='text-white rounded bg-[#e85b70] py-1.5 px-3'>条件をクリア</button>
            </div>
          </div>
          <div className='w-full py-5 px-12'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-[#1975d1]">
                  <path fillRule="evenodd" d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z" clipRule="evenodd" />
                </svg>
                <h3 className='text-3xl my-5 ml-4'>フィルタ条件</h3>
              </div>
              <button className='text-white rounded bg-[#e85b70] py-1.5 px-3'>フィルタ条件をクリア</button>
            </div>
            <div className='flex m-6'>
              <p className=''>集計対象期間</p>
              <div className='flex gap-6 ml-16'>
                <MonthSelect />
                <p className='text-black'>〜</p>
                <MonthSelect />
              </div>
            </div>
            <div>
              <Tab />
            </div>
            <div className='flex justify-center mt-8'>
              <button className='text-white w-[12em] text-[1.2em] p-5 rounded bg-[#12a5cc]'>集計実行</button>
            </div>
            <div className='py-8'>
              <div className='flex items-center'>
                <Image src="/icon_future.png" alt="image" width={30} height={30} />
                <h3 className='text-3xl my-5 ml-4'>未来予測グラフ</h3>
              </div>
              <div className='p-4'>
                <LinePlot />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
