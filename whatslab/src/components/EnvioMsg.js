import React from "react";

class EnvioMsg extends React.Component {
  // state = {
  //   nomeUsuario: "",
  //   mensagemUsuario: "",
  //   listMensagem: [],
  // };

  // aoMudarNome = (e) => {
  //   this.setState({
  //     nomeUsuario: e.target.value,
  //   });
  // };

  // aoMudarPoste = (e) => {
  //   this.setState({
  //     mensagemUsuario: e.target.value,
  //   });
  // };

  // aoClicarEnviar = () => {
  //   let novoPost = {
  //     nome: this.state.nomeUsuario,
  //     mensagem: this.state.mensagemUsuario,
  //   };
  //   let copiaLista = [...this.state.listMensagem, novoPost];
  //   console.log(this.state.listMensagem);
  //   this.setState({ listMensagem: copiaLista });

  //   console.log(copiaLista);
  // };

  render() {
    return (
      <div>
        <p>{`Nome: ${this.props.nomeUsuario}`}</p>
        <p>{`Mensagem: ${this.props.mensagemUsuario}`}</p>
        {/* <div>
          <label>Nome:</label>
          <input value={this.props.nomeDoUsuario} onChange={this.aoMudarNome} />
          <br />
          <label>Mensagem:</label>{" "}
          <input
            value={this.props.mensagemDoUsuario}
            onChange={this.aoMudarPoste}
          />
          <br />
          <button onClick={this.aoClicarEnviar}> Enviar </button>
        </div> */}
      </div>
    );
  }
}
export default EnvioMsg;
