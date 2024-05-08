import { _ as __nuxt_component_0$1 } from './Breadcrumbs-D72gJu_z.mjs';
import { _ as __nuxt_component_1$1 } from './TheSection-CfXk1VPd.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1$2 } from './InputNumber-Bfg-5Z6U.mjs';
import _sfc_main$7 from './svg-icon-CSQnRWUK.mjs';
import { _ as __nuxt_component_2$2 } from './Button-DuwhWeWl.mjs';
import './nuxt-link-P6SDANQl.mjs';
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

const _sfc_main$6 = {
  props: {
    infoList: {
      type: Array,
      default: ""
    },
    isBold: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "product-info-list" }, _attrs))} data-v-0c6743e9><!--[-->`);
  ssrRenderList($props.infoList, (item, index) => {
    _push(`<li class="product-info-list__item" data-v-0c6743e9><span data-v-0c6743e9>${ssrInterpolate(item.key)}</span><span class="${ssrRenderClass({ bold: $props.isBold })}" data-v-0c6743e9>${ssrInterpolate(item.value)}</span></li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductInfoList.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-0c6743e9"]]);
const _sfc_main$5 = {
  data() {
    return {
      isAddedFav: false
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_icon = _sfc_main$7;
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: ["button-like", { checked: $data.isAddedFav }]
  }, _attrs))} data-v-f7670368>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    name: "heart",
    width: "40",
    height: "40"
  }, null, _parent));
  _push(`</button>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/ButtonLike.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-f7670368"]]);
const _sfc_main$4 = {
  props: {
    sideInfoList: {
      type: Array,
      default: () => []
    },
    summary: {
      type: Object,
      default: () => {
      }
    },
    delivery: {
      type: Object,
      default: () => {
      }
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_product_info_list = __nuxt_component_2$1;
  const _component_ui_input_number = __nuxt_component_1$2;
  const _component_ui_button_like = __nuxt_component_2;
  const _component_ui_button = __nuxt_component_2$2;
  _push(`<aside${ssrRenderAttrs(mergeProps({ class: "product-sidebar" }, _attrs))} data-v-7bfc008e>`);
  _push(ssrRenderComponent(_component_product_info_list, {
    "info-list": $props.sideInfoList,
    "is-bold": ""
  }, null, _parent));
  _push(`<div class="product-sidebar__summary" data-v-7bfc008e><!--[-->`);
  ssrRenderList($props.summary, (item, index) => {
    _push(`<span data-v-7bfc008e>${ssrInterpolate(item)}</span>`);
  });
  _push(`<!--]--></div><div class="product-sidebar__buttons" data-v-7bfc008e><div class="product-sidebar__btn-wrap" data-v-7bfc008e>`);
  _push(ssrRenderComponent(_component_ui_input_number, null, null, _parent));
  _push(ssrRenderComponent(_component_ui_button_like, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ui_button, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443`);
      } else {
        return [
          createTextVNode("\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="product-sidebar__delivery" data-v-7bfc008e><!--[-->`);
  ssrRenderList($props.delivery, (item, index) => {
    _push(`<span data-v-7bfc008e>${ssrInterpolate(item)}</span>`);
  });
  _push(`<!--]--></div></aside>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductSideBar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-7bfc008e"]]);
const _sfc_main$3 = {
  props: {
    reviewsCard: {
      type: Object,
      default: () => {
      }
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_svg_icon = _sfc_main$7;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "reviews-card" }, _attrs))} data-v-f9d901ba><div class="reviews-card__top" data-v-f9d901ba><div data-v-f9d901ba><div class="reviews-card__name" data-v-f9d901ba>${ssrInterpolate($props.reviewsCard.name)}</div><div class="reviews-card__date" data-v-f9d901ba>${ssrInterpolate($props.reviewsCard.date)}</div></div><ul class="reviews-card__stars" data-v-f9d901ba><!--[-->`);
  ssrRenderList(5, (star, index) => {
    _push(`<li class="reviews-card__star" data-v-f9d901ba>`);
    _push(ssrRenderComponent(_component_svg_icon, {
      name: "star",
      width: "20",
      height: "20"
    }, null, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></div><div class="reviews-card__block" data-v-f9d901ba><h3 data-v-f9d901ba>${ssrInterpolate($props.reviewsCard.advantages.title)}</h3><div data-v-f9d901ba>${$props.reviewsCard.advantages.text}</div></div><div class="reviews-card__block" data-v-f9d901ba><h3 data-v-f9d901ba>${ssrInterpolate($props.reviewsCard.disadvantages.title)}</h3><div data-v-f9d901ba>${$props.reviewsCard.disadvantages.text}</div></div><div class="reviews-card__block" data-v-f9d901ba><h3 data-v-f9d901ba>${ssrInterpolate($props.reviewsCard.comment.title)}</h3><div data-v-f9d901ba>${$props.reviewsCard.comment.text}</div></div><div class="reviews-card__slider" data-v-f9d901ba><swiper-container class="reviews-card__container" slides-per-view="6" data-v-f9d901ba><!--[-->`);
  ssrRenderList($props.reviewsCard.images, (image, index) => {
    _push(`<swiper-slide class="reviews-card__slide-item" data-v-f9d901ba><div class="reviews-card__img" data-v-f9d901ba><img${ssrRenderAttr("src", image)} alt="" data-v-f9d901ba></div></swiper-slide>`);
  });
  _push(`<!--]--></swiper-container></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReviewsCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-f9d901ba"]]);
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
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "reviews-list" }, _attrs))} data-v-1db468f9><!--[-->`);
  ssrRenderList($props.reviewsList, (reviewCard, index) => {
    _push(`<li class="reviews-list__item" data-v-1db468f9>`);
    _push(ssrRenderComponent(_component_reviews_card, { "reviews-card": reviewCard }, null, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReviewsList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-1db468f9"]]);
const _sfc_main$1 = {
  components: { ProductInfoList: __nuxt_component_2$1 },
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
  const _component_product_info_list = __nuxt_component_2$1;
  const _component_reviews_list = __nuxt_component_1;
  const _component_ui_button = __nuxt_component_2$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "tabs" }, _attrs))} data-v-135df7cb><ul class="tabs__list" data-v-135df7cb><!--[-->`);
  ssrRenderList($props.tabs, (tab) => {
    _push(`<li class="tabs__item" data-v-135df7cb><button class="${ssrRenderClass([{ active: $data.activeTab === tab.id }, "tabs__btn"])}" data-v-135df7cb>${ssrInterpolate(tab.title)}</button></li>`);
  });
  _push(`<!--]--></ul><div class="tabs__body" data-v-135df7cb><!--[-->`);
  ssrRenderList($props.tabs, (tab) => {
    _push(`<div class="tabs__content" style="${ssrRenderStyle($data.activeTab === tab.id ? null : { display: "none" })}" data-v-135df7cb>`);
    if (tab.id == 1) {
      _push(`<div data-v-135df7cb>${tab.content}</div>`);
    } else if (tab.id == 2) {
      _push(`<div data-v-135df7cb>`);
      _push(ssrRenderComponent(_component_product_info_list, {
        "info-list": tab.content
      }, null, _parent));
      _push(`</div>`);
    } else if (tab.id == 3) {
      _push(`<div class="tabs__reviews" data-v-135df7cb>`);
      _push(ssrRenderComponent(_component_reviews_list, {
        "reviews-list": tab.content
      }, null, _parent));
      _push(`<div class="tabs__reviews-btns" data-v-135df7cb>`);
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
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-135df7cb"]]);
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
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_breadcrumbs = __nuxt_component_0$1;
  const _component_the_section = __nuxt_component_1$1;
  const _component_product_info_list = __nuxt_component_2$1;
  const _component_product_side_bar = __nuxt_component_3;
  const _component_app_tabs = __nuxt_component_4;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))} data-v-4394b7bb>`);
  _push(ssrRenderComponent(_component_app_breadcrumbs, { breadcrumbs: $data.breadcrumbs }, null, _parent));
  _push(ssrRenderComponent(_component_the_section, { class: "product-section" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="h1" data-v-4394b7bb${_scopeId}>\u041A\u043B\u0435\u0449\u0438 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u0432\u043D\u044B\u0435 Sparta 250 \u043C\u043C</h1><div class="product-section__wrap" data-v-4394b7bb${_scopeId}><div class="product-section__slider" data-v-4394b7bb${_scopeId}><swiper-container class="product-section__slider-container" slides-per-view="1" pagination="true" data-v-4394b7bb${_scopeId}><!--[-->`);
        ssrRenderList($data.images, (item, index) => {
          _push2(`<swiper-slide class="product-section__slider-item" data-v-4394b7bb${_scopeId}><div class="product-section__img" data-v-4394b7bb${_scopeId}><img${ssrRenderAttr("src", item)} alt="" data-v-4394b7bb${_scopeId}></div></swiper-slide>`);
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
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog/[category]/[subcategory]/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4394b7bb"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CAcIhK0b.mjs.map
