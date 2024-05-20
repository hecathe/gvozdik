import { _ as __nuxt_component_2 } from './Button-DuwhWeWl.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  props: {
    // totalPages: {
    //     type: Number,
    // }
  },
  data() {
    return {
      totalPages: 5
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ui_button = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "pagination" }, _attrs))} data-v-85926bbf>`);
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
  _push(`<ul class="pagination__list pagination-list" data-v-85926bbf><!--[-->`);
  ssrRenderList($data.totalPages, (item, index) => {
    _push(`<li class="pagination__item pagination-list__item" data-v-85926bbf><button class="pagination-list__btn" data-v-85926bbf>${ssrInterpolate(item)}</button></li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-85926bbf"]]);

export { __nuxt_component_3 as _ };
//# sourceMappingURL=Pagination-C5S-j_45.mjs.map
