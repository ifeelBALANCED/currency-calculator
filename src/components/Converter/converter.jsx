import React, {Component} from "react";
import {Box, Center, Container, Flex, Heading} from "@chakra-ui/react";
import ConverterTitle from './ConverterTitle/converterTitle'
import ConverterInput from "./ConverterInput/converterInput"
import ConverterButton from './ConverterButton/converterButton'
import FromCurrency from "./FromCurrency/fromCurrency"
import ToCurrency from "./ToCurrency/toCurrency"
import {fetchData} from "./api";
import axios from "axios";
import {v4} from 'uuid';

// Class = Converter | @ state = default properties | currencies array to hold data
class Converter extends Component {
    state = {
        result: null,
        fromCurrency: "USD",
        toCurrency: "MXN",
        amount: 1,
        currencies: []
    };
    baseUrl = "http://api.exchangeratesapi.io/v1/latest?access_key=3648c0efea06525e0679591559f8230c"

    // Initializes the currencies with LATEST CURRENCY VALUES from the openrates.io API
    componentDidMount() {
        fetchData()
            .then(({data: {rates}}) => {
                const currencyAr = ["EUR"];
                for (const key in rates) {
                    currencyAr.push(key);
                }
                this.setState({currencies: currencyAr.sort()});
            })
            .catch((err) => {
                console.log(
                    "Houston, we've got a problem; see following ERROR message: " +
                    err.message
                );
            });
    }

    // Event handler for the conversion | GET latest rates fromCurrency = USD || toCurrency = MXN (Mexican Peso) = default FROM & TO SELECT values
    convertHandler = () => {
        if (this.state.fromCurrency !== this.state.toCurrency) {
            axios
                .get(
                    `${this.baseUrl}&cbase=${this.state.fromCurrency}&symbols=${this.state.toCurrency}`
                )
                .then(async ({data: {rates}}) => {
                    const result = this.state.amount * rates[this.state.toCurrency];
                    this.setState({result: Math.floor(result)});
                })
                .catch(({message}) => {
                    console.log("Ops", message);
                });
        } else {
            this.setState({
                result:
                    "Unable to convert the same currency! Must have a different From & To currency type."
            });
        }
    };

    //  selectHandler() function updates "FROM" & "TO" States based on user selection (event)
    selectHandler = ({target: {name, value}}) => {
        if (name === "from") {
            this.setState({fromCurrency: value});
        }
        if (name === "to") {
            this.setState({toCurrency: value});
        }
    };

    // render() function is required to display HTML & CSS, as well as Font-Awesome "USD" Icon
    render() {
        const {
            fromCurrency, amount,
            toCurrency, result
        } = this.state
        const allCurrencies = this.state.currencies.map((cur) => (
            <option key={v4()}>{cur}</option>
        ))
        const onSelectChange = (evt) => this.selectHandler(evt)
        const changeHandler = ({target: {value}}) => this.setState({amount: value})
        return (
            <Container>
                <ConverterTitle title="Currency Converter"/>
                <ConverterInput
                    amount={amount}
                    changeHandler={changeHandler}
                />
                <Flex mt={3}>
                    <FromCurrency
                        onSelectChange={onSelectChange}
                        fromCurrency={fromCurrency}
                        allCurrencies={allCurrencies}
                    />
                    <ToCurrency
                        onSelectChange={onSelectChange}
                        toCurrency={toCurrency}
                        allCurrencies={allCurrencies}
                    />
                </Flex>
                <ConverterButton convertHandler={this.convertHandler}/>
                {result &&
                <Box
                    bg="teal"
                    w="100%"
                    p={4} mt={3}
                    color="white"
                    borderRadius="lg"
                >
                    <Heading as="h2" size="xl">
                        <Center>
                            {result}
                        </Center>
                    </Heading>
                </Box>
                }
            </Container>
        );
    }
}

export default Converter;
