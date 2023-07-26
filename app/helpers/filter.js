function filterArray(json, lookingFor) {
  return lookingFor == "home"
    ? json.filter((element) => element.id.indexOf(`${lookingFor}`) == 0)
    : json.filter((element) => element.link.indexOf(`${lookingFor}`) >= 1);
}

export default {
  filterArray,
};
