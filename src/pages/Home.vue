<template>
  <div class="min-h-screen pb-20 lg:pb-32" style="padding-top: calc(var(--navbar-height) + 2rem);">
    <div class="container-center">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div class="lg:col-span-3 order-2 lg:order-1">
          <div class="sticky top-28 p-10 lg:p-14 rounded-[1.25rem] liquid-glass" id="profile-card">
            <div class="text-center mb-12">
              <div class="relative inline-block mb-6">
                <img
                  src="/IDphoto.jpg"
                  alt="关山"
                  class="w-40 h-40 lg:w-44 lg:h-44 rounded-[1rem] object-cover mx-auto shadow-lg"
                />
              </div>
              <h2 class="text-3xl lg:text-4xl font-bold mb-3" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">
                关山
              </h2>
              <p class="text-base lg:text-lg" style="color: var(--text-secondary);">数据科学 · 金融科技</p>
            </div>

            <div class="border-t" style="border-color: var(--border-color);">
              <div class="space-y-6 pt-10">
                <div class="flex items-center gap-4 text-xl lg:text-2xl font-bold" style="color: var(--text-primary);">
                  <span style="color: #3B82F6;">📍</span>
                  <span>广州</span>
                </div>
                <div class="flex items-center gap-4 text-xl lg:text-2xl font-bold" style="color: var(--text-primary);">
                  <span style="color: #3B82F6;">🏫</span>
                  <span>广东技术师范大学</span>
                </div>
                <div class="flex items-center gap-4 text-xl lg:text-2xl font-bold" style="color: var(--text-primary);">
                  <span style="color: #3B82F6;">💡</span>
                  <span>数据科学与大数据技术</span>
                </div>
                <div class="flex items-center gap-4 text-xl lg:text-2xl font-bold" style="color: var(--text-primary);">
                  <span style="color: #3B82F6;">📊</span>
                  <span>GPA 3.92</span>
                </div>
              </div>
            </div>

            <div class="border-t pt-8 mt-8" style="border-color: var(--border-color);">
              <div class="flex justify-center gap-6">
                <button class="transition-colors" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.opacity = '0.8'" @mouseleave="($event.currentTarget as HTMLElement).style.opacity = '1'" title="微信" @click="openModal('wechat')">
                  <span class="text-2xl lg:text-3xl">💬</span>
                </button>
                <button class="transition-colors" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.opacity = '0.8'" @mouseleave="($event.currentTarget as HTMLElement).style.opacity = '1'" title="邮箱" @click="openModal('email')">
                  <span class="text-2xl lg:text-3xl">📧</span>
                </button>
                <button class="transition-colors" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.opacity = '0.8'" @mouseleave="($event.currentTarget as HTMLElement).style.opacity = '1'" title="QQ" @click="openModal('qq')">
                  <span class="text-2xl lg:text-3xl">🐧</span>
                </button>
                <button class="transition-colors" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.opacity = '0.8'" @mouseleave="($event.currentTarget as HTMLElement).style.opacity = '1'" title="GitHub" @click="openModal('github')">
                  <span class="text-2xl lg:text-3xl">🐙</span>
                </button>
              </div>
            </div>

            <div class="border-t pt-8 mt-8" style="border-color: var(--border-color);">
              <button class="w-full liquid-glass-button py-4 text-lg lg:text-xl font-semibold" style="color: var(--text-primary);" @click="openContactModal">
                点击此联系我
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-9 order-1 lg:order-2 space-y-12 lg:space-y-16">
          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.2] text-gradient" style="font-family: 'Instrument Serif', serif; font-style: italic; letter-spacing: -4px;">
              你好！我是关山，呱鲨是我的别称
            </h1>
            <p class="text-2xl lg:text-3xl mb-10" style="color: var(--text-secondary);">
             
            </p>
            <button @click="scrollToContent" class="liquid-glass-strong-button px-10 py-5 text-lg" style="color: var(--text-primary);">
              了解一下 →
            </button>
          </div>

          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16" id="stats">
            <div class="grid grid-cols-3 gap-12 lg:gap-16">
              <div class="text-center">
                <div class="text-5xl lg:text-6xl font-bold text-gradient mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">4</div>
                <div class="text-lg lg:text-xl" style="color: var(--text-secondary);">核心项目</div>
              </div>
              <div class="text-center">
                <div class="text-5xl lg:text-6xl font-bold text-gradient mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">3.92</div>
                <div class="text-lg lg:text-xl" style="color: var(--text-secondary);">GPA绩点</div>
              </div>
              <div class="text-center">
                <div class="text-5xl lg:text-6xl font-bold text-gradient mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">6</div>
                <div class="text-lg lg:text-xl" style="color: var(--text-secondary);">获奖荣誉</div>
              </div>
            </div>
          </div>

          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16" id="about">
            <h2 class="text-3xl lg:text-4xl font-bold mb-10 flex items-center gap-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">
              <span style="color: #3B82F6;">01</span>
              <span style="color: var(--text-primary);">我的故事</span>
              <div class="flex-1 h-px" style="background-color: var(--border-color);"></div>
            </h2>
            <div class="space-y-6">
              <p class="text-lg lg:text-xl leading-relaxed" style="color: var(--text-secondary);">
                你好！我是关山，广东技术师范大学数据科学与大数据技术专业的一名学生。综合测评专业排名前1%，正在备考CFA特许金融分析师。
              </p>
              <p class="text-lg lg:text-xl leading-relaxed" style="color: var(--text-secondary);">
                我热爱数据科学和金融科技领域，擅长Python数据挖掘、SQL数据库、量化策略开发。我具备清晰的逻辑思维，擅长拆解复杂的业务与数据问题，并保持对新技术（如AI Agent）的高度好奇心。
              </p>
              <p class="text-lg lg:text-xl leading-relaxed" style="color: var(--text-secondary);">
                我追求结果导向，具备良好的团队协作能力，希望能在金融数据分析与量化建模领域实现自己的价值。
              </p>
            </div>
          </div>

          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16" id="skills">
            <h2 class="text-3xl lg:text-4xl font-bold mb-10 flex items-center gap-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">
              <span style="color: #3B82F6;">02</span>
              <span style="color: var(--text-primary);">核心优势</span>
              <div class="flex-1 h-px" style="background-color: var(--border-color);"></div>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              <div class="liquid-glass rounded-[1rem] p-10 transition-all" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.03)'">
                <div class="text-4xl lg:text-5xl mb-6">🔍</div>
                <h3 class="text-xl lg:text-2xl font-bold mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">数据挖掘与分析</h3>
                <p class="text-base lg:text-lg" style="color: var(--text-secondary);">Python · Pandas · NumPy · 特征工程</p>
              </div>
              <div class="liquid-glass rounded-[1rem] p-10 transition-all" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.03)'">
                <div class="text-4xl lg:text-5xl mb-6">📉</div>
                <h3 class="text-xl lg:text-2xl font-bold mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">量化建模</h3>
                <p class="text-base lg:text-lg" style="color: var(--text-secondary);">回归分析 · 聚类 · 量化策略开发</p>
              </div>
              <div class="liquid-glass rounded-[1rem] p-10 transition-all" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.03)'">
                <div class="text-4xl lg:text-5xl mb-6">🗄️</div>
                <h3 class="text-xl lg:text-2xl font-bold mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">数据库技术</h3>
                <p class="text-base lg:text-lg" style="color: var(--text-secondary);">MySQL · NoSQL · MongoDB · 数据清洗</p>
              </div>
              <div class="liquid-glass rounded-[1rem] p-10 transition-all" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.03)'">
                <div class="text-4xl lg:text-5xl mb-6">🤖</div>
                <h3 class="text-xl lg:text-2xl font-bold mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">AI 辅助编程</h3>
                <p class="text-base lg:text-lg" style="color: var(--text-secondary);">Cursor · AI Agent · 自动化数据流</p>
              </div>
            </div>
          </div>

          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16" id="timeline">
            <h2 class="text-3xl lg:text-4xl font-bold mb-10 flex items-center gap-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">
              <span style="color: #3B82F6;">03</span>
              <span style="color: var(--text-primary);">获奖荣誉</span>
              <div class="flex-1 h-px" style="background-color: var(--border-color);"></div>
            </h2>
            <div class="space-y-10">
              <div v-for="(item, index) in awards" :key="index" class="flex gap-10">
                <div class="flex-shrink-0 w-36 text-right">
                  <div class="text-lg lg:text-xl font-bold" style="color: #3B82F6;">{{ item.year }}</div>
                </div>
                <div class="relative flex-1 pl-6">
                  <div class="absolute -left-8 top-3 w-4 h-4 rounded-full border-2 shadow-lg" style="border-color: var(--text-primary); background-color: #3B82F6; z-index: 10;"></div>
                  <div class="pl-10">
                    <h4 class="text-xl lg:text-2xl font-bold mb-3" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">{{ item.title }}</h4>
                    <p class="text-base lg:text-lg" style="color: var(--text-secondary);">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 联系弹窗 -->
  <div v-if="contactModalVisible" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="absolute inset-0 bg-black/60" @click="closeContactModal"></div>
    <div class="relative z-10 w-full max-w-2xl mx-4 p-8 lg:p-12 rounded-[1.25rem]" style="background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1);">
      <button @click="closeContactModal" class="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full transition-colors hover:bg-white/10" style="color: var(--text-primary);">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <div class="text-center mb-10">
        <h2 class="text-3xl lg:text-4xl font-bold mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">联系我</h2>
        <p class="text-lg lg:text-xl" style="color: var(--text-secondary);">如果您有任何问题或合作意向，欢迎联系我</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-6">
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
            <span class="text-3xl lg:text-4xl">💬</span>
            <div>
              <div class="text-sm lg:text-base mb-2" style="color: var(--text-muted);">微信</div>
              <div class="text-lg lg:text-xl font-medium" style="color: var(--text-primary);">Guansss_</div>
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
        <div class="rounded-[1rem] p-6" style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1);">
          <h3 class="text-xl lg:text-2xl font-bold mb-6" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">给我留言</h3>
          <form @submit.prevent="submitContactForm" class="space-y-5">
            <input
              v-model="contactForm.name"
              type="text"
              placeholder="您的姓名"
              class="w-full py-4 px-6 text-base rounded-lg"
              style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); color: var(--text-primary);"
              maxlength="50"
              required
            />
            <input
              v-model="contactForm.email"
              type="email"
              placeholder="您的邮箱"
              class="w-full py-4 px-6 text-base rounded-lg"
              style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); color: var(--text-primary);"
              required
            />
            <input
              v-model="contactForm.subject"
              type="text"
              placeholder="留言主题"
              class="w-full py-4 px-6 text-base rounded-lg"
              style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); color: var(--text-primary);"
              maxlength="100"
              required
            />
            <textarea
              v-model="contactForm.message"
              rows="4"
              placeholder="留言内容..."
              class="w-full py-4 px-6 text-base rounded-lg resize-none"
              style="background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); color: var(--text-primary);"
              maxlength="500"
              required
            ></textarea>
            <input v-model="contactForm.website" type="text" class="hidden" tabindex="-1" autocomplete="off" aria-hidden="true" />
            <button
              type="submit"
              :disabled="isContactLoading"
              class="w-full py-4 text-base lg:text-lg rounded-lg font-medium transition-all hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              style="background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: var(--text-primary);"
            >
              {{ isContactLoading ? '发送中...' : '发送留言' }}
            </button>
          </form>
          <div v-if="contactSubmitted" class="mt-5 p-4 bg-green-500/20 border border-green-400/30 rounded-lg">
          <p class="text-green-600 text-center">留言已发送！</p>
        </div>
        <div v-if="contactErrorMessage" class="mt-5 p-4 bg-red-500/20 border border-red-400/30 rounded-lg">
          <p class="text-red-600 text-center">{{ contactErrorMessage }}</p>
        </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 模态框 -->
  <div v-if="modalVisible" class="fixed inset-0 flex items-center justify-center z-50">
    <!-- 背景遮罩 -->
    <div class="absolute inset-0 bg-black/50" @click="closeModal"></div>
    <!-- 深色液态玻璃小窗 -->
    <div class="relative z-10 w-80 lg:w-96 p-8 rounded-[1.25rem]" style="background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1);">
      <!-- 关闭按钮 -->
      <button @click="closeModal" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-white/10" style="color: var(--text-primary);">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <!-- 模态框内容 -->
      <div class="text-center">
        <div class="text-5xl mb-4">{{ currentModalData.icon }}</div>
        <h3 class="text-2xl font-bold mb-2" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">{{ currentModalData.title }}</h3>
        <p class="text-lg" style="color: var(--text-secondary);">{{ currentModalData.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { requestJson } from '../utils/api'

interface ApiResponse<T> {
  success: boolean
  message?: string
  data: T
}

const awards = [
  { year: '2025.10', title: '第十五届挑战杯 校级一等奖', description: '大学生课外学术科技作品竞赛' },
  { year: '2025.05', title: '蓝桥杯全国软件大赛 省级三等奖', description: 'C/C++程序设计竞赛' },
  { year: '2025.05', title: '阿里巴巴“云工开物”AI实训 优秀学员', description: 'AI应用开发实训营' },
  { year: '2025.03', title: '布莱德曼杯建模大赛 金奖', description: '数学建模竞赛' },
  { year: '2025', title: '校优秀三好学生', description: '综合测评专业排名前1%' },
  { year: '2025', title: '校运会长跑冠军', description: '校田径运动会' }
]

const modalVisible = ref(false)
const currentModalData = ref({ icon: '', title: '', content: '' })
const contactModalVisible = ref(false)

const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  website: ''
})

