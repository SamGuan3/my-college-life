<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl"
  >
    <div class="mx-auto max-w-7xl px-6">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center gap-8">
          <router-link to="/" class="text-2xl font-bold text-white">
            {{ title }}
          </router-link>

          <div class="hidden md:flex items-center gap-1">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
              :class="{ 'bg-white/10 text-white': $route.path === item.path }"
            >
              {{ item.label }}
            </router-link>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <button
            class="rounded-lg p-2 text-white hover:bg-white/20 transition-all"
            @click="toggleTheme"
            title="切换主题"
          >
            <span v-if="isDark">☀️</span>
            <span v-else>🌙</span>
          </button>

          <button
            class="md:hidden rounded-lg p-2 text-white hover:bg-white/20"
            @click="toggleMobileMenu"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div v-if="mobileMenuOpen" class="md:hidden border-t border-white/10 py-4">
        <div class="flex flex-col gap-2">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
            :class="{ 'bg-white/10 text-white': $route.path === item.path }"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface NavItem {
  label: string
  path: string
}

defineProps<{
  title?: string
}>()

const navItems: NavItem[] = [
  { label: '主页', path: '/' },
  { label: '项目', path: '/projects' },
  { label: '经验', path: '/experience' },
  { label: '联系', path: '/contact' }
]

const mobileMenuOpen = ref(false)
const isDark = ref(true)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<style scoped>
.glass-button {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
