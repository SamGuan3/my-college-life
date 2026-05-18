<template>
  <div class="min-h-screen pb-20 lg:pb-32" style="padding-top: calc(var(--navbar-height) + 2rem);">
    <div class="container-center">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div class="lg:col-span-3 order-2 lg:order-1">
          <div class="sticky top-28 p-10 lg:p-14 rounded-[1.25rem] liquid-glass" id="profile-card">
            <div class="text-center mb-12">
              <div class="relative inline-block mb-6">
                <img
                  src="/cat.jpg"
                  alt="呱鲨"
                  class="w-40 h-40 lg:w-44 lg:h-44 rounded-[1rem] object-cover mx-auto shadow-lg"
                />
                <span class="absolute -top-3 -right-3 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                  呱
                </span>
              </div>
              <h2 class="text-3xl lg:text-4xl font-bold mb-3" style="font-family: 'Instrument Serif', serif; font-style: italic; color: var(--text-primary);">
                呱鲨
              </h2>
              <p class="text-base lg:text-lg" style="color: var(--text-secondary);">INTJ · 水瓶座</p>
            </div>

            <div class="border-t" style="border-color: var(--border-color);">
              <div class="space-y-6 pt-10">
                <div class="flex items-center gap-4 text-xl lg:text-2xl font-bold" style="color: var(--text-primary);">
                  <span style="color: #3B82F6;">📍</span>
                  <span>广州</span>
                </div>
                <div class="flex items-center gap-4 text-xl lg:text-2xl font-bold" style="color: var(--text-primary);">
                  <span style="color: #3B82F6;">🎓</span>
                  <span>在校大学生</span>
                </div>
                <div class="flex items-center gap-4 text-xl lg:text-2xl font-bold" style="color: var(--text-primary);">
                  <span style="color: #3B82F6;">💡</span>
                  <span>学习能力较强</span>
                </div>
              </div>
            </div>

            <div class="border-t pt-8 mt-8" style="border-color: var(--border-color);">
              <div class="flex justify-center gap-6">
                <a href="#" class="transition-colors" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.opacity = '0.8'" @mouseleave="($event.currentTarget as HTMLElement).style.opacity = '1'" title="微信">
                  <span class="text-2xl lg:text-3xl">💬</span>
                </a>
                <a href="#" class="transition-colors" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.opacity = '0.8'" @mouseleave="($event.currentTarget as HTMLElement).style.opacity = '1'" title="GitHub">
                  <span class="text-2xl lg:text-3xl">🐙</span>
                </a>
                <a href="#" class="transition-colors" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.opacity = '0.8'" @mouseleave="($event.currentTarget as HTMLElement).style.opacity = '1'" title="邮箱">
                  <span class="text-2xl lg:text-3xl">📧</span>
                </a>
                <a href="#" class="transition-colors" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.opacity = '0.8'" @mouseleave="($event.currentTarget as HTMLElement).style.opacity = '1'" title="QQ">
                  <span class="text-2xl lg:text-3xl">📱</span>
                </a>
              </div>
            </div>

            <div class="border-t pt-8 mt-8" style="border-color: var(--border-color);">
              <button class="w-full liquid-glass-button py-4 text-lg lg:text-xl font-semibold" style="color: var(--text-primary);">
                联系我
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-9 order-1 lg:order-2 space-y-12 lg:space-y-16">
          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[0.8] text-gradient" style="font-family: 'Instrument Serif', serif; font-style: italic; letter-spacing: -4px;">
              欢迎来到呱鲨的大学生活
            </h1>
            <p class="text-2xl lg:text-3xl mb-10" style="color: var(--text-secondary);">
              用液态玻璃风格，记录我的大学点滴
            </p>
            <button @click="scrollToContent" class="liquid-glass-strong-button px-10 py-5 text-lg" style="color: var(--text-primary);">
              了解一下 →
            </button>
          </div>

          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16" id="stats">
            <div class="grid grid-cols-3 gap-12 lg:gap-16">
              <div class="text-center">
                <div class="text-5xl lg:text-6xl font-bold text-gradient mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">4</div>
                <div class="text-lg lg:text-xl" style="color: var(--text-secondary);">完成的个人项目</div>
              </div>
              <div class="text-center">
                <div class="text-5xl lg:text-6xl font-bold text-gradient mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">3.9</div>
                <div class="text-lg lg:text-xl" style="color: var(--text-secondary);">GPA绩点</div>
              </div>
              <div class="text-center">
                <div class="text-5xl lg:text-6xl font-bold text-gradient mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">5+</div>
                <div class="text-lg lg:text-xl" style="color: var(--text-secondary);">获奖情况</div>
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
                你好！我是呱鲨，一个充满好奇心和探索精神的大学生。我热爱编程、音乐、健身，也喜欢探索新事物。
              </p>
              <p class="text-lg lg:text-xl leading-relaxed" style="color: var(--text-secondary);">
                我的愿望是用技术改变世界，让生活变得更美好。在这里，我将分享我的大学生活、项目经历和技术探索。
              </p>
            </div>
          </div>

          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16" id="skills">
            <h2 class="text-3xl lg:text-4xl font-bold mb-10 flex items-center gap-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">
              <span style="color: #3B82F6;">02</span>
              <span style="color: var(--text-primary);">我的能力</span>
              <div class="flex-1 h-px" style="background-color: var(--border-color);"></div>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              <div class="liquid-glass rounded-[1rem] p-10 transition-all" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.03)'">
                <div class="text-4xl lg:text-5xl mb-6">💻</div>
                <h3 class="text-xl lg:text-2xl font-bold mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">编程能力</h3>
                <p class="text-base lg:text-lg" style="color: var(--text-secondary);">C/C++ · Python · JavaScript · TypeScript</p>
              </div>
              <div class="liquid-glass rounded-[1rem] p-10 transition-all" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.03)'">
                <div class="text-4xl lg:text-5xl mb-6">🎨</div>
                <h3 class="text-xl lg:text-2xl font-bold mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">前端开发</h3>
                <p class="text-base lg:text-lg" style="color: var(--text-secondary);">React · Vue · TailwindCSS · Vite</p>
              </div>
              <div class="liquid-glass rounded-[1rem] p-10 transition-all" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.03)'">
                <div class="text-4xl lg:text-5xl mb-6">🤖</div>
                <h3 class="text-xl lg:text-2xl font-bold mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">AI技术</h3>
                <p class="text-base lg:text-lg" style="color: var(--text-secondary);">机器学习 · 深度学习 · PyTorch</p>
              </div>
              <div class="liquid-glass rounded-[1rem] p-10 transition-all" style="color: var(--text-primary);" @mouseenter="($event.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.03)'">
                <div class="text-4xl lg:text-5xl mb-6">🔧</div>
                <h3 class="text-xl lg:text-2xl font-bold mb-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">其他技能</h3>
                <p class="text-base lg:text-lg" style="color: var(--text-secondary);">Git · Docker · Linux · 算法</p>
              </div>
            </div>
          </div>

          <div class="liquid-glass rounded-[1.25rem] p-12 lg:p-16" id="timeline">
            <h2 class="text-3xl lg:text-4xl font-bold mb-10 flex items-center gap-4" style="font-family: 'Instrument Serif', serif; font-style: italic;">
              <span style="color: #3B82F6;">03</span>
              <span style="color: var(--text-primary);">大学时间线</span>
              <div class="flex-1 h-px" style="background-color: var(--border-color);"></div>
            </h2>
            <div class="space-y-10">
              <div v-for="(item, index) in timeline" :key="index" class="flex gap-10">
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
</template>

<script setup lang="ts">
const timeline = [
  { year: '2023', title: '大一', description: '开始学习编程，加入编程社团' },
  { year: '2024', title: '大二', description: '参加多个编程比赛，获得奖项' },
  { year: '2025', title: '大三', description: '深入学习AI技术，完成多个项目' },
  { year: '2026', title: '大四', description: '准备毕业，寻找实习机会' }
]

const scrollToContent = () => {
  const element = document.getElementById('stats')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
