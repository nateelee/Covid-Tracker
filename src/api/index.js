import axios from 'axios'; // used to make api requests

const url = "https://covid19.mathdro.id/api";

export const fetchData = async() => {
    try {
        const {data} = await axios.get(url);
        const modifiedData = {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }
        return modifiedData;
    }
    catch (error) {

    }
}
export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        console.log(data);
    }
    catch (error) {

    }
}