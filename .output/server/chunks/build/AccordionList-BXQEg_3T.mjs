import _sfc_main$2 from './svg-icon-C_daPMru.mjs';
import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {
  props: {
    acc: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      isOpen: false
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_icon = _sfc_main$2;
  _push(`<li${ssrRenderAttrs(mergeProps({ class: "accordion-list-item" }, _attrs))} data-v-83bb53ad><button class="accordion-list-item__btn" data-v-83bb53ad><span data-v-83bb53ad>${ssrInterpolate($props.acc.title)}</span>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    name: $data.isOpen ? "remove-minus" : "add-plus",
    width: "24",
    height: "24"
  }, null, _parent));
  _push(`</button>`);
  if ($data.isOpen) {
    _push(`<div class="accordion-list-item__content" data-v-83bb53ad><div class="accordion-list-item__markup" data-v-83bb53ad>${$props.acc.text}</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/AccordionListItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-83bb53ad"]]);
const _sfc_main = {
  props: {
    accList: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ui_accordion_list_item = __nuxt_component_0;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "accordion-list" }, _attrs))} data-v-3a42d7ee><!--[-->`);
  ssrRenderList($props.accList, (item, index) => {
    _push(ssrRenderComponent(_component_ui_accordion_list_item, {
      key: index,
      acc: item
    }, null, _parent));
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/AccordionList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3a42d7ee"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=AccordionList-BXQEg_3T.mjs.map
