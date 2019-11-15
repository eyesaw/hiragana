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
  
  katakana: [
    [
      {"a": "ア"},
      {"ka": "カ"},
      {"sa": "サ"},
      {"ta": "タ"},
      {"na": "ナ"},
      {"ha": "ハ"},
      {"ma": "マ"},
      {"ya": "ヤ"},
      {"ra": "ラ"},
      {"wa": "ワ"},
    ],
    [
      {"i": "イ"},
      {"ki": "キ"},
      {"shi": "シ"},
      {"chi": "チ"},
      {"ni": "ニ"},
      {"hi": "ヒ"},
      {"mi": "ミ"},
      {"ri": "リ"},
      // {"wi": "ヰ"},
    ],
    [
      {"u": "ウ"},
      {"ku": "ク"},
      {"su": "ス"},
      {"tsu": "ツ"},
      {"nu": "ヌ"},
      {"fu": "フ"},
      {"mu": "ム"},
      {"yu": "ユ"},
      {"ru": "ル"},
    ],
    [
      {"e": "エ"},
      {"ke": "ケ"},
      {"se": "セ"},
      {"te": "テ"},
      {"ne": "ネ"},
      {"he": "ヘ"},
      {"me": "メ"},
      {"re": "レ"},
      // {"we": "ヱ"},
    ],
    [
      {"o": "オ"},
      {"ko": "コ"},
      {"so": "ソ"},
      {"to": "ト"},
      {"no": "ノ"},
      {"ho": "ホ"},
      {"mo": "モ"},
      {"yo": "ヨ"},
      {"ro": "ロ"},
      {"wo": "ヲ"},
    ],
    [
      {"n":"ン"}
    ],
    [
      {"ga":"ガ"},
      {"gi":"ギ"},
      {"gu":"グ"},
      {"ge":"ゲ"},
      {"go":"ゴ"}
    ],
    [
      {"za":"ザ"},
      {"ji":"ジ"},
      {"zu":"ズ"},
      {"ze":"ゼ"},
      {"zo":"ゾ"}
    ],
    [
      {"da":"ダ"},
      {"ji":"ヂ"},
      {"zu":"ヅ"},
      {"de":"デ"},
      {"do":"ド"},
    ],
    [
      {"ba":"バ"},
      {"bi":"ビ"},
      {"bu":"ブ"},
      {"be":"ベ"},
      {"bo":"ボ"}
    ],
    [
      {"pa":"パ"},
      {"pi":"ピ"},
      {"pu":"プ"},
      {"pe":"ペ"},
      {"po":"ポ"}
    ],
    [
      {"kya":"キャ"},
      {"kyu":"キュ"},
      {"kyo":"キョ"},
    ],
    [
      {"sha":"シャ"},
      {"shu":"シュ"},
      {"sho":"ショ"},
    ], 
    [
      {"cha":"チャ"},
      {"chu":"チュ"},
      {"cho":"チョ"},
    ],
    [
      {"nya":"ニャ"},
      {"nyu":"ニュ"},
      {"nyo":"ニョ"},
    ], 
    [
      {"hya":"ヒャ"},
      {"hyu":"ヒュ"},
      {"hyo":"ヒョ"},
    ],
    [
      {"mya":"ミャ"},
      {"myu":"ミュ"},
      {"myo":"ミョ"}
    ],
    [
      {"rya":"リャ"},
      {"ryu":"リュ"},
      {"ryo":"リョ"},
    ],
  ],

  selectedHiragana: [],

  selectedKatakana: []
})

export const actions = {

  /**
   * @description add the selected katakana to the store
   * @param {*} param0 
   * @returns {void}
   */
  addKatakana({ commit, getters }) {
    let h = getters["getKatakana"];

    for (let i in h) {
      for (let x in h[i]) {
        commit("addSelectedKatakana", h[i][x])
      }
    }
  }, 

  /**
   * @description add the selected hiragana to the store
   * @param {*} param0 
   * @returns {void}
   */
  addHiragana({ commit, getters }) {
    let h = getters["getHiragana"];

    for (let i in h) {
      for (let x in h[i]) {
        commit("addSelectedHiragana", h[i][x])
      }
    }
  }
}
  
export const mutations = {
  setSelectedHiragana(state, selectedCharacters) {
    state.selectedHiragana = selectedCharacters;
  },

  addSelectedHiragana(state, selectedCharacter) {
    state.selectedHiragana.push(selectedCharacter);
  },
  
  setSelectedKatakana(state, selectedCharacters) {
    state.selectedKatakana = selectedCharacters;
  },

  addSelectedKatakana(state, selectedCharacter) {
    state.selectedKatakana.push(selectedCharacter);
  },
}

export const getters = {
  getHiragana(state) {
    return state.hiragana
  },

  getKatakana(state) {
    return state.katakana
  },  
  
  getSelectedHiragana(state) {
    return state.selectedHiragana
  },
  
  getSelectedKatakana(state) {
    return state.selectedKatakana
  }
}