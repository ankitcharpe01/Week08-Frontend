function validatePIN(pin) {
    const pattern = /^[0-9]{3}\s?[0-9]{3}$/;
    console.log(`UC4-PIN Code: ${pin} ->`, pattern.test(pin));
}

validatePIN("400 088"); //Valid
validatePIN("400088");  //Valid
validatePIN("400A88");  //Invalid
