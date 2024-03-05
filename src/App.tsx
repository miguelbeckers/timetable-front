import {Provider} from 'react-redux'
import index from './store'

import './App.css'
import Hello from './components/Hello'

function App() {
    return (
        <Provider store={index}>
            <Hello/>
        </Provider>
    )
}

export default App
