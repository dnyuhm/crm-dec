import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  label!: string;
  tjmht = 500;
  dureeJours = 5;
  tva = 20;
  statut = StateOrder.OPTION;
  typeCommande!: string;
  idClient!: number;
  notes!: string;
  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
