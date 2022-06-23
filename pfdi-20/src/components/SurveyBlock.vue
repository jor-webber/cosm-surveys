<template>
    <div class="scale-headline">
        <v-card-subtitle>{{ questions.scale }}</v-card-subtitle>
        <v-divider></v-divider>
    </div>
    <question-item :scale="questions.scale" v-for="questionItem in questions.questionSet" :key="questionItem.id"
        :question="questionItem" @get-score="calculateBlockScore" />
</template>

<script>
import QuestionItem from "./QuestionItem.vue";
export default {
    props: ["questions"],
    emits: ['get-score'],
    components: {
        QuestionItem,
    },
    data() {
        return {
            scaleName: this.questions.scale,
            score: 0,
        };
    },
    methods: {
        /**
         * Updates the score value for this block, then emits it to the parent
         * 
         * @param {*} questionScore - Object containing the root question's previous value, current value, and scale
         */
        calculateBlockScore(questionScore) {
            this.prevScore = this.score;
            this.score -= questionScore.prevScore;
            this.score += questionScore.newScore;
            console.log(`Blockscore for ${this.scaleName}: ${this.score}`);
            // Calc mean value for block, then multiply by 25
            let blockScore = this.score / this.questions.questionSet.length;
            blockScore = blockScore * 25;
            this.$emit("get-score", {
                score: blockScore,
                scale: this.scaleName
            });
        },
    },
};
</script>

<style scoped>
.scale-headline {
    color: #7c7c7c;
    display: flex;
    align-items: center;
    font-weight: bold;
}
</style>