// Define the configuration for forms and fields
var formConfig = [
    {
        form_id: 322, // ES TEST
        fields: [
            {
                field_id: 37,
                name: "vorname",
                required: true,
                regex: /^[A-Za-zäöüÄÜÖáàéèíìóòôúùûñÇç°ª.,\-\s]+$/i
            },
            {
                field_id: 38,
                name: "name",
                required: true,
                regex: /^[A-Za-zäöüÄÜÖáàéèíìóòôúùûñÇç°ª.,\-\s]+$/i
            },
            {
                field_id: 1,
                name: "Email",
                required: true,
                regex: /([_\.0-9a-z-+]*?[aeiou][_\.0-9a-z-+]*?[b-df-hj-np-tv-z][_\.0-9a-z-+]*|[_\.0-9a-z-+]*?[b-df-hj-np-tv-z][_\.0-9a-z-+]*?[aeiou][_\.0-9a-z-+]*)@([0-9a-z][0-9a-z-]+\.)+[a-z]{2,63}$/i
            },
            {
                field_id: 27,
                name: "telefoon",
                required: true,
                regex: /^$|^[0-9]{9,9}$/i
            },
            {
                field_id: 21,
                name: "hausnr",
                required: true,
                regex: /^([0-9]{1,4}[\s]?([a-z]?|bis)|s\/n)$/i
            },
            {
                field_id: 20,
                name: "strasse",
                required: true,
                regex: /^[A-Za-z0-9äöüÄÜÖáàéèíìóòôúùûñÇç°ª,\.\-\s]+$/i
            },
            {
                field_id: 24,
                name: "plz",
                required: true,
                regex: /^([0-9]{5,5})$/
            },
            {
                field_id: 23,
                name: "adresszusatz",
                required: false,
                regex: /^[0-9]{1,4}[\s]?[A-Za-zäöüÄÜÖáàéèíìóòôúùûñÇç°ª]?$/i
            }
            // Add more fields as needed
        ]
    }
    // Add more forms as needed
];

var isAnyFieldInvalid = false; // Flag to track if any field is invalid

function validateField(inputField, regexPattern, isRequired) {
    var isFieldFilled = inputField.value.trim() !== '';
    var isFieldValid = regexPattern.test(inputField.value);
    var isValid = !isRequired || (isFieldFilled && isFieldValid) || (!isFieldFilled && !isRequired);

    inputField.style.backgroundColor = isValid ? "#ccffcc" : "#ffcccc"; // light green for valid, light red for invalid
    console.log("Validating field:", inputField.id, "is valid:", isValid, "is required:", isRequired);

    // Update the invalid field flag
    isAnyFieldInvalid = !isValid || isAnyFieldInvalid;

    updateButtonStates(); // Check and update button states after each validation
}

function updateButtonStates() {
    var allButtons = document.querySelectorAll("#wpforms-" + formConfig[0].form_id + " button");
    allButtons.forEach(button => button.disabled = isAnyFieldInvalid);
}

formConfig.forEach(function(form) {
    form.fields.forEach(function(field) {
        var selector = "#wpforms-" + form.form_id + "-field_" + field.field_id;
        var inputField = document.querySelector(selector);

        if (inputField) {
            inputField.addEventListener('input', function() {
                // Reset the invalid field flag before each validation
                isAnyFieldInvalid = false;
                validateField(inputField, field.regex, field.required);
            });
        }
    });
});

// Perform an initial validation check on all fields
document.addEventListener('DOMContentLoaded', function() {
    formConfig.forEach(function(form) {
        form.fields.forEach(function(field) {
            var selector = "#wpforms-" + form.form_id + "-field_" + field.field_id;
            var inputField = document.querySelector(selector);
            if (inputField) {
                validateField(inputField, field.regex, field.required);
            }
        });
    });
});
