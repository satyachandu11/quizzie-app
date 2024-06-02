const titleCaseConversion = (str) => {
  if (!str) return "";
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
};

module.exports = titleCaseConversion;
