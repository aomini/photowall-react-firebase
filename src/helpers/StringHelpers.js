const StringHelpers = {
  _capitalizeFirstLetter: string => {
    return (
      (string && string.replace(/^[a-z]/i, match => match.toUpperCase())) || ""
    );
  }
};

export default StringHelpers;
