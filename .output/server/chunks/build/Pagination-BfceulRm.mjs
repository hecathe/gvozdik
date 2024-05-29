import { _ as __nuxt_component_2 } from './Button-DuwhWeWl.mjs';
import { _ as __nuxt_component_2$1 } from './client-only-BCdukaZs.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  props: {
    totalCards: {
      type: Number,
      default: 20,
      required: true
    },
    cardsPerPage: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      currentPage: 1
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ui_button = __nuxt_component_2;
  const _component_ClientOnly = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pagination" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_ui_button, { class: "pagination__btn" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0451`);
      } else {
        return [
          createTextVNode("\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0451")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=Pagination-BfceulRm.mjs.map
