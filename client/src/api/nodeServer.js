import axios from "axios";

export default axios.create({
  baseURL: "https://devmiricylserver.azurewebsites.net/api",
});
