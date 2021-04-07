import { Skill } from './../../models/skill';
import { HEROES } from '../../mock-data/HEROES';
import { Component, OnInit } from '@angular/core';
import {Hero} from "../../models/hero";



@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Array<Hero>= HEROES;
  ListSkill: Array<Skill> = [

    {
      id: 1, 
      name: "Java",
    },
    {
      id: 2, 
      name: "C#",
    },
    {
      id: 3, 
      name: "C++",
    },
    {
      id: 4, 
      name: "Python",
    },
    {
      id: 5, 
      name: "PHP",
    },
  ]



heroFormObject:Hero = {
  id: 0,
  name: "Nguyen Anh Tuan",
  image: "",
  skills:[
    {
      id: 5, 
      name: "PHP",
    },
  ]
}

  constructor() { }

  ngOnInit(): void {
  }
  // checkboxStatus(skillId:Number){
  //   let existed = this.formObject.skills?.findIndex(el=>el.id==skillId);
  //   return existed != -1;
  // }
  // updateFormAttr(attrName: string, event: any){
  //   switch(attrName){
  //     case "id":
  //       this.formObject.id = Number(event.target.value);
  //       break;
  //     case "name":
  //       this.formObject.name = event.target.value;
  //       break;
  //     case "image":
  //       this.formObject.image = event.target.value;
  //       break;
  //   }
  // }

  // toggleFormSkill(formSkill: Skill, el: any){
  //     if(el.target.checked==true){
  //       let index = this.formObject.skills?.findIndex(el => el.id == formSkill.id);
  //       if(index==-1){
  //         this.formObject.skills?.push({...formSkill});
  //       }
  //     } 
  //     else{
  //       this.formObject.skills = {...this.formObject}.skills?.filter(el => el.id != formSkill.id);
  //     }
  // }
  // saveForm(event: any){
  //   // ktra id neu ton tai trong list hero
  //   // cap nhat du lieju khop voi id
  //   // neu id chua ton tai
  //   // thuc hien them moi
  //   event.preventDefault();
  //   let index = this.heroes.findIndex(item=>item.id=this.formObject.id);
  //   if(index == -1 ){
  //     this.heroes.push({...this.formObject});

  //   } else{
  //     this.heroes[index]={...this.formObject};

  //   }
  //   this.resetForm();
  // }
  
  // resetForm(){
  //   this.formObject = {
  //     id: 0,
  //     name: "",
  //     image: "",
  //     skills: []
  //   }
  // }
  // updateHero(hero: Hero){
  //   this.formObject = {...hero};
  // }
 
  // removeHeroFromList(data: Hero){
  //   this.heroes = this.heroes.filter(el => el.id!=data.id);
  // }
  saveForm(data: Hero){
    let index = this.heroes.findIndex(
    item => item.id == data.id
    );
    if(index == -1){
      this.heroes.push({...data});
    }else{
      this.heroes[index] = {...data};
    }
    this.resetForm();
  }

  resetForm(){
    this.heroFormObject = {
      id: 0,
      name: "",
      image: "",
      skills: []
    }
  }

  updateFormObject(hero: Hero){
    this.heroFormObject = {...hero};
  }

  removeHeroFromList(data: Hero){
    this.heroes = this.heroes.filter(el => el.id != data.id);
  }
}
