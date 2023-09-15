<template>
  <div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard" sub="Base"></PageTitle>
    <div class="stats">
      <Stat title="Categorias" :value="stat.categories" icon="fa fa-folder" color="#d54d50"/>
      <Stat title="Artigos" :value="stat.articles" icon="fa fa-file" color="#3bc480"/>
      <Stat title="Usuários" :value="stat.users" icon="fa fa-users" color="#3282cd"/>
    </div>
  </div>

</template>

<script>
import PageTitle from '@/components/template/PageTitle.vue'
import Stat from '@/components/home/Stat.vue'
import axios from 'axios'
import { backApiUrl } from '@/global'

export default {
  name: 'Home',
  components: { PageTitle, Stat },
  data() {
    return {
      stat: {}
    }
  },
  methods: {
    getStats() {
      const url = `${backApiUrl}/stats`
      axios.get(url).then(res => {
        this.stat = res.data
      })
    }
  },
  mounted() {
    this.getStats()
  }


}
</script>

<style scoped>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>