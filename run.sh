# usando Angular CLI 6.0.7
npm install -g @angular/cli@6.0.7

# criando projeto
ng new alurapic

# subindo o servidor local para rodar o projeto
ng serve --open

# Data Binding - Angular expression
````
Utilizamos {{ }} dentro de tags e [ ] para atributos

Ex: {{ aquiDentroSeAssociaUmDado }}

Ex: <img [src]="url" [alt]="title">

````

# Convenção de nomenclaturas
Para arquivos usamos menubar.component.ts, no nome usamos MenubarComponent

# Adicionando Bootstrap
npm i bootstrap@4.1.1

# Sobre inbound properties
Permite que o componente receba valores externos quando usado na forma declarativa no template de outros componentes.


# Diretiva *ngFor
Serve para varrer um array montando cada item do componente a ser exibido


# HttpClient e injeção de dependência para comunicação com a WEB API
Após adicionarmos o import em nosso app.module.ts, precisamos importar em nosso component o seguinte: import {HttpClient} from '@angular/common/http';


# Criando novo componente, photo-list
ng generate component photo/photo-list
<!-- Todo component possui @NgModule -->

# Criando novo componente, photo-form
ng generate component photos/photo-form

# Criando novo componente, load-button
ng g c photos/photo-list/load-button

# Instalação font-awesome
npm install font-awesome@4.7.0
