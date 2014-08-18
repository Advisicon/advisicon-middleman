$(document).ready(function() {

  // Give all of the fieldsets the "form-group" class. 
  // Neccessary for the bootstrapValidator.
  $('fieldset').addClass('form-group');

  // Run the validator
  // See http://bootstrapvalidator.com
  $('.training.form').bootstrapValidator({
    live: 'enabled',
    message: 'This value is not valid',
    feedbackIcons: {
      valid:      'glyphicon glyphicon-ok',
      invalid:    'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      ticket: {
        message: 'This is not a valid purchase selection',
        validators: {
          choice: {
            min: 1,
            message: 'Select 1 or more tickets to purchase'
          }
        }
      },
      buyerEmail: {
        selector: '#buyerEmail',
        message: 'This is email address is not valid',
        validators: {
          notEmpty: {
            message: 'You must provide an email address'
          },
          emailAddress: {
            message: 'The email address must be valid'
          }
        }
      },
      buyerEmailConfirmation: {
        selector: '#buyerEmailConfirmation',
        message: 'This field is not valid',
        validators: {
          notEmpty: {
            message: 'Please re-enter your email address (we just want to make sure there aren\'t any typos)'
          },
          emailAddress: {
            message: 'The email address must be valid'
          },
          identical: {
            field: 'buyerEmail',
            message: 'The email and email confirmation are not the same'
          }
        }
      },
      buyerFN: {
        selector: '#buyerFirstName',
        message: 'Your first name is not valid',
        validators: {
          notEmpty: {
            message: 'Your first name is required and cannot be empty'
          },
          regexp: {
            regexp: /^[a-zA-Z]+$/,
            message: 'Your first name can only consist of alphabetical characters'
          }
        }
      },
      buyerLN: {
        selector: '#buyerLastName',
        message: 'Your last name is not valid',
        validators: {
          notEmpty: {
            message: 'Your last name is required and cannot be empty'
          },
          regexp: {
            regexp: /^[a-zA-Z-]+$/,
            message: 'Your last name can only consist of alphabetical characters'
          }
        }
      },
      ccNumber: {
        message: 'Please enter a valid credit card number',
        validators: {
          notEmpty: {
            message: 'The credit card number is required and cannot be empty'
          },
          creditCard: {
            message: 'This credit card number is not valid. We accept American Express, Mastercard, and Visa.'
          }
        }
      },
      ccCvv: {
        message: 'Invalid CVV code',
        validators: {
          notEmpty: {
            message: 'Enter card CVV'
          },
          cvv: {
            creditCardField: 'ccNumber',
            message: 'The CVV number is not valid'
          }
        }
      },
      ccName: {
        selector: '#nameOnCard',
        message: 'The name on this credit card is invalid',
        validators: {
          notEmpty: {
            message: 'You must provide the name on the credit card'
          },
          regexp: {
            regexp: /^[a-zA-Z ]+$/,
            message: 'The name on the credit card can only consist of alphabetical characters'
          }
        }
      },
      ccStreetAdr1: {
        message: 'This street address is invalid',
        validators: {
          notEmpty: {
            message: 'The street address associated with this credit card cannot be blank'
          },
          regexp: {
            regexp: /^[a-zA-Z0-9 .]+$/,
            message: 'The street address associated with this credit card can only consist of letters and numbers'
          }
        }
      },
      ccStreetAdr2: {
        message: 'This address is invalid',
        validators: {
          regexp: {
            regexp: /^[a-zA-Z0-9 .]+$/,
            message: 'The address associated with this credit card can only consist of letters and numbers'
          }
        }
      },
      ccLocality: {
        message: 'This city is invalid',
        validators: {
          regexp: {
            regexp: /^[a-zA-Z ]+$/,
            message: 'The address associated with this credit card can only consist of letters and numbers'
          }
        }
      },
      ccRegion: {
        message: 'This state or province is invalid',
        validators: {
          regexp: {
            regexp: /^[a-zA-Z ]+$/,
            message: 'The state/province associated with this credit card can only consist of letters and numbers'
          }
        }
      },
      ccPostalCode: {
        message: 'This postal code is invalid',
        validators: {
          regexp: {
            regexp: /^\d{5]$/,
            message: 'The postal code must contain 5 digits'
          }
        }
      },
      ccCountry: {
        message: 'This country is invalid',
        validators: {
          regexp: {
            regexp: /^[a-zA-Z ]+$/,
            message: 'The country associated with this credit card can only consist of letters and numbers'
          }
        }
      }
    }
  });
});
