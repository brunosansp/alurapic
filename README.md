# alurapic
https://cursos.alura.com.br/course/angular-fundamentos

nvm use - Para definir a versão á ser usada pelo projeto

npm install -g @angular/cli@6.0.7 - Instalando versão usada no treinamento

ng new alurapic - inicia um novo projeto Angular

ng serve --open - starta a aplicação na porta padrão 4200

No caso de ocorrer erro pela biblioteca RxJS, instalar manualmente
npm install rxjs@6.0.0 --save

Data binding
para atributos usa {{ }}
expressão [ ]

npm install bootstrap@4.1.1
importado em angular.json
"styles": [ "./node_modules/bootstrap/dist/css/bootstrap.min.css" ],

OBS: todo component deve estar em um module

A propriedade @Input() permite que o componente receba valores externos

Ao declarar um Component em um Module tbm é necessário explicitá-lo com exports.
    @NgModule({
        declarations: [ PhotoComponent ],
        exports: [ PhotoComponent ]
    })

Fazendo a integração com back-end via HttpClient.
Para usar o HttpClient é necessário fazer injeção de dependência:
    - Após adicionarmos o import em nosso app.module.ts, precisamos importar em nosso component o seguinte: import {HttpClient} from '@angular/common/http';

