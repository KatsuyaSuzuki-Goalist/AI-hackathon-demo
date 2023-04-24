import { Select } from '@mantine/core';

function CategorySelect(props: CateforySelectProps) {
  return (
    <Select
      data={props.data}
      disabled={props.isDisable}
      defaultValue={props.data[0].value}
    />
  );
}

type CateforySelectProps = {
  data: { value: string, label: string }[]
  isDisable: boolean
}

export default CategorySelect