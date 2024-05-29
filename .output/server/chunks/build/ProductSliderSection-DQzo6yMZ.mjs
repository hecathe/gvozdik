import { _ as __nuxt_component_0 } from './TheSection-55IjZ0Ou.mjs';
import { _ as __nuxt_component_1 } from './Title-Dyxyn3i3.mjs';
import { _ as __nuxt_component_7 } from './ProductSlider-8XOnfrGB.mjs';
import { mergeProps, withCtx, renderSlot, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  props: {
    sliderList: {
      type: Array,
      default: () => []
    },
    url: {
      type: String,
      default: "#"
    },
    linkText: {
      type: String,
      default: "\u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0441\u0451"
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_section = __nuxt_component_0;
  const _component_app_title = __nuxt_component_1;
  const _component_product_slider = __nuxt_component_7;
  _push(ssrRenderComponent(_component_the_section, mergeProps({ class: "product-slider-section" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_app_title, {
          link: "",
          "link-text": $props.linkText,
          url: $props.url
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_product_slider, { cards: $props.sliderList }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_app_title, {
            link: "",
            "link-text": $props.linkText,
            url: $props.url
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["link-text", "url"]),
          createVNode(_component_product_slider, { cards: $props.sliderList }, null, 8, ["cards"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductSliderSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=ProductSliderSection-DQzo6yMZ.mjs.map
