import { FormLabel } from '@chakra-ui/react';
import React from 'react';
import Select from 'react-select';

const SearchableSelect = ({
  label,
  onChange,
  options,
  isMulti,
  value,
  defaultValue,
  placeholder,
}) => {
  const customStyles = {
    input: (provided, state) => ({
      ...provided,
      padding: '7.2px 7px 7.2px 7px',
      width: '100%',
    }),

    control: (provided, state) => ({
      ...provided,
      border: '1px solid #E2E8F0',
      borderRadius: '13px',
      paddingLeft: '8px',
      paddingRight: '8px',
    }),

    // menu: (provided, state) => ({
    //   ...provided,
    //   top: "-20"
    // }),

    container: (provided, state) => ({
      ...provided,
      height: '100%',
    }),

    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: 'none',
    }),
  };

  return (
    <div>
      <FormLabel mb={1} fontSize='14px'>
        {label}
      </FormLabel>
      <Select
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        options={options}
        defaultValue={defaultValue}
        styles={customStyles}
        isMulti={isMulti}
      />
    </div>
  );
};

export default SearchableSelect;
