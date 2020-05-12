import React, {Component} from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="/">
                        {this.props.children}
                    </a>
                </nav>
            </>
        )
    }
}