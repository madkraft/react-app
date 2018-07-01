const endPoint =
  'https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json'

export default {
  data: {
    get: () => fetch(endPoint).then(res => res.json())
  }
}
