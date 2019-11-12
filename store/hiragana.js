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
    [
      {"kya":"きゃ"},
      {"kyu":"きゅ"},
      {"kyo":"きょ"},
    ],
    [
      {"sha":"しゃ"},
      {"shu":"しゅ"},
      {"sho":"しょ"},
    ],
    [
      {"nya":"にゃ"},
      {"nyu":"にゅ"},
      {"nyo":"にょ"},
    ], 
    [
      {"hya":"ひゃ"},
      {"hyu":"ひゅ"},
      {"hyo":"ひょ"},
    ],
    [
      {"mya":"みゃ"},
      {"myu":"みゅ"},
      {"myo":"みょ"}
    ],
    [
      {"rya":"りゃ"},
      {"ryu":"りゅ"},
      {"ryo":"りょ"},
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
}

export const getters = {
  getHiragana(state) {
    return state.hiragana
  },  
  
  getSelectedHiragana(state) {
    return state.selectedHiragana
  },

  
}