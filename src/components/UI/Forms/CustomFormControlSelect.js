import React from "react";

// chakra
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Select,
} from "@chakra-ui/react";

const CustomFormControlSelect = ({
  helperText,
  id,
  label,
  placeholder,
  onChange,
  options = [],
}) => {
  return (
    <FormControl id={id}>
      <FormLabel mb={1} fontSize="14px">
        {label}
      </FormLabel>

      <Select
        borderRadius="13px"
        bg="white"
        h="45px"
        placeholder={placeholder}
        onChange={onChange}
        placeholder="Select option"
      >
        {options.map((opt, index) => {
          return (
            <option key={index} value={opt}>
              {opt}
            </option>
          );
        })}
      </Select>

      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default CustomFormControlSelect;
