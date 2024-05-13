import _sfc_main$1 from './svg-icon-C-TKLOKq.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_icon = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "number" }, _attrs))} data-v-e7672189><button class="number__btn" aria-label="\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C" data-v-e7672189>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    width: "24",
    height: "24",
    name: "remove-minus"
  }, null, _parent));
  _push(`</button><input${ssrRenderAttr("value", $data.value)} class="number__input" type="number" step="1" min="1" data-v-e7672189><button class="number__btn" aria-label="\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C" data-v-e7672189>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    width: "24",
    height: "24",
    name: "add-plus"
  }, null, _parent));
  _push(`</button></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/InputNumber.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e7672189"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=InputNumber-Dt29a5r_.mjs.map
