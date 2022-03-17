import axios from 'axios';
//const { REACT_APP_BASEURL, REACT_APP_APIKEY } = process.env;

export const getFontData = (url) => {
    //return axios.get(url);
    //axios.get(url)
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const { content } = data;
        return content;
     })             
    .catch((error) => console.log("An error occured when fetching data - " + error+" --- "+url))
}

