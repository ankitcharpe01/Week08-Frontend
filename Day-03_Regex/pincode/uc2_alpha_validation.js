function validatePIN(pin) {
    const pattern = /^[0-9][0-9]{5}$/;
    console.log(`UC2-PIN Code: ${pin} ->`, pattern.test(pin));
}

validatePIN("A400088"); // Invalid
validatePIN("400088");  // Valid
