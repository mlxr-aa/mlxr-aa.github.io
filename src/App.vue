<template>
  <div class="container">
    <header class="header">
      <h1 class="title">麻辣仙人-aa</h1>
      <p class="subtitle">项目导航中心</p>
      <p class="author">作者：麻辣仙人-aa</p>
    </header>

    <main>
      <div class="projects-grid">
        <a
          v-for="project in projects"
          :key="project.id"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card"
        >
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <span class="project-link">访问项目</span>
        </a>
      </div>
    </main>

    <footer class="footer">
      <p>© 2024 麻辣仙人-aa. 所有项目均托管在 GitHub Pages</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'MalaQuad',
          description: '麻辣四格项目,为大家提供麻辣小故事的创作和分享平台',
          url: 'https://mlxr-aa.github.io/MalaQuad/#/',
        },
      ],
    }
  },
}
</script>
