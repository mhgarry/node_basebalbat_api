// // function to replace templates with our json data
// module.exports = (temp, bat) => {
//   // variable to define and dynamically replace our templates with
//   // regular expressions to match our templates globally and replace them with our data
//   let output = temp.replace(/{%BAT_MANUFACTURER%}/g, bat.manufacturer);
//   output = output.replace(/{%BAT_NAME%}/g, bat.batName);
//   output = output.replace(/{%BAT_IMAGE%}/g, bat.image);
//   output = output.replace(/{%BAT_MATERIAL%}/g, bat.material);

//   for (let i = 0; i < bat.lengths.length; i++) {
//     const currentLength = bat.lengths[i];

//     output = output.replace(/{{ length }}/g, currentLength);
//   }
//   for (let i = 0; i < bat.weights.length; i++) {
//     const currentWeight = bat.weights[i];

//     output = output.replace(/{{ weight }}/g, currentWeight);
//   }
//   output = output.replace(/{%BAT_BARREL_RADIUS%}/g, bat.barrel);

//   output = output.replace(/{%BAT_ID%}/g, bat.id);
//   return output;
// };
// // function to replace templates with our json data
