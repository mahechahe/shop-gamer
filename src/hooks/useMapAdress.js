import { useState, useEffect } from "react";
import axios from "axios";

const useMapAdress = () => {
    const [map, setMap] = useState({});
    const API = `https://us1.locationiq.com/v1/reverse.php?key=pk.303815d884c4cf3c605fdcc099013293&lat=-37.870662&lon=144.9803321&format=json`;

    useEffect(async() => {
        console.log('hola');
        const response = await axios(API);
        setMap(response)
        console.log(response);
    }, []);
    return map;
};

export default useMapAdress;
