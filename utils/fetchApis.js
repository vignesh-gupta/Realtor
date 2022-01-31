import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const {data} = await axios.get(url , {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'd59e389365msh2bb9b8eea4ca914p1fad86jsn1c9968d8850b'
          }
    });

    return data;
}