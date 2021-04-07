import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  @Input() formObject!: Hero;
  @Output() saveEvent = new EventEmitter<Hero>();
  listSkill: Array<Skill> = [
    {
      id: 1,
      name: "java"
    },
    {
      id: 2,
      name: "C-Sharp"
    },
    {
      id: 3,
      name: "PHP"
    },
    {
      id: 4,
      name: "javascript"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  saveForm(event: any){
    event.preventDefault();
    this.saveEvent.emit(this.formObject);
  }

  updateFormAttr(attrName: string, event: any){
    switch(attrName){
          case "id":
            this.formObject.id = Number(event.target.value);
            break;
          case "name":
            this.formObject.name = event.target.value;
            break;
          case "image":
            this.formObject.image = event.target.value
            break;
        }
  }

  toggleFormSkill(formSkill: any, event: any){
    if(event.target.check == true){
      let index = this.formObject.skills?.findIndex(el => el.id == formSkill.id);
      if(index == -1){
        this.formObject.skills?.push({...formSkill});
      }
    }else{
      this.formObject.skills = {...this.formObject}.skills?.filter(el => el.id != formSkill.id);
    }
    console.log(this.formObject);
  }

  checkboxStatus(skillId: Number){
    let existed = this.formObject.skills?.findIndex(el => el.id == skillId);
      return existed != -1;
  }

}