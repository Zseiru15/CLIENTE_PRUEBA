import { Component, Inject } from '@angular/core';
import{ MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-modal',
  imports: [
    CommonModule, MatDialogModule
  ],
  templateUrl: './video-modal.component.html',
  styleUrl: './video-modal.component.css'
})
export class VideoModalComponent {

  videoUrl: SafeResourceUrl;

  constructor(
    public dialogRef: MatDialogRef<VideoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {url: string},
    private sanitizer: DomSanitizer
  ){
    this.videoUrl = this.sanitizeUrl(data.url);
  }
  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  closeModal(){
    this.dialogRef.close(); 
  }

}
