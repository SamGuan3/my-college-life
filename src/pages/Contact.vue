<template>
  <div class="min-h-screen pb-20 lg:pb-32" style="padding-top: calc(var(--navbar-height) + 2rem);">
    <div class="container-center">
      <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16 mb-12">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gradient leading-tight" style="font-family: 'Instrument Serif', serif; font-style: italic; letter-spacing: -4px;">
          联系我
        </h1>
        <p class="text-2xl lg:text-3xl" style="color: var(--text-secondary);">
          如果您有任何问题或合作意向，欢迎联系我
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div class="lg:col-span-4">
          <div class="liquid-glass rounded-[1.25rem] p-10 lg:p-12 sticky top-28">
            <div class="text-center mb-10">
              <img src="/IDphoto.jpg" alt="关山" class="w-40 h-40 lg:w-44 lg:h-44 rounded-[1rem] object-cover mb-8" style="margin-left: auto; margin-right: auto; display: block;" />
              <h2 class="text-3xl lg:text-4xl font-bold mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">关山</h2>
              <p class="text-lg lg:text-xl" style="color: var(--text-muted);">数据科学与大数据技术 · 大四在读</p>
            </div>

            <div class="space-y-7">
              <div class="flex items-center gap-5">
                <span class="text-3xl lg:text-4xl">📞</span>
                <div>
                  <div class="text-sm lg:text-base mb-2" style="color: var(--text-muted);">电话</div>
                  <div class="text-lg lg:text-xl font-medium" style="color: var(--text-primary);">13352688132</div>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <span class="text-3xl lg:text-4xl">📧</span>
                <div>
                  <div class="text-sm lg:text-base mb-2" style="color: var(--text-muted);">邮箱</div>
                  <div class="text-lg lg:text-xl font-medium" style="color: var(--text-primary);">3462343313@qq.com</div>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <span class="text-3xl lg:text-4xl">🐙</span>
                <div>
                  <div class="text-sm lg:text-base mb-2" style="color: var(--text-muted);">GitHub</div>
                  <div class="text-lg lg:text-xl font-medium" style="color: var(--text-primary);">@SamGuan3</div>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <span class="text-3xl lg:text-4xl">📍</span>
                <div>
                  <div class="text-sm lg:text-base mb-2" style="color: var(--text-muted);">位置</div>
                  <div class="text-lg lg:text-xl font-medium" style="color: var(--text-primary);">广东 广州</div>
                </div>
              </div>
            </div>

            <div class="border-t pt-8 mt-8" style="border-color: var(--border-color);">
              <button class="w-full liquid-glass-button py-5 text-lg lg:text-xl" style="color: var(--text-primary);">
                发送邮件
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-8">
          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-14">
            <h2 class="text-3xl lg:text-4xl font-bold mb-10" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">给我留言</h2>
            <form @submit.prevent="submitForm" class="space-y-10">
              <div>
                <label class="block text-lg lg:text-xl font-medium mb-4" style="color: var(--text-primary);">姓名</label>
                <input
                  v-model="form.name"
                  type="text"
                  placeholder="请输入您的姓名"
                  class="liquid-glass-input w-full py-5 px-7 text-lg"
                  required
                />
              </div>

              <div>
                <label class="block text-lg lg:text-xl font-medium mb-4" style="color: var(--text-primary);">邮箱</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="example@email.com"
                  class="liquid-glass-input w-full py-5 px-7 text-lg"
                  required
                />
              </div>

              <div>
                <label class="block text-lg lg:text-xl font-medium mb-4" style="color: var(--text-primary);">主题</label>
                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="留言主题"
                  class="liquid-glass-input w-full py-5 px-7 text-lg"
                  required
                />
              </div>

              <div>
                <label class="block text-lg lg:text-xl font-medium mb-4" style="color: var(--text-primary);">留言内容</label>
                <textarea
                  v-model="form.message"
                  rows="8"
                  placeholder="请输入您的留言内容..."
                  class="liquid-glass-input w-full py-5 px-7 text-lg resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full liquid-glass-button py-5 text-lg lg:text-xl"
                style="color: var(--text-primary);"
              >
                发送留言
              </button>
            </form>

            <div v-if="submitted" class="mt-10 p-7 bg-green-500/20 border border-green-400/30 rounded-lg">
              <p class="text-green-600 text-lg lg:text-xl text-center">留言已发送，感谢您的反馈！</p>
            </div>
          </div>

          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-14 mt-12">


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
