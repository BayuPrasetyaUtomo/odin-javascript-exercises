const palindromes = function (text) {
  const filtered = text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{1,}/g, "");

  const reversed = filtered.split("").reverse().join("")
  
  return filtered === reversed;
};

// Do not edit below this line
module.exports = palindromes;
