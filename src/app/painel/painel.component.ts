import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza esta frase'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  constructor(){
    this.atualizaRodada()
    console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  public atualizaResposta(reposta: Event): void{
    this.resposta = (<HTMLInputElement>reposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(): void{
    if(this.rodadaFrase.frasePtBr == this.resposta){
      this.rodada++
      this.atualizaRodada()
      this.progresso = this.progresso + 100/(this.frases.length)
      console.log(this.progresso)
    }else{
      
    }
  }

  public atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }
}