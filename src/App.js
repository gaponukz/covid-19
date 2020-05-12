import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react'
import {useParams} from "react-router-dom"
import Navbar from './components/navbar'
import {Menu, MenuItem} from './components/menu'
import CustomDropdown from './components/dropdown'
import {Main, Header} from './components/content'
import MostInfectedTable from './components/table'
import Canvas from './components/canvas'
import CountryCanvas from './components/countryCanvas'
import Progress from './components/progress'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar> Covid-19 </Navbar> 
                <div className="container-fluid">
                    <div className="row"> 
                        <Menu>
                            <MenuItem goTo = "/localhost:3000/">
                                All statistics
                            </MenuItem>
                            <MenuItem goTo = "/">
                                <CustomDropdown/>
                            </MenuItem>
                            <MenuItem goTo = "/github.com/pomber/covid19">
                                Covid-19 API
                            </MenuItem>
                            <MenuItem goTo = "/https://www.instagram.com/__zhenyagaponyuk/">
                                Author
                            </MenuItem>
                        </Menu>

                        <Main> 
                            <Router>
                                <Switch>
                                    <Route exact path = "/" component = {AllStatistics} />
                                    <Route exact path = "/:country" component = {Countrys} />
                                </Switch>
                            </Router>
                        </Main>
                    </div>
                </div>
            </div>
        )
    }
}

export default App

class AllStatistics extends Component {
    render() {
        return (
            <div>
                <Header> Statistics </Header>
                <Canvas id = "myChart" width = {900} height = {380} />
                <h2>Most infected</h2>
                <MostInfectedTable/>
            </div>
        )
    }
}

class Countrys extends Component {
    render() {
        return (
            <div>
                <Header> 
                    Statistics in 
                    <Route path = "/:country" component={Country}/>
                </Header>
                <CountryCanvas id = "countyCanvas" width = {900} height = {380} />
                <h2> Coronavirus progress </h2>
                <Progress/>
            </div>
        )
    }
}

const Country = () => {
    let { country } = useParams()
    return <> {country} </>
  }
