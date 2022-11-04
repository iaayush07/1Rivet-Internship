import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public register: FormGroup;
  public imageFile!: File;
  public base64String: any;

  constructor(private fb: FormBuilder) {
    this.register = this.fb.group({
      file: [''],
      path: ['']
    })
  }

  ngOnInit(): void {
  }
  onUpload(event: any) {
    if (event.target.files.length > 0) {
      this.imageFile = event.target.files[0];
      // console.log(this.imageFile);
    }
    var reader = new FileReader();
    reader.onload = () => {
      this.base64String = String(reader.result)
    }
    reader.readAsDataURL(this.imageFile);
    // if (this.imageFile) {
    //   this.isImagevalue = true;
    // }
  }

}
