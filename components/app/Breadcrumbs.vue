<template>
  <the-section class="breadcrumbs">
    <ul class="breadcrumbs__list">
      <li
        class="breadcrumbs__item"
        v-for="(breadItem, index) in breadcrumbs"
        :key="index"
      >
        <nuxt-link
          class="breadcrumbs__link"
          :class="{active: breadItem.active}"
          :to="breadItem.link"
          >{{ breadItem.title }}</nuxt-link
        >
      </li>
    </ul>
  </the-section>
</template>

<script>
export default {
  props: {
    breadcrumbs: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  margin-bottom: 40px;

  &__list {
    display: flex;
    column-gap: 32px;
    @include reset-list;
  }

  &__item {
    position: relative;

    &:not(:last-child)::after {
        position: absolute;
        content: '/';
        right: -20px;
    }
  }

  &__link {
    color: inherit;
    text-decoration: none;
    transition: color 150ms linear;

    &.active {
      font-weight: 700;
    }

    &:hover {
        color: $mainBlue;
    }
  }
}
</style>
