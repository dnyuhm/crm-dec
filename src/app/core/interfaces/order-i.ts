import { StateOrder } from '../enums/state-order';

export interface OrderI {
  label: string;
  tjmht: number;
  dureeJours: number;
  tva: number;
  statut: StateOrder;
  typeCommande: string;
  idClient: number;
  notes: string;
  id: number;
}
