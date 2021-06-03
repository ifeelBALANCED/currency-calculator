import React from 'react';
import {Button} from "@chakra-ui/react";

const ConverterButton = ({convertHandler}) => {
    return (
        <Button
            mt={4}
            onClick={() => convertHandler()}
            colorScheme="teal"
        >
            Convert
        </Button>
    );
};

export default ConverterButton;
