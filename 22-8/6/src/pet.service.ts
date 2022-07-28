export class PetService{
    private pets: Array<{ family: string, name: string, price: number }> = [{
        family: "Dog",
        name: "Spike",
        price: 12.3
    }, {
        family: "Cat",
        name: "Tom",
        price: 1.2
        }];
    
    getPetCount(): number{
        return this.pets.length;
    }

    getPets(): Array<{ family: string, name: string, price: number }>{
        return this.pets;
    }
}