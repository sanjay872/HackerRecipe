export class Recipe
{
  public id:string;
  public name:string;
  public image:string;
  public category:string;
  public label:string;
  public price:string;
  public description:string;
  constructor(id:string,name:string,image:string,category:string,label:string,price:string,description:string)
  {
    this.id=id;
    this.name=name;
    this.image=image;
    this.category=category;
    this.label=label;
    this.price=price;
    this.description=description;
  }
}
