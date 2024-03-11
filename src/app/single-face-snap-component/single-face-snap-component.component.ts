import { Component,Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-face-snap-component',
  templateUrl: './single-face-snap-component.component.html',
  styleUrl: './single-face-snap-component.component.scss'
})
export class SingleFaceSnapComponentComponent {
  faceSnap!: FaceSnap;
  
  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) {}
  buttonText!: string;

  ngOnInit() {
    this.buttonText = "Oh Snap";
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
  }

  onSnap() {
    if (this.buttonText === "Oh Snap") {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.buttonText = 'Oops, Snap!'
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap'
    }
  }
}
