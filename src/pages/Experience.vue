<template>
  <div class="min-h-screen pb-20 lg:pb-32" style="padding-top: calc(var(--navbar-height) + 2rem);">
    <div class="container-center">
      <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16 mb-12">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gradient leading-tight" style="font-family: 'Instrument Serif', serif; font-style: italic; letter-spacing: -4px;">
          我的经验
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
                  <div class="text-lg lg:text-xl font-bold" style="color: #3B82F6;">2023 - 至今</div>
                </div>
                <div class="flex-1">
                  <h4 class="text-2xl lg:text-3xl font-bold mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">计算机科学与技术专业</h4>
                  <p class="text-lg lg:text-xl mb-4" style="color: var(--text-muted);">某大学 · 本科</p>
                  <p class="text-lg lg:text-xl" style="color: var(--text-secondary);">GPA: 3.9/4.0，专业排名前10%</p>
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
        </div>

        <div class="lg:col-span-4">
          <div class="liquid-glass rounded-[1.25rem] p-10 lg:p-12 sticky top-28">
            <h3 class="text-xl lg:text-2xl font-bold mb-8" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">快速链接</h3>
            <div class="space-y-5">
              <a href="#" class="block px-6 py-5 rounded-full transition-all text-lg lg:text-xl" style="color: var(--text-secondary);" @mouseenter="($event.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.05)'" @mouseleave="($event.currentTarget as HTMLElement).style.backgroundColor = 'transparent'">
                📄 下载简历
              </a>
              <a href="#" class="block px-6 py-5 rounded-full transition-all text-lg lg:text-xl" style="color: var(--text-secondary);" @mouseenter="($event.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.05)'" @mouseleave="($event.currentTarget as HTMLElement).style.backgroundColor = 'transparent'">
                💻 GitHub 主页
              </a>
              <a href="#" class="block px-6 py-5 rounded-full transition-all text-lg lg:text-xl" style="color: var(--text-secondary);" @mouseenter="($event.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.05)'" @mouseleave="($event.currentTarget as HTMLElement).style.backgroundColor = 'transparent'">
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
