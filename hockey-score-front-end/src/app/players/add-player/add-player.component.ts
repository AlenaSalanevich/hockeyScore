import { Component, OnInit, ErrorHandler } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private readonly playerService: PlayerService, private readonly router: Router, private handler: ErrorHandler) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      position: ['', Validators.required],
      name: ['', Validators.required, Validators.minLength(3)],
      number: ['', Validators.required],
      born: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      age: ['', Validators.required],
      shoots: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.playerService.create(this.registerForm.value)
      .subscribe(() => console.log(""),
        (error) => {
          this.handler.handleError(error);
        });
    this.router.navigateByUrl("players")
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
