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
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
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
    title: '编程之星项目',
    description: '基于C++的数据结构可视化工具',
    image: '/bianchengzhixing.jpg',
    techStack: ['C++', 'Qt', '数据结构'],
    tags: ['竞赛', '编程'],
    time: '2023年10月'
  },
  {
    id: 2,
    title: '智能家居系统',
    description: '物联网智能家居控制系统',
    image: '/jidian1.jpg',
    techStack: ['Python', 'Arduino', 'MQTT'],
    tags: ['课程设计', '物联网'],
    time: '2024年3月'
  },
  {
    id: 3,
    title: '个人作品集网站',
    description: 'React · Vite 构建的展示网站',
    image: '/mybackg.jpg',
    techStack: ['React', 'TypeScript', 'Vite'],
    tags: ['前端', '个人项目'],
    time: '2024年6月'
  },
  {
    id: 4,
    title: 'AI图像识别应用',
    description: '基于深度学习的图像分类系统',
    image: '/cat.jpg',
    techStack: ['Python', 'PyTorch', 'OpenCV'],
    tags: ['AI', '机器学习'],
    time: '2024年9月'
  },
  {
    id: 5,
    title: '志愿者管理系统',
    description: '校园志愿者时长管理系统',
    image: '/zhiyuanshichang1.png',
    techStack: ['Vue', 'Node.js', 'MySQL'],
    tags: ['团队项目', 'Web'],
    time: '2024年12月'
  },
  {
    id: 6,
    title: '校园导航APP',
    description: '基于位置服务的校园导航应用',
    image: '/xiaoyunhui1.jpg',
    techStack: ['React Native', 'Node.js'],
    tags: ['移动开发', 'LBS'],
    time: '2025年3月'
  }
]

const stats = {
  total: 15,
  completed: 12,
  ongoing: 3,
  technologies: 20
}
</script>
