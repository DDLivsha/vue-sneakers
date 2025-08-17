<script
  setup
  lang="ts"
>
  import CardList from './components/CardList.vue'
  import Drawer from './components/Drawer.vue'
  import MyHeader from './components/MyHeader.vue'
</script>

<template>
  <!-- <Drawer /> -->
  <div class="w-4/5 mx-auto bg-slate-100 rounded-xl shadow-xl mt-14">
    <MyHeader />
    <div class="p-10">
      <div class="flex items-center gap-4 justify-between">
        <h2 class="text-3xl font-bold">Усі кросівки</h2>

        <div class="flex items-center gap-4">
          <select
            class="py-2 px-3 border border-gray-200 rounded-md outline-none"
            name="FilterInput"
            id="Filter"
          >
            <option value="">По назві</option>
            <option value="">По ціні (від низької)</option>
            <option value="">По ціні (від високої)</option>
          </select>
          <div class="relative">
            <img
              class="absolute top-3 left-3"
              src="/search.svg"
              alt="search"
            />
            <input
              type="text"
              placeholder="Пошук..."
              class="pr-4 pl-10 py-2 border border-gray-200 rounded-md outline-none focus:border-gray-400"
            />
          </div>
        </div>
      </div>

      <CardList :items="[]" />
    </div>
  </div>
</template>

<style scoped>
  .fsdf {
    background: none;
  }
</style>
