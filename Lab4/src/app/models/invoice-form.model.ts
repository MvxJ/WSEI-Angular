import { FormArray, FormControl, FormGroup } from "@angular/forms"
import { Position } from "./position.model"

export type InvoiceForm = {
  customerData: FormGroup<{
    name: FormControl<string>,
    city: FormControl<string | null>,
    zipCode: FormControl<string | null>,
    address: FormControl<string | null>,
    nip: FormControl<string | null>,
  }>,
  providerData: FormGroup<{
    issuerName: FormControl<string>,
    city: FormControl<string | null>,
    zipCode: FormControl<string | null>,
    address: FormControl<string | null>,
    nip: FormControl<string | null>,
    accountNumber: FormControl<string | null> 
  }>,
  invoiceNumber: FormControl<string | null>,
  invoiceDate: FormControl<string | null>,
  sellDate: FormControl<string | null>,
  paymentDate: FormControl<string | null>,
  paymentMethod: FormControl<string | null>
  cartValue: FormControl<number>,
  items: FormArray<FormGroup<Position>>
}