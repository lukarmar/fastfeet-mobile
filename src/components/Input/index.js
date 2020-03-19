import React, { useRef, useEffect } from 'react';
import { TextInput } from 'react-native';
import { useField } from '@unform/core';
import propTypes from 'prop-types';

export default function Input({ name, ...rest }) {
  const inpuREf = useRef(null);
  const { fieldName, registerField, defaultValue = '' } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inpuREf.current,
      path: '_lastNativeText',
      getValue(ref) {
        return ref._lastNativeText || '';
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: '' });
        ref._lastNativeText = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <TextInput ref={inpuREf} defaultValue={defaultValue} {...rest} />
    </>
  );
}

Input.propTypes = {
  name: propTypes.string.isRequired,
};
