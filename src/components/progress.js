import React, {Component} from 'react'

export default class Progress extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null, 
            statistics: []
        }
    }
    componentDidMount() {
        fetch("https://pomber.github.io/covid19/timeseries.json")
        .then(response => response.json())
        .then(
            data => { 
                this.setState({
                    statistics: data[window.location.pathname.substring(1)].reverse()
                })
            },
            error => { this.setState({error})}
        )
    }
    render() {
        const {error, statistics} = this.state
        if (error) {return <div>{error.message}</div>}
        return(
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col"> Confirmed </th>
                        <th scope="col"> Recovered </th>
                        <th scope="col"> Deaths </th>
                    </tr>
                </thead>
                <tbody>
                    {statistics.map(({ date, confirmed, recovered, deaths }) => {
                        return (
                            <tr>
                                <td> {date} </td>
                                <td> {confirmed} </td>
                                <td> {recovered} </td>
                                <td> {deaths} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}