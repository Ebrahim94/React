import React from 'react'

class GoogleAuth extends React.Component{

    componentDidMount () {
        window.gapi.load('client:auth2', () => {window.gapi.client.init({
            clientId: '923301438309-ctd80btngufv199dkngtfc48rjr5d23s.apps.googleusercontent.com',
            scope:'email'
        })}
        )
    }

    render()
    {
        return <div>Google Auth</div>
    }
}


export default GoogleAuth