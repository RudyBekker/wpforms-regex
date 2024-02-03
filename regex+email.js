// Define the configuration for forms and fields
var formConfig = [
    {
        form_id: 322, // ES TEST
        fields: [
            {
                field_id: 37,
                name: "vorname",
                required: true,
                step: 1,
                valid: true,
                regex: /^[A-Za-zäöüÄÜÖáàéèíìóòôúùûñÇç°ª.,\-\s]+$/i
            },
            {
                field_id: 38,
                name: "name",
                required: true,
                step: 1,
                valid: true,
                regex: /^[A-Za-zäöüÄÜÖáàéèíìóòôúùûñÇç°ª.,\-\s]+$/i
            },
            {
                field_id: 1,
                name: "Email",
                required: true,
                step: 1,
                valid: true,
                regex: /([_\.0-9a-z-+]*?[aeiou][_\.0-9a-z-+]*?[b-df-hj-np-tv-z][_\.0-9a-z-+]*|[_\.0-9a-z-+]*?[b-df-hj-np-tv-z][_\.0-9a-z-+]*?[aeiou][_\.0-9a-z-+]*)@([0-9a-z][0-9a-z-]+\.)+[a-z]{2,63}$/i
            },
            {
                field_id: 27,
                name: "telefoon",
                required: true,
                step: 2,
                valid: true,
                regex: /^$|^[0-9]{9,9}$/i
            },
            {
                field_id: 21,
                name: "hausnr",
                required: true,
                step: 3,
                valid: true,
                regex: /^([0-9]{1,4}[\s]?([a-z]?|bis)|s\/n)$/i
            },
            {
                field_id: 20,
                name: "strasse",
                required: true,
                step: 3,
                valid: true,
                regex: /^[A-Za-z0-9äöüÄÜÖáàéèíìóòôúùûñÇç°ª,\.\-\s]+$/i
            },
            {
                field_id: 24,
                name: "plz",
                required: true,
                step: 3,
                valid: true,
                regex: /^([0-9]{5,5})$/
            },
            {
                field_id: 23,
                name: "adresszusatz",
                required: false,
                step: 3,
                valid: true,
                regex: /^[0-9]{1,4}[\s]?[A-Za-zäöüÄÜÖáàéèíìóòôúùûñÇç°ª]?$/i
            }
            // Add more fields as needed
        ]
    },
    {
        form_id: 130, // ES Prod
        fields: [
            {
                field_id: 37,
                name: "vorname",
                required: true,
                step: 1,
                valid: true,
                regex: /^[A-Za-zäöüÄÜÖáàéèíìóòôúùûñÇç°ª.,\-\s]+$/i
            },
            {
                field_id: 38,
                name: "name",
                required: true,
                step: 1,
                valid: true,
                regex: /^[A-Za-zäöüÄÜÖáàéèíìóòôúùûñÇç°ª.,\-\s]+$/i
            },
            {
                field_id: 1,
                name: "Email",
                required: true,
                step: 1,
                valid: true,
                regex: /([_\.0-9a-z-+]*?[aeiou][_\.0-9a-z-+]*?[b-df-hj-np-tv-z][_\.0-9a-z-+]*|[_\.0-9a-z-+]*?[b-df-hj-np-tv-z][_\.0-9a-z-+]*?[aeiou][_\.0-9a-z-+]*)@([0-9a-z][0-9a-z-]+\.)+[a-z]{2,63}$/i
            },
            {
                field_id: 27,
                name: "telefoon",
                required: true,
                step: 1,
                valid: true,
                regex: /^$|^[0-9]{9,9}$/i
            },
            {
                field_id: 58,
                name: "DOB:DD",
                required: true,
                step: 1,
                valid: true,
                regex: /^(0[1-9]|[12][0-9]|3[01])$/i
            },
            {
                field_id: 60,
                name: "DOB:MM",
                required: true,
                step: 1,
                valid: true,
                regex: /^(0[1-9]|1[0-2])$/i
            },
            {
                field_id: 59,
                name: "DOB:YYYY",
                required: true,
                step: 1,
                valid: true,
                regex: /^(19[2-9]\d|199[0-8])$/i
            },
            {
                field_id: 21,
                name: "hausnr",
                required: true,
                step: 2,
                valid: true,
                regex: /^([0-9]{1,4}[\s]?([a-z]?|bis)|s\/n)$/i
            },
            {
                field_id: 20,
                name: "strasse",
                required: true,
                step: 2,
                valid: true,
                regex: /^[A-Za-z0-9äöüÄÜÖáàéèíìóòôúùûñÇç°ª,\.\-\s]+$/i
            },
            {
                field_id: 24,
                name: "plz",
                required: true,
                step: 2,
                valid: true,
                regex: /^([0-9]{5,5})$/
            },
            {
                field_id: 23,
                name: "adresszusatz",
                required: false,
                step: 2,
                valid: true,
                regex: /^[0-9]{1,4}[\s]?[A-Za-zäöüÄÜÖáàéèíìóòôúùûñÇç°ª]?$/i
            }
            // Add more fields as needed
        ]
    },
    {
        form_id: 410, // DE
        fields: [
            {
                field_id: 37,
                name: "vorname",
                required: true,
                step: 1,
                valid: true,
                regex: /^[A-Za-zäöüÄÜÖáàéèíìóòôúùûñ,\-\s]+$/i
            },
            {
                field_id: 38,
                name: "name",
                required: true,
                step: 1,
                valid: true,
                regex: /^[A-Za-zäöüÄÜÖáàéèíìóòôúùûñÇç°ª.,\-\s]+$/i
            },
            {
                field_id: 1,
                name: "Email",
                required: true,
                emailLookup: true,
                step: 1,
                valid: true,
                regex: /([_\.0-9a-z-+]*?[aeiou][_\.0-9a-z-+]*?[b-df-hj-np-tv-z][_\.0-9a-z-+]*|[_\.0-9a-z-+]*?[b-df-hj-np-tv-z][_\.0-9a-z-+]*?[aeiou][_\.0-9a-z-+]*)@([0-9a-z][0-9a-z-]+\.)+[a-z]{2,63}$/i
            },
            {
                field_id: 27,
                name: "telefoon",
                required: true,
                step: 1,
                valid: true,
                regex: /^\d{6,12}$/
            },
            {
                field_id: 54,
                name: "DOB:DD",
                required: true,
                step: 1,
                valid: true,
                regex: /^(0[1-9]|[12][0-9]|3[01])$/i
            },
            {
                field_id: 55,
                name: "DOB:MM",
                required: true,
                step: 1,
                valid: true,
                regex: /^(0[1-9]|1[0-2])$/i
            },
            {
                field_id: 56,
                name: "DOB:YYYY",
                required: true,
                step: 1,
                valid: true,
                regex: /^(19[2-9]\d|199[0-8])$/i
            },
            {
                field_id: 21,
                name: "hausnr",
                required: true,
                step: 2,
                valid: true,
                regex: /^[0-9]{1,4}[\s]?[a-z]?$/i
            },
            {
                field_id: 20,
                name: "strasse",
                required: true,
                step: 2,
                valid: true,
                regex: /^[A-Za-z0-9äöüÄÜÖáàéèíìóòôúùûñß,\.\-\s]+$/i
            },
            {
                field_id: 11111111, //Disabled Temp
                name: "plz",
                required: true,
                step: 2,
                valid: true,
                regex: /^([0-9]{5,5})$/
            },
            {
                field_id: 49,
                name: "ORT",
                required: true,
                step: 2,
                valid: true,
                regex: /^[A-Za-zäöüÄÜÖáàéèíìóòôúùûñß,\(\)\/\.\-\s]+$/i
            }
            // Add more fields as needed
        ]
    },
    {
        form_id: 346, // UK Unbiased
        fields: [
            {
                field_id: 37,
                name: "vorname",
                required: true,
                step: 1,
                valid: true,
                regex: /^[A-Za-zäöüÄÜÖáàéèíìóòôúùûñ,\-\s]+$/i
            },
            {
                field_id: 38,
                name: "name",
                required: true,
                step: 1,
                valid: true,
                regex: /^[A-Za-zäöüÄÜÖáàéèíìóòôúùûñÇç°ª.,\-\s]+$/i
            },
            {
                field_id: 1,
                name: "Email",
                required: true,
                step: 1,
                valid: true,
                regex: /([_\.0-9a-z-+]*?[aeiou][_\.0-9a-z-+]*?[b-df-hj-np-tv-z][_\.0-9a-z-+]*|[_\.0-9a-z-+]*?[b-df-hj-np-tv-z][_\.0-9a-z-+]*?[aeiou][_\.0-9a-z-+]*)@([0-9a-z][0-9a-z-]+\.)+[a-z]{2,63}$/i
            },
            {
                field_id: 27,
                name: "telefoon",
                required: true,
                step: 1,
                valid: true,
                regex: /^\d{6,12}$/
            }
        ]
    }

    // Add more forms as needed
];

