import { useState } from "react";

import "./Weather.css";

const Weather = () => {

    const MAX_LENGTH = 30;

    const [location, setLocation] = useState("Mimizan");
    const [inputValue, setInputValue] = useState("Mimizan");
    
    const changeLocation = (event : React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setLocation(inputValue);
    }

    const changeInputValue = (event : React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setInputValue(event.target.value);
    }

    console.log(`location : ${location}`);
    console.log(`inputValue : ${inputValue}`);

    return(
        <section className="weather-container">
            <section className="weather-section">
                <section className="location-form">
                    <input 
                        id="location"
                        name="location"
                        type="text" 
                        maxLength={MAX_LENGTH}
                        value={inputValue}
                        onChange={event => changeInputValue(event)}
                    />
                    <button
                        type="button"
                        onClick={event => changeLocation(event)}
                    >
                        Change location
                    </button>
                </section>
                <section className="weather-data-display">
                    Display data
                </section>
            </section>
        </section>
    )
}

export default Weather;