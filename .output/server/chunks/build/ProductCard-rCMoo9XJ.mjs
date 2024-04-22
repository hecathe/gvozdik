import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import _sfc_main$2 from './svg-icon-BzhGSkRY.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_2 } from './Button-DuwhWeWl.mjs';

const _sfc_main$1 = {
  data() {
    return {
      value: 1
    };
  },
  methods: {
    increment() {
      return this.value++;
    },
    decrement() {
      if (this.value < 1) {
        return this.value;
      }
      return this.value--;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_icon = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "number" }, _attrs))} data-v-ff168d0c><button class="number__btn" aria-label="\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C" data-v-ff168d0c>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    width: "24",
    height: "24",
    name: "remove-minus"
  }, null, _parent));
  _push(`</button><input${ssrRenderAttr("value", $data.value)} class="number__input" type="number" step="1" min="1" data-v-ff168d0c><button class="number__btn" aria-label="\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C" data-v-ff168d0c>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    width: "24",
    height: "24",
    name: "add-plus"
  }, null, _parent));
  _push(`</button></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/InputNumber.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ff168d0c"]]);
const _sfc_main = {
  props: {
    card: {
      type: Object,
      default: () => {
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_ui_input_number = __nuxt_component_1;
  const _component_ui_button = __nuxt_component_2;
  const _component_svg_icon = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-card" }, _attrs))} data-v-d982d94f><swiper-container pagination="true"${ssrRenderAttr("allow-touch-move", _ctx.$route.path.includes("catalog") ? true : false)} slides-per-view="1" auto-height="true" data-v-d982d94f><!--[-->`);
  ssrRenderList($props.card.images, (item, index) => {
    _push(`<swiper-slide data-v-d982d94f><div class="product-card__images" data-v-d982d94f><img class="product-card__img"${ssrRenderAttr("src", item)} alt="" data-v-d982d94f></div></swiper-slide>`);
  });
  _push(`<!--]--></swiper-container><div class="product-card__info" data-v-d982d94f>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "product-card__text",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3 class="product-card__title h3" data-v-d982d94f${_scopeId}>${ssrInterpolate($props.card.title)}</h3><span class="product-card__price" data-v-d982d94f${_scopeId}>${ssrInterpolate($props.card.price)}</span>`);
      } else {
        return [
          createVNode("h3", { class: "product-card__title h3" }, toDisplayString($props.card.title), 1),
          createVNode("span", { class: "product-card__price" }, toDisplayString($props.card.price), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="product-card__actions" data-v-d982d94f>`);
  _push(ssrRenderComponent(_component_ui_input_number, null, null, _parent));
  _push(ssrRenderComponent(_component_ui_button, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_svg_icon, {
          width: "24",
          height: "24",
          name: "cart"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_svg_icon, {
            width: "24",
            height: "24",
            name: "cart"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d982d94f"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ProductCard-rCMoo9XJ.mjs.map
