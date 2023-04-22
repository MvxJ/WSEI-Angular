import { FormControl, FormGroup } from "@angular/forms"

export type Position = {
    name: FormControl<string>
    quantity: FormControl<number>
    price: FormControl<number>
    measureUnit: FormControl<string | null>
    tax: FormControl<string>
}