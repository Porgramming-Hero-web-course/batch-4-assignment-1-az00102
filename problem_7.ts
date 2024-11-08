// Create a TypeScript class Car with properties make, model, and year. 
// Include a method getCarAge that returns the car's age based on the current year.

class Car{
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(){
        let currentYear = 2024;
        if(this.year > currentYear || this.year <= 0){
            console.log("invalid year!!")
        }
        else{
            console.log(currentYear - this.year)
        };
    }
}


// Sample Input 1:
const car = new Car("Honda", "Civic", 2050);
car.getCarAge();