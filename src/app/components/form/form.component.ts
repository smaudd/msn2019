import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  @Input() builder: any
  form: FormGroup

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const formControls = {}
    Object.keys(this.builder.fields).forEach((field: any) => {
      switch (this.builder.fields[field].type) {
        case 'text': 
          formControls[field] = new FormControl('', [Validators.required])
          break
        case 'password':
          formControls[field] = new FormControl('', [Validators.required])
          break
        case 'email':
          formControls[field] = new FormControl('', [Validators.required, Validators.email])     
      }
    })
    if (this.builder.fields.rpassword) {
      this.form = this.fb.group(formControls, { validator: this.pwdMatch })
    } else {
      this.form = this.fb.group(formControls)      
    }
  }

  pwdMatch(frm: FormGroup) {
    return frm.get('password').value !== frm.get('rpassword').value ? { mismatch: true } : null
  }

}
