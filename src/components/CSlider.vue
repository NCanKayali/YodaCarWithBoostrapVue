<template>
  <div class="slider">
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="420"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        img-src="https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg"
        class="slider"
      >
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide
        img-src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/2020-Ford-Mustang-2.3L-High-Performance-Fastback-coupe-orange-1001x565-1.jpg"
        class="slider"
      >
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        class="slider"
        img-src="https://i0.wp.com/shiftdelete.net/wp-content/uploads/2021/12/volvo-cars-siber-saldiriya-ugradi.jpg?fit=1280%2C720&ssl=1"
      >
      </b-carousel-slide>
    </b-carousel>
    <b-form class="slide-form" @submit.stop.prevent>
      <label>Pick Location</label>
      <b-form-select
        v-model="selected"
        :options="options"
        size="m"
        class="mt-2"
      ></b-form-select>
      <label class="mt-2">Return Location</label>
      <b-form-select
        v-model="selected"
        :options="options"
        size="m"
        class="mt-2"
      ></b-form-select>
      <label>Choose a date</label>
      <div class="flex">
        <b-form-datepicker
          id="example-datepicker"
          v-model="value"
        ></b-form-datepicker>
        <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
      </div>
      <label>Choose a date</label>
      <div class="flex">
        <b-form-datepicker
          id="example-datepicker"
          v-model="value"
        ></b-form-datepicker>
        <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
      </div>
      <b-button class="mt-2" block variant="success">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style>
.slider {
  height: 700px;
}

.slide-form {
  position: absolute;
  z-index: 999;
  max-height: 450px;
  width: 600px;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 15px;
  margin-top: -600px;
  margin-left: 140px;
}

.flex {
  display: flex;
}
</style>