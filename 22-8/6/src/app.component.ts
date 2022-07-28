import { Component } from "@angular/core";
import { PetService } from "./pet.service";

@Component({
    templateUrl: "src/app.html"
})

export class AppComponent {
    petCount: number;
    pets: Array<{ family: string, name: string, price: number }>;

    constructor() {
        let petService: PetService = new PetService();

        this.petCount = petService.getPetCount();

        this.pets = petService.getPets();
    }
}