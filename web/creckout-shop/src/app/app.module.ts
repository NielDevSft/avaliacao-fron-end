import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { CardComponent } from './components/shared/card/card.component';

import { CarrinhoComponent } from './components/checkout-credit-card/steps/carrinho/carrinho.component';



import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import { CheckoutCreditCardComponent } from './components/checkout-credit-card/checkout-credit-card.component';
import { PagamentoComponent } from './components/checkout-credit-card/steps/pagamento/pagamento.component';
import { PedidoFinalizadoComponent } from './components/checkout-credit-card/steps/pedido-finalizado/pedido-finalizado.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutCreditCardComponent,
    CarrinhoComponent,
    PagamentoComponent,
    PedidoFinalizadoComponent,
  ],
  imports: [
    SharedModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule,
    MatCardModule,
    MatStepperModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
