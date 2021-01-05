import React from "react";

import styled from "styled-components";

const Mensagem = styled.section`
  display: flex;
  background-color: #dae6d4;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 5px;
  border: 1px solid #291f1e;
`;

const Texto = styled.p`
  padding: 0.5rem;
`;

class EnvioMsg extends React.Component {
  render() {
    return (
      <Mensagem>
        <Texto>{`${this.props.nomeUsuario}: `}</Texto>
        <Texto>{`${this.props.mensagemUsuario}`}</Texto>
      </Mensagem>
    );
  }
}
export default EnvioMsg;
