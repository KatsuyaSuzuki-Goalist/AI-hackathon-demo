import { Tabs } from '@mantine/core';
import CategorySelect from './CategorySelect';
import FreeWord from './FreeWord';

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
          <div className='col-start-2 col-end-4'><CategorySelect /></div>
          <div>職種フリーワード</div>
          <div className='col-start-2 col-end-4'><FreeWord /></div>
          <div>業種</div>
          <div className='col-start-2 col-end-4'><CategorySelect /></div>
        </div>
      </Tabs.Panel>
    </Tabs>
  );
}

export default Tab