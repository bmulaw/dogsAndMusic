import { useState, useEffect } from 'react'
import DisplayDogs from './DisplayDogs';
import env from "react-dotenv";

export default function DogsList() {

    const [dogs, setDogsList] = useState([])
    const OPTIONS = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com',
            'X-RapidAPI-Key': env.API_KEY
        }
    };
    
    const getAndSetDogsList = () => {
        fetch('https://dog-breeds2.p.rapidapi.com/dog_breeds', OPTIONS)
            .then(res => res.json())
            .then(data => {
                let arr = [];
                let randomDogs = [];
                while(arr.length < 30) {
                    let r = Math.floor(Math.random() * 100) + 1;
                    if (arr.indexOf(r) === -1 
                        && data[r].img !== "Not available"
                        && data[r].hasOwnProperty('origin')) {
                        arr.push(r);
                        randomDogs.push(data[r])
                    }
                }
                setDogsList(randomDogs)
            })
            .catch(err => console.error(err));
    }



    return (
        <div>
            {dogs.length > 0 ? <DisplayDogs dogs={dogs} refresh={getAndSetDogsList}/> : 
            <button 
                style={{margin: 'auto', display: 'flex', borderRadius: '20px', padding: '20px', marginTop: '35%'}} 
                onClick={getAndSetDogsList} > 
                    Click Me 
            </button>}


        </div>
    )

}