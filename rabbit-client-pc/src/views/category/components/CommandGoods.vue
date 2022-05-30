<template>
  <div class="ref-goods" v-for="sub in topCategory?.children" :key="sub.id">
    <div class="head">
      <h3>- {{ sub.name }} -</h3>
      <p class="tag">{{ sub.saleProperties }}</p>
      <XtxMore />
    </div>
    <div class="body">
      <GoodsItem :goods="goods" v-for="goods in sub.goods" :key="goods.id" />
    </div>
  </div>
</template>

<script>
import GoodsItem from "@/views/category/components/GoodsItem";
import { useRoute } from "vue-router";
import { getTopCategoryById } from "@/api/category";
import { ref } from "vue";
export default {
  name: "CommandGoods",
  components: { GoodsItem },
  setup() {
    // 获取理由信息对象
    const route = useRoute();
    // 用于存储一级分类具体信息
    const topCategory = ref(null);
    // 获取一级分类并存储一级分类
    getTopCategoryById(route.params.id).then((data) => {
      topCategory.value = data.result;
    });
    return { topCategory };
  },
};
</script>
