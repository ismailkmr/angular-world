import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamic-form';
  form!: FormGroup;
  constructor(
    private fb: FormBuilder
  ){

  }

  ngOnInit(): void{
    this.form = this.fb.group({
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required)
    })
  }
}
