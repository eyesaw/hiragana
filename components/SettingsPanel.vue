<template lang="pug">
    section(
        class="columns"
    )
        div(
            class="column"
        )
            h1(
                class="title has-text-white"
            ) Settings

            section(
                class="columns"
            )
                div(
                    class="column"
                )
                    h4 Mode 
                    .switch
                        label(
                            id="mode_0"
                        )   default
                            input(
                                for="mode_0"
                                type="radio"
                                value="0"
                                v-model="mode"
                                name="mode"
                            )
                            .switch-box.border
                                .switch-toggle(
                                    :class="[{'active': (mode == 0) }]"
                                )
                    .switch
                        label(
                            id="mode_1"
                        )   multiple choice
                            input(
                                for="mode_1"
                                type="radio"
                                value="1"
                                v-model="mode"
                                name="mode"
                            )
                            .switch-box.border
                                .switch-toggle(
                                    :class="[{'active': (mode == 1) }]"
                                )
                div(
                    class="column"
                )
                    h4 Charset
                    .switch
                        label(
                            id="charset_0"
                        )   Hiragana
                            input(
                                for="charset_0"
                                type="checkbox"
                                value="Hiragana"
                                v-model="computedCharset"
                                name="charset"
                            )
                            .switch-box.border
                                .switch-toggle(
                                    :class="[{'active': charsetHiragana }]"
                                )
                    .switch
                        label(
                            id="charset_1"
                        )   Katakana
                            input(
                                for="charset_1"
                                type="checkbox"
                                value="Katakana"
                                v-model="computedCharset"
                                name="charset"
                            )
                            .switch-box.border
                                .switch-toggle(
                                    :class="[{'active': charsetKatakana }]"
                                )
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    components: {
    },
    watch: {
        mode(mode){
            this.$store.commit("settings/setMode", mode);
        },
        
        charset(charset){            
            this.$store.commit("settings/setCharset", charset);
        }
    },
    computed: {
        charsetHiragana() {
            return this.charset.includes("Hiragana");
        },
        
        charsetKatakana() {
            return this.charset.includes("Katakana");
        },
        computedCharset: {
            get: function() {
                return this.charset;
            },

            set: function(value) {
                if(value.length < 1) return;
                this.charset = value;
            }
        }
    },
    data(){
        return {
            mode: 0,
            charset: ["Hiragana"]
        }
    },
    methods: {
    }
}
</script>

<style>

</style>
