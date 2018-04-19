import dateFns from 'date-fns';


export const getCountryInfo = (item, param) => {
  const extracted = item[param] || null;

  return extracted;
};

export const convertToDate = (timeString) => {
  const date1 = new Date(timeString);

  return date1.toISOString();
};

export const getDateFormatted = (stringDate, format) => {
  const newDate = new Date(stringDate);
  const dateFormatted = dateFns.format(newDate, format);

  return dateFormatted;
};

/**
 * Birthday calculation
 *
 * @link https://stackoverflow.com/a/21984136/3332734
 * @param {*} stringDate
 */
export const calculateAge = (stringDate) => {
  const birthdate = new Date(stringDate).getTime();
  const today = Date.now();
  const ageDiffMs = today - birthdate;
  const ageDate = new Date(ageDiffMs);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
