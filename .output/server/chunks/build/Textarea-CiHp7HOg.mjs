import { _ as __nuxt_component_2 } from './Button-DuwhWeWl.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {
  props: {
    formFields: {
      type: Array,
      default: () => []
    },
    btnText: {
      type: String,
      default: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ui_button = __nuxt_component_2;
  _push(`<form${ssrRenderAttrs(mergeProps({ class: "form" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_ui_button, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate($props.btnText)}`);
      } else {
        return [
          createTextVNode(toDisplayString($props.btnText), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</form>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Form.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439..."
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "textarea" }, _attrs))} data-v-e64d5d26><label class="textarea__label" data-v-e64d5d26>${ssrInterpolate($props.label)} <textarea class="textarea__field"${ssrRenderAttr("name", $props.name)}${ssrRenderAttr("id", $props.id)}${ssrRenderAttr("placeholder", $props.placeholder)} cols="10" rows="5" data-v-e64d5d26></textarea></label></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Textarea.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e64d5d26"]]);

export { __nuxt_component_3 as _, __nuxt_component_5 as a };
//# sourceMappingURL=Textarea-CiHp7HOg.mjs.map
