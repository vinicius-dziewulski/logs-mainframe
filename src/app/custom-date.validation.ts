import { FormGroup } from '@angular/forms';

export function validateDate(group: FormGroup) {
    const fromStringType: string = group.controls['fromDate'].value;
    const toStringType: string = group.controls['toDate'].value;
    const fromDateType = new Date(fromStringType);
    const toDateType = new Date(toStringType);

    if ((fromDateType > toDateType) ||
        fromStringType == null && toStringType != null ||
        toStringType == null && fromStringType != null ||
        fromStringType == "" && toStringType != "" ||
        toStringType == "" && fromStringType != "") {
        return { notValid: true };
    }

    return null;
}