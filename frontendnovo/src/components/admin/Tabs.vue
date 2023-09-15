<template>
  <div>
    <ul class="nav nav-tabs" role="tablist">
      <li v-for="(tab, index) in tabs" :key="index" class="nav-item" role="presentation">
        <a
          :class="['nav-link', { 'active': activeTab === index }]"
          :id="`tab-${index}-tab`"
          :data-bs-toggle="activeTab === index ? 'tab' : ''"
          :href="activeTab === index ? `#tab-${index}` : ''"
          role="tab"
          :aria-controls="`tab-${index}`"
          :aria-selected="activeTab === index"
          @click="changeTab(index)"
        >
          {{ tab.label }}
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <component
        v-for="(tab, index) in tabs"
        :key="index"
        :is="tab.component"
        :class="['tab-pane', { 'fade': activeTab !== index, 'show active': activeTab === index }]"
        :id="`tab-${index}`"
        role="tabpanel"
        :aria-labelledby="`tab-${index}-tab`"
      ></component>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeTab: parseInt(localStorage.getItem('activeTab')) || 0,
    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
      localStorage.setItem('activeTab', index.toString()); // Salvar o valor da guia ativa no localStorage
    },
  },
};
</script>

<style>

</style>
