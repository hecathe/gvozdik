import { useSSRContext, mergeProps, withCtx, createVNode, toDisplayString, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import _sfc_main$7 from './svg-icon-CSQnRWUK.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import { b as __nuxt_component_0$2 } from './ProductSlider-CxuEkrVk.mjs';

const _sfc_main$6 = {
  props: {
    label: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Boolean, Number],
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    },
    checkbox: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "toggle" }, _attrs))} data-v-81cb543d><input class="toggle__input visually-hidden" type="checkbox"${ssrRenderAttr("id", `toggle-${$props.id}`)}${ssrRenderAttr("name", $props.name)}${ssrRenderAttr("value", $props.value)}${ssrIncludeBooleanAttr($props.checked) ? " checked" : ""}${ssrIncludeBooleanAttr(Array.isArray(_ctx.modelChecked) ? ssrLooseContain(_ctx.modelChecked, $props.value) : _ctx.modelChecked) ? " checked" : ""} data-v-81cb543d><label class="toggle__label"${ssrRenderAttr("for", `toggle-${$props.id}`)} data-v-81cb543d>${ssrInterpolate($props.label)}</label></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Toggle.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-81cb543d"]]);
const _sfc_main$5 = {
  props: {
    label: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Boolean, Number],
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    },
    checkbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      modelChecked: this.checked
    };
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.checkbox) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkbox" }, _attrs))} data-v-0204ebb6><input class="checkbox__input visually-hidden" type="checkbox"${ssrRenderAttr("id", `checkbox-${$props.id}`)}${ssrRenderAttr("name", $props.name)}${ssrRenderAttr("value", $props.value)}${ssrIncludeBooleanAttr($props.checked) ? " checked" : ""}${ssrIncludeBooleanAttr(Array.isArray($data.modelChecked) ? ssrLooseContain($data.modelChecked, $props.value) : $data.modelChecked) ? " checked" : ""} data-v-0204ebb6><label class="checkbox__label"${ssrRenderAttr("for", `checkbox-${$props.id}`)} data-v-0204ebb6>${ssrInterpolate($props.label)}</label></div>`);
  } else {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "checkbox-btn" }, _attrs))} data-v-0204ebb6><input class="checkbox-btn__input visually-hidden" type="checkbox"${ssrRenderAttr("id", `checkbox-btn-${$props.id}`)}${ssrRenderAttr("name", $props.name)}${ssrRenderAttr("value", $props.value)}${ssrIncludeBooleanAttr($props.checked) ? " checked" : ""}${ssrIncludeBooleanAttr(Array.isArray($data.modelChecked) ? ssrLooseContain($data.modelChecked, $props.value) : $data.modelChecked) ? " checked" : ""} data-v-0204ebb6><label class="checkbox-btn__label"${ssrRenderAttr("for", `checkbox-btn-${$props.id}`)} data-v-0204ebb6>${ssrInterpolate($props.label)}</label></div>`);
  }
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Checkbox.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-0204ebb6"]]);
const _sfc_main$4 = {
  props: {
    label: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: "radio"
    },
    value: {
      type: [String, Number, Array],
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      modelChecked: this.checked
    };
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "radio" }, _attrs))} data-v-3218bf4a><input class="radio__input visually-hidden" type="radio"${ssrRenderAttr("id", `radio-${$props.id}`)}${ssrRenderAttr("name", $props.name)}${ssrRenderAttr("value", $props.value)}${ssrIncludeBooleanAttr($props.checked) ? " checked" : ""}${ssrIncludeBooleanAttr(ssrLooseEqual($data.modelChecked, $props.value)) ? " checked" : ""} data-v-3218bf4a><label class="radio__label"${ssrRenderAttr("for", `radio-${$props.id}`)} data-v-3218bf4a>${ssrInterpolate($props.label)}</label></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Radio.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-3218bf4a"]]);
const _sfc_main$3 = {
  name: "MultiRangeSlider",
  props: {
    baseClassName: {
      type: String,
      default: "multi-range-slider"
    },
    min: { type: Number },
    max: { type: Number },
    minValue: { type: Number },
    maxValue: { type: Number },
    step: { type: Number, default: 1 },
    preventWheel: { type: Boolean, default: false },
    ruler: { type: Boolean, default: true },
    label: { type: Boolean, default: true },
    labels: { type: Array },
    minCaption: { type: String },
    maxCaption: { type: String },
    rangeMargin: { type: Number }
  },
  data() {
    let _labels = this.labels || [];
    let _minimum = this.min === void 0 ? 0 : this.min;
    let max = _labels.length ? _labels.length - 1 : 100;
    let _maximum = this.max === void 0 ? max : this.max;
    let _minValue = this.minValue === void 0 ? 25 : this.minValue;
    if (_labels.length && this.minValue === void 0) {
      _minValue = 1;
    }
    let _maxValue = this.maxValue || 75;
    if (_labels.length && this.maxValue === void 0) {
      _maxValue = _labels.length - 2;
    }
    if (_maximum <= _minimum) {
      throw new Error("Invalid props min or max");
    }
    if (_minValue > _maxValue) {
      throw new Error("Invalid props minValue or maxValue");
    }
    let _rangeMargin = this.rangeMargin === void 0 ? this.step : this.rangeMargin;
    let m = _rangeMargin % this.step;
    m && (_rangeMargin = _rangeMargin + this.step - m);
    return {
      valueMin: _minValue < _minimum ? _minimum : _minValue,
      valueMax: _maxValue > _maximum ? _maximum : _maxValue,
      interVal: null,
      startX: null,
      mouseMoveCounter: null,
      barBox: null,
      barValue: 0,
      rangeMarginValue: _rangeMargin
    };
  },
  methods: {
    onBarLeftClick() {
      if (this.valueMin - this.step >= this.minimum) {
        this.valueMin -= this.step;
      } else {
        this.valueMin = this.minimum;
      }
    },
    onInnerBarLeftClick() {
      if (this.valueMin + this.rangeMarginValue < this.valueMax) {
        this.valueMin += this.step;
      }
    },
    onBarRightClick() {
      if (this.valueMax + this.step <= this.maximum) {
        this.valueMax += this.step;
      } else {
        this.valueMax = this.maximum;
      }
    },
    onInnerBarRightClick() {
      if (this.valueMax - this.rangeMarginValue > this.valueMin) {
        this.valueMax -= this.step;
      }
    },
    onInputMinChange(e) {
      let val = parseFloat(e.target.value);
      if (val <= this.valueMax - this.rangeMarginValue && val >= this.minimum) {
        this.valueMin = val;
      } else {
        e.target.value = this.valueMin;
      }
    },
    onInputMaxChange(e) {
      let val = parseFloat(e.target.value);
      if (val >= this.valueMin + this.rangeMarginValue && val <= this.maximum) {
        this.valueMax = val;
      } else {
        e.target.value = this.valueMax;
      }
    },
    onLeftThumbMousedown(e) {
      e.preventDefault();
      this.startX = e.clientX;
      if (e.type === "touchstart") {
        if (e.touches.length === 1) {
          this.startX = e.touches[0].clientX;
        } else {
          return;
        }
      }
      this.mouseMoveCounter = 0;
      this.barValue = this.valueMin;
      this.barBox = e.target.parentNode.getBoundingClientRect();
      (void 0).addEventListener("mousemove", this.onLeftThumbMousemove);
      (void 0).addEventListener("mouseup", this.onLeftThumbMouseup);
      (void 0).addEventListener("touchmove", this.onLeftThumbMousemove);
      (void 0).addEventListener("touchend", this.onLeftThumbMouseup);
    },
    onLeftThumbMousemove(e) {
      this.mouseMoveCounter++;
      let clientX = e.clientX;
      if (e.type === "touchmove") {
        clientX = e.touches[0].clientX;
      }
      let dx = clientX - this.startX;
      let per = dx / this.barBox.width;
      let val = this.barValue + (this.maximum - this.minimum) * per;
      let mod = val % this.step;
      val -= mod;
      if (val < this.minimum) {
        val = this.minimum;
      } else if (val > this.valueMax - this.rangeMarginValue) {
        val = this.valueMax - this.rangeMarginValue;
      }
      this.valueMin = val;
    },
    onLeftThumbMouseup() {
      (void 0).removeEventListener("mousemove", this.onLeftThumbMousemove);
      (void 0).removeEventListener("mouseup", this.onLeftThumbMouseup);
      (void 0).removeEventListener("touchmove", this.onLeftThumbMousemove);
      (void 0).removeEventListener("touchend", this.onLeftThumbMouseup);
    },
    onRightThumbMousedown(e) {
      e.preventDefault();
      this.startX = e.clientX;
      if (e.type === "touchstart") {
        if (e.touches.length === 1) {
          this.startX = e.touches[0].clientX;
        } else {
          return;
        }
      }
      this.mouseMoveCounter = 0;
      this.barValue = this.valueMax;
      this.barBox = e.target.parentNode.getBoundingClientRect();
      (void 0).addEventListener("mousemove", this.onRightThumbMousemove);
      (void 0).addEventListener("mouseup", this.onRightThumbMouseup);
      (void 0).addEventListener("touchmove", this.onRightThumbMousemove);
      (void 0).addEventListener("touchend", this.onRightThumbMouseup);
    },
    onRightThumbMousemove(e) {
      this.mouseMoveCounter++;
      let clientX = e.clientX;
      if (e.type === "touchmove") {
        clientX = e.touches[0].clientX;
      }
      let dx = clientX - this.startX;
      let per = dx / this.barBox.width;
      let val = this.barValue + (this.maximum - this.minimum) * per;
      let mod = val % this.step;
      val -= mod;
      if (val < this.valueMin + this.rangeMarginValue) {
        val = this.valueMin + this.rangeMarginValue;
      } else if (val > this.maximum) {
        val = this.maximum;
      }
      this.valueMax = val;
    },
    onRightThumbMouseup() {
      (void 0).removeEventListener("mousemove", this.onRightThumbMousemove);
      (void 0).removeEventListener("mouseup", this.onRightThumbMouseup);
      (void 0).removeEventListener("touchmove", this.onRightThumbMousemove);
      (void 0).removeEventListener("touchend", this.onRightThumbMouseup);
    },
    onMouseWheel(e) {
      if (this.preventWheel === true) {
        return;
      }
      if (!e.shiftKey && !e.ctrlKey) {
        return;
      }
      let val = this.step;
      if (e.deltaY < 0) {
        val = -val;
      }
      if (e.shiftKey && e.ctrlKey) {
        if (this.valueMin + val >= this.minimum && this.valueMax + val <= this.maximum) {
          this.valueMin = this.valueMin + val;
          this.valueMax = this.valueMax + val;
        }
      } else if (e.ctrlKey) {
        val = this.valueMax + val;
        if (val < this.valueMin + this.rangeMarginValue) {
          val = this.valueMin + this.rangeMarginValue;
        } else if (val > this.maximum) {
          val = this.maximum;
        }
        this.valueMax = val;
      } else if (e.shiftKey) {
        val = this.valueMin + val;
        if (val < this.minimum) {
          val = this.minimum;
        } else if (val > this.valueMax - this.rangeMarginValue) {
          val = this.valueMax - this.rangeMarginValue;
        }
        this.valueMin = val;
      }
    },
    triggerInput() {
      let fixed = 0;
      if (this.step.toString().includes(".")) {
        fixed = 2;
      }
      let retObj = {
        min: this.minimum,
        max: this.maximum,
        minValue: parseFloat(this.valueMin.toFixed(fixed)),
        maxValue: parseFloat(this.valueMax.toFixed(fixed))
      };
      this.$emit("input", retObj);
    }
  },
  computed: {
    minimum() {
      return this.min === void 0 ? 0 : this.min;
    },
    maximum() {
      let _labels = this.labels || [];
      let max = _labels.length ? _labels.length - 1 : 100;
      return this.max === void 0 ? max : this.max;
    },
    stepCount() {
      let _labels = this.labels || [];
      if (_labels.length) {
        return _labels.length - 1;
      }
      return Math.floor((this.maximum - this.minimum) / this.step);
    },
    subStepCount() {
      let _labels = this.labels || [];
      if (_labels.length && this.step > 1) {
        return (this.maximum - this.minimum) / this.step;
      }
      return 0;
    },
    barMin() {
      let per = (this.valueMin - this.minimum) / (this.maximum - this.minimum) * 100;
      return per;
    },
    barMax() {
      let per = 100 - (this.valueMax - this.minimum) / (this.maximum - this.minimum) * 100;
      return per;
    },
    barMinVal() {
      let fixed = 0;
      if (this.step.toString().includes(".")) {
        fixed = 2;
      }
      return (this.valueMin || 0).toFixed(fixed);
    },
    barMaxVal() {
      let fixed = 0;
      if (this.step.toString().includes(".")) {
        fixed = 2;
      }
      return (this.valueMax || 100).toFixed(fixed);
    },
    scaleLabels() {
      let _labels = this.labels || [];
      if (_labels.length === 0) {
        _labels = [];
        _labels.push(this.minimum);
        _labels.push(this.maximum);
      }
      return _labels;
    }
  },
  watch: {
    valueMin() {
      this.triggerInput();
    },
    valueMax() {
      this.triggerInput();
    },
    minValue(newValue) {
      this.valueMin = newValue < this.minimum ? this.minimum : newValue;
    },
    maxValue(newValue) {
      this.valueMax = newValue > this.maximum ? this.maximum : newValue;
    }
  },
  mounted() {
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [$props.baseClassName, $data.rangeMarginValue === 0 ? "zero-ranage-margin" : ""]
  }, _attrs))}><div class="bar"><div class="bar-left" style="${ssrRenderStyle({ width: $options.barMin + "%" })}"></div><input class="input-type-range input-type-range-min" type="range"${ssrRenderAttr("min", $options.minimum)}${ssrRenderAttr("max", $options.maximum)}${ssrRenderAttr("step", $props.step)}${ssrRenderAttr("value", $data.valueMin)}><div class="thumb thumb-left"><div class="caption"><span class="min-caption">${ssrInterpolate($props.minCaption || $options.barMinVal)}</span></div></div><div class="bar-inner"><div class="bar-inner-left"></div><div class="bar-inner-right"></div></div><input class="input-type-range input-type-range-max" type="range"${ssrRenderAttr("min", $options.minimum)}${ssrRenderAttr("max", $options.maximum)}${ssrRenderAttr("step", $props.step)}${ssrRenderAttr("value", $data.valueMax)}><div class="thumb thumb-right"><div class="caption"><span class="max-caption">${ssrInterpolate($props.maxCaption || $options.barMaxVal)}</span></div></div><div class="bar-right" style="${ssrRenderStyle({ width: $options.barMax + "%" })}"></div></div>`);
  if ($props.ruler) {
    _push(`<div class="ruler"><!--[-->`);
    ssrRenderList($options.stepCount, (n) => {
      _push(`<div class="ruler-rule"></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($options.subStepCount) {
    _push(`<div class="sub-ruler"><!--[-->`);
    ssrRenderList($options.subStepCount, (n) => {
      _push(`<div class="ruler-sub-rule"></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.label) {
    _push(`<div class="labels"><!--[-->`);
    ssrRenderList($options.scaleLabels, (label) => {
      _push(`<div class="label">${ssrInterpolate(label)}</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/multi-range-slider-vue/MultiRangeSlider.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MultiRangeSlider = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: {
    MultiRangeSlider
  },
  data() {
    return {
      barMinValue: 100,
      barMaxValue: 45e3
    };
  },
  methods: {
    UpdateValues(e) {
      this.barMinValue = e.minValue;
      this.barMaxValue = e.maxValue;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MultiRangeSlider = resolveComponent("MultiRangeSlider");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "range" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_MultiRangeSlider, {
    min: 100,
    max: 5e4,
    step: 50,
    ruler: false,
    label: false,
    minValue: $data.barMinValue,
    maxValue: $data.barMaxValue,
    onInput: $options.UpdateValues
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/InputRange.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
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
    isToggle: {
      type: Boolean,
      default: false
    },
    isLink: {
      type: Boolean,
      default: false
    },
    isFlex: {
      type: Boolean,
      default: false
    },
    isInputCheckbox: {
      type: Boolean,
      default: false
    },
    isInputRadio: {
      type: Boolean,
      default: false
    },
    isInputCheckBtn: {
      type: Boolean,
      default: false
    },
    isRangeInput: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: true,
      checked: false
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ui_toggle = __nuxt_component_0;
  const _component_svg_icon = _sfc_main$7;
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_ui_checkbox = __nuxt_component_3$1;
  const _component_ui_radio = __nuxt_component_4;
  const _component_ui_input_range = __nuxt_component_5;
  if ($props.isToggle) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "drop-down drop-down_toggle" }, _attrs))} data-v-ef1a941a><button class="drop-down__btn" data-v-ef1a941a><span data-v-ef1a941a>${ssrInterpolate($props.title)}</span>`);
    _push(ssrRenderComponent(_component_ui_toggle, {
      id: "1",
      name: $props.title,
      value: $props.title
    }, null, _parent));
    _push(`</button></div>`);
  } else {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "drop-down" }, _attrs))} data-v-ef1a941a><button class="drop-down__btn" data-v-ef1a941a><span data-v-ef1a941a>${ssrInterpolate($props.title)}</span>`);
    _push(ssrRenderComponent(_component_svg_icon, {
      name: $data.isOpen ? "arrow-up" : "arrow-down",
      width: "24",
      height: "24"
    }, null, _parent));
    _push(`</button>`);
    if ($data.isOpen) {
      _push(`<div class="drop-down__content" data-v-ef1a941a><ul class="${ssrRenderClass([{ "drop-down-list_flex": $props.isFlex }, "drop-down-list"])}" data-v-ef1a941a><!--[-->`);
      ssrRenderList($props.list, (item, index) => {
        _push(`<li class="drop-down-list__item" data-v-ef1a941a>`);
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
                _push2(`<span data-v-ef1a941a${_scopeId}>${ssrInterpolate(item.name)}</span>`);
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
            label: item.name,
            id: index,
            name: $props.title,
            value: item.name,
            checkbox: true,
            modelValue: $data.checked,
            "onUpdate:modelValue": ($event) => $data.checked = $event
          }, null, _parent));
        } else if ($props.isInputCheckBtn) {
          _push(ssrRenderComponent(_component_ui_checkbox, {
            label: item.name,
            id: index,
            name: $props.title,
            value: item.name,
            checkbox: false,
            modelValue: $data.checked,
            "onUpdate:modelValue": ($event) => $data.checked = $event
          }, null, _parent));
        } else if ($props.isInputRadio) {
          _push(ssrRenderComponent(_component_ui_radio, {
            label: item.name,
            id: index,
            value: index,
            modelValue: $data.checked,
            "onUpdate:modelValue": ($event) => $data.checked = $event
          }, null, _parent));
        } else if ($props.isRangeInput) {
          _push(ssrRenderComponent(_component_ui_input_range, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
      if ($props.showMore) {
        _push(`<button class="drop-down__btn-more" data-v-ef1a941a>\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0451</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/DropdownList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ef1a941a"]]);
const _sfc_main = {
  props: {
    productList: {
      type: Array,
      default: () => []
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_product_card = __nuxt_component_0$2;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "product-grid" }, _attrs))} data-v-1af0a7c5><!--[-->`);
  ssrRenderList($props.productList, (product, index) => {
    _push(`<li class="${ssrRenderClass([{ "span-2": product.span }, "product-grid__item"])}" data-v-1af0a7c5>`);
    _push(ssrRenderComponent(_component_product_card, { card: product }, null, _parent));
    _push(`</li>`);
  });
  _push(`<!--]--></ul>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1af0a7c5"]]);

export { __nuxt_component_2 as _, __nuxt_component_3 as a };
//# sourceMappingURL=ProductGrid-DI1Rr5jA.mjs.map
