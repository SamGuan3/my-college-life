<template>
  <div class="min-h-screen pb-20 lg:pb-32" style="padding-top: calc(var(--navbar-height) + 2rem);">
    <div class="container-center">
      <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16 mb-12">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gradient leading-tight" style="font-family: 'Instrument Serif', serif; font-style: italic; letter-spacing: -4px;">
          我的经历
        </h1>
        <p class="text-2xl lg:text-3xl" style="color: var(--text-secondary);">
          大学期间的学习和成长历程
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div class="lg:col-span-8 space-y-12 lg:space-y-16">
          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16">
            <h2 class="text-3xl lg:text-4xl font-bold mb-10 flex items-center gap-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">
              <span style="color: #3B82F6;">01</span>
              <span style="color: var(--text-primary);">教育背景</span>
              <div class="flex-1 h-px" style="background-color: var(--border-color);"></div>
            </h2>
            <div class="space-y-10">
              <div class="flex gap-8">
                <div class="flex-shrink-0 w-44 text-right">
                  <div class="text-lg lg:text-xl font-bold" style="color: #3B82F6;">2024 - 2028</div>
                </div>
                <div class="flex-1">
                  <h4 class="text-2xl lg:text-3xl font-bold mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">数据科学与大数据技术专业</h4>
                  <p class="text-lg lg:text-xl mb-4" style="color: var(--text-muted);">广东技术师范大学 · 本科</p>
                  <p class="text-lg lg:text-xl" style="color: var(--text-secondary);">GPA: 3.92/5.0，综合测评专业排名前1%</p>
                </div>
              </div>
            </div>
          </div>

          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16">
            <h2 class="text-3xl lg:text-4xl font-bold mb-10 flex items-center gap-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">
              <span style="color: #3B82F6;">02</span>
              <span style="color: var(--text-primary);">技能详情</span>
              <div class="flex-1 h-px" style="background-color: var(--border-color);"></div>
            </h2>
            <div class="space-y-10">
              <div v-for="skill in skills" :key="skill.name">
                <div class="flex justify-between mb-4">
                  <span class="text-xl lg:text-2xl font-medium" style="color: var(--text-primary);">{{ skill.name }}</span>
                  <span class="text-xl lg:text-2xl" style="color: #3B82F6;">{{ skill.level }}%</span>
                </div>
                <div class="h-5 rounded-full overflow-hidden" style="background-color: var(--border-color);">
                  <div
                    class="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16">
            <h2 class="text-3xl lg:text-4xl font-bold mb-10 flex items-center gap-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">
              <span style="color: #3B82F6;">03</span>
              <span style="color: var(--text-primary);">获奖情况</span>
              <div class="flex-1 h-px" style="background-color: var(--border-color);"></div>
            </h2>
            <div class="space-y-8">
              <div
                v-for="award in awards"
                :key="award.id"
                class="liquid-glass rounded-[1rem] p-8 transition-all"
                @mouseenter="($event.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.03)'"
              >
                <div class="flex items-start justify-between">
                  <div>
                    <h4 class="text-xl lg:text-2xl font-bold mb-3" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">{{ award.title }}</h4>
                    <p class="text-base lg:text-lg" style="color: var(--text-muted);">{{ award.description }}</p>
                  </div>
                  <span class="text-lg lg:text-xl" style="color: #3B82F6;">{{ award.time }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16">
            <h2 class="text-3xl lg:text-4xl font-bold mb-10 flex items-center gap-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">
              <span style="color: #3B82F6;">04</span>
              <span style="color: var(--text-primary);">项目经历</span>
              <div class="flex-1 h-px" style="background-color: var(--border-color);"></div>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
              <div
                v-for="project in projects"
                :key="project.id"
                class="liquid-glass rounded-[1.25rem] overflow-hidden transition-all duration-300 hover:scale-105 group"
              >
                <div class="relative overflow-hidden bg-gray-900/20" style="aspect-ratio: 4/3;">
                  <img
                    :src="project.image"
                    :alt="project.title"
                    class="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div class="absolute top-4 right-4 flex gap-2 flex-wrap">
                    <span
                      v-for="tag in project.tags"
                      :key="tag"
                      class="liquid-glass-button px-4 py-2 text-sm"
                      style="color: var(--text-primary);"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>

                <div class="p-8 lg:p-10">
                  <h3 class="text-2xl lg:text-3xl font-bold mb-5" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">
                    {{ project.title }}
                  </h3>
                  <p class="text-base lg:text-lg mb-7" style="color: var(--text-secondary);">
                    {{ project.description }}
                  </p>

                  <div class="flex flex-wrap gap-3 mb-7">
                    <span
                      v-for="tech in project.techStack"
                      :key="tech"
                      class="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm lg:text-base text-purple-400"
                    >
                      {{ tech }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between pt-7 border-t" style="border-color: var(--border-color);">
                    <span class="text-base lg:text-lg" style="color: var(--text-muted);">{{ project.time }}</span>
                    <a href="#" class="text-base lg:text-lg font-medium text-blue-500 hover:text-blue-400">
                      查看详情 →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4">
          <div class="liquid-glass rounded-[1.25rem] p-10 lg:p-12 sticky top-28">
            <h3 class="text-xl lg:text-2xl font-bold mb-8" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">快速链接</h3>
            <div class="space-y-5">
              <a href="/简历.docx" download="简历.docx" class="block px-6 py-5 rounded-full transition-all text-lg lg:text-xl" style="color: var(--text-secondary);" @mouseenter="($event.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.05)'" @mouseleave="($event.currentTarget as HTMLElement).style.backgroundColor = 'transparent'">
                📄 下载简历
              </a>
              <button @click="showWechatModal = true" class="w-full text-left block px-6 py-5 rounded-full transition-all text-lg lg:text-xl" style="color: var(--text-secondary);" @mouseenter="($event.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.05)'" @mouseleave="($event.currentTarget as HTMLElement).style.backgroundColor = 'transparent'">
                💬 添加微信
              </button>
              <a href="#" class="block px-6 py-5 rounded-full transition-all text-lg lg:text-xl" style="color: var(--text-secondary);" @mouseenter="($event.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.05)'" @mouseleave="($event.currentTarget as HTMLElement).style.backgroundColor = 'transparent'">
                📧 联系我
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showWechatModal" class="fixed inset-0 flex items-center justify-center z-50 p-4">
    <div class="absolute inset-0 bg-black/50" @click="showWechatModal = false"></div>
    <div class="relative z-10 max-w-md w-full p-4 rounded-[1.25rem] overflow-hidden" style="background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1);">
      <button @click="showWechatModal = false" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-white/10 z-10" style="color: var(--text-primary);">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <img src="/微信联系方式.jpg" alt="微信联系方式" class="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showWechatModal = ref(false)

interface Skill {
  name: string
  level: number
}

interface Award {
  id: number
  title: string
  description: string
  time: string
}

interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  tags: string[]
  time: string
}

const skills: Skill[] = [
  { name: 'Python编程', level: 90 },
  { name: '数据分析(Pandas/Numpy)', level: 85 },
  { name: '量化策略(Backtrader)', level: 80 },
  { name: '数据可视化(Matplotlib)', level: 85 },
  { name: 'SQL数据库', level: 75 },
  { name: '机器学习算法', level: 70 },
  { name: '英语(CET-6)', level: 80 }
]

const awards: Award[] = [
  { id: 1, title: '蓝桥杯省级三等奖', description: '程序设计竞赛', time: '2025年5月' },
  { id: 2, title: '布莱德曼程序设计大赛校级一等奖', description: '程序设计竞赛', time: '2025年3月' },
  { id: 3, title: '阿里云AI应用开发实训优秀学员', description: 'AI应用开发实训营', time: '2025年5月' },
  { id: 4, title: '校优秀三好学生', description: '综合测评学院前1%，德智体美全面发展', time: '2025年' },
  { id: 5, title: '校运会长跑冠军', description: '校田径运动会', time: '2025年' }
]

const projects: Project[] = [
  {
    id: 1,
    title: '蜜雪冰城行业研究报告',
    description: '撰写蜜雪冰城行业研究报告，包括行业分析、公司治理、财务分析，使用SWOT分析法分析优劣势与机遇风险',
    image: '/蜜雪冰城IPO.png',
    techStack: ['Python', 'Excel', 'SWOT分析'],
    tags: ['行业研究', '金融分析'],
    time: '2025年6月'
  },
  {
    id: 2,
    title: '校园快递派送微信小程序',
    description: '针对校园内快递"时间分散、地点偏远、代取需求高频"的痛点，设计并开发校园快递派送微信小程序',
    image: '/挑战杯即刻递.png',
    techStack: ['微信小程序', 'Python', '路径规划'],
    tags: ['挑战杯', '团队项目'],
    time: '2025年'
  },
  {
    id: 3,
    title: '量化策略回测系统',
    description: '基于Backtrader框架开发量化策略回测系统，支持多种技术指标和策略优化',
    image: '/即刻递小程序展示.png',
    techStack: ['Python', 'Backtrader', 'TA-Lib'],
    tags: ['量化', '金融科技'],
    time: '2025年'
  }
]
</script>
