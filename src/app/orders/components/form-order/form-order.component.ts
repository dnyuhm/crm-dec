import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  public states: string[] = Object.values(StateOrder);
  public form!: FormGroup;
  @Input() public init!: Order;
  @Output() public submitted = new EventEmitter<Order>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tjmht: [this.init.tjmht],
      label: [this.init.label, [Validators.required, Validators.minLength(2)]],
      dureeJours: [this.init.dureeJours],
      tva: [this.init.tva],
      statut: [this.init.statut],
      typeCommande: [this.init.typeCommande, Validators.required],
      idClient: [this.init.idClient],
      notes: [this.init.notes],
      id: [this.init.id],
    });
  }

  public onSubmit() {
    this.submitted.emit(this.form.value);
    console.log(this.form);
  }
}
