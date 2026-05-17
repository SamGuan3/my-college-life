<template>
  <div class="min-h-screen pt-16">
    <div class="mx-auto max-w-7xl px-6 py-12">
      <div class="glass-card p-8 mb-8">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gradient">
          联系我
        </h1>
        <p class="text-xl text-white/80">
          如果您有任何问题或合作意向，欢迎联系我
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-4">
          <div class="glass-card p-6 sticky top-24">
            <div class="text-center mb-6">
              <img src="/cat.jpg" alt="呱鲨" class="w-32 h-32 rounded-2xl object-cover mx-auto mb-4" />
              <h2 class="text-2xl font-bold mb-2">呱鲨</h2>
              <p class="text-white/70">在校大学生 · 技术爱好者</p>
            </div>

            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <span class="text-2xl">💬</span>
                <div>
                  <div class="text-sm text-white/70">微信</div>
                  <div class="font-medium">Guansss__</div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-2xl">📧</span>
                <div>
                  <div class="text-sm text-white/70">邮箱</div>
                  <div class="font-medium">example@email.com</div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-2xl">🐙</span>
                <div>
                  <div class="text-sm text-white/70">GitHub</div>
                  <div class="font-medium">@yourusername</div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-2xl">📍</span>
                <div>
                  <div class="text-sm text-white/70">位置</div>
                  <div class="font-medium">广东 广州</div>
                </div>
              </div>
            </div>

            <div class="border-t border-white/10 pt-4 mt-6">
              <button class="w-full glass-button py-3 text-sm hover:bg-white/20">
                发送邮件
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-8">
          <div class="glass-card p-8">
            <h2 class="text-2xl font-bold mb-6">给我留言</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label class="block text-sm font-medium mb-2">姓名</label>
                <input v-model="form.name" type="text" placeholder="请输入您的姓名" class="glass-input w-full" required />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">邮箱</label>
                <input v-model="form.email" type="email" placeholder="example@email.com" class="glass-input w-full" required />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">主题</label>
                <input v-model="form.subject" type="text" placeholder="留言主题" class="glass-input w-full" required />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">留言内容</label>
                <textarea v-model="form.message" rows="6" placeholder="请输入您的留言内容..." class="glass-input w-full resize-none" required></textarea>
              </div>
              <button type="submit" class="w-full glass-button py-3 text-white hover:bg-white/20 transition-all">
                发送留言
              </button>
            </form>

            <div v-if="submitted" class="mt-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg">
              <p class="text-green-300 text-center">留言已发送，感谢您的反馈！</p>
            </div>
          </div>

          <div class="glass-card p-8 mt-8">
            <h2 class="text-2xl font-bold mb-6">社交媒体</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="#" class="glass-card p-6 text-center hover:bg-white/15 transition-all">
                <div class="text-4xl mb-2">📺</div>
                <div class="font-medium">抖音</div>
                <div class="text-xs text-white/70 mt-1">@G3462343313</div>
              </a>
              <a href="#" class="glass-card p-6 text-center hover:bg-white/15 transition-all">
                <div class="text-4xl mb-2">🎬</div>
                <div class="font-medium">B站</div>
                <div class="text-xs text-white/70 mt-1">@_呱呱呱鲨</div>
              </a>
              <a href="#" class="glass-card p-6 text-center hover:bg-white/15 transition-all">
                <div class="text-4xl mb-2">🐙</div>
                <div class="font-medium">GitHub</div>
                <div class="text-xs text-white/70 mt-1">@yourusername</div>
              </a>
              <a href="#" class="glass-card p-6 text-center hover:bg-white/15 transition-all">
                <div class="text-4xl mb-2">💼</div>
                <div class="font-medium">Gitee</div>
                <div class="text-xs text-white/70 mt-1">@yourusername</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

const submitForm = () => {
  console.log('Form submitted:', form.value)
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.value = { name: '', email: '', subject: '', message: '' }
  }, 3000)
}
</script>

<style scoped>
.glass-input {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  color: white;
  width: 100%;
}

.glass-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.glass-input:focus {
  outline: none;
  border-color: rgba(96, 165, 250, 0.5);
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
}

.glass-button {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
}

.text-gradient {
  background: linear-gradient(135deg, #60a5fa 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
