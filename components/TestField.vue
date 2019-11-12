<template lang="pug">
    section(
        class="columns"
    )
        div(
            class="column"
        )
            div(
                class="columns is-centered is-mobile"
            )
                div(
                    class="column is-narrow"
                )
                    div(
                        :class="['icon', 'symbol', 'border', {'error': error}, {'small': (question.length > 1)}]"
                    ) {{ question }}

            div(
                class="columns is-centered is-mobile"
            )
                div(
                    class="column is-half is-relative"
                )
                    input(
                        :class="['input', 'is-primary', 'has-background-black-bis', 'has-text-white', {'error': error}]"
                        type="text" v-model="userInput"
                    )

                    span(
                        :class="['check-icon', 'material-icons' , {'visible': checkClass}]"
                    ) done

            div(
                class="columns is-centered is-mobile"
            )
                div(
                    class="column is-narrow"
                )
                    button(
                        @click="toggleModal()"
                        class="button is-primary"
                    ) Peek
                div(
                    class="column is-narrow"
                )
                    button(
                        class="button is-primary"
                        @click="getNewTestData()"
                    ) New
            div(
                class="columns is-centered is-mobile"
            )
                div(
                    class="column is-narrow"
                )
                    p(
                        class="bd-notification has-text-primary"
                    ) Success: {{ success }}
                div(
                    class="column is-narrow"
                )
                    p(
                        class="bd-notification error"
                    ) Error: {{ errorCount }}

        div(
            :class="['modal', {'is-active': modalStatus}]"
        )
            .modal-background(
                @click="toggleModal()"
            )
            .modal-card
                section(
                    class="modal-card-body"
                ) the answer is ... 
                    b {{ answer }}
            button(
                aria-label="close"
                class="modal-close"
                @click="toggleModal()"
            )
</template>

<script>
export default {
    props: {
        testData: Array
    },
    watch: {
        userInput(data) {
            this.checkAnswer();
        }
    },
    data(){
        return {
            question: null,
            answer: null,
            userInput: "",
            errorCount: 0,
            success: 0,
            modalStatus: false,
            error: false,
            checkClass: false,
        }
    },
    created(){
        this.getNewTestData();
    },
    methods: {
        toggleModal() {
            this.modalStatus = !this.modalStatus;
        },

        async checkIconTimer(){
            this.checkClass = true;
            setTimeout(() => {
                this.checkClass = false;
            },1000);
        },

        checkAnswer() {
            if(this.userInput.toLowerCase() === this.answer) {
                this.success += 1;
                this.getNewTestData();
                this.userInput = "";
                this.error = false;
                this.checkIconTimer();
                return 
            }

            if(this.userInput.length === this.answer.length) {
                this.errorCount += 1;
                this.error = true;
                return
            }
        },

        getNewTestData() {
            let data = this.getRandomSelectedHiraganaCharacter();
            this.question = data[Object.keys(data)];
            this.answer = Object.keys(data)[0];
            this.error = false;
            this.checkClass = false;
        },

        getRandomSelectedHiraganaCharacter(state) {
            let randomInt = Math.floor(Math.random() * ((this.testData.length - 1) - 0 + 1)) + 0;
            return this.testData[randomInt];
        },
    }
}
</script>

<style lang="scss">
    
</style>
