<template lang="pug">
    section(
        class="columns"
    )
        div(
            class="column"
        )
            h1(
                class="title"
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
                        )   default mode
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
                        )   multiple choice mode
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
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    components: {
    },
    props: {
        hiraganaData: Array  
    },
    watch: {
        mode(data){
            this.$store.commit("settings/setMode", data);
        }
    },
    data(){
        return {
            mode: 0
        }
    },
    methods: {
    }
}
</script>

<style>

</style>
