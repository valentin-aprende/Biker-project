import { useEffect, useState } from 'react';
import styled from 'styled-components';

const capitals = [
  { name: 'Aguascalientes', latitude: 21.88, longitude: -102.29 },
  { name: 'Mexicali', latitude: 32.66, longitude: -115.47 },
  { name: 'La Paz', latitude: 24.14, longitude: -110.31 },
  { name: 'San Francisco de Campeche', latitude: 19.84, longitude: -90.53 },
  { name: 'Tuxtla Gutiérrez', latitude: 16.75, longitude: -93.12 },
  { name: 'Chihuahua', latitude: 28.63, longitude: -106.07 },
  { name: 'Saltillo', latitude: 25.42, longitude: -101.00 },
  { name: 'Colima', latitude: 19.24, longitude: -103.72 },
  { name: 'Durango', latitude: 24.03, longitude: -104.67 },
  { name: 'Guanajuato', latitude: 21.02, longitude: -101.26 },
  { name: 'Chilpancingo', latitude: 17.55, longitude: -99.50 },
  { name: 'Pachuca', latitude: 20.12, longitude: -98.73 },
  { name: 'Guadalajara', latitude: 20.67, longitude: -103.35 },
  { name: 'Toluca', latitude: 19.29, longitude: -99.66 },
  { name: 'Morelia', latitude: 19.70, longitude: -101.19 },
  { name: 'Cuernavaca', latitude: 18.92, longitude: -99.23 },
  { name: 'Tepic', latitude: 21.51, longitude: -104.89 },
  { name: 'Monterrey', latitude: 25.67, longitude: -100.31 },
  { name: 'Oaxaca', latitude: 17.07, longitude: -96.72 },
  { name: 'Puebla', latitude: 19.04, longitude: -98.20 },
  { name: 'Querétaro', latitude: 20.59, longitude: -100.39 },
  { name: 'Chetumal', latitude: 18.51, longitude: -88.30 },
  { name: 'San Luis Potosí', latitude: 22.15, longitude: -100.98 },
  { name: 'Culiacán', latitude: 24.80, longitude: -107.39 },
  { name: 'Hermosillo', latitude: 29.07, longitude: -110.95 },
  { name: 'Villahermosa', latitude: 17.99, longitude: -92.93 },
  { name: 'Ciudad Victoria', latitude: 23.74, longitude: -99.14 },
  { name: 'Tlaxcala', latitude: 19.32, longitude: -98.24 },
  { name: 'Xalapa', latitude: 19.54, longitude: -96.93 },
  { name: 'Mérida', latitude: 20.97, longitude: -89.62 },
  { name: 'Zacatecas', latitude: 22.77, longitude: -102.57 },
  { name: 'Ciudad de México', latitude: 19.43, longitude: -99.13 },
];

const Card = styled.section`
  box-sizing: border-box;
  width: calc(100% - 2rem);
  max-width: 1000px;
  margin: 1.5rem auto;
  padding: 1.25rem 1.5rem;
  color: #111;
  background: #fff;
  border: 1px solid #e5e5e5;
  border-top: 5px solid #d70202;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 620px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

const Heading = styled.div`
  min-width: 0;
`;

const Eyebrow = styled.p`
  margin: 0 0 0.2rem;
  color: #d70202;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  margin: 0;
  color: #111;
  font-size: 1.4rem;
  font-weight: 700;
`;

const CityPicker = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;

  @media (max-width: 620px) {
    align-items: stretch;
    flex-direction: column;
    gap: 0.35rem;
  }
`;

const SelectLabel = styled.label`
  color: #333;
  font-size: 0.9rem;
  font-weight: 600;
`;

const CitySelect = styled.select`
  min-width: 220px;
  max-width: 100%;
  padding: 0.65rem 0.8rem;
  color: #111;
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 8px;
  font: inherit;

  &:focus-visible {
    outline: 3px solid rgba(215, 2, 2, 0.3);
    border-color: #d70202;
  }
`;

const WeatherContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0;
  border-top: 1px solid #eee;

  @media (max-width: 700px) {
    align-items: stretch;
    flex-direction: column;
    gap: 1rem;
  }
`;

const TemperatureBlock = styled.div`
  flex: 0 0 auto;
  min-width: 150px;
  text-align: center;

  @media (max-width: 700px) {
    text-align: left;
  }
