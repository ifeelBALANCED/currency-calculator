import React from 'react';
import {ChakraProvider, theme} from "@chakra-ui/react"
import Converter from "../Converter/converter";
import {ColorModeSwitcher} from "../../utils/ColorModeSwitcher";

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <div id="currencyConverterApp">
                <section className="currencyConvComponent">
                    <ColorModeSwitcher/>
                    <Converter/>
                </section>
            </div>
        </ChakraProvider>
    );
}

export default App;
