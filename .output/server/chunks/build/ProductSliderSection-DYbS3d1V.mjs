import { _ as __nuxt_component_0 } from './TheSection-mbyzIumG.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from './ProductSlider-F7xwOJk-.mjs';
import { mergeProps, withCtx, renderSlot, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  props: {
    sliderList: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_section = __nuxt_component_0;
  const _component_app_title = __nuxt_component_1;
  const _component_product_slider = __nuxt_component_2;
  _push(ssrRenderComponent(_component_the_section, mergeProps({ class: "product-slider-section" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_app_title, {
          link: "",
          "link-text": "\u0432\u0441\u0435 \u0430\u043A\u0446\u0438\u0438"
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
            "link-text": "\u0432\u0441\u0435 \u0430\u043A\u0446\u0438\u0438"
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }),
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
//# sourceMappingURL=ProductSliderSection-DYbS3d1V.mjs.map
