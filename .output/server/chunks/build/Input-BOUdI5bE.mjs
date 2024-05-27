import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderDynamicModel } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  props: {
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      value: ""
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "input" }, _attrs))} data-v-0830d941><label class="input__label" data-v-0830d941>${ssrInterpolate($props.label)} <input${ssrRenderAttr("type", $props.type)}${ssrRenderAttr("id", $props.id)}${ssrRenderAttr("placeholder", $props.placeholder)}${ssrRenderDynamicModel($props.type, $data.value, null)} class="input__field" data-v-0830d941></label></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0830d941"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Input-BOUdI5bE.mjs.map
