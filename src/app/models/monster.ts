import { Monsterskill } from './monsterskill';

export class Monster {
    id: Number;
    name: string;
    image: string;
    details: string;
    spell: Array<Monsterskill>;
    constructor(
        id:number, 
        name:string, 
        image:string= "https:/i.stack.imgur.com/l60Hf.png", 
        details:string,
        spell:Array<Monsterskill> = []){
         this.id = id;
         this.name = name;
         this.image = image;
         this.spell = spell;
         this.details = details;
    }
    
}
