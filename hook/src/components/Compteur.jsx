// import React, { useState, useEffect } from 'react' ;

// const Counter = () =>  {

//     const [count, setCount] = useState(0) ;
//     const [valeur, setValeur] = useState(0) ;

//       useEffect(() => {
//         document.title = `Compteur : ${count}`;
//       }, [count]);


//     return(
//         <div>
            

//             <h2>Count : {count}</h2>
//             <button onClick={() => setCount(count + 1)}> Click to increment</button>
//             <button onClick={() => setCount(count - 1)}> Click to decrement</button>
//             <button onClick={() => setCount(valeur)}>Reset</button>

//             <br />

//             <input
//                 type="number"
//                 value={valeur}
//                 onChange={(e) => {
//                     const nouvelleValeur = Number(e.target.value);
//                     setValeur(nouvelleValeur);
//                     setCount(nouvelleValeur);
//                 }}
//                 placeholder="Valeur de départ"
//             />


//             <p>{count}</p>
//         </div>
//     );

// }
// export default Counter;




// import React, { useState, useEffect } from 'react';

// function Chrono() {
//     const [temps, setTemps] = useState(0);
//     const [actif, setActif] = useState(false);

//     useEffect(() => {
//         let interval = null;
//         if (actif) {
//             interval = setInterval(() => {
//                 setTemps((t) => t + 1);
//             }, 1000);
//         } else {
//             clearInterval(interval);
//         }

//         return () => clearInterval(interval);
//     }, [actif]);

//     return (
//         <div>
//             <h1>Temps : {temps}</h1>

//             <button onClick={() => setActif(true)}>Start</button>
//             <button onClick={() => setActif(false)}>Stop</button>
//             <button onClick={() => { setTemps(0); setActif(false); }}>Reset</button>
//         </div>
//     );
// }

// export default Chrono;


// import { useRef } from 'react';

// export default function Form() {

//     const inputRef = useRef(null);

//     function handleClick() {
//         inputRef.current.focus();

//     }
//     return (
//         <>
//             <input ref={inputRef} />
//             <button onClick={handleClick}>Activer le champ</button>
//         </>
//     )
// import React, { useState } from "react";

// export default function Tache() {
//     const [tache, setTache] = useState("");
//     const [liste, setListe] = useState([]);

//     return (
//         <div>
//             <h2>Liste des taches</h2>

//             <input value={tache} onChange={(e) => setTache(e.target.value)} placeholder="Nouvelle tache" />
//             <button onClick={() => {setListe([...liste,tache]); setTache(""); }}>Ajouter</button>

//             <ul>
//                 {liste.map((t, i) => (
//                     <li key={i}>
//                         {t} <button onClick={() => setListe(liste.filter((_,j) => j !== i))}>Supprimer</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     ) 
// }