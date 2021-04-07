import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  cateId: Number = -1;
  editForm !: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private cateService : CategoryService,
  ) {
    this.editForm = this.createForm();
   }

  async ngOnInit() {
    await this.route.params.subscribe(params=>{
      this.cateId = params.id;
    });
    await this.cateService.findById(this.cateId).subscribe(data=>{
      this.editForm.setValue({id: data.id, name: data.name});
      console.log(data.id);
    })
  }
  createForm(){
    return new FormGroup({
      id: new FormControl(-1),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }
  get f() {
    return this.editForm.controls;
  }
  saveForm (event: any){
    event.preventDefault();
    this.cateService.put(this.editForm.value).subscribe(data=>{
      this.router.navigate(['/admin/danh-muc']);
    })
  }

}
