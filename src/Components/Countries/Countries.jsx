import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import'./Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const[visitedCountries, setVisitedCountries] =useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCoutry = country =>{
        console.log(country);
        const newVisitedCountries = [...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
        console.log('add thid to your list')
        
    }
const handleFlagCountry = flag =>{
    const newVisitedFlags = [...visitedFlags, flag]
    setVisitedFlags(newVisitedFlags);
   
}

    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div>
                <h5>Visited Countries</h5>
                <ul>
                {
                visitedCountries.map((visitedCountry, idx) =><li key={idx}>{visitedCountry.name.common}</li>)
            }
                </ul>
            </div>

            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>

            <div>
           
            </div>
          <div className='country-container'>
          {
                countries.map(country => <Country
                 key={country.cca2} handleVisitedCoutry={handleVisitedCoutry}  country={country} handleFlagCountry={handleFlagCountry}></Country>)
            }
           
          </div>
        </div>
    );
};

export default Countries;