<template>
    <div>
        <div>
            公司名字:{{company.name}}
            从业人数:{{company.peoplenum}}
            重大危险源名称:{{company.dangerresources}}
            联系方式:{{company.tel}}
            等级:{{company.level}}
            危化品名称:{{company.dangername}}
            主要风险性:{{company.maindanger}}
            评估人员:{{company.evalname}}
            评估时间:{{company.evaldate}}
        </div>
    </div>
</template>

<script>
export default {
  props: {
    company: Object
  }
}
</script>

<style>

</style>
