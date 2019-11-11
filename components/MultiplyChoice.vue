<template lang="pug">
    section(
        class="columns"
    )
        div(
            class="column"
        ) Multiply Choice {{ choices }}
            
</template>

<script>
export default {
    props: {
        testData: Array
    },
    data(){
        return {
            question: null,
            answer: null,
            choices: [],
            error:false,
            success: 0,
        }
    },
    created(){
        this.getNewTestData();
    },
    methods: {
        checkAnswert() {
            if(this.userInput.toLowerCase() === this.answer) {
                this.success += 1;
                this.getNewTestData();
                this.userInput = "";
                this.error = false;
            } else {
                this.errorCount += 1;
                this.error = true;
            }
        },

        getChoices(answer, data) {
            let returnArray = [answer];

            for (let i in 5) {
                returnArray.push(data[Math.floor(Math.random() * ((data.length - 1) - 0 + 1)) + 0])
            }
            
            return this.shuffle(returnArray);
        },
        /**
         * Shuffles array in place. ES6 version
         * @param {Array} a items An array containing the items.
         */
        shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        },

        getNewTestData() {
            let data = this.getRandomSelectedHiraganaCharacter();
            


            // this.answer = data[Object.keys(data)];
            // this.question = Object.keys(data)[0];
            // this.choices = this.getChoices(this.question, data);
            // this.error = false;
        },

        getRandomSelectedHiraganaCharacter(state) {
            let randomInt = Math.floor(Math.random() * ((this.testData.length - 1) - 0 + 1)) + 0;
            return this.testData[randomInt];
        },
    }
}
</script>

<style>

</style>
