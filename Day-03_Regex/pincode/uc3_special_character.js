function validatePIN(pin) {
    const pattern = /^[0-9]{5}[0-9]$/;
    console.log(`UC3-PIN Code: ${pin} ->`, pattern.test(pin));
}

validatePIN("400088B"); //Invalid
validatePIN("400088");  //Valid
