import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './chart.module.css';
const Chart = () => {
    const [dailyData, setDailyData] = useState({});
    useEffect(()=>{
        const fetchAPI = async () => {
            const dailyData = await fetchDailyData();
        }
        console.log(dailyData)
        fetchAPI();
    },[]);
    const lineChart = (
        dailyData[0]?(
        <Line>
            data = {{
                labels: '',
                datasets:[{},{}],
            }}
        </Line> ) : null
        
    );
    return (
        <h1>Chart</h1>
    )
}
export default Chart;