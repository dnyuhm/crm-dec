import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      tjmht: [this.init.tjmht],
      label: [this.init.label],
      dureeJours: [this.init.dureeJours],
      tva: [this.init.tva],
      statut: [this.init.statut],
      typeCommande: [this.init.typeCommande],
      idClient: [this.init.idClient],
      notes: [this.init.notes],
      id: [this.init.id],
    });
  }
}
