import React, { Suspense } from 'react';
import './App.css';

import News from './components/News';
import WeatherForecast from './components/WeatherForecast';

function App() {
  return (
    <div className="App">
      <Suspense fallback={(<div>Loading</div>)}>
      <News /> 
      <hr />
      <WeatherForecast />
      </Suspense>
    </div>
  );
}

export default App;
