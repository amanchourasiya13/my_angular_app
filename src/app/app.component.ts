import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title="BridgeLabz";
  imagePath = 'assets/Logo.png';
  url="https://www.Bridgelabz.com";

  ngOnInit():void{
    this.title="Hello from BridgeLabz.";
  }

  onClick(event:MouseEvent):void{
    console.log("Save button is clicked!",event);
    window.open(this.url,"_blank");
  }

}

