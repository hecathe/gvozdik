import { _ as __nuxt_component_0$1 } from './TheSection-55IjZ0Ou.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-P6SDANQl.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_the_section = __nuxt_component_0$1;
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_the_section, mergeProps({ class: "breadcrumbs" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<ul class="breadcrumbs__list" data-v-dc7310e9${_scopeId}><!--[-->`);
        ssrRenderList($props.breadcrumbs, (breadItem, index) => {
          _push2(`<li class="breadcrumbs__item" data-v-dc7310e9${_scopeId}>`);
          _push2(ssrRenderComponent(_component_nuxt_link, {
            class: ["breadcrumbs__link", { active: breadItem.active }],
            to: breadItem.link
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(breadItem.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(breadItem.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</li>`);
        });
        _push2(`<!--]--></ul>`);
      } else {
        return [
          createVNode("ul", { class: "breadcrumbs__list" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($props.breadcrumbs, (breadItem, index) => {
              return openBlock(), createBlock("li", {
                class: "breadcrumbs__item",
                key: index
              }, [
                createVNode(_component_nuxt_link, {
                  class: ["breadcrumbs__link", { active: breadItem.active }],
                  to: breadItem.link
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(breadItem.title), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "to"])
              ]);
            }), 128))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Breadcrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dc7310e9"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Breadcrumbs-CwrKlUWl.mjs.map
