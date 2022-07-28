"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetService = void 0;
var PetService = /** @class */ (function () {
    function PetService() {
        this.pets = [{
                family: "Dog",
                name: "Spike",
                price: 12.3
            }, {
                family: "Cat",
                name: "Tom",
                price: 1.2
            }];
    }
    PetService.prototype.getPetCount = function () {
        return this.pets.length;
    };
    PetService.prototype.getPets = function () {
        return this.pets;
    };
    return PetService;
}());
exports.PetService = PetService;
//# sourceMappingURL=pet.service.js.map