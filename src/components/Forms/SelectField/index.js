import React from 'react';
import { useField } from 'formik';

import * as S from './styled';

const SelectField = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input> and alse replace ErrorMessage entirely.
    const [field, meta] = useField(props);
    return (
        <>
        <S.Label htmlFor={props.id || props.name}>{label}</S.Label>
        <S.Select {...field} {...props} />
            {meta.touched && meta.error ? (
                <S.ErrorMessage>{meta.error}</S.ErrorMessage>
            ) : null}
        </>
    );
};

export default SelectField;
