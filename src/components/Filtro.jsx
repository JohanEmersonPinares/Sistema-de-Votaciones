const Filtro = ({ onChangePorcentaje, onChangeCandidatos }) => {
  return (
    <div>
      <h3>Ver Votos Individuales:</h3>
      <label>
        <input type="radio" name="resultado" value="numerico" onChange={onChangePorcentaje} />
        Numérico
      </label>
      <label>
        <input type="radio" name="resultado" value="porcentaje" onChange={onChangePorcentaje} />
        Porcentaje
      </label>
      <h4>Seleccionar Candidatos:</h4>
      <label>
        <input type="radio" name="candidato" value="todos" onChange={onChangeCandidatos} />
        Todos
      </label>
      <label>
        <input type="radio" name="candidato" value="candidato1" onChange={onChangeCandidatos} />
        Candidato 1
      </label>
      <label>
        <input type="radio" name="candidato" value="candidato2" onChange={onChangeCandidatos} />
        Candidato 2
      </label>
      <label>
        <input type="radio" name="candidato" value="candidato3" onChange={onChangeCandidatos} />
        Candidato 3
      </label>
      <label>
        <input type="radio" name="candidato" value="candidato4" onChange={onChangeCandidatos} />
        Candidato 4
      </label>
    </div>
  );
};

export default Filtro;
