import { Inter } from 'next/font/google'
import Image from 'next/image';
import Logo from '../../public/HRog.svg';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen  bg-[#e7e7e7]">
      <nav>
        <div className='flex items-center px-3.5 bg-[#f8f8f8] border-b-2 border-b-gray-300'>
          <div className='m-2.5'>
            <Image
              src={Logo}
              alt="logo"
              width={120}
              height={30}
            />
          </div>
          <div className='w-2/5 ml-7'>
            <div className='flex justify-between items-center h-12'>
              <input type="text" placeholder='エリア(東京都、品川区など）' className='h-8 px-2 rounded border text-sm' />
              <p className='text-[#aaa]'>✖︎</p>
              <input type="text" placeholder='職種(フード、事務など）' className='h-8 px-2 rounded border text-sm' />
              <button className='text-white rounded py-1.5 px-3 bg-[#12a5cc] border-[#009aa6]'>実行結果</button>
            </div>
          </div>
          <div className='flex items-center justify-end w-3/5'>
            <div className='py-1.5 px-3 text-[#3279ca]'>ローデータファイル履歴</div>
            <div className='py-1.5 px-3 text-[#f5cf56]'>ヒントを表示</div>
            <div className='py-1.5 px-3 text-[#555]'>HRogチャートデモさん</div>
          </div>
        </div>
      </nav>
    </main>
  )
}
