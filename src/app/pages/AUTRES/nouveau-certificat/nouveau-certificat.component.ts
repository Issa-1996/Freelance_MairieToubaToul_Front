import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'nouveau-certificat',
  templateUrl: './nouveau-certificat.component.html',
  styleUrls: ['./nouveau-certificat.component.css']
})
export class NouveauCertificatComponent implements OnInit {

  addForm: FormGroup;
  public visiblite1="true";
  public visiblite2="true";
  public visiblite3="true";
  public visiblite4="true";
  public visiblite5="true";
  public visiblite6="true";
  public visiblite7="true";
  public visiblite8="true";
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      certificat: [""],
    });    
  }

  voire(){
    if(this.addForm.get("certificat").value=="DETERIORATION"){
      this.visiblite1="false";
      this.visiblite2="true";
      this.visiblite3="true";
      // this.visiblite4="true";
      this.visiblite5="true";
      this.visiblite6="true";
      this.visiblite7="true";
      this.visiblite8="true";
    }else if(this.addForm.get("certificat").value=="RESIDENCE"){
      this.visiblite2="false";
      this.visiblite1="true";
      this.visiblite3="true";
      // this.visiblite4="true";
      this.visiblite5="true";
      this.visiblite6="true";
      this.visiblite7="true";
      this.visiblite8="true";
    }else if(this.addForm.get("certificat").value=="COLLECTIF"){
      this.visiblite3="false";
      this.visiblite1="true";
      this.visiblite2="true";
      // this.visiblite4="true";
      this.visiblite5="true";
      this.visiblite6="true";
      this.visiblite7="true";
      this.visiblite8="true";
    }
    else if(this.addForm.get("certificat").value=="INDIVIDUEL"){
      this.visiblite4="false";
      this.visiblite1="true";
      this.visiblite2="true";
      this.visiblite3="true";
      this.visiblite5="true";
      this.visiblite6="true";
      this.visiblite7="true";
      this.visiblite8="true";
    }
    else if(this.addForm.get("certificat").value=="MAJEURE"){
      this.visiblite5="false";
      this.visiblite1="true";
      this.visiblite2="true";
      this.visiblite3="true";
      // this.visiblite4="true";
      this.visiblite6="true";
      this.visiblite7="true";
      this.visiblite8="true";
    }else if(this.addForm.get("certificat").value=="DIVORCE"){
      this.visiblite6="false";
      this.visiblite1="true";
      this.visiblite2="true";
      this.visiblite3="true";
      // this.visiblite4="true";
      this.visiblite5="true";
      this.visiblite7="true";
      this.visiblite8="true";
    }else if(this.addForm.get("certificat").value=="CELIBAT"){
      this.visiblite7="false";
      this.visiblite1="true";
      this.visiblite2="true";
      this.visiblite3="true";
      // this.visiblite4="true";
      this.visiblite5="true";
      this.visiblite6="true";
      this.visiblite8="true";
    }else if(this.addForm.get("certificat").value=="INDIVIDUALITE"){
      this.visiblite8="false";
      this.visiblite1="true";
      this.visiblite2="true";
      this.visiblite3="true";
      // this.visiblite4="true";
      this.visiblite5="true";
      this.visiblite6="true";
      this.visiblite7="true";
    }
  }
}
