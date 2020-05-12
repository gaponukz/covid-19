import React, {Component} from 'react'

export default class MostInfectedTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            countries: [],
            statistics: {}
        }
    }
    componentDidMount() {
        fetch("https://pomber.github.io/covid19/timeseries.json")
        .then(response => response.json())
        .then( data => {
            let sortable_data = []

            for (let country in data) {
                let con = data[country][data[country].length - 1].confirmed
                let rec = data[country][data[country].length - 1].recovered
                let die = data[country][data[country].length - 1].deaths
                let statistics = [con, rec, die]
                let statistics_num = con - rec - die
                sortable_data.push([country, statistics, statistics_num])
            }
            sortable_data.sort((a, b) => {
                return b[2] - a[2]
            })
        
            let ObjectSorted = {}
            sortable_data.forEach(item => {
                ObjectSorted[item[0]] = item[1]
            })
            this.setState({
                statistics: ObjectSorted,
                countries: Object.keys(ObjectSorted).slice(0, 10)
            })
        },
            error => { this.setState({error})}
        )
    }
    render() {
        const {error, countries, statistics} = this.state
        if (error) {return <div>{error.message}</div>}
        return (
            <Table>
                <Thead>
                    <TableColumn>
                        {['Country', 'Confirmed', 'Recovered', 'Deaths'].map(item => {
                            return (
                                <TableField> <h6> {item} </h6> </TableField>
                            )
                        })}
                    </TableColumn>
                </Thead>
                <Body>
                    {countries.map(country => {
                        return (
                        <TableColumn>
                            <TableField> {country} </TableField>
                            {[0, 1, 2].map(item => {
                                return (
                                    <TableField> {statistics[country][item]} </TableField>
                                )
                            })}
                        </TableColumn>
                        )
                    })}
                </Body>
            </Table>
        )
    }
}

const Table = props => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                {props.children}
            </table>
        </div>
    )
}

const Thead = props => {
    return (
        <thead>
            {props.children}
        </thead>
    )
}

const Body = props => {
    return (
        <tbody>
            {props.children}
        </tbody>
    )
}

const TableColumn = props => {
    return (
        <tr>
            {props.children}
        </tr>
    )
}

const TableField = props => {
    return (
        <td>
            {props.children}
        </td>
    )
}