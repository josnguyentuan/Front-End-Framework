export class Monsterskill {
    id: Number;
    name: string;
    image: string;
    constructor(
        id:number,
        name:string,
        image = "https:/i.stack.imgur.com/l60Hf.png"
    ){
        this.id=id;
        this.name=name;
        this.image = image;
    }
}
