import { _ as __nuxt_component_0 } from './Breadcrumbs-TUy6Em1J.mjs';
import { _ as __nuxt_component_0$1 } from './TheSection-mbyzIumG.mjs';
import { _ as __nuxt_component_2, a as __nuxt_component_3 } from './ProductGrid-CcVJBV_5.mjs';
import { _ as __nuxt_component_2$1 } from './Button-DuwhWeWl.mjs';
import _sfc_main$1 from './svg-icon-CbNtY1Rj.mjs';
import { _ as __nuxt_component_3$1 } from './Pagination-C5S-j_45.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2$2 } from './ProductSlider-F7xwOJk-.mjs';
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
import './InputNumber-CJP0DsGA.mjs';
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
          link: "/catalog/",
          title: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433",
          active: false
        },
        {
          link: "/catalog/tools/",
          title: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442",
          active: false
        },
        {
          link: "#",
          title: "\u0420\u0443\u0447\u043D\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442",
          active: true
        }
      ],
      category: [
        // {
        //     name: 'Ручной инструмент',
        //     url: '/catalog/tools/handtools/',
        //     icon: 'brick-wall',
        // },
        {
          name: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442",
          url: "/catalog/tools/",
          icon: "construction-rounded"
        }
        // {
        //     name: 'Электрика',
        //     url: '/catalog/electric/',
        //     icon: 'power-supply',
        // },
      ],
      type: [
        {
          name: "\u0417\u0430\u0436\u0438\u043C\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0438 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430",
          checked: false
        },
        {
          name: "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0441\u0430\u0434\u043E\u0432\u044B\u0439",
          checked: false
        },
        {
          name: "\u041C\u043E\u043D\u0442\u0430\u0436\u043D\u044B\u0439 \u0438 \u043A\u0440\u0435\u043F\u0451\u0436\u043D\u044B\u0439",
          checked: false
        },
        {
          name: "\u041D\u0430\u0431\u043E\u0440\u044B \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432",
          checked: false
        }
      ],
      delivery: [
        { name: "\u0417\u0430\u0432\u0442\u0440\u0430" },
        { name: "1-3 \u0434\u043D\u044F" },
        { name: "4-7 \u0434\u043D\u0435\u0439" }
      ],
      brands: [
        { name: "Knipexxxx" },
        { name: "Hesler" },
        { name: "Knipex" },
        { name: "Hesler" },
        { name: "Knipex" }
      ],
      price: [
        1
      ],
      products: [
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/",
          span: true
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/",
          span: false
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/",
          span: false
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/",
          span: false
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/",
          span: false
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/",
          span: false
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/",
          span: false
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/",
          span: true
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/",
          span: false
        }
      ],
      saleCards: [
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        }
      ],
      newCards: [
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        },
        {
          images: ["/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg", "/gvozdik/images/goods-item-1.jpg"],
          title: "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C",
          price: "150 \u20BD",
          link: "/catalog/tools/handtools/kleshi-sparta-250mm/"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_breadcrumbs = __nuxt_component_0;
  const _component_the_section = __nuxt_component_0$1;
  const _component_ui_dropdown_list = __nuxt_component_2;
  const _component_ui_button = __nuxt_component_2$1;
  const _component_svg_icon = _sfc_main$1;
  const _component_product_grid = __nuxt_component_3;
  const _component_ui_pagination = __nuxt_component_3$1;
  const _component_app_title = __nuxt_component_1;
  const _component_product_slider = __nuxt_component_2$2;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-162e3831>`);
  _push(ssrRenderComponent(_component_app_breadcrumbs, { breadcrumbs: $data.breadcrumbs }, null, _parent));
  _push(ssrRenderComponent(_component_the_section, { class: "catalog-category" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="catalog-category__wrap" data-v-162e3831${_scopeId}><div class="catalog-category__aside" data-v-162e3831${_scopeId}><div class="catalog-category__filter" data-v-162e3831${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ui_dropdown_list, {
          title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
          list: $data.category,
          "is-link": "true"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ui_dropdown_list, {
          title: "\u0422\u0438\u043F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430",
          list: $data.type,
          "is-input-checkbox": "true"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ui_dropdown_list, {
          title: "\u0411\u0440\u0435\u043D\u0434",
          list: $data.brands,
          "is-input-check-btn": "true",
          "is-flex": "",
          "show-more": ""
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ui_dropdown_list, {
          title: "\u0426\u0435\u043D\u0430",
          list: $data.price,
          "is-range-input": "true"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ui_dropdown_list, {
          title: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",
          list: $data.delivery,
          "is-input-radio": "true"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ui_dropdown_list, {
          title: "\u041D\u043E\u0432\u0438\u043D\u043A\u0438",
          "is-toggle": ""
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ui_button, {
          "is-ghost": "",
          type: "reset"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span data-v-162e3831${_scopeId2}>\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440</span>`);
              _push3(ssrRenderComponent(_component_svg_icon, {
                name: "trash",
                width: "24",
                height: "24"
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode("span", null, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440"),
                createVNode(_component_svg_icon, {
                  name: "trash",
                  width: "24",
                  height: "24"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div><div class="catalog-category__grid" data-v-162e3831${_scopeId}>`);
        _push2(ssrRenderComponent(_component_product_grid, { "product-list": $data.products }, null, _parent2, _scopeId));
        _push2(`</div><div class="catalog-category__pagination" data-v-162e3831${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ui_pagination, null, null, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "catalog-category__wrap" }, [
            createVNode("div", { class: "catalog-category__aside" }, [
              createVNode("div", { class: "catalog-category__filter" }, [
                createVNode(_component_ui_dropdown_list, {
                  title: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F",
                  list: $data.category,
                  "is-link": "true"
                }, null, 8, ["list"]),
                createVNode(_component_ui_dropdown_list, {
                  title: "\u0422\u0438\u043F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430",
                  list: $data.type,
                  "is-input-checkbox": "true"
                }, null, 8, ["list"]),
                createVNode(_component_ui_dropdown_list, {
                  title: "\u0411\u0440\u0435\u043D\u0434",
                  list: $data.brands,
                  "is-input-check-btn": "true",
                  "is-flex": "",
                  "show-more": ""
                }, null, 8, ["list"]),
                createVNode(_component_ui_dropdown_list, {
                  title: "\u0426\u0435\u043D\u0430",
                  list: $data.price,
                  "is-range-input": "true"
                }, null, 8, ["list"]),
                createVNode(_component_ui_dropdown_list, {
                  title: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",
                  list: $data.delivery,
                  "is-input-radio": "true"
                }, null, 8, ["list"]),
                createVNode(_component_ui_dropdown_list, {
                  title: "\u041D\u043E\u0432\u0438\u043D\u043A\u0438",
                  "is-toggle": ""
                }),
                createVNode(_component_ui_button, {
                  "is-ghost": "",
                  type: "reset"
                }, {
                  default: withCtx(() => [
                    createVNode("span", null, "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440"),
                    createVNode(_component_svg_icon, {
                      name: "trash",
                      width: "24",
                      height: "24"
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            createVNode("div", { class: "catalog-category__grid" }, [
              createVNode(_component_product_grid, { "product-list": $data.products }, null, 8, ["product-list"])
            ]),
            createVNode("div", { class: "catalog-category__pagination" }, [
              createVNode(_component_ui_pagination)
            ])
          ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/[category]/[subcategory]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-162e3831"]]);

export { index as default };
//# sourceMappingURL=index-DNlibPqM.mjs.map
