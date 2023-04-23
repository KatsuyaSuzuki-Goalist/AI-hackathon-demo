import { Select } from '@mantine/core';

function CategorySelect(props: CateforySelectProps) {
  return (
    <Select
      data={props.data}
      disabled={props.isDisable}
    />
  );
}

type CateforySelectProps = {
  data: { value: string, label: string }[]
  isDisable: boolean
}

export default CategorySelect