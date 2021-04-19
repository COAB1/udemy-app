export class Ingredient {
  public name: string; //declaration on properties
  public amount: number; //declaration on properties

  constructor (name: string, amount: number) {
    this.name = name; //content of the body of the constructor
    this.amount = amount; //content of the body of the constructor
    
  }
}
/* 
 a shorter way of declaring this is just to put the accesor in front of the property 
(in front of the arguments):

export class Ingredient {
constructor (public name: name, pubic amount: amount){

}

*/