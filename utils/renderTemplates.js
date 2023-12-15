module.exports = (temp, bat) => {
  let output = temp.replace(/{%BAT_MANUFACTURER%}/g, bat.manufacturer);
  output = output.replace(/{%BAT_NAME%}/g, bat.batName);
  output = output.replace(/{%BAT_IMAGE%}/g, bat.image);
  output = output.replace(/{%BAT_MATERIAL%}/g, bat.material);
  output = output.replace(/{%BAT_CERTIFICATION%}/g, bat.certification);
  output = output.replace(/{%BAT_BARREL_RADIUS%}/g, bat.barrel);

  const optionsHtml = bat.lengths
    .map((length, index) => {
      const weight = bat.weights[index];
      return `<option value="${length}-${weight}">${length} - ${weight}</option>`;
    })
    .join('');

  output = output.replace(/{%BAT_SIZE_OPTIONS%}/g, optionsHtml);

  output = output.replace(/{%BAT_ID%}/g, bat.id);
  return output;
};
