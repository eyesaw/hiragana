export const state = () => ({
  hiragana: [
    [
      {"a": "あ"},
      {"ka": "か"},
      {"sa": "さ"},
      {"ta": "た"},
      {"na": "な"},
      {"ha": "は"},
      {"ma": "ま"},
      {"ya": "や"},
      {"ra": "ら"},
      {"wa": "わ"},
    ],
    [
      {"i": "い"},
      {"ki": "き"},
      {"shi": "し"},
      {"chi": "ち"},
      {"ni": "に"},
      {"hi": "ひ"},
      {"mi": "み"},
      {"ri": "り"},
      // {"wi": "ゐ"},
    ],
    [
      {"u": "う"},
      {"ku": "く"},
      {"su": "す"},
      {"tsu": "つ"},
      {"nu": "ぬ"},
      {"fu": "ふ"},
      {"mu": "む"},
      {"yu": "ゆ"},
      {"ru": "る"},
    ],
    [
      {"e": "え"},
      {"ke": "け"},
      {"se": "せ"},
      {"te": "て"},
      {"ne": "ね"},
      {"he": "へ"},
      {"me": "め"},
      {"re": "れ"},
      // {"we": "ゑ"},
    ],
    [
      {"o": "お"},
      {"ko": "こ"},
      {"so": "そ"},
      {"to": "と"},
      {"no": "の"},
      {"ho": "ほ"},
      {"mo": "も"},
      {"yo": "よ"},
      {"ro": "ろ"},
      {"wo": "を"},
    ],
    [
      {"n":"ん"}
    ],
    [
      {"ga":"が"},
      {"gi":"ぎ"},
      {"gu":"ぐ"},
      {"ge":"げ"},
      {"go":"ご"}
    ],
    [
      {"za":"ざ"},
      {"ji":"じ"},
      {"zu":"ず"},
      {"ze":"ぜ"},
      {"zo":"ぞ"}
    ],
    [
      {"da":"だ"},
      {"ji":"ぢ"},
      {"zu":"づ"},
      {"de":"で"},
      {"do":"ど"},
    ],
    [
      {"ba":"ば"},
      {"bi":"び"},
      {"bu":"ぶ"},
      {"be":"べ"},
      {"bo":"ぼ"}
    ],
    [
      {"pa":"ぱ"},
      {"pi":"ぴ"},
      {"pu":"ぷ"},
      {"pe":"ぺ"},
      {"po":"ぽ"}
    ],
  ],

  selectedHiragana: []
})
  
export const mutations = {
  setSelectedHiragana(state, selectedCharacters) {
    state.selectedHiragana = selectedCharacters;
  },

  addSelectedHiragana(state, selectedCharacter) {
    state.selectedHiragana.push(selectedCharacter);
  },

  removeSelectedHiragana(state, selectedCharacter) {
    // Todo: state.selectedHiragana.push(selectedCharacter);
  }
}

export const getters = {
  getHiragana(state) {
    return state.hiragana
  },
  
  // getHiraganaCharacter(state, id) {
  //   for (let i in state.hiragana) {
  //     for (let o in state.hiragana[i]) {
  //       console.log(state.hiragana[i][o])
  //     }
  //   }
  // },

  
  
  getSelectedHiragana(state) {
    return state.selectedHiragana
  },

  
}