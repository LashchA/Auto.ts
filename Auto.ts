import { applyMixins } from './mixins'

abstract class Auto {
   abstract name: string;
   abstract wheels: number;
   traffic(): void {
      console.log(`Model: ${this.name} Wheels: ${this.wheels}`)
   }
}

class Audi extends Auto {

   constructor(public name: string, public wheels: number, public maxSpeed: number) {
      super();
   }
   getAudiSpeed() {
      console.log(`Maximum speed: ${this.maxSpeed}`)
   }
}


class Bmw extends Auto {

   constructor(public name: string, public wheels: number, public maxSpeed: number) {
      super()
   }

   getBmwSpeed(): void {
      console.log(`Maximum speed: ${this.maxSpeed}`)
   }
}



class Porsche extends Auto {
   constructor(public name: string, public wheels: number, public maxSpeed: number) {
      super()
   }

   getPorscheSpeed(): void {
      console.log(`Maximum speed: ${this.maxSpeed}`)
   }
}

class Tesla extends Auto {
   constructor(public name: string, public wheels: number, public maxSpeed: number) {
      super()
   }

   getTeslaSpeed(): void {
      console.log(`Maximum speed: ${this.maxSpeed}`)
   }
}


let audi = new Audi('A4', 4, 210)
console.log(audi)
audi.getAudiSpeed()
audi.traffic()


let bwm = new Bmw('BMW X5', 4, 260)
console.log(bwm)
bwm.getBmwSpeed()
bwm.traffic()

let porsche = new Porsche('Porsche Cayen', 4, 230);
console.log(porsche)
porsche.getPorscheSpeed()

let tesla = new Tesla('Tesla X', 4, 250)
tesla.getTeslaSpeed()
tesla.traffic()

class MyCar extends Auto {
   constructor(public name: string, public wheels: number) {
      super()
   }
}

interface MyCar extends Audi, Bmw, Porsche, Tesla { }

applyMixins(MyCar, [Audi, Bmw, Porsche, Tesla]);
let myCar = new MyCar('VAZ 4', 4)
