import _sfc_main$d from './svg-icon-C-TKLOKq.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderDynamicModel } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import { _ as __nuxt_component_0$2 } from './TheSection-oCR6a-xp.mjs';
import { _ as __nuxt_component_2$2 } from './Button-DuwhWeWl.mjs';
import { _ as __nuxt_component_2$3 } from './SocialList-9U3GxoAU.mjs';
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

const _sfc_main$c = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  const _component_svg_icon = _sfc_main$d;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "notice" }, _attrs))} data-v-5cd7d435><div class="container" data-v-5cd7d435><div class="notice__wrap" data-v-5cd7d435><p class="notice__text" data-v-5cd7d435>\u0421\u043A\u0438\u0434\u043A\u0430 20% \u043D\u0430 \u043F\u0435\u0440\u0432\u044B\u0439 \u0437\u0430\u043A\u0430\u0437</p><button class="notice__btn" aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C" data-v-5cd7d435>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    name: "close",
    width: "24",
    height: "24"
  }, null, _parent));
  _push(`</button></div></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Notice.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c], ["__scopeId", "data-v-5cd7d435"]]);
const _sfc_main$b = {
  props: {
    navList: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "nav" }, _attrs))} data-v-1143e328><ul class="nav__list" data-v-1143e328><!--[-->`);
  ssrRenderList($props.navList, (navItem, index) => {
    _push(`<li class="nav__item" data-v-1143e328>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: "nav__link",
      to: navItem.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(navItem.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(navItem.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul></nav>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/HeaderNav.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-1143e328"]]);
const _sfc_main$a = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  const _component_svg_icon = _sfc_main$d;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "search" }, _attrs))} data-v-501cb9e3>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    class: "search__icon",
    width: "24",
    height: "24",
    name: "search"
  }, null, _parent));
  _push(`<input class="search__input" placeholder="\u041F\u043E\u0438\u0441\u043A..." type="search" name="" id="" data-v-501cb9e3></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/InputSearch.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-501cb9e3"]]);
const _sfc_main$9 = {
  props: {
    userActions: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_svg_icon = _sfc_main$d;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "user-actions" }, _attrs))} data-v-b78d30d3><!--[-->`);
  ssrRenderList($props.userActions, (item, index) => {
    _push(`<li class="user-actions__item" data-v-b78d30d3>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: "user-actions__link",
      to: item.link
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_svg_icon, {
            name: item.name,
            width: "24",
            height: "24"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_svg_icon, {
              name: item.name,
              width: "24",
              height: "24"
            }, null, 8, ["name"])
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/HeaderUserActions.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-b78d30d3"]]);
const _sfc_main$8 = {
  props: {
    asideMenu: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "menu" }, _attrs))} data-v-a6113d63><div class="container" data-v-a6113d63><ul class="menu__aside" data-v-a6113d63><!--[-->`);
  ssrRenderList($props.asideMenu, (item, index) => {
    _push(`<li data-v-a6113d63>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: item.url
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
    _push(`</li>`);
  });
  _push(`<!--]--></ul><div data-v-a6113d63><h2 data-v-a6113d63>\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442</h2><ul data-v-a6113d63></ul></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Menu.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_5$1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-a6113d63"]]);
const _sfc_main$7 = {
  props: {
    navList: {
      type: Array,
      default: () => []
    },
    userActions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isMenuOpen: false
    };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_svg_icon = _sfc_main$d;
  const _component_AppHeaderNav = __nuxt_component_2$1;
  const _component_UiInputSearch = __nuxt_component_3$2;
  const _component_AppHeaderUserActions = __nuxt_component_4$1;
  const _component_AppMenu = __nuxt_component_5$1;
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-121d3e54><div class="container" data-v-121d3e54><div class="header__top" data-v-121d3e54>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "header__logo"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_svg_icon, {
          name: "logo",
          width: "121",
          height: "64"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_svg_icon, {
            name: "logo",
            width: "121",
            height: "64"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_AppHeaderNav, { "nav-list": $props.navList }, null, _parent));
  _push(`<a class="header__phone" href="tel:8 800 555 55 55" data-v-121d3e54>8 800 555 55 55</a></div><div class="header__bottom" data-v-121d3e54><div class="header__wrap" data-v-121d3e54><button class="header__catalog-btn" data-v-121d3e54>`);
  _push(ssrRenderComponent(_component_svg_icon, {
    width: "24",
    height: "24",
    name: "more-grid"
  }, null, _parent));
  _push(`<span data-v-121d3e54>\u041A\u0430\u0442\u0430\u043B\u043E\u0433</span></button>`);
  _push(ssrRenderComponent(_component_UiInputSearch, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_AppHeaderUserActions, { "user-actions": $props.userActions }, null, _parent));
  _push(`</div>`);
  if ($data.isMenuOpen) {
    _push(ssrRenderComponent(_component_AppMenu, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></header>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Header.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-121d3e54"]]);
const _sfc_main$6 = {
  props: {
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      value: ""
    };
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "input" }, _attrs))} data-v-2dc26ace><label${ssrRenderAttr("for", $props.id)} class="input__label" data-v-2dc26ace>${ssrInterpolate($props.label)}</label><input${ssrRenderAttr("type", $props.type)}${ssrRenderAttr("id", $props.id)}${ssrRenderDynamicModel($props.type, $data.value, null)}${ssrRenderAttr("placeholder", $props.placeholder)} class="input__field" data-v-2dc26ace></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Input.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-2dc26ace"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_the_section = __nuxt_component_0$2;
  const _component_ui_input = __nuxt_component_1;
  const _component_ui_button = __nuxt_component_2$2;
  _push(ssrRenderComponent(_component_the_section, mergeProps({ class: "subscribe" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="subscribe__content" data-v-28eb084b${_scopeId}><div class="subscribe__text" data-v-28eb084b${_scopeId}><h2 class="h2" data-v-28eb084b${_scopeId}>\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C</h2><p data-v-28eb084b${_scopeId}>\u0418 \u0431\u0443\u0434\u044C\u0442\u0435 \u0432 \u043A\u0443\u0440\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 \u0438 \u0430\u043A\u0446\u0438\u0439</p></div><form class="subscribe__form" data-v-28eb084b${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ui_input, {
          label: "E-mail",
          id: "email",
          type: "email",
          placeholder: "example@mail.com"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ui_button, { type: "submit" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F`);
            } else {
              return [
                createTextVNode("\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</form></div>`);
      } else {
        return [
          createVNode("div", { class: "subscribe__content" }, [
            createVNode("div", { class: "subscribe__text" }, [
              createVNode("h2", { class: "h2" }, "\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C"),
              createVNode("p", null, "\u0418 \u0431\u0443\u0434\u044C\u0442\u0435 \u0432 \u043A\u0443\u0440\u0441\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0435\u0439 \u0438 \u0430\u043A\u0446\u0438\u0439")
            ]),
            createVNode("form", { class: "subscribe__form" }, [
              createVNode(_component_ui_input, {
                label: "E-mail",
                id: "email",
                type: "email",
                placeholder: "example@mail.com"
              }),
              createVNode(_component_ui_button, { type: "submit" }, {
                default: withCtx(() => [
                  createTextVNode("\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F")
                ]),
                _: 1
              })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubscribeForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-28eb084b"]]);
const _sfc_main$4 = {
  props: {
    navList: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "footer-nav" }, _attrs))} data-v-b7a89a21><!--[-->`);
  ssrRenderList($props.navList, (item, index) => {
    _push(`<li class="footer-nav__item" data-v-b7a89a21>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: "footer-nav__link",
      to: "#"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/FooterNav.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-b7a89a21"]]);
const _sfc_main$3 = {
  props: {
    footerMenu: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "footer-menu" }, _attrs))} data-v-bf248c61><!--[-->`);
  ssrRenderList($props.footerMenu, (item, index) => {
    _push(`<li class="footer-menu__item" data-v-bf248c61>`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      class: "footer-menu__link",
      to: item.link
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
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/FooterMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-bf248c61"]]);
const _sfc_main$2 = {
  props: {
    paymentList: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "payment" }, _attrs))} data-v-51a06f5e><h3 class="payment__title" data-v-51a06f5e>\u041C\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u043C \u043A \u043E\u043F\u043B\u0430\u0442\u0435</h3><ul class="payment__list" data-v-51a06f5e><!--[-->`);
  ssrRenderList($props.paymentList, (item, index) => {
    _push(`<li class="payment__item" data-v-51a06f5e><img${ssrRenderAttr("src", item)} alt="" data-v-51a06f5e></li>`);
  });
  _push(`<!--]--></ul></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PaymentList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-51a06f5e"]]);
const _sfc_main$1 = {
  props: {
    navList: {
      type: Array,
      default: () => []
    },
    footerMenu: {
      type: Array,
      default: () => []
    },
    socialList: {
      type: Array,
      default: () => []
    },
    paymentList: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_svg_icon = _sfc_main$d;
  const _component_social_list = __nuxt_component_2$3;
  const _component_AppFooterNav = __nuxt_component_3$1;
  const _component_AppFooterMenu = __nuxt_component_4;
  const _component_payment_list = __nuxt_component_5;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-54773769><div class="container" data-v-54773769><div class="footer__top" data-v-54773769><div class="footer__block" data-v-54773769>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/",
    class: "footer__logo"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_svg_icon, {
          name: "logo",
          width: "150",
          height: "64"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_svg_icon, {
            name: "logo",
            width: "150",
            height: "64"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<a class="footer__tel" href="tel:8 800 555 55 55" data-v-54773769>8 800 555 55 55</a>`);
  _push(ssrRenderComponent(_component_social_list, { "social-list": $props.socialList }, null, _parent));
  _push(`</div><div class="footer__block" data-v-54773769><h3 class="footer__title" data-v-54773769>\u041A\u0430\u0442\u0430\u043B\u043E\u0433</h3>`);
  _push(ssrRenderComponent(_component_AppFooterNav, { "nav-list": $props.navList }, null, _parent));
  _push(`</div><div class="footer__block" data-v-54773769>`);
  _push(ssrRenderComponent(_component_AppFooterMenu, { "footer-menu": $props.footerMenu }, null, _parent));
  _push(`</div></div><div class="footer__bottom" data-v-54773769><div class="footer__block" data-v-54773769><span data-v-54773769>\xA9 2024 \xAB\u0413\u0432\u043E\u0437\u0434\u0438\u043A\xBB</span>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    class: "footer__link",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438`);
      } else {
        return [
          createTextVNode("\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer__block" data-v-54773769>`);
  _push(ssrRenderComponent(_component_payment_list, { "payment-list": $props.paymentList }, null, _parent));
  _push(`</div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/app/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-54773769"]]);
const _sfc_main = {
  data() {
    return {
      menu: [
        {
          name: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
          link: "/news"
        },
        {
          name: "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",
          link: "#"
        },
        {
          name: "\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430",
          link: "#"
        },
        {
          name: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
          link: "#"
        }
      ],
      user_menu: [
        {
          name: "heart"
        },
        {
          name: "user"
        },
        {
          name: "cart",
          link: "/cart"
        }
      ],
      catalog_nav: [
        "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430",
        "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442",
        "\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0430",
        "\u0421\u0442\u0440\u043E\u0439\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B",
        "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430",
        "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442",
        "\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0430",
        "\u0421\u0442\u0440\u043E\u0439\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B",
        "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0430",
        "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442",
        "\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0430",
        "\u0421\u0442\u0440\u043E\u0439\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B"
      ],
      social: [
        {
          whatsapp: "#"
        },
        {
          telegram: "#"
        },
        {
          youtube: "#"
        },
        {
          vk: "#"
        }
      ],
      cards: [
        "/gvozdik/images/mastercard.png",
        "/gvozdik/images/visa.png",
        "/gvozdik/images/sbp.png",
        "/gvozdik/images/mir.png"
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Notice = __nuxt_component_0;
  const _component_AppHeader = __nuxt_component_1$1;
  const _component_subscribe_form = __nuxt_component_2;
  const _component_AppFooter = __nuxt_component_3;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Notice, null, null, _parent));
  _push(ssrRenderComponent(_component_AppHeader, {
    "nav-list": $data.menu,
    "user-actions": $data.user_menu
  }, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_subscribe_form, null, null, _parent));
  _push(ssrRenderComponent(_component_AppFooter, {
    "nav-list": $data.catalog_nav,
    "footer-menu": $data.menu,
    "social-list": $data.social,
    "payment-list": $data.cards
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DZ0FE-P0.mjs.map
