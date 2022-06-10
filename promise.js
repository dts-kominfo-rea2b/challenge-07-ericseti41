const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (reaction) => {
  const ixx = await promiseTheaterIXX();
  const vgc = await promiseTheaterVGC();

  const ixxFiltered = ixx.filter((theater) => theater.hasil === reaction);
  const vgcFiltered = vgc.filter((theater) => theater.hasil === reaction);

  return ixxFiltered.length + vgcFiltered.length;
};

module.exports = {
  promiseOutput,
};
