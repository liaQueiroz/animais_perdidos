import React from 'react';
 
function Lista({ item, concluirCadastro, removerCadastro }) {
  return (
    <>
      <div className="listagem">
        <div>
          <p style={{ textDecoration: item.isConcluido ? 'line-through' : '' }}>
            Descrição: {item.descricao}
          </p>
          <p style={{ textDecoration: item.isConcluido ? 'line-through' : '' }}>
            Raça: {item.raca}
          </p>
          <p style={{ textDecoration: item.isConcluido ? 'line-through' : '' }}>
            Local: {item.local}
          </p>
          <p style={{ textDecoration: item.isConcluido ? 'line-through' : '' }}>
            Resgatado: {item.resgatado ? 'Sim' : 'Não'}
          </p>
          <p style={{ textDecoration: item.isConcluido ? 'line-through' : '' }}>
            Perdido: {item.perdido ? 'Sim' : 'Não'}
          </p>
        </div>
        <div>
          <button className="concluir" onClick={() => concluirCadastro(item.id)}>
            Concluir
          </button>
          <button className="remover" onClick={() => removerCadastro(item.id)}>
            Remover
          </button>
        </div>
      </div>
    </>
  );
}
 
export default Lista;