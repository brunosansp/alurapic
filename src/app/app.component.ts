import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alura Pic';

  photos = [
    {
      url: "https://i.pinimg.com/736x/19/be/34/19be34a9dac23230ed3d45872227cbda.jpg",
      description: "Lion"
    },
    {
      url: "https://static.poder360.com.br/2020/04/tigre-olhando-com-a-boca-aberta-626x644.jpg",
      description: "Tiger"
    },
    {
      url: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/pantera-thumb.jpg?w=1600&h=934",
      description: "Panther"
    }
  ];
}
