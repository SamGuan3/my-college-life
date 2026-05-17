<template>
  <div class="min-h-screen" :class="themeClass">
    <canvas
      id="bg-canvas"
      class="fixed inset-0 w-full h-full pointer-events-none opacity-30"
    ></canvas>

    <div class="relative z-10">
      <Navbar title="呱鲨の大学" />

      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <MusicPlayer />
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import { onMounted, provide, ref } from 'vue'

const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const themeClass = ref('theme-dark')

// 提供主题状态给子组件
provide('theme', {
  isDark,
  toggleTheme
})

// 初始化时检查本地存储
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme !== null) {
    isDark.value = savedTheme === 'dark'
  }
  updateTheme()
  
  const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const particles: Array<{
    x: number
    y: number
    vx: number
    vy: number
    size: number
    color: string
  }> = []

  const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981']

  for (let i = 0; i < 50; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }

  function animate() {
    ctx?.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1

      ctx?.beginPath()
      ctx?.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx!.fillStyle = p.color
      ctx?.fill()
    })

    requestAnimationFrame(animate)
  }

  animate()

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
})

const updateTheme = () => {
  themeClass.value = isDark.value ? 'theme-dark' : 'theme-light'
  document.documentElement.className = themeClass.value
}
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
