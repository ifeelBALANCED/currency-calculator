import React from 'react';
import {Select} from "@chakra-ui/react";
const FromCurrency = ({onSelectChange, fromCurrency, allCurrencies}) => {
    return (
        <Select
            name="from"
            onChange={onSelectChange}
            value={fromCurrency}
        >
            {allCurrencies}
        </Select>
    );
};

export default FromCurrency;
