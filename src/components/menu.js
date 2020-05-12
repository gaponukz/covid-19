import React, {Component} from 'react'

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            {this.props.children}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

class MenuItem extends Component {
    render() {
        return (
            <div>
                <li className="nav-item">
                    <a className="nav-link" href={this.props.goTo ? `/${this.props.goTo}` : `/${this.props.children}`}>
                        <span data-feather="file"></span>
                        {this.props.children}
                    </a>
                </li>
            </div>
        )
    }
}

export {
    Menu,
    MenuItem
}