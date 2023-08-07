const validateStrongPassword = (password: string): boolean => {
  const scores = {
    length: 0,
    upperChar: 0,
    lowerChar: 0,
    number: 0,
    specialChar: 0,
  };

  for (const char of password) {
    // convert char into ASCII
    const charASCII = char.charCodeAt(0);

    // A-Z: 65 - 90
    if (charASCII > 64 && charASCII < 91) {
      scores.upperChar += 1;
      // a-z: 97 - 122
    } else if (charASCII > 96 && charASCII < 123) {
      scores.lowerChar += 1;
      // 0 - 9: 48-57
    } else if (charASCII > 47 && charASCII < 58) {
      scores.number += 1;
      // s"#$%&'()*+,-./ : 33-47, :;<=>?@: 58 - 64, [\]^_` : 91-96,  {|}~.: 123 - 126
    } else if (
      (charASCII > 32 && charASCII < 48) ||
      (charASCII > 57 && charASCII < 65) ||
      (charASCII > 90 && charASCII < 97) ||
      (charASCII > 122 && charASCII < 127)
    ) {
      scores.specialChar += 1;
    }
    scores.length += 1;
  }

  return scores.length < 8 ||
    scores.upperChar < 1 ||
    scores.lowerChar < 1 ||
    scores.number < 1 ||
    scores.specialChar < 1
    ? false
    : true;
};

export default validateStrongPassword;
