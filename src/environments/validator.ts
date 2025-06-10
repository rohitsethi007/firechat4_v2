import { Validators } from '@angular/forms';

export namespace Validator {

    export const emailValidator = ['', [
        Validators.required,
        Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$')]
    ];

    export const passwordValidator = ['', [
        Validators.required, Validators.minLength(6)
    ]]

    export const nameValidator = ['', [
        Validators.required,
    ]]

    export const usernameValidator = ['', [
        Validators.required,
        Validators.minLength(5)
    ]]

    export const bioValidator = ['', [
        Validators.required,
    ]]

    export const groupNameValidator = ['', [
        Validators.required,
    ]]

    export const groupDescriptionValidator = ['', [
        Validators.required,
    ]]

    export const errorMessages = {
        email: [
            { type: 'required', message: 'Email is required' },
            { type: 'pattern', message: 'Please enter a valid email address' }
        ],
        password: [
            { type: 'required', message: 'Password is required' },
            { type: 'minlength', message: 'Password must be at least 6 characters long' }
        ],
        name: [
            { type: 'required', message: 'Name is required' },
            { type: 'minlength', message: 'Name must be at least 2 characters long' }
        ],
        username: [
            { type: 'required', message: 'Username is required' },
            { type: 'minlength', message: 'Username must be at least 3 characters long' }
        ],
        bio: [
            { type: 'required', message: 'Bio is required' },
        ],
        groupName: [
            { type: 'required', message: 'Group Name is required' },
        ],
        groupDescription: [
            { type: 'required', message: 'Group Description is required' },
        ],

    }
	
	// Poll Form Validators
  export const pollNameValidator = ['', [Validators.required, Validators.minLength(1)]];
  export const pollDescriptionValidator = ['', [Validators.required, Validators.minLength(1)]];
  export const pollOption1Validator = ['', [Validators.required, Validators.minLength(1)]];
  export const pollOption2Validator = ['', [Validators.required, Validators.minLength(1)]];
}