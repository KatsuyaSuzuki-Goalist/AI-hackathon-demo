import { Select } from '@mantine/core';

function CategorySelect(props: CateforySelectProps) {
  return (
    <Select
      data={props.data}
      disabled={props.isDisable}
      defaultValue={props.data[0].value}
      value={props.value}
      onChange={props.setValue}
    />
  );
}

type CateforySelectProps = {
  data: { value: string, label: string }[]
  isDisable: boolean
  value: string
  setValue: (v: string) => void
}

export default CategorySelect