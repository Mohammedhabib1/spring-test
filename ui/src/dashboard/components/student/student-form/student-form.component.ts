import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.scss'
})
export class StudentFormComponent {
  dataForm: FormGroup;
  courseList: any[] = [{id: 1, name: "Java"}, {id: 2, name: "Angular"}];
  deptList: any[] = [{id: 1, name: "JEE"}, {id: 2, name: "DDD"}];

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {
    this.dataForm = this.formBuilder.group({
      name: ['', Validators.required],
      roll: ['', Validators.required],
      address: [''],
      subject: [''],
      grade: [''],
      courses: [[''], Validators.required],
      user: this.formBuilder.group({
        name: [''],
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(2)]]
      })
    });
  }

  onSubmit() {
    if (this.dataForm.valid) {
      // this.studentService.signup(this.signupForm.value).subscribe(() => {
      //   this.snackbar.open('Signup successful! Please login.', 'Close', {
      //     duration: 3000
      //   });
      //   this.router.navigate(['/home/login']);
      // });
    }
  }

}
