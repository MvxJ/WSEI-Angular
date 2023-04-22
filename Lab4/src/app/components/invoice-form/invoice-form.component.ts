import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InvoiceForm } from '../../models/invoice-form.model';
import { Position } from 'src/app/models/position.model';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {
  invoice!: FormGroup<InvoiceForm>

  constructor(private readonly formBuilder: FormBuilder) {}

  addItemToForm(): void {
    const itemName = 'Item ' + this.invoice.controls.items.length
    const itemPrice = Math.floor(Math.random() * 100)

    const itemFG: FormGroup<Position> = new FormGroup({
      name: this.formBuilder.nonNullable.control(itemName),
      quantity: this.formBuilder.nonNullable.control(1),
      price: this.formBuilder.nonNullable.control(itemPrice),
      tax: this.formBuilder.nonNullable.control('23%'),
      measureUnit: this.formBuilder.control('sztuka')
    })

    this.invoice.controls.items.push(itemFG)
  }

  ngOnInit(): void {
    this.invoice = this.formBuilder.group({
      customerData: this.formBuilder.group({
        name: this.formBuilder.nonNullable.control(''),
        city: this.formBuilder.control(''),
        zipCode: this.formBuilder.control(''),
        address: this.formBuilder.control(''),
        nip: this.formBuilder.control('')
      }),
      providerData: this.formBuilder.group({
        issuerName: this.formBuilder.nonNullable.control(''),
        city: this.formBuilder.control(''),
        zipCode: this.formBuilder.control(''),
        address: this.formBuilder.control(''),
        nip: this.formBuilder.control(''),
        accountNumber: this.formBuilder.control('')
      }),
      invoiceNumber: this.formBuilder.control(''),
      invoiceDate: this.formBuilder.control(''),
      sellDate: this.formBuilder.control(''),
      paymentDate: this.formBuilder.control(''),
      paymentMethod: this.formBuilder.control(''),
      cartValue: this.formBuilder.nonNullable.control(0),
      items: this.formBuilder.array<FormGroup<Position>>([])
    })
  }
}
