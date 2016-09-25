<template>
  <div class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
    <mdl-button class="randSpeciesBtn" v-mdl-ripple-effect colored icon raised v-on:click="fetchRandomSpecies">
      <i class="material-icons">public</i> Random species
    </mdl-button>
    <mdl-textfield data-qa="nameTextbox" floating-label="Name" :value.sync="speciesData.name"></mdl-textfield>
    <mdl-textfield data-qa="modelTextbox" floating-label="Classification" :value.sync="speciesData.classification"></mdl-textfield>
    <mdl-textfield data-qa="manufacturerTextbox" floating-label="Designation" :value.sync="speciesData.designation"></mdl-textfield>
    <mdl-textfield data-qa="costInCreditsTextbox" floating-label="Average Height" :value.sync="speciesData.average_height"></mdl-textfield>
    <mdl-textfield data-qa="lengthTextbox" floating-label="Skin Colors" :value.sync="speciesData.skin_colors"></mdl-textfield>
    <mdl-textfield data-qa="maxAtmosTextbox" floating-label="Hair Colors" :value.sync="speciesData.hair_colors"></mdl-textfield>
    <mdl-textfield data-qa="crewTextbox" floating-label="Eye Colors" :value.sync="speciesData.eye_colors"></mdl-textfield>
    <mdl-textfield data-qa="passengersTextbox" floating-label="Average Lifespan" :value.sync="speciesData.average_lifespan"></mdl-textfield>
    <mdl-textfield data-qa="consumablesTextbox" floating-label="Language" :value.sync="speciesData.language"></mdl-textfield>
  </div>
</template>

<script>
import { MdlButton, MdlTextfield, directives } from 'vue-mdl';
import species from '../api/species';

export default {
  components: {
    MdlButton,
    MdlTextfield,
  },
  directives,
  data() {
    return {
      speciesData: {
        name: '',
        classification: '',
        designation: '',
        average_height: '',
        skin_colors: '',
        hair_colors: '',
        eye_colors: '',
        average_lifespan: '',
        language: '',
      },
    };
  },
  methods: {
    fetchRandomSpecies() {
      const randomSpeciesId = Math.floor((Math.random() * 37) + 1);
      species.fetch(randomSpeciesId).then((speciesData) => {
        this.speciesData = Object.assign(this.speciesData, speciesData);
      });
    },
  },
};
</script>
