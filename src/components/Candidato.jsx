const Candidato = ({ nombre, onVote }) => {
  return (
    <div >
      <button onClick={onVote}>{nombre}</button>
    </div>
  );
};

export default Candidato;
