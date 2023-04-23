import { useState } from 'react';
import { MonthPickerInput } from '@mantine/dates';

function MonthSelect() {
  const [value, setValue] = useState<Date | null>(new Date(2023, 3));
  return (
    <MonthPickerInput
      defaultValue={new Date(2023, 3)}
      value={value}
      onChange={setValue}
      maw={400}
    />
  );
}

export default MonthSelect