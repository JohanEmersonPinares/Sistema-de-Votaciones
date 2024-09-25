import  { useState } from 'react';
import './App.css';
import Candidato from './components/Candidato';
import TotalVotos from './components/TotalVotos';
import VotosIndividuales from './components/VotosIndividuales';
import Filtro from './components/Filtro';

const App = () => {
  const [candidatos, setCandidatos] = useState([
    { nombre: 'Candidato 1', votos: 0 },
    { nombre: 'Candidato 2', votos: 0 },
    { nombre: 'Candidato 3', votos: 0 },
    { nombre: 'Candidato 4', votos: 0 },
  ]);
  const [totalVotos, setTotalVotos] = useState(0);
  const [mostrarPorcentaje, setMostrarPorcentaje] = useState(false);
  const [candidatoFiltrado, setCandidatoFiltrado] = useState('todos');

  const manejarVoto = (index) => {
    const nuevosCandidatos = [...candidatos];
    nuevosCandidatos[index].votos += 1;
    setCandidatos(nuevosCandidatos);
    setTotalVotos(totalVotos + 1);
  };

  const manejarCambioPorcentaje = (e) => {
    setMostrarPorcentaje(e.target.value === 'porcentaje');
  };

  const manejarCambioCandidatos = (e) => {
    setCandidatoFiltrado(e.target.value);
  };

  const candidatosFiltrados = candidatos.filter((candidato) => {
    if (candidatoFiltrado === 'todos') return true;
    return candidato.nombre === candidatoFiltrado.replace('candidato', 'Candidato ');
  });

  return (
    <div>
      <h1>Sistema de Votación</h1>
      <div className='BotonContainer'>
      {candidatos.map((candidato, index) => (
        <Candidato
          key={index}
          nombre={candidato.nombre}
          votos={candidato.votos}
          onVote={() => manejarVoto(index)}
        />
      ))}
      </div>
      <div className="MainContainer">
  <div className="FiltroContainer">
    <Filtro onChangePorcentaje={manejarCambioPorcentaje} onChangeCandidatos={manejarCambioCandidatos} />
  </div>
  <div className="RightContainer">
    <div className='TotalVotosContainer'>
      <TotalVotos total={totalVotos} />
    </div>
    <div className="VotosIndContainer">
      <VotosIndividuales candidatos={candidatosFiltrados} mostrarPorcentaje={mostrarPorcentaje} />
    </div>
  </div>
</div>
    </div>
  );
};

export default App;
