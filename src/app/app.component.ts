import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title="BridgeLabz";
  imagePath = 'assets/Logo.png';
  url="https://www.Bridgelabz.com";
  userName: string="";

  ngOnInit():void{
    this.title="Hello from BridgeLabz.";
  }

  onClick(event:MouseEvent):void{
    console.log("BridgeLabz Logo is clicked!",event);
    window.open(this.url,"_blank");
  }

}

