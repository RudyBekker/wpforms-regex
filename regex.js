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

// Initialize the valid property based on whether the field is required
// Initialize all fields as valid initially
formConfig.forEach(function(form) {
    form.fields.forEach(function(field) {
        field.valid = true; // Start with all fields as valid
    });
});

function validateField(inputField, fieldConfig, isRequired, updateColor = true) {
    var isFieldFilled = inputField.value.trim() !== '';
    var isFieldValid = fieldConfig.regex.test(inputField.value);
    var isValid = (isRequired && isFieldFilled && isFieldValid) || (!isRequired);

    fieldConfig.valid = isValid; // Update the valid property of the field

    if (updateColor) {
        inputField.style.backgroundColor = isValid ? "#ccffcc" : "#ffcccc";
    }

    console.log("Validating field:", inputField.id, "is valid:", isValid, "is required:", isRequired);

    updateButtonStates();
}

function updateButtonStates() {
    formConfig.forEach(function(form) {
        var isFormValid = form.fields.every(field => field.valid); // Check if all fields are valid
        var allButtons = document.querySelectorAll("#wpforms-" + form.form_id + " button");
        allButtons.forEach(button => button.disabled = !isFormValid);
    });
}

formConfig.forEach(function(form) {
    form.fields.forEach(function(field) {
        var selector = "#wpforms-" + form.form_id + "-field_" + field.field_id;
        var inputField = document.querySelector(selector);

        if (inputField) {
            inputField.addEventListener('input', function() {
                validateField(inputField, field, field.required);
            });
        }
    });
});
