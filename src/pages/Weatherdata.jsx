import { useState } from "react";


const Weather = () => {
    const api = {
        key: "8cb2382e19d2b53bddfaa0d78195a293",
        url: "https://api.openweathermap.org/data/2.5/weather"
    };

    const [state, setState] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchWeather = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch(`${api.url}?q=${state}&appid=${api.key}&units=metric`);
            if (!response.ok) throw new Error("City not found");
            const data = await response.json();
            setWeather(data);
        } catch (err) {
            setError(err.message);
            setWeather(null); 
        } finally {
            setLoading(false);
            setState(''); 
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            fetchWeather();
        }
    };

    return (
       <div id="bg"> <div id="weather-container">
        <h1>WEATHER REPORT</h1>
            <input 
                id="city-input"
                autoFocus
                placeholder="Enter a city"
                type="text" 
                value={state} 
                onChange={(e) => setState(e.target.value)} 
                onKeyDown={handleKeyDown} 
                className="input-field"
            />
            <button 
                id="search-button" 
                onClick={fetchWeather}
                className="search-button"
            >
                Search
            </button>
            {loading && <p className="loading-text">Loading...</p>}
            {error && <p className="error-text">{error}</p>} 
            {weather && weather.main ? ( 
                <div className="weather-info">
                    <h2 className="city-name">{weather.name}</h2>
                    <p className="temperature">{weather.main.temp} °C</p>
                </div>
            ) : null}
            {error && weather === null && !loading && <p className="not-found-text">City not found.</p>}
        </div></div>
    );
};

export default Weather;
