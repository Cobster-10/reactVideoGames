import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",

    params:{
        key: "9c50652fdb344c69ba9907cce04842d0"}
}
);