const contactSubmitted = ref(false)
const isContactLoading = ref(false)
const contactErrorMessage = ref('')

const contactData = {
  wechat: { icon: '💬', title: '微信', content: '微信号: Guansss_' },
  email: { icon: '📧', title: '邮箱', content: '3462343313@qq.com' },
  qq: { icon: '🐧', title: 'QQ', content: 'QQ号: 3462343313' },
  github: { icon: '🐙', title: 'GitHub', content: 'github.com/SamGuan3' }
}

const openModal = (type: keyof typeof contactData) => {
  currentModalData.value = contactData[type]
  modalVisible.value = true
}

const closeModal = () => {
  modalVisible.value = false
}

const openContactModal = () => {
  contactModalVisible.value = true
}

const closeContactModal = () => {
  contactModalVisible.value = false
}

const submitContactForm = async () => {
  isContactLoading.value = true
  contactErrorMessage.value = ''
  
  try {
    const result = await requestJson<ApiResponse<unknown>>('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactForm.value)
    })

    if (result.success) {
      contactSubmitted.value = true
      contactForm.value = { name: '', email: '', subject: '', message: '', website: '' }
      setTimeout(() => {
        contactSubmitted.value = false
      }, 3000)
    } else {
      contactErrorMessage.value = result.message || '提交失败，请检查内容后重试'
    }
  } catch (error) {
    contactErrorMessage.value = error instanceof Error ? error.message : '网络错误，请稍后重试'
  } finally {
    isContactLoading.value = false
  }
}

const scrollToContent = () => {
  const element = document.getElementById('stats')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
