<template>
  <div class="min-h-screen" :class="themeClass">
    <div class="relative z-10">
      <Navbar title="呱鲨の大学" />

      <router-view v-slot="{ Component, route }">
        <transition name="fade">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>

    <MusicPlayer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import { onMounted, provide, ref, watch } from 'vue'

const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  updateTheme()
}

const themeClass = ref('theme-dark')

provide('theme', {
  isDark,
  toggleTheme
})

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme !== null) {
    isDark.value = savedTheme === 'dark'
  }
  updateTheme()
})

const updateTheme = () => {
  themeClass.value = isDark.value ? 'theme-dark' : 'theme-light'
  document.documentElement.className = themeClass.value
}

watch(isDark, () => {
  updateTheme()
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
