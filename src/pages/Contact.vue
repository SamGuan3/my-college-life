<template>
  <div class="min-h-screen pb-12" style="padding-top: calc(var(--navbar-height) + 1rem);">
    <div class="mx-auto max-w-[95vw] lg:max-w-7xl px-4 lg:px-6">
      <div class="glass-card p-10 lg:p-12 mb-10">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
          联系我
        </h1>
        <p class="text-2xl lg:text-3xl" style="color: var(--text-secondary)">
          如果您有任何问题或合作意向，欢迎联系我
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div class="lg:col-span-4">
          <div class="glass-card p-8 lg:p-10 sticky top-28">
            <div class="text-center mb-8">
              <img src="/cat.jpg" alt="呱鲨" class="w-40 h-40 lg:w-44 lg:h-44 rounded-2xl object-cover mx-auto mb-6" />
              <h2 class="text-3xl lg:text-4xl font-bold mb-3" style="color: var(--text-primary)">呱鲨</h2>
              <p class="text-lg lg:text-xl" style="color: var(--text-muted)">在校大学生 · 技术爱好者</p>
            </div>

            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <span class="text-3xl lg:text-4xl">💬</span>
                <div>
                  <div class="text-sm lg:text-base mb-1" style="color: var(--text-muted)">微信</div>
                  <div class="text-lg lg:text-xl font-medium" style="color: var(--text-primary)">Guansss__</div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-3xl lg:text-4xl">📧</span>
                <div>
                  <div class="text-sm lg:text-base mb-1" style="color: var(--text-muted)">邮箱</div>
                  <div class="text-lg lg:text-xl font-medium" style="color: var(--text-primary)">example@email.com</div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-3xl lg:text-4xl">🐙</span>
                <div>
                  <div class="text-sm lg:text-base mb-1" style="color: var(--text-muted)">GitHub</div>
                  <div class="text-lg lg:text-xl font-medium" style="color: var(--text-primary)">@yourusername</div>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span class="text-3xl lg:text-4xl">📍</span>
                <div>
                  <div class="text-sm lg:text-base mb-1" style="color: var(--text-muted)">位置</div>
                  <div class="text-lg lg:text-xl font-medium" style="color: var(--text-primary)">广东 广州</div>
                </div>
              </div>
            </div>

            <div class="border-t pt-6 mt-8" style="border-color: var(--border-color); border-width: 1px; opacity: 0.1">
              <button class="w-full glass-button py-4 text-lg lg:text-xl hover:bg-bg/20">
                发送邮件
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-8">
          <div class="glass-card p-10 lg:p-12">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8" style="color: var(--text-primary)">给我留言</h2>
            <form @submit.prevent="submitForm" class="space-y-8">
              <div>
                <label class="block text-lg lg:text-xl font-medium mb-3" style="color: var(--text-primary)">姓名</label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="请输入您的姓名"
                  class="glass-input w-full py-4 px-6 text-lg"
                  required
                />
              </div>

              <div>
                <label class="block text-lg lg:text-xl font-medium mb-3" style="color: var(--text-primary)">邮箱</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="example@email.com"
                  class="glass-input w-full py-4 px-6 text-lg"
                  required
                />
              </div>

              <div>
                <label class="block text-lg lg:text-xl font-medium mb-3" style="color: var(--text-primary)">主题</label>
                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="留言主题"
                  class="glass-input w-full py-4 px-6 text-lg"
                  required
                />
              </div>

              <div>
                <label class="block text-lg lg:text-xl font-medium mb-3" style="color: var(--text-primary)">留言内容</label>
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
                class="w-full glass-button py-4 text-lg lg:text-xl hover:bg-bg/20 transition-all"
                style="color: var(--text-primary)"
              >
                发送留言
              </button>
            </form>

            <div v-if="submitted" class="mt-8 p-6 bg-green-500/20 border border-green-400/30 rounded-lg">
              <p class="text-green-300 text-lg lg:text-xl text-center">留言已发送，感谢您的反馈！</p>
            </div>
          </div>

          <div class="glass-card p-10 lg:p-12 mt-10">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8" style="color: var(--text-primary)">社交媒体</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              <a
                href="#"
                class="glass-card p-8 lg:p-10 text-center hover:bg-bg/15 transition-all"
              >
                <div class="text-5xl lg:text-6xl mb-4">📺</div>
                <div class="text-xl lg:text-2xl font-medium" style="color: var(--text-primary)">抖音</div>
                <div class="text-sm lg:text-base mt-2" style="color: var(--text-muted)">@G3462343313</div>
              </a>
              <a
                href="#"
                class="glass-card p-8 lg:p-10 text-center hover:bg-bg/15 transition-all"
              >
                <div class="text-5xl lg:text-6xl mb-4">🎬</div>
                <div class="text-xl lg:text-2xl font-medium" style="color: var(--text-primary)">B站</div>
                <div class="text-sm lg:text-base mt-2" style="color: var(--text-muted)">@_呱呱呱鲨</div>
              </a>
              <a
                href="#"
                class="glass-card p-8 lg:p-10 text-center hover:bg-bg/15 transition-all"
              >
                <div class="text-5xl lg:text-6xl mb-4">🐙</div>
                <div class="text-xl lg:text-2xl font-medium" style="color: var(--text-primary)">GitHub</div>
                <div class="text-sm lg:text-base mt-2" style="color: var(--text-muted)">@yourusername</div>
              </a>
              <a
                href="#"
                class="glass-card p-8 lg:p-10 text-center hover:bg-bg/15 transition-all"
              >
                <div class="text-5xl lg:text-6xl mb-4">💼</div>
                <div class="text-xl lg:text-2xl font-medium" style="color: var(--text-primary)">Gitee</div>
                <div class="text-sm lg:text-base mt-2" style="color: var(--text-muted)">@yourusername</div>
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
