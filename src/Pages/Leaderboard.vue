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
          { key: 'Index', label: 'Index'},
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
        
        let user_index = -1;
        let user_score = -1;
        let username = this.$root.store.fullname;
        console.log(username);
        for (let i=0; i<this.leaders.length; i++) {
          if (this.leaders[i].FullName.localeCompare(username) == 0) {
            console.log("here");
            user_index = i+1;
            user_score = this.leaders[i].TotalScore;
            username = this.leaders[i].FullName;
            this.leaders[i]._rowVariant = 'secondary';
          }
          this.leaders[i]["Index"] = i+1;
        }

        let max_leaders_len = 10;

        if (this.leaders.length > max_leaders_len) {
          this.leaders = response.data.slice(0,max_leaders_len);
          if (user_index > max_leaders_len && user_index != -1) {
            let user_fields = {"FullName": username, "Index": user_index, "TotalScore": user_score, _rowVariant: 'secondary'}
            this.leaders.push(user_fields);
          }
        }

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

.lead {
    margin: 0 auto;
    margin-top: 20px;
    font-size: 16px;
    width: 900px;
    /* height: 1000px; */
}
</style>