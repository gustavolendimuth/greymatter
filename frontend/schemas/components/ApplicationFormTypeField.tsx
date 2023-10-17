/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Select, Stack } from '@sanity/ui';
import React, { useCallback } from 'react';
import { set, StringInputProps, unset } from 'sanity';

function CustomTypeSelect(props: StringInputProps) {
  const { onChange, value = '', elementProps } = props;
  // const fieldType = useFormValue(['fieldType']);
  // const fieldValue = useFormValue(['fieldValue']);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('value', value);
    console.log('event', event.currentTarget.value);

    onChange(event.currentTarget.value !== value ? set(event.currentTarget.value) : unset());

    // if (event.currentTarget.value !== value) {
    //   console.log('entrou');

    //   onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset());
    //   // onChange(unset(['fieldValue']));
    // } else {
    //   onChange(event.currentTarget.value ? set(event.currentTarget.value) : unset());
    // }
  }, [onChange]);

  return (
    <Card padding={4}>
      <Stack>
        <Select
          // fontSize={[2, 2, 3, 4]}
          // padding={[3, 3, 4]}
          space={[0, 0, 0]}
          // label="fieldValue"
          {...elementProps}
          value={value}
          onChange={handleChange}
        >
          <option value="title">Título da seção</option>
          <option value="text">Texto Curto</option>
          <option value="textarea">Texto Longo</option>
          <option value="upload">Upload</option>
        </Select>
      </Stack>
    </Card>
  );
}

export default CustomTypeSelect;
