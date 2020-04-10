import axios from 'axios';
const KEY = 'AIzaSyCLhzMK_ofj0ikiwml6NczbayPK40Hp0qE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 4,
        key: KEY
    }
})