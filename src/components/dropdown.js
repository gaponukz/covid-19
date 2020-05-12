import React, {Component, useState} from 'react'
import { Dropdown, FormControl } from 'react-bootstrap'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href = {null}
        ref = {ref}
        onClick = {(event) => {
            event.preventDefault()
            onClick(event)
        }}
    >
        { children } {   }
        &#x25bc;
    </a>
))

const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('')
  
      return (
        <div
          ref = {ref}
          style = {style}
          className = {className}
          aria-labelledby = {labeledBy}
        >
          <FormControl
            autoFocus
            className = "mx-3 my-2 w-auto"
            placeholder = "Type to filter..."
            onChange = {(event) => setValue(event.target.value)}
            value = {value}
          />
            <ul className="list-unstyled">
                {React.Children.toArray(children).filter(
                    (child) =>
                        !value || child.props.children.toLowerCase()
                        .startsWith(value),
                )}
            </ul>
        </div>
      )
    },
)

export default class CustomDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null, countries: []
        }
    }
    componentDidMount() {
        fetch("https://pomber.github.io/covid19/timeseries.json")
        .then(response => response.json())
        .then(
            data => { this.setState({ countries: Object.keys(data)})},
            error => { this.setState({error})}
        )
    }
    render() {
        const {error, countries} = this.state
        if (error) {return <div>{error.message}</div>}
        return (
            <>
                <Dropdown>
                    <Dropdown.Toggle as = {CustomToggle} id="dropdown-custom-components">
                        Countries 
                    </Dropdown.Toggle>

                    <Dropdown.Menu as = {CustomMenu}>
                        {countries.map(country => (
                            <Dropdown.Item href = {country}>{country}</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </>
        )
    }
}