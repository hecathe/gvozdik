import { _ as __nuxt_component_0 } from './Breadcrumbs-D72gJu_z.mjs';
import { _ as __nuxt_component_1 } from './TheSection-CfXk1VPd.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3, b as __nuxt_component_4 } from './ProductSlider-4bWgdrox.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-P6SDANQl.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './svg-icon-BzhGSkRY.mjs';
import './ProductCard-rCMoo9XJ.mjs';
import './Button-DuwhWeWl.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'swiper/element/bundle';

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
          link: "#",
          title: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
          active: true
        }
      ],
      catalogNav: [
        {
          title: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
          url: "images/y-tools.jpg",
          link: "/catalog/tools",
          span: false
        },
        {
          title: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430",
          url: "images/y-tools.jpg",
          link: "/catalog/electric",
          span: false
        },
        {
          title: "\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0430",
          url: "images/y-tools.jpg",
          link: "/catalog/santechnika",
          span: false
        },
        {
          title: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
          url: "images/y-tools.jpg",
          link: "/catalog/instrumenty",
          span: false
        },
        {
          title: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430",
          url: "images/y-tools.jpg",
          link: "/catalog/instrumenty",
          span: false
        },
        {
          title: "\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0430",
          url: "images/y-tools.jpg",
          link: "/catalog/instrumenty",
          span: false
        },
        {
          title: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
          url: "images/y-tools.jpg",
          link: "/catalog/instrumenty",
          span: false
        },
        {
          title: "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430",
          url: "images/y-tools.jpg",
          link: "/catalog/instrumenty",
          span: false
        },
        {
          title: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435",
          url: "images/y-tools.jpg",
          link: "/catalog/popular",
          span: true
        },
        {
          title: "\u0410\u043A\u0446\u0438\u0438",
          url: "images/y-tools.jpg",
          link: "/catalog/sales",
          span: true
        }
      ],
      saleCards: [
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        }
      ],
      newCards: [
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        },
        {
          images: ["images/goods-item-1.jpg", "images/goods-item-1.jpg", "images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_breadcrumbs = __nuxt_component_0;
  const _component_the_section = __nuxt_component_1;
  const _component_catalog_nav = __nuxt_component_2;
  const _component_app_title = __nuxt_component_3;
  const _component_product_slider = __nuxt_component_4;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_app_breadcrumbs, { breadcrumbs: $data.breadcrumbs }, null, _parent));
  _push(ssrRenderComponent(_component_the_section, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_catalog_nav, { "catalog-nav": $data.catalogNav }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_catalog_nav, { "catalog-nav": $data.catalogNav }, null, 8, ["catalog-nav"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_the_section, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_app_title, {
          link: "",
          "link-text": "\u0432\u0441\u0435 \u0430\u043A\u0446\u0438\u0438"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u0422\u043E\u0432\u0430\u0440\u044B \u043F\u043E \u0430\u043A\u0446\u0438\u0438 / \u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435`);
            } else {
              return [
                createTextVNode("\u0422\u043E\u0432\u0430\u0440\u044B \u043F\u043E \u0430\u043A\u0446\u0438\u0438 / \u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_product_slider, { cards: $data.saleCards }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_app_title, {
            link: "",
            "link-text": "\u0432\u0441\u0435 \u0430\u043A\u0446\u0438\u0438"
          }, {
            default: withCtx(() => [
              createTextVNode("\u0422\u043E\u0432\u0430\u0440\u044B \u043F\u043E \u0430\u043A\u0446\u0438\u0438 / \u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435")
            ]),
            _: 1
          }),
          createVNode(_component_product_slider, { cards: $data.saleCards }, null, 8, ["cards"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_the_section, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_app_title, {
          link: "",
          "link-text": "\u0432\u0441\u0435 \u043D\u043E\u0432\u0438\u043D\u043A\u0438"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u041D\u043E\u0432\u0438\u043D\u043A\u0438`);
            } else {
              return [
                createTextVNode("\u041D\u043E\u0432\u0438\u043D\u043A\u0438")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_product_slider, { cards: $data.newCards }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_app_title, {
            link: "",
            "link-text": "\u0432\u0441\u0435 \u043D\u043E\u0432\u0438\u043D\u043A\u0438"
          }, {
            default: withCtx(() => [
              createTextVNode("\u041D\u043E\u0432\u0438\u043D\u043A\u0438")
            ]),
            _: 1
          }),
          createVNode(_component_product_slider, { cards: $data.newCards }, null, 8, ["cards"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CWTeYZVk.mjs.map