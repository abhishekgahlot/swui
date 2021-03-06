import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { InputTypes } from './input-types';
import './input.scss';
export declare class InputComponent implements OnInit, ControlValueAccessor {
    id: string;
    name: string;
    label: string;
    type: InputTypes;
    hint: string;
    placeholder: string;
    disabled: boolean;
    tabindex: number;
    required: boolean;
    requiredIndicator: string | boolean;
    passwordToggleEnabled: boolean;
    passwordTextVisible: boolean;
    autofocus: boolean;
    autocomplete: boolean;
    autocorrect: boolean;
    spellcheck: boolean;
    change: EventEmitter<{}>;
    blur: EventEmitter<{}>;
    focus: EventEmitter<{}>;
    keyup: EventEmitter<{}>;
    click: EventEmitter<{}>;
    value: string;
    readonly focusedOrDirty: any;
    private readonly getHostCssClasses;
    private readonly getCssClasses;
    private inputModel;
    private inputControl;
    private passwordControl;
    private readonly labelState;
    private readonly underlineState;
    private readonly requiredIndicatorView;
    private focused;
    private _value;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onChange(event: any): void;
    onKeyUp(event: any): void;
    onFocus(event: any): void;
    onBlur(event: any): void;
    writeValue(val: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    togglePassword(): void;
    private onTouchedCallback;
    private onChangeCallback;
}
