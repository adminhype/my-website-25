import { FormControl } from '@angular/forms';

    export interface ContactLoad {
    name: string;
    email: string;
    message: string;
    consent: boolean;
    }

    export interface ContactForm {
    name: FormControl<string>;
    email: FormControl<string>;
    message: FormControl<string>;
    consent: FormControl<boolean>;
}