import React from 'react';
import {Input} from "@chakra-ui/react";
const ConverterInput = ({amount, changeHandler}) => {
    return (
        <Input
            name="amount"
            type="text"
            mt={5}
            value={amount}
            onChange={changeHandler}
        />
    );
};

export default ConverterInput;
