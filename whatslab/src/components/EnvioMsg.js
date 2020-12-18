import React from "react";
import "./EnvioMsg.css";

class EnvioMsg extends React.Component {
           state = {
            nomeDoUsuario:"",
            mensagemDoUsuario:"",
            listMensagem:[]
            }
     

    aoMudarNome = e => {
        this.setState({
            nomeDoUsuario: e.target.value,
            
        })
        
    }
        
       aoMudarPoste = e => {
        this.setState({
            mensagemDoUsuario: e.target.value,
            
        })
        
    }


   aoClicarEnviar = () => {
    let novoPost = {
        nome: this.state.nomeDoUsuario,
        mensagem: this.state.mensagemDoUsuario
    }
    let copiaLista = [...this.state.listMensagem, novoPost]
    this.setState({listMensagem:copiaLista})
    
    console.log(copiaLista)
       console.log(this.state.listMensagem)       
   }
  
  

render() {
    return(
        <div>
            <p>{`${this.state.nomeDoUsuario} ${this.state.mensagemDoUsuario}`} </p>
            <p>
             </p>
                    <div>
            
            <label>Nome:</label> <input value={this.state.nomeDoUsuario} onChange={this.aoMudarNome} />
            <br/>
            <label>Mensagem:</label> <input value={this.state.mensagemDoUsuario} onChange={this.aoMudarPoste} />
            <br/>
            <button onClick={this.aoClicarEnviar} > Enviar </button>
            </div>
        </div>
    );
}

}
export default EnvioMsg