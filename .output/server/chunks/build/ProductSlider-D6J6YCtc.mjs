import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import _sfc_main$3 from './svg-icon-BopcabGT.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './InputNumber-iaylYKMB.mjs';
import { _ as __nuxt_component_2$1 } from './Button-DuwhWeWl.mjs';

const _sfc_main$2 = {
  props: {
    link: {
      type: Boolean,
      default: false
    },
    linkText: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: "#"
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_svg_icon = _sfc_main$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "title" }, _attrs))} data-v-4d7c1b75><h2 class="title__h2" data-v-4d7c1b75>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h2>`);
  if ($props.link) {
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: $props.url,
      class: "title__link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span data-v-4d7c1b75${_scopeId}>${ssrInterpolate($props.linkText)}</span>`);
          _push2(ssrRenderComponent(_component_svg_icon, {
            class: "title__icon",
            width: "24",
            height: "24",
            name: "arrow-right"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode("span", null, toDisplayString($props.linkText), 1),
            createVNode(_component_svg_icon, {
              class: "title__icon",
              width: "24",
              height: "24",
              name: "arrow-right"
            })
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Title.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-4d7c1b75"]]);
const _sfc_main$1 = {
  props: {
    card: {
      type: Object,
      default: () => {
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_ui_input_number = __nuxt_component_1$1;
  const _component_ui_button = __nuxt_component_2$1;
  const _component_svg_icon = _sfc_main$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "product-card" }, _attrs))} data-v-72f6bf7f><div class="product-card__slider" data-v-72f6bf7f><swiper-container pagination="true"${ssrRenderAttr("allow-touch-move", _ctx.$route.path.includes("catalog") ? true : false)} slides-per-view="1" auto-height="true" data-v-72f6bf7f><!--[-->`);
  ssrRenderList($props.card.images, (item, index) => {
    _push(`<swiper-slide data-v-72f6bf7f><div class="product-card__images" data-v-72f6bf7f><img class="product-card__img"${ssrRenderAttr("src", item)} alt="" data-v-72f6bf7f></div></swiper-slide>`);
  });
  _push(`<!--]--></swiper-container></div><div class="product-card__info" data-v-72f6bf7f>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "product-card__text",
    to: $props.card.link
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h3 class="product-card__title h3" data-v-72f6bf7f${_scopeId}>${ssrInterpolate($props.card.title)}</h3><span class="product-card__price" data-v-72f6bf7f${_scopeId}>${ssrInterpolate($props.card.price)}</span>`);
      } else {
        return [
          createVNode("h3", { class: "product-card__title h3" }, toDisplayString($props.card.title), 1),
          createVNode("span", { class: "product-card__price" }, toDisplayString($props.card.price), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="product-card__actions" data-v-72f6bf7f>`);
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-72f6bf7f"]]);
const _sfc_main = {
  props: {
    cards: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_product_card = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper" }, _attrs))} data-v-7e775dba><swiper-container class="product-slider"${ssrRenderAttr("breakpoints", {
    0: {
      slidesPerView: 1
    },
    500: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1280: {
      slidesPerView: 4
    }
  })} mousewheel="false" allow-touch-move="true" space-between="60" data-v-7e775dba><!--[-->`);
  ssrRenderList($props.cards, (item, index) => {
    _push(`<swiper-slide class="product-slider__item" data-v-7e775dba>`);
    _push(ssrRenderComponent(_component_product_card, { card: item }, null, _parent));
    _push(`</swiper-slide>`);
  });
  _push(`<!--]--></swiper-container></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7e775dba"]]);

export { __nuxt_component_1 as _, __nuxt_component_2 as a, __nuxt_component_0 as b };
//# sourceMappingURL=ProductSlider-D6J6YCtc.mjs.map
