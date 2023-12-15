// function to replace templates with our json data
module.exports = (temp, bat) => {
  // variable to define and dynamically replace our templates with
  // regular expressions to match our templates globally and replace them with our data
  let output = temp.replace(/{%BAT_MANUFACTURER%}/g, bat.manufacturer);
  output = output.replace(/{%BAT_NAME%}/g, bat.batName);
  output = output.replace(/{%BAT_IMAGE%}/g, bat.image);
  output = output.replace(/{%BAT_MATERIAL%}/g, bat.material);
  output = output.replace(/{%BAT_LENGTH_WEIGHT%}/g, [bat.lengths, bat.weights]);
  output = output.replace(/{%BAT_BARREL_RADIUS%}/g, bat.barrel);

  output = output.replace(/{%BAT_ID%}/g, bat.id);
  return output;
};
