import React from 'react';

// chakra
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
} from '@chakra-ui/react';

const CustomFormControl = ({
  helperText,
  type,
  id,
  label,
  placeholder,
  onChange,
}) => {
  return (
    <FormControl id={id}>
      <FormLabel mb={1} fontSize='14px'>
        {label}
      </FormLabel>

      {type === 'textarea' ? (
        <Textarea
          bg='white'
          borderRadius='13px'
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : (
        <Input
          bg='white'
          h='45px'
          borderRadius='13px'
          placeholder={placeholder}
          type={type}
          onChange={onChange}
        />
      )}

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default CustomFormControl;
