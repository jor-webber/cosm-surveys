<template>
  <v-dialog v-model="dialog" class="results-overlay">
    <v-card class="results-modal pa-3">
      <v-card-title class="text-h4">
        Your Results:
      </v-card-title>
      <v-card-subtitle>
        These results are separated into three scale values, followed by your PFDI-20 summary score below.
      </v-card-subtitle>
      <v-table density="comfortable" class="mt-5 mb-5">
        <thead>
          <tr>
            <th class="text-h6">
              Scale
            </th>
            <th class="text-h6 text-right">
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-subtitle-1">
              UDI-6
            </td>
            <td class="text-right text-subtitle-1">
              {{ roundedUdi }}
            </td>
          </tr>
          <tr>
            <td class="text-subtitle-1">
              CRADI-8
            </td>
            <td class="text-right text-subtitle-1">
              {{ roundedCradi }}
            </td>
          </tr>
          <tr>
            <td class="text-subtitle-1">
              POPDI-6
            </td>
            <td class="text-right text-subtitle-1">
              {{ roundedPodi }}
            </td>
          </tr>
          <tr>
            <td class="text-subtitle-1 font-weight-bold">
              Summary
            </td>
            <td class="text-right text-subtitle-1 font-weight-bold">
              {{ roundedSummary }}
            </td>
          </tr>
        </tbody>
      </v-table>
      <v-card-actions>
        <v-btn color="primary" block @click="dialog = false">Exit Results</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <form @submit.prevent="submitScores">
    <survey-block v-for="set in questions" :key="set.scale" :questions="set" @get-score="calculateScore" />
    <v-btn block color="black" type="submit" large outlined>Complete Survey</v-btn>
  </form>
</template>

<script>
import SurveyBlock from "./SurveyBlock.vue";
export default {
  components: {
    SurveyBlock,
  },
  data() {
    return {
      dialog: false,
      questions: [
        {
          scale: "UDI-6",
          questionSet: [
            {
              id: 1.1,
              query: "Usually experience frequent urination?",
            },
            {
              id: 1.2,
              query: "Usually experience urine leakage associated with a feeling of urgency, that is, a strong sensation of needing to go to the bathroom?",
            },
            {
              id: 1.3,
              query: "Usually experience urine leakage related to coughing, sneezing, or laughing?",
            },
            {
              id: 1.4,
              query: "Usually experience small amounts of urine leakage (that is, drops)?",
            },
            {
              id: 1.5,
              query: "Usually experience difficulty emptying your bladder? ",
            },
            {
              id: 1.6,
              query: "Usually experience pain or discomfort in the lower abdomen or genital region?",
            },
          ],
        },
        {
          scale: "CRADI-8",
          questionSet: [
            {
              id: 2.1,
              query: "Feel you need to strain too hard to have a bowel movement?",
            },
            {
              id: 2.2,
              query: "Feel you have not completely emptied your bowels at the end of a bowel movement?",
            },
            {
              id: 2.3,
              query: "Usually lose stool beyond your control if your stool is well formed?",
            },
            {
              id: 2.4,
              query: "Usually lose stool beyond your control if your stool is loose?",
            },
            {
              id: 2.5,
              query: "Usually lose gas from the rectum beyond your control?",
            },
            {
              id: 2.6,
              query: "Usually have pain when you pass your stool?",
            },
            {
              id: 2.7,
              query: "Experience a strong sense of urgency and have to rush to the bathroom to have a bowel movement?",
            },
            {
              id: 2.8,
              query: "Does part of your bowel ever pass through the rectum and bulge outside during or after a bowel movement?",
            },
          ],
        },
        {
          scale: "POPDI-6",
          questionSet: [
            {
              id: 3.1,
              query: "Usually experience pressure in the lower abdomen?",
            },
            {
              id: 3.2,
              query: "Usually experience heaviness or dullness in the pelvic area?",
            },
            {
              id: 3.3,
              query: "Usually have a bulge or something falling out that you can see or feel in your vaginal area?",
            },
            {
              id: 3.4,
              query: "Ever have to push on the vagina or around the rectum to have or complete a bowel movement?",
            },
            {
              id: 3.5,
              query: "Usually experience a feeling of incomplete bladder emptying?",
            },
            {
              id: 3.6,
              query: "Ever have to push up on a bulge in the vaginal area with your fingers to start or complete urination?",
            },
          ],
        },
      ],
      summaryScore: 0,
      udiScore: 0,
      cradiScore: 0,
      popdiScore: 0,
    };
  },
  methods: {
    /**
     * Add each block/scale's score to the correct running score for each scale
     * @param {*} blockScore - Object with the scale's name and its current score value
     */
    calculateScore(blockScore) {
      switch (blockScore.scale) {
        case "UDI-6":
          this.udiScore = blockScore.score;
          break;
        case "CRADI-8":
          this.cradiScore = blockScore.score;
          break;
        case "POPDI-6":
          this.popdiScore = blockScore.score;
          break;
        default:
          break;
      }
    },
    /**
     * Send the three scale scores to the database here, and then calculate summary score and display to user
     */
    submitScores() {
      this.summaryScore = this.udiScore + this.cradiScore + this.popdiScore;
      this.dialog = true;
      console.log(`UDI: ${this.udiScore}  |  CRADI: ${this.cradiScore}  |  POPDI: ${this.popdiScore}`)
    },
  },
  computed: {
    roundedUdi() {
      return Math.round(this.udiScore * 100) / 100 + " / 100";
    },
    roundedCradi() {
      return Math.round(this.cradiScore * 100) / 100 + " / 100";
    },
    roundedPodi() {
      return Math.round(this.popdiScore * 100) / 100 + " / 100";
    },
    roundedSummary() {
      return Math.round(this.summaryScore * 100) / 100 + " / 300";
    }
  }
};
</script>

<style scoped>
form {
  background-color: #F5F5F5;
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.results-overlay {
  background-color: rgb(0 0 0 / 25%);
}

.results-modal {
  background-color: white;
  border-radius: 15px;
  max-width: 400px;
}

.results-heading {
  font-size: 16px !important;
}

.results-table-row {
  font-size: 16px;
}

.summary-row {
  font-weight: bold;
}
</style>