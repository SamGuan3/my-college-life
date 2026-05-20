<template>
  <div class="min-h-screen pb-20 lg:pb-32" style="padding-top: calc(var(--navbar-height) + 2rem);">
    <div class="container-center">
      <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16 mb-12">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-gradient" style="font-family: 'Instrument Serif', serif; font-style: italic; letter-spacing: -4px;">
          项目展示
        </h1>
        <p class="text-2xl lg:text-3xl" style="color: var(--text-secondary);">
          这些是我大学期间完成的一些项目
        </p>
      </div>

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

      <div class="mt-16 liquid-glass rounded-[1.25rem] p-12 lg:p-16">
        <h2 class="text-3xl lg:text-4xl font-bold mb-10 text-center" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">
          项目统计
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div class="text-center">
            <div class="text-6xl lg:text-7xl font-bold text-gradient mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">{{ stats.total }}</div>
            <div class="text-lg lg:text-xl" style="color: var(--text-secondary);">总项目数</div>
          </div>
          <div class="text-center">
            <div class="text-6xl lg:text-7xl font-bold text-gradient mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">{{ stats.completed }}</div>
            <div class="text-lg lg:text-xl" style="color: var(--text-secondary);">已完成</div>
          </div>
          <div class="text-center">
            <div class="text-6xl lg:text-7xl font-bold text-gradient mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">{{ stats.ongoing }}</div>
            <div class="text-lg lg:text-xl" style="color: var(--text-secondary);">进行中</div>
          </div>
          <div class="text-center">
            <div class="text-6xl lg:text-7xl font-bold text-gradient mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">{{ stats.technologies }}</div>
            <div class="text-lg lg:text-xl" style="color: var(--text-secondary);">使用技术</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  tags: string[]
  time: string
}

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

const stats = {
  total: 8,
  completed: 5,
  ongoing: 3,
  technologies: 12
}
</script>
