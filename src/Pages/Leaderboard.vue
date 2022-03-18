<template>
<div>
  
<b-table
      :items="this.leaders"
      :fields="fields"
      :select-mode="selectMode"
      responsive="sm"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"
    >
      <template v-slot:cell(FullName)="data">
        <a variant="primary">{{data.value}}</a>
      </template>

      <template v-slot:cell(TotalScore)="data">
        <a variant="primary">{{data.value}}</a>
      </template>

      <!-- Example scoped slot for select state illustrative purposes -->
      <!-- <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template> -->
    </b-table>
    <!-- <p>
      <b-button v-if="this.$root.store.username" size="sm" @click="addtofavorites"
        >Add to Favotires</b-button
      >
    </p> -->
</div>
</template>

<script>
export default {
  name: "LeaderboardPage",
date() {
    return {
    fields: [
        "selected",
        "FullName",
        "TotalScore",
      ],
    selected: [],
    leaders: this.leaders,
    selectMode: "single",
    }
},
methods: {
onRowSelected(items) {
    this.selected = items;
},
async uploadLeaders() {
      try {
        const response = await this.axios.get(
          `http://localhost:443/images/getLeaders`
        );

        this.leaders = response.data;
        // this.leaders = JSON.parse(response.data);
        console.log(this.leaders);
      } catch (err) {
        console.log(err.response);
      }
    },

},
created() {
    this.uploadLeaders();
}
}
</script>

<style>
button {
  margin: 2%;
  text-align: center;
}
p {
  text-align: center;
}
template {
  margin: 4%;
}
h3 {
  text-align: center;
}
#body{
  padding: 5%;
}
</style>