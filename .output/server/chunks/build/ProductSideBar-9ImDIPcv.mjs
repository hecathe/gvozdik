import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1 } from './InputNumber-iaylYKMB.mjs';
import _sfc_main$3 from './svg-icon-BopcabGT.mjs';
import { _ as __nuxt_component_2$2 } from './Button-DuwhWeWl.mjs';

const _sfc_main$2 = {
  props: {
    width: {
      type: Number,
      default: 40
    },
    height: {
      type: Number,
      default: 40
    }
  },
  data() {
    return {
      isAddedFav: false
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_icon = _sfc_main$3;
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: ["button-like", { checked: $data.isAddedFav }]
  }, _attrs))} data-v-8e291615>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    name: "heart",
    width: $props.width,
    height: $props.height
  }, null, _parent));
  _push(`</button>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ButtonLike.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-8e291615"]]);
const _sfc_main$1 = {
  props: {
    infoList: {
      type: Array,
      default: ""
    },
    isBold: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "product-info-list" }, _attrs))} data-v-0c6743e9><!--[-->`);
  ssrRenderList($props.infoList, (item, index) => {
    _push(`<li class="product-info-list__item" data-v-0c6743e9><span data-v-0c6743e9>${ssrInterpolate(item.key)}</span><span class="${ssrRenderClass({ bold: $props.isBold })}" data-v-0c6743e9>${ssrInterpolate(item.value)}</span></li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductInfoList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-0c6743e9"]]);
const _sfc_main = {
  props: {
    sideInfoList: {
      type: Array,
      default: () => []
    },
    summary: {
      type: Object,
      default: () => {
      }
    },
    delivery: {
      type: Object,
      default: () => {
      }
    },
    show: {
      type: Boolean,
      default: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_product_info_list = __nuxt_component_2;
  const _component_ui_input_number = __nuxt_component_1;
  const _component_ui_button_like = __nuxt_component_2$1;
  const _component_ui_button = __nuxt_component_2$2;
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "product-sidebar" }, _attrs))} data-v-54e5472f>`);
  _push(ssrRenderComponent(_component_product_info_list, {
    "info-list": $props.sideInfoList,
    "is-bold": ""
  }, null, _parent));
  _push(`<div class="product-sidebar__summary" data-v-54e5472f><!--[-->`);
  ssrRenderList($props.summary, (item, index) => {
    _push(`<span data-v-54e5472f>${ssrInterpolate(item)}</span>`);
  });
  _push(`<!--]--></div><div class="product-sidebar__buttons" data-v-54e5472f>`);
  if ($props.show) {
    _push(`<div class="product-sidebar__btn-wrap" data-v-54e5472f>`);
    _push(ssrRenderComponent(_component_ui_input_number, null, null, _parent));
    _push(ssrRenderComponent(_component_ui_button_like, null, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_ui_button, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443`);
      } else {
        return [
          createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="product-sidebar__delivery" data-v-54e5472f><!--[-->`);
  ssrRenderList($props.delivery, (item, index) => {
    _push(`<span data-v-54e5472f>${ssrInterpolate(item)}</span>`);
  });
  _push(`<!--]--></div></aside>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductSideBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-54e5472f"]]);

export { __nuxt_component_3 as _, __nuxt_component_2$1 as a, __nuxt_component_2 as b };
//# sourceMappingURL=ProductSideBar-9ImDIPcv.mjs.map
