<template>
  <div class="admin-pages">
    <PageTitle
      icon="fa fa-cogs"
      main="Administração do Sistema"
      sub="Cadastros e Configurações"
    />
<Tabs :tabs="tabsData" />

    
  </div>
</template>

<script>
import { markRaw } from "vue"
import PageTitle from "@/components/template/PageTitle.vue";
import Tabs from './Tabs.vue';
import ArticleAdmin from "@/components/admin/ArticleAdmin.vue";
import CategoryAdmin from "@/components/admin/CategoryAdmin.vue";
import UserAdmin from "@/components/admin/UserAdmin.vue";

export default {
  name: "AdminPages",
  components: { PageTitle, Tabs, ArticleAdmin, CategoryAdmin, UserAdmin },
   data() {
    return {
      tabsData: [
        {
          label: 'Artigos',
          component: markRaw(ArticleAdmin),
        },
        {
          label: 'Categoria',
          component: markRaw(CategoryAdmin),
        },
        {
          label: 'Usuários',
          component: markRaw(UserAdmin),
        },
      ],
    };
  },
};
</script>

<style scoped></style>
