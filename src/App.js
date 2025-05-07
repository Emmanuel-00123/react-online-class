// import { Children } from "react";
import "./App.css";
import { Service } from "./screens/Service";
import { Destinations } from "./screens/Destinations";
import { Bookings } from "./screens/Bookings";
import { Nav } from "./components/Nav";
import { Hero } from "./screens/Hero";
import ManualSlider from "./screens/Testimonials";
import Sponsors from "./screens/Sponsors";
import Form from "./screens/Form";

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
      <ManualSlider />
      <Sponsors />
      <Form />
    </div>
  );
}

// function Home() {
//   <div>

//   </div>
// }

export default App;
