<template>
  <div class="min-h-screen pt-24 pb-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="glass-card p-10 lg:p-12 mb-10">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
          我的经验
        </h1>
        <p class="text-2xl lg:text-3xl text-white/80">
          大学期间的学习和成长历程
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div class="lg:col-span-8 space-y-8">
          <div class="glass-card p-10 lg:p-12">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8 flex items-center gap-4">
              <span class="text-primary-400">01</span>
              <span>教育背景</span>
              <div class="flex-1 h-px bg-white/10"></div>
            </h2>
            <div class="space-y-8">
              <div class="flex gap-6">
                <div class="flex-shrink-0 w-40 text-right">
                  <div class="text-lg lg:text-xl font-bold text-primary-400">2023 - 至今</div>
                </div>
                <div class="flex-1">
                  <h4 class="text-2xl lg:text-3xl font-bold mb-3">计算机科学与技术专业</h4>
                  <p class="text-lg lg:text-xl text-white/70 mb-3">某大学 · 本科</p>
                  <p class="text-lg lg:text-xl text-white/80">GPA: 3.9/4.0，专业排名前10%</p>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-card p-10 lg:p-12">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8 flex items-center gap-4">
              <span class="text-primary-400">02</span>
              <span>技能详情</span>
              <div class="flex-1 h-px bg-white/10"></div>
            </h2>
            <div class="space-y-8">
              <div v-for="skill in skills" :key="skill.name">
                <div class="flex justify-between mb-3">
                  <span class="text-xl lg:text-2xl font-medium">{{ skill.name }}</span>
                  <span class="text-xl lg:text-2xl text-primary-400">{{ skill.level }}%</span>
                </div>
                <div class="h-4 bg-white/10 rounded-full overflow-hidden">
                  <div
                    class="h-full bg-gradient-to-r from-primary-500 to-purple-500 transition-all duration-1000"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-card p-10 lg:p-12">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8 flex items-center gap-4">
              <span class="text-primary-400">03</span>
              <span>获奖情况</span>
              <div class="flex-1 h-px bg-white/10"></div>
            </h2>
            <div class="space-y-6">
              <div
                v-for="award in awards"
                :key="award.id"
                class="glass-card p-6 hover:bg-white/15 transition-all"
              >
                <div class="flex items-start justify-between">
                  <div>
                    <h4 class="text-xl lg:text-2xl font-bold mb-2">{{ award.title }}</h4>
                    <p class="text-base lg:text-lg text-white/70">{{ award.description }}</p>
                  </div>
                  <span class="text-lg lg:text-xl text-primary-400">{{ award.time }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-4">
          <div class="glass-card p-8 lg:p-10 sticky top-28">
            <h3 class="text-xl lg:text-2xl font-bold mb-6">快速链接</h3>
            <div class="space-y-4">
              <a href="#" class="block px-6 py-4 rounded-lg hover:bg-white/10 transition-all text-lg lg:text-xl">
                📄 下载简历
              </a>
              <a href="#" class="block px-6 py-4 rounded-lg hover:bg-white/10 transition-all text-lg lg:text-xl">
                💻 GitHub 主页
              </a>
              <a href="#" class="block px-6 py-4 rounded-lg hover:bg-white/10 transition-all text-lg lg:text-xl">
                📧 联系我
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

const skills: Skill[] = [
  { name: 'C/C++ 编程', level: 90 },
  { name: 'JavaScript/TypeScript', level: 85 },
  { name: 'React/Vue', level: 80 },
  { name: 'Python/AI', level: 75 },
  { name: '数据结构与算法', level: 85 }
]

const awards: Award[] = [
  { id: 1, title: '编程之星大赛一等奖', description: '数据结构可视化工具项目', time: '2023年' },
  { id: 2, title: '优秀学生干部', description: '学生会技术部负责人', time: '2024年' },
  { id: 3, title: 'ACM竞赛铜奖', description: '省级程序设计竞赛', time: '2024年' }
]
</script>
