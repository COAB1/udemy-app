export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor (name: string, desc: string, imagePath: string) { // the constructor names are not availeble outside this model, 
                                                                //that's why we use the properties we set above and not the constructor arguments
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
 }
