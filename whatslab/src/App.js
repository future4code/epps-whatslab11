import EnvioMsg from "./components/EnvioMsg";
import React from "react";

import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 1rem;
  height: 100vh;
`;
const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 40vw;
  padding: 0 2rem;
  height: 100%;
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 60vw;
  padding: 0 2rem;
  border-right: 1px solid #291f1e;
  height: 100%;
  color: #291f1e;
`;

const Input = styled.input`
  color: #291f1e;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #c3d5af;
  background-color: #dae6d4;
`;
const Label = styled.label`
  padding: 0.5rem 0;
`;
const Textarea = styled.textarea`
  color: #291f1e;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #c3d5af;
  background-color: #dae6d4;
`;

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const Button = styled.button`
  background-color: #f64740;
  color: #f1f6f8;
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  width: 5rem;
  margin: 1rem 0;
  align-self: flex-end;
`;

const Header = styled.h1`
  color: #291f1e;
  background-color: #c3d5af;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
`;

const Subtitle = styled.h2``;

class App extends React.Component {
  state = {
    mensagens: [
      {
        createdAt: 0,
        nomeUsuario: "Labenu",
        mensagemUsuario: "Olá, essa é uma mensagem teste",
      },
    ],
  };

  enterButton = (event) => {
    if (event.key === "Enter") {
      document.getElementById("submit").click();
    }
  };

  addMensagem = (event) => {
    event.preventDefault();
    const novaMensagem = {
      createdAt: Date.now(),
      nomeUsuario: this.state.inputNomeUsuario,
      mensagemUsuario: this.state.inputMensagemUsuario,
    };

    const novaLista = [...this.state.mensagens, novaMensagem];

    if (
      this.state.inputNomeUsuario === undefined ||
      this.state.inputMensagemUsuario === undefined ||
      this.state.inputNomeUsuario === "" ||
      this.state.inputMensagemUsuario === ""
    ) {
      alert("Preencha os campos");
    } else {
      this.setState({ mensagens: novaLista });
    }

    alert("Mensagem enviada com sucesso!");
    this.setState({
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
      <Main>
        <Header>WhatsLab</Header>
        <Container>
          <Section>{listaMsgs}</Section>
          <Aside>
            <Subtitle>Crie sua mensagem</Subtitle>
            <FormControl>
              <Label>Nome:</Label>
              <Input
                value={this.state.inputNomeUsuario}
                onChange={this.onChangeNomeUser}
              />
            </FormControl>
            <FormControl>
              <Label>Mensagem:</Label>
              <Textarea
                value={this.state.inputMensagemUsuario}
                onChange={this.onChangeMensagem}
                onKeyPress={(e) => this.enterButton(e)}
              />
            </FormControl>
            <Button id="submit" onClick={this.addMensagem}>
              Enviar
            </Button>
          </Aside>
        </Container>
      </Main>
    );
  }
}

export default App;
