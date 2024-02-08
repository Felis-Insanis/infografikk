import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';


function App() {

  async function getData(src) {
    const data = Papa.parse(await fetchCsv(src), {header: true, dynamicTyping: true}).data;
    console.log(data);
    return data;
  }

  async function fetchCsv(src) {
    const response = await fetch(src);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    console.log('csv', csv);
    return csv;
  }

  const srcNor = getData('emissions_no.csv');
  const srcQat = getData('emissions_qa.csv');

  return (
    <div className="App">
      <canvas id='chart'></canvas>
    </div>
  );
}

export default App;
