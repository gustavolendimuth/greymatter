/* eslint-disable no-underscore-dangle */
export default function getValuesByLanguage(data: any, langKey: string) {
  if (typeof data !== 'object' || data === null) {
    return data;
  }

  const keys = Object.keys(data);
  return keys.reduce((acc, key) => {
    const value = data[key];
    if (Array.isArray(value)) {
      const langValue = value.find((item) => item._key === langKey);
      if (langValue) {
        acc[key] = langValue.value;
      } else {
        // Return the 0th position if langKey is not found
        acc[key] = value[0]?.value || null;
      }
    } else {
      acc[key] = value;
    }
    return acc;
  }, {});
}
