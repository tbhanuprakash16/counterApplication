import { Component } from 'react'

import Welcome from "./components/Welcome"

import "./App.css"

class App extends Component {
    state = {isLoggedIn: true}

    // Using if...else Method
    /*renderAuthBtn = () => {
        const {isLoggedIn} = this.state
        if (isLoggedIn === true) {
            return <button className = "button" type = "button">
                        Logout
                    </button>
        }
        return <button className = "button" type = "button">
                    Login
                </button>
    }
*/

    // Using ternary Operator
    /* {isLoggedIn ? <button className = "button" type = "button">
                        Logout
                    </button> : <button className = "button" type = "button">
                    Login
                </button>}
    */

    // Using Element Variables
    /* const { isLoggedIn } = this.state
        let authButton
        if (isLoggedIn) {
        authButton = <button>Logout</button>
        } else {
        authButton = <button>Login</button>
        }
        */

        // Using && Operator 
        /* {isLoggedIn && <button>Logout</button>}
                {!isLoggedIn && <button>Login</button>}
        */

    render() {
        const { isLoggedIn } = this.state
        
        return (
            <div className = "container">
                <Welcome name = "Ram" greeting = "Hi" />
                {isLoggedIn && <button>Logout</button>}
                {!isLoggedIn && <button>Login</button>}
            </div>
        )
    }
}

export default App