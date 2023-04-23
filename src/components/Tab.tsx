import { Tabs } from '@mantine/core';
import CategorySelect from './CategorySelect';
import FreeWord from './FreeWord';

const occupation = [
  { value: '1', label: 'ITエンジニア/IT系専門職' },
  { value: '2', label: 'アミューズメント' },
  { value: '3', label: 'クリエイティブ（Web系）' },
  { value: '4', label: 'ナイトワーク' },
  { value: '5', label: 'ファッション/アパレル/インテリア' },
  { value: '6', label: 'ホテル/旅館/ブライダル' },
  { value: '7', label: '公務員/団体職員' },
  { value: '8', label: '医療/医薬/福祉' },
  { value: '9', label: '営業/事務/企画/管理' },
  { value: '10', label: '専門職' },
  { value: '11', label: '建設/土木/エネルギー' },
  { value: '12', label: '教育/語学/スポーツ' },
  { value: '13', label: '映像/イベント/芸能/キャンペーン' },
  { value: '14', label: '美容/エステ/ネイル' },
  { value: '15', label: '製造/工場/化学/食品' },
  { value: '16', label: '販売/接客/サービス' },
  { value: '17', label: '農林水産関連' },
  { value: '18', label: '運輸/物流/配送/警備/作業/調査' },
  { value: '19', label: '電気/電子/機械/自動車' },
  { value: '20', label: '飲食/フード' },
  { value: '21', label: 'その他' },
]

function Tab() {
  return (
    <Tabs variant="outline" defaultValue="3">
      <Tabs.List>
        <Tabs.Tab value="1" disabled className='text-[#12a5cc]' >媒体と雇用形態</Tabs.Tab>
        <Tabs.Tab value="2" disabled className='text-[#12a5cc]' >エリア</Tabs.Tab>
        <Tabs.Tab value="3" >職種と業種</Tabs.Tab>
        <Tabs.Tab value="4" disabled className='text-[#12a5cc]' >フリーワード</Tabs.Tab>
        <Tabs.Tab value="5" disabled className='text-[#12a5cc]' >その他</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="3" pt="xs" className='border p-8'>
        <div className="grid grid-cols-3 gap-8">
          <div>職種カテゴリ</div>
          <div className='col-start-2 col-end-4'><CategorySelect data={occupation} isDisable={false} /></div>
          <div>職種フリーワード</div>
          <div className='col-start-2 col-end-4'><FreeWord /></div>
          <div>業種</div>
          <div className='col-start-2 col-end-4'><CategorySelect data={occupation} isDisable={true} /></div>
        </div>
      </Tabs.Panel>
    </Tabs>
  );
}

export default Tab