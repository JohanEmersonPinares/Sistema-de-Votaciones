const VotosIndividuales = ({ candidatos, mostrarPorcentaje }) => {
  return (
    <div>
      <h3>Votos Individuales:</h3>
      <ul>
        {candidatos.map((candidato, index) => {
          const totalVotos = candidatos.reduce((total, c) => total + c.votos, 0);
          const porcentaje = totalVotos > 0 ? ((candidato.votos / totalVotos) * 100).toFixed(2) : 0;

          return (
            <li key={index}>
              {candidato.nombre}: {mostrarPorcentaje ? `${porcentaje}%` : candidato.votos}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VotosIndividuales;
