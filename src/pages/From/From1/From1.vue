<template>
    <div>
        <el-switch v-model="isshow" active-text="修改" inactive-text="预览" style="float:right" ></el-switch>
        <show-page v-if="!isshow" @func="getMsgFormSon"/>
        <change-page v-if="isshow" @func="getMsgFormSon"/>
    </div>
</template>

<script>

import InputDate from '../../../components/InputDate/InputDate.vue'
import ChangePage from '../../../components/ChangePage/ChangePage.vue'
import ShowPage from '../../../components/ShowPage/ShowPage.vue'

export default {
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    changeshow () {
      this.isshow = !this.isshow
    },
    getMsgFormSon (data) {
      this.isshow = data
    }
  },
  components: {
    InputDate,
    ChangePage,
    ShowPage
  }
}
</script>

<style>

</style>
