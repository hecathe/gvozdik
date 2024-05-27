import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import _sfc_main$2 from './svg-icon-C_daPMru.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_2 } from './client-only-BCdukaZs.mjs';

const _sfc_main$1 = {
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0;
  const _component_svg_icon = _sfc_main$2;
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Title.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-4d7c1b75"]]);
const _sfc_main = {
  props: {
    cards: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "swiper" }, _attrs))} data-v-3a05772d>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3a05772d"]]);

export { __nuxt_component_1 as _, __nuxt_component_7 as a };
//# sourceMappingURL=ProductSlider-Bk547R3M.mjs.map
