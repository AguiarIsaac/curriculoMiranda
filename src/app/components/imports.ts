import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MessageModule } from 'primeng/message';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabsModule } from 'primeng/tabs';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { TextareaModule } from 'primeng/textarea';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,

        InputTextModule,
        InputGroupModule,
        InputGroupAddonModule,
        MessageModule,
        DatePickerModule,
        SelectModule,
        RadioButtonModule,
        InputMaskModule,
        MultiSelectModule,
        TabsModule,
        ButtonModule,
        InputNumberModule,
        CheckboxModule,
        TextareaModule,
        TableModule,
        DialogModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,

        InputTextModule,
        InputGroupModule,
        InputGroupAddonModule,
        MessageModule,
        DatePickerModule,
        SelectModule,
        RadioButtonModule,
        InputMaskModule,
        MultiSelectModule,
        TabsModule,
        ButtonModule,
        InputNumberModule,
        CheckboxModule,
        TextareaModule,
        TableModule,
        DialogModule
    ],
    providers: [ ]
})
export class ImportsModule {}
