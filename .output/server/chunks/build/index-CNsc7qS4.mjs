import { _ as __nuxt_component_0$1 } from './Breadcrumbs-D72gJu_z.mjs';
import { _ as __nuxt_component_1 } from './TheSection-CfXk1VPd.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-P6SDANQl.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_3 } from './Pagination-D-3qMP2z.mjs';
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
import './Button-DuwhWeWl.mjs';

const _sfc_main$2 = {
  props: {
    newsCard: {
      type: Object,
      default: () => {
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
    to: $props.newsCard.url,
    class: "news-list__card news-card"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="news-card__img" data-v-a8bde695${_scopeId}><img${ssrRenderAttr("src", $props.newsCard.image)} alt="" data-v-a8bde695${_scopeId}></div><div class="news-card__content" data-v-a8bde695${_scopeId}><h3 class="news-card__title" data-v-a8bde695${_scopeId}>${ssrInterpolate($props.newsCard.title)}</h3><div class="news-card__text" data-v-a8bde695${_scopeId}>${$props.newsCard.content}</div><span class="news-card__date" data-v-a8bde695${_scopeId}>${ssrInterpolate($props.newsCard.date)}</span></div>`);
      } else {
        return [
          createVNode("div", { class: "news-card__img" }, [
            createVNode("img", {
              src: $props.newsCard.image,
              alt: ""
            }, null, 8, ["src"])
          ]),
          createVNode("div", { class: "news-card__content" }, [
            createVNode("h3", { class: "news-card__title" }, toDisplayString($props.newsCard.title), 1),
            createVNode("div", {
              class: "news-card__text",
              innerHTML: $props.newsCard.content
            }, null, 8, ["innerHTML"]),
            createVNode("span", { class: "news-card__date" }, toDisplayString($props.newsCard.date), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewsListCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-a8bde695"]]);
const _sfc_main$1 = {
  props: {
    newsList: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_news_list_card = __nuxt_component_0;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "news-list" }, _attrs))} data-v-d19ff6de><!--[-->`);
  ssrRenderList($props.newsList, (newsItem, index2) => {
    _push(`<li class="${ssrRenderClass([{ "span-2": newsItem.span }, "news-list__item"])}" data-v-d19ff6de>`);
    _push(ssrRenderComponent(_component_news_list_card, { "news-card": newsItem }, null, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewsList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-d19ff6de"]]);
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
          title: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
          active: true
        }
      ],
      news: [
        {
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u043E\u0432\u043E\u0441\u0442\u0438 1",
          content: "<p>\u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u0443\u0431\u0435\u0436\u0434\u0451\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043F\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u0432 \u0441\u0432\u043E\u0451\u043C \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0432\u043D\u0435\u0448\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439.</p>",
          image: "images/work-tools.jpg",
          date: "11/04/2024",
          url: "/news/zagolovok-novosti-1/",
          span: true
        },
        {
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u043E\u0432\u043E\u0441\u0442\u0438 2",
          content: "<p>\u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u0443\u0431\u0435\u0436\u0434\u0451\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043F\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u0432 \u0441\u0432\u043E\u0451\u043C \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0432\u043D\u0435\u0448\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439.</p>",
          image: "images/work-tools.jpg",
          date: "11/04/2024",
          url: "/news/zagolovok-novosti-2/",
          span: false
        },
        {
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u043E\u0432\u043E\u0441\u0442\u0438 3",
          content: "<p>\u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u0443\u0431\u0435\u0436\u0434\u0451\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043F\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u0432 \u0441\u0432\u043E\u0451\u043C \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0432\u043D\u0435\u0448\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439.</p>",
          image: "images/work-tools.jpg",
          date: "11/04/2024",
          url: "/news/zagolovok-novosti-3/",
          span: false
        },
        {
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u043E\u0432\u043E\u0441\u0442\u0438 4",
          content: "<p>\u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u0443\u0431\u0435\u0436\u0434\u0451\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043F\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u0432 \u0441\u0432\u043E\u0451\u043C \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0432\u043D\u0435\u0448\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439.</p>",
          image: "images/work-tools.jpg",
          date: "11/04/2024",
          url: "/news/zagolovok-novosti-4/",
          span: false
        },
        {
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u043E\u0432\u043E\u0441\u0442\u0438 5",
          content: "<p>\u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u0443\u0431\u0435\u0436\u0434\u0451\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043F\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u0432 \u0441\u0432\u043E\u0451\u043C \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0432\u043D\u0435\u0448\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439.</p>",
          image: "images/work-tools.jpg",
          date: "11/04/2024",
          url: "/news/zagolovok-novosti-5/",
          span: false
        },
        {
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u043E\u0432\u043E\u0441\u0442\u0438 6",
          content: "<p>\u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u0443\u0431\u0435\u0436\u0434\u0451\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043F\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u0432 \u0441\u0432\u043E\u0451\u043C \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0432\u043D\u0435\u0448\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439.</p>",
          image: "images/work-tools.jpg",
          date: "11/04/2024",
          url: "/news/zagolovok-novosti-6/",
          span: false
        },
        {
          title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u043D\u043E\u0432\u043E\u0441\u0442\u0438 7",
          content: "<p>\u0417\u0430\u0434\u0430\u0447\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438, \u0432 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0436\u0435 \u0443\u0431\u0435\u0436\u0434\u0451\u043D\u043D\u043E\u0441\u0442\u044C \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043E\u043F\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432, \u0432 \u0441\u0432\u043E\u0451\u043C \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0438, \u0434\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u044B\u0445, \u0442\u0430\u043A \u0438 \u0432\u043D\u0435\u0448\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u0445 \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u0443\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439.</p>",
          image: "images/work-tools.jpg",
          date: "11/04/2024",
          url: "/news/zagolovok-novosti-7/",
          span: true
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_breadcrumbs = __nuxt_component_0$1;
  const _component_the_section = __nuxt_component_1;
  const _component_news_list = __nuxt_component_2;
  const _component_ui_pagination = __nuxt_component_3;
  _push(`<main${ssrRenderAttrs(mergeProps({ class: "main" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_app_breadcrumbs, { breadcrumbs: $data.breadcrumbs }, null, _parent));
  _push(ssrRenderComponent(_component_the_section, { class: "news" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 class="h1"${_scopeId}>\u041D\u043E\u0432\u043E\u0441\u0442\u0438</h1>`);
        _push2(ssrRenderComponent(_component_news_list, { "news-list": $data.news }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ui_pagination, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("h1", { class: "h1" }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"),
          createVNode(_component_news_list, { "news-list": $data.news }, null, 8, ["news-list"]),
          createVNode(_component_ui_pagination)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CNsc7qS4.mjs.map