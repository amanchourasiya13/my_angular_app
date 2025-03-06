import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "BridgeLabz";
  imagePath = 'assets/Logo.png';
  url = "https://www.Bridgelabz.com";
  userName: string = ""; // User input name
  nameError: string = ""; // Error message

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick(event: MouseEvent): void {
    console.log("BridgeLabz Logo is clicked!", event);
    window.open(this.url, "_blank");
  }

  onInput(): void {  
    console.log("Change Event Occurred!", this.userName);
    
    // ✅ Regex: Starts with uppercase letter, followed by at least 2 letters
    const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/;  

    if (nameRegex.test(this.userName)) {
      this.nameError = "";  // ✅ No error if input is valid
    } else {
      this.nameError = "Invalid name! Start with uppercase & min 3 letters.";
    }
  }
}
