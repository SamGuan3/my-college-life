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
</script>
