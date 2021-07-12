import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {
  uploadForm = new FormGroup({
    image: new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
