<template>
  <div class="min-h-screen pt-16">
    <div class="mx-auto max-w-7xl px-6 py-12">
      <div class="glass-card p-8 mb-8">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gradient">
          项目展示
        </h1>
        <p class="text-xl text-white/80">
          这些是我大学期间完成的一些项目
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="project in projects"
          :key="project.id"
          class="glass-card overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:bg-white/15 hover:scale-105 group"
        >
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute top-4 right-4 flex gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="glass-button px-3 py-1 text-xs"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-white/70 text-sm mb-4">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.techStack"
                :key="tech"
                class="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs text-purple-300"
              >
                {{ tech }}
              </span>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-white/10">
              <span class="text-sm text-white/60">{{ project.time }}</span>
              <a href="#" class="text-primary-400 hover:text-primary-300 text-sm font-medium">
                查看详情 →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 glass-card p-8">
        <h2 class="text-2xl font-bold mb-6 text-center">项目统计</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-5xl font-bold text-gradient mb-2">{{ stats.total }}</div>
            <div class="text-sm text-white/70">总项目数</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-gradient mb-2">{{ stats.completed }}</div>
            <div class="text-sm text-white/70">已完成</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-gradient mb-2">{{ stats.ongoing }}</div>
            <div class="text-sm text-white/70">进行中</div>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold text-gradient mb-2">{{ stats.technologies }}</div>
            <div class="text-sm text-white/70">使用技术</div>
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
    description: 'React + Vite 构建的展示网站',
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

<style scoped>
.text-gradient {
  background: linear-gradient(135deg, #60a5fa 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.glass-button {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
</style>
