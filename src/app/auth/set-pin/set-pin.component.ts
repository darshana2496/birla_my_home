import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Keyboard } from '@capacitor/keyboard';
@Component({
  selector: 'app-set-pin',
  templateUrl: './set-pin.component.html',
  styleUrls: ['./set-pin.component.scss'],
})
export class SetPinComponent implements OnInit {
  pinGroup: FormGroup;
  submitted: boolean;
  setfirstPin = '';
  setSecondPin = '';
  constructor(
    public route: Router,
    public globalService: GlobalService,
    public fb: FormBuilder,
    public storage: Storage
  ) {
    this.pinGroup = fb.group({
      firstPin: fb.group({
        pin1: fb.control('', Validators.required),
        pin2: fb.control({ value: '', disabled: true }, Validators.required),
        pin3: fb.control({ value: '', disabled: true }, Validators.required),
        pin4: fb.control({ value: '', disabled: true }, Validators.required),
      }),
      secondPin: fb.group({
        pin1: fb.control('', Validators.required),
        pin2: fb.control({ value: '', disabled: true }, Validators.required),
        pin3: fb.control({ value: '', disabled: true }, Validators.required),
        pin4: fb.control({ value: '', disabled: true }, Validators.required),
      }),
    });
    this.pinGroup.get('firstPin').valueChanges.subscribe((val) => {
      if (val.pin1) {
        this.pinGroup.get('firstPin').get('pin2').enable({ onlySelf: true });
      }
      if (val.pin2) {
        this.pinGroup.get('firstPin').get('pin3').enable({ onlySelf: true });
      }
      if (val.pin3) {
        this.pinGroup.get('firstPin').get('pin4').enable({ onlySelf: true });
      }
      if (val.pin1 && val.pin2 && val.pin3 && val.pin4) {
        let existingPin = val.pin1 + val.pin2 + val.pin3 + val.pin4;
        this.setfirstPin = existingPin;
      }
    });
    this.pinGroup.get('secondPin').valueChanges.subscribe((val) => {
      if (val.pin1) {
        this.pinGroup.get('secondPin').get('pin2').enable({ onlySelf: true });
      }
      if (val.pin2) {
        this.pinGroup.get('secondPin').get('pin3').enable({ onlySelf: true });
      }
      if (val.pin3) {
        this.pinGroup.get('secondPin').get('pin4').enable({ onlySelf: true });
      }
      if (val.pin1 && val.pin2 && val.pin3 && val.pin4) {
        let existingPin = val.pin1 + val.pin2 + val.pin3 + val.pin4;
        this.setSecondPin = existingPin;
       
        if (this.isPinMatching(this.setfirstPin, this.setSecondPin)) {
          
          this.submitted = true;
        } else {
          this.pinGroup.get('secondPin').setErrors({ match: false });
        }
      } else {
        this.submitted = false;
      }
    });
  }

  ngOnInit() {
    Keyboard.addListener('keyboardDidShow', info => {
      Keyboard.setAccessoryBarVisible({isVisible: true});
    });
  }
  get firstGroup() {
    return (this.pinGroup.get('firstPin') as FormGroup).controls;
  }

  get secondGroup() {
    return (this.pinGroup.get('secondPin') as FormGroup).controls;
  }
  isPinMatching(pin1: any, pin2: any) {
    if (pin1 == pin2) {
     
      return true;
    } else {
    
      return false;
    }
  }
  get formErr() {
    return this.pinGroup.controls;
  }

  fnsetPin() {
    if(this.submitted){
      this.globalService.setPinValue = this.setfirstPin.toString();
      this.storage.set('AccessPin', this.globalService.setPinValue);
      this.globalService.setInitialProject();
      this.globalService.isPhoneUnlocked = true;
      this.route.navigate(['/dashboard']);
    }
   
  }

  toggleInputType(formControl, nextid, prevId) {
    if (formControl.pristine) {
      return 'number';
    } else {
      nextid.focus();
      return 'password';
    }
  }

  
}
