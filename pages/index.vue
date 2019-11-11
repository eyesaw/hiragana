<template lang="pug">
  main(
    class="has-background-dark has-text-light"
  ) 
    .container
      div(
        class="columns is-centered"
      )
        div(
          class="column is-one-third"
        )
          div(
            class="columns is-centered"
          )
            div(
              class="column is-narrow"
            )
              div(
                class="settings"
              )
                span(
                  class="icon is-small"
                )
                  span(
                    :class="['material-icons' , {'is-active': modalStatus}]"
                    @click="toggleModal"
                  ) settings
          div(
            class="columns is-centered is-mobile"
          )
            div(
              class="column is-narrow"
            )
              h1(
                class="title has-text-primary is-family-secondary"
              ) Learn Hiragana
                span(
                  class="subhead"
                ) ひらがなを学ぶ

          .columns
            .column
              template(
                v-if="mode == 0"
              ) 
                //- classic q/a
                TestField(
                  :testData="hiragana"
                )
              template(
                v-if-else="mode == 1"
              )
                //- multiply choice
                MultiplyChoice(
                  :testData="hiragana"
                )
    div(
        :class="['modal', {'is-active': modalStatus}]"
    )
        .modal-background(
            @click="toggleModal()"
        )
        .modal-card
            section(
                class="modal-card-body"
            ) 
              SettingsPanel
        button(
            aria-label="close"
            class="modal-close"
            @click="toggleModal()"
        )
</template>

<script>
import TestField from '~/components/TestField.vue'
import MultiplyChoice from '~/components/MultiplyChoice.vue'
import SettingsPanel from '~/components/SettingsPanel.vue'
import { mapMutations } from 'vuex';

export default {
  components: {
    TestField,
    SettingsPanel,
    MultiplyChoice
  },

  computed: {
    hiragana() {
      return this.$store.getters["hiragana/getSelectedHiragana"];
    },
    mode() {
      return this.$store.getters["settings/getMode"];
    }
  },
  data(){
      return {
          modalStatus: false,
      }
  },
  created(){
    let h = this.$store.getters["hiragana/getHiragana"];

    for (let i in h) {
      for (let x in h[i]) {
        this.$store.commit("hiragana/addSelectedHiragana", h[i][x])
      }
    }
  },

  methods: {
    toggleModal() {
      this.modalStatus = !this.modalStatus;
    },
  }
}
</script>

<style>
  main {
    height:100vh;
  }

</style>
