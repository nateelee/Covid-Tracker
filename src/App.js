import React from 'react';
import {Component} from 'react';

import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';

class App extends Component {
    state = {
        data: {},
        country: '',

    }
    async componentDidMount () {
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }
    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        this.setState({
            data : fetchedData,
            country: country
        });
    }
    render() {
        const {data , country, } = this.state;
        return (
            <div class = {styles.container}>
                <p className = {styles.p}>Covid-19 Tracker</p>
                <Cards data = {data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange}/>
                <Chart data = {data} country = {country}/>

            </div>
        );
    }
}
export default App;