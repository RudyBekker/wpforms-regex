//todo: realtime adjustment if email is matched and then unique to replace old button,.... but chances are if match is found, then eeven after calibaration still redirect

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

// Function to setup email validation and replace button upon match
function setupEmailValidationAndReplaceButton(form) {
    // Delay execution to ensure form elements are fully loaded
    setTimeout(function() {
        // Find the email input field
        var emailInputSelector = `form[id*="wpforms-form-${form.form_id}"] input[type="email"]`;
        var emailInput = document.querySelector(emailInputSelector);

        // Find the original button
        var originalButtonSelector = `.wpforms-page-next[data-formid="${form.form_id}"]`;
        var originalButton = document.querySelector(originalButtonSelector);

        if (emailInput && originalButton) { // Ensure both elements exist
            var buttonReplaced = false; // Flag to prevent multiple replacements

            // Email input field event listener to check for email match
            emailInput.addEventListener('input', function() {
                var emailValue = emailInput.value.trim();
                if (!buttonReplaced && emailLists[form.form_id] && emailLists[form.form_id].includes(emailValue)) {
                    // Email match found: Replace original button with custom button
                    buttonReplaced = true; // Set flag to true to prevent future replacements

                    // Create custom button
                    var customButton = document.createElement('button');
                    customButton.textContent = "Submit"; // Customize as needed
                    customButton.className = originalButton.className;
                    customButton.addEventListener('click', function(e) {
                        e.preventDefault(); // Prevent form submission
                        window.location.href = redirectUrls[form.form_id]; // Redirect
                    });

                    // Insert and remove buttons
                    originalButton.parentNode.insertBefore(customButton, originalButton);
                    originalButton.remove();
                }
            });
        } else {
            console.error("Form or email input not found for form_id: ", form.form_id);
        }
    }, 1000); // Adjust delay as needed based on when your forms are fully loaded
}

document.addEventListener('DOMContentLoaded', function() {
    formConfig.forEach(setupEmailValidationAndReplaceButton);
});
