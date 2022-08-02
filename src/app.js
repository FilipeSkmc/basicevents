import { LightningElement } from "lwc";

export default class App extends LightningElement {

    nome = "João Davi Oliveira Santana";
    idade = 4;
    email = "nenemdavi@gmail.com ";
    cpf = "000.111.222-33";

    visible = true;

    handleClick(){
      if(this.visible === true)
        this.visible = false;
      else 
        this.visible = true;
    }

    handleChange(event){
      if(event.target.checked){
        this.nome = "Filipe Santana de Oliveira";
        this.idade = 30;;
        this.email = "f@f.com";
        this.cpf = "222.111.000-11";
      }else{
        this.nome = "João Davi Oliveira Santana";
        this.idade = 4;
        this.email = "nenemdavi@gmail.com";
        this.cpf = "000.111.222-33";
      }
      
    }
}
