import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ImagesService } from './../../services/images.service'
@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {
  url = environment.serverUrl;
  uploadForm = new FormGroup({
    image: new FormControl('', Validators.required)
  });
  newImg: File | null = null;

  constructor(private imageService: ImagesService) { }

  ngOnInit(): void {
  }

  onSelected(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    this.newImg = element.files? element.files[0] : null;
  }

  onSubmit() {
    if (this.newImg) {
      const fm = new FormData();
      fm.append('file', this.newImg);
      console.log(fm)
      this.imageService.addImage(fm).subscribe(obs => console.log(obs));
    }
  }
}
