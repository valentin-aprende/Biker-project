import { useEffect, useState } from "react";
import styled from "styled-components";

const capitals = [
    {
        name: "Guadalajara",
        latitude: 20.67,
        longitude: -103.35
    },
    {
        name: "Monterrey",
        latitude: 25.67,
        longitude: -100.31
    },
    {
        name: "Ciudad de México",
        latitude: 19.43,
        longitude: -99.13
    },
    {
        name: "Puebla",
        latitude: 19.04,
        longitude: -98.20
    },
    {
        name: "Mérida",
        latitude: 20.97,
        longitude: -89.62
    },
    {
        name: "Querétaro",
        latitude: 20.59,
        longitude: -100.39
    }
];

const Container = styled.div`
    flex-shrink: 0;

    display: flex;
    align-items: center;

    gap: 8px;

    max-width: 260px;

    color: white;

    @media (max-width: 1100px) {
        max-width: 200px;
    }

    @media (max-width: 900px) {
        display: none;
    }
`;

const Select = styled.select`
    width: 150px;

    padding: 6px;

    border: none;

    border-radius: 6px;

    overflow: hidden;
    text-overflow: ellipsis;
`;

const Temperature = styled.span`
    font-size: 1.1rem;
    font-weight: bold;
`;

function WeatherMiniWidget() {

    const [selectedCity, setSelectedCity] =
        useState(capitals[0]);

    const [temperature, setTemperature] =
        useState("--");

    useEffect(() => {

        async function fetchWeather() {

            try {

                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}&current_weather=true`
                );

                const data =
                    await response.json();

                setTemperature(
                    data.current_weather.temperature
                );

            } catch (error) {

                console.error(
                    "Error obteniendo clima:",
                    error
                );
            }
        }

        fetchWeather();

    }, [selectedCity]);

    return (
        <Container>

            <Select
                value={selectedCity.name}
                onChange={(e) =>
                    setSelectedCity(
                        capitals.find(
                            city =>
                                city.name ===
                                e.target.value
                        )
                    )
                }
            >

                {capitals.map(city => (
                    <option
                        key={city.name}
                        value={city.name}
                    >
                        {city.name}
                    </option>
                ))}

            </Select>

            <Temperature>
                🌡️ {temperature}°C
            </Temperature>

        </Container>
    );
}

export default WeatherMiniWidget;