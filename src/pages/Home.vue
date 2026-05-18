<template>
  <div class="min-h-screen pb-12" style="padding-top: calc(var(--navbar-height) + 1rem);">
    <div class="mx-auto max-w-[95vw] lg:max-w-7xl px-4 lg:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div class="lg:col-span-3 order-2 lg:order-1">
          <div class="glass-card sticky top-28 p-8 lg:p-10" id="profile-card">
            <div class="text-center mb-8">
              <div class="relative inline-block mb-6">
                <img
                  src="/cat.jpg"
                  alt="呱鲨"
                  class="w-40 h-40 lg:w-44 lg:h-44 rounded-2xl object-cover mx-auto shadow-lg"
                />
                <span class="absolute -top-3 -right-3 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                  呱
                </span>
              </div>
              <h2 class="text-3xl lg:text-4xl font-bold mb-3" style="color: var(--text-primary)">
                呱鲨
              </h2>
              <p class="text-base lg:text-lg" style="color: var(--text-secondary)">INTJ · 水瓶座</p>
            </div>

            <div class="border-t" style="border-color: var(--border-color); border-width: 1px; opacity: 0.1">
              <div class="space-y-4 pt-6">
                <div class="flex items-center gap-3 text-lg lg:text-xl font-medium" style="color: #ffffff; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">
                  <span style="color: #60a5fa; text-shadow: 0 0 8px rgba(96, 165, 250, 0.5);">📍</span>
                  <span>广州</span>
                </div>
                <div class="flex items-center gap-3 text-lg lg:text-xl font-medium" style="color: #ffffff; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">
                  <span style="color: #60a5fa; text-shadow: 0 0 8px rgba(96, 165, 250, 0.5);">🎓</span>
                  <span>在校大学生</span>
                </div>
                <div class="flex items-center gap-3 text-lg lg:text-xl font-medium" style="color: #ffffff; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">
                  <span style="color: #60a5fa; text-shadow: 0 0 8px rgba(96, 165, 250, 0.5);">💡</span>
                  <span>学习能力较强</span>
                </div>
              </div>
            </div>

            <div class="border-t pt-6 mt-6" style="border-color: var(--border-color); border-width: 1px; opacity: 0.1">
              <div class="flex justify-center gap-4">
                <a href="#" class="hover:text-white transition-colors" style="color: #ffffff; text-shadow: 0 1px 3px rgba(0,0,0,0.3);" title="微信">
                  <span class="text-2xl lg:text-3xl">💬</span>
                </a>
                <a href="#" class="hover:text-white transition-colors" style="color: #ffffff; text-shadow: 0 1px 3px rgba(0,0,0,0.3);" title="GitHub">
                  <span class="text-2xl lg:text-3xl">🐙</span>
                </a>
                <a href="#" class="hover:text-white transition-colors" style="color: #ffffff; text-shadow: 0 1px 3px rgba(0,0,0,0.3);" title="邮箱">
                  <span class="text-2xl lg:text-3xl">📧</span>
                </a>
                <a href="#" class="hover:text-white transition-colors" style="color: #ffffff; text-shadow: 0 1px 3px rgba(0,0,0,0.3);" title="QQ">
                  <span class="text-2xl lg:text-3xl">📱</span>
                </a>
              </div>
            </div>

            <div class="border-t pt-6 mt-6" style="border-color: var(--border-color); border-width: 1px; opacity: 0.1">
              <button class="w-full glass-button py-4 text-lg lg:text-xl font-semibold" style="color: #ffffff; text-shadow: 0 1px 3px rgba(0,0,0,0.3);">
                联系我
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-9 order-1 lg:order-2 space-y-8">
          <div class="glass-card p-10 lg:p-12">
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gradient">
              欢迎来到呱鲨的大学生活
            </h1>
            <p class="text-2xl lg:text-3xl mb-8" style="color: var(--text-secondary)">
              用液态玻璃风格，记录我的大学点滴
            </p>
            <button @click="scrollToContent" class="glass-button px-8 py-4 text-lg hover:bg-bg/20">
              了解一下 →
            </button>
          </div>

          <div class="glass-card p-10 lg:p-12" id="stats">
            <div class="grid grid-cols-3 gap-8 lg:gap-12">
              <div class="text-center">
                <div class="text-5xl lg:text-6xl font-bold text-gradient mb-3">4</div>
                <div class="text-lg lg:text-xl" style="color: var(--text-secondary)">完成的个人项目</div>
              </div>
              <div class="text-center">
                <div class="text-5xl lg:text-6xl font-bold text-gradient mb-3">3.9</div>
                <div class="text-lg lg:text-xl" style="color: var(--text-secondary)">GPA绩点</div>
              </div>
              <div class="text-center">
                <div class="text-5xl lg:text-6xl font-bold text-gradient mb-3">5+</div>
                <div class="text-lg lg:text-xl" style="color: var(--text-secondary)">获奖情况</div>
              </div>
            </div>
          </div>

          <div class="glass-card p-10 lg:p-12" id="about">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8 flex items-center gap-4">
              <span style="color: #3B82F6">01</span>
              <span style="color: var(--text-primary)">我的故事</span>
              <div class="flex-1 h-px" style="background-color: var(--border-color); opacity: 0.1"></div>
            </h2>
            <div class="space-y-4">
              <p class="text-lg lg:text-xl leading-relaxed" style="color: var(--text-secondary)">
                你好！我是呱鲨，一个充满好奇心和探索精神的大学生。我热爱编程、音乐、健身，也喜欢探索新事物。
              </p>
              <p class="text-lg lg:text-xl leading-relaxed" style="color: var(--text-secondary)">
                我的愿望是用技术改变世界，让生活变得更美好。在这里，我将分享我的大学生活、项目经历和技术探索。
              </p>
            </div>
          </div>

          <div class="glass-card p-10 lg:p-12" id="skills">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8 flex items-center gap-4">
              <span style="color: #3B82F6">02</span>
              <span style="color: var(--text-primary)">我的能力</span>
              <div class="flex-1 h-px" style="background-color: var(--border-color); opacity: 0.1"></div>
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div class="glass-card p-8 hover:bg-bg/15 transition-all">
                <div class="text-4xl lg:text-5xl mb-4">💻</div>
                <h3 class="text-xl lg:text-2xl font-bold mb-3" style="color: var(--text-primary)">编程能力</h3>
                <p class="text-base lg:text-lg" style="color: var(--text-secondary)">C/C++ · Python · JavaScript · TypeScript</p>
              </div>
              <div class="glass-card p-8 hover:bg-bg/15 transition-all">
                <div class="text-4xl lg:text-5xl mb-4">🎨</div>
                <h3 class="text-xl lg:text-2xl font-bold mb-3" style="color: var(--text-primary)">前端开发</h3>
                <p class="text-base lg:text-lg" style="color: var(--text-secondary)">React · Vue · TailwindCSS · Vite</p>
              </div>
              <div class="glass-card p-8 hover:bg-bg/15 transition-all">
                <div class="text-4xl lg:text-5xl mb-4">🤖</div>
                <h3 class="text-xl lg:text-2xl font-bold mb-3" style="color: var(--text-primary)">AI技术</h3>
                <p class="text-base lg:text-lg" style="color: var(--text-secondary)">机器学习 · 深度学习 · PyTorch</p>
              </div>
              <div class="glass-card p-8 hover:bg-bg/15 transition-all">
                <div class="text-4xl lg:text-5xl mb-4">🔧</div>
                <h3 class="text-xl lg:text-2xl font-bold mb-3" style="color: var(--text-primary)">其他技能</h3>
                <p class="text-base lg:text-lg" style="color: var(--text-secondary)">Git · Docker · Linux · 算法</p>
              </div>
            </div>
          </div>

          <div class="glass-card p-10 lg:p-12" id="timeline">
            <h2 class="text-3xl lg:text-4xl font-bold mb-8 flex items-center gap-4">
              <span style="color: #3B82F6">03</span>
              <span style="color: var(--text-primary)">大学时间线</span>
              <div class="flex-1 h-px" style="background-color: var(--border-color); opacity: 0.1"></div>
            </h2>
            <div class="space-y-8">
              <div v-for="(item, index) in timeline" :key="index" class="flex gap-8">
                <div class="flex-shrink-0 w-32 text-right">
                  <div class="text-lg lg:text-xl font-bold" style="color: #3B82F6">{{ item.year }}</div>
                </div>
                <div class="relative flex-1 pl-4">
                  <div class="absolute -left-6 top-3 w-4 h-4 rounded-full border-2 border-white shadow-lg" style="background-color: #3B82F6; z-index: 10;"></div>
                  <div class="pl-8">
                    <h4 class="text-xl lg:text-2xl font-bold mb-2" style="color: var(--text-primary)">{{ item.title }}</h4>
                    <p class="text-base lg:text-lg" style="color: var(--text-secondary)">{{ item.description }}</p>
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
