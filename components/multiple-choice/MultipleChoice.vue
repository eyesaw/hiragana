<template lang="pug">
    include ./MultipleChoice.pug
</template>

<script src="./MultipleChoice.js"></script>

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
