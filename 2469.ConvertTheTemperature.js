let convertTemperature = function (celsius) {
  let res = [];
  let kelvin = parseFloat((celsius + 273.15).toFixed(5)) || 0;
  let fanhrenheit = parseFloat((celsius * 1.8 + 32.0).toFixed(5)) || 0;
  res.push(kelvin);
  res.push(fanhrenheit);
  return res;
};
