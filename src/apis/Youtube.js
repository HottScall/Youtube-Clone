import axios from "axios";

const KEY = "AIzaSyBLbb8DAJ6eaz0By47QZrKmx2mjiSslP-g";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    q: "surfboards"
  }
});
