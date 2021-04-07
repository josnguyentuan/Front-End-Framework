import { Skill } from "./skill";

export class Hero {
    id: Number;
    name: string;
    image: string;
    skills?: Array<Skill>;
    constructor(id:number, 
        name:string, 
        image:string= "https:/i.stack.imgur.com/l60Hf.png", 
        skills:Array<Skill> = []){
         this.id = id;
         this.name = name;
         this.image = image;
         this.skills = skills;
    }
} 
