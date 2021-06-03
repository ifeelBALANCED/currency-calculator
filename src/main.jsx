import React, {StrictMode} from 'react'
import { ColorModeScript } from '@chakra-ui/react';
import {render} from 'react-dom'
import App from './components/App/app'
import './index.css'

render(
    <StrictMode>
        <ColorModeScript/>
        <App/>
    </StrictMode>,
    document.getElementById('root')
)
