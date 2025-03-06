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
  userName: string = "";
  nameError: string = "";  // ✅ Add missing property

  ngOnInit(): void {
    this.title = "Hello from BridgeLabz.";
  }

  onClick(event: MouseEvent): void {
    console.log("BridgeLabz Logo is clicked!", event);
    window.open(this.url, "_blank");
  }

  onInput(): void {  // ✅ Removed $event (not needed for ngModel binding)
    console.log("Change Event Occurred!", this.userName);
    const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/; // ✅ Fixed regex (Capital 1st letter & min 3 chars)
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
    } else {
      this.nameError = "Name is incorrect! Start with capital & use at least 3 letters,use only letters.";
    }
  }
}
