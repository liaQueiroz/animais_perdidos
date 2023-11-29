import { useState } from 'react';
 
function Cadastro({ addAnimal }) {
  const [descricao, setDesc] = useState('');
  const [local, setLocal] = useState('');
  const [raca, setRaca] = useState('');
  const [resgatado, setResg] = useState(false);
  const [perdido, setPerd] = useState(false);
 
  const cadastrar = () => {
    if (descricao === '' || local === '' || raca === '') {
      // Adicione aqui alguma lógica para lidar com o caso em que um dos campos está vazio
      return;
    }
 
    addAnimal(
      descricao,
      local,
      raca,
      resgatado,
      perdido
    );
    setDesc('');
    setLocal('');
    setRaca('');
    setResg(false);
    setPerd(false);
  };
 
  return (
    <>
      <h3>Cadastro</h3>
      <div className="cadastrar">
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Informe uma breve descricao...."
        />
        <input 
        type="text"
          value={local}
          onChange={(e) => setLocal(e.target.value)}
          placeholder="Informe o local que foi encontrado...."
        />
        <input
          type="text"
          value={raca}
          onChange={(e) => setRaca(e.target.value)}
          placeholder="Informe a raça...."
        />
        <label>
          Resgatado
          <input
            type="checkbox"
            checked={resgatado}
            onChange={() => setResg(!resgatado)}
          />
        </label>
        <label>
          Perdido
          <input
            type="checkbox"
            checked={perdido}
            onChange={() => setPerd(!perdido)}
          />
        </label>
        <button className="concluir" onClick={cadastrar}>
          Cadastrar
        </button>
      </div>
    </>
  );
}
 
export default Cadastro;