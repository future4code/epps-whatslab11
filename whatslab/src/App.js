import EnvioMsg from "./components/EnvioMsg";
import React from "react";

class App extends React.Component {
  state = {
    mensagens: [
      {
        createdAt: 0,
        nomeUsuario: "",
        mensagemUsuario: "",
      },
    ],
  };

  addMensagem = (event) => {
    event.preventDefault();
    const novaMensagem = {
      createdAt: Date.now(),
      nomeUsuario: this.state.inputNomeUsuario,
      mensagemUsuario: this.state.inputMensagemUsuario,
    };

    const novaLista = [...this.state.mensagens, novaMensagem];

    this.setState({ mensagens: novaLista });

    console.log(novaLista);
    console.log(this.state.mensagens);
    this.setState({
      inputNomeUsuario: "",
      inputMensagemUsuario: "",
    });
  };

  onChangeNomeUser = (event) => {
    this.setState({ inputNomeUsuario: event.target.value });
  };
  onChangeMensagem = (event) => {
    this.setState({ inputMensagemUsuario: event.target.value });
  };

  render() {
    const listaMsgs = this.state.mensagens.map((mensagem) => {
      return (mensagem = (
        <EnvioMsg
          key={mensagem.createdAt}
          nomeUsuario={mensagem.nomeUsuario}
          mensagemUsuario={mensagem.mensagemUsuario}
        />
      ));
    });
    return (
      <div className="App">
        {listaMsgs}
        <label>Nome:</label>
        <input
          value={this.state.inputNomeUsuario}
          onChange={this.onChangeNomeUser}
        />
        <br />
        <label>Mensagem:</label>
        <input
          value={this.state.inputMensagemUsuario}
          onChange={this.onChangeMensagem}
        />
        <br />
        <button onClick={this.addMensagem}> Enviar </button>
      </div>
    );
  }
}

export default App;
