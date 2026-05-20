<template>
  <div class="fixed bottom-6 right-6 z-50">
    <button
      @click="isPlaying = !isPlaying"
      class="p-4 rounded-full hover:bg-white/10 transition-all"
      :class="{ 'animate-pulse': isPlaying }"
      style="background: rgba(255, 255, 255, 0.01); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);"
    >
      <span class="text-3xl" v-if="isPlaying">🎵</span>
    </button>

    <audio
      ref="audioRef"
      :src="currentSong"
      @ended="playNext"
      @timeupdate="updateProgress"
    >
    </audio>

    <div v-if="showList" class="absolute bottom-20 right-0 p-6 w-72 rounded-[1.25rem] liquid-glass">
      <h3 class="text-xl font-bold mb-6 text-white" style="font-family: 'Instrument Serif', serif; font-style: italic;">播放列表</h3>
      <div class="space-y-3">
        <button
          v-for="(song, index) in playlist"
          :key="index"
          @click="playSong(index)"
          class="w-full text-left px-5 py-3 rounded-full hover:bg-white/5 transition-all text-lg text-white/90"
          :class="{ 'bg-white/5': currentIndex === index }"
        >
          {{ song.title }}
        </button>
      </div>
    </div>

    <div v-if="isPlaying" class="absolute bottom-20 right-0 p-5 w-72 rounded-[1.25rem] liquid-glass">
      <div class="flex items-center gap-4 mb-3">
        <span class="text-base text-white/90">{{ formatTime(currentTime) }}</span>
        <div class="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            class="h-full transition-all"
            style="width: 60%; background: linear-gradient(to right, #3b82f6, #a855f7);"
          ></div>
        </div>
        <span class="text-base text-white/90">{{ formatTime(duration) }}</span>
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
