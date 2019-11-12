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
                        :class="['icon', 'symbol', 'border', 'small', {'error': error}]"
                    ) {{ question }}
        
            div(
                class="columns is-centered is-mobile"
            )
                div(
                    class="column is-half is-relative button-wrapper"
                )   
                    button(
                        v-for="c in choices"
                        @click="checkAnswert(Object.keys(c)[0])"
                        class="button is-primary"
                    ) {{ Object.values(c)[0] }}

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

</template>

<script>
import _ from "lodash"

export default {
    props: {
        testData: Array
    },
    data(){
        return {
            question: null,
            answer: null,
            choices: [],
            error: false,
            success: 0,
            errorCount: 0,
        }
    },
    created(){
        this.getNewTestData();
    },
    methods: {

        /**
         * @description validates the answer
         * @returns {void}
         */
        checkAnswert(input) {
            if(input === this.answer) {
                this.success += 1;
                this.getNewTestData();
                this.userInput = "";
                this.error = false;
            } else {
                this.errorCount += 1;
                this.error = true;
            }
        },

        /**
         * @description setup new test data
         * @returns {void}
         */
        getNewTestData() {
            // get the correct question data
            let data = this.getRandomSelectedHiraganaCharacter();

            // create the mock array
            let falseData = [];

            // fill it with false values
            while(falseData.length < 4) {
                let falseChar = this.getRandomSelectedHiraganaCharacter();
                
                // check if it doesnt contain our correct data
                if(JSON.stringify(data) === JSON.stringify(falseChar)) continue;
                falseData.push(falseChar); 
            }

            // add the correct data to the false ones
            falseData.push(data)

            // shuffle
            this.choices = _.shuffle(falseData);
            
            // split the data to the answer and question variables
            this.answer = this.question = Object.keys(data)[0];
            // this.answer = Object.values(data)[0];
        },

        /**
         * @description gets a random select char object from the test data set
         * @returns {number}
         */
        getRandomSelectedHiraganaCharacter() {
            let randomInt = Math.floor(Math.random() * ((this.testData.length - 1) - 0 + 1)) + 0;
            return this.testData[randomInt];
        },
    }
}
</script>

<style lang="scss">
    .button-wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        & > *{
            margin: .5rem !important;
            font-size: 2rem;
            padding: .2rem;
            line-height: 0;
            display: block;
            height: 3.1rem;
        }
    }
</style>
