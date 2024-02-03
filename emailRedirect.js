// Email lists and redirect URLs associated with each form by form_id
var emailLists = {
    322: ["rudy@rudybekker.com", "email2@example.com"], // ES TEST
    130: ["rudy@rudybekker.com", "email4@example.com"], // ES Prod
    410: ["rudy@rudybekker.com", "email6@example.com"], // DE
    346: ["rudy@rudybekker.com", "email8@example.com"]  // UK Unbiased
    // Add more form_id and email list pairs as needed
};

var redirectUrls = {
    322: "http://example.com/redirect322", // ES TEST
    130: "http://example.com/redirect130", // ES Prod
    410: "http://example.com/redirect410", // DE
    346: "http://example.com/redirect346"  // UK Unbiased
    // Add more form_id and redirect URL pairs as needed
};

// Function to check the email against the list and redirect if there's a match
function checkEmailForRedirect(formId, email) {
    if (emailLists[formId] && emailLists[formId].includes(email)) {
        console.log(`Email match found for ${email} in form ${formId}. Redirecting...`);
        window.location.href = redirectUrls[formId]; // Redirect if the email is in the list
    } else {
        console.log(`No email match found for ${email} in form ${formId}.`);
    }
}

// Event listener setup for real-time email field input check
document.addEventListener('DOMContentLoaded', function() {
    formConfig.forEach(function(form) {
        var formElement = document.querySelector(`#wpforms-${form.form_id}`);
        if (formElement) {
            console.log(`Form matched: #wpforms-${form.form_id}`);
            form.fields.forEach(function(field) {
                if (field.name.toLowerCase() === "email") { // Check if the field is for email
                    var inputField = formElement.querySelector(`#wpforms-${form.form_id}-field_${field.field_id}`);
                    if (inputField) {
                        inputField.addEventListener('input', function() {
                            checkEmailForRedirect(form.form_id, inputField.value.trim());
                        });
                    }
                }
            });
        } else {
            console.log(`Form not matched or not found: #wpforms-${form.form_id}`);
        }
    });
});
