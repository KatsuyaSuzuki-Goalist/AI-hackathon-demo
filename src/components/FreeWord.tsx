import { Autocomplete } from '@mantine/core';

function FreeWord() {
  return (
    <Autocomplete
      // label="Your favorite framework/library"
      // placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      disabled
    />
  );
}

export default FreeWord