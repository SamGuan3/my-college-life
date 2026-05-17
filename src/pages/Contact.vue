<template>
  <div class="min-h-screen pt-20">
    <div class="mx-auto max-w-7xl px-6 py-12">
      <div class="glass-card p-10 mb-10">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-gradient">
          联系我
        </h1>
        <p class="text-2xl text-white/80">
          如果您有任何问题或合作意向，欢迎联系我
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-4">
          <div class="glass-card p-8 sticky top-24">
            <div class="text-center mb-8">
              <img src="/cat.jpg" alt="呱鲨" class="w-36 h-36 rounded-2xl object-cover mx-auto mb-6" />
              <h2 class="text-3xl font-bold mb-3">呱鲨</h2>
              <p class="text-lg text-white/70">在校大学生 · 技术爱好者</p>
            </div>

            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <span class="text-3xl">💬</span>
                <div>
                  <div class="text-sm text-white/70 mb-1">微信</div>
                  <div class="text-lg font-medium">Guansss__</div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-3xl">📧</span>
                <div>
                  <div class="text-sm text-white/70 mb-1">邮箱</div>
                  <div class="text-lg font-medium">example@email.com</div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-3xl">🐙</span>
                <div>
                  <div class="text-sm text-white/70 mb-1">GitHub</div>
                  <div class="text-lg font-medium">@yourusername</div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-3xl">📍</span>
                <div>
                  <div class="text-sm text-white/70 mb-1">位置</div>
                  <div class="text-lg font-medium">广东 广州</div>
                </div>
              </div>
            </div>

            <div class="border-t border-white/10 pt-6 mt-8">
              <button class="w-full glass-button py-4 text-lg hover:bg-white/20">
                发送邮件
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-8">
          <div class="glass-card p-10">
            <h2 class="text-3xl font-bold mb-8">给我留言</h2>
            <form @submit.prevent="submitForm" class="space-y-8">
              <div>
                <label class="block text-lg font-medium mb-3">姓名</label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="请输入您的姓名"
                  class="glass-input w-full py-4 px-6 text-lg"
                  required
                />
              </div>

              <div>
                <label class="block text-lg font-medium mb-3">邮箱</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="example@email.com"
                  class="glass-input w-full py-4 px-6 text-lg"
                  required
                />
              </div>

              <div>
                <label class="block text-lg font-medium mb-3">主题</label>
                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="留言主题"
                  class="glass-input w-full py-4 px-6 text-lg"
                  required
                />
              </div>

              <div>
                <label class="block text-lg font-medium mb-3">留言内容</label>
                <textarea
                  v-model="form.message"
                  rows="8"
                  placeholder="请输入您的留言内容..."
                  class="glass-input w-full py-4 px-6 text-lg resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full glass-button py-4 text-lg text-white hover:bg-white/20 transition-all"
              >
                发送留言
              </button>
            </form>

            <div v-if="submitted" class="mt-8 p-6 bg-green-500/20 border border-green-400/30 rounded-lg">
              <p class="text-green-300 text-lg text-center">留言已发送，感谢您的反馈！</p>
            </div>
          </div>

          <div class="glass-card p-10 mt-10">
            <h2 class="text-3xl font-bold mb-8">社交媒体</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a
                href="#"
                class="glass-card p-8 text-center hover:bg-white/15 transition-all"
              >
                <div class="text-5xl mb-4">📺</div>
                <div class="text-xl font-medium">抖音</div>
                <div class="text-sm text-white/70 mt-2">@G3462343313</div>
              </a>
              <a
                href="#"
                class="glass-card p-8 text-center hover:bg-white/15 transition-all"
              >
                <div class="text-5xl mb-4">🎬</div>
                <div class="text-xl font-medium">B站</div>
                <div class="text-sm text-white/70 mt-2">@_呱呱呱鲨</div>
              </a>
              <a
                href="#"
                class="glass-card p-8 text-center hover:bg-white/15 transition-all"
              >
                <div class="text-5xl mb-4">🐙</div>
                <div class="text-xl font-medium">GitHub</div>
                <div class="text-sm text-white/70 mt-2">@yourusername</div>
              </a>
              <a
                href="#"
                class="glass-card p-8 text-center hover:bg-white/15 transition-all"
              >
                <div class="text-5xl mb-4">💼</div>
                <div class="text-xl font-medium">Gitee</div>
                <div class="text-sm text-white/70 mt-2">@yourusername</div>
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
