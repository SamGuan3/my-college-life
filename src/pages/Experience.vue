<template>
  <div class="min-h-screen pt-24 pb-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="glass-card p-10 lg:p-12 mb-10">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient leading-tight">
          我的经验
        </h1>
        <p class="text-2xl lg:text-3xl" style="color: var(--text-secondary)">
          大学期间的学习和成长历程
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8 lg:gap-12">
        <div class="space-y-8">
          <div class="glass-card-lg p-8 lg:p-10">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8 flex items-center gap-4">
              <span style="color: #3B82F6">01</span>
              <span style="color: var(--text-primary)">教育背景</span>
              <div class="flex-1 h-px" style="background-color: var(--border-color); opacity: 0.1"></div>
            </h2>
            <div class="space-y-8">
              <div class="flex gap-6">
                <div class="flex-shrink-0 w-40 text-right">
                  <div class="text-lg lg:text-xl font-bold" style="color: #3B82F6">2023 - 至今</div>
                </div>
                <div class="flex-1">
                  <h4 class="text-2xl lg:text-3xl font-bold mb-3" style="color: var(--text-primary)">计算机科学与技术专业</h4>
                  <p class="text-lg lg:text-xl mb-3" style="color: var(--text-muted)">某大学 · 本科</p>
                  <p class="text-lg lg:text-xl" style="color: var(--text-secondary)">GPA: 3.9/4.0，专业排名前10%</p>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-card-lg p-8 lg:p-10">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8 flex items-center gap-4">
              <span style="color: #3B82F6">02</span>
              <span style="color: var(--text-primary)">技能详情</span>
              <div class="flex-1 h-px" style="background-color: var(--border-color); opacity: 0.1"></div>
            </h2>
            <div class="space-y-8">
              <div v-for="skill in skills" :key="skill.name">
                <div class="flex justify-between mb-3">
                  <span class="text-xl lg:text-2xl font-medium" style="color: var(--text-primary)">{{ skill.name }}</span>
                  <span class="text-xl lg:text-2xl" style="color: #3B82F6">{{ skill.level }}%</span>
                </div>
                <div class="h-4 rounded-full overflow-hidden" style="background-color: var(--border-color); opacity: 0.1">
                  <div
                    class="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-card-lg p-8 lg:p-10">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8 flex items-center gap-4">
              <span style="color: #3B82F6">03</span>
              <span style="color: var(--text-primary)">获奖情况</span>
              <div class="flex-1 h-px" style="background-color: var(--border-color); opacity: 0.1"></div>
            </h2>
            <div class="space-y-6">
              <div
                v-for="award in awards"
                :key="award.id"
                class="glass-card-sm p-6 hover:bg-white/15 transition-all"
              >
                <div class="flex items-start justify-between">
                  <div>
                    <h4 class="text-xl lg:text-2xl font-bold mb-2" style="color: var(--text-primary)">{{ award.title }}</h4>
                    <p class="text-base lg:text-lg" style="color: var(--text-muted)">{{ award.description }}</p>
                  </div>
                  <span class="text-lg lg:text-xl" style="color: #3B82F6">{{ award.time }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="glass-card-lg p-8 lg:p-10 sticky top-28">
            <h3 class="text-xl lg:text-2xl font-bold mb-6" style="color: var(--text-primary)">快速链接</h3>
            <div class="space-y-3 mb-8">
              <a href="#" class="block px-5 py-3 rounded-xl transition-all text-lg lg:text-xl hover:bg-white/10" style="color: var(--text-secondary)">
                📄 下载简历
              </a>
              <a href="#" class="block px-5 py-3 rounded-xl transition-all text-lg lg:text-xl hover:bg-white/10" style="color: var(--text-secondary)">
                � GitHub 主页
              </a>
              <a href="#" class="block px-5 py-3 rounded-xl transition-all text-lg lg:text-xl hover:bg-white/10" style="color: var(--text-secondary)">
                📧 联系我
              </a>
            </div>

            <div class="border-t pt-6 mb-8" style="border-color: var(--border-color); border-width: 1px; opacity: 0.1">
              <h4 class="text-lg lg:text-xl font-bold mb-4" style="color: var(--text-primary)">证书展示</h4>
              <div class="grid grid-cols-2 gap-3">
                <div class="glass-card-sm aspect-video rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <span class="text-3xl">🏆</span>
                </div>
                <div class="glass-card-sm aspect-video rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <span class="text-3xl">🎖️</span>
                </div>
                <div class="glass-card-sm aspect-video rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <span class="text-3xl">📜</span>
                </div>
                <div class="glass-card-sm aspect-video rounded-xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                  <span class="text-3xl">⭐</span>
                </div>
              </div>
            </div>

            <div class="border-t pt-6" style="border-color: var(--border-color); border-width: 1px; opacity: 0.1">
              <h4 class="text-lg lg:text-xl font-bold mb-4" style="color: var(--text-primary)">个人标签</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm lg:text-base text-blue-300">
                  计算机科学
                </span>
                <span class="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm lg:text-base text-purple-300">
                  全栈开发
                </span>
                <span class="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-sm lg:text-base text-green-300">
                  AI爱好者
                </span>
                <span class="px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full text-sm lg:text-base text-orange-300">
                  竞赛达人
                </span>
                <span class="px-4 py-2 bg-pink-500/20 border border-pink-400/30 rounded-full text-sm lg:text-base text-pink-300">
                  开源贡献者
                </span>
              </div>
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

<style scoped>
.glass-card-lg {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.glass-card-sm {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
}
</style>
