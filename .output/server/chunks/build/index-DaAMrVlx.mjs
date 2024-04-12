import { _ as __nuxt_component_0 } from './Breadcrumbs-D72gJu_z.mjs';
import { _ as __nuxt_component_1 } from './TheSection-CfXk1VPd.mjs';
import _sfc_main$3 from './svg-icon-sKpFR-ei.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'swiper/element/bundle';

const _sfc_main$2 = {
  props: {
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkbox" }, _attrs))} data-v-f32a2657><input class="checkbox__input visually-hidden" type="checkbox"${ssrRenderAttr("name", $props.name)}${ssrRenderAttr("id", $props.id)} data-v-f32a2657><span data-v-f32a2657></span><label class="checkbox__label"${ssrRenderAttr("for", $props.id)} data-v-f32a2657>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</label></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Checkbox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-f32a2657"]]);
const _sfc_main$1 = {
  props: {
    title: {
      type: String,
      default: ""
    },
    showMore: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: () => []
    },
    isLink: {
      type: Boolean,
      default: false
    },
    isInputCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_icon = _sfc_main$3;
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_ui_checkbox = __nuxt_component_2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "drop-down" }, _attrs))} data-v-41b608b4><button class="drop-down__btn" data-v-41b608b4><span data-v-41b608b4>${ssrInterpolate($props.title)}</span>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    name: $data.isOpen ? "arrow-up" : "arrow-down",
    width: "24",
    height: "24"
  }, null, _parent));
  _push(`</button>`);
  if ($data.isOpen) {
    _push(`<div class="drop-down__content" data-v-41b608b4><ul class="drop-down-list" data-v-41b608b4><!--[-->`);
    ssrRenderList($props.list, (item, index2) => {
      _push(`<li class="drop-down-list__item" data-v-41b608b4>`);
      if ($props.isLink) {
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "drop-down-list__link",
          to: item.url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_svg_icon, {
                name: item.icon,
                width: "24",
                height: "24"
              }, null, _parent2, _scopeId));
              _push2(`<span data-v-41b608b4${_scopeId}>${ssrInterpolate(item.name)}</span>`);
            } else {
              return [
                createVNode(_component_svg_icon, {
                  name: item.icon,
                  width: "24",
                  height: "24"
                }, null, 8, ["name"]),
                createVNode("span", null, toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      } else if ($props.isInputCheckbox) {
        _push(ssrRenderComponent(_component_ui_checkbox, {
          id: index2,
          name: $props.title
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    });
    _push(`<!--]--></ul>`);
    if ($props.showMore) {
      _push(`<button class="drop-down__btn-more" data-v-41b608b4>\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0451</button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/DropdownList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-41b608b4"]]);
const _sfc_main = {
  data() {
    return {
      breadcrumbs: [
        {
          link: "/",
          title: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
          active: false
        },
        {
          link: "/catalog/",
          title: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
          active: false
        },
        {
          link: "#",
          title: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442",
          active: true
        }
      ],
      category: [
        {
          name: "\u0421\u0442\u0440\u043E\u0439\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B",
          url: "/catalog/stroy/",
          icon: "lucide_brick-wall"
        },
        {
          name: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442",
          url: "/catalog/tools/",
          icon: "material-symbols_construction-rounded"
        },
        {
          name: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430",
          url: "/catalog/electric/",
          icon: "icon-park-outline_power-supply-one"
        }
      ],
      type: [
        {
          name: "\u0417\u0430\u0436\u0438\u043C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430"
        },
        {
          name: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0441\u0430\u0434\u043E\u0432\u044B\u0439"
        },
        {
          name: "\u041C\u043E\u043D\u0442\u0430\u0436\u043D\u044B\u0439 \u0438 \u043A\u0440\u0435\u043F\u0451\u0436\u043D\u044B\u0439"
        },
        {
          name: "\u041D\u0430\u0431\u043E\u0440\u044B \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_breadcrumbs = __nuxt_component_0;
  const _component_the_section = __nuxt_component_1;
  const _component_ui_dropdown_list = __nuxt_component_2;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-0e8c30d3>`);
  _push(ssrRenderComponent(_component_app_breadcrumbs, { breadcrumbs: $data.breadcrumbs }, null, _parent));
  _push(ssrRenderComponent(_component_the_section, { class: "catalog-category" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="catalog-category__wrap" data-v-0e8c30d3${_scopeId}><div class="catalog-category__aside" data-v-0e8c30d3${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ui_dropdown_list, {
          title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
          list: $data.category,
          "show-more": "",
          "is-link": "true"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ui_dropdown_list, {
          title: "\u0422\u0438\u043F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430",
          list: $data.type,
          "is-input-checkbox": "true"
        }, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "catalog-category__wrap" }, [
            createVNode("div", { class: "catalog-category__aside" }, [
              createVNode(_component_ui_dropdown_list, {
                title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
                list: $data.category,
                "show-more": "",
                "is-link": "true"
              }, null, 8, ["list"]),
              createVNode(_component_ui_dropdown_list, {
                title: "\u0422\u0438\u043F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430",
                list: $data.type,
                "is-input-checkbox": "true"
              }, null, 8, ["list"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/[category]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0e8c30d3"]]);

export { index as default };
//# sourceMappingURL=index-DaAMrVlx.mjs.map
