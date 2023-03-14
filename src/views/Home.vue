<template>
<div>
  <div class="topnavAndBanner">
    <Topnav class="nav"/>
    <div class="banner">
      <h1>PineappleUI</h1>
      <h2>一个面向学习者的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/Seanlau01/pineapple-ui">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-a-1"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-flash_on"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav
  },
};
</script>

<style lang="scss" scoped>
$green:#61C88A;
$border-radius: 20px;
$color: #007974;
$margin:2px;
.topnavAndBanner {
  background: linear-gradient(to bottom, #375C83 0%, #3C7266 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
  >.nav {
    color:#fff;
  }
}

.features {
  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;

    >ul {
      >li {
        width: calc(50% - 6*#{$margin});
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;

    >ul {
      >li {
        width: calc(33.3333% - 6*#{$margin});
      }
    }
  }

  >ul {
    display: flex;
    flex-wrap: wrap;

    >li {
      margin: 16px $margin;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      >h3 {
        grid-area: title;
        font-size: 28px;
      }

      >p {
        grid-area: text
      }
    }
  }
}

.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >h1 {
    color:#fff;
    font-size:40px;
    font-weight:600;
  }
  >h2 {
    font-size:16px;
     color:#96C8C9;
    
    
  }
  >.actions {
    padding: 8px 0;

    a {
      margin: 0 10px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
        box-shadow:0 0 14px 0 #fff;
      }
    }
  }
}
</style>
