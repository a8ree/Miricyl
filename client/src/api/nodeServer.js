import axios from "axios";

export default axios.create({
  baseURL: "http://devmiricylserver.azurewebsites.net/api",
});
