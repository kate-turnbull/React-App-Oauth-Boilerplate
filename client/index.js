import React from 'react'
import { render } from 'react-dom'
// import { AuthOProvider } from '@autho/autho-react'
import { Provider } from 'react-redux'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
    render(
        // <Auth0Provider
        // domain={'dev-16vcgw7c.us.auth0.com'}
        // clientId='5spd1v7AZB9WdqWDLZiXtMZpzs0YW2C0'
        // redirectUri={window.location.origin}
        // audience='https://React-App-OAuth-Boilerplate/api'
        // >
        //     <Provider store={store}>
        <App />,
        // </Provider>
        // </Auth0Provider>,
        document.getElementById('app')
    )
})