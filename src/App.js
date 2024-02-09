import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { fetchCsv, getData } from './fetchCsv.js';
import { FadeInSection } from './fadeIn.js';

function App() {

  const srcNor = getData('emissions_no.csv');
  const srcQat = getData('emissions_qa.csv');

  return (
    <div className="App">
      <header>
        CO<sub>2</sub> UTSLIPP PER KAPITAL I<br /><span className='norge'>NORGE</span> VS <span className='qatar'>QATAR</span><br />(målt i tonn)
      </header>
      <span className='space-inbetween'></span>
      <FadeInSection><h1>Hvorfor de to?<br/>Fordi <span className='norge'>Norge</span> og <span className='qatar'>Qatar</span> er to land som funnet olje i 1960-tallet, med helt forskjellige andring i utslipp</h1></FadeInSection>
      <span className='space-inbetween'></span>
      <FadeInSection>
        <img src='Norge.svg' width={'65%'}></img>
        <div className='flavorText'>
          <h2>I <span className='norge'>Norge</span> fant de olje i 1969.<br/>Emisjon per kapital gikk opp fra 5,8t til 7,2t mellom 1969 og 1970.<br/>Da var populasjonen omrent 3,8-3,9 millioner mennesker.</h2>
        </div>
      </FadeInSection>
      <br />
      <span className='space-inbetween'></span>
      <FadeInSection>
        <div className='flavorText'>
          <h2>I <span className='qatar'>Qatar</span> ble olje funnet i 1939 men vi har ikke info om emisjon fra før 1949.<br/>I 1963 fant amerikanske oljefirmaet Shell en kjempestor oljefelt og emisjon gikk opp fra 4,2t til 120.3t.<br/>Da var populasjonen omrent 50.000 mennesker.</h2>
        </div>
        <img src='Qatar.svg' width={'65%'}></img>
      </FadeInSection>
      <br />
      <span className='space-inbetween'></span>
      <FadeInSection>
        <img src='QatarVsNorge.svg' width={'65%'}></img>
        <div className='flavorText'>
          <h2>I norge ble olje funnet i 1969 og emisjon per kapital gikk opp fra 5.8t til 7.2t </h2>
        </div>
      </FadeInSection>
      <canvas id='chart'></canvas>
    </div>
  );
}

export default App;
