<template>
  <div>

        <Modal ref="modal" :Text="this.text"> </Modal>
        <br />
        <div>
        <div v-if="this.isLoading">
        <b-spinner variant="danger" style="width: 4rem; height: 4rem; margin-left: 50%;" label="Large Spinner"></b-spinner>
        </div>
        <div v-else>
        <h3 style="text-align: center;">Page {{this.runs}} / 4</h3>
        <br>
        <div class="selector">
        <VueSelectImage
          ref="selector"
          :dataImages="this.Images"
          :is-multiple="true"
          :h="`180px`"
          :w="`320px`"
          :limit="Number(this.$root.store.firstGameImagesSelected)"
          @onselectmultipleimage="onSelectMultipleImage"
          @onreachlimit="onreachlimit"
        >
        </VueSelectImage>
          <br />
            <div class="d-flex justify-content-center" style="margin-bottom: 15px; margin-top: 30px;">
            <a href="#" class="btn btn-white btn-animate" @click.prevent="showModal">Instructions</a>
            <a href="#" class="btn btn-white btn-animate" id="butt2" @click="submit">Submit</a> 
            </div>
          <br />
        </div>
        </div>
        </div>

  </div>
</template>
<script>
import VueSelectImage from "vue-select-image";
import Modal from "../Components/Modal.vue";
export default {
  name: "SecondGamePage",
  components: {
    VueSelectImage,
    Modal
  },
  data() {
    return {
      Images: [],
      best: [],
      key: 0 ,
      runs: 1,
      wins: [],
      goodImages: [],
      other_id: undefined,
      allImages: [],
      allImagesId: [],
      selectedImages: [],
      res: [],
      isLoading: true,
      text: `Welcome to the Second Game! In front of you there are ${this.$root.store.firstGameImages} you need to rate, 
          according to the choices of other user. You need guess which pictures he liked the most.`
    };
  },

  methods: {
    showModal() {
      this.$refs.modal.setShow();
    },
    onSelectMultipleImage(selectedImages) {
      // console.log(this.Images);
      this.selectedImages = selectedImages;
      return selectedImages;
    },
    resetMultipleSelection() {
      return [];
    },
    onreachlimit() {this.$root.toast("warning", "got the limit selected images \r You have to choose up to " + this.$root.store.firstGameImagesSelected + " images.","warning");
    },
    async submit() {
      // let app = this.$parent;
      if ( this.selectedImages.length == Number(this.$root.store.firstGameImagesSelected)) {
        let result = 0;

        for (let i = 0; i < this.selectedImages.length; i++) {
          if (this.best.includes(this.selectedImages[i].id)) {
            result += 1;
            this.goodImages.push(this.selectedImages[i].id);
          }
        }

        this.$refs.selector.resetMultipleSelection(1);

        let wins = this.wins;
        wins.push(result);
        let no_runs = this.runs;
        if (no_runs == 4) {
          let score = wins.reduce((x, y) => x + y);
          this.$root.toast( "Score", "you scored " + score + " out of " + this.$root.store.firstGameImages, "success");
          this.runs = 0;
          this.wins = [];
          try {
            await this.axios.post(
              "http://localhost:443/images/submitSecondGame",
              {
                id: this.$root.store.u_id,
                other_id: this.other_id,
                score: score,
                result: this.goodImages,
                allImages: this.allImagesId,
              }
            );
            this.goodImages = [];
            this.$router.push("/"); // cahnge to HomePage
          } catch (err) {
            console.log(err);
          }
        }

        let select = Number(this.$root.store.firstGameImagesSelected);
        let runImages = Number(this.$root.store.firstGameImages);

        let goodSection = this.allImages.slice(select*this.runs,2*select*this.runs);
        let badSection = this.allImages.slice(runImages*this.runs,runImages*this.runs+runImages-select);

        this.shuffleArr(goodSection.concat(badSection)) //2,4 - 14,20 app.runs=2

        this.runs++;
        this.key++;
      } else {
        this.$root.toast("warning","Need to choose " + this.$root.store.selectedImages + " pictures", "warning");
      }
    },
    shuffleArr(array){
      let currentIndex = array.length,  randomIndex;
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      this.Images = array;
    },
    async uploadImages() {
      try {        
        const response = await this.axios.post(
          `http://localhost:443/images/getSecondGameImagesOtherPerson`,
          {
            id:this.$root.store.u_id,
          }
        );
        const arr = response.data.ans.best.concat(response.data.ans.worst); // best: 8, worst: 24 by default
        const res = [];
        arr.map((img) => {
          let str = "data:image/jpg;base64, " + img.src;
          res.push({id: img.id, src:str});
        });
        this.allImages = res;
        this.allImagesId = this.allImages.map(image => image.id);
        const first_iteration = this.allImages.slice(0,this.$root.store.firstGameImagesSelected).concat(this.allImages.slice(this.$root.store.firstGameImages,this.$root.store.firstGameImages*2-this.$root.store.firstGameImagesSelected));
        this.shuffleArr(first_iteration);
        this.best = (this.allImages.slice(0,response.data.best.length)).map((x)=>x.id);
        this.other_id = response.data.other_id;
        this.isLoading = false;
        this.showModal();

      } catch (err) {
        console.log(err.response);
      }
    },
  },
  created() {
      this.uploadImages();
    },
};
</script>
<style>
@import "../assets/style.css";
</style>
