function validatePIN(pin) {
    const pattern = /^[0-9]{6}$/;
    console.log(`UC1-PIN Code: ${pin} ->`, pattern.test(pin));
}

validatePIN("400088"); //valid
validatePIN("40008A"); //Invalid
 