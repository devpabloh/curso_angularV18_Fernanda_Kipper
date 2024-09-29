import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root', // o seletor é aonde iremos colocar o nome que vamos chamar o component se precisar usar o mesmo em outro local
  standalone: true, //comportamento dos modulos do angular, dentro do mesmo nós temos duas opções:
  //standalone:
  //NgModule:
  imports: [RouterOutlet, HomeComponent],
  // template quando queremos passar toda a estrutura no próprio arquivo ts
  //template: "<h1>Olá</h1>",

  // aqui é quando queremos passar uma estrutura externa
  templateUrl: "./app.component.html",
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeiros-passos-angular';
}
