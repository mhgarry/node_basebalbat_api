// using regular expression to replace our templates
module.exports = (temp, bat) => {
  let output = temp.replace(/{%BAT_MANUFACTURER%}/g, bat.manufacturer);
  output = output.replace(/{%BAT_NAME%}/g, bat.batName);
  output = output.replace(/{%BAT_IMAGE%}/g, bat.image);
  output = output.replace(/{%BAT_MATERIAL%}/g, bat.material);
  output = output.replace(/{%BAT_CERTIFICATION%}/g, bat.certification);
  output = output.replace(/{%BAT_BARREL_RADIUS%}/g, bat.barrel);
  // mapping over all of our drop down length and weight options and looping through each and then turning them into html to populate our dropdown list
  const optionsHtml = bat.lengths
    .map((length, index) => {
      const weight = bat.weights[index];
      return `<option value="${length}-${weight}">${length} - ${weight}</option>`;
    })
    .join('');

  output = output.replace(/{%BAT_SIZE_OPTIONS%}/g, optionsHtml);

  output = output.replace(/{%BAT_ID%}/g, bat.id);
  output = output.replace(/{%BAT_DESCRIPTION%}/g, bat.description);
  output = output.replace(/{%BAT_LINK%}/g, bat.link);
  return output;
};
