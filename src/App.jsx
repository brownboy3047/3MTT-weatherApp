import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";

// import FiveDaysForecast from "./pages/FiveDaysForecast";
// import WeatherDisplay from "./pages/WeatherDisplay";
// import Home from "./pages/Home";

//Lazing loading
const Home = lazy(() => import("./pages/Home"));
const WeatherDisplay = lazy(() => import("./pages/WeatherDisplay"));
const FiveDaysForecast = lazy(() => import("./pages/FiveDaysForecast"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="weather" element={<WeatherDisplay />} />
          <Route path="weather/:id" element={<FiveDaysForecast />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
