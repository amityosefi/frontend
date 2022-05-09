<template>
  <div>

        <!-- <Modal ref="modal" :Text="this.text"> </Modal>
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
            <a href="#" class="btn btn-white btn-animate" id="butt1" @click.prevent="showModal">Instructions</a>
            <a href="#" class="btn btn-white btn-animate" id="butt2" @click="submit">Submit</a> 
            </div>
          <br />
        </div>
        </div>
        </div> -->
        <Modal ref="modal" :Text="this.text"> </Modal>
        <br />
        <div>
        <div v-if="this.isLoading">
        <div class="load"> Loading ... </div>
        <div style="margin-top: 2%; position: absolute; left: 51%; margin-left: -51px;">
        <b-spinner
          variant="danger"
          style="width: 4rem; height: 4rem;"
          label="Large Spinner"
        ></b-spinner>
        </div>
        </div>
        <div v-else>
        <h3 style="text-align: center;">Page {{this.runs}} / 4</h3>
        <br>

        <div v-if="this.Images.length==8">
          <VueSelectImage
            ref="selector"
            :dataImages="this.Images"
            :is-multiple="true"
            :h="`180px`"
            :w="`320px`"
            :limit="Number(this.$root.store.firstGameImagesSelected)"
            @onselectmultipleimage="onSelectMultipleImage"
            @onreachlimit="onreachlimit">
          </VueSelectImage>
          <br />
          <br />
        </div>

         <div v-else class="selector">
          <VueSelectImage
            ref="selector"
            :dataImages="this.Images"
            :is-multiple="true"
            :h="`180px`"
            :w="`320px`"
            :limit="Number(this.$root.store.firstGameImagesSelected)"
            @onselectmultipleimage="onSelectMultipleImage"
            @onreachlimit="onreachlimit"
            class="aaa">
          </VueSelectImage>
          <br />
          <br />
        </div>
        
        </div>
            <div v-if="!this.isLoading" style="margin-bottom: 15px; margin-top: 30px; margin-left: 18em; ">
            <a href="#" class="btn btn-white btn-animate" id="butt1" @click.prevent="showModal">Instructions</a>
            <a href="#" class="btn btn-white btn-animate" id="butt2" @click="submit">Submit</a> 
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
      text: []
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
          this.$root.toast( "Score", "you scored " + score + " out of " + 4*this.$root.store.firstGameImagesSelected, "success");
          this.runs = 0;
          this.wins = [];
          try {
            await this.axios.post(
              "https://coil2.cs.bgu.ac.il/images/submitSecondGame",
              {
                id: this.$root.store.u_id,
                other_id: this.other_id,
                score: score,
                result: this.goodImages,
                allImages: this.allImagesId,
              }
            );
            this.goodImages = [];
            this.$router.push("/MainPage");
          } catch (err) {
            console.log(err);
          }
        }
        else {
           this.$root.toast("Score", "you scored " + result +" out of " + this.$root.store.firstGameImagesSelected, "success");
        }

        let select = Number(this.$root.store.firstGameImagesSelected);
        let runImages = Number(this.$root.store.firstGameImages);

        let goodSection = this.allImages.slice(select*this.runs+1,select*this.runs+select+1);
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
          `https://coil2.cs.bgu.ac.il/images/getSecondGameImagesOtherPerson`,
          {
            id: this.$root.store.u_id,
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
        this.best = (this.allImages.slice(0,response.data.ans.best.length)).map((x)=>x.id);
        this.other_id = response.data.other_id;
        this.isLoading = false;
        this.showModal();

      } catch (err) {
        console.log(err.response);
      }
    },
  },
  created() {

    this.text = [`הגענו לשלב המשחק! כעת נציג בפניכם ארבעה מסכים. בכל מסך ${this.$root.store.firstGameImages} תמונות מוקטנות שלקוחות משלב הדירוג של משתמש אחר.`,
                `מתוך ${this.$root.store.firstGameImages} התמונות עליכם לבחור את ${this.$root.store.firstGameImagesSelected} התמונות להן המשתמש נתן את הדירוגים הגבוהים ביותר. על כל תמונה שבחרתם נכון תקבלו נקודה.`,
                `הבחירה בתמונה נעשית באמצעות לחיצה עם העכבר עליה. ניתן לבטל בחירה של תמונה מסוימת על ידי לחיצה נוספת עליה.`];
      this.uploadImages();
    },
};
</script>
<style>
  #butt2 {
    margin-left: 25%;
  }
  
  #butt1 {
    margin-right: 25%;
  }

  .btn:link,
  .btn:visited {
    margin-bottom: 5px;
      font-weight: 600;
      font-size: 16px;
      font-family:Arial, Helvetica, sans-serif;
      /* text-transform: uppercase; */
      text-decoration: none;
      padding: 12px 30px;
      display: inline-block;
      border-radius: 100px;
      transition: all .2s;
      /* position: absolute; */
       box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
  
  .btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  .btn:active {
      transform: translateY(-1px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  
  .btn-white {
      background-color: #fff;
      color: rgb(133, 133, 133);
  }
  .vue-select-image__thumbnail{
    padding: 10px;
  }
  
  .btn::after {
      content: "";
      display: inline-block;
      /* height: 100%;
      width: 100%; */
      border-radius: 100px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all .4s;
  }
  
  .btn-white::after {
      background-color: #fff;
  }
  
  .btn:hover::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
  }
  
  .btn-animated {
      animation: moveInBottom 5s ease-out;
      animation-fill-mode: backwards;
  }
  
  @keyframes moveInBottom {
      0% {
          opacity: 0;
          transform: translateY(30px);
      }
  
      100% {
          opacity: 1;
          transform: translateY(0px);
      }
  }

  .load {
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  margin-top: 8%;
}
</style>
