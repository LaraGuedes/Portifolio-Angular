import { Component, Inject, OnInit, inject, signal } from '@angular/core';
import { Iprojects } from '../../../interface/Iprojects';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef,} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit{

  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: Iprojects){};

  public getData = signal <Iprojects | null>(null);

    ngOnInit(): void {
        this.getData.set(this._data)
    };

    public CloseModal(){
      return this._dialogRef.close();
    };
}
