import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    const Init_URL = "https://images.unsplash.com/photo-1606170034961-ee40e2dbe6bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1710004469605-94f952a9e539?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1737472794232-4c8be24ba535?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="info-box">
            <h1>Weather Information - {info.weather}</h1>
            <div className="card-container">
<Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="image" height="140" image={info.humidity > 80 ? RAIN_URL : info.temp >20 ? HOT_URL : COLD_URL} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} is experiencing {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 20 ? <SunnyIcon /> : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}°C</p>
          <p>Humidity = {info.humidity}%</p>
          <p>Min Temperature = {info.tempMin}°C</p>
          <p>Max Temperature = {info.tempMax}°C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}°C .</p>
        </Typography>
      </CardContent>

    </Card>
    </div>
        </div>
    )
}