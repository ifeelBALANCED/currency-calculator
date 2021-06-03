import React from 'react';
import {Select} from "@chakra-ui/react";
const ToCurrency = ({onSelectChange, toCurrency, allCurrencies}) => {
    return (
        <Select
            name="to"
            onChange={onSelectChange}
            value={toCurrency}
        >
            {allCurrencies}
        </Select>
    );
};

export default ToCurrency;
