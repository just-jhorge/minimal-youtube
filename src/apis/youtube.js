import axios from "axios";

const KEY = "AIzaSyCwYk7w0DYnjA9o8mNdRO7ca1iSk78bWHw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
