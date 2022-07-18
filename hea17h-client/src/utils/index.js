const convertDate = string => (string || '').split('T')[0].replace(/-/g, '.');

export default convertDate;
