import { useState } from 'react';
import './App.css';
import Cadastro from './components/cadastro';
import Lista from './components/lista';

 
function App() {
  const [listaAnimais, setListaAnimais] = useState([
    {id: 1, descricao: "cor: Marrom Claro, peludinho, e tem uma coleira com M&M escrito", local: "Rua Jose Eugênio, Bairro Carlão do grau, Cidade: Senai", raca: "Cachorro - Lulu da Pomerânia", perdido:false, resgatado:true, isConcluido: false},
    {id: 2, descricao: "cor: Preto, Pouco pelo, Tem coleira", local: "Avenida Brasil, Bairro Centro, Cidade: Bauru", raca: "Gato - Persa", perdido:true, resgatado:false, isConcluido: false},
    {id: 3, descricao: "cor: Branco com Manchas Marrom, peludinho, Não tem coleira", local: "Rua Luiz Biral, Bairro Núcleo, Cidade: Lençóis Paulista", raca: "Cachorro - Vira-lata", perdido:false, resgatado:true, isConcluido: false},
  ]);
 
  const addAnimal = (descricao,local,raca, perdido, resgatado) => {
    const newAnimal = {
        id: Math.floor(Math.random() * 100000),
        descricao,
        local,
        raca,
        resgatado,
        perdido,
        isConcluido: false,
      }
    setListaAnimais((prevLista) => [...prevLista,newAnimal]);
  };
 
  const concluirCadastro = (id) => {
    setListaAnimais((prevLista) =>
      prevLista.map((item) =>
        item.id === id ? { ...item, isConcluido: !item.isConcluido } : item
      )
    );
  };
 
  const removerCadastro = (id) => {
    setListaAnimais((prevLista) => prevLista.filter((item) => item.id !== id));
  };
 
  return (
    <div className='app'>
      <h1>Lista dos Animais</h1>
      <Cadastro addAnimal={addAnimal} />

      {listaAnimais.map((item) => (
        <Lista
          key={item.id}
          item={item}
          concluirCadastro={concluirCadastro}
          removerCadastro={removerCadastro}
        />
      ))}
    </div>
  );
}
 
export default App;