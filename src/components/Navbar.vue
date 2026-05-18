<template>
  <nav
    class="fixed top-4 left-0 right-0 z-50 px-2 lg:px-8"
  >
    <div class="container-center">
      <div class="liquid-glass rounded-full px-6 py-2">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center gap-8">
          <router-link to="/" class="text-2xl font-bold" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">
            {{ title }}
          </router-link>

          <div class="hidden md:flex items-center gap-2">
            <router-link
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="nav-link rounded-full px-4 py-2 text-sm font-medium transition-all"
              :style="{ color: 'var(--text-secondary)' }"
              :class="{ 'bg-white/10': $route.path === item.path }"
              @mouseenter="($event.currentTarget as HTMLElement).style.color = 'var(--text-primary)'"
              @mouseleave="($event.currentTarget as HTMLElement).style.color = 'var(--text-secondary)'"
            >
              {{ item.label }}
            </router-link>
          </div>
        </div>

        <div class="flex items-center gap-4">
          <button
            class="liquid-glass-button p-2 hover:bg-white/5"
            @click="toggleTheme"
            title="切换主题"
            :style="{ color: 'var(--text-primary)' }"
          >
            <span class="text-xl" v-if="isDark">🌙</span>
            <span class="text-xl" v-else>☀️</span>
          </button>

          <button
            class="md:hidden rounded-full p-2 hover:bg-white/10"
            @click="toggleMobileMenu"
            :style="{ color: 'var(--text-primary)' }"
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

      <div v-if="mobileMenuOpen" class="md:hidden border-t py-4 mt-2" :style="{ borderColor: 'var(--border-color)' }">
        <div class="flex flex-col gap-2">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="rounded-full px-4 py-3 text-sm font-medium transition-all"
            :style="{ color: 'var(--text-secondary)' }"
            :class="{ 'bg-white/10': $route.path === item.path }"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
    </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'

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

const themeContext = inject<{
  isDark: { value: boolean }
  toggleTheme: () => void
}>('theme')

const isDark = themeContext?.isDark || ref(true)
const toggleTheme = themeContext?.toggleTheme || (() => {})
</script>
