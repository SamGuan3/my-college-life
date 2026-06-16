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
              <a
                href="mailto:3462343313@qq.com?subject=来自个人网站的联系"
                class="block w-full liquid-glass-button py-5 text-lg lg:text-xl text-center"
                style="color: var(--text-primary);"
              >
                发送邮件
              </a>
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
                  maxlength="50"
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
                  maxlength="100"
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
                  maxlength="500"
                  required
                ></textarea>
              </div>

              <input v-model="form.website" type="text" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true" />

              <button
                type="submit"
                :disabled="isLoading"
                class="w-full liquid-glass-button py-5 text-lg lg:text-xl disabled:opacity-50 disabled:cursor-not-allowed"
                style="color: var(--text-primary);"
              >
                {{ isLoading ? '发送中...' : '发送留言' }}
              </button>
            </form>

            <div v-if="submitted" class="mt-10 p-7 bg-green-500/20 border border-green-400/30 rounded-lg">
              <p class="text-green-600 text-lg lg:text-xl text-center">留言已发送，感谢您的反馈！</p>
            </div>

            <div v-if="errorMessage" class="mt-10 p-7 bg-red-500/20 border border-red-400/30 rounded-lg">
              <p class="text-red-600 text-lg lg:text-xl text-center">{{ errorMessage }}</p>
            </div>
          </div>

          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-14 mt-12">
            <h2 class="text-3xl lg:text-4xl font-bold mb-10" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">留言列表</h2>
            
            <div v-if="messagesLoading" class="flex justify-center items-center py-12">
              <div class="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            </div>

            <div v-else-if="messagesError" class="text-center py-12">
              <p class="text-xl lg:text-2xl mb-6" style="color: var(--text-secondary);">{{ messagesError }}</p>
              <button class="liquid-glass-button px-8 py-3" style="color: var(--text-primary);" @click="fetchMessages">
                重新加载
              </button>
            </div>

            <div v-else-if="messages.length === 0" class="text-center py-12">
              <p class="text-xl lg:text-2xl" style="color: var(--text-secondary);">暂无留言，快来发表第一条吧！</p>
            </div>

            <div v-else class="space-y-6">
              <div 
                v-for="message in messages" 
                :key="message._id"
                class="p-6 rounded-lg"
                style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);"
              >
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold" style="background: rgba(59, 130, 246, 0.2); color: #3B82F6;">
                      {{ message.name.charAt(0) }}
                    </div>
                    <div>
                      <h4 class="text-lg lg:text-xl font-medium" style="color: var(--text-primary);">{{ message.name }}</h4>
                      <p class="text-sm" style="color: var(--text-muted);">{{ formatDate(message.createdAt) }}</p>
                    </div>
                  </div>
                </div>
                <h5 class="text-base lg:text-lg font-medium mb-2" style="color: var(--text-primary);">{{ message.subject }}</h5>
                <p class="text-base lg:text-lg" style="color: var(--text-secondary);">{{ message.message }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { requestJson } from '../utils/api'

interface Message {
  _id: string
  name: string
  email: string
  subject: string
  message: string
  createdAt: string
}

interface ApiResponse<T> {
  success: boolean
  message?: string
  data: T
}

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  website: ''
})

const messages = ref<Message[]>([])
const isLoading = ref(false)
const messagesLoading = ref(false)
const submitted = ref(false)
const errorMessage = ref('')
const messagesError = ref('')

const submitForm = async () => {
  isLoading.value = true
  errorMessage.value = ''
  
  try {
    const result = await requestJson<ApiResponse<Message>>('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    if (result.success) {
      submitted.value = true
      form.value = { name: '', email: '', subject: '', message: '', website: '' }
      await fetchMessages()
      setTimeout(() => {
        submitted.value = false
      }, 3000)
    } else {
      errorMessage.value = result.message || '提交失败，请检查内容后重试'
    }
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : '网络错误，请稍后重试'
  } finally {
    isLoading.value = false
  }
}

const fetchMessages = async () => {
  messagesLoading.value = true
  messagesError.value = ''
  
  try {
    const result = await requestJson<ApiResponse<Message[]>>('/api/messages')
    
    if (result.success) {
      messages.value = result.data
    } else {
      messagesError.value = result.message || '留言加载失败，请稍后重试'
    }
  } catch (error) {
    messagesError.value = error instanceof Error ? error.message : '留言加载失败，请稍后重试'
  } finally {
    messagesLoading.value = false
  }
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  fetchMessages()
})
</script>
