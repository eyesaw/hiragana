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
            class="columns is-centered is-mobile"
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
                SingleInput(
                  v-if="testData"
                  :testData="testData"
                )

              template(
                v-else-if="mode == 1"
              )
                //- multiply choice
                MultipleChoice(
                  v-if="testData"
                  :testData="testData"
                )
    div(
        :class="['modal', {'is-active': modalStatus}]"
    )
        .modal-background(
            @click="toggleModal()"
        )
        .modal-card
            section(
                class="modal-card-body has-background-dark border"
            ) 
              SettingsPanel
        button(
            aria-label="close"
            class="modal-close"
            @click="toggleModal()"
        )
</template>

<script>
import SingleInput from '~/components/SingleInput.vue'
import MultipleChoice from '~/components/MultipleChoice.vue'
import SettingsPanel from '~/components/SettingsPanel.vue'

export default {
  components: {
    SingleInput,
    SettingsPanel,
    MultipleChoice
  },

  computed: {
    mode() {
      return this.$store.getters["settings/getMode"];
    }
  },
  data(){
      return {
          modalStatus: false,
          testData: null
      }
  },
  created(){
    this.$store.dispatch("hiragana/addHiragana");
    this.$store.dispatch("hiragana/addKatakana");
    this.testData = this.$store.getters["hiragana/getSelectedHiragana"]

    this.$store.watch(() => this.$store.getters["settings/getCharset"], (data) => this.allocateCharset(data));
  },
  methods: {
    allocateCharset(charsetData) {
      this.testData = [];
      charsetData.map(name => {
        let charset = this.$store.getters["hiragana/getSelected" + name];
        charset.map(item => {
          this.testData.push(item);
        });
      });
    },

    toggleModal() {
      this.modalStatus = !this.modalStatus;
    },
  }
}
</script>

<style>
  </style>
