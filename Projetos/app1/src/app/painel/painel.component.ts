import { Component, OnInit } from '@angular/core';
import { frase } from '../shared/frase.model';
import { Frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  
  public instrucao: string = 'Traduza a frase'
  public frases: frase[] = Frases
  public resposta: string

  public rodada: number = 0
  public rodadaFrase: frase
  public progresso: number = 0

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void{
    if(this.rodadaFrase.frasePtBr == this.resposta){
      this.rodada++
      this.progresso = this.progresso + (100/ this.frases.length)
      this.rodadaFrase = this.frases[this.rodada]
      this.atualizaRodada()
    }
  }
  public atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }
}
