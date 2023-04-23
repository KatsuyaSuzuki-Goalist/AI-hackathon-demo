import { Select } from '@mantine/core';

function CategorySelect() {
  return (
    <Select
      // label="Your favorite framework/library"
      // placeholder="Pick one"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
  );
}

export default CategorySelect