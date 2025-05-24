import { useState, useEffect } from "react";

import "./Weather.css";

import { loadStationList } from "../data/weatherData";
import type { StationItemProps, StationListProps } from "../data/weatherType";

const Weather = () => {

    const MAX_LENGTH = 30;

    const [stations, setStations] = useState([]);
    const [selectedStation, setSelectedStation] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch("./liste-stations.csv")
            .then(response => response.text())
            .then(data => {
                const { stationList } = loadStationList(data);
                setStations(stationList);
            })
    }, []);

    const filteredStations = stations.filter((station) =>
        station.Nom_usuel.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleChangeStation = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const station = filteredStations.find(item =>
            item.Nom_usuel.toLowerCase() === searchTerm.toLowerCase()
        );
        if (station) {
            setSelectedStation(station);
        }
    };

    console.log(`Selected station : ${stations}`);

    return (
        <section className="weather-container">
            <section className="weather-section">
                <section className="station-form">

                    <input
                        id="station"
                        name="station"
                        type="text"
                        placeholder="Search meteo station"
                        maxLength={MAX_LENGTH}
                        value={searchTerm}
                        onChange={event => setSearchTerm(event.target.value)}
                        list="station-list"
                    />

                    <datalist id="station-list">
                        {filteredStations.map((station) => (
                            <option key={station.Nom_usuel} value={station.Nom_usuel} />
                        ))}
                    </datalist>

                    <button
                        type="button"
                        onClick={event => handleChangeStation(event)}
                    >
                        Change location
                    </button>

                </section>

                {selectedStation && (
                    <section className="weather-data-display">
                        <h3>Selected station :</h3>
                        <p>{selectedStation.Nom_usuel}</p>
                    </section>
                )}

            </section>
        </section>
    )
}

export default Weather;