`;

const Temperature = styled.p`
  margin: 0;
  color: #d70202;
  font-size: clamp(2.75rem, 8vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.07em;
  line-height: 1;

  span {
    margin-left: 0.2rem;
    color: #111;
    font-size: 1.25rem;
    letter-spacing: 0;
  }
`;

const CityName = styled.p`
  margin: 0.35rem 0 0;
  color: #555;
  font-size: 0.9rem;
`;

const Details = styled.dl`
  display: grid;
  flex: 1;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 0;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Detail = styled.div`
  min-width: 0;
  padding: 0.65rem 0.8rem;
  background: #f7f7f7;
  border-left: 3px solid #d70202;
  border-radius: 4px;

  dt {
    margin-bottom: 0.2rem;
    color: #555;
    font-size: 0.78rem;
  }

  dd {
    margin: 0;
    overflow-wrap: anywhere;
    color: #111;
    font-size: 0.95rem;
    font-weight: 700;
  }
`;

const Status = styled.p`
  margin: 0.5rem 0 0;
  color: #555;
  font-size: 0.85rem;
`;

const ErrorMessage = styled.p`
  margin: 0.75rem 0 0;
  padding: 0.7rem 0.85rem;
  color: #8b0000;
  background: #fff0f0;
  border-left: 3px solid #d70202;
  border-radius: 4px;
`;

function formatUpdateTime(time) {
  const date = new Date(`${time}${time.endsWith('Z') ? '' : 'Z'}`);

  if (Number.isNaN(date.getTime())) {
    return time;
  }

  return new Intl.DateTimeFormat('es-MX', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

function WeatherWidget() {
  const [selectedCity, setSelectedCity] = useState(
    capitals.find((city) => city.name === 'Guadalajara')
  );
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchWeather() {
      setLoading(true);
      setError('');
      setWeather(null);

      try {
        const url = new URL('https://api.open-meteo.com/v1/forecast');
        url.searchParams.set('latitude', selectedCity.latitude);
        url.searchParams.set('longitude', selectedCity.longitude);
        url.searchParams.set('current_weather', 'true');

        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`La solicitud falló (${response.status}).`);
        }

        const data = await response.json();

        if (!data.current_weather) {
          throw new Error('La respuesta no contiene datos del clima.');
        }

        setWeather(data.current_weather);
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError('No se pudo obtener el clima. Intenta de nuevo más tarde.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchWeather();

    return () => controller.abort();
  }, [selectedCity]);

  return (
    <Card aria-labelledby="weather-widget-title">
      <Header>
        <Heading>
          <Eyebrow>Clima actual</Eyebrow>
          <Title id="weather-widget-title">El tiempo en México</Title>
        </Heading>

        <CityPicker>
          <SelectLabel htmlFor="weather-city">
            Selecciona una capital
          </SelectLabel>
          <CitySelect
            id="weather-city"
            value={selectedCity.name}
            onChange={(event) => {
              const city = capitals.find(
                (item) => item.name === event.target.value
              );
              if (city) setSelectedCity(city);
            }}
          >
            {capitals.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </CitySelect>
        </CityPicker>
      </Header>

      {loading && <Status role="status">Cargando el clima…</Status>}
      {error && <ErrorMessage role="alert">{error}</ErrorMessage>}

      {!loading && !error && weather && (
        <>
          <WeatherContent>
            <TemperatureBlock>
              <Temperature>
                {weather.temperature}
                <span>°C</span>
              </Temperature>
              <CityName>{selectedCity.name}</CityName>
            </TemperatureBlock>

            <Details>
              <Detail>
                <dt>Capital</dt>
                <dd>{selectedCity.name}</dd>
              </Detail>
              <Detail>
                <dt>Viento</dt>
                <dd>{weather.windspeed} km/h</dd>
              </Detail>
              <Detail>
                <dt>Código del clima</dt>
                <dd>{weather.weathercode}</dd>
              </Detail>
              <Detail>
                <dt>Actualizado</dt>
                <dd>{formatUpdateTime(weather.time)}</dd>
              </Detail>
            </Details>
          </WeatherContent>

          <Status>
            Última actualización: {formatUpdateTime(weather.time)}
          </Status>
        </>
      )}
    </Card>
  );
}

export default WeatherWidget;