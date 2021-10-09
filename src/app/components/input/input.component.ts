import { Component, Input, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
@Input() type = 'text';
@Input() placeholder = "Enter text";
@Input() parentForm!: FormGroup;
@Input() name!: string;
@Input() lastname!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
