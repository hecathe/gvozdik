import { _ as __nuxt_component_0$1 } from './Breadcrumbs-J2LYRQzJ.mjs';
import { _ as __nuxt_component_0$2 } from './TheSection-mbyzIumG.mjs';
import { b as __nuxt_component_2, _ as __nuxt_component_3 } from './ProductSideBar-9ImDIPcv.mjs';
import _sfc_main$4 from './svg-icon-BopcabGT.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_3$1 } from './Pagination-C5S-j_45.mjs';
import { _ as __nuxt_component_2$2 } from './Button-DuwhWeWl.mjs';
import { _ as __nuxt_component_1$1, a as __nuxt_component_2$1 } from './ProductSlider-D6J6YCtc.mjs';
import './nuxt-link-P6SDANQl.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import './InputNumber-iaylYKMB.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'swiper/element/bundle';

const _sfc_main$3 = {
  props: {
    reviewsCard: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      id: this.reviewsCard.id
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_icon = _sfc_main$4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "reviews-card" }, _attrs))} data-v-49815851><div class="reviews-card__top" data-v-49815851><div data-v-49815851><div class="reviews-card__name" data-v-49815851>${ssrInterpolate($props.reviewsCard.name)}</div><div class="reviews-card__date" data-v-49815851>${ssrInterpolate($props.reviewsCard.date)}</div></div><ul class="reviews-card__stars" data-v-49815851><!--[-->`);
  ssrRenderList(5, (star, index) => {
    _push(`<li class="reviews-card__star" data-v-49815851>`);
    _push(ssrRenderComponent(_component_svg_icon, {
      name: "star",
      width: "20",
      height: "20",
      fill: "FFB422"
    }, null, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div><div class="reviews-card__block" data-v-49815851><h3 data-v-49815851>${ssrInterpolate($props.reviewsCard.advantages.title)}</h3><div data-v-49815851>${$props.reviewsCard.advantages.text}</div></div><div class="reviews-card__block" data-v-49815851><h3 data-v-49815851>${ssrInterpolate($props.reviewsCard.disadvantages.title)}</h3><div data-v-49815851>${$props.reviewsCard.disadvantages.text}</div></div><div class="reviews-card__block" data-v-49815851><h3 data-v-49815851>${ssrInterpolate($props.reviewsCard.comment.title)}</h3><div data-v-49815851>${$props.reviewsCard.comment.text}</div></div><div class="reviews-card__slider" data-v-49815851><swiper-container class="reviews-card__container"${ssrRenderAttr("breakpoints", {
    0: {
      slidesPerView: 3
    },
    500: {
      slidesPerView: 4
    },
    1280: {
      slidesPerView: 6
    }
  })} space-between="20"${ssrRenderAttr("navigation-prev-el", `.custom-prev-button-${$props.reviewsCard.id}`)}${ssrRenderAttr("navigation-next-el", `.custom-next-button-${$props.reviewsCard.id}`)} data-v-49815851><!--[-->`);
  ssrRenderList($props.reviewsCard.images, (image, index) => {
    _push(`<swiper-slide class="reviews-card__slide-item" data-v-49815851><div class="reviews-card__img" data-v-49815851><img${ssrRenderAttr("src", image)} alt="" data-v-49815851></div></swiper-slide>`);
  });
  _push(`<!--]--></swiper-container><div class="${ssrRenderClass(`custom-button custom-prev-button custom-prev-button-${$props.reviewsCard.id}`)}" data-v-49815851>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    name: "arrow-left",
    width: "24",
    height: "24"
  }, null, _parent));
  _push(`</div><div class="${ssrRenderClass(`custom-button custom-next-button custom-next-button-${$props.reviewsCard.id}`)}" data-v-49815851>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    name: "arrow-right",
    width: "24",
    height: "24"
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReviewsCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-49815851"]]);
const _sfc_main$2 = {
  props: {
    reviewsList: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_reviews_card = __nuxt_component_0;
  const _component_ui_pagination = __nuxt_component_3$1;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "reviews-list" }, _attrs))} data-v-98f6063a><!--[-->`);
  ssrRenderList($props.reviewsList, (reviewCard, index) => {
    _push(`<li class="reviews-list__item" data-v-98f6063a>`);
    _push(ssrRenderComponent(_component_reviews_card, { "reviews-card": reviewCard }, null, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--><li data-v-98f6063a>`);
  _push(ssrRenderComponent(_component_ui_pagination, null, null, _parent));
  _push(`</li></ul>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReviewsList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-98f6063a"]]);
const _sfc_main$1 = {
  components: { ProductInfoList: __nuxt_component_2 },
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeTab: 1
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_product_info_list = __nuxt_component_2;
  const _component_reviews_list = __nuxt_component_1;
  const _component_ui_button = __nuxt_component_2$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabs" }, _attrs))} data-v-68310152><ul class="tabs__list" data-v-68310152><!--[-->`);
  ssrRenderList($props.tabs, (tab) => {
    _push(`<li class="tabs__item" data-v-68310152><button class="${ssrRenderClass([{ active: $data.activeTab === tab.id }, "tabs__btn"])}" data-v-68310152>${ssrInterpolate(tab.title)}</button></li>`);
  });
  _push(`<!--]--></ul><div class="tabs__body" data-v-68310152><!--[-->`);
  ssrRenderList($props.tabs, (tab) => {
    _push(`<div class="tabs__content" style="${ssrRenderStyle($data.activeTab === tab.id ? null : { display: "none" })}" data-v-68310152>`);
    if (tab.id == 1) {
      _push(`<div data-v-68310152>${tab.content}</div>`);
    } else if (tab.id == 2) {
      _push(`<div data-v-68310152>`);
      _push(ssrRenderComponent(_component_product_info_list, {
        "info-list": tab.content
      }, null, _parent));
      _push(`</div>`);
    } else if (tab.id == 3) {
      _push(`<div class="tabs__reviews" data-v-68310152>`);
      _push(ssrRenderComponent(_component_reviews_list, {
        "reviews-list": tab.content
      }, null, _parent));
      _push(`<div class="tabs__reviews-btns" data-v-68310152>`);
      _push(ssrRenderComponent(_component_ui_button, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432`);
          } else {
            return [
              createTextVNode("\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(ssrRenderComponent(_component_ui_button, { "is-ghost": "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441`);
          } else {
            return [
              createTextVNode("\u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Tabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-68310152"]]);
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
          link: "/catalog/tools/handtools/",
          title: "\u0420\u0443\u0447\u043D\u043E\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442",
          active: false
        },
        {
          link: "#",
          title: "\u041A\u043B\u0435\u0449\u0438",
          active: true
        }
      ],
      images: [
        "/gvozdik/images/goods-item-1.jpg",
        "/gvozdik/images/goods-item-1.jpg",
        "/gvozdik/images/goods-item-1.jpg"
      ],
      infoList: [
        {
          key: "\u0410\u0440\u0442\u0438\u043A\u0443\u043B",
          value: "1234567"
        },
        {
          key: "\u0422\u043E\u0432\u0430\u0440",
          value: "\u041A\u043B\u0435\u0449\u0438"
        },
        {
          key: "\u0420\u0430\u0437\u043C\u0435\u0440",
          value: "30 \u0445 20"
        },
        {
          key: "\u0412\u0435\u0441",
          value: "100 \u0433"
        }
      ],
      cardList: [
        {
          key: "\u0426\u0435\u043D\u0430",
          value: "150 \u20BD"
        },
        {
          key: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",
          value: "140 \u20BD"
        },
        {
          key: "\u0421\u043A\u0438\u0434\u043A\u0430",
          value: "10 \u20BD"
        }
      ],
      summary: {
        key: "\u0418\u0442\u043E\u0433\u043E",
        value: "290 \u20BD"
      },
      delivery: {
        key: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",
        value: "28.03.2024"
      },
      tabs: [
        { id: 1, title: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", content: "<p>\u041D\u043E \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u044B \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442 \u0441\u043E\u0431\u043E\u0439 \u043D\u0435 \u0447\u0442\u043E \u0438\u043D\u043E\u0435, \u043A\u0430\u043A \u043A\u0432\u0438\u043D\u0442\u044D\u0441\u0441\u0435\u043D\u0446\u0438\u044E \u043F\u043E\u0431\u0435\u0434\u044B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u043D\u0430\u0434 \u0440\u0430\u0437\u0443\u043C\u043E\u043C \u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0432\u0435\u0440\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u044B. \u0411\u0430\u043D\u0430\u043B\u044C\u043D\u044B\u0435, \u043D\u043E \u043D\u0435\u043E\u043F\u0440\u043E\u0432\u0435\u0440\u0436\u0438\u043C\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0435 \u0433\u043E\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0430 \u043E\u0441\u0432\u0435\u0449\u0430\u044E\u0442 \u0447\u0440\u0435\u0437\u0432\u044B\u0447\u0430\u0439\u043D\u043E \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u044B\u0435 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u043A\u0430\u0440\u0442\u0438\u043D\u044B \u0432 \u0446\u0435\u043B\u043E\u043C, \u043E\u0434\u043D\u0430\u043A\u043E \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u044B\u0435 \u0432\u044B\u0432\u043E\u0434\u044B, \u0440\u0430\u0437\u0443\u043C\u0435\u0435\u0442\u0441\u044F, \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0442\u0438\u0432\u043D\u043E \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u044B \u043F\u043E \u043E\u0442\u0440\u0430\u0441\u043B\u044F\u043C. \u041A\u0430\u0440\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u0433\u043E\u0432\u043E\u0440\u044B \u043D\u0435 \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u044E\u0442 \u0441\u0438\u0442\u0443\u0430\u0446\u0438\u0438, \u043F\u0440\u0438 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043A\u0438 \u0442\u043E\u0442\u0430\u043B\u0438\u0442\u0430\u0440\u0438\u0437\u043C\u0430 \u0432 \u043D\u0430\u0443\u043A\u0435 \u043B\u0438\u0448\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044E\u0442 \u0444\u0440\u0430\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0440\u0430\u0437\u043D\u043E\u0433\u043B\u0430\u0441\u0438\u0439 \u0438 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u044B \u0432 \u0446\u0435\u043B\u044B\u0435 \u043A\u043B\u0430\u0441\u0442\u0435\u0440\u044B \u0441\u0435\u0431\u0435 \u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0445. \u0412\u043E\u0442 \u0432\u0430\u043C \u044F\u0440\u043A\u0438\u0439 \u043F\u0440\u0438\u043C\u0435\u0440 \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445 \u0442\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u0439 \u2014 \u0443\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u0435 \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0435 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0439 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u043F\u0440\u0435\u0434\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0432\u044B\u0441\u043E\u043A\u0443\u044E \u0432\u043E\u0441\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F \u043A\u0430\u0434\u0440\u043E\u0432, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u043D\u0430\u0441\u0443\u0449\u043D\u044B\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u043C. \u0421\u043B\u043E\u0436\u043D\u043E \u0441\u043A\u0430\u0437\u0430\u0442\u044C, \u043F\u043E\u0447\u0435\u043C\u0443 \u0430\u043A\u0446\u0438\u043E\u043D\u0435\u0440\u044B \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043F\u0440\u0438\u0437\u0432\u0430\u043D\u044B \u043A \u043E\u0442\u0432\u0435\u0442\u0443. \u041F\u0440\u0435\u0436\u0434\u0435 \u0432\u0441\u0435\u0433\u043E, \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0443\u0440\u043E\u0432\u043D\u044F \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0441\u043A\u043E\u0433\u043E \u0441\u043E\u0437\u043D\u0430\u043D\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043F\u0440\u0435\u0434\u043F\u043E\u0441\u044B\u043B\u043A\u0438 \u0434\u043B\u044F \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u044B\u0445 \u043F\u043E\u0434\u0445\u043E\u0434\u043E\u0432.</p>" },
        { id: 2, title: "\u0425\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438", content: [
          {
            key: "\u0410\u0440\u0442\u0438\u043A\u0443\u043B",
            value: "1234567"
          },
          {
            key: "\u041E\u0431\u044A\u0451\u043C",
            value: "1234567"
          },
          {
            key: "\u0410\u0440\u0442\u0438\u043A\u0443\u043B",
            value: "1234567"
          },
          {
            key: "\u0410\u0440\u0442\u0438\u043A\u0443\u043B",
            value: "1234567"
          },
          {
            key: "\u041E\u0431\u044A\u0451\u043C",
            value: "1234567"
          },
          {
            key: "\u0410\u0440\u0442\u0438\u043A\u0443\u043B",
            value: "1234567"
          },
          {
            key: "\u0410\u0440\u0442\u0438\u043A\u0443\u043B",
            value: "1234567"
          },
          {
            key: "\u041E\u0431\u044A\u0451\u043C",
            value: "1234567"
          },
          {
            key: "\u0410\u0440\u0442\u0438\u043A\u0443\u043B",
            value: "1234567"
          }
        ] },
        { id: 3, title: "\u041E\u0442\u0437\u044B\u0432\u044B", content: [
          {
            id: 1,
            name: "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
            date: "12.12.2024",
            advantages: {
              title: "\u0414\u043E\u0441\u0442\u043E\u0438\u043D\u0441\u0442\u0432\u0430",
              text: "\u0412\u0441\u0435 \u043D\u043E\u0440\u043C. \u0412 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0435 4 \u043D\u043E\u0436\u043A\u0438 \u0438 \u043A\u0440\u0435\u043F\u0451\u0436 \u043A \u0441\u0442\u0435\u043D\u0435"
            },
            disadvantages: {
              title: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438",
              text: "\u0412\u0441\u0435 \u043D\u043E\u0440\u043C. \u0412 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0435 4 \u043D\u043E\u0436\u043A\u0438 \u0438 \u043A\u0440\u0435\u043F\u0451\u0436 \u043A \u0441\u0442\u0435\u043D\u0435"
            },
            comment: {
              title: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
              text: "\u0412\u0441\u0435 \u043D\u043E\u0440\u043C. \u0412 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0435 4 \u043D\u043E\u0436\u043A\u0438 \u0438 \u043A\u0440\u0435\u043F\u0451\u0436 \u043A \u0441\u0442\u0435\u043D\u0435"
            },
            images: [
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg"
            ]
          },
          {
            id: 2,
            name: "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
            date: "12.12.2024",
            advantages: {
              title: "\u0414\u043E\u0441\u0442\u043E\u0438\u043D\u0441\u0442\u0432\u0430",
              text: "\u0412\u0441\u0435 \u043D\u043E\u0440\u043C. \u0412 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0435 4 \u043D\u043E\u0436\u043A\u0438 \u0438 \u043A\u0440\u0435\u043F\u0451\u0436 \u043A \u0441\u0442\u0435\u043D\u0435"
            },
            disadvantages: {
              title: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438",
              text: "\u0412\u0441\u0435 \u043D\u043E\u0440\u043C. \u0412 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0435 4 \u043D\u043E\u0436\u043A\u0438 \u0438 \u043A\u0440\u0435\u043F\u0451\u0436 \u043A \u0441\u0442\u0435\u043D\u0435"
            },
            comment: {
              title: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
              text: "\u0412\u0441\u0435 \u043D\u043E\u0440\u043C. \u0412 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0435 4 \u043D\u043E\u0436\u043A\u0438 \u0438 \u043A\u0440\u0435\u043F\u0451\u0436 \u043A \u0441\u0442\u0435\u043D\u0435"
            },
            images: [
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg"
            ]
          },
          {
            id: 3,
            name: "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
            date: "12.12.2024",
            advantages: {
              title: "\u0414\u043E\u0441\u0442\u043E\u0438\u043D\u0441\u0442\u0432\u0430",
              text: "\u0412\u0441\u0435 \u043D\u043E\u0440\u043C. \u0412 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0435 4 \u043D\u043E\u0436\u043A\u0438 \u0438 \u043A\u0440\u0435\u043F\u0451\u0436 \u043A \u0441\u0442\u0435\u043D\u0435"
            },
            disadvantages: {
              title: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0438",
              text: "\u0412\u0441\u0435 \u043D\u043E\u0440\u043C. \u0412 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0435 4 \u043D\u043E\u0436\u043A\u0438 \u0438 \u043A\u0440\u0435\u043F\u0451\u0436 \u043A \u0441\u0442\u0435\u043D\u0435"
            },
            comment: {
              title: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439",
              text: "\u0412\u0441\u0435 \u043D\u043E\u0440\u043C. \u0412 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0435 4 \u043D\u043E\u0436\u043A\u0438 \u0438 \u043A\u0440\u0435\u043F\u0451\u0436 \u043A \u0441\u0442\u0435\u043D\u0435"
            },
            images: [
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg",
              "/gvozdik/images/goods-item-1.jpg"
            ]
          }
        ] }
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
          link: "/catalog/tools/electrotools/kleshi-sparta-250mm/"
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
          link: "/catalog/tools/electrotools/kleshi-sparta-250mm/"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_breadcrumbs = __nuxt_component_0$1;
  const _component_the_section = __nuxt_component_0$2;
  const _component_product_info_list = __nuxt_component_2;
  const _component_product_side_bar = __nuxt_component_3;
  const _component_app_tabs = __nuxt_component_4;
  const _component_app_title = __nuxt_component_1$1;
  const _component_product_slider = __nuxt_component_2$1;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-03f93e0a>`);
  _push(ssrRenderComponent(_component_app_breadcrumbs, { breadcrumbs: $data.breadcrumbs }, null, _parent));
  _push(ssrRenderComponent(_component_the_section, { class: "product-section" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="h1" data-v-03f93e0a${_scopeId}>\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C</h1><div class="product-section__wrap" data-v-03f93e0a${_scopeId}><div class="product-section__slider" data-v-03f93e0a${_scopeId}><swiper-container class="product-section__slider-container" slides-per-view="1" pagination="true" data-v-03f93e0a${_scopeId}><!--[-->`);
        ssrRenderList($data.images, (item, index) => {
          _push2(`<swiper-slide class="product-section__slider-item" data-v-03f93e0a${_scopeId}><div class="product-section__img" data-v-03f93e0a${_scopeId}><img${ssrRenderAttr("src", item)} alt="" data-v-03f93e0a${_scopeId}></div></swiper-slide>`);
        });
        _push2(`<!--]--></swiper-container></div>`);
        _push2(ssrRenderComponent(_component_product_info_list, { "info-list": $data.infoList }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_product_side_bar, {
          "side-info-list": $data.cardList,
          summary: $data.summary,
          delivery: $data.delivery
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_app_tabs, { tabs: $data.tabs }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("h1", { class: "h1" }, "\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C"),
          createVNode("div", { class: "product-section__wrap" }, [
            createVNode("div", { class: "product-section__slider" }, [
              createVNode("swiper-container", {
                class: "product-section__slider-container",
                "slides-per-view": "1",
                pagination: "true"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList($data.images, (item, index) => {
                  return openBlock(), createBlock("swiper-slide", {
                    class: "product-section__slider-item",
                    key: index
                  }, [
                    createVNode("div", { class: "product-section__img" }, [
                      createVNode("img", {
                        src: item,
                        alt: ""
                      }, null, 8, ["src"])
                    ])
                  ]);
                }), 128))
              ])
            ]),
            createVNode(_component_product_info_list, { "info-list": $data.infoList }, null, 8, ["info-list"]),
            createVNode(_component_product_side_bar, {
              "side-info-list": $data.cardList,
              summary: $data.summary,
              delivery: $data.delivery
            }, null, 8, ["side-info-list", "summary", "delivery"])
          ]),
          createVNode(_component_app_tabs, { tabs: $data.tabs }, null, 8, ["tabs"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/[category]/[subcategory]/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-03f93e0a"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-DD4AjZXD.mjs.map
