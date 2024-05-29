<script setup>
  import JudulPath from './components/JudulPath.vue';
  import ItemPath from './components/ItemPath.vue';
  import IconLampu from './components/icons/IconLampu.vue';
</script>

<template>
  <div class="main-page">
      <div class="choose-path">
        <JudulPath msg="Ate lapo yooo??" />
        
        <div class="wrap-item-path">
          <ItemPath>
            <template #icon>
              <IconLampu />
            </template>
            <template #title>Kerjo</template>
            <a href="/layout/work-space.html">KERJO</a>
          </ItemPath>

          <ItemPath>
            <template #icon>
              <IconLampu />
            </template>
            <template #title>Dodolan</template>
            <a href="">KERJO</a>
          </ItemPath>

          <ItemPath>
            <template #icon>
              <IconLampu />
            </template>
            <template #title>Dolanan</template>
            <a href="">KERJO</a>
          </ItemPath>
        </div>
      </div>
    </div>
</template>
