import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {

  }

  _fileChange(event) {
    this.uploadService.uploadFile(event.target.files[0]).subscribe(
      (data) => console.log(data),
      (data) => console.log(data),
    );
  }

}
