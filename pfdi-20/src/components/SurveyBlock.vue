<template>
        <div class="scale-headline">
            <v-card-subtitle>{{ questions.scale }}</v-card-subtitle>
            <v-divider></v-divider>
        </div>
    <question-item v-for="questionItem in questions.questionSet" :key="questionItem.id" :question="questionItem"
        @get-score="calculateBlockScore" />
</template>

<script>
import QuestionItem from "./QuestionItem.vue";
export default {
    props: ["questions"],
    components: {
        QuestionItem,
    },
    data() {
        return {
            blockScore: 0,
            prevScore: 0,
        };
    },
    methods: {
        // Calculate the scale/block part of the formula here before passing to the form
        calculateBlockScore(questionScore) {
            this.prevScore = this.blockScore;
            this.blockScore -= questionScore.prevScore;
            this.blockScore += questionScore.newScore;
            console.log(this.blockScore);
            this.$emit("get-score", {
                prevScore: this.prevScore,
                newScore: this.blockScore,
            });
        },
    },
};
</script>

<style scoped>
.scale-headline {
    display: flex;
    align-items: center;
}
</style>