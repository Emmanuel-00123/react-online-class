// import { Children } from "react";
import "./App.css";
import { Service } from "./screens/Service";
import { Destinations } from "./screens/Destinations";
import { Bookings } from "./screens/Bookings";
import { Nav } from "./components/Nav";
import { Hero } from "./screens/Hero";
// import { Hero } from "./screens/Hero";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Hero />
      </header>
      <Service />
      <Destinations />
      <Bookings />
    </div>
  );
}

export default App;
