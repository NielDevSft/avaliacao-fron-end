import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PedidoFinalizadoComponent } from './steps/pedido-finalizado/pedido-finalizado.component';


@Component({
  selector: 'app-checkout-credit-card',
  templateUrl: './checkout-credit-card.component.html',
  styleUrls: ['./checkout-credit-card.component.scss']
})
export class CheckoutCreditCardComponent implements OnInit {
  carrinhoForm: FormGroup;
  pagamentoForm: FormGroup;
  pedidoFinalizadoComponent: FormGroup;

  constructor() { }

  private steps = [];
  ngOnInit() {
  }

}