// Email lists associated with each form by form_id
// Email lists associated with each form by form_id
var emailLists = {
    322: ["rudy@rudybekker.com", "email2@example.com"], // ES TEST
    130: ["rudy@rudybekker.com", "email4@example.com"], // ES Prod
    410: ["rudy@rudybekker.com", "email6@example.com"], // DE
    346: ["rudy@rudybekker.com", "email8@example.com"]  // UK Unbiased
    // Add more form_id and email list pairs as needed
};

// URLs to redirect to if the email is in the list
var redirectUrls = {
    322: "http://example.com/redirect322", // ES TEST
    130: "http://example.com/redirect130", // ES Prod
    410: "http://example.com/redirect410", // DE
    346: "http://example.com/redirect346"  // UK Unbiased
    // Add more form_id and redirect URL pairs as needed
};

function validateField(inputField, fieldConfig, formId, updateColor = true) {
    var isFieldFilled = inputField.value.trim() !== '';
    var isFieldValid = fieldConfig.regex.test(inputField.value);

    // Check if the field is an email field that requires lookup
    var isEmailInList = false;
    if (fieldConfig.emailLookup && fieldConfig.name.toLowerCase() === "email") {
        var emailList = emailLists[formId] || [];
        isEmailInList = emailList.includes(inputField.value.trim());
        if (isEmailInList) {
            // If the email is in the list, redirect and do not validate further
            window.location.href = redirectUrls[formId];
            return; // Stop further execution
        }
    }

    var isValid = (fieldConfig.required && isFieldFilled && isFieldValid) || (!fieldConfig.required);
    fieldConfig.valid = isValid; // Update the field's valid state

    if (updateColor) {
        inputField.style.backgroundColor = isValid ? "#ccffcc" : "#ffcccc"; // Update field background color based on validity
    }

    console.log("Validating field:", inputField.name, "is valid:", isValid, "is required:", fieldConfig.required, "is in list:", isEmailInList);

    updateButtonStates(formId); // Update button states based on the form being validated
}

function updateButtonStates(formId) {
    var form = formConfig.find(f => f.form_id === formId);
    if (!form) return; // If no form configuration is found, exit the function

    var isFormValid = form.fields.every(field => field.valid); // Determine if all fields in the form are valid
    var allButtons = document.querySelectorAll("#wpforms-" + formId + " button");
    allButtons.forEach(button => button.disabled = !isFormValid); // Disable or enable the submit button based on form validity
}

// Setup event listeners for form fields
formConfig.forEach(function(form) {
    form.fields.forEach(function(field) {
        var selector = "#wpforms-" + form.form_id + "-field_" + field.field_id;
        var inputField = document.querySelector(selector);

        if (inputField) {
            inputField.addEventListener('input', function() {
                validateField(inputField, field, form.form_id);
            });
        }
    });
});

// Initial validation check for all fields on page load
document.addEventListener('DOMContentLoaded', function() {
    formConfig.forEach(function(form) {
        form.fields.forEach(function(field) {
            var selector = "#wpforms-" + form.form_id + "-field_" + field.field_id;
            var inputField = document.querySelector(selector);
            if (inputField) {
                validateField(inputField, field, form.form_id, false);
            }
        });
    });
});
