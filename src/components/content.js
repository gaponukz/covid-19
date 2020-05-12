import React, {Component} from 'react'

class Main extends Component {
    render() {
        return (
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                {this.props.children}
            </main>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2"> {this.props.children} </h1>
            </div>
        )
    }
}

export {
    Main,
    Header
}