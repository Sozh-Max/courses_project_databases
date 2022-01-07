import React from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { styles } from './styles';
import './style.scss';

export const AutocompleteCustom = ({
  label,
  placeholder,
  onChange,
  value,
  disableClearable,
  list = [],
  error,
  multiple,
  defaultValue = [],
  optionTitle = 'name',
  optionGroup = false,
  optionGroupByName = 'category',
  renderOption,
  disabled,
  hidden,
}) => {

  return (
    <Box sx={styles.wrapper}>
      <Autocomplete
        multiple={multiple}
        fullWidth
        variant="outlined"
        options={list}
        groupBy={optionGroup ? option => option[optionGroupByName] : null}
        getOptionLabel={option => {
          if (Array.isArray(optionTitle)) {
            if (!option[optionTitle[0]]) {
              return null;
            }
            return `${option[optionTitle[0]]} (${option[optionTitle[1]]})`;
          }
          return option[optionTitle]
        }}
        disableClearable={disableClearable}
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
        disabled={disabled}
        ListboxProps={{
          sx: styles.list,
        }}
        hidden={hidden}
        renderOption={renderOption}
        sx={styles.autocomplete}
        renderInput={params => {
          return (
          <TextField
            {...params}
            variant="standard"
            label={label || null}
            error={error}
            placeholder={placeholder || null}
          />
        )}}
      />
    </Box>
  );
}
