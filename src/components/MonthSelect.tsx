import { useState } from 'react';
import { MonthPickerInput } from '@mantine/dates';

function MonthSelect() {
  const [value, setValue] = useState<[Date | null, Date | null]>([new Date(2020, 12), new Date(2023, 3)]);
  const [date, setDate] = useState(new Date());
  return (
    <MonthPickerInput
      onDateChange={setDate}
      minDate={new Date(2020, 12)}
      maxDate={new Date(2023, 3)}
      value={value}
      onChange={setValue}
      maw={400}
      type="range"
    />
  );
}

export default MonthSelect