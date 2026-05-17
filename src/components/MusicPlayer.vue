<template>
  <div class="fixed bottom-4 right-4 z-50">
    <button
      @click="isPlaying = !isPlaying"
      class="p-3 rounded-full hover:bg-white/20 transition-all"
      :class="{ 'animate-pulse': isPlaying }"
      style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.2); box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);"
    >
      <span v-if="isPlaying">🎵</span>
      <span v-else>🔇</span>
    </button>

    <audio
      ref="audioRef"
      :src="currentSong"
      @ended="playNext"
      @timeupdate="updateProgress"
    ></audio>

    <div v-if="showList" class="absolute bottom-16 right-0 p-4 w-64 rounded-3xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.2);">
      <h3 class="text-lg font-bold mb-3">播放列表</h3>
      <div class="space-y-2">
        <button
          v-for="(song, index) in playlist"
          :key="index"
          @click="playSong(index)"
          class="w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 transition-all text-sm"
          :class="{ 'bg-white/10': currentIndex === index }"
        >
          {{ song.title }}
        </button>
      </div>
    </div>

    <div v-if="isPlaying" class="absolute bottom-16 right-0 p-3 w-64 rounded-3xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-xl" style="background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.2);">
      <div class="flex items-center gap-3 mb-2">
        <span class="text-sm">{{ formatTime(currentTime) }}</span>
        <div class="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            class="h-full transition-all"
            style="width: 60%; background: linear-gradient(to right, #3b82f6, #a855f7);"
          ></div>
        </div>
        <span class="text-sm">{{ formatTime(duration) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Song {
  title: string
  src: string
}

const playlist: Song[] = [
  { title: '音乐1', src: '' },
  { title: '音乐2', src: '' }
]

const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const showList = ref(false)
const currentIndex = ref(0)
const currentTime = ref(0)
const duration = ref(0)

const currentSong = () => playlist[currentIndex.value]?.src || ''

const playSong = (index: number) => {
  currentIndex.value = index
  audioRef.value?.play()
  isPlaying.value = true
  showList.value = false
}

const playNext = () => {
  currentIndex.value = (currentIndex.value + 1) % playlist.length
  audioRef.value?.play()
}

const updateProgress = () => {
  if (audioRef.value) {
    currentTime.value = audioRef.value.currentTime
    duration.value = audioRef.value.duration || 0
  }
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

onMounted(() => {
  if (audioRef.value) {
    audioRef.value.volume = 0.3
  }
})
</script>
