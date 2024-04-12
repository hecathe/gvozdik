<template>
    <div class="checkbox">
        <input class="checkbox__input visually-hidden" type="checkbox" :name="name" :id="id">
        <span></span>
        <label class="checkbox__label" :for="id">
            <slot></slot>
        </label>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: '',
        },
        name: {
            type: String,
            default: '',
        }
    }
}
</script>

<style lang="scss" scoped>
.checkbox {
    display: grid;
    grid-template-columns: 24px 1fr;
    column-gap: 12px;

    span {
        position: relative;
        display: flex;
        width: 24px;
        height: 24px;
        background-color: $white;

        &::after {
            display: none;
            position: absolute;
            content: '';
            left: 0px;
            top: 0;
            width: 24px;
            height: 24px;
            background-image: url('assets/sprite/svg/check.svg');
        }
    }

    &__input:checked + span::after {
        display: block;
    }
}
</style>