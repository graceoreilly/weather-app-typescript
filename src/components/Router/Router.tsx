// import { Search } from "lucide-react"
// import { useState, useEffect } from "react";

// const API_KEY = import.meta.env.VITE_APP_API_KEY;

// function Router() {
//   const [data, setData] = useState({});
//   const [location, setLocation] = useState("")

//   function handleInputChange(e) {
//     setLocation(e.target.value)
//   }

//   async function fetchWeather () {
//     if (!location) return;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${API_KEY}`;
//     const res = await fetch(url);
//     const searchData = await res.json();

//     setData(searchData);
//     setLocation("")
//   };
  

//   useEffect(() => {
//     //This function is executed after the component mounts
//     fetchWeather();
//     //The empty array means this effect runs only once
//   }, []);

//   function handleKeyDown(e) {
//     if(e.key === "Enter")
//       fetchWeather()
//   }
// return (<>
//   <div>
//   <input
//             type="text"
//             placeholder="Search for a city..."
//             value={location}
//             onChange={handleInputChange}
//             onKeyDown={handleKeyDown}
//           />
//     <button onClick={fetchWeather}>Fetch weather
//     <Search size={20} />
//     </button>
//             <p>Location: {data.name}</p>
//             <p>Temperature: {data.main ? `${Math.floor(data.main.temp)}°` : null}</p>
//           </div>
//           </>)
// }

//   export default Router;