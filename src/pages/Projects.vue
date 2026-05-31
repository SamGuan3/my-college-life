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
    title: '全流程数据挖掘与机器学习研究',
    description: '独立完成全流程数据挖掘工作。通过爬虫采集近10万份职业教育数据，进行文本清洗与量化转换，构建回归模型开展量化分析。',
    image: '/阿里云AI应用开发与数据实训.jpg',
    techStack: ['Python', '爬虫', '回归分析', 'Cursor'],
    tags: ['数据挖掘', '核心项目'],
    time: '2026年1月 - 4月'
  },
  {
    id: 2,
    title: '校园快递派送小程序 (挑战杯一等奖)',
    description: '负责数据库搭建与数据运营分析，运用MySQL、NoSQL实现业务数据结构化管理，通过Python分析用户订单行为，支撑产品迭代。',
    image: '/挑战杯即刻递.png',
    techStack: ['微信小程序', 'MySQL', 'NoSQL', 'Python'],
    tags: ['挑战杯', '一等奖'],
    time: '2025年6月 - 10月'
  },
  {
    id: 3,
    title: '金融数据分析与证券投资实战',
    description: '结合CFA知识开展行业估值与投研分析。团队合作完成蜜雪冰城、立讯精密等估值分析，在国泰君安证券实盘大赛中斩获优胜奖。',
    image: '/蜜雪冰城IPO.png',
    techStack: ['CFA知识', '量化分析', '行业调研'],
    tags: ['量化', '金融科技'],
    time: '2025年3月 - 12月'
  },
  {
    id: 4,
    title: '技术实践项目 (飞机大战)',
    description: '基于Python开发的实战项目，通过Cursor AI工具辅助编程开发，实现游戏逻辑、碰撞检测与界面交互。',
    image: '/bianchengzhixing.jpg',
    techStack: ['Python', 'Pygame', 'Cursor'],
    tags: ['编程实践', 'AI辅助'],
    time: '2025年'
  }
]

const stats = {
  total: 5,
  completed: 4,
  ongoing: 1,
  technologies: 10
}
</script>
