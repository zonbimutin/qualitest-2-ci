import React, { useState } from 'react';
import NumberInput from './NumberInput/NumberInput';
import IsPrime from './IsPrime/IsPrime';
import './Main.css';

function Main() {
  const error = 0;
  /**
   * Sauvegarde locale du nombre à tester
   */
  const [number, setNumber] = useState(0);

  return (
    <main className="Main">
      <p>Entrez un nombre, nous allons vérifier si il sagit d'un nombre premier</p>
      <NumberInput setNumber={setNumber} />
      <IsPrime number={number} />
    </main>
  );
}

export default Main;
