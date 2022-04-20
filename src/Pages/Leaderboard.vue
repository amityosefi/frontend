<template>
<div>

    <b-table
      :items="this.leaders"
      :fields="fields"
      class="lead"
    ></b-table>

</div>
</template>

<script>
export default {
  name: "LeaderboardPage",
data() {
    return {
        sortBy: 'TotalScore',
        sortDesc: false,
        fields: [
          { key: 'FullName', label: 'Name'},
          { key: 'TotalScore', label: 'Score'},
        ],
        // fields: ['FullName', 'TotalScore'],
        selected: [],
        leaders: [],
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
        // console.log(this.leaders);
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

.lead {
    margin: 0 auto;
    margin-top: 20px;
    font-size: 16px;
    width: 900px;
    /* height: 1000px; */
}
</style>