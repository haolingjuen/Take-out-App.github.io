<template>
  <div>
    <div class="CarContral">
      <span class="iconfont reduce" @click="reduce" v-show="this.food.count">&#xe604;</span>
      <span class="count" v-show="this.food.count">{{count}}</span>
      <span class="iconfont plus" @click="plus">&#xe605;</span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "CarContral",
  data() {
    return {};
  },
  props: {
    food: {
      type: Object
    }
  },
  computed: {
    count() {
      return this.food.count;
    }
  },
  methods: {
    plus() {
      if (!this.food.count) {
        Vue.set(this.food, "count", 0);
      }
      this.food.count++;
    },
    reduce() {
      this.food.count--;
    }
  },
  mounted() {}
};
</script>

<style scoped lang="stylus">
.CarContral {
  position: absolute;
  top: 2rem;
  right: 0.2rem;

  .reduce {
    font-size: 0.5rem;
    color: #0aa0e6;
    margin-left: 0.2rem;
  }

  .plus {
    font-size: 0.52rem;
    color: #0aa0e6;
    margin-left: 0.2rem;
  }

  .count {
    font-size: 0.4rem;
    color: #2a2a2a;
    margin-left: 0.2rem;
  }
}
</style>
