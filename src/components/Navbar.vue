<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl"
  >
    <div class="mx-auto max-w-7xl px-6">
      <div class="flex h-20 items-center justify-between">
        <div class="flex items-center gap-8">
          <router-link to="/" class="text-3xl font-bold text-white">
            {{ title }}
          </router-link>

          <div class="hidden md:flex items-center gap-2">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="nav-link rounded-lg px-6 py-3 text-lg font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
              :class="{ 'bg-white/10 text-white': $route.path === item.path }"
            >
              {{ item.label }}
            </router-link>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <button
            class="glass-button rounded-lg p-3 text-white hover:bg-white/20"
            @click="toggleTheme"
            title="切换主题"
          >
            <span class="text-2xl" v-if="isDark">☀️</span>
            <span class="text-2xl" v-else>🌙</span>
          </button>

          <button
            class="md:hidden rounded-lg p-3 text-white hover:bg-white/20"
            @click="toggleMobileMenu"
          >
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <div v-if="mobileMenuOpen" class="md:hidden border-t border-white/10 py-6">
        <div class="flex flex-col gap-3">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="rounded-lg px-6 py-4 text-lg font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
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
