<template>
    <div class="menu">
        <div class="container">
            <ul class="menu__aside">
                <li v-for="(item, index) in asideMenu" :key="index">
                    <nuxt-link :to="item.url">{{ item.name }}</nuxt-link>
                </li>
            </ul>

            <div>
                <h2>Инструмент</h2>
                <ul>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        asideMenu: {
            type: Array,
            default: () => [],
        }
    }
}
</script>

<style scoped>
.menu {
    position: absolute;
}
</style>