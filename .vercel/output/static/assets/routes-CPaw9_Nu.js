const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/ProductScene-DYbikqU7.js", "assets/index-BO985hSV.js"]),
) => i.map((i) => d[i]);
import { a as e, c as t, i as n, l as r, r as i, s as a, t as o } from "./index-BO985hSV.js";
var s = r(a(), 1),
  c = [
    {
      id: `hero`,
      at: 0,
      position: [1.45, -0.05, 0],
      rotation: [0.03, -0.35, 0.02],
      scale: 1,
      cameraPosition: [0, 0.05, 6.4],
      cameraFov: 32,
      packagingOpen: 1,
      drama: 0.25,
    },
    {
      id: `intro`,
      at: 0.17,
      position: [-1.6, -0.02, 0.2],
      rotation: [0, 0.85, -0.03],
      scale: 0.88,
      cameraPosition: [0.3, 0.1, 6.1],
      cameraFov: 34,
      packagingOpen: 1,
      drama: 0.35,
    },
    {
      id: `focus`,
      at: 0.32,
      position: [0, 0, 0.4],
      rotation: [0, 1.9, 0],
      scale: 1.18,
      cameraPosition: [0, 0, 5.2],
      cameraFov: 30,
      packagingOpen: 1,
      drama: 0.45,
    },
    {
      id: `details`,
      at: 0.46,
      position: [1.25, -0.05, 0],
      rotation: [0.02, 2.75, 0.03],
      scale: 1.02,
      cameraPosition: [-0.25, 0.05, 5.6],
      cameraFov: 32,
      packagingOpen: 1,
      drama: 0.55,
    },
    {
      id: `reveal`,
      at: 0.6,
      position: [0, -0.05, 0],
      rotation: [0, 3.9, 0],
      scale: 1.05,
      cameraPosition: [0, 0.1, 5.4],
      cameraFov: 31,
      packagingOpen: 0,
      drama: 0.7,
    },
    {
      id: `angles`,
      at: 0.72,
      position: [0, 0, 0.2],
      rotation: [0, 7.2, 0],
      scale: 1.22,
      cameraPosition: [0, 0.02, 4.8],
      cameraFov: 30,
      packagingOpen: 1,
      drama: 0.6,
    },
    {
      id: `technology`,
      at: 0.82,
      position: [-1.15, 0, 0.1],
      rotation: [0.04, 8.6, -0.04],
      scale: 1.1,
      cameraPosition: [0.2, 0.05, 5.1],
      cameraFov: 31,
      packagingOpen: 1,
      drama: 0.8,
    },
    {
      id: `moment`,
      at: 0.91,
      position: [0, -0.02, 0.6],
      rotation: [0, 9.6, 0],
      scale: 1.45,
      cameraPosition: [0, 0, 4.4],
      cameraFov: 28,
      packagingOpen: 1,
      drama: 1,
    },
    {
      id: `cta`,
      at: 1,
      position: [0, -0.1, 0],
      rotation: [0, 10.6, 0],
      scale: 1,
      cameraPosition: [0, 0.05, 5.9],
      cameraFov: 33,
      packagingOpen: 1,
      drama: 0.75,
    },
  ],
  l = 5.2,
  u = { floatAmplitude: 0.045, floatSpeed: 0.55, rotationDrift: 0.06 },
  d = { duration: 1.35, wheelMultiplier: 0.9, touchMultiplier: 1.4 },
  f = {
    positionXFactor: 0.28,
    positionYOffset: 0.35,
    scaleFactor: 0.72,
    cameraZOffset: 1.15,
    fovOffset: 6,
  },
  p = (e) => (e < 0.5 ? 2 * e * e : 1 - (-2 * e + 2) ** 2 / 2),
  m = (e, t, n) => e + (t - e) * n;
function h(e) {
  let t = Math.min(1, Math.max(0, e)),
    n = 0;
  for (; n < c.length - 2 && t > c[n + 1].at;) n++;
  let r = c[n],
    i = c[n + 1] ?? r,
    a = Math.max(1e-4, i.at - r.at),
    o = Math.min(1, Math.max(0, (t - r.at) / a)),
    s = p(o),
    l = (e, t) => [m(e[0], t[0], s), m(e[1], t[1], s), m(e[2], t[2], s)];
  return {
    position: l(r.position, i.position),
    rotation: l(r.rotation, i.rotation),
    scale: m(r.scale, i.scale, s),
    cameraPosition: l(r.cameraPosition, i.cameraPosition),
    cameraFov: m(r.cameraFov, i.cameraFov, s),
    packagingOpen: m(r.packagingOpen, i.packagingOpen, s),
    drama: m(r.drama, i.drama, s),
    sceneIndex: o < 0.5 ? n : n + 1,
  };
}
var g = {
    progress: 0,
    velocity: 0,
    dragRotation: 0,
    dragVelocity: 0,
    pointerX: 0,
    pointerY: 0,
    dragging: !1,
  },
  _ = new Set();
function v(e, t = 0) {
  ((g.progress = e), (g.velocity = t), _.forEach((t) => t(e)));
}
function y(e) {
  return (_.add(e), () => _.delete(e));
}
function b(e = 100) {
  let [t, n] = (0, s.useState)(0);
  return (
    (0, s.useEffect)(() => {
      let t = -1,
        r = y((r) => {
          let i = Math.round(r * e) / e;
          i !== t && ((t = i), n(i));
        });
      return () => {
        r();
      };
    }, [e]),
    t
  );
}
function x() {
  try {
    let e = document.createElement(`canvas`);
    return !!(
      e.getContext(`webgl2`) ||
      e.getContext(`webgl`) ||
      e.getContext(`experimental-webgl`)
    );
  } catch {
    return !1;
  }
}
var S = {
  webgl: !0,
  reducedMotion: !1,
  mobile: !1,
  dpr: [1, 1.6],
  shadows: !0,
  richMaterials: !0,
  ready: !1,
};
function C() {
  let [e, t] = (0, s.useState)(S);
  return (
    (0, s.useEffect)(() => {
      let e = window.matchMedia(`(prefers-reduced-motion: reduce)`),
        n = window.matchMedia(`(max-width: 767px)`),
        r = () => {
          let r = n.matches,
            i = navigator.hardwareConcurrency ?? 4,
            a = r && i <= 4;
          t({
            webgl: x(),
            reducedMotion: e.matches,
            mobile: r,
            dpr: r ? [1, 1.5] : [1, 1.8],
            shadows: !a,
            richMaterials: !a,
            ready: !0,
          });
        };
      return (
        r(),
        e.addEventListener(`change`, r),
        n.addEventListener(`change`, r),
        () => {
          (e.removeEventListener(`change`, r), n.removeEventListener(`change`, r));
        }
      );
    }, []),
    e
  );
}
var w = `1.3.26`;
function T(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function E(e, t, n) {
  return (1 - n) * e + n * t;
}
function D(e, t, n, r) {
  return E(e, t, 1 - Math.exp(-n * r));
}
function O(e, t) {
  return ((e % t) + t) % t;
}
var k = class {
  isRunning = !1;
  value = 0;
  from = 0;
  to = 0;
  currentTime = 0;
  lerp;
  duration;
  easing;
  onUpdate;
  advance(e) {
    if (!this.isRunning) return;
    let t = !1;
    if (this.duration && this.easing) {
      this.currentTime += e;
      let n = T(0, this.currentTime / this.duration, 1);
      t = n >= 1;
      let r = t ? 1 : this.easing(n);
      this.value = this.from + (this.to - this.from) * r;
    } else
      this.lerp
        ? ((this.value = D(this.value, this.to, this.lerp * 60, e)),
          Math.round(this.value) === Math.round(this.to) && ((this.value = this.to), (t = !0)))
        : ((this.value = this.to), (t = !0));
    (t && this.stop(), this.onUpdate?.(this.value, t));
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
    ((this.from = this.value = e),
      (this.to = t),
      (this.lerp = n),
      (this.duration = r),
      (this.easing = i),
      (this.currentTime = 0),
      (this.isRunning = !0),
      a?.(),
      (this.onUpdate = o));
  }
};
function A(e, t) {
  let n;
  return function (...r) {
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(this, r));
      }, t)));
  };
}
var j = class {
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    constructor(e, t, { autoResize: n = !0, debounce: r = 250 } = {}) {
      ((this.wrapper = e),
        (this.content = t),
        n &&
          ((this.debouncedResize = A(this.resize, r)),
          this.wrapper instanceof Window
            ? window.addEventListener(`resize`, this.debouncedResize)
            : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.wrapperResizeObserver.observe(this.wrapper)),
          (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
          this.contentResizeObserver.observe(this.content)),
        this.resize());
    }
    destroy() {
      (this.wrapperResizeObserver?.disconnect(),
        this.contentResizeObserver?.disconnect(),
        this.wrapper === window &&
          this.debouncedResize &&
          window.removeEventListener(`resize`, this.debouncedResize));
    }
    resize = () => {
      (this.onWrapperResize(), this.onContentResize());
    };
    onWrapperResize = () => {
      this.wrapper instanceof Window
        ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
        : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
    };
    onContentResize = () => {
      this.wrapper instanceof Window
        ? ((this.scrollHeight = this.content.scrollHeight),
          (this.scrollWidth = this.content.scrollWidth))
        : ((this.scrollHeight = this.wrapper.scrollHeight),
          (this.scrollWidth = this.wrapper.scrollWidth));
    };
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  },
  M = class {
    events = {};
    emit(e, ...t) {
      let n = this.events[e] || [];
      for (let e = 0, r = n.length; e < r; e++) n[e]?.(...t);
    }
    on(e, t) {
      return (
        this.events[e] ? this.events[e].push(t) : (this.events[e] = [t]),
        () => {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
      );
    }
    off(e, t) {
      this.events[e] = this.events[e]?.filter((e) => t !== e);
    }
    destroy() {
      this.events = {};
    }
  },
  ee = 100 / 6,
  N = { passive: !1 };
function te(e, t) {
  return e === 1 ? ee : e === 2 ? t : 1;
}
var P = class {
    touchStart = { x: 0, y: 0 };
    lastDelta = { x: 0, y: 0 };
    window = { width: 0, height: 0 };
    emitter = new M();
    constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      ((this.element = e),
        (this.options = t),
        window.addEventListener(`resize`, this.onWindowResize),
        this.onWindowResize(),
        this.element.addEventListener(`wheel`, this.onWheel, N),
        this.element.addEventListener(`touchstart`, this.onTouchStart, N),
        this.element.addEventListener(`touchmove`, this.onTouchMove, N),
        this.element.addEventListener(`touchend`, this.onTouchEnd, N));
    }
    on(e, t) {
      return this.emitter.on(e, t);
    }
    destroy() {
      (this.emitter.destroy(),
        window.removeEventListener(`resize`, this.onWindowResize),
        this.element.removeEventListener(`wheel`, this.onWheel, N),
        this.element.removeEventListener(`touchstart`, this.onTouchStart, N),
        this.element.removeEventListener(`touchmove`, this.onTouchMove, N),
        this.element.removeEventListener(`touchend`, this.onTouchEnd, N));
    }
    onTouchStart = (e) => {
      let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
      ((this.touchStart.x = t),
        (this.touchStart.y = n),
        (this.lastDelta = { x: 0, y: 0 }),
        this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
    };
    onTouchMove = (e) => {
      let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
        r = -(t - this.touchStart.x) * this.options.touchMultiplier,
        i = -(n - this.touchStart.y) * this.options.touchMultiplier;
      ((this.touchStart.x = t),
        (this.touchStart.y = n),
        (this.lastDelta = { x: r, y: i }),
        this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
    };
    onTouchEnd = (e) => {
      this.emitter.emit(`scroll`, { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: e });
    };
    onWheel = (e) => {
      let { deltaX: t, deltaY: n, deltaMode: r } = e,
        i = te(r, this.window.width),
        a = te(r, this.window.height);
      ((t *= i),
        (n *= a),
        (t *= this.options.wheelMultiplier),
        (n *= this.options.wheelMultiplier),
        this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
    };
    onWindowResize = () => {
      this.window = { width: window.innerWidth, height: window.innerHeight };
    };
  },
  ne = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
  re = class {
    _isScrolling = !1;
    _isStopped = !1;
    _isLocked = !1;
    _preventNextNativeScrollEvent = !1;
    _resetVelocityTimeout = null;
    _rafId = null;
    _isDraggingSelection = !1;
    reducedMotionMediaQuery = window.matchMedia(`(prefers-reduced-motion: reduce)`);
    isTouching;
    isIos;
    time = 0;
    userData = {};
    lastVelocity = 0;
    velocity = 0;
    direction = 0;
    options;
    targetScroll;
    animatedScroll;
    animate = new k();
    emitter = new M();
    dimensions;
    virtualScroll;
    constructor({
      wrapper: e = window,
      content: t = document.documentElement,
      eventsTarget: n = e,
      smoothWheel: r = !0,
      syncTouch: i = !1,
      syncTouchLerp: a = 0.075,
      touchInertiaExponent: o = 1.7,
      duration: s,
      easing: c,
      lerp: l = 0.1,
      infinite: u = !1,
      orientation: d = `vertical`,
      gestureOrientation: f = d === `horizontal` ? `both` : `vertical`,
      touchMultiplier: p = 1,
      wheelMultiplier: m = 1,
      autoResize: h = !0,
      prevent: g,
      virtualScroll: _,
      overscroll: v = !0,
      autoRaf: y = !1,
      anchors: b = !1,
      autoToggle: x = !1,
      allowNestedScroll: S = !1,
      __experimental__naiveDimensions: C = !1,
      naiveDimensions: T = C,
      stopInertiaOnNavigate: E = !1,
      respectReducedMotion: D = !0,
    } = {}) {
      ((window.lenisVersion = w),
        window.lenis || (window.lenis = {}),
        (window.lenis.version = w),
        d === `horizontal` && (window.lenis.horizontal = !0),
        i === !0 && (window.lenis.touch = !0),
        (this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)),
        (!e || e === document.documentElement) && (e = window),
        typeof s == `number` && typeof c != `function`
          ? (c = ne)
          : typeof c == `function` && typeof s != `number` && (s = 1),
        (this.options = {
          wrapper: e,
          content: t,
          eventsTarget: n,
          smoothWheel: r,
          syncTouch: i,
          syncTouchLerp: a,
          touchInertiaExponent: o,
          duration: s,
          easing: c,
          lerp: l,
          infinite: u,
          gestureOrientation: f,
          orientation: d,
          touchMultiplier: p,
          wheelMultiplier: m,
          autoResize: h,
          prevent: g,
          virtualScroll: _,
          overscroll: v,
          autoRaf: y,
          anchors: b,
          autoToggle: x,
          allowNestedScroll: S,
          naiveDimensions: T,
          stopInertiaOnNavigate: E,
          respectReducedMotion: D,
        }),
        (this.dimensions = new j(e, t, { autoResize: h })),
        this.updateClassName(),
        (this.targetScroll = this.animatedScroll = this.actualScroll),
        this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll),
        this.options.wrapper.addEventListener(`scrollend`, this.onScrollEnd, { capture: !0 }),
        (this.options.anchors || this.options.stopInertiaOnNavigate) &&
          this.options.wrapper.addEventListener(`click`, this.onClick),
        this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown),
        (this.virtualScroll = new P(n, { touchMultiplier: p, wheelMultiplier: m })),
        this.virtualScroll.on(`scroll`, this.onVirtualScroll),
        this.options.autoToggle &&
          (this.checkOverflow(),
          this.rootElement.addEventListener(`transitionend`, this.onTransitionEnd)),
        this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
    }
    destroy() {
      (this.emitter.destroy(),
        this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll),
        this.options.wrapper.removeEventListener(`scrollend`, this.onScrollEnd, { capture: !0 }),
        this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown),
        (this.options.anchors || this.options.stopInertiaOnNavigate) &&
          this.options.wrapper.removeEventListener(`click`, this.onClick),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.cleanUpClassName(),
        this._rafId && cancelAnimationFrame(this._rafId));
    }
    on(e, t) {
      return this.emitter.on(e, t);
    }
    off(e, t) {
      return this.emitter.off(e, t);
    }
    onScrollEnd = (e) => {
      e instanceof CustomEvent ||
        ((this.isScrolling === `smooth` || this.isScrolling === !1) && e.stopPropagation());
    };
    dispatchScrollendEvent = () => {
      this.options.wrapper.dispatchEvent(
        new CustomEvent(`scrollend`, {
          bubbles: this.options.wrapper === window,
          detail: { lenisScrollEnd: !0 },
        }),
      );
    };
    get overflow() {
      let e = this.isHorizontal ? `overflow-x` : `overflow-y`;
      return getComputedStyle(this.rootElement)[e];
    }
    checkOverflow() {
      [`hidden`, `clip`].includes(this.overflow) ? this.internalStop() : this.internalStart();
    }
    onTransitionEnd = (e) => {
      e.propertyName?.includes(`overflow`) && e.target === this.rootElement && this.checkOverflow();
    };
    setScroll(e) {
      this.isHorizontal
        ? this.options.wrapper.scrollTo({ left: e, behavior: `instant` })
        : this.options.wrapper.scrollTo({ top: e, behavior: `instant` });
    }
    onClick = (e) => {
      let t = e
          .composedPath()
          .filter((e) => e instanceof HTMLAnchorElement && e.href)
          .map((e) => new URL(e.href)),
        n = new URL(window.location.href);
      if (this.options.anchors) {
        let e = t.find((e) => n.host === e.host && n.pathname === e.pathname && e.hash);
        if (e) {
          let t =
              typeof this.options.anchors == `object` && this.options.anchors
                ? this.options.anchors
                : void 0,
            n = decodeURIComponent(e.hash);
          this.scrollTo(n, t);
          return;
        }
      }
      if (
        this.options.stopInertiaOnNavigate &&
        t.some((e) => n.host === e.host && n.pathname !== e.pathname)
      ) {
        this.reset();
        return;
      }
    };
    onPointerDown = (e) => {
      e.button === 1 && this.reset();
    };
    isTouchOnSelectionHandle(e) {
      let t = window.getSelection();
      if (!t || t.isCollapsed || t.rangeCount === 0) return !1;
      let n = e.targetTouches[0] ?? e.changedTouches[0];
      if (!n) return !1;
      let r = t.getRangeAt(0).getClientRects();
      if (r.length === 0) return !1;
      let i = r[0],
        a = r[r.length - 1],
        o = Math.hypot(n.clientX - i.left, n.clientY - i.top) <= 40,
        s = Math.hypot(n.clientX - a.right, n.clientY - a.bottom) <= 40;
      return o || s;
    }
    onVirtualScroll = (e) => {
      if (typeof this.options.virtualScroll == `function` && this.options.virtualScroll(e) === !1)
        return;
      let { deltaX: t, deltaY: n, event: r } = e;
      if (
        (this.emitter.emit(`virtual-scroll`, { deltaX: t, deltaY: n, event: r }),
        r.ctrlKey || r.lenisStopPropagation)
      )
        return;
      let i = r.type.includes(`touch`),
        a = r.type.includes(`wheel`);
      if (
        i &&
        this.isIos &&
        (r.type === `touchstart` && (this._isDraggingSelection = this.isTouchOnSelectionHandle(r)),
        this._isDraggingSelection)
      ) {
        r.type === `touchend` && (this._isDraggingSelection = !1);
        return;
      }
      this.isTouching = r.type === `touchstart` || r.type === `touchmove`;
      let o = t === 0 && n === 0;
      if (
        this.options.syncTouch &&
        i &&
        r.type === `touchstart` &&
        o &&
        !this.isStopped &&
        !this.isLocked
      ) {
        this.reset();
        return;
      }
      let s =
        (this.options.gestureOrientation === `vertical` && n === 0) ||
        (this.options.gestureOrientation === `horizontal` && t === 0);
      if (o || s) return;
      let c = r.composedPath();
      c = c.slice(0, c.indexOf(this.rootElement));
      let l = this.options.prevent,
        u = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`;
      if (
        c.find(
          (e) =>
            e instanceof HTMLElement &&
            ((typeof l == `function` && l?.(e)) ||
              e.hasAttribute?.(`data-lenis-prevent`) ||
              (u === `vertical` && e.hasAttribute?.(`data-lenis-prevent-vertical`)) ||
              (u === `horizontal` && e.hasAttribute?.(`data-lenis-prevent-horizontal`)) ||
              (i && e.hasAttribute?.(`data-lenis-prevent-touch`)) ||
              (a && e.hasAttribute?.(`data-lenis-prevent-wheel`)) ||
              (this.options.allowNestedScroll &&
                this.hasNestedScroll(e, { deltaX: t, deltaY: n }))),
        )
      )
        return;
      if (this.isStopped || this.isLocked) {
        r.cancelable && r.preventDefault();
        return;
      }
      if (!((this.options.syncTouch && i) || (this.options.smoothWheel && a))) {
        ((this.isScrolling = `native`), this.animate.stop(), (r.lenisStopPropagation = !0));
        return;
      }
      let d = n;
      (this.options.gestureOrientation === `both`
        ? (d = Math.abs(n) > Math.abs(t) ? n : t)
        : this.options.gestureOrientation === `horizontal` && (d = t),
        (!this.options.overscroll ||
          this.options.infinite ||
          (this.options.wrapper !== window &&
            this.limit > 0 &&
            ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
              (this.animatedScroll === 0 && n > 0) ||
              (this.animatedScroll === this.limit && n < 0)))) &&
          (r.lenisStopPropagation = !0),
        r.cancelable && r.preventDefault());
      let f = i && this.options.syncTouch,
        p = i && r.type === `touchend`;
      (p && (d = Math.sign(d) * Math.abs(this.velocity) ** this.options.touchInertiaExponent),
        this.scrollTo(this.targetScroll + d, {
          programmatic: !1,
          ...(f
            ? { lerp: p ? this.options.syncTouchLerp : 1 }
            : {
                lerp: this.options.lerp,
                duration: this.options.duration,
                easing: this.options.easing,
              }),
        }));
    };
    resize() {
      (this.dimensions.resize(),
        (this.animatedScroll = this.targetScroll = this.actualScroll),
        this.emit());
    }
    emit() {
      this.emitter.emit(`scroll`, this);
    }
    onNativeScroll = () => {
      if (
        (this._resetVelocityTimeout !== null &&
          (clearTimeout(this._resetVelocityTimeout), (this._resetVelocityTimeout = null)),
        this._preventNextNativeScrollEvent)
      ) {
        this._preventNextNativeScrollEvent = !1;
        return;
      }
      if (this.isScrolling === !1 || this.isScrolling === `native`) {
        let e = this.animatedScroll;
        ((this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity),
          (this.velocity = this.animatedScroll - e),
          (this.direction = Math.sign(this.animatedScroll - e)),
          this.isStopped || (this.isScrolling = `native`),
          this.emit(),
          this.velocity !== 0 &&
            (this._resetVelocityTimeout = setTimeout(() => {
              ((this.lastVelocity = this.velocity),
                (this.velocity = 0),
                (this.isScrolling = !1),
                this.emit());
            }, 400)));
      }
    };
    reset() {
      ((this.isLocked = !1),
        (this.isScrolling = !1),
        (this.animatedScroll = this.targetScroll = this.actualScroll),
        (this.lastVelocity = this.velocity = 0),
        this.animate.stop());
    }
    start() {
      if (this.isStopped) {
        if (this.options.autoToggle) {
          this.rootElement.style.removeProperty(`overflow`);
          return;
        }
        this.internalStart();
      }
    }
    internalStart() {
      this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
    }
    stop() {
      if (!this.isStopped) {
        if (this.options.autoToggle) {
          this.rootElement.style.setProperty(`overflow`, `clip`);
          return;
        }
        this.internalStop();
      }
    }
    internalStop() {
      this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
    }
    raf = (e) => {
      let t = e - (this.time || e);
      ((this.time = e),
        this.animate.advance(t * 0.001),
        this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
    };
    scrollTo(
      e,
      {
        offset: t = 0,
        immediate: n = !1,
        lock: r = !1,
        programmatic: i = !0,
        lerp: a = i ? this.options.lerp : void 0,
        duration: o = i ? this.options.duration : void 0,
        easing: s = i ? this.options.easing : void 0,
        onStart: c,
        onComplete: l,
        force: u = !1,
        userData: d,
      } = {},
    ) {
      if (
        (this.prefersReducedMotion && (i ? (n = !0) : ((a = 1), (o = void 0), (s = void 0))),
        (this.isStopped || this.isLocked) && !u)
      )
        return;
      let f = e,
        p = t;
      if (typeof f == `string` && [`top`, `left`, `start`, `#`].includes(f)) f = 0;
      else if (typeof f == `string` && [`bottom`, `right`, `end`].includes(f)) f = this.limit;
      else {
        let e = null;
        if (
          (typeof f == `string`
            ? ((e = f.startsWith(`#`)
                ? document.getElementById(f.slice(1))
                : document.querySelector(f)),
              e || (f === `#top` ? (f = 0) : console.warn(`Lenis: Target not found`, f)))
            : f instanceof HTMLElement && f?.nodeType && (e = f),
          e)
        ) {
          if (this.options.wrapper !== window) {
            let e = this.rootElement.getBoundingClientRect();
            p -= this.isHorizontal ? e.left : e.top;
          }
          let t = e.getBoundingClientRect(),
            n = getComputedStyle(e),
            r = this.isHorizontal
              ? Number.parseFloat(n.scrollMarginLeft)
              : Number.parseFloat(n.scrollMarginTop),
            i = getComputedStyle(this.rootElement),
            a = this.isHorizontal
              ? Number.parseFloat(i.scrollPaddingLeft)
              : Number.parseFloat(i.scrollPaddingTop);
          f =
            (this.isHorizontal ? t.left : t.top) +
            this.animatedScroll -
            (Number.isNaN(r) ? 0 : r) -
            (Number.isNaN(a) ? 0 : a);
        }
      }
      if (typeof f == `number`) {
        if (((f += p), this.options.infinite)) {
          if (i) {
            this.targetScroll = this.animatedScroll = this.scroll;
            let e = f - this.animatedScroll;
            e > this.limit / 2 ? (f -= this.limit) : e < -this.limit / 2 && (f += this.limit);
          }
        } else f = T(0, f, this.limit);
        if (f === this.targetScroll) {
          (c?.(this), l?.(this));
          return;
        }
        if (((this.userData = d ?? {}), n)) {
          ((this.animatedScroll = this.targetScroll = f),
            this.setScroll(this.scroll),
            this.reset(),
            this.preventNextNativeScrollEvent(),
            this.emit(),
            l?.(this),
            (this.userData = {}),
            requestAnimationFrame(() => {
              this.dispatchScrollendEvent();
            }));
          return;
        }
        (i || (this.targetScroll = f),
          typeof o == `number` && typeof s != `function`
            ? (s = ne)
            : typeof s == `function` && typeof o != `number` && (o = 1),
          this.animate.fromTo(this.animatedScroll, f, {
            duration: o,
            easing: s,
            lerp: a,
            onStart: () => {
              (r && (this.isLocked = !0), (this.isScrolling = `smooth`), c?.(this));
            },
            onUpdate: (e, t) => {
              ((this.isScrolling = `smooth`),
                (this.lastVelocity = this.velocity),
                (this.velocity = e - this.animatedScroll),
                (this.direction = Math.sign(this.velocity)),
                (this.animatedScroll = e),
                this.setScroll(this.scroll),
                i && (this.targetScroll = e),
                t || this.emit(),
                t &&
                  (this.reset(),
                  this.emit(),
                  l?.(this),
                  (this.userData = {}),
                  requestAnimationFrame(() => {
                    this.dispatchScrollendEvent();
                  }),
                  this.preventNextNativeScrollEvent()));
            },
          }));
      }
    }
    preventNextNativeScrollEvent() {
      ((this._preventNextNativeScrollEvent = !0),
        requestAnimationFrame(() => {
          this._preventNextNativeScrollEvent = !1;
        }));
    }
    hasNestedScroll(e, { deltaX: t, deltaY: n }) {
      let r = Date.now();
      e._lenis ||= {};
      let i = e._lenis,
        a,
        o,
        s,
        c,
        l,
        u,
        d,
        f,
        p,
        m;
      if (r - (i.time ?? 0) > 2e3) {
        i.time = Date.now();
        let t = window.getComputedStyle(e);
        if (
          ((i.computedStyle = t),
          (a = [`auto`, `overlay`, `scroll`].includes(t.overflowX)),
          (o = [`auto`, `overlay`, `scroll`].includes(t.overflowY)),
          (l = [`auto`].includes(t.overscrollBehaviorX)),
          (u = [`auto`].includes(t.overscrollBehaviorY)),
          (i.hasOverflowX = a),
          (i.hasOverflowY = o),
          !(a || o))
        )
          return !1;
        ((d = e.scrollWidth),
          (f = e.scrollHeight),
          (p = e.clientWidth),
          (m = e.clientHeight),
          (s = d > p),
          (c = f > m),
          (i.isScrollableX = s),
          (i.isScrollableY = c),
          (i.scrollWidth = d),
          (i.scrollHeight = f),
          (i.clientWidth = p),
          (i.clientHeight = m),
          (i.hasOverscrollBehaviorX = l),
          (i.hasOverscrollBehaviorY = u));
      } else
        ((s = i.isScrollableX),
          (c = i.isScrollableY),
          (a = i.hasOverflowX),
          (o = i.hasOverflowY),
          (d = i.scrollWidth),
          (f = i.scrollHeight),
          (p = i.clientWidth),
          (m = i.clientHeight),
          (l = i.hasOverscrollBehaviorX),
          (u = i.hasOverscrollBehaviorY));
      if (!((a && s) || (o && c))) return !1;
      let h = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`,
        g,
        _,
        v,
        y,
        b,
        x;
      if (h === `horizontal`)
        ((g = Math.round(e.scrollLeft)), (_ = d - p), (v = t), (y = a), (b = s), (x = l));
      else if (h === `vertical`)
        ((g = Math.round(e.scrollTop)), (_ = f - m), (v = n), (y = o), (b = c), (x = u));
      else return !1;
      return (!x && (g >= _ || g <= 0)) || ((v > 0 ? g < _ : g > 0) && y && b);
    }
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
      return this.options.naiveDimensions
        ? this.isHorizontal
          ? this.rootElement.scrollWidth - this.rootElement.clientWidth
          : this.rootElement.scrollHeight - this.rootElement.clientHeight
        : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
    }
    get isHorizontal() {
      return this.options.orientation === `horizontal`;
    }
    get actualScroll() {
      let e = this.options.wrapper;
      return this.isHorizontal ? (e.scrollX ?? e.scrollLeft) : (e.scrollY ?? e.scrollTop);
    }
    get scroll() {
      return this.options.infinite ? O(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
      return this._isScrolling;
    }
    set isScrolling(e) {
      this._isScrolling !== e && ((this._isScrolling = e), this.updateClassName());
    }
    get isStopped() {
      return this._isStopped;
    }
    set isStopped(e) {
      this._isStopped !== e && ((this._isStopped = e), this.updateClassName());
    }
    get isLocked() {
      return this._isLocked;
    }
    set isLocked(e) {
      this._isLocked !== e && ((this._isLocked = e), this.updateClassName());
    }
    get isSmooth() {
      return this.isScrolling === `smooth`;
    }
    get prefersReducedMotion() {
      return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches;
    }
    get className() {
      let e = `lenis`;
      return (
        this.options.autoToggle && (e += ` lenis-autoToggle`),
        this.isStopped && (e += ` lenis-stopped`),
        this.isLocked && (e += ` lenis-locked`),
        this.isScrolling && (e += ` lenis-scrolling`),
        this.isScrolling === `smooth` && (e += ` lenis-smooth`),
        e
      );
    }
    updateClassName() {
      (this.cleanUpClassName(),
        this.className.split(` `).forEach((e) => {
          this.rootElement.classList.add(e);
        }));
    }
    cleanUpClassName() {
      for (let e of Array.from(this.rootElement.classList))
        (e === `lenis` || e.startsWith(`lenis-`)) && this.rootElement.classList.remove(e);
    }
  };
function ie(e) {
  if (e === void 0)
    throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);
  return e;
}
function ae(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t));
}
var F = { autoSleep: 120, force3D: `auto`, nullTargetWarn: 1, units: { lineHeight: `` } },
  I = { duration: 0.5, overwrite: !1, delay: 0 },
  L,
  oe,
  R,
  se = 1e8,
  z = 1 / se,
  ce = Math.PI * 2,
  le = ce / 4,
  B = 0,
  ue = Math.sqrt,
  de = Math.cos,
  fe = Math.sin,
  pe = function (e) {
    return typeof e == `string`;
  },
  V = function (e) {
    return typeof e == `function`;
  },
  me = function (e) {
    return typeof e == `number`;
  },
  he = function (e) {
    return e === void 0;
  },
  ge = function (e) {
    return typeof e == `object`;
  },
  _e = function (e) {
    return e !== !1;
  },
  H = function () {
    return typeof window < `u`;
  },
  ve = function (e) {
    return V(e) || pe(e);
  },
  ye = (typeof ArrayBuffer == `function` && ArrayBuffer.isView) || function () {},
  be = Array.isArray,
  xe = /random\([^)]+\)/g,
  Se = /,\s*/g,
  Ce = /(?:-?\.?\d|\.)+/gi,
  we = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Te = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Ee = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  De = /[+-]=-?[.\d]+/,
  Oe = /[^,'"\[\]\s]+/gi,
  ke = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  U,
  Ae,
  je,
  Me,
  Ne = {},
  Pe = {},
  Fe,
  Ie = function (e) {
    return (Pe = mt(e, Ne)) && Nr;
  },
  Le = function (e, t) {
    return console.warn(
      `Invalid property`,
      e,
      `set to`,
      t,
      `Missing plugin? gsap.registerPlugin()`,
    );
  },
  Re = function (e, t) {
    return !t && console.warn(e);
  },
  ze = function (e, t) {
    return (e && (Ne[e] = t) && Pe && (Pe[e] = t)) || Ne;
  },
  Be = function () {
    return 0;
  },
  Ve = { suppressEvents: !0, isStart: !0, kill: !1 },
  He = { suppressEvents: !0, kill: !1 },
  Ue = { suppressEvents: !0 },
  We = {},
  Ge = [],
  Ke = {},
  qe,
  Je = {},
  Ye = {},
  Xe = 30,
  Ze = [],
  Qe = ``,
  $e = function (e) {
    var t = e[0],
      n,
      r;
    if ((ge(t) || V(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
      for (r = Ze.length; r-- && !Ze[r].targetTest(t););
      n = Ze[r];
    }
    for (r = e.length; r--;)
      (e[r] && (e[r]._gsap || (e[r]._gsap = new Un(e[r], n)))) || e.splice(r, 1);
    return e;
  },
  et = function (e) {
    return e._gsap || $e(Zt(e))[0]._gsap;
  },
  tt = function (e, t, n) {
    return (n = e[t]) && V(n) ? e[t]() : (he(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  nt = function (e, t) {
    return (e = e.split(`,`)).forEach(t) || e;
  },
  rt = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  it = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  at = function (e, t) {
    var n = t.charAt(0),
      r = parseFloat(t.substr(2));
    return ((e = parseFloat(e)), n === `+` ? e + r : n === `-` ? e - r : n === `*` ? e * r : e / r);
  },
  ot = function (e, t) {
    for (var n = t.length, r = 0; e.indexOf(t[r]) < 0 && ++r < n;);
    return r < n;
  },
  st = function () {
    var e = Ge.length,
      t = Ge.slice(0),
      n,
      r;
    for (Ke = {}, Ge.length = 0, n = 0; n < e; n++)
      ((r = t[n]), r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0));
  },
  ct = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  lt = function (e, t, n, r) {
    (Ge.length && !oe && st(),
      e.render(t, n, r || !!(oe && t < 0 && ct(e))),
      Ge.length && !oe && st());
  },
  ut = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + ``).match(Oe).length < 2 ? t : pe(e) ? e.trim() : e;
  },
  dt = function (e) {
    return e;
  },
  ft = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  pt = function (e) {
    return function (t, n) {
      for (var r in n) r in t || (r === `duration` && e) || r === `ease` || (t[r] = n[r]);
    };
  },
  mt = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  ht = function e(t, n) {
    for (var r in n)
      r !== `__proto__` &&
        r !== `constructor` &&
        r !== `prototype` &&
        (t[r] = ge(n[r]) ? e(t[r] || (t[r] = {}), n[r]) : n[r]);
    return t;
  },
  gt = function (e, t) {
    var n = {},
      r;
    for (r in e) r in t || (n[r] = e[r]);
    return n;
  },
  _t = function (e) {
    var t = e.parent || U,
      n = e.keyframes ? pt(be(e.keyframes)) : ft;
    if (_e(e.inherit)) for (; t;) (n(e, t.vars.defaults), (t = t.parent || t._dp));
    return e;
  },
  vt = function (e, t) {
    for (var n = e.length, r = n === t.length; r && n-- && e[n] === t[n];);
    return n < 0;
  },
  yt = function (e, t, n, r, i) {
    (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
    var a = e[r],
      o;
    if (i) for (o = t[i]; a && a[i] > o;) a = a._prev;
    return (
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[n]), (e[n] = t)),
      t._next ? (t._next._prev = t) : (e[r] = t),
      (t._prev = a),
      (t.parent = t._dp = e),
      t
    );
  },
  bt = function (e, t, n, r) {
    (n === void 0 && (n = `_first`), r === void 0 && (r = `_last`));
    var i = t._prev,
      a = t._next;
    (i ? (i._next = a) : e[n] === t && (e[n] = a),
      a ? (a._prev = i) : e[r] === t && (e[r] = i),
      (t._next = t._prev = t.parent = null));
  },
  xt = function (e, t) {
    (e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
      (e._act = 0));
  },
  St = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n;) ((n._dirty = 1), (n = n.parent));
    return e;
  },
  Ct = function (e) {
    for (var t = e.parent; t && t.parent;) ((t._dirty = 1), t.totalDuration(), (t = t.parent));
    return e;
  },
  wt = function (e, t, n, r) {
    return (
      e._startAt &&
      (oe
        ? e._startAt.revert(He)
        : (e.vars.immediateRender && !e.vars.autoRevert) || e._startAt.render(t, !0, r))
    );
  },
  Tt = function e(t) {
    return !t || (t._ts && e(t.parent));
  },
  Et = function (e) {
    return e._repeat ? Dt(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  Dt = function (e, t) {
    var n = Math.floor((e = it(e / t)));
    return e && n === e ? n - 1 : n;
  },
  Ot = function (e, t) {
    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
  },
  kt = function (e) {
    return (e._end = it(e._start + (e._tDur / Math.abs(e._ts || e._rts || z) || 0)));
  },
  At = function (e, t) {
    var n = e._dp;
    return (
      n &&
        n.smoothChildTiming &&
        e._ts &&
        ((e._start = it(
          n._time -
            (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts),
        )),
        kt(e),
        n._dirty || St(n, e)),
      e
    );
  },
  jt = function (e, t) {
    var n;
    if (
      ((t._time || (!t._dur && t._initted) || (t._start < e._time && (t._dur || !t.add))) &&
        ((n = Ot(e.rawTime(), t)),
        (!t._dur || Gt(0, t.totalDuration(), n) - t._tTime > z) && t.render(n, !0)),
      St(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (n = e; n._dp;) (n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp));
      e._zTime = -z;
    }
  },
  Mt = function (e, t, n, r) {
    return (
      t.parent && xt(t),
      (t._start = it((me(n) ? n : n || e !== U ? Ht(e, n, t) : e._time) + t._delay)),
      (t._end = it(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0))),
      yt(e, t, `_first`, `_last`, e._sort ? `_start` : 0),
      It(t) || (e._recent = t),
      r || jt(e, t),
      e._ts < 0 && At(e, e._tTime),
      e
    );
  },
  Nt = function (e, t) {
    return (Ne.ScrollTrigger || Le(`scrollTrigger`, t)) && Ne.ScrollTrigger.create(t, e);
  },
  Pt = function (e, t, n, r, i) {
    if ((Qn(e, t, i), !e._initted)) return 1;
    if (
      !n &&
      e._pt &&
      !oe &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      qe !== An.frame
    )
      return (Ge.push(e), (e._lazy = [i, r]), 1);
  },
  Ft = function e(t) {
    var n = t.parent;
    return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n));
  },
  It = function (e) {
    var t = e.data;
    return t === `isFromStart` || t === `isStart`;
  },
  Lt = function (e, t, n, r) {
    var i = e.ratio,
      a =
        t < 0 ||
        (!t &&
          ((!e._start && Ft(e) && !(!e._initted && It(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !It(e))))
          ? 0
          : 1,
      o = e._rDelay,
      s = 0,
      c,
      l,
      u;
    if (
      (o &&
        e._repeat &&
        ((s = Gt(0, e._tDur, t)),
        (l = Dt(s, o)),
        e._yoyo && l & 1 && (a = 1 - a),
        l !== Dt(e._tTime, o) &&
          ((i = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
      a !== i || oe || r || e._zTime === z || (!t && e._zTime))
    ) {
      if (!e._initted && Pt(e, t, r, n, s)) return;
      for (
        u = e._zTime,
          e._zTime = t || (n ? z : 0),
          n ||= t && !u,
          e.ratio = a,
          e._from && (a = 1 - a),
          e._time = 0,
          e._tTime = s,
          c = e._pt;
        c;
      )
        (c.r(a, c.d), (c = c._next));
      (t < 0 && wt(e, t, n, !0),
        e._onUpdate && !n && hn(e, `onUpdate`),
        s && e._repeat && !n && e.parent && hn(e, `onRepeat`),
        (t >= e._tDur || t < 0) &&
          e.ratio === a &&
          (a && xt(e, 1),
          !n && !oe && (hn(e, a ? `onComplete` : `onReverseComplete`, !0), e._prom && e._prom())));
    } else e._zTime ||= t;
  },
  Rt = function (e, t, n) {
    var r;
    if (n > t)
      for (r = e._first; r && r._start <= n;) {
        if (r.data === `isPause` && r._start > t) return r;
        r = r._next;
      }
    else
      for (r = e._last; r && r._start >= n;) {
        if (r.data === `isPause` && r._start < t) return r;
        r = r._prev;
      }
  },
  zt = function (e, t, n, r) {
    var i = e._repeat,
      a = it(t) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !r && (e._time *= a / e._dur),
      (e._dur = a),
      (e._tDur = i ? (i < 0 ? 1e10 : it(a * (i + 1) + e._rDelay * i)) : a),
      o > 0 && !r && At(e, (e._tTime = e._tDur * o)),
      e.parent && kt(e),
      n || St(e.parent, e),
      e
    );
  },
  Bt = function (e) {
    return e instanceof Gn ? St(e) : zt(e, e._dur);
  },
  Vt = { _start: 0, endTime: Be, totalDuration: Be },
  Ht = function e(t, n, r) {
    var i = t.labels,
      a = t._recent || Vt,
      o = t.duration() >= se ? a.endTime(!1) : t._dur,
      s,
      c,
      l;
    return pe(n) && (isNaN(n) || n in i)
      ? ((c = n.charAt(0)),
        (l = n.substr(-1) === `%`),
        (s = n.indexOf(`=`)),
        c === `<` || c === `>`
          ? (s >= 0 && (n = n.replace(/=/, ``)),
            (c === `<` ? a._start : a.endTime(a._repeat >= 0)) +
              (parseFloat(n.substr(1)) || 0) * (l ? (s < 0 ? a : r).totalDuration() / 100 : 1))
          : s < 0
            ? (n in i || (i[n] = o), i[n])
            : ((c = parseFloat(n.charAt(s - 1) + n.substr(s + 1))),
              l && r && (c = (c / 100) * (be(r) ? r[0] : r).totalDuration()),
              s > 1 ? e(t, n.substr(0, s - 1), r) + c : o + c))
      : n == null
        ? o
        : +n;
  },
  Ut = function (e, t, n) {
    var r = me(t[1]),
      i = (r ? 2 : 1) + (e < 2 ? 0 : 1),
      a = t[i],
      o,
      s;
    if ((r && (a.duration = t[1]), (a.parent = n), e)) {
      for (o = a, s = n; s && !(`immediateRender` in o);)
        ((o = s.vars.defaults || {}), (s = _e(s.vars.inherit) && s.parent));
      ((a.immediateRender = _e(o.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = t[i - 1]));
    }
    return new ar(t[0], a, t[i + 1]);
  },
  Wt = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  Gt = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  Kt = function (e, t) {
    return !pe(e) || !(t = ke.exec(e)) ? `` : t[1];
  },
  qt = function (e, t, n) {
    return Wt(n, function (n) {
      return Gt(e, t, n);
    });
  },
  Jt = [].slice,
  Yt = function (e, t) {
    return (
      e &&
      ge(e) &&
      `length` in e &&
      ((!t && !e.length) || (e.length - 1 in e && ge(e[0]))) &&
      !e.nodeType &&
      e !== Ae
    );
  },
  Xt = function (e, t, n) {
    return (
      n === void 0 && (n = []),
      e.forEach(function (e) {
        var r;
        return (pe(e) && !t) || Yt(e, 1) ? (r = n).push.apply(r, Zt(e)) : n.push(e);
      }) || n
    );
  },
  Zt = function (e, t, n) {
    return R && !t && R.selector
      ? R.selector(e)
      : pe(e) && !n && (je || !jn())
        ? Jt.call((t || Me).querySelectorAll(e), 0)
        : be(e)
          ? Xt(e, n)
          : Yt(e)
            ? Jt.call(e, 0)
            : e
              ? [e]
              : [];
  },
  Qt = function (e) {
    return (
      (e = Zt(e)[0] || Re(`Invalid scope`) || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return Zt(
          t,
          n.querySelectorAll ? n : n === e ? Re(`Invalid scope`) || Me.createElement(`div`) : e,
        );
      }
    );
  },
  $t = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  en = function (e) {
    if (V(e)) return e;
    var t = ge(e) ? e : { each: e },
      n = Rn(t.ease),
      r = t.from || 0,
      i = parseFloat(t.base) || 0,
      a = {},
      o = r > 0 && r < 1,
      s = isNaN(r) || o,
      c = t.axis,
      l = r,
      u = r;
    return (
      pe(r)
        ? (l = u = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !o && s && ((l = r[0]), (u = r[1])),
      function (e, o, d) {
        var f = (d || t).length,
          p = a[f],
          m,
          h,
          g,
          _,
          v,
          y,
          b,
          x,
          S;
        if (!p) {
          if (((S = t.grid === `auto` ? 0 : (t.grid || [1, se])[1]), !S)) {
            for (b = -se; b < (b = d[S++].getBoundingClientRect().left) && S < f;);
            S < f && S--;
          }
          for (
            p = a[f] = [],
              m = s ? Math.min(S, f) * l - 0.5 : r % S,
              h = S === se ? 0 : s ? (f * u) / S - 0.5 : (r / S) | 0,
              b = 0,
              x = se,
              y = 0;
            y < f;
            y++
          )
            ((g = (y % S) - m),
              (_ = h - ((y / S) | 0)),
              (p[y] = v = c ? Math.abs(c === `y` ? _ : g) : ue(g * g + _ * _)),
              v > b && (b = v),
              v < x && (x = v));
          (r === `random` && $t(p),
            (p.max = b - x),
            (p.min = x),
            (p.v = f =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (S > f ? f - 1 : c ? (c === `y` ? f / S : S) : Math.max(S, f / S)) ||
                0) * (r === `edges` ? -1 : 1)),
            (p.b = f < 0 ? i - f : i),
            (p.u = Kt(t.amount || t.each) || 0),
            (n = n && f < 0 ? Ln(n) : n));
        }
        return ((f = (p[e] - p.min) / p.max || 0), it(p.b + (n ? n(f) : f) * p.v) + p.u);
      }
    );
  },
  tn = function (e) {
    var t = 10 ** ((e + ``).split(`.`)[1] || ``).length;
    return function (n) {
      var r = it(Math.round(parseFloat(n) / e) * e * t);
      return (r - (r % 1)) / t + (me(n) ? 0 : Kt(n));
    };
  },
  nn = function (e, t) {
    var n = be(e),
      r,
      i;
    return (
      !n &&
        ge(e) &&
        ((r = n = e.radius || se),
        e.values ? ((e = Zt(e.values)), (i = !me(e[0])) && (r *= r)) : (e = tn(e.increment))),
      Wt(
        t,
        n
          ? V(e)
            ? function (t) {
                return ((i = e(t)), Math.abs(i - t) <= r ? i : t);
              }
            : function (t) {
                for (
                  var n = parseFloat(i ? t.x : t),
                    a = parseFloat(i ? t.y : 0),
                    o = se,
                    s = 0,
                    c = e.length,
                    l,
                    u;
                  c--;
                )
                  (i
                    ? ((l = e[c].x - n), (u = e[c].y - a), (l = l * l + u * u))
                    : (l = Math.abs(e[c] - n)),
                    l < o && ((o = l), (s = c)));
                return ((s = !r || o <= r ? e[s] : t), i || s === t || me(t) ? s : s + Kt(t));
              }
          : tn(e),
      )
    );
  },
  rn = function (e, t, n, r) {
    return Wt(be(e) ? !t : n === !0 ? !!(n = 0) : !r, function () {
      return be(e)
        ? e[~~(Math.random() * e.length)]
        : (n ||= 1e-5) &&
            (r = n < 1 ? 10 ** ((n + ``).length - 2) : 1) &&
            Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) * n * r) /
              r;
    });
  },
  an = function () {
    var e = [...arguments];
    return function (t) {
      return e.reduce(function (e, t) {
        return t(e);
      }, t);
    };
  },
  on = function (e, t) {
    return function (n) {
      return e(parseFloat(n)) + (t || Kt(n));
    };
  },
  sn = function (e, t, n) {
    return fn(e, t, 0, 1, n);
  },
  cn = function (e, t, n) {
    return Wt(n, function (n) {
      return e[~~t(n)];
    });
  },
  ln = function e(t, n, r) {
    var i = n - t;
    return be(t)
      ? cn(t, e(0, t.length), n)
      : Wt(r, function (e) {
          return ((i + ((e - t) % i)) % i) + t;
        });
  },
  un = function e(t, n, r) {
    var i = n - t,
      a = i * 2;
    return be(t)
      ? cn(t, e(0, t.length - 1), n)
      : Wt(r, function (e) {
          return ((e = (a + ((e - t) % a)) % a || 0), t + (e > i ? a - e : e));
        });
  },
  dn = function (e) {
    return e.replace(xe, function (e) {
      var t = e.indexOf(`[`) + 1,
        n = e.substring(t || 7, t ? e.indexOf(`]`) : e.length - 1).split(Se);
      return rn(t ? n : +n[0], t ? 0 : +n[1], +n[2] || 1e-5);
    });
  },
  fn = function (e, t, n, r, i) {
    var a = t - e,
      o = r - n;
    return Wt(i, function (t) {
      return n + (((t - e) / a) * o || 0);
    });
  },
  pn = function e(t, n, r, i) {
    var a = isNaN(t + n)
      ? 0
      : function (e) {
          return (1 - e) * t + e * n;
        };
    if (!a) {
      var o = pe(t),
        s = {},
        c,
        l,
        u,
        d,
        f;
      if ((r === !0 && (i = 1) && (r = null), o)) ((t = { p: t }), (n = { p: n }));
      else if (be(t) && !be(n)) {
        for (u = [], d = t.length, f = d - 2, l = 1; l < d; l++) u.push(e(t[l - 1], t[l]));
        (d--,
          (a = function (e) {
            e *= d;
            var t = Math.min(f, ~~e);
            return u[t](e - t);
          }),
          (r = n));
      } else i || (t = mt(be(t) ? [] : {}, t));
      if (!u) {
        for (c in n) qn.call(s, t, c, `get`, n[c]);
        a = function (e) {
          return mr(e, s) || (o ? t.p : t);
        };
      }
    }
    return Wt(r, a);
  },
  mn = function (e, t, n) {
    var r = e.labels,
      i = se,
      a,
      o,
      s;
    for (a in r) ((o = r[a] - t), o < 0 == !!n && o && i > (o = Math.abs(o)) && ((s = a), (i = o)));
    return s;
  },
  hn = function (e, t, n) {
    var r = e.vars,
      i = r[t],
      a = R,
      o = e._ctx,
      s,
      c,
      l;
    if (i)
      return (
        (s = r[t + `Params`]),
        (c = r.callbackScope || e),
        n && Ge.length && st(),
        o && (R = o),
        (l = s ? i.apply(c, s) : i.call(c)),
        (R = a),
        l
      );
  },
  gn = function (e) {
    return (
      xt(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!oe),
      e.progress() < 1 && hn(e, `onInterrupt`),
      e
    );
  },
  _n,
  vn = [],
  yn = function (e) {
    if (e) {
      if (((e = (!e.name && e.default) || e), H() || e.headless)) {
        var t = e.name,
          n = V(e),
          r =
            t && !n && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          i = { init: Be, render: mr, add: qn, kill: gr, modifier: hr, rawVars: 0 },
          a = { targetTest: 0, get: 0, getSetter: ur, aliases: {}, register: 0 };
        if ((jn(), e !== r)) {
          if (Je[t]) return;
          (ft(r, ft(gt(e, i), a)),
            mt(r.prototype, mt(i, gt(e, a))),
            (Je[(r.prop = t)] = r),
            e.targetTest && (Ze.push(r), (We[t] = 1)),
            (t = (t === `css` ? `CSS` : t.charAt(0).toUpperCase() + t.substr(1)) + `Plugin`));
        }
        (ze(t, r), e.register && e.register(Nr, r, yr));
      } else vn.push(e);
    }
  },
  bn = 255,
  xn = {
    aqua: [0, bn, bn],
    lime: [0, bn, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, bn],
    navy: [0, 0, 128],
    white: [bn, bn, bn],
    olive: [128, 128, 0],
    yellow: [bn, bn, 0],
    orange: [bn, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [bn, 0, 0],
    pink: [bn, 192, 203],
    cyan: [0, bn, bn],
    transparent: [bn, bn, bn, 0],
  },
  Sn = function (e, t, n) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (n - t) * e * 6
        : e < 0.5
          ? n
          : e * 3 < 2
            ? t + (n - t) * (2 / 3 - e) * 6
            : t) *
        bn +
        0.5) |
        0
    );
  },
  Cn = function (e, t, n) {
    var r = e ? (me(e) ? [e >> 16, (e >> 8) & bn, e & bn] : 0) : xn.black,
      i,
      a,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p;
    if (!r) {
      if ((e.substr(-1) === `,` && (e = e.substr(0, e.length - 1)), xn[e])) r = xn[e];
      else if (e.charAt(0) === `#`) {
        if (
          (e.length < 6 &&
            ((i = e.charAt(1)),
            (a = e.charAt(2)),
            (o = e.charAt(3)),
            (e = `#` + i + i + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : ``))),
          e.length === 9)
        )
          return (
            (r = parseInt(e.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & bn, r & bn, parseInt(e.substr(7), 16) / 255]
          );
        ((e = parseInt(e.substr(1), 16)), (r = [e >> 16, (e >> 8) & bn, e & bn]));
      } else if (e.substr(0, 3) === `hsl`) {
        if (((r = p = e.match(Ce)), !t))
          ((s = (r[0] % 360) / 360),
            (c = r[1] / 100),
            (l = r[2] / 100),
            (a = l <= 0.5 ? l * (c + 1) : l + c - l * c),
            (i = l * 2 - a),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Sn(s + 1 / 3, i, a)),
            (r[1] = Sn(s, i, a)),
            (r[2] = Sn(s - 1 / 3, i, a)));
        else if (~e.indexOf(`=`)) return ((r = e.match(we)), n && r.length < 4 && (r[3] = 1), r);
      } else r = e.match(Ce) || xn.transparent;
      r = r.map(Number);
    }
    return (
      t &&
        !p &&
        ((i = r[0] / bn),
        (a = r[1] / bn),
        (o = r[2] / bn),
        (u = Math.max(i, a, o)),
        (d = Math.min(i, a, o)),
        (l = (u + d) / 2),
        u === d
          ? (s = c = 0)
          : ((f = u - d),
            (c = l > 0.5 ? f / (2 - u - d) : f / (u + d)),
            (s =
              u === i
                ? (a - o) / f + (a < o ? 6 : 0)
                : u === a
                  ? (o - i) / f + 2
                  : (i - a) / f + 4),
            (s *= 60)),
        (r[0] = ~~(s + 0.5)),
        (r[1] = ~~(c * 100 + 0.5)),
        (r[2] = ~~(l * 100 + 0.5))),
      n && r.length < 4 && (r[3] = 1),
      r
    );
  },
  wn = function (e) {
    var t = [],
      n = [],
      r = -1;
    return (
      e.split(En).forEach(function (e) {
        var i = e.match(Te) || [];
        (t.push.apply(t, i), n.push((r += i.length + 1)));
      }),
      (t.c = n),
      t
    );
  },
  Tn = function (e, t, n) {
    var r = ``,
      i = (e + r).match(En),
      a = t ? `hsla(` : `rgba(`,
      o = 0,
      s,
      c,
      l,
      u;
    if (!i) return e;
    if (
      ((i = i.map(function (e) {
        return (
          (e = Cn(e, t, 1)) &&
          a + (t ? e[0] + `,` + e[1] + `%,` + e[2] + `%,` + e[3] : e.join(`,`)) + `)`
        );
      })),
      n && ((l = wn(e)), (s = n.c), s.join(r) !== l.c.join(r)))
    )
      for (c = e.replace(En, `1`).split(Te), u = c.length - 1; o < u; o++)
        r +=
          c[o] +
          (~s.indexOf(o) ? i.shift() || a + `0,0,0,0)` : (l.length ? l : i.length ? i : n).shift());
    if (!c) for (c = e.split(En), u = c.length - 1; o < u; o++) r += c[o] + i[o];
    return r + c[u];
  },
  En = (function () {
    var e = `(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,
      t;
    for (t in xn) e += `|` + t + `\\b`;
    return RegExp(e + `)`, `gi`);
  })(),
  Dn = /hsl[a]?\(/,
  On = function (e) {
    var t = e.join(` `),
      n;
    if (((En.lastIndex = 0), En.test(t)))
      return ((n = Dn.test(t)), (e[1] = Tn(e[1], n)), (e[0] = Tn(e[0], n, wn(e[1]))), !0);
  },
  kn,
  An = (function () {
    var e = Date.now,
      t = 500,
      n = 33,
      r = e(),
      i = r,
      a = 1e3 / 240,
      o = a,
      s = [],
      c,
      l,
      u,
      d,
      f,
      p,
      m = function u(m) {
        var h = e() - i,
          g = m === !0,
          _,
          v,
          y,
          b;
        if (
          ((h > t || h < 0) && (r += h - n),
          (i += h),
          (y = i - r),
          (_ = y - o),
          (_ > 0 || g) &&
            ((b = ++d.frame),
            (f = y - d.time * 1e3),
            (d.time = y /= 1e3),
            (o += _ + (_ >= a ? 4 : a - _)),
            (v = 1)),
          g || (c = l(u)),
          v)
        )
          for (p = 0; p < s.length; p++) s[p](y, f, b, m);
      };
    return (
      (d = {
        time: 0,
        frame: 0,
        tick: function () {
          m(!0);
        },
        deltaRatio: function (e) {
          return f / (1e3 / (e || 60));
        },
        wake: function () {
          Fe &&
            (!je &&
              H() &&
              ((Ae = je = window),
              (Me = Ae.document || {}),
              (Ne.gsap = Nr),
              (Ae.gsapVersions || (Ae.gsapVersions = [])).push(Nr.version),
              Ie(Pe || Ae.GreenSockGlobals || (!Ae.gsap && Ae) || {}),
              vn.forEach(yn)),
            (u = typeof requestAnimationFrame < `u` && requestAnimationFrame),
            c && d.sleep(),
            (l =
              u ||
              function (e) {
                return setTimeout(e, (o - d.time * 1e3 + 1) | 0);
              }),
            (kn = 1),
            m(2));
        },
        sleep: function () {
          ((u ? cancelAnimationFrame : clearTimeout)(c), (kn = 0), (l = Be));
        },
        lagSmoothing: function (e, r) {
          ((t = e || 1 / 0), (n = Math.min(r || 33, t)));
        },
        fps: function (e) {
          ((a = 1e3 / (e || 240)), (o = d.time * 1e3 + a));
        },
        add: function (e, t, n) {
          var r = t
            ? function (t, n, i, a) {
                (e(t, n, i, a), d.remove(r));
              }
            : e;
          return (d.remove(e), s[n ? `unshift` : `push`](r), jn(), r);
        },
        remove: function (e, t) {
          ~(t = s.indexOf(e)) && s.splice(t, 1) && p >= t && p--;
        },
        _listeners: s,
      }),
      d
    );
  })(),
  jn = function () {
    return !kn && An.wake();
  },
  W = {},
  Mn = /^[\d.\-M][\d.\-,\s]/,
  Nn = /["']/g,
  Pn = function (e) {
    for (
      var t = {}, n = e.substr(1, e.length - 3).split(`:`), r = n[0], i = 1, a = n.length, o, s, c;
      i < a;
      i++
    )
      ((s = n[i]),
        (o = i === a - 1 ? s.length : s.lastIndexOf(`,`)),
        (c = s.substr(0, o)),
        (t[r] = isNaN(c) ? c.replace(Nn, ``).trim() : +c),
        (r = s.substr(o + 1).trim()));
    return t;
  },
  Fn = function (e) {
    var t = e.indexOf(`(`) + 1,
      n = e.indexOf(`)`),
      r = e.indexOf(`(`, t);
    return e.substring(t, ~r && r < n ? e.indexOf(`)`, n + 1) : n);
  },
  In = function (e) {
    var t = (e + ``).split(`(`),
      n = W[t[0]];
    return n && t.length > 1 && n.config
      ? n.config.apply(null, ~e.indexOf(`{`) ? [Pn(t[1])] : Fn(e).split(`,`).map(ut))
      : W._CE && Mn.test(e)
        ? W._CE(``, e)
        : n;
  },
  Ln = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  Rn = function (e, t) {
    return (e && (V(e) ? e : W[e] || In(e))) || t;
  },
  zn = function (e, t, n, r) {
    (n === void 0 &&
      (n = function (e) {
        return 1 - t(1 - e);
      }),
      r === void 0 &&
        (r = function (e) {
          return e < 0.5 ? t(e * 2) / 2 : 1 - t((1 - e) * 2) / 2;
        }));
    var i = { easeIn: t, easeOut: n, easeInOut: r },
      a;
    return (
      nt(e, function (e) {
        for (var t in ((W[e] = Ne[e] = i), (W[(a = e.toLowerCase())] = n), i))
          W[a + (t === `easeIn` ? `.in` : t === `easeOut` ? `.out` : `.inOut`)] = W[e + `.` + t] =
            i[t];
      }),
      i
    );
  },
  Bn = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  Vn = function e(t, n, r) {
    var i = n >= 1 ? n : 1,
      a = (r || (t ? 0.3 : 0.45)) / (n < 1 ? n : 1),
      o = (a / ce) * (Math.asin(1 / i) || 0),
      s = function (e) {
        return e === 1 ? 1 : i * 2 ** (-10 * e) * fe((e - o) * a) + 1;
      },
      c =
        t === `out`
          ? s
          : t === `in`
            ? function (e) {
                return 1 - s(1 - e);
              }
            : Bn(s);
    return (
      (a = ce / a),
      (c.config = function (n, r) {
        return e(t, n, r);
      }),
      c
    );
  },
  Hn = function e(t, n) {
    n === void 0 && (n = 1.70158);
    var r = function (e) {
        return e ? --e * e * ((n + 1) * e + n) + 1 : 0;
      },
      i =
        t === `out`
          ? r
          : t === `in`
            ? function (e) {
                return 1 - r(1 - e);
              }
            : Bn(r);
    return (
      (i.config = function (n) {
        return e(t, n);
      }),
      i
    );
  };
(nt(`Linear,Quad,Cubic,Quart,Quint,Strong`, function (e, t) {
  var n = t < 5 ? t + 1 : t;
  zn(
    e + `,Power` + (n - 1),
    t
      ? function (e) {
          return e ** +n;
        }
      : function (e) {
          return e;
        },
    function (e) {
      return 1 - (1 - e) ** n;
    },
    function (e) {
      return e < 0.5 ? (e * 2) ** n / 2 : 1 - ((1 - e) * 2) ** n / 2;
    },
  );
}),
  (W.Linear.easeNone = W.none = W.Linear.easeIn),
  zn(`Elastic`, Vn(`in`), Vn(`out`), Vn()),
  (function (e, t) {
    var n = 1 / t,
      r = 2 * n,
      i = 2.5 * n,
      a = function (a) {
        return a < n
          ? e * a * a
          : a < r
            ? e * (a - 1.5 / t) ** 2 + 0.75
            : a < i
              ? e * (a -= 2.25 / t) * a + 0.9375
              : e * (a - 2.625 / t) ** 2 + 0.984375;
      };
    zn(
      `Bounce`,
      function (e) {
        return 1 - a(1 - e);
      },
      a,
    );
  })(7.5625, 2.75),
  zn(`Expo`, function (e) {
    return 2 ** (10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e);
  }),
  zn(`Circ`, function (e) {
    return -(ue(1 - e * e) - 1);
  }),
  zn(`Sine`, function (e) {
    return e === 1 ? 1 : -de(e * le) + 1;
  }),
  zn(`Back`, Hn(`in`), Hn(`out`), Hn()),
  (W.SteppedEase =
    W.steps =
    Ne.SteppedEase =
      {
        config: function (e, t) {
          e === void 0 && (e = 1);
          var n = 1 / e,
            r = e + +!t,
            i = +!!t,
            a = 1 - z;
          return function (e) {
            return (((r * Gt(0, a, e)) | 0) + i) * n;
          };
        },
      }),
  (I.ease = W[`quad.out`]),
  nt(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`, function (e) {
    return (Qe += e + `,` + e + `Params,`);
  }));
var Un = function (e, t) {
    ((this.id = B++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : tt),
      (this.set = t ? t.getSetter : ur));
  },
  Wn = (function () {
    function e(e) {
      ((this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0), (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        zt(this, +e.duration, 1, 1),
        (this.data = e.data),
        R && ((this._ctx = R), R.data.push(this)),
        kn || An.wake());
    }
    var t = e.prototype;
    return (
      (t.delay = function (e) {
        return e || e === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + e - this._delay),
            (this._delay = e),
            this)
          : this._delay;
      }),
      (t.duration = function (e) {
        return arguments.length
          ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e)
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (e) {
        return arguments.length
          ? ((this._dirty = 0),
            zt(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1)))
          : this._tDur;
      }),
      (t.totalTime = function (e, t) {
        if ((jn(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (At(this, e), !n._dp || n.parent || jt(n, this); n && n.parent;)
            (n.parent._time !==
              n._start +
                (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && e < this._tDur) || (this._ts < 0 && e > 0) || (!this._tDur && !e)) &&
            Mt(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== e ||
            (!this._dur && !t) ||
            (this._initted && Math.abs(this._zTime) === z) ||
            (!this._initted && this._dur && e) ||
            (!e && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = e), lt(this, e, t)),
          this
        );
      }),
      (t.time = function (e, t) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), e + Et(this)) % (this._dur + this._rDelay) ||
                (e ? this._dur : 0),
              t,
            )
          : this._time;
      }),
      (t.totalProgress = function (e, t) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * e, t)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (t.progress = function (e, t) {
        return arguments.length
          ? this.totalTime(
              this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + Et(this),
              t,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : +(this.rawTime() > 0);
      }),
      (t.iteration = function (e, t) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (e - 1) * n, t)
          : this._repeat
            ? Dt(this._tTime, n) + 1
            : 1;
      }),
      (t.timeScale = function (e, t) {
        if (!arguments.length) return this._rts === -z ? 0 : this._rts;
        if (this._rts === e) return this;
        var n = this.parent && this._ts ? Ot(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +e || 0),
          (this._ts = this._ps || e === -z ? 0 : this._rts),
          this.totalTime(Gt(-Math.abs(this._delay), this.totalDuration(), n), t !== !1),
          kt(this),
          Ct(this)
        );
      }),
      (t.paused = function (e) {
        return arguments.length
          ? (this._ps !== e &&
              ((this._ps = e),
              e
                ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (jn(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 && Math.abs(this._zTime) !== z && (this._tTime -= z),
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (e) {
        if (arguments.length) {
          this._start = it(e);
          var t = this.parent || this._dp;
          return (t && (t._sort || !this.parent) && Mt(t, this, this._start - this._delay), this);
        }
        return this._start;
      }),
      (t.endTime = function (e) {
        return (
          this._start + (_e(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (e) {
        var t = this.parent || this._dp;
        return t
          ? e && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? Ot(t.rawTime(e), this)
              : this._tTime
          : this._tTime;
      }),
      (t.revert = function (e) {
        e === void 0 && (e = Ue);
        var t = oe;
        return (
          (oe = e),
          ct(this) &&
            (this.timeline && this.timeline.revert(e), this.totalTime(-0.01, e.suppressEvents)),
          this.data !== `nested` && e.kill !== !1 && this.kill(),
          (oe = t),
          this
        );
      }),
      (t.globalTime = function (e) {
        for (var t = this, n = arguments.length ? e : t.rawTime(); t;)
          ((n = t._start + n / (Math.abs(t._ts) || 1)), (t = t._dp));
        return !this.parent && this._sat ? this._sat.globalTime(e) : n;
      }),
      (t.repeat = function (e) {
        return arguments.length
          ? ((this._repeat = e === 1 / 0 ? -2 : e), Bt(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (t.repeatDelay = function (e) {
        if (arguments.length) {
          var t = this._time;
          return ((this._rDelay = e), Bt(this), t ? this.time(t) : this);
        }
        return this._rDelay;
      }),
      (t.yoyo = function (e) {
        return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
      }),
      (t.seek = function (e, t) {
        return this.totalTime(Ht(this, e), _e(t));
      }),
      (t.restart = function (e, t) {
        return (
          this.play().totalTime(e ? -this._delay : 0, _e(t)),
          this._dur || (this._zTime = -z),
          this
        );
      }),
      (t.play = function (e, t) {
        return (e != null && this.seek(e, t), this.reversed(!1).paused(!1));
      }),
      (t.reverse = function (e, t) {
        return (e != null && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1));
      }),
      (t.pause = function (e, t) {
        return (e != null && this.seek(e, t), this.paused(!0));
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (e) {
        return arguments.length
          ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -z : 0)), this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -z), this);
      }),
      (t.isActive = function () {
        var e = this.parent || this._dp,
          t = this._start,
          n;
        return !!(
          !e ||
          (this._ts &&
            this._initted &&
            e.isActive() &&
            (n = e.rawTime(!0)) >= t &&
            n < this.endTime(!0) - z)
        );
      }),
      (t.eventCallback = function (e, t, n) {
        var r = this.vars;
        return arguments.length > 1
          ? (t
              ? ((r[e] = t), n && (r[e + `Params`] = n), e === `onUpdate` && (this._onUpdate = t))
              : delete r[e],
            this)
          : r[e];
      }),
      (t.then = function (e) {
        var t = this,
          n = t._prom;
        return new Promise(function (r) {
          var i = V(e) ? e : dt,
            a = function () {
              var e = t.then;
              ((t.then = null),
                n && n(),
                V(i) && (i = i(t)) && (i.then || i === t) && (t.then = e),
                r(i),
                (t.then = e));
            };
          (t._initted && t.totalProgress() === 1 && t._ts >= 0) || (!t._tTime && t._ts < 0)
            ? a()
            : (t._prom = a);
        });
      }),
      (t.kill = function () {
        gn(this);
      }),
      e
    );
  })();
ft(Wn.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -z,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Gn = (function (e) {
  ae(t, e);
  function t(t, n) {
    var r;
    return (
      t === void 0 && (t = {}),
      (r = e.call(this, t) || this),
      (r.labels = {}),
      (r.smoothChildTiming = !!t.smoothChildTiming),
      (r.autoRemoveChildren = !!t.autoRemoveChildren),
      (r._sort = _e(t.sortChildren)),
      U && Mt(t.parent || U, ie(r), n),
      t.reversed && r.reverse(),
      t.paused && r.paused(!0),
      t.scrollTrigger && Nt(ie(r), t.scrollTrigger),
      r
    );
  }
  var n = t.prototype;
  return (
    (n.to = function (e, t, n) {
      return (Ut(0, arguments, this), this);
    }),
    (n.from = function (e, t, n) {
      return (Ut(1, arguments, this), this);
    }),
    (n.fromTo = function (e, t, n, r) {
      return (Ut(2, arguments, this), this);
    }),
    (n.set = function (e, t, n) {
      return (
        (t.duration = 0),
        (t.parent = this),
        _t(t).repeatDelay || (t.repeat = 0),
        (t.immediateRender = !!t.immediateRender),
        new ar(e, t, Ht(this, n), 1),
        this
      );
    }),
    (n.call = function (e, t, n) {
      return Mt(this, ar.delayedCall(0, e, t), n);
    }),
    (n.staggerTo = function (e, t, n, r, i, a, o) {
      return (
        (n.duration = t),
        (n.stagger = n.stagger || r),
        (n.onComplete = a),
        (n.onCompleteParams = o),
        (n.parent = this),
        new ar(e, n, Ht(this, i)),
        this
      );
    }),
    (n.staggerFrom = function (e, t, n, r, i, a, o) {
      return (
        (n.runBackwards = 1),
        (_t(n).immediateRender = _e(n.immediateRender)),
        this.staggerTo(e, t, n, r, i, a, o)
      );
    }),
    (n.staggerFromTo = function (e, t, n, r, i, a, o, s) {
      return (
        (r.startAt = n),
        (_t(r).immediateRender = _e(r.immediateRender)),
        this.staggerTo(e, t, r, i, a, o, s)
      );
    }),
    (n.render = function (e, t, n) {
      var r = this._time,
        i = this._dirty ? this.totalDuration() : this._tDur,
        a = this._dur,
        o = e <= 0 ? 0 : it(e),
        s = this._zTime < 0 != e < 0 && (this._initted || !a),
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h,
        g,
        _,
        v,
        y;
      if ((this !== U && o > i && e >= 0 && (o = i), o !== this._tTime || n || s)) {
        if (
          (r !== this._time && a && ((o += this._time - r), (e += this._time - r)),
          (c = o),
          (g = this._start),
          (h = this._ts),
          (p = !h),
          s && (a || (r = this._zTime), (e || !t) && (this._zTime = e)),
          this._repeat)
        ) {
          if (((v = this._yoyo), (f = a + this._rDelay), this._repeat < -1 && e < 0))
            return this.totalTime(f * 100 + e, t, n);
          if (
            ((c = it(o % f)),
            o === i
              ? ((d = this._repeat), (c = a))
              : ((_ = it(o / f)), (d = ~~_), d && d === _ && ((c = a), d--), c > a && (c = a)),
            (_ = Dt(this._tTime, f)),
            !r && this._tTime && _ !== d && this._tTime - _ * f - this._dur <= 0 && (_ = d),
            v && d & 1 && ((c = a - c), (y = 1)),
            d !== _ && !this._lock)
          ) {
            var b = v && _ & 1,
              x = b === (v && d & 1);
            if (
              (d < _ && (b = !b),
              (r = b ? 0 : o % a ? a : o),
              (this._lock = 1),
              (this.render(r || (y ? 0 : it(d * f)), t, !a)._lock = 0),
              (this._tTime = o),
              !t && this.parent && hn(this, `onRepeat`),
              this.vars.repeatRefresh && !y && ((this.invalidate()._lock = 1), (_ = d)),
              (r && r !== this._time) ||
                p !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act) ||
                ((a = this._dur),
                (i = this._tDur),
                x &&
                  ((this._lock = 2),
                  (r = b ? a : -1e-4),
                  this.render(r, !0),
                  this.vars.repeatRefresh && !y && this.invalidate()),
                (this._lock = 0),
                !this._ts && !p))
            )
              return this;
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((m = Rt(this, it(r), it(c))), m && (o -= c - (c = m._start))),
          (this._tTime = o),
          (this._time = c),
          (this._act = !!h),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = e),
            (r = 0)),
          !r && o && a && !t && !_ && (hn(this, `onStart`), this._tTime !== o))
        )
          return this;
        if (c >= r && e >= 0)
          for (l = this._first; l;) {
            if (((u = l._next), (l._act || c >= l._start) && l._ts && m !== l)) {
              if (l.parent !== this) return this.render(e, t, n);
              if (
                (l.render(
                  l._ts > 0
                    ? (c - l._start) * l._ts
                    : (l._dirty ? l.totalDuration() : l._tDur) + (c - l._start) * l._ts,
                  t,
                  n,
                ),
                c !== this._time || (!this._ts && !p))
              ) {
                ((m = 0), u && (o += this._zTime = -z));
                break;
              }
            }
            l = u;
          }
        else {
          l = this._last;
          for (var S = e < 0 ? e : c; l;) {
            if (((u = l._prev), (l._act || S <= l._end) && l._ts && m !== l)) {
              if (l.parent !== this) return this.render(e, t, n);
              if (
                (l.render(
                  l._ts > 0
                    ? (S - l._start) * l._ts
                    : (l._dirty ? l.totalDuration() : l._tDur) + (S - l._start) * l._ts,
                  t,
                  n || (oe && ct(l)),
                ),
                c !== this._time || (!this._ts && !p))
              ) {
                ((m = 0), u && (o += this._zTime = S ? -z : z));
                break;
              }
            }
            l = u;
          }
        }
        if (
          m &&
          !t &&
          (this.pause(), (m.render(c >= r ? 0 : -z)._zTime = c >= r ? 1 : -1), this._ts)
        )
          return ((this._start = g), kt(this), this.render(e, t, n));
        (this._onUpdate && !t && hn(this, `onUpdate`, !0),
          ((o === i && this._tTime >= this.totalDuration()) || (!o && r)) &&
            (g === this._start || Math.abs(h) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((e || !a) && ((o === i && this._ts > 0) || (!o && this._ts < 0)) && xt(this, 1),
              !t &&
                !(e < 0 && !r) &&
                (o || r || !i) &&
                (hn(this, o === i && e >= 0 ? `onComplete` : `onReverseComplete`, !0),
                this._prom && !(o < i && this.timeScale() > 0) && this._prom()))));
      }
      return this;
    }),
    (n.add = function (e, t) {
      var n = this;
      if ((me(t) || (t = Ht(this, t, e)), !(e instanceof Wn))) {
        if (be(e))
          return (
            e.forEach(function (e) {
              return n.add(e, t);
            }),
            this
          );
        if (pe(e)) return this.addLabel(e, t);
        if (V(e)) e = ar.delayedCall(0, e);
        else return this;
      }
      return this === e ? this : Mt(this, e, t);
    }),
    (n.getChildren = function (e, t, n, r) {
      (e === void 0 && (e = !0),
        t === void 0 && (t = !0),
        n === void 0 && (n = !0),
        r === void 0 && (r = -se));
      for (var i = [], a = this._first; a;)
        (a._start >= r &&
          (a instanceof ar
            ? t && i.push(a)
            : (n && i.push(a), e && i.push.apply(i, a.getChildren(!0, t, n)))),
          (a = a._next));
      return i;
    }),
    (n.getById = function (e) {
      for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
        if (t[n].vars.id === e) return t[n];
    }),
    (n.remove = function (e) {
      return pe(e)
        ? this.removeLabel(e)
        : V(e)
          ? this.killTweensOf(e)
          : (e.parent === this && bt(this, e),
            e === this._recent && (this._recent = this._last),
            St(this));
    }),
    (n.totalTime = function (t, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = it(
              An.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts),
            )),
          e.prototype.totalTime.call(this, t, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (n.addLabel = function (e, t) {
      return ((this.labels[e] = Ht(this, t)), this);
    }),
    (n.removeLabel = function (e) {
      return (delete this.labels[e], this);
    }),
    (n.addPause = function (e, t, n) {
      var r = ar.delayedCall(0, t || Be, n);
      return ((r.data = `isPause`), (this._hasPause = 1), Mt(this, r, Ht(this, e)));
    }),
    (n.removePause = function (e) {
      var t = this._first;
      for (e = Ht(this, e); t;) (t._start === e && t.data === `isPause` && xt(t), (t = t._next));
    }),
    (n.killTweensOf = function (e, t, n) {
      for (var r = this.getTweensOf(e, n), i = r.length; i--;) Xn !== r[i] && r[i].kill(e, t);
      return this;
    }),
    (n.getTweensOf = function (e, t) {
      for (var n = [], r = Zt(e), i = this._first, a = me(t), o; i;)
        (i instanceof ar
          ? ot(i._targets, r) &&
            (a
              ? (!Xn || (i._initted && i._ts)) &&
                i.globalTime(0) <= t &&
                i.globalTime(i.totalDuration()) > t
              : !t || i.isActive()) &&
            n.push(i)
          : (o = i.getTweensOf(r, t)).length && n.push.apply(n, o),
          (i = i._next));
      return n;
    }),
    (n.tweenTo = function (e, t) {
      t ||= {};
      var n = this,
        r = Ht(n, e),
        i = t,
        a = i.startAt,
        o = i.onStart,
        s = i.onStartParams,
        c = i.immediateRender,
        l,
        u = ar.to(
          n,
          ft(
            {
              ease: t.ease || `none`,
              lazy: !1,
              immediateRender: !1,
              time: r,
              overwrite: `auto`,
              duration:
                t.duration ||
                Math.abs((r - (a && `time` in a ? a.time : n._time)) / n.timeScale()) ||
                z,
              onStart: function () {
                if ((n.pause(), !l)) {
                  var e =
                    t.duration ||
                    Math.abs((r - (a && `time` in a ? a.time : n._time)) / n.timeScale());
                  (u._dur !== e && zt(u, e, 0, 1).render(u._time, !0, !0), (l = 1));
                }
                o && o.apply(u, s || []);
              },
            },
            t,
          ),
        );
      return c ? u.render(0) : u;
    }),
    (n.tweenFromTo = function (e, t, n) {
      return this.tweenTo(t, ft({ startAt: { time: Ht(this, e) } }, n));
    }),
    (n.recent = function () {
      return this._recent;
    }),
    (n.nextLabel = function (e) {
      return (e === void 0 && (e = this._time), mn(this, Ht(this, e)));
    }),
    (n.previousLabel = function (e) {
      return (e === void 0 && (e = this._time), mn(this, Ht(this, e), 1));
    }),
    (n.currentLabel = function (e) {
      return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + z);
    }),
    (n.shiftChildren = function (e, t, n) {
      n === void 0 && (n = 0);
      var r = this._first,
        i = this.labels,
        a;
      for (e = it(e); r;) (r._start >= n && ((r._start += e), (r._end += e)), (r = r._next));
      if (t) for (a in i) i[a] >= n && (i[a] += e);
      return St(this);
    }),
    (n.invalidate = function (t) {
      var n = this._first;
      for (this._lock = 0; n;) (n.invalidate(t), (n = n._next));
      return e.prototype.invalidate.call(this, t);
    }),
    (n.clear = function (e) {
      e === void 0 && (e = !0);
      for (var t = this._first, n; t;) ((n = t._next), this.remove(t), (t = n));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        e && (this.labels = {}),
        St(this)
      );
    }),
    (n.totalDuration = function (e) {
      var t = 0,
        n = this,
        r = n._last,
        i = se,
        a,
        o,
        s;
      if (arguments.length)
        return n.timeScale(
          (n._repeat < 0 ? n.duration() : n.totalDuration()) / (n.reversed() ? -e : e),
        );
      if (n._dirty) {
        for (s = n.parent; r;)
          ((a = r._prev),
            r._dirty && r.totalDuration(),
            (o = r._start),
            o > i && n._sort && r._ts && !n._lock
              ? ((n._lock = 1), (Mt(n, r, o - r._delay, 1)._lock = 0))
              : (i = o),
            o < 0 &&
              r._ts &&
              ((t -= o),
              ((!s && !n._dp) || (s && s.smoothChildTiming)) &&
                ((n._start += it(o / n._ts)), (n._time -= o), (n._tTime -= o)),
              n.shiftChildren(-o, !1, -1 / 0),
              (i = 0)),
            r._end > t && r._ts && (t = r._end),
            (r = a));
        (zt(n, n === U && n._time > t ? n._time : t, 1, 1), (n._dirty = 0));
      }
      return n._tDur;
    }),
    (t.updateRoot = function (e) {
      if ((U._ts && (lt(U, Ot(e, U)), (qe = An.frame)), An.frame >= Xe)) {
        Xe += F.autoSleep || 120;
        var t = U._first;
        if ((!t || !t._ts) && F.autoSleep && An._listeners.length < 2) {
          for (; t && !t._ts;) t = t._next;
          t || An.sleep();
        }
      }
    }),
    t
  );
})(Wn);
ft(Gn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Kn = function (e, t, n, r, i, a, o) {
    var s = new yr(this._pt, e, t, 0, 1, pr, null, i),
      c = 0,
      l = 0,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _;
    for (
      s.b = n,
        s.e = r,
        n += ``,
        r += ``,
        (g = ~r.indexOf(`random(`)) && (r = dn(r)),
        a && ((_ = [n, r]), a(_, e, t), (n = _[0]), (r = _[1])),
        d = n.match(Ee) || [];
      (u = Ee.exec(r));
    )
      ((p = u[0]),
        (m = r.substring(c, u.index)),
        f ? (f = (f + 1) % 5) : m.substr(-5) === `rgba(` && (f = 1),
        p !== d[l++] &&
          ((h = parseFloat(d[l - 1]) || 0),
          (s._pt = {
            _next: s._pt,
            p: m || l === 1 ? m : `,`,
            s: h,
            c: p.charAt(1) === `=` ? at(h, p) - h : parseFloat(p) - h,
            m: f && f < 4 ? Math.round : 0,
          }),
          (c = Ee.lastIndex)));
    return (
      (s.c = c < r.length ? r.substring(c, r.length) : ``),
      (s.fp = o),
      (De.test(r) || g) && (s.e = 0),
      (this._pt = s),
      s
    );
  },
  qn = function (e, t, n, r, i, a, o, s, c, l) {
    V(r) && (r = r(i || 0, e, a));
    var u = e[t],
      d =
        n === `get`
          ? V(u)
            ? c
              ? e[t.indexOf(`set`) || !V(e[`get` + t.substr(3)]) ? t : `get` + t.substr(3)](c)
              : e[t]()
            : u
          : n,
      f = V(u) ? (c ? cr : sr) : or,
      p;
    if (
      (pe(r) &&
        (~r.indexOf(`random(`) && (r = dn(r)),
        r.charAt(1) === `=` && ((p = at(d, r) + (Kt(d) || 0)), (p || p === 0) && (r = p))),
      !l || d !== r || Zn)
    )
      return !isNaN(d * r) && r !== ``
        ? ((p = new yr(
            this._pt,
            e,
            t,
            +d || 0,
            r - (d || 0),
            typeof u == `boolean` ? fr : dr,
            0,
            f,
          )),
          c && (p.fp = c),
          o && p.modifier(o, this, e),
          (this._pt = p))
        : (!u && !(t in e) && Le(t, r), Kn.call(this, e, t, d, r, f, s || F.stringFilter, c));
  },
  Jn = function (e, t, n, r, i) {
    if ((V(e) && (e = nr(e, i, t, n, r)), !ge(e) || (e.style && e.nodeType) || be(e) || ye(e)))
      return pe(e) ? nr(e, i, t, n, r) : e;
    var a = {},
      o;
    for (o in e) a[o] = nr(e[o], i, t, n, r);
    return a;
  },
  Yn = function (e, t, n, r, i, a) {
    var o, s, c, l;
    if (
      Je[e] &&
      (o = new Je[e]()).init(i, o.rawVars ? t[e] : Jn(t[e], r, i, a, n), n, r, a) !== !1 &&
      ((n._pt = s = new yr(n._pt, i, e, 0, 1, o.render, o, 0, o.priority)), n !== _n)
    )
      for (c = n._ptLookup[n._targets.indexOf(i)], l = o._props.length; l--;) c[o._props[l]] = s;
    return o;
  },
  Xn,
  Zn,
  Qn = function e(t, n, r) {
    var i = t.vars,
      a = i.ease,
      o = i.startAt,
      s = i.immediateRender,
      c = i.lazy,
      l = i.onUpdate,
      u = i.runBackwards,
      d = i.yoyoEase,
      f = i.keyframes,
      p = i.autoRevert,
      m = t._dur,
      h = t._startAt,
      g = t._targets,
      _ = t.parent,
      v = _ && _.data === `nested` ? _.vars.targets : g,
      y = t._overwrite === `auto` && !L,
      b = t.timeline,
      x = i.easeReverse || d,
      S,
      C,
      w,
      T,
      E,
      D,
      O,
      k,
      A,
      j,
      M,
      ee,
      N;
    if (
      (b && (!f || !a) && (a = `none`),
      (t._ease = Rn(a, I.ease)),
      (t._rEase = x && (Rn(x) || t._ease)),
      (t._from = !b && !!i.runBackwards),
      t._from && (t.ratio = 1),
      !b || (f && !i.stagger))
    ) {
      if (
        ((k = g[0] ? et(g[0]).harness : 0),
        (ee = k && i[k.prop]),
        (S = gt(i, We)),
        h &&
          (h._zTime < 0 && h.progress(1),
          n < 0 && u && s && !p ? h.render(-1, !0) : h.revert(u && m ? He : Ve),
          (h._lazy = 0)),
        o)
      ) {
        if (
          (xt(
            (t._startAt = ar.set(
              g,
              ft(
                {
                  data: `isStart`,
                  overwrite: !1,
                  parent: _,
                  immediateRender: !0,
                  lazy: !h && _e(c),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    l &&
                    function () {
                      return hn(t, `onUpdate`);
                    },
                  stagger: 0,
                },
                o,
              ),
            )),
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          n < 0 && (oe || (!s && !p)) && t._startAt.revert(He),
          s && m && n <= 0 && r <= 0)
        ) {
          n && (t._zTime = n);
          return;
        }
      } else if (u && m && !h) {
        if (
          (n && (s = !1),
          (w = ft(
            {
              overwrite: !1,
              data: `isFromStart`,
              lazy: s && !h && _e(c),
              immediateRender: s,
              stagger: 0,
              parent: _,
            },
            S,
          )),
          ee && (w[k.prop] = ee),
          xt((t._startAt = ar.set(g, w))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          n < 0 && (oe ? t._startAt.revert(He) : t._startAt.render(-1, !0)),
          (t._zTime = n),
          !s)
        )
          e(t._startAt, z, z);
        else if (!n) return;
      }
      for (t._pt = t._ptCache = 0, c = (m && _e(c)) || (c && !m), C = 0; C < g.length; C++) {
        if (
          ((E = g[C]),
          (O = E._gsap || $e(g)[C]._gsap),
          (t._ptLookup[C] = j = {}),
          Ke[O.id] && Ge.length && st(),
          (M = v === g ? C : v.indexOf(E)),
          k &&
            (A = new k()).init(E, ee || S, t, M, v) !== !1 &&
            ((t._pt = T = new yr(t._pt, E, A.name, 0, 1, A.render, A, 0, A.priority)),
            A._props.forEach(function (e) {
              j[e] = T;
            }),
            A.priority && (D = 1)),
          !k || ee)
        )
          for (w in S)
            Je[w] && (A = Yn(w, S, t, M, E, v))
              ? A.priority && (D = 1)
              : (j[w] = T = qn.call(t, E, w, `get`, S[w], M, v, 0, i.stringFilter));
        (t._op && t._op[C] && t.kill(E, t._op[C]),
          y &&
            t._pt &&
            ((Xn = t), U.killTweensOf(E, j, t.globalTime(n)), (N = !t.parent), (Xn = 0)),
          t._pt && c && (Ke[O.id] = 1));
      }
      (D && vr(t), t._onInit && t._onInit(t));
    }
    ((t._onUpdate = l),
      (t._initted = (!t._op || t._pt) && !N),
      f && n <= 0 && b.render(se, !0, !0));
  },
  $n = function (e, t, n, r, i, a, o, s) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      l,
      u,
      d,
      f;
    if (!c)
      for (c = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length; f--;) {
        if (((l = d[f][t]), l && l.d && l.d._pt))
          for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
        if (!l)
          return (
            (Zn = 1),
            (e.vars[t] = `+=0`),
            Qn(e, o),
            (Zn = 0),
            s ? Re(t + ` not eligible for reset. Try splitting into individual properties`) : 1
          );
        c.push(l);
      }
    for (f = c.length; f--;)
      ((u = c[f]),
        (l = u._pt || u),
        (l.s = (r || r === 0) && !i ? r : l.s + (r || 0) + a * l.c),
        (l.c = n - l.s),
        u.e && (u.e = rt(n) + Kt(u.e)),
        u.b && (u.b = l.s + Kt(u.b)));
  },
  er = function (e, t) {
    var n = e[0] ? et(e[0]).harness : 0,
      r = n && n.aliases,
      i,
      a,
      o,
      s;
    if (!r) return t;
    for (a in ((i = mt({}, t)), r))
      if (a in i) for (s = r[a].split(`,`), o = s.length; o--;) i[s[o]] = i[a];
    return i;
  },
  tr = function (e, t, n, r) {
    var i = t.ease || r || `power1.inOut`,
      a,
      o;
    if (be(t))
      ((o = n[e] || (n[e] = [])),
        t.forEach(function (e, n) {
          return o.push({ t: (n / (t.length - 1)) * 100, v: e, e: i });
        }));
    else
      for (a in t)
        ((o = n[a] || (n[a] = [])), a === `ease` || o.push({ t: parseFloat(e), v: t[a], e: i }));
  },
  nr = function (e, t, n, r, i) {
    return V(e) ? e.call(t, n, r, i) : pe(e) && ~e.indexOf(`random(`) ? dn(e) : e;
  },
  rr = Qe + `repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,
  ir = {};
nt(rr + `,id,stagger,delay,duration,paused,scrollTrigger`, function (e) {
  return (ir[e] = 1);
});
var ar = (function (e) {
  ae(t, e);
  function t(t, n, r, i) {
    var a;
    (typeof n == `number` && ((r.duration = n), (n = r), (r = null)),
      (a = e.call(this, i ? n : _t(n)) || this));
    var o = a.vars,
      s = o.duration,
      c = o.delay,
      l = o.immediateRender,
      u = o.stagger,
      d = o.overwrite,
      f = o.keyframes,
      p = o.defaults,
      m = o.scrollTrigger,
      h = n.parent || U,
      g = (be(t) || ye(t) ? me(t[0]) : `length` in n) ? [t] : Zt(t),
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      w;
    if (
      ((a._targets = g.length
        ? $e(g)
        : Re(`GSAP target ` + t + ` not found. https://gsap.com`, !F.nullTargetWarn) || []),
      (a._ptLookup = []),
      (a._overwrite = d),
      f || u || ve(s) || ve(c))
    ) {
      n = a.vars;
      var T = n.easeReverse || n.yoyoEase;
      if (
        ((_ = a.timeline =
          new Gn({
            data: `nested`,
            defaults: p || {},
            targets: h && h.data === `nested` ? h.vars.targets : g,
          })),
        _.kill(),
        (_.parent = _._dp = ie(a)),
        (_._start = 0),
        u || ve(s) || ve(c))
      ) {
        if (((b = g.length), (C = u && en(u)), ge(u)))
          for (x in u) ~rr.indexOf(x) && ((w ||= {}), (w[x] = u[x]));
        for (v = 0; v < b; v++)
          ((y = gt(n, ir)),
            (y.stagger = 0),
            T && (y.easeReverse = T),
            w && mt(y, w),
            (S = g[v]),
            (y.duration = +nr(s, ie(a), v, S, g)),
            (y.delay = (+nr(c, ie(a), v, S, g) || 0) - a._delay),
            !u && b === 1 && y.delay && ((a._delay = c = y.delay), (a._start += c), (y.delay = 0)),
            _.to(S, y, C ? C(v, S, g) : 0),
            (_._ease = W.none));
        _.duration() ? (s = c = 0) : (a.timeline = 0);
      } else if (f) {
        (_t(ft(_.vars.defaults, { ease: `none` })), (_._ease = Rn(f.ease || n.ease || `none`)));
        var E = 0,
          D,
          O,
          k;
        if (be(f))
          (f.forEach(function (e) {
            return _.to(g, e, `>`);
          }),
            _.duration());
        else {
          for (x in ((y = {}), f)) x === `ease` || x === `easeEach` || tr(x, f[x], y, f.easeEach);
          for (x in y)
            for (
              D = y[x].sort(function (e, t) {
                return e.t - t.t;
              }),
                E = 0,
                v = 0;
              v < D.length;
              v++
            )
              ((O = D[v]),
                (k = { ease: O.e, duration: ((O.t - (v ? D[v - 1].t : 0)) / 100) * s }),
                (k[x] = O.v),
                _.to(g, k, E),
                (E += k.duration));
          _.duration() < s && _.to({}, { duration: s - _.duration() });
        }
      }
      s || a.duration((s = _.duration()));
    } else a.timeline = 0;
    return (
      d === !0 && !L && ((Xn = ie(a)), U.killTweensOf(g), (Xn = 0)),
      Mt(h, ie(a), r),
      n.reversed && a.reverse(),
      n.paused && a.paused(!0),
      (l || (!s && !f && a._start === it(h._time) && _e(l) && Tt(ie(a)) && h.data !== `nested`)) &&
        ((a._tTime = -z), a.render(Math.max(0, -c) || 0)),
      m && Nt(ie(a), m),
      a
    );
  }
  var n = t.prototype;
  return (
    (n.render = function (e, t, n) {
      var r = this._time,
        i = this._tDur,
        a = this._dur,
        o = e < 0,
        s = e > i - z && !o ? i : e < z ? 0 : e,
        c,
        l,
        u,
        d,
        f,
        p,
        m,
        h;
      if (!a) Lt(this, e, t, n);
      else if (
        s !== this._tTime ||
        !e ||
        n ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== o) ||
        this._lazy
      ) {
        if (((c = s), (h = this.timeline), this._repeat)) {
          if (((d = a + this._rDelay), this._repeat < -1 && o))
            return this.totalTime(d * 100 + e, t, n);
          if (
            ((c = it(s % d)),
            s === i
              ? ((u = this._repeat), (c = a))
              : ((f = it(s / d)), (u = ~~f), u && u === f ? ((c = a), u--) : c > a && (c = a)),
            (p = this._yoyo && u & 1),
            p && (c = a - c),
            (f = Dt(this._tTime, d)),
            c === r && !n && this._initted && u === f)
          )
            return ((this._tTime = s), this);
          u !== f &&
            this.vars.repeatRefresh &&
            !p &&
            !this._lock &&
            c !== d &&
            this._initted &&
            ((this._lock = n = 1), (this.render(it(d * u), !0).invalidate()._lock = 0));
        }
        if (!this._initted) {
          if (Pt(this, o ? e : c, n, t, s)) return ((this._tTime = 0), this);
          if (r !== this._time && !(n && this.vars.repeatRefresh && u !== f)) return this;
          if (a !== this._dur) return this.render(e, t, n);
        }
        if (this._rEase) {
          var g = c < r;
          if (g !== this._inv) {
            var _ = g ? r : a - r;
            ((this._inv = g),
              this._from && (this.ratio = 1 - this.ratio),
              (this._invRatio = this.ratio),
              (this._invTime = r),
              (this._invRecip = _ ? (g ? -1 : 1) / _ : 0),
              (this._invScale = g ? -this.ratio : 1 - this.ratio),
              (this._invEase = g ? this._rEase : this._ease));
          }
          this.ratio = m =
            this._invRatio + this._invScale * this._invEase((c - this._invTime) * this._invRecip);
        } else this.ratio = m = this._ease(c / a);
        if (
          (this._from && (this.ratio = m = 1 - m),
          (this._tTime = s),
          (this._time = c),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          !r && s && !t && !f && (hn(this, `onStart`), this._tTime !== s))
        )
          return this;
        for (l = this._pt; l;) (l.r(m, l.d), (l = l._next));
        ((h && h.render(e < 0 ? e : h._dur * h._ease(c / this._dur), t, n)) ||
          (this._startAt && (this._zTime = e)),
          this._onUpdate && !t && (o && wt(this, e, t, n), hn(this, `onUpdate`)),
          this._repeat &&
            u !== f &&
            this.vars.onRepeat &&
            !t &&
            this.parent &&
            hn(this, `onRepeat`),
          (s === this._tDur || !s) &&
            this._tTime === s &&
            (o && !this._onUpdate && wt(this, e, !0, !0),
            (e || !a) &&
              ((s === this._tDur && this._ts > 0) || (!s && this._ts < 0)) &&
              xt(this, 1),
            !t &&
              !(o && !r) &&
              (s || r || p) &&
              (hn(this, s === i ? `onComplete` : `onReverseComplete`, !0),
              this._prom && !(s < i && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (n.targets = function () {
      return this._targets;
    }),
    (n.invalidate = function (t) {
      return (
        (!t || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(t),
        e.prototype.invalidate.call(this, t)
      );
    }),
    (n.resetTo = function (e, t, n, r, i) {
      (kn || An.wake(), this._ts || this.play());
      var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        o;
      return (
        this._initted || Qn(this, a),
        (o = this._ease(a / this._dur)),
        $n(this, e, t, n, r, o, a, i)
          ? this.resetTo(e, t, n, r, 1)
          : (At(this, 0),
            this.parent || yt(this._dp, this, `_first`, `_last`, this._dp._sort ? `_start` : 0),
            this.render(0))
      );
    }),
    (n.kill = function (e, t) {
      if ((t === void 0 && (t = `all`), !e && (!t || t === `all`)))
        return (
          (this._lazy = this._pt = 0),
          this.parent ? gn(this) : this.scrollTrigger && this.scrollTrigger.kill(!!oe),
          this
        );
      if (this.timeline) {
        var n = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(e, t, Xn && Xn.vars.overwrite !== !0)._first || gn(this),
          this.parent &&
            n !== this.timeline.totalDuration() &&
            zt(this, (this._dur * this.timeline._tDur) / n, 0, 1),
          this
        );
      }
      var r = this._targets,
        i = e ? Zt(e) : r,
        a = this._ptLookup,
        o = this._pt,
        s,
        c,
        l,
        u,
        d,
        f,
        p;
      if ((!t || t === `all`) && vt(r, i)) return (t === `all` && (this._pt = 0), gn(this));
      for (
        s = this._op = this._op || [],
          t !== `all` &&
            (pe(t) &&
              ((d = {}),
              nt(t, function (e) {
                return (d[e] = 1);
              }),
              (t = d)),
            (t = er(r, t))),
          p = r.length;
        p--;
      )
        if (~i.indexOf(r[p]))
          for (d in ((c = a[p]),
          t === `all` ? ((s[p] = t), (u = c), (l = {})) : ((l = s[p] = s[p] || {}), (u = t)),
          u))
            ((f = c && c[d]),
              f && ((!(`kill` in f.d) || f.d.kill(d) === !0) && bt(this, f, `_pt`), delete c[d]),
              l !== `all` && (l[d] = 1));
      return (this._initted && !this._pt && o && gn(this), this);
    }),
    (t.to = function (e, n) {
      return new t(e, n, arguments[2]);
    }),
    (t.from = function (e, t) {
      return Ut(1, arguments);
    }),
    (t.delayedCall = function (e, n, r, i) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: e,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i,
      });
    }),
    (t.fromTo = function (e, t, n) {
      return Ut(2, arguments);
    }),
    (t.set = function (e, n) {
      return ((n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(e, n));
    }),
    (t.killTweensOf = function (e, t, n) {
      return U.killTweensOf(e, t, n);
    }),
    t
  );
})(Wn);
(ft(ar.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
  nt(`staggerTo,staggerFrom,staggerFromTo`, function (e) {
    ar[e] = function () {
      var t = new Gn(),
        n = Jt.call(arguments, 0);
      return (n.splice(e === `staggerFromTo` ? 5 : 4, 0, 0), t[e].apply(t, n));
    };
  }));
var or = function (e, t, n) {
    return (e[t] = n);
  },
  sr = function (e, t, n) {
    return e[t](n);
  },
  cr = function (e, t, n, r) {
    return e[t](r.fp, n);
  },
  lr = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  ur = function (e, t) {
    return V(e[t]) ? sr : he(e[t]) && e.setAttribute ? lr : or;
  },
  dr = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  fr = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  pr = function (e, t) {
    var n = t._pt,
      r = ``;
    if (!e && t.b) r = t.b;
    else if (e === 1 && t.e) r = t.e;
    else {
      for (; n;)
        ((r = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) + r),
          (n = n._next));
      r += t.c;
    }
    t.set(t.t, t.p, r, t);
  },
  mr = function (e, t) {
    for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
  },
  hr = function (e, t, n, r) {
    for (var i = this._pt, a; i;) ((a = i._next), i.p === r && i.modifier(e, t, n), (i = a));
  },
  gr = function (e) {
    for (var t = this._pt, n, r; t;)
      ((r = t._next),
        (t.p === e && !t.op) || t.op === e ? bt(this, t, `_pt`) : t.dep || (n = 1),
        (t = r));
    return !n;
  },
  _r = function (e, t, n, r) {
    r.mSet(e, t, r.m.call(r.tween, n, r.mt), r);
  },
  vr = function (e) {
    for (var t = e._pt, n, r, i, a; t;) {
      for (n = t._next, r = i; r && r.pr > t.pr;) r = r._next;
      ((t._prev = r ? r._prev : a) ? (t._prev._next = t) : (i = t),
        (t._next = r) ? (r._prev = t) : (a = t),
        (t = n));
    }
    e._pt = i;
  },
  yr = (function () {
    function e(e, t, n, r, i, a, o, s, c) {
      ((this.t = t),
        (this.s = r),
        (this.c = i),
        (this.p = n),
        (this.r = a || dr),
        (this.d = o || this),
        (this.set = s || or),
        (this.pr = c || 0),
        (this._next = e),
        e && (e._prev = this));
    }
    var t = e.prototype;
    return (
      (t.modifier = function (e, t, n) {
        ((this.mSet = this.mSet || this.set),
          (this.set = _r),
          (this.m = e),
          (this.mt = n),
          (this.tween = t));
      }),
      e
    );
  })();
(nt(
  Qe +
    `parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,
  function (e) {
    return (We[e] = 1);
  },
),
  (Ne.TweenMax = Ne.TweenLite = ar),
  (Ne.TimelineLite = Ne.TimelineMax = Gn),
  (U = new Gn({
    sortChildren: !1,
    defaults: I,
    autoRemoveChildren: !0,
    id: `root`,
    smoothChildTiming: !0,
  })),
  (F.stringFilter = On));
var br = [],
  xr = {},
  Sr = [],
  Cr = 0,
  wr = 0,
  Tr = function (e) {
    return (xr[e] || Sr).map(function (e) {
      return e();
    });
  },
  Er = function () {
    var e = Date.now(),
      t = [];
    e - Cr > 2 &&
      (Tr(`matchMediaInit`),
      br.forEach(function (e) {
        var n = e.queries,
          r = e.conditions,
          i,
          a,
          o,
          s;
        for (a in n)
          ((i = Ae.matchMedia(n[a]).matches), i && (o = 1), i !== r[a] && ((r[a] = i), (s = 1)));
        s && (e.revert(), o && t.push(e));
      }),
      Tr(`matchMediaRevert`),
      t.forEach(function (e) {
        return e.onMatch(e, function (t) {
          return e.add(null, t);
        });
      }),
      (Cr = e),
      Tr(`matchMedia`));
  },
  Dr = (function () {
    function e(e, t) {
      ((this.selector = t && Qt(t)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = wr++),
        e && this.add(e));
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        V(e) && ((n = t), (t = e), (e = V));
        var r = this,
          i = function () {
            var e = R,
              i = r.selector,
              a;
            return (
              e && e !== r && e.data.push(r),
              n && (r.selector = Qt(n)),
              (R = r),
              (a = t.apply(r, arguments)),
              V(a) && r._r.push(a),
              (R = e),
              (r.selector = i),
              (r.isReverted = !1),
              a
            );
          };
        return (
          (r.last = i),
          e === V
            ? i(r, function (e) {
                return r.add(null, e);
              })
            : e
              ? (r[e] = i)
              : i
        );
      }),
      (t.ignore = function (e) {
        var t = R;
        ((R = null), e(this), (R = t));
      }),
      (t.getTweens = function () {
        var t = [];
        return (
          this.data.forEach(function (n) {
            return n instanceof e
              ? t.push.apply(t, n.getTweens())
              : n instanceof ar && !(n.parent && n.parent.data === `nested`) && t.push(n);
          }),
          t
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (e, t) {
        var n = this;
        if (
          (e
            ? (function () {
                for (var t = n.getTweens(), r = n.data.length, i; r--;)
                  ((i = n.data[r]),
                    i.data === `isFlip` &&
                      (i.revert(),
                      i.getChildren(!0, !0, !1).forEach(function (e) {
                        return t.splice(t.indexOf(e), 1);
                      })));
                for (
                  t
                    .map(function (e) {
                      return {
                        g:
                          e._dur || e._delay || (e._sat && !e._sat.vars.immediateRender)
                            ? e.globalTime(0)
                            : -1 / 0,
                        t: e,
                      };
                    })
                    .sort(function (e, t) {
                      return t.g - e.g || -1 / 0;
                    })
                    .forEach(function (t) {
                      return t.t.revert(e);
                    }),
                    r = n.data.length;
                  r--;
                )
                  ((i = n.data[r]),
                    i instanceof Gn
                      ? i.data !== `nested` &&
                        (i.scrollTrigger && i.scrollTrigger.revert(), i.kill())
                      : !(i instanceof ar) && i.revert && i.revert(e));
                (n._r.forEach(function (t) {
                  return t(e, n);
                }),
                  (n.isReverted = !0));
              })()
            : this.data.forEach(function (e) {
                return e.kill && e.kill();
              }),
          this.clear(),
          t)
        )
          for (var r = br.length; r--;) br[r].id === this.id && br.splice(r, 1);
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      e
    );
  })(),
  Or = (function () {
    function e(e) {
      ((this.contexts = []), (this.scope = e), R && R.data.push(this));
    }
    var t = e.prototype;
    return (
      (t.add = function (e, t, n) {
        ge(e) || (e = { matches: e });
        var r = new Dr(0, n || this.scope),
          i = (r.conditions = {}),
          a,
          o,
          s;
        for (o in (R && !r.selector && (r.selector = R.selector),
        this.contexts.push(r),
        (t = r.add(`onMatch`, t)),
        (r.queries = e),
        e))
          o === `all`
            ? (s = 1)
            : ((a = Ae.matchMedia(e[o])),
              a &&
                (br.indexOf(r) < 0 && br.push(r),
                (i[o] = a.matches) && (s = 1),
                a.addListener ? a.addListener(Er) : a.addEventListener(`change`, Er)));
        return (
          s &&
            t(r, function (e) {
              return r.add(null, e);
            }),
          this
        );
      }),
      (t.revert = function (e) {
        this.kill(e || {});
      }),
      (t.kill = function (e) {
        this.contexts.forEach(function (t) {
          return t.kill(e, !0);
        });
      }),
      e
    );
  })(),
  kr = {
    registerPlugin: function () {
      [...arguments].forEach(function (e) {
        return yn(e);
      });
    },
    timeline: function (e) {
      return new Gn(e);
    },
    getTweensOf: function (e, t) {
      return U.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, r) {
      pe(e) && (e = Zt(e)[0]);
      var i = et(e || {}).get,
        a = n ? dt : ut;
      return (
        n === `native` && (n = ``),
        e &&
          (t
            ? a(((Je[t] && Je[t].get) || i)(e, t, n, r))
            : function (t, n, r) {
                return a(((Je[t] && Je[t].get) || i)(e, t, n, r));
              })
      );
    },
    quickSetter: function (e, t, n) {
      if (((e = Zt(e)), e.length > 1)) {
        var r = e.map(function (e) {
            return Nr.quickSetter(e, t, n);
          }),
          i = r.length;
        return function (e) {
          for (var t = i; t--;) r[t](e);
        };
      }
      e = e[0] || {};
      var a = Je[t],
        o = et(e),
        s = (o.harness && (o.harness.aliases || {})[t]) || t,
        c = a
          ? function (t) {
              var r = new a();
              ((_n._pt = 0),
                r.init(e, n ? t + n : t, _n, 0, [e]),
                r.render(1, r),
                _n._pt && mr(1, _n));
            }
          : o.set(e, s);
      return a
        ? c
        : function (t) {
            return c(e, s, n ? t + n : t, o, 1);
          };
    },
    quickTo: function (e, t, n) {
      var r,
        i = Nr.to(
          e,
          ft(((r = {}), (r[t] = `+=0.1`), (r.paused = !0), (r.stagger = 0), r), n || {}),
        ),
        a = function (e, n, r) {
          return i.resetTo(t, e, n, r);
        };
      return ((a.tween = i), a);
    },
    isTweening: function (e) {
      return U.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return (e && e.ease && (e.ease = Rn(e.ease, I.ease)), ht(I, e || {}));
    },
    config: function (e) {
      return ht(F, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        r = e.plugins,
        i = e.defaults,
        a = e.extendTimeline;
      ((r || ``).split(`,`).forEach(function (e) {
        return e && !Je[e] && !Ne[e] && Re(t + ` effect requires ` + e + ` plugin.`);
      }),
        (Ye[t] = function (e, t, r) {
          return n(Zt(e), ft(t || {}, i), r);
        }),
        a &&
          (Gn.prototype[t] = function (e, n, r) {
            return this.add(Ye[t](e, ge(n) ? n : (r = n) && {}, this), r);
          }));
    },
    registerEase: function (e, t) {
      W[e] = Rn(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? Rn(e, t) : W;
    },
    getById: function (e) {
      return U.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var n = new Gn(e),
        r,
        i;
      for (
        n.smoothChildTiming = _e(e.smoothChildTiming),
          U.remove(n),
          n._dp = 0,
          n._time = n._tTime = U._time,
          r = U._first;
        r;
      )
        ((i = r._next),
          (t || !(!r._dur && r instanceof ar && r.vars.onComplete === r._targets[0])) &&
            Mt(n, r, r._start - r._delay),
          (r = i));
      return (Mt(U, n, 0), n);
    },
    context: function (e, t) {
      return e ? new Dr(e, t) : R;
    },
    matchMedia: function (e) {
      return new Or(e);
    },
    matchMediaRefresh: function () {
      return (
        br.forEach(function (e) {
          var t = e.conditions,
            n,
            r;
          for (r in t) t[r] && ((t[r] = !1), (n = 1));
          n && e.revert();
        }) || Er()
      );
    },
    addEventListener: function (e, t) {
      var n = xr[e] || (xr[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = xr[e],
        r = n && n.indexOf(t);
      r >= 0 && n.splice(r, 1);
    },
    utils: {
      wrap: ln,
      wrapYoyo: un,
      distribute: en,
      random: rn,
      snap: nn,
      normalize: sn,
      getUnit: Kt,
      clamp: qt,
      splitColor: Cn,
      toArray: Zt,
      selector: Qt,
      mapRange: fn,
      pipe: an,
      unitize: on,
      interpolate: pn,
      shuffle: $t,
    },
    install: Ie,
    effects: Ye,
    ticker: An,
    updateRoot: Gn.updateRoot,
    plugins: Je,
    globalTimeline: U,
    core: {
      PropTween: yr,
      globals: ze,
      Tween: ar,
      Timeline: Gn,
      Animation: Wn,
      getCache: et,
      _removeLinkedListItem: bt,
      reverting: function () {
        return oe;
      },
      context: function (e) {
        return (e && R && (R.data.push(e), (e._ctx = R)), R);
      },
      suppressOverwrites: function (e) {
        return (L = e);
      },
    },
  };
(nt(`to,from,fromTo,delayedCall,set,killTweensOf`, function (e) {
  return (kr[e] = ar[e]);
}),
  An.add(Gn.updateRoot),
  (_n = kr.to({}, { duration: 0 })));
var Ar = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
    return n;
  },
  jr = function (e, t) {
    var n = e._targets,
      r,
      i,
      a;
    for (r in t)
      for (i = n.length; i--;)
        ((a = e._ptLookup[i][r]),
          (a &&= a.d) &&
            (a._pt && (a = Ar(a, r)), a && a.modifier && a.modifier(t[r], e, n[i], r)));
  },
  Mr = function (e, t) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function (e, n, r) {
        r._onInit = function (e) {
          var r, i;
          if (
            (pe(n) &&
              ((r = {}),
              nt(n, function (e) {
                return (r[e] = 1);
              }),
              (n = r)),
            t)
          ) {
            for (i in ((r = {}), n)) r[i] = t(n[i]);
            n = r;
          }
          jr(e, n);
        };
      },
    };
  },
  Nr =
    kr.registerPlugin(
      {
        name: `attr`,
        init: function (e, t, n, r, i) {
          var a, o, s;
          for (a in ((this.tween = n), t))
            ((s = e.getAttribute(a) || ``),
              (o = this.add(e, `setAttribute`, (s || 0) + ``, t[a], r, i, 0, 0, a)),
              (o.op = a),
              (o.b = s),
              this._props.push(a));
        },
        render: function (e, t) {
          for (var n = t._pt; n;) (oe ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next));
        },
      },
      {
        name: `endArray`,
        headless: 1,
        init: function (e, t) {
          for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      Mr(`roundProps`, tn),
      Mr(`modifiers`),
      Mr(`snap`, nn),
    ) || kr;
((ar.version = Gn.version = Nr.version = `3.15.0`),
  (Fe = 1),
  H() && jn(),
  W.Power0,
  W.Power1,
  W.Power2,
  W.Power3,
  W.Power4,
  W.Linear,
  W.Quad,
  W.Cubic,
  W.Quart,
  W.Quint,
  W.Strong,
  W.Elastic,
  W.Back,
  W.SteppedEase,
  W.Bounce,
  W.Sine,
  W.Expo,
  W.Circ);
var Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Vr = function () {
    return typeof window < `u`;
  },
  Hr = {},
  Ur = 180 / Math.PI,
  Wr = Math.PI / 180,
  Gr = Math.atan2,
  Kr = 1e8,
  qr = /([A-Z])/g,
  Jr = /(left|right|width|margin|padding|x)/i,
  Yr = /[\s,\(]\S/,
  Xr = { autoAlpha: `opacity,visibility`, scale: `scaleX,scaleY`, alpha: `opacity` },
  Zr = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  Qr = function (e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  $r = function (e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
  },
  ei = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t,
    );
  },
  ti = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  ni = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  ri = function (e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : t.b, t);
  },
  ii = function (e, t, n) {
    return (e.style[t] = n);
  },
  ai = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  oi = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  si = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  ci = function (e, t, n, r, i) {
    var a = e._gsap;
    ((a.scaleX = a.scaleY = n), a.renderTransform(i, a));
  },
  li = function (e, t, n, r, i) {
    var a = e._gsap;
    ((a[t] = n), a.renderTransform(i, a));
  },
  ui = `transform`,
  di = ui + `Origin`,
  fi = function e(t, n) {
    var r = this,
      i = this.target,
      a = i.style,
      o = i._gsap;
    if (t in Hr && a) {
      if (((this.tfm = this.tfm || {}), t !== `transform`))
        ((t = Xr[t] || t),
          ~t.indexOf(`,`)
            ? t.split(`,`).forEach(function (e) {
                return (r.tfm[e] = ji(i, e));
              })
            : (this.tfm[t] = o.x ? o[t] : ji(i, t)),
          t === di && (this.tfm.zOrigin = o.zOrigin));
      else
        return Xr.transform.split(`,`).forEach(function (t) {
          return e.call(r, t, n);
        });
      if (this.props.indexOf(ui) >= 0) return;
      (o.svg && ((this.svgo = i.getAttribute(`data-svg-origin`)), this.props.push(di, n, ``)),
        (t = ui));
    }
    (a || n) && this.props.push(t, n, a[t]);
  },
  pi = function (e) {
    e.translate &&
      (e.removeProperty(`translate`), e.removeProperty(`scale`), e.removeProperty(`rotate`));
  },
  mi = function () {
    var e = this.props,
      t = this.target,
      n = t.style,
      r = t._gsap,
      i,
      a;
    for (i = 0; i < e.length; i += 3)
      e[i + 1]
        ? e[i + 1] === 2
          ? t[e[i]](e[i + 2])
          : (t[e[i]] = e[i + 2])
        : e[i + 2]
          ? (n[e[i]] = e[i + 2])
          : n.removeProperty(
              e[i].substr(0, 2) === `--` ? e[i] : e[i].replace(qr, `-$1`).toLowerCase(),
            );
    if (this.tfm) {
      for (a in this.tfm) r[a] = this.tfm[a];
      (r.svg && (r.renderTransform(), t.setAttribute(`data-svg-origin`, this.svgo || ``)),
        (i = Br()),
        (!i || !i.isStart) &&
          !n[ui] &&
          (pi(n),
          r.zOrigin &&
            n[di] &&
            ((n[di] += ` ` + r.zOrigin + `px`), (r.zOrigin = 0), r.renderTransform()),
          (r.uncache = 1)));
    }
  },
  hi = function (e, t) {
    var n = { target: e, props: [], revert: mi, save: fi };
    return (
      e._gsap || Nr.core.getCache(e),
      t &&
        e.style &&
        e.nodeType &&
        t.split(`,`).forEach(function (e) {
          return n.save(e);
        }),
      n
    );
  },
  gi,
  _i = function (e, t) {
    var n = Fr.createElementNS
      ? Fr.createElementNS((t || `http://www.w3.org/1999/xhtml`).replace(/^https/, `http`), e)
      : Fr.createElement(e);
    return n && n.style ? n : Fr.createElement(e);
  },
  vi = function e(t, n, r) {
    var i = getComputedStyle(t);
    return (
      i[n] ||
      i.getPropertyValue(n.replace(qr, `-$1`).toLowerCase()) ||
      i.getPropertyValue(n) ||
      (!r && e(t, bi(n) || n, 1)) ||
      ``
    );
  },
  yi = `O,Moz,ms,Ms,Webkit`.split(`,`),
  bi = function (e, t, n) {
    var r = (t || Rr).style,
      i = 5;
    if (e in r && !n) return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); i-- && !(yi[i] + e in r););
    return i < 0 ? null : (i === 3 ? `ms` : i >= 0 ? yi[i] : ``) + e;
  },
  xi = function () {
    Vr() &&
      window.document &&
      ((Pr = window),
      (Fr = Pr.document),
      (Ir = Fr.documentElement),
      (Rr = _i(`div`) || { style: {} }),
      _i(`div`),
      (ui = bi(ui)),
      (di = ui + `Origin`),
      (Rr.style.cssText = `border-width:0;line-height:0;position:absolute;padding:0`),
      (gi = !!bi(`perspective`)),
      (Br = Nr.core.reverting),
      (Lr = 1));
  },
  Si = function (e) {
    var t = e.ownerSVGElement,
      n = _i(`svg`, (t && t.getAttribute(`xmlns`)) || `http://www.w3.org/2000/svg`),
      r = e.cloneNode(!0),
      i;
    ((r.style.display = `block`), n.appendChild(r), Ir.appendChild(n));
    try {
      i = r.getBBox();
    } catch {}
    return (n.removeChild(r), Ir.removeChild(n), i);
  },
  Ci = function (e, t) {
    for (var n = t.length; n--;) if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  wi = function (e) {
    var t, n;
    try {
      t = e.getBBox();
    } catch {
      ((t = Si(e)), (n = 1));
    }
    return (
      (t && (t.width || t.height)) || n || (t = Si(e)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Ci(e, [`x`, `cx`, `x1`]) || 0,
            y: +Ci(e, [`y`, `cy`, `y1`]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  Ti = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && wi(e));
  },
  Ei = function (e, t) {
    if (t) {
      var n = e.style,
        r;
      (t in Hr && t !== di && (t = ui),
        n.removeProperty
          ? ((r = t.substr(0, 2)),
            (r === `ms` || t.substr(0, 6) === `webkit`) && (t = `-` + t),
            n.removeProperty(r === `--` ? t : t.replace(qr, `-$1`).toLowerCase()))
          : n.removeAttribute(t));
    }
  },
  Di = function (e, t, n, r, i, a) {
    var o = new yr(e._pt, t, n, 0, 1, a ? ri : ni);
    return ((e._pt = o), (o.b = r), (o.e = i), e._props.push(n), o);
  },
  Oi = { deg: 1, rad: 1, turn: 1 },
  ki = { grid: 1, flex: 1 },
  Ai = function e(t, n, r, i) {
    var a = parseFloat(r) || 0,
      o = (r + ``).trim().substr((a + ``).length) || `px`,
      s = Rr.style,
      c = Jr.test(n),
      l = t.tagName.toLowerCase() === `svg`,
      u = (l ? `client` : `offset`) + (c ? `Width` : `Height`),
      d = 100,
      f = i === `px`,
      p = i === `%`,
      m,
      h,
      g,
      _;
    if (i === o || !a || Oi[i] || Oi[o]) return a;
    if (
      (o !== `px` && !f && (a = e(t, n, r, `px`)),
      (_ = t.getCTM && Ti(t)),
      (p || o === `%`) && (Hr[n] || ~n.indexOf(`adius`)))
    )
      return (
        (m = _ ? t.getBBox()[c ? `width` : `height`] : t[u]),
        rt(p ? (a / m) * d : (a / 100) * m)
      );
    if (
      ((s[c ? `width` : `height`] = d + (f ? o : i)),
      (h =
        (i !== `rem` && ~n.indexOf(`adius`)) || (i === `em` && t.appendChild && !l)
          ? t
          : t.parentNode),
      _ && (h = (t.ownerSVGElement || {}).parentNode),
      (!h || h === Fr || !h.appendChild) && (h = Fr.body),
      (g = h._gsap),
      g && p && g.width && c && g.time === An.time && !g.uncache)
    )
      return rt((a / g.width) * d);
    if (p && (n === `height` || n === `width`)) {
      var v = t.style[n];
      ((t.style[n] = d + i), (m = t[u]), v ? (t.style[n] = v) : Ei(t, n));
    } else
      ((p || o === `%`) && !ki[vi(h, `display`)] && (s.position = vi(t, `position`)),
        h === t && (s.position = `static`),
        h.appendChild(Rr),
        (m = Rr[u]),
        h.removeChild(Rr),
        (s.position = `absolute`));
    return (
      c && p && ((g = et(h)), (g.time = An.time), (g.width = h[u])),
      rt(f ? (m * a) / d : m && a ? (d / m) * a : 0)
    );
  },
  ji = function (e, t, n, r) {
    var i;
    return (
      Lr || xi(),
      t in Xr && t !== `transform` && ((t = Xr[t]), ~t.indexOf(`,`) && (t = t.split(`,`)[0])),
      Hr[t] && t !== `transform`
        ? ((i = Ui(e, r)),
          (i =
            t === `transformOrigin`
              ? i.svg
                ? i.origin
                : Wi(vi(e, di)) + ` ` + i.zOrigin + `px`
              : i[t]))
        : ((i = e.style[t]),
          (!i || i === `auto` || r || ~(i + ``).indexOf(`calc(`)) &&
            (i = (Ii[t] && Ii[t](e, t, n)) || vi(e, t) || tt(e, t) || +(t === `opacity`))),
      n && !~(i + ``).trim().indexOf(` `) ? Ai(e, t, i, n) + n : i
    );
  },
  Mi = function (e, t, n, r) {
    if (!n || n === `none`) {
      var i = bi(t, e, 1),
        a = i && vi(e, i, 1);
      a && a !== n ? ((t = i), (n = a)) : t === `borderColor` && (n = vi(e, `borderTopColor`));
    }
    var o = new yr(this._pt, e.style, t, 0, 1, pr),
      s = 0,
      c = 0,
      l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b;
    if (
      ((o.b = n),
      (o.e = r),
      (n += ``),
      (r += ``),
      r.substring(0, 6) === `var(--` && (r = vi(e, r.substring(4, r.indexOf(`)`)))),
      r === `auto` &&
        ((m = e.style[t]), (e.style[t] = r), (r = vi(e, t) || r), m ? (e.style[t] = m) : Ei(e, t)),
      (l = [n, r]),
      On(l),
      (n = l[0]),
      (r = l[1]),
      (d = n.match(Te) || []),
      (b = r.match(Te) || []),
      b.length)
    ) {
      for (; (u = Te.exec(r));)
        ((h = u[0]),
          (_ = r.substring(s, u.index)),
          p ? (p = (p + 1) % 5) : (_.substr(-5) === `rgba(` || _.substr(-5) === `hsla(`) && (p = 1),
          h !== (m = d[c++] || ``) &&
            ((f = parseFloat(m) || 0),
            (y = m.substr((f + ``).length)),
            h.charAt(1) === `=` && (h = at(f, h) + y),
            (g = parseFloat(h)),
            (v = h.substr((g + ``).length)),
            (s = Te.lastIndex - v.length),
            v || ((v = v || F.units[t] || y), s === r.length && ((r += v), (o.e += v))),
            y !== v && (f = Ai(e, t, m, v) || 0),
            (o._pt = {
              _next: o._pt,
              p: _ || c === 1 ? _ : `,`,
              s: f,
              c: g - f,
              m: (p && p < 4) || t === `zIndex` ? Math.round : 0,
            })));
      o.c = s < r.length ? r.substring(s, r.length) : ``;
    } else o.r = t === `display` && r === `none` ? ri : ni;
    return (De.test(r) && (o.e = 0), (this._pt = o), o);
  },
  Ni = { top: `0%`, bottom: `100%`, left: `0%`, right: `100%`, center: `50%` },
  Pi = function (e) {
    var t = e.split(` `),
      n = t[0],
      r = t[1] || `50%`;
    return (
      (n === `top` || n === `bottom` || r === `left` || r === `right`) &&
        ((e = n), (n = r), (r = e)),
      (t[0] = Ni[n] || n),
      (t[1] = Ni[r] || r),
      t.join(` `)
    );
  },
  Fi = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        r = n.style,
        i = t.u,
        a = n._gsap,
        o,
        s,
        c;
      if (i === `all` || i === !0) ((r.cssText = ``), (s = 1));
      else
        for (i = i.split(`,`), c = i.length; --c > -1;)
          ((o = i[c]), Hr[o] && ((s = 1), (o = o === `transformOrigin` ? di : ui)), Ei(n, o));
      s &&
        (Ei(n, ui),
        a &&
          (a.svg && n.removeAttribute(`transform`),
          (r.scale = r.rotate = r.translate = `none`),
          Ui(n, 1),
          (a.uncache = 1),
          pi(r)));
    }
  },
  Ii = {
    clearProps: function (e, t, n, r, i) {
      if (i.data !== `isFromStart`) {
        var a = (e._pt = new yr(e._pt, t, n, 0, 0, Fi));
        return ((a.u = r), (a.pr = -10), (a.tween = i), e._props.push(n), 1);
      }
    },
  },
  Li = [1, 0, 0, 1, 0, 0],
  Ri = {},
  zi = function (e) {
    return e === `matrix(1, 0, 0, 1, 0, 0)` || e === `none` || !e;
  },
  Bi = function (e) {
    var t = vi(e, ui);
    return zi(t) ? Li : t.substr(7).match(we).map(rt);
  },
  Vi = function (e, t) {
    var n = e._gsap || et(e),
      r = e.style,
      i = Bi(e),
      a,
      o,
      s,
      c;
    return n.svg && e.getAttribute(`transform`)
      ? ((s = e.transform.baseVal.consolidate().matrix),
        (i = [s.a, s.b, s.c, s.d, s.e, s.f]),
        i.join(`,`) === `1,0,0,1,0,0` ? Li : i)
      : (i === Li &&
          !e.offsetParent &&
          e !== Ir &&
          !n.svg &&
          ((s = r.display),
          (r.display = `block`),
          (a = e.parentNode),
          (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((c = 1), (o = e.nextElementSibling), Ir.appendChild(e)),
          (i = Bi(e)),
          s ? (r.display = s) : Ei(e, `display`),
          c && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : Ir.removeChild(e))),
        t && i.length > 6 ? [i[0], i[1], i[4], i[5], i[12], i[13]] : i);
  },
  Hi = function (e, t, n, r, i, a) {
    var o = e._gsap,
      s = i || Vi(e, !0),
      c = o.xOrigin || 0,
      l = o.yOrigin || 0,
      u = o.xOffset || 0,
      d = o.yOffset || 0,
      f = s[0],
      p = s[1],
      m = s[2],
      h = s[3],
      g = s[4],
      _ = s[5],
      v = t.split(` `),
      y = parseFloat(v[0]) || 0,
      b = parseFloat(v[1]) || 0,
      x,
      S,
      C,
      w;
    (n
      ? s !== Li &&
        (S = f * h - p * m) &&
        ((C = (h / S) * y + b * (-m / S) + (m * _ - h * g) / S),
        (w = y * (-p / S) + (f / S) * b - (f * _ - p * g) / S),
        (y = C),
        (b = w))
      : ((x = wi(e)),
        (y = x.x + (~v[0].indexOf(`%`) ? (y / 100) * x.width : y)),
        (b = x.y + (~(v[1] || v[0]).indexOf(`%`) ? (b / 100) * x.height : b))),
      r || (r !== !1 && o.smooth)
        ? ((g = y - c),
          (_ = b - l),
          (o.xOffset = u + (g * f + _ * m) - g),
          (o.yOffset = d + (g * p + _ * h) - _))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = y),
      (o.yOrigin = b),
      (o.smooth = !!r),
      (o.origin = t),
      (o.originIsAbsolute = !!n),
      (e.style[di] = `0px 0px`),
      a &&
        (Di(a, o, `xOrigin`, c, y),
        Di(a, o, `yOrigin`, l, b),
        Di(a, o, `xOffset`, u, o.xOffset),
        Di(a, o, `yOffset`, d, o.yOffset)),
      e.setAttribute(`data-svg-origin`, y + ` ` + b));
  },
  Ui = function (e, t) {
    var n = e._gsap || new Un(e);
    if (`x` in n && !t && !n.uncache) return n;
    var r = e.style,
      i = n.scaleX < 0,
      a = `px`,
      o = `deg`,
      s = getComputedStyle(e),
      c = vi(e, di) || `0`,
      l = (u = d = m = h = g = _ = v = y = 0),
      u,
      d,
      f = (p = 1),
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      w,
      T,
      E,
      D,
      O,
      k,
      A,
      j,
      M,
      ee,
      N,
      te,
      P,
      ne,
      re,
      ie,
      ae;
    return (
      (n.svg = !!(e.getCTM && Ti(e))),
      s.translate &&
        ((s.translate !== `none` || s.scale !== `none` || s.rotate !== `none`) &&
          (r[ui] =
            (s.translate === `none`
              ? ``
              : `translate3d(` + (s.translate + ` 0 0`).split(` `).slice(0, 3).join(`, `) + `) `) +
            (s.rotate === `none` ? `` : `rotate(` + s.rotate + `) `) +
            (s.scale === `none` ? `` : `scale(` + s.scale.split(` `).join(`,`) + `) `) +
            (s[ui] === `none` ? `` : s[ui])),
        (r.scale = r.rotate = r.translate = `none`)),
      (S = Vi(e, n.svg)),
      n.svg &&
        (n.uncache
          ? ((ee = e.getBBox()),
            (c = n.xOrigin - ee.x + `px ` + (n.yOrigin - ee.y) + `px`),
            (M = ``))
          : (M = !t && e.getAttribute(`data-svg-origin`)),
        Hi(e, M || c, !!M || n.originIsAbsolute, n.smooth !== !1, S)),
      (b = n.xOrigin || 0),
      (x = n.yOrigin || 0),
      S !== Li &&
        ((E = S[0]),
        (D = S[1]),
        (O = S[2]),
        (k = S[3]),
        (l = A = S[4]),
        (u = j = S[5]),
        S.length === 6
          ? ((f = Math.sqrt(E * E + D * D)),
            (p = Math.sqrt(k * k + O * O)),
            (m = E || D ? Gr(D, E) * Ur : 0),
            (_ = O || k ? Gr(O, k) * Ur + m : 0),
            _ && (p *= Math.abs(Math.cos(_ * Wr))),
            n.svg && ((l -= b - (b * E + x * O)), (u -= x - (b * D + x * k))))
          : ((ae = S[6]),
            (re = S[7]),
            (te = S[8]),
            (P = S[9]),
            (ne = S[10]),
            (ie = S[11]),
            (l = S[12]),
            (u = S[13]),
            (d = S[14]),
            (C = Gr(ae, ne)),
            (h = C * Ur),
            C &&
              ((w = Math.cos(-C)),
              (T = Math.sin(-C)),
              (M = A * w + te * T),
              (ee = j * w + P * T),
              (N = ae * w + ne * T),
              (te = A * -T + te * w),
              (P = j * -T + P * w),
              (ne = ae * -T + ne * w),
              (ie = re * -T + ie * w),
              (A = M),
              (j = ee),
              (ae = N)),
            (C = Gr(-O, ne)),
            (g = C * Ur),
            C &&
              ((w = Math.cos(-C)),
              (T = Math.sin(-C)),
              (M = E * w - te * T),
              (ee = D * w - P * T),
              (N = O * w - ne * T),
              (ie = k * T + ie * w),
              (E = M),
              (D = ee),
              (O = N)),
            (C = Gr(D, E)),
            (m = C * Ur),
            C &&
              ((w = Math.cos(C)),
              (T = Math.sin(C)),
              (M = E * w + D * T),
              (ee = A * w + j * T),
              (D = D * w - E * T),
              (j = j * w - A * T),
              (E = M),
              (A = ee)),
            h && Math.abs(h) + Math.abs(m) > 359.9 && ((h = m = 0), (g = 180 - g)),
            (f = rt(Math.sqrt(E * E + D * D + O * O))),
            (p = rt(Math.sqrt(j * j + ae * ae))),
            (C = Gr(A, j)),
            (_ = Math.abs(C) > 2e-4 ? C * Ur : 0),
            (y = ie ? 1 / (ie < 0 ? -ie : ie) : 0)),
        n.svg &&
          ((M = e.getAttribute(`transform`)),
          (n.forceCSS = e.setAttribute(`transform`, ``) || !zi(vi(e, ui))),
          M && e.setAttribute(`transform`, M))),
      Math.abs(_) > 90 &&
        Math.abs(_) < 270 &&
        (i
          ? ((f *= -1), (_ += m <= 0 ? 180 : -180), (m += m <= 0 ? 180 : -180))
          : ((p *= -1), (_ += _ <= 0 ? 180 : -180))),
      (t ||= n.uncache),
      (n.x =
        l -
        ((n.xPercent =
          l && ((!t && n.xPercent) || (Math.round(e.offsetWidth / 2) === Math.round(-l) ? -50 : 0)))
          ? (e.offsetWidth * n.xPercent) / 100
          : 0) +
        a),
      (n.y =
        u -
        ((n.yPercent =
          u &&
          ((!t && n.yPercent) || (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetHeight * n.yPercent) / 100
          : 0) +
        a),
      (n.z = d + a),
      (n.scaleX = rt(f)),
      (n.scaleY = rt(p)),
      (n.rotation = rt(m) + o),
      (n.rotationX = rt(h) + o),
      (n.rotationY = rt(g) + o),
      (n.skewX = _ + o),
      (n.skewY = v + o),
      (n.transformPerspective = y + a),
      (n.zOrigin = parseFloat(c.split(` `)[2]) || (!t && n.zOrigin) || 0) && (r[di] = Wi(c)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = F.force3D),
      (n.renderTransform = n.svg ? Zi : gi ? Xi : Ki),
      (n.uncache = 0),
      n
    );
  },
  Wi = function (e) {
    return (e = e.split(` `))[0] + ` ` + e[1];
  },
  Gi = function (e, t, n) {
    var r = Kt(t);
    return rt(parseFloat(t) + parseFloat(Ai(e, `x`, n + `px`, r))) + r;
  },
  Ki = function (e, t) {
    ((t.z = `0px`), (t.rotationY = t.rotationX = `0deg`), (t.force3D = 0), Xi(e, t));
  },
  qi = `0deg`,
  Ji = `0px`,
  Yi = `) `,
  Xi = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      i = n.yPercent,
      a = n.x,
      o = n.y,
      s = n.z,
      c = n.rotation,
      l = n.rotationY,
      u = n.rotationX,
      d = n.skewX,
      f = n.skewY,
      p = n.scaleX,
      m = n.scaleY,
      h = n.transformPerspective,
      g = n.force3D,
      _ = n.target,
      v = n.zOrigin,
      y = ``,
      b = (g === `auto` && e && e !== 1) || g === !0;
    if (v && (u !== qi || l !== qi)) {
      var x = parseFloat(l) * Wr,
        S = Math.sin(x),
        C = Math.cos(x),
        w;
      ((x = parseFloat(u) * Wr),
        (w = Math.cos(x)),
        (a = Gi(_, a, S * w * -v)),
        (o = Gi(_, o, -Math.sin(x) * -v)),
        (s = Gi(_, s, C * w * -v + v)));
    }
    (h !== Ji && (y += `perspective(` + h + Yi),
      (r || i) && (y += `translate(` + r + `%, ` + i + `%) `),
      (b || a !== Ji || o !== Ji || s !== Ji) &&
        (y +=
          s !== Ji || b
            ? `translate3d(` + a + `, ` + o + `, ` + s + `) `
            : `translate(` + a + `, ` + o + Yi),
      c !== qi && (y += `rotate(` + c + Yi),
      l !== qi && (y += `rotateY(` + l + Yi),
      u !== qi && (y += `rotateX(` + u + Yi),
      (d !== qi || f !== qi) && (y += `skew(` + d + `, ` + f + Yi),
      (p !== 1 || m !== 1) && (y += `scale(` + p + `, ` + m + Yi),
      (_.style[ui] = y || `translate(0, 0)`));
  },
  Zi = function (e, t) {
    var n = t || this,
      r = n.xPercent,
      i = n.yPercent,
      a = n.x,
      o = n.y,
      s = n.rotation,
      c = n.skewX,
      l = n.skewY,
      u = n.scaleX,
      d = n.scaleY,
      f = n.target,
      p = n.xOrigin,
      m = n.yOrigin,
      h = n.xOffset,
      g = n.yOffset,
      _ = n.forceCSS,
      v = parseFloat(a),
      y = parseFloat(o),
      b,
      x,
      S,
      C,
      w;
    ((s = parseFloat(s)),
      (c = parseFloat(c)),
      (l = parseFloat(l)),
      l && ((l = parseFloat(l)), (c += l), (s += l)),
      s || c
        ? ((s *= Wr),
          (c *= Wr),
          (b = Math.cos(s) * u),
          (x = Math.sin(s) * u),
          (S = Math.sin(s - c) * -d),
          (C = Math.cos(s - c) * d),
          c &&
            ((l *= Wr),
            (w = Math.tan(c - l)),
            (w = Math.sqrt(1 + w * w)),
            (S *= w),
            (C *= w),
            l && ((w = Math.tan(l)), (w = Math.sqrt(1 + w * w)), (b *= w), (x *= w))),
          (b = rt(b)),
          (x = rt(x)),
          (S = rt(S)),
          (C = rt(C)))
        : ((b = u), (C = d), (x = S = 0)),
      ((v && !~(a + ``).indexOf(`px`)) || (y && !~(o + ``).indexOf(`px`))) &&
        ((v = Ai(f, `x`, a, `px`)), (y = Ai(f, `y`, o, `px`))),
      (p || m || h || g) &&
        ((v = rt(v + p - (p * b + m * S) + h)), (y = rt(y + m - (p * x + m * C) + g))),
      (r || i) &&
        ((w = f.getBBox()), (v = rt(v + (r / 100) * w.width)), (y = rt(y + (i / 100) * w.height))),
      (w = `matrix(` + b + `,` + x + `,` + S + `,` + C + `,` + v + `,` + y + `)`),
      f.setAttribute(`transform`, w),
      _ && (f.style[ui] = w));
  },
  Qi = function (e, t, n, r, i) {
    var a = 360,
      o = pe(i),
      s = parseFloat(i) * (o && ~i.indexOf(`rad`) ? Ur : 1) - r,
      c = r + s + `deg`,
      l,
      u;
    return (
      o &&
        ((l = i.split(`_`)[1]),
        l === `short` && ((s %= a), s !== s % (a / 2) && (s += s < 0 ? a : -a)),
        l === `cw` && s < 0
          ? (s = ((s + a * Kr) % a) - ~~(s / a) * a)
          : l === `ccw` && s > 0 && (s = ((s - a * Kr) % a) - ~~(s / a) * a)),
      (e._pt = u = new yr(e._pt, t, n, r, s, Qr)),
      (u.e = c),
      (u.u = `deg`),
      e._props.push(n),
      u
    );
  },
  $i = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  ea = function (e, t, n) {
    var r = $i({}, n._gsap),
      i = `perspective,force3D,transformOrigin,svgOrigin`,
      a = n.style,
      o,
      s,
      c,
      l,
      u,
      d,
      f,
      p;
    for (s in (r.svg
      ? ((c = n.getAttribute(`transform`)),
        n.setAttribute(`transform`, ``),
        (a[ui] = t),
        (o = Ui(n, 1)),
        Ei(n, ui),
        n.setAttribute(`transform`, c))
      : ((c = getComputedStyle(n)[ui]), (a[ui] = t), (o = Ui(n, 1)), (a[ui] = c)),
    Hr))
      ((c = r[s]),
        (l = o[s]),
        c !== l &&
          i.indexOf(s) < 0 &&
          ((f = Kt(c)),
          (p = Kt(l)),
          (u = f === p ? parseFloat(c) : Ai(n, s, c, p)),
          (d = parseFloat(l)),
          (e._pt = new yr(e._pt, o, s, u, d - u, Zr)),
          (e._pt.u = p || 0),
          e._props.push(s)));
    $i(o, r);
  };
nt(`padding,margin,Width,Radius`, function (e, t) {
  var n = `Top`,
    r = `Right`,
    i = `Bottom`,
    a = `Left`,
    o = (t < 3 ? [n, r, i, a] : [n + a, n + r, i + r, i + a]).map(function (n) {
      return t < 2 ? e + n : `border` + n + e;
    });
  Ii[t > 1 ? `border` + e : e] = function (e, t, n, r, i) {
    var a, s;
    if (arguments.length < 4)
      return (
        (a = o.map(function (t) {
          return ji(e, t, n);
        })),
        (s = a.join(` `)),
        s.split(a[0]).length === 5 ? a[0] : s
      );
    ((a = (r + ``).split(` `)),
      (s = {}),
      o.forEach(function (e, t) {
        return (s[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
      }),
      e.init(t, s, i));
  };
});
var ta = {
  name: `css`,
  register: xi,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, n, r, i) {
    var a = this._props,
      o = e.style,
      s = n.vars.startAt,
      c,
      l,
      u,
      d,
      f,
      p,
      m,
      h,
      g,
      _,
      v,
      y,
      b,
      x,
      S,
      C,
      w;
    for (m in (Lr || xi(),
    (this.styles = this.styles || hi(e)),
    (C = this.styles.props),
    (this.tween = n),
    t))
      if (m !== `autoRound` && ((l = t[m]), !(Je[m] && Yn(m, t, n, r, e, i)))) {
        if (
          ((f = typeof l),
          (p = Ii[m]),
          f === `function` && ((l = l.call(n, r, e, i)), (f = typeof l)),
          f === `string` && ~l.indexOf(`random(`) && (l = dn(l)),
          p)
        )
          p(this, e, m, l, n) && (S = 1);
        else if (m.substr(0, 2) === `--`)
          ((c = (getComputedStyle(e).getPropertyValue(m) + ``).trim()),
            (l += ``),
            (En.lastIndex = 0),
            En.test(c) ||
              ((h = Kt(c)), (g = Kt(l)), g ? h !== g && (c = Ai(e, m, c, g) + g) : h && (l += h)),
            this.add(o, `setProperty`, c, l, r, i, 0, 0, m),
            a.push(m),
            C.push(m, 0, o[m]));
        else if (f !== `undefined`) {
          if (
            (s && m in s
              ? ((c = typeof s[m] == `function` ? s[m].call(n, r, e, i) : s[m]),
                pe(c) && ~c.indexOf(`random(`) && (c = dn(c)),
                Kt(c + ``) || c === `auto` || (c += F.units[m] || Kt(ji(e, m)) || ``),
                (c + ``).charAt(1) === `=` && (c = ji(e, m)))
              : (c = ji(e, m)),
            (d = parseFloat(c)),
            (_ = f === `string` && l.charAt(1) === `=` && l.substr(0, 2)),
            _ && (l = l.substr(2)),
            (u = parseFloat(l)),
            m in Xr &&
              (m === `autoAlpha` &&
                (d === 1 && ji(e, `visibility`) === `hidden` && u && (d = 0),
                C.push(`visibility`, 0, o.visibility),
                Di(this, o, `visibility`, d ? `inherit` : `hidden`, u ? `inherit` : `hidden`, !u)),
              m !== `scale` &&
                m !== `transform` &&
                ((m = Xr[m]), ~m.indexOf(`,`) && (m = m.split(`,`)[0]))),
            (v = m in Hr),
            v)
          ) {
            if ((this.styles.save(m), (w = l), f === `string` && l.substring(0, 6) === `var(--`)) {
              if (((l = vi(e, l.substring(4, l.indexOf(`)`)))), l.substring(0, 5) === `calc(`)) {
                var T = e.style.perspective;
                ((e.style.perspective = l),
                  (l = vi(e, `perspective`)),
                  T ? (e.style.perspective = T) : Ei(e, `perspective`));
              }
              u = parseFloat(l);
            }
            if (
              (y ||
                ((b = e._gsap),
                (b.renderTransform && !t.parseTransform) || Ui(e, t.parseTransform),
                (x = t.smoothOrigin !== !1 && b.smooth),
                (y = this._pt = new yr(this._pt, o, ui, 0, 1, b.renderTransform, b, 0, -1)),
                (y.dep = 1)),
              m === `scale`)
            )
              ((this._pt = new yr(
                this._pt,
                b,
                `scaleY`,
                b.scaleY,
                (_ ? at(b.scaleY, _ + u) : u) - b.scaleY || 0,
                Zr,
              )),
                (this._pt.u = 0),
                a.push(`scaleY`, m),
                (m += `X`));
            else if (m === `transformOrigin`) {
              (C.push(di, 0, o[di]),
                (l = Pi(l)),
                b.svg
                  ? Hi(e, l, 0, x, 0, this)
                  : ((g = parseFloat(l.split(` `)[2]) || 0),
                    g !== b.zOrigin && Di(this, b, `zOrigin`, b.zOrigin, g),
                    Di(this, o, m, Wi(c), Wi(l))));
              continue;
            } else if (m === `svgOrigin`) {
              Hi(e, l, 1, x, 0, this);
              continue;
            } else if (m in Ri) {
              Qi(this, b, m, d, _ ? at(d, _ + l) : l);
              continue;
            } else if (m === `smoothOrigin`) {
              Di(this, b, `smooth`, b.smooth, l);
              continue;
            } else if (m === `force3D`) {
              b[m] = l;
              continue;
            } else if (m === `transform`) {
              ea(this, l, e);
              continue;
            }
          } else m in o || (m = bi(m) || m);
          if (v || ((u || u === 0) && (d || d === 0) && !Yr.test(l) && m in o))
            ((h = (c + ``).substr((d + ``).length)),
              (u ||= 0),
              (g = Kt(l) || (m in F.units ? F.units[m] : h)),
              h !== g && (d = Ai(e, m, c, g)),
              (this._pt = new yr(
                this._pt,
                v ? b : o,
                m,
                d,
                (_ ? at(d, _ + u) : u) - d,
                !v && (g === `px` || m === `zIndex`) && t.autoRound !== !1 ? ti : Zr,
              )),
              (this._pt.u = g || 0),
              v && w !== l
                ? ((this._pt.b = c), (this._pt.e = w), (this._pt.r = ei))
                : h !== g && g !== `%` && ((this._pt.b = c), (this._pt.r = $r)));
          else if (m in o) Mi.call(this, e, m, c, _ ? _ + l : l);
          else if (m in e) this.add(e, m, c || e[m], _ ? _ + l : l, r, i);
          else if (m !== `parseTransform`) {
            Le(m, l);
            continue;
          }
          (v ||
            (m in o
              ? C.push(m, 0, o[m])
              : typeof e[m] == `function`
                ? C.push(m, 2, e[m]())
                : C.push(m, 1, c || e[m])),
            a.push(m));
        }
      }
    S && vr(this);
  },
  render: function (e, t) {
    if (t.tween._time || !Br()) for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
    else t.styles.revert();
  },
  get: ji,
  aliases: Xr,
  getSetter: function (e, t, n) {
    var r = Xr[t];
    return (
      r && r.indexOf(`,`) < 0 && (t = r),
      t in Hr && t !== di && (e._gsap.x || ji(e, `x`))
        ? n && zr === n
          ? t === `scale`
            ? si
            : oi
          : (zr = n || {}) && (t === `scale` ? ci : li)
        : e.style && !he(e.style[t])
          ? ii
          : ~t.indexOf(`-`)
            ? ai
            : ur(e, t)
    );
  },
  core: { _removeProperty: Ei, _getMatrix: Vi },
};
((Nr.utils.checkPrefix = bi),
  (Nr.core.getStyleSaver = hi),
  (function (e, t, n, r) {
    var i = nt(e + `,` + t + `,` + n, function (e) {
      Hr[e] = 1;
    });
    (nt(t, function (e) {
      ((F.units[e] = `deg`), (Ri[e] = 1));
    }),
      (Xr[i[13]] = e + `,` + t),
      nt(r, function (e) {
        var t = e.split(`:`);
        Xr[t[1]] = i[t[0]];
      }));
  })(
    `x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,
    `rotation,rotationX,rotationY,skewX,skewY`,
    `transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,
    `0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`,
  ),
  nt(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`, function (e) {
    F.units[e] = `px`;
  }),
  Nr.registerPlugin(ta));
var na = Nr.registerPlugin(ta) || Nr;
na.core.Tween;
function ra(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      `value` in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r));
  }
}
function ia(e, t, n) {
  return (t && ra(e.prototype, t), n && ra(e, n), e);
}
var aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va = function () {
    return aa || (typeof window < `u` && (aa = window.gsap) && aa.registerPlugin && aa);
  },
  ya = 1,
  ba = [],
  G = [],
  xa = [],
  Sa = Date.now,
  Ca = function (e, t) {
    return t;
  },
  wa = function () {
    var e = pa.core,
      t = e.bridge || {},
      n = e._scrollers,
      r = e._proxies;
    (n.push.apply(n, G),
      r.push.apply(r, xa),
      (G = n),
      (xa = r),
      (Ca = function (e, n) {
        return t[e](n);
      }));
  },
  Ta = function (e, t) {
    return ~xa.indexOf(e) && xa[xa.indexOf(e) + 1][t];
  },
  Ea = function (e) {
    return !!~ma.indexOf(e);
  },
  Da = function (e, t, n, r, i) {
    return e.addEventListener(t, n, { passive: r !== !1, capture: !!i });
  },
  Oa = function (e, t, n, r) {
    return e.removeEventListener(t, n, !!r);
  },
  ka = `scrollLeft`,
  Aa = `scrollTop`,
  ja = function () {
    return (ha && ha.isPressed) || G.cache++;
  },
  Ma = function (e, t) {
    var n = function n(r) {
      if (r || r === 0) {
        ya && (sa.history.scrollRestoration = `manual`);
        var i = ha && ha.isPressed;
        ((r = n.v = Math.round(r) || (ha && ha.iOS ? 1 : 0)),
          e(r),
          (n.cacheID = G.cache),
          i && Ca(`ss`, r));
      } else (t || G.cache !== n.cacheID || Ca(`ref`)) && ((n.cacheID = G.cache), (n.v = e()));
      return n.v + n.offset;
    };
    return ((n.offset = 0), e && n);
  },
  Na = {
    s: ka,
    p: `left`,
    p2: `Left`,
    os: `right`,
    os2: `Right`,
    d: `width`,
    d2: `Width`,
    a: `x`,
    sc: Ma(function (e) {
      return arguments.length
        ? sa.scrollTo(e, Pa.sc())
        : sa.pageXOffset || ca[ka] || la[ka] || ua[ka] || 0;
    }),
  },
  Pa = {
    s: Aa,
    p: `top`,
    p2: `Top`,
    os: `bottom`,
    os2: `Bottom`,
    d: `height`,
    d2: `Height`,
    a: `y`,
    op: Na,
    sc: Ma(function (e) {
      return arguments.length
        ? sa.scrollTo(Na.sc(), e)
        : sa.pageYOffset || ca[Aa] || la[Aa] || ua[Aa] || 0;
    }),
  },
  Fa = function (e, t) {
    return (
      ((t && t._ctx && t._ctx.selector) || aa.utils.toArray)(e)[0] ||
      (typeof e == `string` && aa.config().nullTargetWarn !== !1
        ? console.warn(`Element not found:`, e)
        : null)
    );
  },
  Ia = function (e, t) {
    for (var n = t.length; n--;) if (t[n] === e || t[n].contains(e)) return !0;
    return !1;
  },
  La = function (e, t) {
    var n = t.s,
      r = t.sc;
    Ea(e) && (e = ca.scrollingElement || la);
    var i = G.indexOf(e),
      a = r === Pa.sc ? 1 : 2;
    (!~i && (i = G.push(e) - 1), G[i + a] || Da(e, `scroll`, ja));
    var o = G[i + a],
      s =
        o ||
        (G[i + a] =
          Ma(Ta(e, n), !0) ||
          (Ea(e)
            ? r
            : Ma(function (t) {
                return arguments.length ? (e[n] = t) : e[n];
              })));
    return ((s.target = e), o || (s.smooth = aa.getProperty(e, `scrollBehavior`) === `smooth`), s);
  },
  Ra = function (e, t, n) {
    var r = e,
      i = e,
      a = Sa(),
      o = a,
      s = t || 50,
      c = Math.max(500, s * 3),
      l = function (e, t) {
        var c = Sa();
        t || c - a > s
          ? ((i = r), (r = e), (o = a), (a = c))
          : n
            ? (r += e)
            : (r = i + ((e - i) / (c - o)) * (a - o));
      };
    return {
      update: l,
      reset: function () {
        ((i = r = n ? 0 : r), (o = a = 0));
      },
      getVelocity: function (e) {
        var t = o,
          s = i,
          u = Sa();
        return (
          (e || e === 0) && e !== r && l(e),
          a === o || u - o > c ? 0 : ((r + (n ? s : -s)) / ((n ? u : a) - t)) * 1e3
        );
      },
    };
  },
  za = function (e, t) {
    return (
      t && !e._gsapAllow && e.cancelable !== !1 && e.preventDefault(),
      e.changedTouches ? e.changedTouches[0] : e
    );
  },
  Ba = function (e) {
    var t = Math.max.apply(Math, e),
      n = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(n) ? t : n;
  },
  Va = function () {
    ((pa = aa.core.globals().ScrollTrigger), pa && pa.core && wa());
  },
  Ha = function (e) {
    return (
      (aa = e || va()),
      !oa &&
        aa &&
        typeof document < `u` &&
        document.body &&
        ((sa = window),
        (ca = document),
        (la = ca.documentElement),
        (ua = ca.body),
        (ma = [sa, ca, la, ua]),
        aa.utils.clamp,
        (_a = aa.core.context || function () {}),
        (fa = `onpointerenter` in ua ? `pointer` : `mouse`),
        (da = Ua.isTouch =
          sa.matchMedia && sa.matchMedia(`(hover: none), (pointer: coarse)`).matches
            ? 1
            : `ontouchstart` in sa || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (ga = Ua.eventTypes =
          (
            `ontouchstart` in la
              ? `touchstart,touchmove,touchcancel,touchend`
              : `onpointerdown` in la
                ? `pointerdown,pointermove,pointercancel,pointerup`
                : `mousedown,mousemove,mouseup,mouseup`
          ).split(`,`)),
        setTimeout(function () {
          return (ya = 0);
        }, 500),
        (oa = 1)),
      pa || Va(),
      oa
    );
  };
((Na.op = Pa), (G.cache = 0));
var Ua = (function () {
  function e(e) {
    this.init(e);
  }
  var t = e.prototype;
  return (
    (t.init = function (e) {
      (oa || Ha(aa) || console.warn(`Please gsap.registerPlugin(Observer)`), pa || Va());
      var t = e.tolerance,
        n = e.dragMinimum,
        r = e.type,
        i = e.target,
        a = e.lineHeight,
        o = e.debounce,
        s = e.preventDefault,
        c = e.onStop,
        l = e.onStopDelay,
        u = e.ignore,
        d = e.wheelSpeed,
        f = e.event,
        p = e.onDragStart,
        m = e.onDragEnd,
        h = e.onDrag,
        g = e.onPress,
        _ = e.onRelease,
        v = e.onRight,
        y = e.onLeft,
        b = e.onUp,
        x = e.onDown,
        S = e.onChangeX,
        C = e.onChangeY,
        w = e.onChange,
        T = e.onToggleX,
        E = e.onToggleY,
        D = e.onHover,
        O = e.onHoverEnd,
        k = e.onMove,
        A = e.ignoreCheck,
        j = e.isNormalizer,
        M = e.onGestureStart,
        ee = e.onGestureEnd,
        N = e.onWheel,
        te = e.onEnable,
        P = e.onDisable,
        ne = e.onClick,
        re = e.scrollSpeed,
        ie = e.capture,
        ae = e.allowClicks,
        F = e.lockAxis,
        I = e.onLockAxis;
      ((this.target = i = Fa(i) || la),
        (this.vars = e),
        (u &&= aa.utils.toArray(u)),
        (t ||= 1e-9),
        (n ||= 0),
        (d ||= 1),
        (re ||= 1),
        (r ||= `wheel,touch,pointer`),
        (o = o !== !1),
        (a ||= parseFloat(sa.getComputedStyle(ua).lineHeight) || 22));
      var L,
        oe,
        R,
        se,
        z,
        ce,
        le,
        B = this,
        ue = 0,
        de = 0,
        fe = e.passive || (!s && e.passive !== !1),
        pe = La(i, Na),
        V = La(i, Pa),
        me = pe(),
        he = V(),
        ge = ~r.indexOf(`touch`) && !~r.indexOf(`pointer`) && ga[0] === `pointerdown`,
        _e = Ea(i),
        H = i.ownerDocument || ca,
        ve = [0, 0, 0],
        ye = [0, 0, 0],
        be = 0,
        xe = function () {
          return (be = Sa());
        },
        Se = function (e, t) {
          return (
            ((B.event = e) && u && Ia(e.target, u)) ||
            (t && ge && e.pointerType !== `touch`) ||
            (A && A(e, t))
          );
        },
        Ce = function () {
          (B._vx.reset(), B._vy.reset(), oe.pause(), c && c(B));
        },
        we = function () {
          var e = (B.deltaX = Ba(ve)),
            n = (B.deltaY = Ba(ye)),
            r = Math.abs(e) >= t,
            i = Math.abs(n) >= t;
          (w && (r || i) && w(B, e, n, ve, ye),
            r &&
              (v && B.deltaX > 0 && v(B),
              y && B.deltaX < 0 && y(B),
              S && S(B),
              T && B.deltaX < 0 != ue < 0 && T(B),
              (ue = B.deltaX),
              (ve[0] = ve[1] = ve[2] = 0)),
            i &&
              (x && B.deltaY > 0 && x(B),
              b && B.deltaY < 0 && b(B),
              C && C(B),
              E && B.deltaY < 0 != de < 0 && E(B),
              (de = B.deltaY),
              (ye[0] = ye[1] = ye[2] = 0)),
            (se || R) && (k && k(B), (R &&= (p && R === 1 && p(B), h && h(B), 0)), (se = !1)),
            ce && !(ce = !1) && I && I(B),
            (z &&= (N(B), !1)),
            (L = 0));
        },
        Te = function (e, t, n) {
          ((ve[n] += e),
            (ye[n] += t),
            B._vx.update(e),
            B._vy.update(t),
            o ? (L ||= requestAnimationFrame(we)) : we());
        },
        Ee = function (e, t) {
          (F && !le && ((B.axis = le = Math.abs(e) > Math.abs(t) ? `x` : `y`), (ce = !0)),
            le !== `y` && ((ve[2] += e), B._vx.update(e, !0)),
            le !== `x` && ((ye[2] += t), B._vy.update(t, !0)),
            o ? (L ||= requestAnimationFrame(we)) : we());
        },
        De = function (e) {
          if (!Se(e, 1)) {
            e = za(e, s);
            var t = e.clientX,
              r = e.clientY,
              i = t - B.x,
              a = r - B.y,
              o = B.isDragging;
            ((B.x = t),
              (B.y = r),
              (o || ((i || a) && (Math.abs(B.startX - t) >= n || Math.abs(B.startY - r) >= n))) &&
                ((R ||= o ? 2 : 1), o || (B.isDragging = !0), Ee(i, a)));
          }
        },
        Oe = (B.onPress = function (e) {
          Se(e, 1) ||
            (e && e.button) ||
            ((B.axis = le = null),
            oe.pause(),
            (B.isPressed = !0),
            (e = za(e)),
            (ue = de = 0),
            (B.startX = B.x = e.clientX),
            (B.startY = B.y = e.clientY),
            B._vx.reset(),
            B._vy.reset(),
            Da(j ? i : H, ga[1], De, fe, !0),
            (B.deltaX = B.deltaY = 0),
            g && g(B));
        }),
        ke = (B.onRelease = function (e) {
          if (!Se(e, 1)) {
            Oa(j ? i : H, ga[1], De, !0);
            var t = !isNaN(B.y - B.startY),
              n = B.isDragging,
              r = n && (Math.abs(B.x - B.startX) > 3 || Math.abs(B.y - B.startY) > 3),
              a = za(e);
            (!r &&
              t &&
              (B._vx.reset(),
              B._vy.reset(),
              s &&
                ae &&
                aa.delayedCall(0.08, function () {
                  if (Sa() - be > 300 && !e.defaultPrevented) {
                    if (e.target.click) e.target.click();
                    else if (H.createEvent) {
                      var t = H.createEvent(`MouseEvents`);
                      (t.initMouseEvent(
                        `click`,
                        !0,
                        !0,
                        sa,
                        1,
                        a.screenX,
                        a.screenY,
                        a.clientX,
                        a.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null,
                      ),
                        e.target.dispatchEvent(t));
                    }
                  }
                })),
              (B.isDragging = B.isGesturing = B.isPressed = !1),
              c && n && !j && oe.restart(!0),
              R && we(),
              m && n && m(B),
              _ && _(B, r));
          }
        }),
        U = function (e) {
          return e.touches && e.touches.length > 1 && (B.isGesturing = !0) && M(e, B.isDragging);
        },
        Ae = function () {
          return (B.isGesturing = !1) || ee(B);
        },
        je = function (e) {
          if (!Se(e)) {
            var t = pe(),
              n = V();
            (Te((t - me) * re, (n - he) * re, 1), (me = t), (he = n), c && oe.restart(!0));
          }
        },
        Me = function (e) {
          if (!Se(e)) {
            ((e = za(e, s)), N && (z = !0));
            var t = (e.deltaMode === 1 ? a : e.deltaMode === 2 ? sa.innerHeight : 1) * d;
            (Te(e.deltaX * t, e.deltaY * t, 0), c && !j && oe.restart(!0));
          }
        },
        Ne = function (e) {
          if (!Se(e)) {
            var t = e.clientX,
              n = e.clientY,
              r = t - B.x,
              i = n - B.y;
            ((B.x = t), (B.y = n), (se = !0), c && oe.restart(!0), (r || i) && Ee(r, i));
          }
        },
        Pe = function (e) {
          ((B.event = e), D(B));
        },
        Fe = function (e) {
          ((B.event = e), O(B));
        },
        Ie = function (e) {
          return Se(e) || (za(e, s) && ne(B));
        };
      ((oe = B._dc = aa.delayedCall(l || 0.25, Ce).pause()),
        (B.deltaX = B.deltaY = 0),
        (B._vx = Ra(0, 50, !0)),
        (B._vy = Ra(0, 50, !0)),
        (B.scrollX = pe),
        (B.scrollY = V),
        (B.isDragging = B.isGesturing = B.isPressed = !1),
        _a(this),
        (B.enable = function (e) {
          return (
            B.isEnabled ||
              (Da(_e ? H : i, `scroll`, ja),
              r.indexOf(`scroll`) >= 0 && Da(_e ? H : i, `scroll`, je, fe, ie),
              r.indexOf(`wheel`) >= 0 && Da(i, `wheel`, Me, fe, ie),
              ((r.indexOf(`touch`) >= 0 && da) || r.indexOf(`pointer`) >= 0) &&
                (Da(i, ga[0], Oe, fe, ie),
                Da(H, ga[2], ke),
                Da(H, ga[3], ke),
                ae && Da(i, `click`, xe, !0, !0),
                ne && Da(i, `click`, Ie),
                M && Da(H, `gesturestart`, U),
                ee && Da(H, `gestureend`, Ae),
                D && Da(i, fa + `enter`, Pe),
                O && Da(i, fa + `leave`, Fe),
                k && Da(i, fa + `move`, Ne)),
              (B.isEnabled = !0),
              (B.isDragging = B.isGesturing = B.isPressed = se = R = !1),
              B._vx.reset(),
              B._vy.reset(),
              (me = pe()),
              (he = V()),
              e && e.type && Oe(e),
              te && te(B)),
            B
          );
        }),
        (B.disable = function () {
          B.isEnabled &&
            (ba.filter(function (e) {
              return e !== B && Ea(e.target);
            }).length || Oa(_e ? H : i, `scroll`, ja),
            B.isPressed && (B._vx.reset(), B._vy.reset(), Oa(j ? i : H, ga[1], De, !0)),
            Oa(_e ? H : i, `scroll`, je, ie),
            Oa(i, `wheel`, Me, ie),
            Oa(i, ga[0], Oe, ie),
            Oa(H, ga[2], ke),
            Oa(H, ga[3], ke),
            Oa(i, `click`, xe, !0),
            Oa(i, `click`, Ie),
            Oa(H, `gesturestart`, U),
            Oa(H, `gestureend`, Ae),
            Oa(i, fa + `enter`, Pe),
            Oa(i, fa + `leave`, Fe),
            Oa(i, fa + `move`, Ne),
            (B.isEnabled = B.isPressed = B.isDragging = !1),
            P && P(B));
        }),
        (B.kill = B.revert =
          function () {
            B.disable();
            var e = ba.indexOf(B);
            (e >= 0 && ba.splice(e, 1), ha === B && (ha = 0));
          }),
        ba.push(B),
        j && Ea(i) && (ha = B),
        B.enable(f));
    }),
    ia(e, [
      {
        key: `velocityX`,
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: `velocityY`,
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    e
  );
})();
((Ua.version = `3.15.0`),
  (Ua.create = function (e) {
    return new Ua(e);
  }),
  (Ua.register = Ha),
  (Ua.getAll = function () {
    return ba.slice();
  }),
  (Ua.getById = function (e) {
    return ba.filter(function (t) {
      return t.vars.id === e;
    })[0];
  }),
  va() && aa.registerPlugin(Ua));
var K,
  Wa,
  q,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  bo,
  xo,
  So,
  Co = 1,
  wo = Date.now,
  To = wo(),
  Eo = 0,
  Do = 0,
  Oo = function (e, t, n) {
    var r = Wo(e) && (e.substr(0, 6) === `clamp(` || e.indexOf(`max`) > -1);
    return ((n[`_` + t + `Clamp`] = r), r ? e.substr(6, e.length - 7) : e);
  },
  ko = function (e, t) {
    return t && (!Wo(e) || e.substr(0, 6) !== `clamp(`) ? `clamp(` + e + `)` : e;
  },
  Ao = function e() {
    return Do && requestAnimationFrame(e);
  },
  jo = function () {
    return (to = 1);
  },
  Mo = function () {
    return (to = 0);
  },
  No = function (e) {
    return e;
  },
  Po = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  Fo = function () {
    return typeof window < `u`;
  },
  Io = function () {
    return K || (Fo() && (K = window.gsap) && K.registerPlugin && K);
  },
  Lo = function (e) {
    return !!~Ja.indexOf(e);
  },
  Ro = function (e) {
    return (e === `Height` ? yo : q[`inner` + e]) || Ka[`client` + e] || qa[`client` + e];
  },
  zo = function (e) {
    return (
      Ta(e, `getBoundingClientRect`) ||
      (Lo(e)
        ? function () {
            return ((dc.width = q.innerWidth), (dc.height = yo), dc);
          }
        : function () {
            return hs(e);
          })
    );
  },
  Bo = function (e, t, n) {
    var r = n.d,
      i = n.d2,
      a = n.a;
    return (a = Ta(e, `getBoundingClientRect`))
      ? function () {
          return a()[r];
        }
      : function () {
          return (t ? Ro(i) : e[`client` + i]) || 0;
        };
  },
  Vo = function (e, t) {
    return !t || ~xa.indexOf(e)
      ? zo(e)
      : function () {
          return dc;
        };
  },
  Ho = function (e, t) {
    var n = t.s,
      r = t.d2,
      i = t.d,
      a = t.a;
    return Math.max(
      0,
      (n = `scroll` + r) && (a = Ta(e, n))
        ? a() - zo(e)()[i]
        : Lo(e)
          ? (Ka[n] || qa[n]) - Ro(r)
          : e[n] - e[`offset` + r],
    );
  },
  Uo = function (e, t) {
    for (var n = 0; n < oo.length; n += 3)
      (!t || ~t.indexOf(oo[n + 1])) && e(oo[n], oo[n + 1], oo[n + 2]);
  },
  Wo = function (e) {
    return typeof e == `string`;
  },
  Go = function (e) {
    return typeof e == `function`;
  },
  Ko = function (e) {
    return typeof e == `number`;
  },
  qo = function (e) {
    return typeof e == `object`;
  },
  Jo = function (e, t, n) {
    return e && e.progress(+!t) && n && e.pause();
  },
  Yo = function (e, t, n) {
    if (e.enabled) {
      var r = e._ctx
        ? e._ctx.add(function () {
            return t(e, n);
          })
        : t(e, n);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  },
  Xo = Math.abs,
  Zo = `left`,
  Qo = `top`,
  $o = `right`,
  es = `bottom`,
  ts = `width`,
  ns = `height`,
  rs = `Right`,
  is = `Left`,
  as = `Top`,
  os = `Bottom`,
  ss = `padding`,
  cs = `margin`,
  ls = `Width`,
  us = `Height`,
  ds = `px`,
  fs = function (e) {
    return q.getComputedStyle(e.nodeType === Node.DOCUMENT_NODE ? e.scrollingElement : e);
  },
  ps = function (e) {
    var t = fs(e).position;
    e.style.position = t === `absolute` || t === `fixed` ? t : `relative`;
  },
  ms = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  hs = function (e, t) {
    var n =
        t &&
        fs(e)[no] !== `matrix(1, 0, 0, 1, 0, 0)` &&
        K.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      r = e.getBoundingClientRect
        ? e.getBoundingClientRect()
        : e.scrollingElement.getBoundingClientRect();
    return (n && n.progress(0).kill(), r);
  },
  gs = function (e, t) {
    var n = t.d2;
    return e[`offset` + n] || e[`client` + n] || 0;
  },
  _s = function (e) {
    var t = [],
      n = e.labels,
      r = e.duration(),
      i;
    for (i in n) t.push(n[i] / r);
    return t;
  },
  vs = function (e) {
    return function (t) {
      return K.utils.snap(_s(e), t);
    };
  },
  ys = function (e) {
    var t = K.utils.snap(e),
      n =
        Array.isArray(e) &&
        e.slice(0).sort(function (e, t) {
          return e - t;
        });
    return n
      ? function (e, r, i) {
          i === void 0 && (i = 0.001);
          var a;
          if (!r) return t(e);
          if (r > 0) {
            for (e -= i, a = 0; a < n.length; a++) if (n[a] >= e) return n[a];
            return n[a - 1];
          }
          for (a = n.length, e += i; a--;) if (n[a] <= e) return n[a];
          return n[0];
        }
      : function (n, r, i) {
          i === void 0 && (i = 0.001);
          var a = t(n);
          return !r || Math.abs(a - n) < i || a - n < 0 == r < 0 ? a : t(r < 0 ? n - e : n + e);
        };
  },
  bs = function (e) {
    return function (t, n) {
      return ys(_s(e))(t, n.direction);
    };
  },
  xs = function (e, t, n, r) {
    return n.split(`,`).forEach(function (n) {
      return e(t, n, r);
    });
  },
  Ss = function (e, t, n, r, i) {
    return e.addEventListener(t, n, { passive: !r, capture: !!i });
  },
  Cs = function (e, t, n, r) {
    return e.removeEventListener(t, n, !!r);
  },
  ws = function (e, t, n) {
    ((n &&= n.wheelHandler), n && (e(t, `wheel`, n), e(t, `touchmove`, n)));
  },
  Ts = { startColor: `green`, endColor: `red`, indent: 0, fontSize: `16px`, fontWeight: `normal` },
  Es = { toggleActions: `play`, anticipatePin: 0 },
  Ds = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Os = function (e, t) {
    if (Wo(e)) {
      var n = e.indexOf(`=`),
        r = ~n ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1)) : 0;
      (~n && (e.indexOf(`%`) > n && (r *= t / 100), (e = e.substr(0, n - 1))),
        (e =
          r +
          (e in Ds
            ? Ds[e] * t
            : ~e.indexOf(`%`)
              ? (parseFloat(e) * t) / 100
              : parseFloat(e) || 0)));
    }
    return e;
  },
  ks = function (e, t, n, r, i, a, o, s) {
    var c = i.startColor,
      l = i.endColor,
      u = i.fontSize,
      d = i.indent,
      f = i.fontWeight,
      p = Ga.createElement(`div`),
      m = Lo(n) || Ta(n, `pinType`) === `fixed`,
      h = e.indexOf(`scroller`) !== -1,
      g = m ? qa : n.tagName === `IFRAME` ? n.contentDocument.body : n,
      _ = e.indexOf(`start`) !== -1,
      v = _ ? c : l,
      y =
        `border-color:` +
        v +
        `;font-size:` +
        u +
        `;color:` +
        v +
        `;font-weight:` +
        f +
        `;pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;`;
    return (
      (y += `position:` + ((h || s) && m ? `fixed;` : `absolute;`)),
      (h || s || !m) && (y += (r === Pa ? $o : es) + `:` + (a + parseFloat(d)) + `px;`),
      o && (y += `box-sizing:border-box;text-align:left;width:` + o.offsetWidth + `px;`),
      (p._isStart = _),
      p.setAttribute(`class`, `gsap-marker-` + e + (t ? ` marker-` + t : ``)),
      (p.style.cssText = y),
      (p.innerText = t || t === 0 ? e + `-` + t : e),
      g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
      (p._offset = p[`offset` + r.op.d2]),
      As(p, 0, r, _),
      p
    );
  },
  As = function (e, t, n, r) {
    var i = { display: `block` },
      a = n[r ? `os2` : `p2`],
      o = n[r ? `p2` : `os2`];
    ((e._isFlipped = r),
      (i[n.a + `Percent`] = r ? -100 : 0),
      (i[n.a] = r ? `1px` : 0),
      (i[`border` + a + ls] = 1),
      (i[`border` + o + ls] = 0),
      (i[n.p] = t + `px`),
      K.set(e, i));
  },
  J = [],
  js = {},
  Ms,
  Ns = function () {
    return wo() - Eo > 34 && (Ms ||= requestAnimationFrame(nc));
  },
  Ps = function () {
    (!uo || !uo.isPressed || uo.startX > qa.clientWidth) &&
      (G.cache++,
      uo ? (Ms ||= requestAnimationFrame(nc)) : nc(),
      Eo || Bs(`scrollStart`),
      (Eo = wo()));
  },
  Fs = function () {
    ((mo = q.innerWidth), (po = q.innerHeight));
  },
  Is = function (e) {
    (G.cache++,
      (e === !0 ||
        (!eo &&
          !lo &&
          !Ga.fullscreenElement &&
          !Ga.webkitFullscreenElement &&
          (!fo || mo !== q.innerWidth || Math.abs(q.innerHeight - po) > q.innerHeight * 0.25))) &&
        Ya.restart(!0));
  },
  Ls = {},
  Rs = [],
  zs = function e() {
    return Cs(Y, `scrollEnd`, e) || Qs(!0);
  },
  Bs = function (e) {
    return (
      (Ls[e] &&
        Ls[e].map(function (e) {
          return e();
        })) ||
      Rs
    );
  },
  Vs = [],
  Hs = function (e) {
    for (var t = 0; t < Vs.length; t += 5)
      (!e || (Vs[t + 4] && Vs[t + 4].query === e)) &&
        ((Vs[t].style.cssText = Vs[t + 1]),
        Vs[t].getBBox && Vs[t].setAttribute(`transform`, Vs[t + 2] || ``),
        (Vs[t + 3].uncache = 1));
  },
  Us = function () {
    return G.forEach(function (e) {
      return Go(e) && ++e.cacheID && (e.rec = e());
    });
  },
  Ws = function (e, t) {
    var n;
    for (ro = 0; ro < J.length; ro++)
      ((n = J[ro]), n && (!t || n._ctx === t) && (e ? n.kill(1) : n.revert(!0, !0)));
    ((bo = !0), t && Hs(t), t || Bs(`revert`));
  },
  Gs = function (e, t) {
    (G.cache++,
      (t || !Ks) &&
        G.forEach(function (e) {
          return Go(e) && e.cacheID++ && (e.rec = 0);
        }),
      Wo(e) && (q.history.scrollRestoration = _o = e));
  },
  Ks,
  qs = 0,
  Js,
  Ys = function () {
    if (Js !== qs) {
      var e = (Js = qs);
      requestAnimationFrame(function () {
        return e === qs && Qs(!0);
      });
    }
  },
  Xs = function () {
    (qa.appendChild(vo), (yo = (!uo && vo.offsetHeight) || q.innerHeight), qa.removeChild(vo));
  },
  Zs = function (e) {
    return Xa(
      `.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end`,
    ).forEach(function (t) {
      return (t.style.display = e ? `none` : `block`);
    });
  },
  Qs = function (e, t) {
    if (((Ka = Ga.documentElement), (qa = Ga.body), (Ja = [q, Ga, Ka, qa]), Eo && !e && !bo)) {
      Ss(Y, `scrollEnd`, zs);
      return;
    }
    (Xs(), (Ks = Y.isRefreshing = !0), bo || Us());
    var n = Bs(`refreshInit`);
    (so && Y.sort(),
      t || Ws(),
      G.forEach(function (e) {
        Go(e) && (e.smooth && (e.target.style.scrollBehavior = `auto`), e(0));
      }),
      J.slice(0).forEach(function (e) {
        return e.refresh();
      }),
      (bo = !1),
      J.forEach(function (e) {
        if (e._subPinOffset && e.pin) {
          var t = e.vars.horizontal ? `offsetWidth` : `offsetHeight`,
            n = e.pin[t];
          (e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - n), e.refresh());
        }
      }),
      (xo = 1),
      Zs(!0),
      J.forEach(function (e) {
        var t = Ho(e.scroller, e._dir),
          n = e.vars.end === `max` || (e._endClamp && e.end > t),
          r = e._startClamp && e.start >= t;
        (n || r) &&
          e.setPositions(r ? t - 1 : e.start, n ? Math.max(r ? t : e.start + 1, t) : e.end, !0);
      }),
      Zs(!1),
      (xo = 0),
      n.forEach(function (e) {
        return e && e.render && e.render(-1);
      }),
      G.forEach(function (e) {
        Go(e) &&
          (e.smooth &&
            requestAnimationFrame(function () {
              return (e.target.style.scrollBehavior = `smooth`);
            }),
          e.rec && e(e.rec));
      }),
      Gs(_o, 1),
      Ya.pause(),
      qs++,
      (Ks = 2),
      nc(2),
      J.forEach(function (e) {
        return Go(e.vars.onRefresh) && e.vars.onRefresh(e);
      }),
      (Ks = Y.isRefreshing = !1),
      Bs(`refresh`));
  },
  $s = 0,
  ec = 1,
  tc,
  nc = function (e) {
    if (e === 2 || (!Ks && !bo)) {
      ((Y.isUpdating = !0), tc && tc.update(0));
      var t = J.length,
        n = wo(),
        r = n - To >= 50,
        i = t && J[0].scroll();
      if (
        ((ec = $s > i ? -1 : 1),
        Ks || ($s = i),
        r && (Eo && !to && n - Eo > 200 && ((Eo = 0), Bs(`scrollEnd`)), (Qa = To), (To = n)),
        ec < 0)
      ) {
        for (ro = t; ro-- > 0;) J[ro] && J[ro].update(0, r);
        ec = 1;
      } else for (ro = 0; ro < t; ro++) J[ro] && J[ro].update(0, r);
      Y.isUpdating = !1;
    }
    Ms = 0;
  },
  rc = [
    Zo,
    Qo,
    es,
    $o,
    cs + os,
    cs + rs,
    cs + as,
    cs + is,
    `display`,
    `flexShrink`,
    `float`,
    `zIndex`,
    `gridColumnStart`,
    `gridColumnEnd`,
    `gridRowStart`,
    `gridRowEnd`,
    `gridArea`,
    `justifySelf`,
    `alignSelf`,
    `placeSelf`,
    `order`,
  ],
  ic = rc.concat([
    ts,
    ns,
    `boxSizing`,
    `max` + ls,
    `max` + us,
    `position`,
    cs,
    ss,
    ss + as,
    ss + rs,
    ss + os,
    ss + is,
  ]),
  ac = function (e, t, n) {
    cc(n);
    var r = e._gsap;
    if (r.spacerIsNative) cc(r.spacerState);
    else if (e._gsap.swappedIn) {
      var i = t.parentNode;
      i && (i.insertBefore(e, t), i.removeChild(t));
    }
    e._gsap.swappedIn = !1;
  },
  oc = function (e, t, n, r) {
    if (!e._gsap.swappedIn) {
      for (var i = rc.length, a = t.style, o = e.style, s; i--;) ((s = rc[i]), (a[s] = n[s]));
      ((a.position = n.position === `absolute` ? `absolute` : `relative`),
        n.display === `inline` && (a.display = `inline-block`),
        (o[es] = o[$o] = `auto`),
        (a.flexBasis = n.flexBasis || `auto`),
        (a.overflow = `visible`),
        (a.boxSizing = `border-box`),
        (a[ts] = gs(e, Na) + ds),
        (a[ns] = gs(e, Pa) + ds),
        (a[ss] = o[cs] = o[Qo] = o[Zo] = `0`),
        cc(r),
        (o[ts] = o[`max` + ls] = n[ts]),
        (o[ns] = o[`max` + us] = n[ns]),
        (o[ss] = n[ss]),
        e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0));
    }
  },
  sc = /([A-Z])/g,
  cc = function (e) {
    if (e) {
      var t = e.t.style,
        n = e.length,
        r = 0,
        i,
        a;
      for ((e.t._gsap || K.core.getCache(e.t)).uncache = 1; r < n; r += 2)
        ((a = e[r + 1]),
          (i = e[r]),
          a ? (t[i] = a) : t[i] && t.removeProperty(i.replace(sc, `-$1`).toLowerCase()));
    }
  },
  lc = function (e) {
    for (var t = ic.length, n = e.style, r = [], i = 0; i < t; i++) r.push(ic[i], n[ic[i]]);
    return ((r.t = e), r);
  },
  uc = function (e, t, n) {
    for (var r = [], i = e.length, a = n ? 8 : 0, o; a < i; a += 2)
      ((o = e[a]), r.push(o, o in t ? t[o] : e[a + 1]));
    return ((r.t = e.t), r);
  },
  dc = { left: 0, top: 0 },
  fc = function (e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
    (Go(e) && (e = e(s)),
      Wo(e) &&
        e.substr(0, 3) === `max` &&
        (e = d + (e.charAt(4) === `=` ? Os(`0` + e.substr(3), n) : 0)));
    var m = f ? f.time() : 0,
      h,
      g,
      _;
    if ((f && f.seek(0), isNaN(e) || (e = +e), Ko(e)))
      (f && (e = K.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, d, e)),
        o && As(o, n, r, !0));
    else {
      Go(t) && (t = t(s));
      var v = (e || `0`).split(` `),
        y,
        b,
        x,
        S;
      ((_ = Fa(t, s) || qa),
        (y = hs(_) || {}),
        (!y || (!y.left && !y.top)) &&
          fs(_).display === `none` &&
          ((S = _.style.display),
          (_.style.display = `block`),
          (y = hs(_)),
          S ? (_.style.display = S) : _.style.removeProperty(`display`)),
        (b = Os(v[0], y[r.d])),
        (x = Os(v[1] || `0`, n)),
        (e = y[r.p] - c[r.p] - l + b + i - x),
        o && As(o, x, r, n - x < 20 || (o._isStart && x > 20)),
        (n -= n - x));
    }
    if ((p && ((s[p] = e || -0.001), e < 0 && (e = 0)), a)) {
      var C = e + n,
        w = a._isStart;
      ((h = `scroll` + r.d2),
        As(
          a,
          C,
          r,
          (w && C > 20) || (!w && (u ? Math.max(qa[h], Ka[h]) : a.parentNode[h]) <= C + 1),
        ),
        u && ((c = hs(o)), u && (a.style[r.op.p] = c[r.op.p] - r.op.m - a._offset + ds)));
    }
    return (
      f &&
        _ &&
        ((h = hs(_)),
        f.seek(d),
        (g = hs(_)),
        (f._caScrollDist = h[r.p] - g[r.p]),
        (e = (e / f._caScrollDist) * d)),
      f && f.seek(m),
      f ? e : Math.round(e)
    );
  },
  pc = /(webkit|moz|length|cssText|inset)/i,
  mc = function (e, t, n, r) {
    if (e.parentNode !== t) {
      var i = e.style,
        a,
        o;
      if (t === qa) {
        for (a in ((e._stOrig = i.cssText), (o = fs(e)), o))
          !+a && !pc.test(a) && o[a] && typeof i[a] == `string` && a !== `0` && (i[a] = o[a]);
        ((i.top = n), (i.left = r));
      } else i.cssText = e._stOrig;
      ((K.core.getCache(e).uncache = 1), t.appendChild(e));
    }
  },
  hc = function (e, t, n) {
    var r = t,
      i = r;
    return function (t) {
      var a = Math.round(e());
      return (
        a !== r && a !== i && Math.abs(a - r) > 3 && Math.abs(a - i) > 3 && ((t = a), n && n()),
        (i = r),
        (r = Math.round(t)),
        r
      );
    };
  },
  gc = function (e, t, n) {
    var r = {};
    ((r[t.p] = `+=` + n), K.set(e, r));
  },
  _c = function (e, t) {
    var n = La(e, t),
      r = `_scroll` + t.p2,
      i = function t(i, a, o, s, c) {
        var l = t.tween,
          u = a.onComplete,
          d = {};
        o ||= n();
        var f = hc(n, o, function () {
          (l.kill(), (t.tween = 0));
        });
        return (
          (c = (s && c) || 0),
          (s ||= i - o),
          l && l.kill(),
          (a[r] = i),
          (a.inherit = !1),
          (a.modifiers = d),
          (d[r] = function () {
            return f(o + s * l.ratio + c * l.ratio * l.ratio);
          }),
          (a.onUpdate = function () {
            (G.cache++, t.tween && nc());
          }),
          (a.onComplete = function () {
            ((t.tween = 0), u && u.call(l));
          }),
          (l = t.tween = K.to(e, a)),
          l
        );
      };
    return (
      (e[r] = n),
      (n.wheelHandler = function () {
        return i.tween && i.tween.kill() && (i.tween = 0);
      }),
      Ss(e, `wheel`, n.wheelHandler),
      Y.isTouch && Ss(e, `touchmove`, n.wheelHandler),
      i
    );
  },
  Y = (function () {
    function e(t, n) {
      (Wa || e.register(K) || console.warn(`Please gsap.registerPlugin(ScrollTrigger)`),
        go(this),
        this.init(t, n));
    }
    var t = e.prototype;
    return (
      (t.init = function (t, n) {
        if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), !Do)) {
          this.update = this.refresh = this.kill = No;
          return;
        }
        t = ms(Wo(t) || Ko(t) || t.nodeType ? { trigger: t } : t, Es);
        var r = t,
          i = r.onUpdate,
          a = r.toggleClass,
          o = r.id,
          s = r.onToggle,
          c = r.onRefresh,
          l = r.scrub,
          u = r.trigger,
          d = r.pin,
          f = r.pinSpacing,
          p = r.invalidateOnRefresh,
          m = r.anticipatePin,
          h = r.onScrubComplete,
          g = r.onSnapComplete,
          _ = r.once,
          v = r.snap,
          y = r.pinReparent,
          b = r.pinSpacer,
          x = r.containerAnimation,
          S = r.fastScrollEnd,
          C = r.preventOverlaps,
          w = t.horizontal || (t.containerAnimation && t.horizontal !== !1) ? Na : Pa,
          T = !l && l !== 0,
          E = Fa(t.scroller || q),
          D = K.core.getCache(E),
          O = Lo(E),
          k = (`pinType` in t ? t.pinType : Ta(E, `pinType`) || (O && `fixed`)) === `fixed`,
          A = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
          j = T && t.toggleActions.split(` `),
          M = `markers` in t ? t.markers : Es.markers,
          ee = O ? 0 : parseFloat(fs(E)[`border` + w.p2 + ls]) || 0,
          N = this,
          te =
            t.onRefreshInit &&
            function () {
              return t.onRefreshInit(N);
            },
          P = Bo(E, O, w),
          ne = Vo(E, O),
          re = 0,
          ie = 0,
          ae = 0,
          F = La(E, w),
          I,
          L,
          oe,
          R,
          se,
          z,
          ce,
          le,
          B,
          ue,
          de,
          fe,
          pe,
          V,
          me,
          he,
          ge,
          _e,
          H,
          ve,
          ye,
          be,
          xe,
          Se,
          Ce,
          we,
          Te,
          Ee,
          De,
          Oe,
          ke,
          U,
          Ae,
          je,
          Me,
          Ne,
          Pe,
          Fe,
          Ie;
        if (
          ((N._startClamp = N._endClamp = !1),
          (N._dir = w),
          (m *= 45),
          (N.scroller = E),
          (N.scroll = x ? x.time.bind(x) : F),
          (R = F()),
          (N.vars = t),
          (n ||= t.animation),
          `refreshPriority` in t && ((so = 1), t.refreshPriority === -9999 && (tc = N)),
          (D.tweenScroll = D.tweenScroll || { top: _c(E, Pa), left: _c(E, Na) }),
          (N.tweenTo = I = D.tweenScroll[w.p]),
          (N.scrubDuration = function (e) {
            ((Ae = Ko(e) && e),
              Ae
                ? U
                  ? U.duration(e)
                  : (U = K.to(n, {
                      ease: `expo`,
                      totalProgress: `+=0`,
                      inherit: !1,
                      duration: Ae,
                      paused: !0,
                      onComplete: function () {
                        return h && h(N);
                      },
                    }))
                : (U && U.progress(1).kill(), (U = 0)));
          }),
          n &&
            ((n.vars.lazy = !1),
            (n._initted && !N.isReverted) ||
              (n.vars.immediateRender !== !1 &&
                t.immediateRender !== !1 &&
                n.duration() &&
                n.render(0, !0, !0)),
            (N.animation = n.pause()),
            (n.scrollTrigger = N),
            N.scrubDuration(l),
            (Oe = 0),
            (o ||= n.vars.id)),
          v &&
            ((!qo(v) || v.push) && (v = { snapTo: v }),
            `scrollBehavior` in qa.style && K.set(O ? [qa, Ka] : E, { scrollBehavior: `auto` }),
            G.forEach(function (e) {
              return Go(e) && e.target === (O ? Ga.scrollingElement || Ka : E) && (e.smooth = !1);
            }),
            (oe = Go(v.snapTo)
              ? v.snapTo
              : v.snapTo === `labels`
                ? vs(n)
                : v.snapTo === `labelsDirectional`
                  ? bs(n)
                  : v.directional === !1
                    ? K.utils.snap(v.snapTo)
                    : function (e, t) {
                        return ys(v.snapTo)(e, wo() - ie < 500 ? 0 : t.direction);
                      }),
            (je = v.duration || { min: 0.1, max: 2 }),
            (je = qo(je) ? Za(je.min, je.max) : Za(je, je)),
            (Me = K.delayedCall(v.delay || Ae / 2 || 0.1, function () {
              var e = F(),
                t = wo() - ie < 500,
                r = I.tween;
              if ((t || Math.abs(N.getVelocity()) < 10) && !r && !to && re !== e) {
                var i = (e - z) / V,
                  a = n && !T ? n.totalProgress() : i,
                  o = t ? 0 : ((a - ke) / (wo() - Qa)) * 1e3 || 0,
                  s = K.utils.clamp(-i, 1 - i, (Xo(o / 2) * o) / 0.185),
                  c = i + (v.inertia === !1 ? 0 : s),
                  l,
                  u,
                  d = v,
                  f = d.onStart,
                  p = d.onInterrupt,
                  m = d.onComplete;
                if (
                  ((l = oe(c, N)),
                  Ko(l) || (l = c),
                  (u = Math.max(0, Math.round(z + l * V))),
                  e <= ce && e >= z && u !== e)
                ) {
                  if (r && !r._initted && r.data <= Xo(u - e)) return;
                  (v.inertia === !1 && (s = l - i),
                    I(
                      u,
                      {
                        duration: je(Xo((Math.max(Xo(c - a), Xo(l - a)) * 0.185) / o / 0.05 || 0)),
                        ease: v.ease || `power3`,
                        data: Xo(u - e),
                        onInterrupt: function () {
                          return Me.restart(!0) && p && Yo(N, p);
                        },
                        onComplete: function () {
                          (N.update(),
                            (re = F()),
                            n &&
                              !T &&
                              (U
                                ? U.resetTo(`totalProgress`, l, n._tTime / n._tDur)
                                : n.progress(l)),
                            (Oe = ke = n && !T ? n.totalProgress() : N.progress),
                            g && g(N),
                            m && Yo(N, m));
                        },
                      },
                      e,
                      s * V,
                      u - e - s * V,
                    ),
                    f && Yo(N, f, I.tween));
                }
              } else N.isActive && re !== e && Me.restart(!0);
            }).pause())),
          o && (js[o] = N),
          (u = N.trigger = Fa(u || (d !== !0 && d))),
          (Ie = u && u._gsap && u._gsap.stRevert),
          (Ie &&= Ie(N)),
          (d = d === !0 ? u : Fa(d)),
          Wo(a) && (a = { targets: u, className: a }),
          d &&
            (f === !1 ||
              f === cs ||
              (f =
                !f && d.parentNode && d.parentNode.style && fs(d.parentNode).display === `flex`
                  ? !1
                  : ss),
            (N.pin = d),
            (L = K.core.getCache(d)),
            L.spacer
              ? (me = L.pinState)
              : (b &&
                  ((b = Fa(b)),
                  b && !b.nodeType && (b = b.current || b.nativeElement),
                  (L.spacerIsNative = !!b),
                  b && (L.spacerState = lc(b))),
                (L.spacer = _e = b || Ga.createElement(`div`)),
                _e.classList.add(`pin-spacer`),
                o && _e.classList.add(`pin-spacer-` + o),
                (L.pinState = me = lc(d))),
            t.force3D !== !1 && K.set(d, { force3D: !0 }),
            (N.spacer = _e = L.spacer),
            (De = fs(d)),
            (Se = De[f + w.os2]),
            (ve = K.getProperty(d)),
            (ye = K.quickSetter(d, w.a, ds)),
            oc(d, _e, De),
            (ge = lc(d))),
          M)
        ) {
          ((fe = qo(M) ? ms(M, Ts) : Ts),
            (ue = ks(`scroller-start`, o, E, w, fe, 0)),
            (de = ks(`scroller-end`, o, E, w, fe, 0, ue)),
            (H = ue[`offset` + w.op.d2]));
          var Le = Fa(Ta(E, `content`) || E);
          ((le = this.markerStart = ks(`start`, o, Le, w, fe, H, 0, x)),
            (B = this.markerEnd = ks(`end`, o, Le, w, fe, H, 0, x)),
            x && (Fe = K.quickSetter([le, B], w.a, ds)),
            !k &&
              !(xa.length && Ta(E, `fixedMarkers`) === !0) &&
              (ps(O ? qa : E),
              K.set([ue, de], { force3D: !0 }),
              (we = K.quickSetter(ue, w.a, ds)),
              (Ee = K.quickSetter(de, w.a, ds))));
        }
        if (x) {
          var Re = x.vars.onUpdate,
            ze = x.vars.onUpdateParams;
          x.eventCallback(`onUpdate`, function () {
            (N.update(0, 0, 1), Re && Re.apply(x, ze || []));
          });
        }
        if (
          ((N.previous = function () {
            return J[J.indexOf(N) - 1];
          }),
          (N.next = function () {
            return J[J.indexOf(N) + 1];
          }),
          (N.revert = function (e, t) {
            if (!t) return N.kill(!0);
            var r = e !== !1 || !N.enabled,
              i = eo;
            r !== N.isReverted &&
              (r &&
                ((Ne = Math.max(F(), N.scroll.rec || 0)),
                (ae = N.progress),
                (Pe = n && n.progress())),
              le &&
                [le, B, ue, de].forEach(function (e) {
                  return (e.style.display = r ? `none` : `block`);
                }),
              r && ((eo = N), N.update(r)),
              d && (!y || !N.isActive) && (r ? ac(d, _e, me) : oc(d, _e, fs(d), Ce)),
              r || N.update(r),
              (eo = i),
              (N.isReverted = r));
          }),
          (N.refresh = function (r, i, a, o) {
            if (!((eo || !N.enabled) && !i)) {
              if (d && r && Eo) {
                Ss(e, `scrollEnd`, zs);
                return;
              }
              (!Ks && te && te(N),
                (eo = N),
                I.tween && !a && (I.tween.kill(), (I.tween = 0)),
                U && U.pause(),
                p &&
                  n &&
                  (n.revert({ kill: !1 }).invalidate(),
                  n.getChildren
                    ? n.getChildren(!0, !0, !1).forEach(function (e) {
                        return e.vars.immediateRender && e.render(0, !0, !0);
                      })
                    : n.vars.immediateRender && n.render(0, !0, !0)),
                N.isReverted || N.revert(!0, !0),
                (N._subPinOffset = !1));
              var s = P(),
                l = ne(),
                m = x ? x.duration() : Ho(E, w),
                h = V <= 0.01 || !V,
                g = 0,
                _ = o || 0,
                v = qo(a) ? a.end : t.end,
                b = t.endTrigger || u,
                S = qo(a) ? a.start : t.start || (t.start === 0 || !u ? 0 : d ? `0 0` : `0 100%`),
                C = (N.pinnedContainer = t.pinnedContainer && Fa(t.pinnedContainer, N)),
                D = (u && Math.max(0, J.indexOf(N))) || 0,
                A = D,
                j,
                L,
                oe,
                fe,
                H,
                ye,
                Se,
                we,
                Ee,
                De,
                Oe,
                ke,
                Ae;
              for (
                M && qo(a) && ((ke = K.getProperty(ue, w.p)), (Ae = K.getProperty(de, w.p)));
                A-- > 0;
              )
                ((ye = J[A]),
                  ye.end || ye.refresh(0, 1) || (eo = N),
                  (Se = ye.pin),
                  Se &&
                    (Se === u || Se === d || Se === C) &&
                    !ye.isReverted &&
                    ((De ||= []), De.unshift(ye), ye.revert(!0, !0)),
                  ye !== J[A] && (D--, A--));
              for (
                Go(S) && (S = S(N)),
                  S = Oo(S, `start`, N),
                  z =
                    fc(
                      S,
                      u,
                      s,
                      w,
                      F(),
                      le,
                      ue,
                      N,
                      l,
                      ee,
                      k,
                      m,
                      x,
                      N._startClamp && `_startClamp`,
                    ) || (d ? -0.001 : 0),
                  Go(v) && (v = v(N)),
                  Wo(v) &&
                    !v.indexOf(`+=`) &&
                    (~v.indexOf(` `)
                      ? (v = (Wo(S) ? S.split(` `)[0] : ``) + v)
                      : ((g = Os(v.substr(2), s)),
                        (v = Wo(S)
                          ? S
                          : (x
                              ? K.utils.mapRange(
                                  0,
                                  x.duration(),
                                  x.scrollTrigger.start,
                                  x.scrollTrigger.end,
                                  z,
                                )
                              : z) + g),
                        (b = u))),
                  v = Oo(v, `end`, N),
                  ce =
                    Math.max(
                      z,
                      fc(
                        v || (b ? `100% 0` : m),
                        b,
                        s,
                        w,
                        F() + g,
                        B,
                        de,
                        N,
                        l,
                        ee,
                        k,
                        m,
                        x,
                        N._endClamp && `_endClamp`,
                      ),
                    ) || -0.001,
                  g = 0,
                  A = D;
                A--;
              )
                ((ye = J[A] || {}),
                  (Se = ye.pin),
                  Se &&
                    ye.start - ye._pinPush <= z &&
                    !x &&
                    ye.end > 0 &&
                    ((j = ye.end - (N._startClamp ? Math.max(0, ye.start) : ye.start)),
                    ((Se === u && ye.start - ye._pinPush < z) || Se === C) &&
                      isNaN(S) &&
                      (g += j * (1 - ye.progress)),
                    Se === d && (_ += j)));
              if (
                ((z += g),
                (ce += g),
                N._startClamp && (N._startClamp += g),
                N._endClamp && !Ks && ((N._endClamp = ce || -0.001), (ce = Math.min(ce, Ho(E, w)))),
                (V = ce - z || ((z -= 0.01) && 0.001)),
                h && (ae = K.utils.clamp(0, 1, K.utils.normalize(z, ce, Ne))),
                (N._pinPush = _),
                le &&
                  g &&
                  ((j = {}), (j[w.a] = `+=` + g), C && (j[w.p] = `-=` + F()), K.set([le, B], j)),
                d && !(xo && N.end >= Ho(E, w)))
              )
                ((j = fs(d)),
                  (fe = w === Pa),
                  (oe = F()),
                  (be = parseFloat(ve(w.a)) + _),
                  !m &&
                    ce > 1 &&
                    ((Oe = (O ? Ga.scrollingElement || Ka : E).style),
                    (Oe = { style: Oe, value: Oe[`overflow` + w.a.toUpperCase()] }),
                    O &&
                      fs(qa)[`overflow` + w.a.toUpperCase()] !== `scroll` &&
                      (Oe.style[`overflow` + w.a.toUpperCase()] = `scroll`)),
                  oc(d, _e, j),
                  (ge = lc(d)),
                  (L = hs(d, !0)),
                  (we = k && La(E, fe ? Na : Pa)()),
                  f
                    ? ((Ce = [f + w.os2, V + _ + ds]),
                      (Ce.t = _e),
                      (A = f === ss ? gs(d, w) + V + _ : 0),
                      A &&
                        (Ce.push(w.d, A + ds),
                        _e.style.flexBasis !== `auto` && (_e.style.flexBasis = A + ds)),
                      cc(Ce),
                      C &&
                        J.forEach(function (e) {
                          e.pin === C && e.vars.pinSpacing !== !1 && (e._subPinOffset = !0);
                        }),
                      k && F(Ne))
                    : ((A = gs(d, w)),
                      A && _e.style.flexBasis !== `auto` && (_e.style.flexBasis = A + ds)),
                  k &&
                    ((H = {
                      top: L.top + (fe ? oe - z : we) + ds,
                      left: L.left + (fe ? we : oe - z) + ds,
                      boxSizing: `border-box`,
                      position: `fixed`,
                    }),
                    (H[ts] = H[`max` + ls] = Math.ceil(L.width) + ds),
                    (H[ns] = H[`max` + us] = Math.ceil(L.height) + ds),
                    (H[cs] = H[cs + as] = H[cs + rs] = H[cs + os] = H[cs + is] = `0`),
                    (H[ss] = j[ss]),
                    (H[ss + as] = j[ss + as]),
                    (H[ss + rs] = j[ss + rs]),
                    (H[ss + os] = j[ss + os]),
                    (H[ss + is] = j[ss + is]),
                    (he = uc(me, H, y)),
                    Ks && F(0)),
                  n
                    ? ((Ee = n._initted),
                      co(1),
                      n.render(n.duration(), !0, !0),
                      (xe = ve(w.a) - be + V + _),
                      (Te = Math.abs(V - xe) > 1),
                      k && Te && he.splice(he.length - 2, 2),
                      n.render(0, !0, !0),
                      Ee || n.invalidate(!0),
                      n.parent || n.totalTime(n.totalTime()),
                      co(0))
                    : (xe = V),
                  Oe &&
                    (Oe.value
                      ? (Oe.style[`overflow` + w.a.toUpperCase()] = Oe.value)
                      : Oe.style.removeProperty(`overflow-` + w.a)));
              else if (u && F() && !x)
                for (L = u.parentNode; L && L !== qa;)
                  (L._pinOffset && ((z -= L._pinOffset), (ce -= L._pinOffset)), (L = L.parentNode));
              (De &&
                De.forEach(function (e) {
                  return e.revert(!1, !0);
                }),
                (N.start = z),
                (N.end = ce),
                (R = se = Ks ? Ne : F()),
                !x && !Ks && (R < Ne && F(Ne), (N.scroll.rec = 0)),
                N.revert(!1, !0),
                (ie = wo()),
                Me && ((re = -1), Me.restart(!0)),
                (eo = 0),
                n &&
                  T &&
                  (n._initted || Pe) &&
                  n.progress() !== Pe &&
                  n.progress(Pe || 0, !0).render(n.time(), !0, !0),
                (h || ae !== N.progress || x || p || (n && !n._initted)) &&
                  (n &&
                    !T &&
                    (n._initted || ae || n.vars.immediateRender !== !1) &&
                    n.totalProgress(x && z < -0.001 && !ae ? K.utils.normalize(z, ce, 0) : ae, !0),
                  (N.progress = h || (R - z) / V === ae ? 0 : ae)),
                d && f && (_e._pinOffset = Math.round(N.progress * xe)),
                U && U.invalidate(),
                isNaN(ke) ||
                  ((ke -= K.getProperty(ue, w.p)),
                  (Ae -= K.getProperty(de, w.p)),
                  gc(ue, w, ke),
                  gc(le, w, ke - (o || 0)),
                  gc(de, w, Ae),
                  gc(B, w, Ae - (o || 0))),
                h && !Ks && N.update(),
                c && !Ks && !pe && ((pe = !0), c(N), (pe = !1)));
            }
          }),
          (N.getVelocity = function () {
            return ((F() - se) / (wo() - Qa)) * 1e3 || 0;
          }),
          (N.endAnimation = function () {
            (Jo(N.callbackAnimation),
              n &&
                (U
                  ? U.progress(1)
                  : n.paused()
                    ? T || Jo(n, N.direction < 0, 1)
                    : Jo(n, n.reversed())));
          }),
          (N.labelToScroll = function (e) {
            return (
              (n && n.labels && (z || N.refresh() || z) + (n.labels[e] / n.duration()) * V) || 0
            );
          }),
          (N.getTrailing = function (e) {
            var t = J.indexOf(N),
              n = N.direction > 0 ? J.slice(0, t).reverse() : J.slice(t + 1);
            return (
              Wo(e)
                ? n.filter(function (t) {
                    return t.vars.preventOverlaps === e;
                  })
                : n
            ).filter(function (e) {
              return N.direction > 0 ? e.end <= z : e.start >= ce;
            });
          }),
          (N.update = function (e, t, r) {
            if (!(x && !r && !e)) {
              var o = Ks === !0 ? Ne : N.scroll(),
                c = e ? 0 : (o - z) / V,
                u = c < 0 ? 0 : c > 1 ? 1 : c || 0,
                p = N.progress,
                h,
                g,
                b,
                D,
                O,
                M,
                ee,
                te;
              if (
                (t &&
                  ((se = R),
                  (R = x ? F() : o),
                  v && ((ke = Oe), (Oe = n && !T ? n.totalProgress() : u))),
                m &&
                  d &&
                  !eo &&
                  !Co &&
                  Eo &&
                  (!u && z < o + ((o - se) / (wo() - Qa)) * m
                    ? (u = 1e-4)
                    : u === 1 && ce > o + ((o - se) / (wo() - Qa)) * m && (u = 0.9999)),
                u !== p && N.enabled)
              ) {
                if (
                  ((h = N.isActive = !!u && u < 1),
                  (g = !!p && p < 1),
                  (M = h !== g),
                  (O = M || !!u != !!p),
                  (N.direction = u > p ? 1 : -1),
                  (N.progress = u),
                  O &&
                    !eo &&
                    ((b = u && !p ? 0 : u === 1 ? 1 : p === 1 ? 2 : 3),
                    T &&
                      ((D = (!M && j[b + 1] !== `none` && j[b + 1]) || j[b]),
                      (te = n && (D === `complete` || D === `reset` || D in n)))),
                  C &&
                    (M || te) &&
                    (te || l || !n) &&
                    (Go(C)
                      ? C(N)
                      : N.getTrailing(C).forEach(function (e) {
                          return e.endAnimation();
                        })),
                  T ||
                    (U && !eo && !Co
                      ? (U._dp._time - U._start !== U._time && U.render(U._dp._time - U._start),
                        U.resetTo
                          ? U.resetTo(`totalProgress`, u, n._tTime / n._tDur)
                          : ((U.vars.totalProgress = u), U.invalidate().restart()))
                      : n && n.totalProgress(u, !!(eo && (ie || e)))),
                  d)
                ) {
                  if ((e && f && (_e.style[f + w.os2] = Se), !k)) ye(Po(be + xe * u));
                  else if (O) {
                    if (((ee = !e && u > p && ce + 1 > o && o + 1 >= Ho(E, w)), y)) {
                      if (!e && (h || ee)) {
                        var P = hs(d, !0),
                          ne = o - z;
                        mc(
                          d,
                          qa,
                          P.top + (w === Pa ? ne : 0) + ds,
                          P.left + (w === Pa ? 0 : ne) + ds,
                        );
                      } else mc(d, _e);
                    }
                    (cc(h || ee ? he : ge),
                      (Te && u < 1 && h) || ye(be + (u === 1 && !ee ? xe : 0)));
                  }
                }
                (v && !I.tween && !eo && !Co && Me.restart(!0),
                  a &&
                    (M || (_ && u && (u < 1 || !So))) &&
                    Xa(a.targets).forEach(function (e) {
                      return e.classList[h || _ ? `add` : `remove`](a.className);
                    }),
                  i && !T && !e && i(N),
                  O && !eo
                    ? (T &&
                        (te &&
                          (D === `complete`
                            ? n.pause().totalProgress(1)
                            : D === `reset`
                              ? n.restart(!0).pause()
                              : D === `restart`
                                ? n.restart(!0)
                                : n[D]()),
                        i && i(N)),
                      (M || !So) &&
                        (s && M && Yo(N, s),
                        A[b] && Yo(N, A[b]),
                        _ && (u === 1 ? N.kill(!1, 1) : (A[b] = 0)),
                        M || ((b = u === 1 ? 1 : 3), A[b] && Yo(N, A[b]))),
                      S &&
                        !h &&
                        Math.abs(N.getVelocity()) > (Ko(S) ? S : 2500) &&
                        (Jo(N.callbackAnimation),
                        U ? U.progress(1) : Jo(n, D === `reverse` ? 1 : !u, 1)))
                    : T && i && !eo && i(N));
              }
              if (Ee) {
                var re = x ? (o / x.duration()) * (x._caScrollDist || 0) : o;
                (we(re + +!!ue._isFlipped), Ee(re));
              }
              Fe && Fe((-o / x.duration()) * (x._caScrollDist || 0));
            }
          }),
          (N.enable = function (t, n) {
            N.enabled ||
              ((N.enabled = !0),
              Ss(E, `resize`, Is),
              O || Ss(E, `scroll`, Ps),
              te && Ss(e, `refreshInit`, te),
              t !== !1 && ((N.progress = ae = 0), (R = se = re = F())),
              n !== !1 && N.refresh());
          }),
          (N.getTween = function (e) {
            return e && I ? I.tween : U;
          }),
          (N.setPositions = function (e, t, n, r) {
            if (x) {
              var i = x.scrollTrigger,
                a = x.duration(),
                o = i.end - i.start;
              ((e = i.start + (o * e) / a), (t = i.start + (o * t) / a));
            }
            (N.refresh(
              !1,
              !1,
              { start: ko(e, n && !!N._startClamp), end: ko(t, n && !!N._endClamp) },
              r,
            ),
              N.update());
          }),
          (N.adjustPinSpacing = function (e) {
            if (Ce && e) {
              var t = Ce.indexOf(w.d) + 1;
              ((Ce[t] = parseFloat(Ce[t]) + e + ds), (Ce[1] = parseFloat(Ce[1]) + e + ds), cc(Ce));
            }
          }),
          (N.disable = function (t, n) {
            if (
              (t !== !1 && N.revert(!0, !0),
              N.enabled &&
                ((N.enabled = N.isActive = !1),
                n || (U && U.pause()),
                (Ne = 0),
                L && (L.uncache = 1),
                te && Cs(e, `refreshInit`, te),
                Me && (Me.pause(), I.tween && I.tween.kill() && (I.tween = 0)),
                !O))
            ) {
              for (var r = J.length; r--;) if (J[r].scroller === E && J[r] !== N) return;
              (Cs(E, `resize`, Is), O || Cs(E, `scroll`, Ps));
            }
          }),
          (N.kill = function (e, r) {
            (N.disable(e, r), U && !r && U.kill(), o && delete js[o]);
            var i = J.indexOf(N);
            (i >= 0 && J.splice(i, 1),
              i === ro && ec > 0 && ro--,
              (i = 0),
              J.forEach(function (e) {
                return e.scroller === N.scroller && (i = 1);
              }),
              i || Ks || (N.scroll.rec = 0),
              n && ((n.scrollTrigger = null), e && n.revert({ kill: !1 }), r || n.kill()),
              le &&
                [le, B, ue, de].forEach(function (e) {
                  return e.parentNode && e.parentNode.removeChild(e);
                }),
              tc === N && (tc = 0),
              d &&
                (L && (L.uncache = 1),
                (i = 0),
                J.forEach(function (e) {
                  return e.pin === d && i++;
                }),
                i || (L.spacer = 0)),
              t.onKill && t.onKill(N));
          }),
          J.push(N),
          N.enable(!1, !1),
          Ie && Ie(N),
          n && n.add && !V)
        ) {
          var Be = N.update;
          ((N.update = function () {
            ((N.update = Be), G.cache++, z || ce || N.refresh());
          }),
            K.delayedCall(0.01, N.update),
            (V = 0.01),
            (z = ce = 0));
        } else N.refresh();
        d && Ys();
      }),
      (e.register = function (t) {
        return ((Wa ||= ((K = t || Io()), Fo() && window.document && e.enable(), Do)), Wa);
      }),
      (e.defaults = function (e) {
        if (e) for (var t in e) Es[t] = e[t];
        return Es;
      }),
      (e.disable = function (e, t) {
        ((Do = 0),
          J.forEach(function (n) {
            return n[t ? `kill` : `disable`](e);
          }),
          Cs(q, `wheel`, Ps),
          Cs(Ga, `scroll`, Ps),
          clearInterval($a),
          Cs(Ga, `touchcancel`, No),
          Cs(qa, `touchstart`, No),
          xs(Cs, Ga, `pointerdown,touchstart,mousedown`, jo),
          xs(Cs, Ga, `pointerup,touchend,mouseup`, Mo),
          Ya.kill(),
          Uo(Cs));
        for (var n = 0; n < G.length; n += 3) (ws(Cs, G[n], G[n + 1]), ws(Cs, G[n], G[n + 2]));
      }),
      (e.enable = function () {
        if (((q = window), (Ga = document), (Ka = Ga.documentElement), (qa = Ga.body), K)) {
          if (
            ((Xa = K.utils.toArray),
            (Za = K.utils.clamp),
            (go = K.core.context || No),
            (co = K.core.suppressOverwrites || No),
            (_o = q.history.scrollRestoration || `auto`),
            ($s = q.pageYOffset || 0),
            K.core.globals(`ScrollTrigger`, e),
            qa)
          ) {
            ((Do = 1),
              (vo = document.createElement(`div`)),
              (vo.style.height = `100vh`),
              (vo.style.position = `absolute`),
              Xs(),
              Ao(),
              Ua.register(K),
              (e.isTouch = Ua.isTouch),
              (ho = Ua.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              (fo = Ua.isTouch === 1),
              Ss(q, `wheel`, Ps),
              (Ja = [q, Ga, Ka, qa]),
              K.matchMedia
                ? ((e.matchMedia = function (e) {
                    var t = K.matchMedia(),
                      n;
                    for (n in e) t.add(n, e[n]);
                    return t;
                  }),
                  K.addEventListener(`matchMediaInit`, function () {
                    (Us(), Ws());
                  }),
                  K.addEventListener(`matchMediaRevert`, function () {
                    return Hs();
                  }),
                  K.addEventListener(`matchMedia`, function () {
                    (Qs(0, 1), Bs(`matchMedia`));
                  }),
                  K.matchMedia().add(`(orientation: portrait)`, function () {
                    return (Fs(), Fs);
                  }))
                : console.warn(`Requires GSAP 3.11.0 or later`),
              Fs(),
              Ss(Ga, `scroll`, Ps));
            var t = qa.hasAttribute(`style`),
              n = qa.style,
              r = n.borderTopStyle,
              i = K.core.Animation.prototype,
              a,
              o;
            for (
              i.revert ||
                Object.defineProperty(i, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                n.borderTopStyle = `solid`,
                a = hs(qa),
                Pa.m = Math.round(a.top + Pa.sc()) || 0,
                Na.m = Math.round(a.left + Na.sc()) || 0,
                r ? (n.borderTopStyle = r) : n.removeProperty(`border-top-style`),
                t || (qa.setAttribute(`style`, ``), qa.removeAttribute(`style`)),
                $a = setInterval(Ns, 250),
                K.delayedCall(0.5, function () {
                  return (Co = 0);
                }),
                Ss(Ga, `touchcancel`, No),
                Ss(qa, `touchstart`, No),
                xs(Ss, Ga, `pointerdown,touchstart,mousedown`, jo),
                xs(Ss, Ga, `pointerup,touchend,mouseup`, Mo),
                no = K.utils.checkPrefix(`transform`),
                ic.push(no),
                Wa = wo(),
                Ya = K.delayedCall(0.2, Qs).pause(),
                oo = [
                  Ga,
                  `visibilitychange`,
                  function () {
                    var e = q.innerWidth,
                      t = q.innerHeight;
                    Ga.hidden ? ((io = e), (ao = t)) : (io !== e || ao !== t) && Is();
                  },
                  Ga,
                  `DOMContentLoaded`,
                  Qs,
                  q,
                  `load`,
                  Qs,
                  q,
                  `resize`,
                  Is,
                ],
                Uo(Ss),
                J.forEach(function (e) {
                  return e.enable(0, 1);
                }),
                o = 0;
              o < G.length;
              o += 3
            )
              (ws(Cs, G[o], G[o + 1]), ws(Cs, G[o], G[o + 2]));
          } else
            Ga &&
              Ga.addEventListener(`DOMContentLoaded`, function t() {
                (e.enable(), Ga.removeEventListener(`DOMContentLoaded`, t));
              });
        }
      }),
      (e.config = function (t) {
        `limitCallbacks` in t && (So = !!t.limitCallbacks);
        var n = t.syncInterval;
        ((n && clearInterval($a)) || (($a = n) && setInterval(Ns, n)),
          `ignoreMobileResize` in t && (fo = e.isTouch === 1 && t.ignoreMobileResize),
          `autoRefreshEvents` in t &&
            (Uo(Cs) || Uo(Ss, t.autoRefreshEvents || `none`),
            (lo = (t.autoRefreshEvents + ``).indexOf(`resize`) === -1)));
      }),
      (e.scrollerProxy = function (e, t) {
        var n = Fa(e),
          r = G.indexOf(n),
          i = Lo(n);
        (~r && G.splice(r, i ? 6 : 2),
          t && (i ? xa.unshift(q, t, qa, t, Ka, t) : xa.unshift(n, t)));
      }),
      (e.clearMatchMedia = function (e) {
        J.forEach(function (t) {
          return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
        });
      }),
      (e.isInViewport = function (e, t, n) {
        var r = (Wo(e) ? Fa(e) : e).getBoundingClientRect(),
          i = r[n ? ts : ns] * t || 0;
        return n
          ? r.right - i > 0 && r.left + i < q.innerWidth
          : r.bottom - i > 0 && r.top + i < q.innerHeight;
      }),
      (e.positionInViewport = function (e, t, n) {
        Wo(e) && (e = Fa(e));
        var r = e.getBoundingClientRect(),
          i = r[n ? ts : ns],
          a =
            t == null
              ? i / 2
              : t in Ds
                ? Ds[t] * i
                : ~t.indexOf(`%`)
                  ? (parseFloat(t) * i) / 100
                  : parseFloat(t) || 0;
        return n ? (r.left + a) / q.innerWidth : (r.top + a) / q.innerHeight;
      }),
      (e.killAll = function (e) {
        if (
          (J.slice(0).forEach(function (e) {
            return e.vars.id !== `ScrollSmoother` && e.kill();
          }),
          e !== !0)
        ) {
          var t = Ls.killAll || [];
          ((Ls = {}),
            t.forEach(function (e) {
              return e();
            }));
        }
      }),
      e
    );
  })();
((Y.version = `3.15.0`),
  (Y.saveStyles = function (e) {
    return e
      ? Xa(e).forEach(function (e) {
          if (e && e.style) {
            var t = Vs.indexOf(e);
            (t >= 0 && Vs.splice(t, 5),
              Vs.push(
                e,
                e.style.cssText,
                e.getBBox && e.getAttribute(`transform`),
                K.core.getCache(e),
                go(),
              ));
          }
        })
      : Vs;
  }),
  (Y.revert = function (e, t) {
    return Ws(!e, t);
  }),
  (Y.create = function (e, t) {
    return new Y(e, t);
  }),
  (Y.refresh = function (e) {
    return e ? Is(!0) : (Wa || Y.register()) && Qs(!0);
  }),
  (Y.update = function (e) {
    return ++G.cache && nc(e === !0 ? 2 : 0);
  }),
  (Y.clearScrollMemory = Gs),
  (Y.maxScroll = function (e, t) {
    return Ho(e, t ? Na : Pa);
  }),
  (Y.getScrollFunc = function (e, t) {
    return La(Fa(e), t ? Na : Pa);
  }),
  (Y.getById = function (e) {
    return js[e];
  }),
  (Y.getAll = function () {
    return J.filter(function (e) {
      return e.vars.id !== `ScrollSmoother`;
    });
  }),
  (Y.isScrolling = function () {
    return !!Eo;
  }),
  (Y.snapDirectional = ys),
  (Y.addEventListener = function (e, t) {
    var n = Ls[e] || (Ls[e] = []);
    ~n.indexOf(t) || n.push(t);
  }),
  (Y.removeEventListener = function (e, t) {
    var n = Ls[e],
      r = n && n.indexOf(t);
    r >= 0 && n.splice(r, 1);
  }),
  (Y.batch = function (e, t) {
    var n = [],
      r = {},
      i = t.interval || 0.016,
      a = t.batchMax || 1e9,
      o = function (e, t) {
        var n = [],
          r = [],
          o = K.delayedCall(i, function () {
            (t(n, r), (n = []), (r = []));
          }).pause();
        return function (e) {
          (n.length || o.restart(!0), n.push(e.trigger), r.push(e), a <= n.length && o.progress(1));
        };
      },
      s;
    for (s in t)
      r[s] = s.substr(0, 2) === `on` && Go(t[s]) && s !== `onRefreshInit` ? o(s, t[s]) : t[s];
    return (
      Go(a) &&
        ((a = a()),
        Ss(Y, `refresh`, function () {
          return (a = t.batchMax());
        })),
      Xa(e).forEach(function (e) {
        var t = {};
        for (s in r) t[s] = r[s];
        ((t.trigger = e), n.push(Y.create(t)));
      }),
      n
    );
  }));
var vc = function (e, t, n, r) {
    return (t > r ? e(r) : t < 0 && e(0), n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1);
  },
  yc = function e(t, n) {
    (n === !0
      ? t.style.removeProperty(`touch-action`)
      : (t.style.touchAction =
          n === !0 ? `auto` : n ? `pan-` + n + (Ua.isTouch ? ` pinch-zoom` : ``) : `none`),
      t === Ka && e(qa, n));
  },
  bc = { auto: 1, scroll: 1 },
  xc = function (e) {
    var t = e.event,
      n = e.target,
      r = e.axis,
      i = (t.changedTouches ? t.changedTouches[0] : t).target,
      a = i._gsap || K.core.getCache(i),
      o = wo(),
      s;
    if (!a._isScrollT || o - a._isScrollT > 2e3) {
      for (
        ;
        i &&
        i !== qa &&
        ((i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth) ||
          !(bc[(s = fs(i)).overflowY] || bc[s.overflowX]));
      )
        i = i.parentNode;
      ((a._isScroll = i && i !== n && !Lo(i) && (bc[(s = fs(i)).overflowY] || bc[s.overflowX])),
        (a._isScrollT = o));
    }
    (a._isScroll || r === `x`) && (t.stopPropagation(), (t._gsapAllow = !0));
  },
  Sc = function (e, t, n, r) {
    return Ua.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (r &&= xc),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return n && Ss(Ga, Ua.eventTypes[0], Tc, !1, !0);
      },
      onDisable: function () {
        return Cs(Ga, Ua.eventTypes[0], Tc, !0);
      },
    });
  },
  Cc = /(input|label|select|textarea)/i,
  wc,
  Tc = function (e) {
    var t = Cc.test(e.target.tagName);
    (t || wc) && ((e._gsapAllow = !0), (wc = t));
  },
  Ec = function (e) {
    (qo(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = `wheel,touch`),
      (e.debounce = !!e.debounce),
      (e.id = e.id || `normalizer`));
    var t = e,
      n = t.normalizeScrollX,
      r = t.momentum,
      i = t.allowNestedScroll,
      a = t.onRelease,
      o,
      s,
      c = Fa(e.target) || Ka,
      l = K.core.globals().ScrollSmoother,
      u = l && l.get(),
      d =
        ho &&
        ((e.content && Fa(e.content)) || (u && e.content !== !1 && !u.smooth() && u.content())),
      f = La(c, Pa),
      p = La(c, Na),
      m = 1,
      h =
        (Ua.isTouch && q.visualViewport
          ? q.visualViewport.scale * q.visualViewport.width
          : q.outerWidth) / q.innerWidth,
      g = 0,
      _ = Go(r)
        ? function () {
            return r(o);
          }
        : function () {
            return r || 2.8;
          },
      v,
      y,
      b = Sc(c, e.type, !0, i),
      x = function () {
        return (y = !1);
      },
      S = No,
      C = No,
      w = function () {
        ((s = Ho(c, Pa)), (C = Za(+!!ho, s)), n && (S = Za(0, Ho(c, Na))), (v = qs));
      },
      T = function () {
        ((d._gsap.y = Po(parseFloat(d._gsap.y) + f.offset) + `px`),
          (d.style.transform =
            `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` + parseFloat(d._gsap.y) + `, 0, 1)`),
          (f.offset = f.cacheID = 0));
      },
      E = function () {
        if (y) {
          requestAnimationFrame(x);
          var e = Po(o.deltaY / 2),
            t = C(f.v - e);
          if (d && t !== f.v + f.offset) {
            f.offset = t - f.v;
            var n = Po((parseFloat(d && d._gsap.y) || 0) - f.offset);
            ((d.style.transform =
              `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ` + n + `, 0, 1)`),
              (d._gsap.y = n + `px`),
              (f.cacheID = G.cache),
              nc());
          }
          return !0;
        }
        (f.offset && T(), (y = !0));
      },
      D,
      O,
      k,
      A,
      j = function () {
        (w(),
          D.isActive() &&
            D.vars.scrollY > s &&
            (f() > s ? D.progress(1) && f(s) : D.resetTo(`scrollY`, s)));
      };
    return (
      d && K.set(d, { y: `+=0` }),
      (e.ignoreCheck = function (e) {
        return (
          (ho && e.type === `touchmove` && E(e)) ||
          (m > 1.05 && e.type !== `touchstart`) ||
          o.isGesturing ||
          (e.touches && e.touches.length > 1)
        );
      }),
      (e.onPress = function () {
        y = !1;
        var e = m;
        ((m = Po(((q.visualViewport && q.visualViewport.scale) || 1) / h)),
          D.pause(),
          e !== m && yc(c, m > 1.01 || (!n && `x`)),
          (O = p()),
          (k = f()),
          w(),
          (v = qs));
      }),
      (e.onRelease = e.onGestureStart =
        function (e, t) {
          if ((f.offset && T(), !t)) A.restart(!0);
          else {
            G.cache++;
            var r = _(),
              i,
              o;
            (n &&
              ((i = p()),
              (o = i + (r * 0.05 * -e.velocityX) / 0.227),
              (r *= vc(p, i, o, Ho(c, Na))),
              (D.vars.scrollX = S(o))),
              (i = f()),
              (o = i + (r * 0.05 * -e.velocityY) / 0.227),
              (r *= vc(f, i, o, Ho(c, Pa))),
              (D.vars.scrollY = C(o)),
              D.invalidate().duration(r).play(0.01),
              ((ho && D.vars.scrollY >= s) || i >= s - 1) &&
                K.to({}, { onUpdate: j, duration: r }));
          }
          a && a(e);
        }),
      (e.onWheel = function () {
        (D._ts && D.pause(), wo() - g > 1e3 && ((v = 0), (g = wo())));
      }),
      (e.onChange = function (e, t, r, i, a) {
        if (
          (qs !== v && w(), t && n && p(S(i[2] === t ? O + (e.startX - e.x) : p() + t - i[1])), r)
        ) {
          f.offset && T();
          var o = a[2] === r,
            s = o ? k + e.startY - e.y : f() + r - a[1],
            c = C(s);
          (o && s !== c && (k += c - s), f(c));
        }
        (r || t) && nc();
      }),
      (e.onEnable = function () {
        (yc(c, !n && `x`),
          Y.addEventListener(`refresh`, j),
          Ss(q, `resize`, j),
          (f.smooth &&= ((f.target.style.scrollBehavior = `auto`), (p.smooth = !1))),
          b.enable());
      }),
      (e.onDisable = function () {
        (yc(c, !0), Cs(q, `resize`, j), Y.removeEventListener(`refresh`, j), b.kill());
      }),
      (e.lockAxis = e.lockAxis !== !1),
      (o = new Ua(e)),
      (o.iOS = ho),
      ho && !f() && f(1),
      ho && K.ticker.add(No),
      (A = o._dc),
      (D = K.to(o, {
        ease: `power4`,
        paused: !0,
        inherit: !1,
        scrollX: n ? `+=0.1` : `+=0`,
        scrollY: `+=0.1`,
        modifiers: {
          scrollY: hc(f, f(), function () {
            return D.pause();
          }),
        },
        onUpdate: nc,
        onComplete: A.vars.onComplete,
      })),
      o
    );
  };
((Y.sort = function (e) {
  if (Go(e)) return J.sort(e);
  var t = q.pageYOffset || 0;
  return (
    Y.getAll().forEach(function (e) {
      return (e._sortY = e.trigger
        ? t + e.trigger.getBoundingClientRect().top
        : e.start + q.innerHeight);
    }),
    J.sort(
      e ||
        function (e, t) {
          return (
            (e.vars.refreshPriority || 0) * -1e6 +
            (e.vars.containerAnimation ? 1e6 : e._sortY) -
            ((t.vars.containerAnimation ? 1e6 : t._sortY) + (t.vars.refreshPriority || 0) * -1e6)
          );
        },
    )
  );
}),
  (Y.observe = function (e) {
    return new Ua(e);
  }),
  (Y.normalizeScroll = function (e) {
    if (e === void 0) return uo;
    if (e === !0 && uo) return uo.enable();
    if (e === !1) {
      (uo && uo.kill(), (uo = e));
      return;
    }
    var t = e instanceof Ua ? e : Ec(e);
    return (uo && uo.target === t.target && uo.kill(), Lo(t.target) && (uo = t), t);
  }),
  (Y.core = {
    _getVelocityProp: Ra,
    _inputObserver: Sc,
    _scrollers: G,
    _proxies: xa,
    bridge: {
      ss: function () {
        (Eo || Bs(`scrollStart`), (Eo = wo()));
      },
      ref: function () {
        return eo;
      },
    },
  }),
  Io() && K.registerPlugin(Y),
  na.registerPlugin(Y));
var Dc = null;
function Oc(e) {
  let t = document.getElementById(e);
  t &&
    (Dc ? Dc.scrollTo(t, { offset: 0 }) : t.scrollIntoView({ behavior: `smooth`, block: `start` }));
}
function kc({ reducedMotion: e }) {
  return (
    (0, s.useEffect)(() => {
      let t = [],
        n = () => {
          t = Array.from(document.querySelectorAll(`[data-scene]`))
            .map((e) => {
              let t = e.dataset.scene,
                n = c.find((e) => e.id === t);
              return n ? { at: n.at, top: e.getBoundingClientRect().top + window.scrollY } : null;
            })
            .filter((e) => e !== null)
            .sort((e, t) => e.top - t.top);
        },
        r = (e, n) => {
          if (t.length < 2) {
            v(e / Math.max(1, document.body.scrollHeight - window.innerHeight), n);
            return;
          }
          let r = t[0],
            i = t[t.length - 1];
          if (e <= r.top) {
            v(r.at, n);
            return;
          }
          if (e >= i.top) {
            v(i.at, n);
            return;
          }
          let a = 0;
          for (; a < t.length - 2 && e > t[a + 1].top;) a++;
          let o = t[a],
            s = t[a + 1],
            c = (e - o.top) / Math.max(1, s.top - o.top);
          v(o.at + (s.at - o.at) * c, n);
        };
      (n(), r(window.scrollY, 0));
      let i = () => {
        (n(), r(window.scrollY, 0));
      };
      if ((window.addEventListener(`resize`, i), Y.addEventListener(`refresh`, n), e)) {
        let e = () => r(window.scrollY, 0);
        return (
          window.addEventListener(`scroll`, e, { passive: !0 }),
          () => {
            (window.removeEventListener(`scroll`, e),
              window.removeEventListener(`resize`, i),
              Y.removeEventListener(`refresh`, n));
          }
        );
      }
      let a = new re({
        duration: d.duration,
        wheelMultiplier: d.wheelMultiplier,
        touchMultiplier: d.touchMultiplier,
        smoothWheel: !0,
      });
      ((Dc = a),
        a.on(`scroll`, (e) => {
          (r(e.scroll, e.velocity), Y.update());
        }));
      let o = (e) => a.raf(e * 1e3);
      return (
        na.ticker.add(o),
        na.ticker.lagSmoothing(0),
        () => {
          (na.ticker.remove(o),
            a.destroy(),
            (Dc = null),
            window.removeEventListener(`resize`, i),
            Y.removeEventListener(`refresh`, n));
        }
      );
    }, [e]),
    null
  );
}
var X = n(),
  Ac = (0, s.lazy)(() => o(() => import(`./ProductScene-DYbikqU7.js`), __vite__mapDeps([0, 1])));
function jc({ device: e, onReady: t }) {
  return e.ready
    ? (0, X.jsx)(i, {
        fallback: null,
        children: (0, X.jsx)(s.Suspense, {
          fallback: null,
          children: (0, X.jsx)(Ac, { device: e, onReady: t }),
        }),
      })
    : null;
}
function Mc({ ready: e }) {
  let t = (0, s.useRef)(null),
    n = (0, s.useRef)(null),
    [r, i] = (0, s.useState)(!1),
    [a, o] = (0, s.useState)(!1),
    c = e || a;
  return (
    (0, s.useEffect)(() => {
      let e = window.setTimeout(() => o(!0), 4e3);
      return () => window.clearTimeout(e);
    }, []),
    (0, s.useEffect)(() => {
      n.current &&
        na.to(n.current, { scaleX: c ? 1 : 0.72, duration: c ? 0.5 : 2.4, ease: `power2.out` });
    }, [c]),
    (0, s.useEffect)(() => {
      if (!c || !t.current) return;
      let e = na.timeline({ delay: 0.35, onComplete: () => i(!0) });
      return (
        e.to(t.current, { opacity: 0, duration: 0.9, ease: `power2.inOut` }),
        () => {
          e.kill();
        }
      );
    }, [c]),
    (0, s.useEffect)(
      () => (
        document.documentElement.classList.toggle(`is-loading`, !r),
        () => document.documentElement.classList.remove(`is-loading`)
      ),
      [r],
    ),
    r
      ? null
      : (0, X.jsxs)(`div`, {
          ref: t,
          role: `status`,
          "aria-live": `polite`,
          className: `fixed inset-0 z-100 flex flex-col items-center justify-center bg-background`,
          children: [
            (0, X.jsx)(`p`, {
              className: `font-display text-[0.7rem] tracking-[0.5em] text-muted-foreground uppercase`,
              children: `The Billionaire's`,
            }),
            (0, X.jsx)(`p`, {
              className: `mt-3 font-display text-3xl tracking-[0.28em] text-foreground uppercase`,
              children: `Aqua`,
            }),
            (0, X.jsx)(`div`, {
              className: `mt-10 h-px w-40 overflow-hidden bg-hairline`,
              children: (0, X.jsx)(`span`, {
                ref: n,
                className: `block h-px w-full origin-left scale-x-0 bg-accent-gold`,
                "aria-hidden": `true`,
              }),
            }),
            (0, X.jsx)(`span`, {
              className: `sr-only`,
              children: `Loading the product experience`,
            }),
          ],
        })
  );
}
var Nc = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  Pc = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  Fc = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => (n ? n.toUpperCase() : t.toLowerCase())),
  Ic = (e) => {
    let t = Fc(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Lc = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  Rc = (e) => {
    for (let t in e) if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  zc = (0, s.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: r,
        className: i = ``,
        children: a,
        iconNode: o,
        ...c
      },
      l,
    ) =>
      (0, s.createElement)(
        `svg`,
        {
          ref: l,
          ...Lc,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
          className: Nc(`lucide`, i),
          ...(!a && !Rc(c) && { "aria-hidden": `true` }),
          ...c,
        },
        [...o.map(([e, t]) => (0, s.createElement)(e, t)), ...(Array.isArray(a) ? a : [a])],
      ),
  ),
  Bc = (e, t) => {
    let n = (0, s.forwardRef)(({ className: n, ...r }, i) =>
      (0, s.createElement)(zc, {
        ref: i,
        iconNode: t,
        className: Nc(`lucide-${Pc(Ic(e))}`, `lucide-${e}`, n),
        ...r,
      }),
    );
    return ((n.displayName = Ic(e)), n);
  },
  Vc = Bc(`arrow-down`, [
    [`path`, { d: `M12 5v14`, key: `s699le` }],
    [`path`, { d: `m19 12-7 7-7-7`, key: `1idqje` }],
  ]),
  Hc = Bc(`arrow-right`, [
    [`path`, { d: `M5 12h14`, key: `1ays0h` }],
    [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
  ]),
  Uc = Bc(`circle-question-mark`, [
    [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
    [`path`, { d: `M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`, key: `1u773s` }],
    [`path`, { d: `M12 17h.01`, key: `p32p05` }],
  ]),
  Wc = Bc(`mail`, [
    [`path`, { d: `m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`, key: `132q7q` }],
    [`rect`, { x: `2`, y: `4`, width: `20`, height: `16`, rx: `2`, key: `izxlao` }],
  ]),
  Gc = Bc(`map-pin`, [
    [
      `path`,
      {
        d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
        key: `1r0f0z`,
      },
    ],
    [`circle`, { cx: `12`, cy: `10`, r: `3`, key: `ilqhr7` }],
  ]),
  Kc = Bc(`menu`, [
    [`path`, { d: `M4 5h16`, key: `1tepv9` }],
    [`path`, { d: `M4 12h16`, key: `1lakjw` }],
    [`path`, { d: `M4 19h16`, key: `1djgab` }],
  ]),
  qc = Bc(`phone`, [
    [
      `path`,
      {
        d: `M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,
        key: `9njp5v`,
      },
    ],
  ]),
  Jc = Bc(`x`, [
    [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
    [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
  ]);
function Yc(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = Yc(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function Xc() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = Yc(e)) && (r && (r += ` `), (r += t));
  return r;
}
var Zc = (e, t) => {
    let n = Array(e.length + t.length);
    for (let t = 0; t < e.length; t++) n[t] = e[t];
    for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
    return n;
  },
  Qc = (e, t) => ({ classGroupId: e, validator: t }),
  $c = (e = new Map(), t = null, n) => ({ nextPart: e, validators: t, classGroupId: n }),
  el = `-`,
  tl = [],
  nl = `arbitrary..`,
  rl = (e) => {
    let t = ol(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (e) => {
        if (e.startsWith(`[`) && e.endsWith(`]`)) return al(e);
        let n = e.split(el);
        return il(n, +(n[0] === `` && n.length > 1), t);
      },
      getConflictingClassGroupIds: (e, t) => {
        if (t) {
          let t = r[e],
            i = n[e];
          return t ? (i ? Zc(i, t) : t) : i || tl;
        }
        return n[e] || tl;
      },
    };
  },
  il = (e, t, n) => {
    if (e.length - t === 0) return n.classGroupId;
    let r = e[t],
      i = n.nextPart.get(r);
    if (i) {
      let n = il(e, t + 1, i);
      if (n) return n;
    }
    let a = n.validators;
    if (a === null) return;
    let o = t === 0 ? e.join(el) : e.slice(t).join(el),
      s = a.length;
    for (let e = 0; e < s; e++) {
      let t = a[e];
      if (t.validator(o)) return t.classGroupId;
    }
  },
  al = (e) =>
    e.slice(1, -1).indexOf(`:`) === -1
      ? void 0
      : (() => {
          let t = e.slice(1, -1),
            n = t.indexOf(`:`),
            r = t.slice(0, n);
          return r ? nl + r : void 0;
        })(),
  ol = (e) => {
    let { theme: t, classGroups: n } = e;
    return sl(n, t);
  },
  sl = (e, t) => {
    let n = $c();
    for (let r in e) {
      let i = e[r];
      cl(i, n, r, t);
    }
    return n;
  },
  cl = (e, t, n, r) => {
    let i = e.length;
    for (let a = 0; a < i; a++) {
      let i = e[a];
      ll(i, t, n, r);
    }
  },
  ll = (e, t, n, r) => {
    if (typeof e == `string`) {
      ul(e, t, n);
      return;
    }
    if (typeof e == `function`) {
      dl(e, t, n, r);
      return;
    }
    fl(e, t, n, r);
  },
  ul = (e, t, n) => {
    let r = e === `` ? t : pl(t, e);
    r.classGroupId = n;
  },
  dl = (e, t, n, r) => {
    if (ml(e)) {
      cl(e(r), t, n, r);
      return;
    }
    (t.validators === null && (t.validators = []), t.validators.push(Qc(n, e)));
  },
  fl = (e, t, n, r) => {
    let i = Object.entries(e),
      a = i.length;
    for (let e = 0; e < a; e++) {
      let [a, o] = i[e];
      cl(o, pl(t, a), n, r);
    }
  },
  pl = (e, t) => {
    let n = e,
      r = t.split(el),
      i = r.length;
    for (let e = 0; e < i; e++) {
      let t = r[e],
        i = n.nextPart.get(t);
      (i || ((i = $c()), n.nextPart.set(t, i)), (n = i));
    }
    return n;
  },
  ml = (e) => `isThemeGetter` in e && e.isThemeGetter === !0,
  hl = (e) => {
    if (e < 1) return { get: () => void 0, set: () => {} };
    let t = 0,
      n = Object.create(null),
      r = Object.create(null),
      i = (i, a) => {
        ((n[i] = a), t++, t > e && ((t = 0), (r = n), (n = Object.create(null))));
      };
    return {
      get(e) {
        let t = n[e];
        if (t !== void 0) return t;
        if ((t = r[e]) !== void 0) return (i(e, t), t);
      },
      set(e, t) {
        e in n ? (n[e] = t) : i(e, t);
      },
    };
  },
  gl = `!`,
  _l = `:`,
  vl = [],
  yl = (e, t, n, r, i) => ({
    modifiers: e,
    hasImportantModifier: t,
    baseClassName: n,
    maybePostfixModifierPosition: r,
    isExternal: i,
  }),
  bl = (e) => {
    let { prefix: t, experimentalParseClassName: n } = e,
      r = (e) => {
        let t = [],
          n = 0,
          r = 0,
          i = 0,
          a,
          o = e.length;
        for (let s = 0; s < o; s++) {
          let o = e[s];
          if (n === 0 && r === 0) {
            if (o === _l) {
              (t.push(e.slice(i, s)), (i = s + 1));
              continue;
            }
            if (o === `/`) {
              a = s;
              continue;
            }
          }
          o === `[` ? n++ : o === `]` ? n-- : o === `(` ? r++ : o === `)` && r--;
        }
        let s = t.length === 0 ? e : e.slice(i),
          c = s,
          l = !1;
        s.endsWith(gl)
          ? ((c = s.slice(0, -1)), (l = !0))
          : s.startsWith(gl) && ((c = s.slice(1)), (l = !0));
        let u = a && a > i ? a - i : void 0;
        return yl(t, l, c, u);
      };
    if (t) {
      let e = t + _l,
        n = r;
      r = (t) => (t.startsWith(e) ? n(t.slice(e.length)) : yl(vl, !1, t, void 0, !0));
    }
    if (n) {
      let e = r;
      r = (t) => n({ className: t, parseClassName: e });
    }
    return r;
  },
  xl = (e) => {
    let t = new Map();
    return (
      e.orderSensitiveModifiers.forEach((e, n) => {
        t.set(e, 1e6 + n);
      }),
      (e) => {
        let n = [],
          r = [];
        for (let i = 0; i < e.length; i++) {
          let a = e[i],
            o = a[0] === `[`,
            s = t.has(a);
          o || s ? (r.length > 0 && (r.sort(), n.push(...r), (r = [])), n.push(a)) : r.push(a);
        }
        return (r.length > 0 && (r.sort(), n.push(...r)), n);
      }
    );
  },
  Sl = (e) => ({
    cache: hl(e.cacheSize),
    parseClassName: bl(e),
    sortModifiers: xl(e),
    postfixLookupClassGroupIds: Cl(e),
    ...rl(e),
  }),
  Cl = (e) => {
    let t = Object.create(null),
      n = e.postfixLookupClassGroups;
    if (n) for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  },
  wl = /\s+/,
  Tl = (e, t) => {
    let {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
        sortModifiers: a,
        postfixLookupClassGroupIds: o,
      } = t,
      s = [],
      c = e.trim().split(wl),
      l = ``;
    for (let e = c.length - 1; e >= 0; --e) {
      let t = c[e],
        {
          isExternal: u,
          modifiers: d,
          hasImportantModifier: f,
          baseClassName: p,
          maybePostfixModifierPosition: m,
        } = n(t);
      if (u) {
        l = t + (l.length > 0 ? ` ` + l : l);
        continue;
      }
      let h = !!m,
        g;
      if (h) {
        g = r(p.substring(0, m));
        let e = g && o[g] ? r(p) : void 0;
        e && e !== g && ((g = e), (h = !1));
      } else g = r(p);
      if (!g) {
        if (!h) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        if (((g = r(p)), !g)) {
          l = t + (l.length > 0 ? ` ` + l : l);
          continue;
        }
        h = !1;
      }
      let _ = d.length === 0 ? `` : d.length === 1 ? d[0] : a(d).join(`:`),
        v = f ? _ + gl : _,
        y = v + g;
      if (s.indexOf(y) > -1) continue;
      s.push(y);
      let b = i(g, h);
      for (let e = 0; e < b.length; ++e) {
        let t = b[e];
        s.push(v + t);
      }
      l = t + (l.length > 0 ? ` ` + l : l);
    }
    return l;
  },
  El = (...e) => {
    let t = 0,
      n,
      r,
      i = ``;
    for (; t < e.length;) (n = e[t++]) && (r = Dl(n)) && (i && (i += ` `), (i += r));
    return i;
  },
  Dl = (e) => {
    if (typeof e == `string`) return e;
    let t,
      n = ``;
    for (let r = 0; r < e.length; r++) e[r] && (t = Dl(e[r])) && (n && (n += ` `), (n += t));
    return n;
  },
  Ol = (e, ...t) => {
    let n,
      r,
      i,
      a,
      o = (o) => (
        (n = Sl(t.reduce((e, t) => t(e), e()))),
        (r = n.cache.get),
        (i = n.cache.set),
        (a = s),
        s(o)
      ),
      s = (e) => {
        let t = r(e);
        if (t) return t;
        let a = Tl(e, n);
        return (i(e, a), a);
      };
    return ((a = o), (...e) => a(El(...e)));
  },
  kl = [],
  Al = (e) => {
    let t = (t) => t[e] || kl;
    return ((t.isThemeGetter = !0), t);
  },
  jl = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Ml = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  Nl = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  Pl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Fl =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Il = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  Ll = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Rl =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  zl = (e) => Nl.test(e),
  Z = (e) => !!e && !Number.isNaN(Number(e)),
  Bl = (e) => !!e && Number.isInteger(Number(e)),
  Vl = (e) => e.endsWith(`%`) && Z(e.slice(0, -1)),
  Hl = (e) => Pl.test(e),
  Ul = () => !0,
  Wl = (e) => Fl.test(e) && !Il.test(e),
  Gl = () => !1,
  Kl = (e) => Ll.test(e),
  ql = (e) => Rl.test(e),
  Jl = (e) => !Q(e) && !$(e),
  Yl = (e) =>
    e.startsWith(`@container`) &&
    ((e[10] === `/` && e[11] !== void 0) ||
      (e[11] === `s` && e[16] !== void 0 && e.startsWith(`-size/`, 10)) ||
      (e[11] === `n` && e[18] !== void 0 && e.startsWith(`-normal/`, 10))),
  Xl = (e) => du(e, hu, Gl),
  Q = (e) => jl.test(e),
  Zl = (e) => du(e, gu, Wl),
  Ql = (e) => du(e, _u, Z),
  $l = (e) => du(e, yu, Ul),
  eu = (e) => du(e, vu, Gl),
  tu = (e) => du(e, pu, Gl),
  nu = (e) => du(e, mu, ql),
  ru = (e) => du(e, bu, Kl),
  $ = (e) => Ml.test(e),
  iu = (e) => fu(e, gu),
  au = (e) => fu(e, vu),
  ou = (e) => fu(e, pu),
  su = (e) => fu(e, hu),
  cu = (e) => fu(e, mu),
  lu = (e) => fu(e, bu, !0),
  uu = (e) => fu(e, yu, !0),
  du = (e, t, n) => {
    let r = jl.exec(e);
    return r ? (r[1] ? t(r[1]) : n(r[2])) : !1;
  },
  fu = (e, t, n = !1) => {
    let r = Ml.exec(e);
    return r ? (r[1] ? t(r[1]) : n) : !1;
  },
  pu = (e) => e === `position` || e === `percentage`,
  mu = (e) => e === `image` || e === `url`,
  hu = (e) => e === `length` || e === `size` || e === `bg-size`,
  gu = (e) => e === `length`,
  _u = (e) => e === `number`,
  vu = (e) => e === `family-name`,
  yu = (e) => e === `number` || e === `weight`,
  bu = (e) => e === `shadow`,
  xu = Ol(() => {
    let e = Al(`color`),
      t = Al(`font`),
      n = Al(`text`),
      r = Al(`font-weight`),
      i = Al(`tracking`),
      a = Al(`leading`),
      o = Al(`breakpoint`),
      s = Al(`container`),
      c = Al(`spacing`),
      l = Al(`radius`),
      u = Al(`shadow`),
      d = Al(`inset-shadow`),
      f = Al(`text-shadow`),
      p = Al(`drop-shadow`),
      m = Al(`blur`),
      h = Al(`perspective`),
      g = Al(`aspect`),
      _ = Al(`ease`),
      v = Al(`animate`),
      y = () => [`auto`, `avoid`, `all`, `avoid-page`, `page`, `left`, `right`, `column`],
      b = () => [
        `center`,
        `top`,
        `bottom`,
        `left`,
        `right`,
        `top-left`,
        `left-top`,
        `top-right`,
        `right-top`,
        `bottom-right`,
        `right-bottom`,
        `bottom-left`,
        `left-bottom`,
      ],
      x = () => [...b(), $, Q],
      S = () => [`auto`, `hidden`, `clip`, `visible`, `scroll`],
      C = () => [`auto`, `contain`, `none`],
      w = () => [$, Q, c],
      T = () => [zl, `full`, `auto`, ...w()],
      E = () => [Bl, `none`, `subgrid`, $, Q],
      D = () => [`auto`, { span: [`full`, Bl, $, Q] }, Bl, $, Q],
      O = () => [Bl, `auto`, $, Q],
      k = () => [`auto`, `min`, `max`, `fr`, $, Q],
      A = () => [
        `start`,
        `end`,
        `center`,
        `between`,
        `around`,
        `evenly`,
        `stretch`,
        `baseline`,
        `center-safe`,
        `end-safe`,
      ],
      j = () => [`start`, `end`, `center`, `stretch`, `center-safe`, `end-safe`],
      M = () => [`auto`, ...w()],
      ee = () => [
        zl,
        `auto`,
        `full`,
        `dvw`,
        `dvh`,
        `lvw`,
        `lvh`,
        `svw`,
        `svh`,
        `min`,
        `max`,
        `fit`,
        ...w(),
      ],
      N = () => [zl, `screen`, `full`, `dvw`, `lvw`, `svw`, `min`, `max`, `fit`, ...w()],
      te = () => [zl, `screen`, `full`, `lh`, `dvh`, `lvh`, `svh`, `min`, `max`, `fit`, ...w()],
      P = () => [e, $, Q],
      ne = () => [...b(), ou, tu, { position: [$, Q] }],
      re = () => [`no-repeat`, { repeat: [``, `x`, `y`, `space`, `round`] }],
      ie = () => [`auto`, `cover`, `contain`, su, Xl, { size: [$, Q] }],
      ae = () => [Vl, iu, Zl],
      F = () => [``, `none`, `full`, l, $, Q],
      I = () => [``, Z, iu, Zl],
      L = () => [`solid`, `dashed`, `dotted`, `double`],
      oe = () => [
        `normal`,
        `multiply`,
        `screen`,
        `overlay`,
        `darken`,
        `lighten`,
        `color-dodge`,
        `color-burn`,
        `hard-light`,
        `soft-light`,
        `difference`,
        `exclusion`,
        `hue`,
        `saturation`,
        `color`,
        `luminosity`,
      ],
      R = () => [Z, Vl, ou, tu],
      se = () => [``, `none`, m, $, Q],
      z = () => [`none`, Z, $, Q],
      ce = () => [`none`, Z, $, Q],
      le = () => [Z, $, Q],
      B = () => [zl, `full`, ...w()];
    return {
      cacheSize: 500,
      theme: {
        animate: [`spin`, `ping`, `pulse`, `bounce`],
        aspect: [`video`],
        blur: [Hl],
        breakpoint: [Hl],
        color: [Ul],
        container: [Hl],
        "drop-shadow": [Hl],
        ease: [`in`, `out`, `in-out`],
        font: [Jl],
        "font-weight": [
          `thin`,
          `extralight`,
          `light`,
          `normal`,
          `medium`,
          `semibold`,
          `bold`,
          `extrabold`,
          `black`,
        ],
        "inset-shadow": [Hl],
        leading: [`none`, `tight`, `snug`, `normal`, `relaxed`, `loose`],
        perspective: [`dramatic`, `near`, `normal`, `midrange`, `distant`, `none`],
        radius: [Hl],
        shadow: [Hl],
        spacing: [`px`, Z],
        text: [Hl],
        "text-shadow": [Hl],
        tracking: [`tighter`, `tight`, `normal`, `wide`, `wider`, `widest`],
      },
      classGroups: {
        aspect: [{ aspect: [`auto`, `square`, zl, Q, $, g] }],
        container: [`container`],
        "container-type": [{ "@container": [``, `normal`, `size`, $, Q] }],
        "container-named": [Yl],
        columns: [{ columns: [Z, Q, $, s] }],
        "break-after": [{ "break-after": y() }],
        "break-before": [{ "break-before": y() }],
        "break-inside": [{ "break-inside": [`auto`, `avoid`, `avoid-page`, `avoid-column`] }],
        "box-decoration": [{ "box-decoration": [`slice`, `clone`] }],
        box: [{ box: [`border`, `content`] }],
        display: [
          `block`,
          `inline-block`,
          `inline`,
          `flex`,
          `inline-flex`,
          `table`,
          `inline-table`,
          `table-caption`,
          `table-cell`,
          `table-column`,
          `table-column-group`,
          `table-footer-group`,
          `table-header-group`,
          `table-row-group`,
          `table-row`,
          `flow-root`,
          `grid`,
          `inline-grid`,
          `contents`,
          `list-item`,
          `hidden`,
        ],
        sr: [`sr-only`, `not-sr-only`],
        float: [{ float: [`right`, `left`, `none`, `start`, `end`] }],
        clear: [{ clear: [`left`, `right`, `both`, `none`, `start`, `end`] }],
        isolation: [`isolate`, `isolation-auto`],
        "object-fit": [{ object: [`contain`, `cover`, `fill`, `none`, `scale-down`] }],
        "object-position": [{ object: x() }],
        overflow: [{ overflow: S() }],
        "overflow-x": [{ "overflow-x": S() }],
        "overflow-y": [{ "overflow-y": S() }],
        overscroll: [{ overscroll: C() }],
        "overscroll-x": [{ "overscroll-x": C() }],
        "overscroll-y": [{ "overscroll-y": C() }],
        position: [`static`, `fixed`, `absolute`, `relative`, `sticky`],
        inset: [{ inset: T() }],
        "inset-x": [{ "inset-x": T() }],
        "inset-y": [{ "inset-y": T() }],
        start: [{ "inset-s": T(), start: T() }],
        end: [{ "inset-e": T(), end: T() }],
        "inset-bs": [{ "inset-bs": T() }],
        "inset-be": [{ "inset-be": T() }],
        top: [{ top: T() }],
        right: [{ right: T() }],
        bottom: [{ bottom: T() }],
        left: [{ left: T() }],
        visibility: [`visible`, `invisible`, `collapse`],
        z: [{ z: [Bl, `auto`, $, Q] }],
        basis: [{ basis: [zl, `full`, `auto`, s, ...w()] }],
        "flex-direction": [{ flex: [`row`, `row-reverse`, `col`, `col-reverse`] }],
        "flex-wrap": [{ flex: [`nowrap`, `wrap`, `wrap-reverse`] }],
        flex: [{ flex: [Z, zl, `auto`, `initial`, `none`, Q] }],
        grow: [{ grow: [``, Z, $, Q] }],
        shrink: [{ shrink: [``, Z, $, Q] }],
        order: [{ order: [Bl, `first`, `last`, `none`, $, Q] }],
        "grid-cols": [{ "grid-cols": E() }],
        "col-start-end": [{ col: D() }],
        "col-start": [{ "col-start": O() }],
        "col-end": [{ "col-end": O() }],
        "grid-rows": [{ "grid-rows": E() }],
        "row-start-end": [{ row: D() }],
        "row-start": [{ "row-start": O() }],
        "row-end": [{ "row-end": O() }],
        "grid-flow": [{ "grid-flow": [`row`, `col`, `dense`, `row-dense`, `col-dense`] }],
        "auto-cols": [{ "auto-cols": k() }],
        "auto-rows": [{ "auto-rows": k() }],
        gap: [{ gap: w() }],
        "gap-x": [{ "gap-x": w() }],
        "gap-y": [{ "gap-y": w() }],
        "justify-content": [{ justify: [...A(), `normal`] }],
        "justify-items": [{ "justify-items": [...j(), `normal`] }],
        "justify-self": [{ "justify-self": [`auto`, ...j()] }],
        "align-content": [{ content: [`normal`, ...A()] }],
        "align-items": [{ items: [...j(), { baseline: [``, `last`] }] }],
        "align-self": [{ self: [`auto`, ...j(), { baseline: [``, `last`] }] }],
        "place-content": [{ "place-content": A() }],
        "place-items": [{ "place-items": [...j(), `baseline`] }],
        "place-self": [{ "place-self": [`auto`, ...j()] }],
        p: [{ p: w() }],
        px: [{ px: w() }],
        py: [{ py: w() }],
        ps: [{ ps: w() }],
        pe: [{ pe: w() }],
        pbs: [{ pbs: w() }],
        pbe: [{ pbe: w() }],
        pt: [{ pt: w() }],
        pr: [{ pr: w() }],
        pb: [{ pb: w() }],
        pl: [{ pl: w() }],
        m: [{ m: M() }],
        mx: [{ mx: M() }],
        my: [{ my: M() }],
        ms: [{ ms: M() }],
        me: [{ me: M() }],
        mbs: [{ mbs: M() }],
        mbe: [{ mbe: M() }],
        mt: [{ mt: M() }],
        mr: [{ mr: M() }],
        mb: [{ mb: M() }],
        ml: [{ ml: M() }],
        "space-x": [{ "space-x": w() }],
        "space-x-reverse": [`space-x-reverse`],
        "space-y": [{ "space-y": w() }],
        "space-y-reverse": [`space-y-reverse`],
        size: [{ size: ee() }],
        "inline-size": [{ inline: [`auto`, ...N()] }],
        "min-inline-size": [{ "min-inline": [`auto`, ...N()] }],
        "max-inline-size": [{ "max-inline": [`none`, ...N()] }],
        "block-size": [{ block: [`auto`, ...te()] }],
        "min-block-size": [{ "min-block": [`auto`, ...te()] }],
        "max-block-size": [{ "max-block": [`none`, ...te()] }],
        w: [{ w: [s, `screen`, ...ee()] }],
        "min-w": [{ "min-w": [s, `screen`, `none`, ...ee()] }],
        "max-w": [{ "max-w": [s, `screen`, `none`, `prose`, { screen: [o] }, ...ee()] }],
        h: [{ h: [`screen`, `lh`, ...ee()] }],
        "min-h": [{ "min-h": [`screen`, `lh`, `none`, ...ee()] }],
        "max-h": [{ "max-h": [`screen`, `lh`, ...ee()] }],
        "font-size": [{ text: [`base`, n, iu, Zl] }],
        "font-smoothing": [`antialiased`, `subpixel-antialiased`],
        "font-style": [`italic`, `not-italic`],
        "font-weight": [{ font: [r, uu, $l] }],
        "font-stretch": [
          {
            "font-stretch": [
              `ultra-condensed`,
              `extra-condensed`,
              `condensed`,
              `semi-condensed`,
              `normal`,
              `semi-expanded`,
              `expanded`,
              `extra-expanded`,
              `ultra-expanded`,
              Vl,
              Q,
            ],
          },
        ],
        "font-family": [{ font: [au, eu, t] }],
        "font-features": [{ "font-features": [Q] }],
        "fvn-normal": [`normal-nums`],
        "fvn-ordinal": [`ordinal`],
        "fvn-slashed-zero": [`slashed-zero`],
        "fvn-figure": [`lining-nums`, `oldstyle-nums`],
        "fvn-spacing": [`proportional-nums`, `tabular-nums`],
        "fvn-fraction": [`diagonal-fractions`, `stacked-fractions`],
        tracking: [{ tracking: [i, $, Q] }],
        "line-clamp": [{ "line-clamp": [Z, `none`, $, Ql] }],
        leading: [{ leading: [a, ...w()] }],
        "list-image": [{ "list-image": [`none`, $, Q] }],
        "list-style-position": [{ list: [`inside`, `outside`] }],
        "list-style-type": [{ list: [`disc`, `decimal`, `none`, $, Q] }],
        "text-alignment": [{ text: [`left`, `center`, `right`, `justify`, `start`, `end`] }],
        "placeholder-color": [{ placeholder: P() }],
        "text-color": [{ text: P() }],
        "text-decoration": [`underline`, `overline`, `line-through`, `no-underline`],
        "text-decoration-style": [{ decoration: [...L(), `wavy`] }],
        "text-decoration-thickness": [{ decoration: [Z, `from-font`, `auto`, $, Zl] }],
        "text-decoration-color": [{ decoration: P() }],
        "underline-offset": [{ "underline-offset": [Z, `auto`, $, Q] }],
        "text-transform": [`uppercase`, `lowercase`, `capitalize`, `normal-case`],
        "text-overflow": [`truncate`, `text-ellipsis`, `text-clip`],
        "text-wrap": [{ text: [`wrap`, `nowrap`, `balance`, `pretty`] }],
        indent: [{ indent: w() }],
        "tab-size": [{ tab: [Bl, $, Q] }],
        "vertical-align": [
          {
            align: [
              `baseline`,
              `top`,
              `middle`,
              `bottom`,
              `text-top`,
              `text-bottom`,
              `sub`,
              `super`,
              $,
              Q,
            ],
          },
        ],
        whitespace: [
          { whitespace: [`normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap`, `break-spaces`] },
        ],
        break: [{ break: [`normal`, `words`, `all`, `keep`] }],
        wrap: [{ wrap: [`break-word`, `anywhere`, `normal`] }],
        hyphens: [{ hyphens: [`none`, `manual`, `auto`] }],
        content: [{ content: [`none`, $, Q] }],
        "bg-attachment": [{ bg: [`fixed`, `local`, `scroll`] }],
        "bg-clip": [{ "bg-clip": [`border`, `padding`, `content`, `text`] }],
        "bg-origin": [{ "bg-origin": [`border`, `padding`, `content`] }],
        "bg-position": [{ bg: ne() }],
        "bg-repeat": [{ bg: re() }],
        "bg-size": [{ bg: ie() }],
        "bg-image": [
          {
            bg: [
              `none`,
              {
                linear: [{ to: [`t`, `tr`, `r`, `br`, `b`, `bl`, `l`, `tl`] }, Bl, $, Q],
                radial: [``, $, Q],
                conic: [Bl, $, Q],
              },
              cu,
              nu,
            ],
          },
        ],
        "bg-color": [{ bg: P() }],
        "gradient-from-pos": [{ from: ae() }],
        "gradient-via-pos": [{ via: ae() }],
        "gradient-to-pos": [{ to: ae() }],
        "gradient-from": [{ from: P() }],
        "gradient-via": [{ via: P() }],
        "gradient-to": [{ to: P() }],
        rounded: [{ rounded: F() }],
        "rounded-s": [{ "rounded-s": F() }],
        "rounded-e": [{ "rounded-e": F() }],
        "rounded-t": [{ "rounded-t": F() }],
        "rounded-r": [{ "rounded-r": F() }],
        "rounded-b": [{ "rounded-b": F() }],
        "rounded-l": [{ "rounded-l": F() }],
        "rounded-ss": [{ "rounded-ss": F() }],
        "rounded-se": [{ "rounded-se": F() }],
        "rounded-ee": [{ "rounded-ee": F() }],
        "rounded-es": [{ "rounded-es": F() }],
        "rounded-tl": [{ "rounded-tl": F() }],
        "rounded-tr": [{ "rounded-tr": F() }],
        "rounded-br": [{ "rounded-br": F() }],
        "rounded-bl": [{ "rounded-bl": F() }],
        "border-w": [{ border: I() }],
        "border-w-x": [{ "border-x": I() }],
        "border-w-y": [{ "border-y": I() }],
        "border-w-s": [{ "border-s": I() }],
        "border-w-e": [{ "border-e": I() }],
        "border-w-bs": [{ "border-bs": I() }],
        "border-w-be": [{ "border-be": I() }],
        "border-w-t": [{ "border-t": I() }],
        "border-w-r": [{ "border-r": I() }],
        "border-w-b": [{ "border-b": I() }],
        "border-w-l": [{ "border-l": I() }],
        "divide-x": [{ "divide-x": I() }],
        "divide-x-reverse": [`divide-x-reverse`],
        "divide-y": [{ "divide-y": I() }],
        "divide-y-reverse": [`divide-y-reverse`],
        "border-style": [{ border: [...L(), `hidden`, `none`] }],
        "divide-style": [{ divide: [...L(), `hidden`, `none`] }],
        "border-color": [{ border: P() }],
        "border-color-x": [{ "border-x": P() }],
        "border-color-y": [{ "border-y": P() }],
        "border-color-s": [{ "border-s": P() }],
        "border-color-e": [{ "border-e": P() }],
        "border-color-bs": [{ "border-bs": P() }],
        "border-color-be": [{ "border-be": P() }],
        "border-color-t": [{ "border-t": P() }],
        "border-color-r": [{ "border-r": P() }],
        "border-color-b": [{ "border-b": P() }],
        "border-color-l": [{ "border-l": P() }],
        "divide-color": [{ divide: P() }],
        "outline-style": [{ outline: [...L(), `none`, `hidden`] }],
        "outline-offset": [{ "outline-offset": [Z, $, Q] }],
        "outline-w": [{ outline: [``, Z, iu, Zl] }],
        "outline-color": [{ outline: P() }],
        shadow: [{ shadow: [``, `none`, u, lu, ru] }],
        "shadow-color": [{ shadow: P() }],
        "inset-shadow": [{ "inset-shadow": [`none`, d, lu, ru] }],
        "inset-shadow-color": [{ "inset-shadow": P() }],
        "ring-w": [{ ring: I() }],
        "ring-w-inset": [`ring-inset`],
        "ring-color": [{ ring: P() }],
        "ring-offset-w": [{ "ring-offset": [Z, Zl] }],
        "ring-offset-color": [{ "ring-offset": P() }],
        "inset-ring-w": [{ "inset-ring": I() }],
        "inset-ring-color": [{ "inset-ring": P() }],
        "text-shadow": [{ "text-shadow": [`none`, f, lu, ru] }],
        "text-shadow-color": [{ "text-shadow": P() }],
        opacity: [{ opacity: [Z, $, Q] }],
        "mix-blend": [{ "mix-blend": [...oe(), `plus-darker`, `plus-lighter`] }],
        "bg-blend": [{ "bg-blend": oe() }],
        "mask-clip": [
          { "mask-clip": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] },
          `mask-no-clip`,
        ],
        "mask-composite": [{ mask: [`add`, `subtract`, `intersect`, `exclude`] }],
        "mask-image-linear-pos": [{ "mask-linear": [Z] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": R() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": R() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": P() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": P() }],
        "mask-image-t-from-pos": [{ "mask-t-from": R() }],
        "mask-image-t-to-pos": [{ "mask-t-to": R() }],
        "mask-image-t-from-color": [{ "mask-t-from": P() }],
        "mask-image-t-to-color": [{ "mask-t-to": P() }],
        "mask-image-r-from-pos": [{ "mask-r-from": R() }],
        "mask-image-r-to-pos": [{ "mask-r-to": R() }],
        "mask-image-r-from-color": [{ "mask-r-from": P() }],
        "mask-image-r-to-color": [{ "mask-r-to": P() }],
        "mask-image-b-from-pos": [{ "mask-b-from": R() }],
        "mask-image-b-to-pos": [{ "mask-b-to": R() }],
        "mask-image-b-from-color": [{ "mask-b-from": P() }],
        "mask-image-b-to-color": [{ "mask-b-to": P() }],
        "mask-image-l-from-pos": [{ "mask-l-from": R() }],
        "mask-image-l-to-pos": [{ "mask-l-to": R() }],
        "mask-image-l-from-color": [{ "mask-l-from": P() }],
        "mask-image-l-to-color": [{ "mask-l-to": P() }],
        "mask-image-x-from-pos": [{ "mask-x-from": R() }],
        "mask-image-x-to-pos": [{ "mask-x-to": R() }],
        "mask-image-x-from-color": [{ "mask-x-from": P() }],
        "mask-image-x-to-color": [{ "mask-x-to": P() }],
        "mask-image-y-from-pos": [{ "mask-y-from": R() }],
        "mask-image-y-to-pos": [{ "mask-y-to": R() }],
        "mask-image-y-from-color": [{ "mask-y-from": P() }],
        "mask-image-y-to-color": [{ "mask-y-to": P() }],
        "mask-image-radial": [{ "mask-radial": [$, Q] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": R() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": R() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": P() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": P() }],
        "mask-image-radial-shape": [{ "mask-radial": [`circle`, `ellipse`] }],
        "mask-image-radial-size": [
          { "mask-radial": [{ closest: [`side`, `corner`], farthest: [`side`, `corner`] }] },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": b() }],
        "mask-image-conic-pos": [{ "mask-conic": [Z] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": R() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": R() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": P() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": P() }],
        "mask-mode": [{ mask: [`alpha`, `luminance`, `match`] }],
        "mask-origin": [
          { "mask-origin": [`border`, `padding`, `content`, `fill`, `stroke`, `view`] },
        ],
        "mask-position": [{ mask: ne() }],
        "mask-repeat": [{ mask: re() }],
        "mask-size": [{ mask: ie() }],
        "mask-type": [{ "mask-type": [`alpha`, `luminance`] }],
        "mask-image": [{ mask: [`none`, $, Q] }],
        filter: [{ filter: [``, `none`, $, Q] }],
        blur: [{ blur: se() }],
        brightness: [{ brightness: [Z, $, Q] }],
        contrast: [{ contrast: [Z, $, Q] }],
        "drop-shadow": [{ "drop-shadow": [``, `none`, p, lu, ru] }],
        "drop-shadow-color": [{ "drop-shadow": P() }],
        grayscale: [{ grayscale: [``, Z, $, Q] }],
        "hue-rotate": [{ "hue-rotate": [Z, $, Q] }],
        invert: [{ invert: [``, Z, $, Q] }],
        saturate: [{ saturate: [Z, $, Q] }],
        sepia: [{ sepia: [``, Z, $, Q] }],
        "backdrop-filter": [{ "backdrop-filter": [``, `none`, $, Q] }],
        "backdrop-blur": [{ "backdrop-blur": se() }],
        "backdrop-brightness": [{ "backdrop-brightness": [Z, $, Q] }],
        "backdrop-contrast": [{ "backdrop-contrast": [Z, $, Q] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [``, Z, $, Q] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [Z, $, Q] }],
        "backdrop-invert": [{ "backdrop-invert": [``, Z, $, Q] }],
        "backdrop-opacity": [{ "backdrop-opacity": [Z, $, Q] }],
        "backdrop-saturate": [{ "backdrop-saturate": [Z, $, Q] }],
        "backdrop-sepia": [{ "backdrop-sepia": [``, Z, $, Q] }],
        "border-collapse": [{ border: [`collapse`, `separate`] }],
        "border-spacing": [{ "border-spacing": w() }],
        "border-spacing-x": [{ "border-spacing-x": w() }],
        "border-spacing-y": [{ "border-spacing-y": w() }],
        "table-layout": [{ table: [`auto`, `fixed`] }],
        caption: [{ caption: [`top`, `bottom`] }],
        transition: [
          { transition: [``, `all`, `colors`, `opacity`, `shadow`, `transform`, `none`, $, Q] },
        ],
        "transition-behavior": [{ transition: [`normal`, `discrete`] }],
        duration: [{ duration: [Z, `initial`, $, Q] }],
        ease: [{ ease: [`linear`, `initial`, _, $, Q] }],
        delay: [{ delay: [Z, $, Q] }],
        animate: [{ animate: [`none`, v, $, Q] }],
        backface: [{ backface: [`hidden`, `visible`] }],
        perspective: [{ perspective: [h, $, Q] }],
        "perspective-origin": [{ "perspective-origin": x() }],
        rotate: [{ rotate: z() }],
        "rotate-x": [{ "rotate-x": z() }],
        "rotate-y": [{ "rotate-y": z() }],
        "rotate-z": [{ "rotate-z": z() }],
        scale: [{ scale: ce() }],
        "scale-x": [{ "scale-x": ce() }],
        "scale-y": [{ "scale-y": ce() }],
        "scale-z": [{ "scale-z": ce() }],
        "scale-3d": [`scale-3d`],
        skew: [{ skew: le() }],
        "skew-x": [{ "skew-x": le() }],
        "skew-y": [{ "skew-y": le() }],
        transform: [{ transform: [$, Q, ``, `none`, `gpu`, `cpu`] }],
        "transform-origin": [{ origin: x() }],
        "transform-style": [{ transform: [`3d`, `flat`] }],
        translate: [{ translate: B() }],
        "translate-x": [{ "translate-x": B() }],
        "translate-y": [{ "translate-y": B() }],
        "translate-z": [{ "translate-z": B() }],
        "translate-none": [`translate-none`],
        zoom: [{ zoom: [Bl, $, Q] }],
        accent: [{ accent: P() }],
        appearance: [{ appearance: [`none`, `auto`] }],
        "caret-color": [{ caret: P() }],
        "color-scheme": [
          { scheme: [`normal`, `dark`, `light`, `light-dark`, `only-dark`, `only-light`] },
        ],
        cursor: [
          {
            cursor: [
              `auto`,
              `default`,
              `pointer`,
              `wait`,
              `text`,
              `move`,
              `help`,
              `not-allowed`,
              `none`,
              `context-menu`,
              `progress`,
              `cell`,
              `crosshair`,
              `vertical-text`,
              `alias`,
              `copy`,
              `no-drop`,
              `grab`,
              `grabbing`,
              `all-scroll`,
              `col-resize`,
              `row-resize`,
              `n-resize`,
              `e-resize`,
              `s-resize`,
              `w-resize`,
              `ne-resize`,
              `nw-resize`,
              `se-resize`,
              `sw-resize`,
              `ew-resize`,
              `ns-resize`,
              `nesw-resize`,
              `nwse-resize`,
              `zoom-in`,
              `zoom-out`,
              $,
              Q,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": [`fixed`, `content`] }],
        "pointer-events": [{ "pointer-events": [`auto`, `none`] }],
        resize: [{ resize: [`none`, ``, `y`, `x`] }],
        "scroll-behavior": [{ scroll: [`auto`, `smooth`] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": P() }],
        "scrollbar-track-color": [{ "scrollbar-track": P() }],
        "scrollbar-gutter": [{ "scrollbar-gutter": [`auto`, `stable`, `both`] }],
        "scrollbar-w": [{ scrollbar: [`auto`, `thin`, `none`] }],
        "scroll-m": [{ "scroll-m": w() }],
        "scroll-mx": [{ "scroll-mx": w() }],
        "scroll-my": [{ "scroll-my": w() }],
        "scroll-ms": [{ "scroll-ms": w() }],
        "scroll-me": [{ "scroll-me": w() }],
        "scroll-mbs": [{ "scroll-mbs": w() }],
        "scroll-mbe": [{ "scroll-mbe": w() }],
        "scroll-mt": [{ "scroll-mt": w() }],
        "scroll-mr": [{ "scroll-mr": w() }],
        "scroll-mb": [{ "scroll-mb": w() }],
        "scroll-ml": [{ "scroll-ml": w() }],
        "scroll-p": [{ "scroll-p": w() }],
        "scroll-px": [{ "scroll-px": w() }],
        "scroll-py": [{ "scroll-py": w() }],
        "scroll-ps": [{ "scroll-ps": w() }],
        "scroll-pe": [{ "scroll-pe": w() }],
        "scroll-pbs": [{ "scroll-pbs": w() }],
        "scroll-pbe": [{ "scroll-pbe": w() }],
        "scroll-pt": [{ "scroll-pt": w() }],
        "scroll-pr": [{ "scroll-pr": w() }],
        "scroll-pb": [{ "scroll-pb": w() }],
        "scroll-pl": [{ "scroll-pl": w() }],
        "snap-align": [{ snap: [`start`, `end`, `center`, `align-none`] }],
        "snap-stop": [{ snap: [`normal`, `always`] }],
        "snap-type": [{ snap: [`none`, `x`, `y`, `both`] }],
        "snap-strictness": [{ snap: [`mandatory`, `proximity`] }],
        touch: [{ touch: [`auto`, `none`, `manipulation`] }],
        "touch-x": [{ "touch-pan": [`x`, `left`, `right`] }],
        "touch-y": [{ "touch-pan": [`y`, `up`, `down`] }],
        "touch-pz": [`touch-pinch-zoom`],
        select: [{ select: [`none`, `text`, `all`, `auto`] }],
        "will-change": [{ "will-change": [`auto`, `scroll`, `contents`, `transform`, $, Q] }],
        fill: [{ fill: [`none`, ...P()] }],
        "stroke-w": [{ stroke: [Z, iu, Zl, Ql] }],
        stroke: [{ stroke: [`none`, ...P()] }],
        "forced-color-adjust": [{ "forced-color-adjust": [`auto`, `none`] }],
      },
      conflictingClassGroups: {
        "container-named": [`container-type`],
        overflow: [`overflow-x`, `overflow-y`],
        overscroll: [`overscroll-x`, `overscroll-y`],
        inset: [
          `inset-x`,
          `inset-y`,
          `inset-bs`,
          `inset-be`,
          `start`,
          `end`,
          `top`,
          `right`,
          `bottom`,
          `left`,
        ],
        "inset-x": [`right`, `left`],
        "inset-y": [`top`, `bottom`],
        flex: [`basis`, `grow`, `shrink`],
        gap: [`gap-x`, `gap-y`],
        p: [`px`, `py`, `ps`, `pe`, `pbs`, `pbe`, `pt`, `pr`, `pb`, `pl`],
        px: [`pr`, `pl`],
        py: [`pt`, `pb`],
        m: [`mx`, `my`, `ms`, `me`, `mbs`, `mbe`, `mt`, `mr`, `mb`, `ml`],
        mx: [`mr`, `ml`],
        my: [`mt`, `mb`],
        size: [`w`, `h`],
        "font-size": [`leading`],
        "fvn-normal": [
          `fvn-ordinal`,
          `fvn-slashed-zero`,
          `fvn-figure`,
          `fvn-spacing`,
          `fvn-fraction`,
        ],
        "fvn-ordinal": [`fvn-normal`],
        "fvn-slashed-zero": [`fvn-normal`],
        "fvn-figure": [`fvn-normal`],
        "fvn-spacing": [`fvn-normal`],
        "fvn-fraction": [`fvn-normal`],
        "line-clamp": [`display`, `overflow`],
        rounded: [
          `rounded-s`,
          `rounded-e`,
          `rounded-t`,
          `rounded-r`,
          `rounded-b`,
          `rounded-l`,
          `rounded-ss`,
          `rounded-se`,
          `rounded-ee`,
          `rounded-es`,
          `rounded-tl`,
          `rounded-tr`,
          `rounded-br`,
          `rounded-bl`,
        ],
        "rounded-s": [`rounded-ss`, `rounded-es`],
        "rounded-e": [`rounded-se`, `rounded-ee`],
        "rounded-t": [`rounded-tl`, `rounded-tr`],
        "rounded-r": [`rounded-tr`, `rounded-br`],
        "rounded-b": [`rounded-br`, `rounded-bl`],
        "rounded-l": [`rounded-tl`, `rounded-bl`],
        "border-spacing": [`border-spacing-x`, `border-spacing-y`],
        "border-w": [
          `border-w-x`,
          `border-w-y`,
          `border-w-s`,
          `border-w-e`,
          `border-w-bs`,
          `border-w-be`,
          `border-w-t`,
          `border-w-r`,
          `border-w-b`,
          `border-w-l`,
        ],
        "border-w-x": [`border-w-r`, `border-w-l`],
        "border-w-y": [`border-w-t`, `border-w-b`],
        "border-color": [
          `border-color-x`,
          `border-color-y`,
          `border-color-s`,
          `border-color-e`,
          `border-color-bs`,
          `border-color-be`,
          `border-color-t`,
          `border-color-r`,
          `border-color-b`,
          `border-color-l`,
        ],
        "border-color-x": [`border-color-r`, `border-color-l`],
        "border-color-y": [`border-color-t`, `border-color-b`],
        translate: [`translate-x`, `translate-y`, `translate-none`],
        "translate-none": [`translate`, `translate-x`, `translate-y`, `translate-z`],
        "scroll-m": [
          `scroll-mx`,
          `scroll-my`,
          `scroll-ms`,
          `scroll-me`,
          `scroll-mbs`,
          `scroll-mbe`,
          `scroll-mt`,
          `scroll-mr`,
          `scroll-mb`,
          `scroll-ml`,
        ],
        "scroll-mx": [`scroll-mr`, `scroll-ml`],
        "scroll-my": [`scroll-mt`, `scroll-mb`],
        "scroll-p": [
          `scroll-px`,
          `scroll-py`,
          `scroll-ps`,
          `scroll-pe`,
          `scroll-pbs`,
          `scroll-pbe`,
          `scroll-pt`,
          `scroll-pr`,
          `scroll-pb`,
          `scroll-pl`,
        ],
        "scroll-px": [`scroll-pr`, `scroll-pl`],
        "scroll-py": [`scroll-pt`, `scroll-pb`],
        touch: [`touch-x`, `touch-y`, `touch-pz`],
        "touch-x": [`touch`],
        "touch-y": [`touch`],
        "touch-pz": [`touch`],
      },
      conflictingClassGroupModifiers: { "font-size": [`leading`] },
      postfixLookupClassGroups: [`container-type`],
      orderSensitiveModifiers: [
        `*`,
        `**`,
        `after`,
        `backdrop`,
        `before`,
        `details-content`,
        `file`,
        `first-letter`,
        `first-line`,
        `marker`,
        `placeholder`,
        `selection`,
      ],
    };
  });
function Su(...e) {
  return xu(Xc(e));
}
var Cu = [
  { label: `Home`, id: `hero` },
  { label: `Our Story`, id: `intro` },
  { label: `Our Water`, id: `reveal` },
  { label: `Products`, id: `details` },
  { label: `Quality`, id: `technology` },
  { label: `Partner With Us`, id: `cta` },
];
function wu() {
  let e = b(60),
    [t, n] = (0, s.useState)(!1),
    r = e > 0.03;
  (0, s.useEffect)(
    () => (
      (document.body.style.overflow = t ? `hidden` : ``),
      () => {
        document.body.style.overflow = ``;
      }
    ),
    [t],
  );
  let i = (e) => {
    (n(!1), Oc(e));
  };
  return (0, X.jsxs)(`header`, {
    className: Su(
      `fixed inset-x-0 top-0 z-50 transition-all duration-700`,
      r
        ? `border-b border-hairline bg-background/70 backdrop-blur-xl`
        : `border-b border-transparent`,
    ),
    children: [
      (0, X.jsxs)(`div`, {
        className: `mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10`,
        children: [
          (0, X.jsxs)(`button`, {
            onClick: () => i(`hero`),
            className: `flex items-baseline gap-2 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`,
            "aria-label": `The Billionaire's Aqua — back to top`,
            children: [
              (0, X.jsx)(`span`, {
                className: `font-display text-[0.6rem] tracking-[0.4em] text-muted-foreground uppercase`,
                children: `The`,
              }),
              (0, X.jsx)(`span`, {
                className: `font-display text-sm tracking-[0.3em] text-foreground uppercase`,
                children: `Billionaire's Aqua`,
              }),
            ],
          }),
          (0, X.jsxs)(`nav`, {
            "aria-label": `Primary`,
            className: `hidden items-center gap-10 md:flex`,
            children: [
              Cu.map((e) =>
                (0, X.jsxs)(
                  `button`,
                  {
                    onClick: () => i(e.id),
                    className: `group relative font-body text-[0.72rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground`,
                    children: [
                      e.label,
                      (0, X.jsx)(`span`, {
                        className: `absolute -bottom-1 left-0 h-px w-0 bg-accent-gold transition-all duration-500 group-hover:w-full`,
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
              (0, X.jsx)(`button`, {
                onClick: () => i(`contact`),
                className: `rounded-full border border-hairline px-6 py-2.5 font-body text-[0.7rem] tracking-[0.2em] text-foreground uppercase transition-colors duration-500 hover:border-accent-gold hover:text-accent-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring`,
                children: `Enquire now`,
              }),
            ],
          }),
          (0, X.jsx)(`button`, {
            onClick: () => n((e) => !e),
            "aria-label": t ? `Close menu` : `Open menu`,
            "aria-expanded": t,
            className: `flex min-h-11 min-w-11 items-center justify-center text-foreground md:hidden`,
            children: t
              ? (0, X.jsx)(Jc, { className: `size-5` })
              : (0, X.jsx)(Kc, { className: `size-5` }),
          }),
        ],
      }),
      t &&
        (0, X.jsx)(`div`, {
          className: `border-t border-hairline bg-background/95 backdrop-blur-xl md:hidden`,
          children: (0, X.jsxs)(`nav`, {
            "aria-label": `Mobile`,
            className: `flex flex-col px-6 py-6`,
            children: [
              Cu.map((e) =>
                (0, X.jsx)(
                  `button`,
                  {
                    onClick: () => i(e.id),
                    className: `border-b border-hairline py-5 text-left font-display text-xl tracking-[0.08em] text-foreground uppercase`,
                    children: e.label,
                  },
                  e.id,
                ),
              ),
              (0, X.jsx)(`button`, {
                onClick: () => i(`contact`),
                className: `mt-6 rounded-full bg-foreground py-4 font-body text-[0.72rem] tracking-[0.22em] text-background uppercase`,
                children: `Enquire now`,
              }),
            ],
          }),
        }),
    ],
  });
}
var Tu = {
  hero: `Hero`,
  intro: `Introduction`,
  focus: `Focus`,
  details: `Details`,
  reveal: `Reveal`,
  angles: `Every angle`,
  technology: `Technology`,
  moment: `The moment`,
  cta: `Get started`,
};
function Eu() {
  let e = b(200);
  return (0, X.jsx)(`nav`, {
    "aria-label": `Scene navigation`,
    className: `fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex`,
    children: c.map((t, n) => {
      let r = c[n + 1]?.at ?? 1.0001,
        i = e >= t.at - 0.001 && e < r;
      return (0, X.jsx)(
        `button`,
        {
          onClick: () => Oc(t.id),
          "aria-label": `Go to ${Tu[t.id] ?? t.id}`,
          "aria-current": i ? `true` : void 0,
          className: `group flex min-h-6 items-center justify-center`,
          children: (0, X.jsx)(`span`, {
            className: Su(
              `size-1.5 rounded-full transition-all duration-500`,
              i ? `scale-150 bg-foreground` : `bg-muted-foreground/40 group-hover:bg-accent-gold`,
            ),
          }),
        },
        t.id,
      );
    }),
  });
}
function Du() {
  return (0, X.jsx)(`footer`, {
    className: `relative z-10 border-t border-hairline bg-black/40 px-6 py-20 md:px-10`,
    children: (0, X.jsxs)(`div`, {
      className: `mx-auto max-w-[1600px]`,
      children: [
        (0, X.jsxs)(`div`, {
          className: `grid gap-12 sm:grid-cols-2 md:grid-cols-6 mb-16`,
          children: [
            (0, X.jsxs)(`div`, {
              className: `md:col-span-2 space-y-4`,
              children: [
                (0, X.jsx)(`p`, {
                  className: `font-display text-base tracking-[0.3em] text-foreground uppercase`,
                  children: `THE BILLIONAIRE'S AQUA`,
                }),
                (0, X.jsx)(`p`, {
                  className: `font-body text-[0.72rem] tracking-[0.24em] text-accent-gold uppercase`,
                  children: `More Than Water. A Standard.`,
                }),
                (0, X.jsx)(`p`, {
                  className: `font-body text-[0.65rem] leading-relaxed text-muted-foreground uppercase max-w-xs`,
                  children: `Premium packaged drinking water crafted for quality, consistency, and a bigger vision.`,
                }),
              ],
            }),
            (0, X.jsxs)(`div`, {
              children: [
                (0, X.jsx)(`p`, {
                  className: `font-display text-[0.68rem] tracking-[0.3em] text-foreground uppercase mb-6 font-semibold`,
                  children: `Company`,
                }),
                (0, X.jsx)(`ul`, {
                  className: `space-y-4`,
                  children: [
                    { label: `Our Story`, id: `intro` },
                    { label: `Our Water`, id: `reveal` },
                    { label: `Quality`, id: `technology` },
                    { label: `Products`, id: `details` },
                  ].map((e) =>
                    (0, X.jsx)(
                      `li`,
                      {
                        children: (0, X.jsx)(`button`, {
                          onClick: () => Oc(e.id),
                          className: `font-body text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground text-left`,
                          children: e.label,
                        }),
                      },
                      e.label,
                    ),
                  ),
                }),
              ],
            }),
            (0, X.jsxs)(`div`, {
              children: [
                (0, X.jsx)(`p`, {
                  className: `font-display text-[0.68rem] tracking-[0.3em] text-foreground uppercase mb-6 font-semibold`,
                  children: `Business`,
                }),
                (0, X.jsx)(`ul`, {
                  className: `space-y-4`,
                  children: [
                    { label: `Distributor`, id: `cta` },
                    { label: `Corporate Enquiry`, id: `contact` },
                    { label: `Partner With Us`, id: `cta` },
                  ].map((e) =>
                    (0, X.jsx)(
                      `li`,
                      {
                        children: (0, X.jsx)(`button`, {
                          onClick: () => Oc(e.id),
                          className: `font-body text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground text-left`,
                          children: e.label,
                        }),
                      },
                      e.label,
                    ),
                  ),
                }),
              ],
            }),
            (0, X.jsxs)(`div`, {
              children: [
                (0, X.jsx)(`p`, {
                  className: `font-display text-[0.68rem] tracking-[0.3em] text-foreground uppercase mb-6 font-semibold`,
                  children: `Support`,
                }),
                (0, X.jsx)(`ul`, {
                  className: `space-y-4`,
                  children: [
                    { label: `Contact`, id: `contact` },
                    { label: `FAQ`, id: `faq` },
                  ].map((e) =>
                    (0, X.jsx)(
                      `li`,
                      {
                        children: (0, X.jsx)(`button`, {
                          onClick: () => Oc(e.id),
                          className: `font-body text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground text-left`,
                          children: e.label,
                        }),
                      },
                      e.label,
                    ),
                  ),
                }),
              ],
            }),
            (0, X.jsxs)(`div`, {
              children: [
                (0, X.jsx)(`p`, {
                  className: `font-display text-[0.68rem] tracking-[0.3em] text-foreground uppercase mb-6 font-semibold`,
                  children: `Legal`,
                }),
                (0, X.jsx)(`ul`, {
                  className: `space-y-4`,
                  children: [
                    `Privacy Policy`,
                    `Terms & Conditions`,
                    `Shipping Policy`,
                    `Refund Policy`,
                  ].map((e) =>
                    (0, X.jsx)(
                      `li`,
                      {
                        children: (0, X.jsx)(`button`, {
                          onClick: () => Oc(`contact`),
                          className: `font-body text-[0.66rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-foreground text-left`,
                          children: e,
                        }),
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        (0, X.jsxs)(`div`, {
          className: `flex flex-col sm:flex-row items-center justify-between border-t border-hairline pt-10 gap-6`,
          children: [
            (0, X.jsx)(`p`, {
              className: `font-body text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase`,
              children: `© 2026 THE BILLIONAIRE'S AQUA. All Rights Reserved.`,
            }),
            (0, X.jsxs)(`div`, {
              className: `flex gap-6`,
              children: [
                (0, X.jsx)(`a`, {
                  href: `#`,
                  className: `font-body text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground transition-colors`,
                  children: `Instagram`,
                }),
                (0, X.jsx)(`a`, {
                  href: `#`,
                  className: `font-body text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase hover:text-foreground transition-colors`,
                  children: `LinkedIn`,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Ou({ id: e, scene: t, children: n, className: r, labelledBy: i }) {
  return (0, X.jsx)(`section`, {
    id: e,
    "data-scene": t ?? e,
    "aria-labelledby": i,
    className: Su(`relative z-10 flex min-h-screen w-full items-center px-6 py-24 md:px-10`, r),
    children: (0, X.jsx)(`div`, { className: `mx-auto w-full max-w-[1600px]`, children: n }),
  });
}
function ku({ children: e }) {
  return (0, X.jsxs)(`span`, {
    className: `inline-flex items-center gap-3 rounded-full border border-hairline px-4 py-1.5 font-body text-[0.62rem] tracking-[0.32em] text-muted-foreground uppercase`,
    children: [
      (0, X.jsx)(`span`, {
        className: `size-1 rounded-full bg-accent-gold`,
        "aria-hidden": `true`,
      }),
      e,
    ],
  });
}
function Au({ children: e, className: t, as: n = `h2`, id: r }) {
  let i = Su(
    `font-display text-[clamp(2.35rem,6.4vw,6.4rem)] leading-[0.95] tracking-[-0.03em] text-foreground uppercase`,
    t,
  );
  return n === `h1`
    ? (0, X.jsx)(`h1`, { id: r, className: i, children: e })
    : n === `h3`
      ? (0, X.jsx)(`h3`, { id: r, className: i, children: e })
      : (0, X.jsx)(`h2`, { id: r, className: i, children: e });
}
function ju({ children: e, className: t }) {
  return (0, X.jsx)(`p`, {
    className: Su(`max-w-[42ch] font-body text-[0.95rem] leading-relaxed text-muted-foreground`, t),
    children: e,
  });
}
function Mu({ variant: e = `solid`, className: t, children: n, ...r }) {
  let i = (0, s.useRef)(null);
  return (0, X.jsx)(`button`, {
    ref: i,
    onMouseMove: (e) => {
      let t = i.current;
      if (!t || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) return;
      let n = t.getBoundingClientRect(),
        r = e.clientX - n.left - n.width / 2,
        a = e.clientY - n.top - n.height / 2;
      na.to(t, { x: r * 0.18, y: a * 0.24, duration: 0.5, ease: `power3.out` });
    },
    onMouseLeave: () => {
      let e = i.current;
      e && na.to(e, { x: 0, y: 0, duration: 0.7, ease: `elastic.out(1, 0.5)` });
    },
    className: Su(
      `group relative inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-body text-[0.72rem] tracking-[0.22em] uppercase transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-11`,
      e === `solid` && `bg-foreground text-background hover:bg-accent-gold`,
      e === `outline` &&
        `border border-hairline text-foreground hover:border-accent-gold hover:text-accent-gold`,
      e === `quiet` &&
        `px-0 text-muted-foreground hover:text-foreground [&>span.line]:hover:w-full`,
      t,
    ),
    ...r,
    children: n,
  });
}
function Nu({ ready: e }) {
  let t = (0, s.useRef)(null);
  return (
    (0, s.useEffect)(() => {
      if (!t.current) return;
      let e = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
        n = t.current.querySelectorAll(`[data-hero-item]`);
      if (e) {
        na.set(n, { opacity: 1, y: 0 });
        return;
      }
      let r = na.timeline({ delay: 0.55 });
      return (
        r.fromTo(
          n,
          { opacity: 0, y: 34, filter: `blur(8px)` },
          {
            opacity: 1,
            y: 0,
            filter: `blur(0px)`,
            duration: 1.3,
            stagger: 0.14,
            ease: `power3.out`,
          },
        ),
        () => {
          r.kill();
        }
      );
    }, [e]),
    (0, X.jsxs)(Ou, {
      id: `hero`,
      scene: `hero`,
      labelledBy: `hero-title`,
      className: `items-center`,
      children: [
        (0, X.jsxs)(`div`, {
          ref: t,
          className: `grid gap-10 md:grid-cols-12 md:items-center`,
          children: [
            (0, X.jsxs)(`div`, {
              className: `md:col-span-6 lg:col-span-5`,
              children: [
                (0, X.jsx)(`div`, {
                  "data-hero-item": !0,
                  className: `opacity-0`,
                  children: (0, X.jsx)(ku, { children: `THE BILLIONAIRE'S AQUA` }),
                }),
                (0, X.jsxs)(Au, {
                  as: `h1`,
                  id: `hero-title`,
                  className: `mt-7`,
                  children: [
                    (0, X.jsx)(`span`, {
                      "data-hero-item": !0,
                      className: `block opacity-0`,
                      children: `More Than Water.`,
                    }),
                    (0, X.jsx)(`span`, {
                      "data-hero-item": !0,
                      className: `block text-accent-gold opacity-0`,
                      children: `A Standard.`,
                    }),
                  ],
                }),
                (0, X.jsx)(`div`, {
                  "data-hero-item": !0,
                  className: `mt-8 opacity-0`,
                  children: (0, X.jsx)(ju, {
                    children: `Premium packaged drinking water created for those who believe that quality is not an option — it is a standard.`,
                  }),
                }),
                (0, X.jsxs)(`div`, {
                  "data-hero-item": !0,
                  className: `mt-10 flex flex-wrap items-center gap-6 opacity-0`,
                  children: [
                    (0, X.jsxs)(Mu, {
                      onClick: () => Oc(`details`),
                      children: [
                        `Explore our products`,
                        (0, X.jsx)(Hc, {
                          className: `size-3.5 transition-transform duration-500 group-hover:translate-x-1`,
                        }),
                      ],
                    }),
                    (0, X.jsx)(Mu, {
                      variant: `quiet`,
                      onClick: () => Oc(`cta`),
                      children: (0, X.jsxs)(`span`, {
                        className: `relative`,
                        children: [
                          `Partner with us`,
                          (0, X.jsx)(`span`, {
                            className: `line absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-500`,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, X.jsx)(`div`, {
              className: `md:col-span-6 lg:col-start-9 lg:col-span-4`,
              children: (0, X.jsx)(`div`, {
                "data-hero-item": !0,
                className: `ml-auto hidden max-w-[26ch] border-l border-hairline pl-6 opacity-0 lg:block`,
                children: (0, X.jsx)(`p`, {
                  className: `font-body text-[0.7rem] leading-loose tracking-[0.2em] text-muted-foreground uppercase`,
                  children: `Scroll to travel through the product story.`,
                }),
              }),
            }),
          ],
        }),
        (0, X.jsxs)(`div`, {
          className: `pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3`,
          children: [
            (0, X.jsx)(`p`, {
              className: `font-body text-[0.55rem] tracking-[0.4em] text-muted-foreground uppercase`,
              children: `PUNE • MAHARASHTRA • INDIA`,
            }),
            (0, X.jsxs)(`span`, {
              className: `flex flex-col items-center gap-1 font-body text-[0.5rem] tracking-[0.32em] text-muted-foreground uppercase`,
              children: [
                `Scroll`,
                (0, X.jsx)(Vc, { className: `size-3 animate-bounce`, "aria-hidden": `true` }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
na.registerPlugin(Y);
function Pu({ children: e, className: t, delay: n = 0, stagger: r = 0.09, y: i = 26 }) {
  let a = (0, s.useRef)(null);
  return (
    (0, s.useEffect)(() => {
      let e = a.current;
      if (!e) return;
      if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
        na.set(e.children, { opacity: 1, y: 0 });
        return;
      }
      let t = e.children.length ? Array.from(e.children) : [e],
        o = na.context(() => {
          na.fromTo(
            t,
            { opacity: 0, y: i, filter: `blur(6px)` },
            {
              opacity: 1,
              y: 0,
              filter: `blur(0px)`,
              duration: 1.1,
              delay: n,
              stagger: r,
              ease: `power3.out`,
              scrollTrigger: { trigger: e, start: `top 88%`, once: !0 },
            },
          );
        }, e);
      return () => {
        o.revert();
      };
    }, [n, r, i]),
    (0, X.jsx)(`div`, { ref: a, className: Su(t), children: e })
  );
}
function Fu() {
  return (0, X.jsx)(Ou, {
    id: `intro`,
    scene: `intro`,
    labelledBy: `intro-title`,
    children: (0, X.jsx)(`div`, {
      className: `grid gap-16 md:grid-cols-12`,
      children: (0, X.jsxs)(`div`, {
        className: `md:col-span-5 md:col-start-7`,
        children: [
          (0, X.jsxs)(Pu, {
            children: [
              (0, X.jsx)(ku, { children: `Brand Introduction` }),
              (0, X.jsxs)(Au, {
                id: `intro-title`,
                className: `mt-7`,
                children: [`More than`, (0, X.jsx)(`br`, {}), `just water.`],
              }),
              (0, X.jsx)(ju, {
                className: `mt-8`,
                children: `THE BILLIONAIRE'S AQUA is built on a simple belief — the things we consume every day should reflect the standards we choose to live by.`,
              }),
              (0, X.jsx)(ju, {
                className: `mt-4`,
                children: `We are building a premium packaged drinking water brand with a focus on quality, consistency, thoughtful presentation and a bigger vision for India.`,
              }),
              (0, X.jsx)(`button`, {
                onClick: () => scrollToSection(`benefits`),
                className: `mt-8 flex items-center gap-2 font-body text-[0.72rem] tracking-[0.2em] text-accent-gold uppercase hover:text-foreground transition-colors focus-visible:outline-none`,
                children: `Discover Our Story →`,
              }),
            ],
          }),
          (0, X.jsxs)(Pu, {
            className: `mt-14 space-y-10`,
            stagger: 0.14,
            children: [
              (0, X.jsxs)(`div`, {
                className: `border-t border-hairline pt-5`,
                children: [
                  (0, X.jsx)(`p`, {
                    className: `font-display text-sm tracking-[0.24em] text-foreground uppercase`,
                    children: `Uncompromising Quality`,
                  }),
                  (0, X.jsx)(ju, {
                    className: `mt-3`,
                    children: `Rigorous multi-stage purification and testing standards to guarantee pure taste in every bottle.`,
                  }),
                ],
              }),
              (0, X.jsxs)(`div`, {
                className: `border-t border-hairline pt-5`,
                children: [
                  (0, X.jsx)(`p`, {
                    className: `font-display text-sm tracking-[0.24em] text-foreground uppercase`,
                    children: `Thoughtful Presentation`,
                  }),
                  (0, X.jsx)(ju, {
                    className: `mt-3`,
                    children: `A premium container designed with minimal modern aesthetics that stands out on any occasion.`,
                  }),
                ],
              }),
              (0, X.jsxs)(`div`, {
                className: `border-t border-hairline pt-5`,
                children: [
                  (0, X.jsx)(`p`, {
                    className: `font-display text-sm tracking-[0.24em] text-foreground uppercase`,
                    children: `Pune to India Vision`,
                  }),
                  (0, X.jsx)(ju, {
                    className: `mt-3`,
                    children: `Starting regional operations in Pune with a roadmap for state-wide and national growth.`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function Iu() {
  return (0, X.jsx)(Ou, {
    id: `focus`,
    scene: `focus`,
    labelledBy: `focus-title`,
    className: `items-end md:items-center`,
    children: (0, X.jsxs)(`div`, {
      className: `flex flex-col items-center text-center`,
      children: [
        (0, X.jsx)(Pu, {
          className: `w-full`,
          children: (0, X.jsx)(ku, { children: `The Brand Philosophy` }),
        }),
        (0, X.jsx)(Pu, {
          className: `mt-8 w-full`,
          delay: 0.1,
          children: (0, X.jsx)(Au, {
            id: `focus-title`,
            className: `mx-auto max-w-[20ch] text-[clamp(2.2rem,5vw,4.4rem)] lowercase first-letter:uppercase`,
            children: `Billionaires aren't born — they're built.`,
          }),
        }),
        (0, X.jsxs)(Pu, {
          className: `mt-8 w-full space-y-6`,
          delay: 0.2,
          children: [
            (0, X.jsx)(`p`, {
              className: `font-body text-[clamp(0.9rem,1.5vw,1.1rem)] font-light leading-relaxed tracking-wider text-muted-foreground max-w-2xl mx-auto`,
              children: `Every sip is a reminder to dream fearlessly, act consistently, and never stop believing in your potential.`,
            }),
            (0, X.jsx)(`p`, {
              className: `font-body text-[clamp(0.9rem,1.5vw,1.1rem)] font-light leading-relaxed tracking-wider text-muted-foreground max-w-2xl mx-auto`,
              children: `Your vision, your discipline, and your actions will define your future.`,
            }),
            (0, X.jsx)(`p`, {
              className: `font-body text-[clamp(0.9rem,1.5vw,1.1rem)] font-normal tracking-wide text-foreground`,
              children: `Start today.`,
            }),
            (0, X.jsx)(`p`, {
              className: `pt-4 font-display text-[0.68rem] tracking-[0.32em] text-accent-gold uppercase`,
              children: `— THE BILLIONAIRE'S AQUA`,
            }),
          ],
        }),
      ],
    }),
  });
}
var Lu = [
  {
    id: `250ml`,
    size: `250 ML`,
    tagline: `For events, hospitality & on-the-go occasions.`,
    specs: {
      product: `Packaged Drinking Water`,
      quantity: `250 ML`,
      packaging: `Premium Food-Grade PET (100% Recyclable)`,
      mrp: `₹10*`,
      batch: `Variable (See Neck)`,
      date: `Variable (See Neck)`,
      expiry: `3 Months from date of packaging`,
      bis: `IS 14543 (Pending Certification)`,
      fssai: `Under Process`,
      manufacturer: `Contract Manufacturer (Verification in progress)`,
    },
  },
  {
    id: `500ml`,
    size: `500 ML`,
    tagline: `For everyday convenience.`,
    specs: {
      product: `Packaged Drinking Water`,
      quantity: `500 ML`,
      packaging: `Premium Food-Grade PET (100% Recyclable)`,
      mrp: `₹15*`,
      batch: `Variable (See Neck)`,
      date: `Variable (See Neck)`,
      expiry: `3 Months from date of packaging`,
      bis: `IS 14543 (Pending Certification)`,
      fssai: `Under Process`,
      manufacturer: `Contract Manufacturer (Verification in progress)`,
    },
  },
  {
    id: `1l`,
    size: `1 L`,
    tagline: `For personal everyday hydration.`,
    specs: {
      product: `Packaged Drinking Water`,
      quantity: `1 L`,
      packaging: `Premium Food-Grade PET (100% Recyclable)`,
      mrp: `₹20*`,
      batch: `Variable (See Neck)`,
      date: `Variable (See Neck)`,
      expiry: `3 Months from date of packaging`,
      bis: `IS 14543 (Pending Certification)`,
      fssai: `Under Process`,
      manufacturer: `Contract Manufacturer (Verification in progress)`,
    },
  },
  {
    id: `2l`,
    size: `2 L`,
    tagline: `For sharing and extended use.`,
    specs: {
      product: `Packaged Drinking Water`,
      quantity: `2 L`,
      packaging: `Premium Food-Grade PET (100% Recyclable)`,
      mrp: `₹30*`,
      batch: `Variable (See Neck)`,
      date: `Variable (See Neck)`,
      expiry: `3 Months from date of packaging`,
      bis: `IS 14543 (Pending Certification)`,
      fssai: `Under Process`,
      manufacturer: `Contract Manufacturer (Verification in progress)`,
    },
  },
  {
    id: `5l`,
    size: `5 L`,
    tagline: `For larger-volume requirements.`,
    specs: {
      product: `Packaged Drinking Water`,
      quantity: `5 L`,
      packaging: `Premium Food-Grade PET (100% Recyclable)`,
      mrp: `₹65*`,
      batch: `Variable (See Neck)`,
      date: `Variable (See Neck)`,
      expiry: `3 Months from date of packaging`,
      bis: `IS 14543 (Pending Certification)`,
      fssai: `Under Process`,
      manufacturer: `Contract Manufacturer (Verification in progress)`,
    },
  },
  {
    id: `20l`,
    size: `20 L`,
    tagline: `For homes, offices and institutional requirements.`,
    specs: {
      product: `Packaged Drinking Water`,
      quantity: `20 L`,
      packaging: `Premium Food-Grade Polycarbonate Can (Returnable)`,
      mrp: `₹90*`,
      batch: `Variable (See Neck)`,
      date: `Variable (See Neck)`,
      expiry: `30 Days from date of packaging`,
      bis: `IS 14543 (Pending Certification)`,
      fssai: `Under Process`,
      manufacturer: `Contract Manufacturer (Verification in progress)`,
    },
  },
];
function Ru() {
  let [e, t] = (0, s.useState)(`1l`),
    n = Lu.find((t) => t.id === e) || Lu[2];
  return (0, X.jsx)(Ou, {
    id: `details`,
    scene: `details`,
    labelledBy: `details-title`,
    children: (0, X.jsxs)(`div`, {
      className: `w-full grid gap-12 lg:grid-cols-12 items-start mt-10`,
      children: [
        (0, X.jsxs)(`div`, {
          className: `lg:col-span-5 space-y-8`,
          children: [
            (0, X.jsxs)(Pu, {
              children: [
                (0, X.jsx)(ku, { children: `Our Collection` }),
                (0, X.jsxs)(Au, {
                  id: `details-title`,
                  className: `mt-4 text-[clamp(2.2rem,4.5vw,3.6rem)] leading-none`,
                  children: [`A size for`, (0, X.jsx)(`br`, {}), `every occasion.`],
                }),
                (0, X.jsx)(ju, {
                  className: `mt-6 text-muted-foreground`,
                  children: `A size for every occasion. A standard for every sip. Explore our premium packaging options.`,
                }),
              ],
            }),
            (0, X.jsx)(Pu, {
              className: `grid grid-cols-3 gap-3 md:gap-4 pt-4`,
              delay: 0.1,
              children: Lu.map((n) =>
                (0, X.jsx)(
                  `button`,
                  {
                    onClick: () => t(n.id),
                    className: `py-3.5 px-2 text-center rounded-lg border font-display text-[0.72rem] tracking-[0.2em] transition-all duration-500 uppercase focus-visible:outline-none ${e === n.id ? `border-accent-gold bg-accent-gold/10 text-accent-gold shadow-[0_0_15px_rgba(212,175,55,0.15)]` : `border-hairline bg-transparent text-muted-foreground hover:border-foreground hover:text-foreground`}`,
                    children: n.size,
                  },
                  n.id,
                ),
              ),
            }),
            (0, X.jsxs)(Pu, {
              className: `border border-hairline p-6 bg-black/20 rounded-xl`,
              delay: 0.15,
              children: [
                (0, X.jsx)(`p`, {
                  className: `font-display text-[0.62rem] tracking-[0.3em] text-accent-gold uppercase mb-2`,
                  children: `Selected Size`,
                }),
                (0, X.jsx)(`h3`, {
                  className: `font-display text-xl tracking-[0.15em] text-foreground uppercase mb-3`,
                  children: n.size,
                }),
                (0, X.jsx)(`p`, {
                  className: `font-body text-sm text-muted-foreground leading-relaxed mb-6`,
                  children: n.tagline,
                }),
                (0, X.jsx)(`button`, {
                  onClick: () => Oc(`contact`),
                  className: `px-6 py-2.5 rounded-full border border-accent-gold text-accent-gold font-body text-[0.68rem] tracking-[0.2em] uppercase hover:bg-accent-gold hover:text-background transition-all duration-500 focus-visible:outline-none`,
                  children: `Enquire Size`,
                }),
              ],
            }),
          ],
        }),
        (0, X.jsxs)(`div`, {
          className: `lg:col-span-7 bg-black/40 border border-hairline rounded-xl p-8 space-y-6`,
          children: [
            (0, X.jsx)(Pu, {
              children: (0, X.jsx)(`h4`, {
                className: `font-display text-xs tracking-[0.3em] text-accent-gold uppercase border-b border-hairline pb-4`,
                children: `Official Product Information`,
              }),
            }),
            (0, X.jsxs)(Pu, {
              className: `divide-y divide-hairline text-[0.72rem] font-body tracking-[0.1em] uppercase text-muted-foreground`,
              delay: 0.1,
              children: [
                (0, X.jsxs)(`div`, {
                  className: `flex justify-between py-3.5 gap-4`,
                  children: [
                    (0, X.jsx)(`span`, { children: `Product` }),
                    (0, X.jsx)(`span`, {
                      className: `text-foreground text-right`,
                      children: n.specs.product,
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: `flex justify-between py-3.5 gap-4`,
                  children: [
                    (0, X.jsx)(`span`, { children: `Net Quantity` }),
                    (0, X.jsx)(`span`, {
                      className: `text-foreground text-right`,
                      children: n.specs.quantity,
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: `flex justify-between py-3.5 gap-4`,
                  children: [
                    (0, X.jsx)(`span`, { children: `Packaging` }),
                    (0, X.jsx)(`span`, {
                      className: `text-foreground text-right max-w-xs`,
                      children: n.specs.packaging,
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: `flex justify-between py-3.5 gap-4`,
                  children: [
                    (0, X.jsx)(`span`, { children: `MRP` }),
                    (0, X.jsx)(`span`, {
                      className: `text-foreground text-right`,
                      children: n.specs.mrp,
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: `flex justify-between py-3.5 gap-4`,
                  children: [
                    (0, X.jsx)(`span`, { children: `Batch No.` }),
                    (0, X.jsx)(`span`, {
                      className: `text-foreground text-right font-mono text-[0.68rem]`,
                      children: n.specs.batch,
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: `flex justify-between py-3.5 gap-4`,
                  children: [
                    (0, X.jsx)(`span`, { children: `Date of Packaging` }),
                    (0, X.jsx)(`span`, {
                      className: `text-foreground text-right`,
                      children: n.specs.date,
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: `flex justify-between py-3.5 gap-4`,
                  children: [
                    (0, X.jsx)(`span`, { children: `Use By / Expiry` }),
                    (0, X.jsx)(`span`, {
                      className: `text-foreground text-right`,
                      children: n.specs.expiry,
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: `flex justify-between py-3.5 gap-4`,
                  children: [
                    (0, X.jsx)(`span`, { children: `BIS Standard` }),
                    (0, X.jsx)(`span`, {
                      className: `text-foreground text-right text-accent-gold`,
                      children: n.specs.bis,
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: `flex justify-between py-3.5 gap-4`,
                  children: [
                    (0, X.jsx)(`span`, { children: `FSSAI License` }),
                    (0, X.jsx)(`span`, {
                      className: `text-foreground text-right text-accent-gold`,
                      children: n.specs.fssai,
                    }),
                  ],
                }),
                (0, X.jsxs)(`div`, {
                  className: `flex justify-between py-3.5 gap-4`,
                  children: [
                    (0, X.jsx)(`span`, { children: `Processor / Manufacturer` }),
                    (0, X.jsx)(`span`, {
                      className: `text-foreground text-right text-[0.68rem] max-w-xs normal-case`,
                      children: n.specs.manufacturer,
                    }),
                  ],
                }),
              ],
            }),
            (0, X.jsx)(Pu, {
              className: `pt-2 text-[0.62rem] text-muted-foreground/60 italic leading-relaxed text-center`,
              delay: 0.2,
              children: `* Prices are subject to local taxes and shipping fees. Certification specifics are updated in accordance with the regulatory launch phases.`,
            }),
          ],
        }),
      ],
    }),
  });
}
function zu() {
  let e = [
    { label: `Source`, desc: `Monitored natural source` },
    { label: `Treatment`, desc: `Multi-stage purification` },
    { label: `Testing`, desc: `Rigorous lab verification` },
    { label: `Packaging`, desc: `Hygienic hands-free bottling` },
    { label: `Quality Control`, desc: `Batch-level audit` },
    { label: `Distribution`, desc: `Protected logistics chain` },
  ];
  return (0, X.jsx)(Ou, {
    id: `reveal`,
    scene: `reveal`,
    labelledBy: `reveal-title`,
    className: `items-center`,
    children: (0, X.jsxs)(`div`, {
      className: `w-full space-y-12`,
      children: [
        (0, X.jsxs)(`div`, {
          className: `flex flex-col gap-8 md:flex-row md:items-end md:justify-between`,
          children: [
            (0, X.jsxs)(Pu, {
              className: `max-w-[38ch]`,
              children: [
                (0, X.jsx)(ku, { children: `Our Water` }),
                (0, X.jsx)(Au, {
                  id: `reveal-title`,
                  className: `mt-7 text-[clamp(2.2rem,4.4vw,3.8rem)] leading-none lowercase first-letter:uppercase`,
                  children: `Water, held to a higher standard.`,
                }),
              ],
            }),
            (0, X.jsxs)(Pu, {
              className: `max-w-[42ch]`,
              delay: 0.15,
              children: [
                (0, X.jsx)(ju, {
                  children: `At Billionaire's Aqua, we believe quality begins long before the bottle reaches your hands. Our approach focuses on controlled processing, quality checks, hygienic handling and consistent packaging standards.`,
                }),
                (0, X.jsx)(`p`, {
                  className: `mt-4 font-body text-sm font-semibold tracking-wider text-accent-gold uppercase`,
                  children: `Never compromise the standard.`,
                }),
              ],
            }),
          ],
        }),
        (0, X.jsx)(Pu, {
          className: `w-full pt-8`,
          delay: 0.25,
          children: (0, X.jsx)(`div`, {
            className: `grid grid-cols-2 md:grid-cols-6 gap-4 relative`,
            children: e.map((t, n) =>
              (0, X.jsxs)(
                `div`,
                {
                  className: `border border-hairline p-5 rounded-lg bg-black/30 backdrop-blur-sm relative group hover:border-accent-gold transition-colors duration-500`,
                  children: [
                    (0, X.jsxs)(`div`, {
                      className: `absolute top-4 right-4 font-display text-[0.62rem] text-accent-gold/40 group-hover:text-accent-gold/80 transition-colors`,
                      children: [`0`, n + 1],
                    }),
                    (0, X.jsx)(`h4`, {
                      className: `font-display text-[0.72rem] tracking-[0.2em] text-foreground uppercase mb-2`,
                      children: t.label,
                    }),
                    (0, X.jsx)(`p`, {
                      className: `font-body text-[0.65rem] text-muted-foreground leading-relaxed lowercase first-letter:uppercase`,
                      children: t.desc,
                    }),
                    n < e.length - 1 &&
                      (0, X.jsx)(`div`, {
                        className: `hidden md:block absolute top-1/2 -right-2.5 w-5 h-px bg-hairline z-10 group-hover:bg-accent-gold/50 transition-colors`,
                      }),
                  ],
                },
                t.label,
              ),
            ),
          }),
        }),
      ],
    }),
  });
}
function Bu() {
  return (0, X.jsx)(Ou, {
    id: `angles`,
    scene: `angles`,
    labelledBy: `angles-title`,
    className: `items-end`,
    children: (0, X.jsxs)(`div`, {
      className: `flex flex-col items-center gap-6 text-center`,
      children: [
        (0, X.jsx)(Pu, {
          className: `w-full`,
          children: (0, X.jsx)(ku, { children: `See every angle` }),
        }),
        (0, X.jsx)(Pu, {
          className: `w-full`,
          delay: 0.1,
          children: (0, X.jsx)(Au, {
            id: `angles-title`,
            className: `text-[clamp(1.9rem,4vw,3.4rem)]`,
            children: `Held to one standard.`,
          }),
        }),
        (0, X.jsx)(Pu, {
          className: `w-full`,
          delay: 0.18,
          children: (0, X.jsx)(ju, {
            className: `mx-auto text-center text-[0.85rem]`,
            children: `Every seam, ring and print edge holds up under inspection.`,
          }),
        }),
      ],
    }),
  });
}
na.registerPlugin(Y);
var Vu = [
    {
      n: `01`,
      title: `Water Quality Testing`,
      copy: `Rigorous testing parameters covering essential physical, chemical, and microbiological checks in accordance with Indian Standards.`,
    },
    {
      n: `02`,
      title: `Hygienic Processing`,
      copy: `Controlled filtration, ozonation, and automated processing lines to guarantee zero contamination and consistent taste profile.`,
    },
    {
      n: `03`,
      title: `Quality Control`,
      copy: `Hourly batch-level inspection checks on chemical balance, cap sealing torque, and label alignment.`,
    },
    {
      n: `04`,
      title: `Packaging Standards`,
      copy: `Optical-grade, high-density food-safe containers that preserve water freshness and withstand distribution stresses.`,
    },
    {
      n: `05`,
      title: `Traceability`,
      copy: `Laser-engraved batch tracking numbers on the bottle neck, detailing precise packaging time and plant origin.`,
    },
    {
      n: `06`,
      title: `Regulatory Compliance`,
      copy: `All manufacturing partners are audited to ensure process alignment with FSSAI rules and IS 14543 specifications.`,
    },
  ],
  Hu = [
    { title: `Quality`, desc: `Consistent standards from processing to packaging.` },
    { title: `Purity`, desc: `Water quality supported by appropriate testing and controls.` },
    { title: `Consistency`, desc: `Every bottle should represent the same brand standard.` },
    { title: `Presentation`, desc: `Premium packaging designed to reflect the brand.` },
  ];
function Uu() {
  let e = (0, s.useRef)(null),
    [t, n] = (0, s.useState)(0);
  return (
    (0, s.useEffect)(() => {
      let t = e.current;
      if (!t) return;
      let r = Array.from(t.querySelectorAll(`[data-tech-row]`)),
        i = na.context(() => {
          r.forEach((e, t) => {
            Y.create({
              trigger: e,
              start: `top 75%`,
              end: `bottom 35%`,
              onToggle: (e) => {
                e.isActive && n(t);
              },
            });
          });
        }, t);
      return () => {
        i.revert();
      };
    }, []),
    (0, X.jsx)(Ou, {
      id: `technology`,
      scene: `technology`,
      labelledBy: `tech-title`,
      className: `items-center`,
      children: (0, X.jsxs)(`div`, {
        className: `w-full space-y-16`,
        children: [
          (0, X.jsxs)(`div`, {
            className: `grid gap-12 lg:grid-cols-12`,
            children: [
              (0, X.jsx)(`div`, {
                className: `lg:col-span-5`,
                children: (0, X.jsxs)(Pu, {
                  children: [
                    (0, X.jsx)(ku, { children: `Our Standard` }),
                    (0, X.jsx)(Au, {
                      id: `tech-title`,
                      className: `mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-none lowercase first-letter:uppercase`,
                      children: `Quality is our standard.`,
                    }),
                    (0, X.jsx)(ju, {
                      className: `mt-6 text-muted-foreground`,
                      children: `We believe that every bottle should represent the finest packaged drinking water experience. Our baseline is simple, and our parameters are strict.`,
                    }),
                  ],
                }),
              }),
              (0, X.jsx)(`div`, {
                className: `lg:col-span-7`,
                children: (0, X.jsxs)(Pu, {
                  className: `grid grid-cols-1 sm:grid-cols-2 gap-6`,
                  delay: 0.1,
                  children: [
                    (0, X.jsxs)(`div`, {
                      className: `sm:col-span-2`,
                      children: [
                        (0, X.jsx)(`h4`, {
                          className: `font-display text-[0.68rem] tracking-[0.3em] text-accent-gold uppercase mb-2`,
                          children: `Our Standard is Simple.`,
                        }),
                        (0, X.jsx)(`div`, { className: `h-px bg-hairline w-full mb-2` }),
                      ],
                    }),
                    Hu.map((e) =>
                      (0, X.jsxs)(
                        `div`,
                        {
                          className: `border border-hairline p-5 rounded-lg bg-black/20`,
                          children: [
                            (0, X.jsx)(`h5`, {
                              className: `font-display text-sm tracking-[0.15em] text-foreground uppercase mb-2`,
                              children: e.title,
                            }),
                            (0, X.jsx)(`p`, {
                              className: `font-body text-xs text-muted-foreground leading-relaxed`,
                              children: e.desc,
                            }),
                          ],
                        },
                        e.title,
                      ),
                    ),
                  ],
                }),
              }),
            ],
          }),
          (0, X.jsxs)(`div`, {
            className: `grid gap-12 lg:grid-cols-12 pt-6`,
            children: [
              (0, X.jsx)(`div`, {
                className: `lg:col-span-5`,
                children: (0, X.jsxs)(Pu, {
                  children: [
                    (0, X.jsx)(`h4`, {
                      className: `font-display text-[0.68rem] tracking-[0.3em] text-accent-gold uppercase mb-4`,
                      children: `Quality & Safety Checks`,
                    }),
                    (0, X.jsx)(`p`, {
                      className: `font-body text-xs text-muted-foreground leading-relaxed max-w-sm`,
                      children: `From water collection to distribution logistics, each parameter is checked at regular intervals. Scroll to see the core components of our safety framework.`,
                    }),
                  ],
                }),
              }),
              (0, X.jsx)(`div`, {
                className: `lg:col-span-7`,
                children: (0, X.jsx)(`div`, {
                  ref: e,
                  className: `space-y-4`,
                  children: Vu.map((e, n) =>
                    (0, X.jsxs)(
                      `div`,
                      {
                        "data-tech-row": !0,
                        "aria-current": t === n ? `true` : void 0,
                        className: Su(
                          `border-t border-hairline py-6 transition-all duration-700`,
                          t === n ? `opacity-100 border-accent-gold/40` : `opacity-35`,
                        ),
                        children: [
                          (0, X.jsxs)(`div`, {
                            className: `flex items-baseline gap-5`,
                            children: [
                              (0, X.jsx)(`span`, {
                                className: Su(
                                  `font-body text-[0.65rem] tracking-[0.24em] transition-colors duration-500`,
                                  t === n ? `text-accent-gold` : `text-muted-foreground`,
                                ),
                                children: e.n,
                              }),
                              (0, X.jsx)(`h3`, {
                                className: `font-display text-base tracking-[0.14em] text-foreground uppercase`,
                                children: e.title,
                              }),
                            ],
                          }),
                          (0, X.jsx)(ju, {
                            className: `mt-3 pl-10 text-[0.82rem] leading-relaxed text-muted-foreground`,
                            children: e.copy,
                          }),
                        ],
                      },
                      e.n,
                    ),
                  ),
                }),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function Wu() {
  return (0, X.jsx)(Ou, {
    id: `moment`,
    scene: `moment`,
    labelledBy: `moment-title`,
    className: `min-h-[110vh] items-end pb-24`,
    children: (0, X.jsxs)(`div`, {
      className: `flex flex-col items-start gap-6 max-w-3xl`,
      children: [
        (0, X.jsx)(Pu, {
          children: (0, X.jsxs)(Au, {
            id: `moment-title`,
            className: `text-[clamp(2.4rem,6vw,5.5rem)] leading-none font-semibold`,
            children: [`Starting from Pune.`, (0, X.jsx)(`br`, {}), `Building for India.`],
          }),
        }),
        (0, X.jsx)(Pu, {
          delay: 0.2,
          children: (0, X.jsx)(`p`, {
            className: `max-w-[48ch] font-body text-[clamp(0.85rem,1.5vw,1.1rem)] leading-relaxed tracking-wider text-muted-foreground`,
            children: `Our journey begins in Pune, with a long-term ambition to create a trusted premium packaged drinking water brand with a presence across India.`,
          }),
        }),
      ],
    }),
  });
}
var Gu = [
  {
    year: `2026`,
    phase: `Brand Foundation`,
    desc: `Setting up manufacturing partnerships and premium quality standards.`,
  },
  {
    year: `Launch`,
    phase: `Pune Operations`,
    desc: `Introducing the collection to premium retail and hospitality sectors in Pune.`,
  },
  {
    year: `Phase 2`,
    phase: `PCMC Expansion`,
    desc: `Extending operations and distribution channels to PCMC corporate belts.`,
  },
  {
    year: `Phase 3`,
    phase: `Maharashtra Scale`,
    desc: `Scaling supply chain and brand presence across key Maharashtra districts.`,
  },
  {
    year: `Phase 4`,
    phase: `National Presence`,
    desc: `Expanding footprint to establish a trusted Indian luxury water brand nationally.`,
  },
];
function Ku() {
  return (0, X.jsx)(Ou, {
    id: `benefits`,
    scene: `moment`,
    labelledBy: `benefits-title`,
    className: `items-center py-24`,
    children: (0, X.jsxs)(`div`, {
      className: `w-full space-y-24`,
      children: [
        (0, X.jsxs)(`div`, {
          className: `grid gap-16 md:grid-cols-12 items-start`,
          children: [
            (0, X.jsx)(`div`, {
              className: `md:col-span-5`,
              children: (0, X.jsxs)(Pu, {
                children: [
                  (0, X.jsx)(ku, { children: `Our Story` }),
                  (0, X.jsx)(Au, {
                    id: `benefits-title`,
                    className: `mt-7 text-[clamp(2rem,4.5vw,3.6rem)] leading-none lowercase first-letter:uppercase`,
                    children: `Built with a bigger vision.`,
                  }),
                  (0, X.jsx)(ju, {
                    className: `mt-7`,
                    children: `THE BILLIONAIRE'S AQUA was created with an ambition to build more than a bottled water business.`,
                  }),
                  (0, X.jsx)(ju, {
                    className: `mt-4`,
                    children: `The vision is to create a premium Indian water brand that combines quality, strong branding, disciplined execution and a distinctive customer experience. Starting from Pune, the ambition is to build a brand capable of growing across Maharashtra and eventually across India.`,
                  }),
                ],
              }),
            }),
            (0, X.jsxs)(`div`, {
              className: `md:col-span-7 space-y-6`,
              children: [
                (0, X.jsx)(Pu, {
                  className: `border-b border-hairline pb-4`,
                  children: (0, X.jsx)(`h4`, {
                    className: `font-display text-[0.68rem] tracking-[0.3em] text-accent-gold uppercase`,
                    children: `Ambition Roadmap`,
                  }),
                }),
                (0, X.jsx)(`div`, {
                  className: `relative pl-6 border-l border-hairline space-y-8`,
                  children: Gu.map((e, t) =>
                    (0, X.jsxs)(
                      Pu,
                      {
                        className: `relative`,
                        delay: t * 0.05,
                        children: [
                          (0, X.jsx)(`span`, {
                            className: `absolute -left-[1.88rem] top-1.5 size-2 rounded-full bg-accent-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]`,
                          }),
                          (0, X.jsxs)(`div`, {
                            className: `flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6`,
                            children: [
                              (0, X.jsx)(`span`, {
                                className: `font-display text-xs tracking-[0.2em] text-accent-gold uppercase font-semibold min-w-[70px]`,
                                children: e.year,
                              }),
                              (0, X.jsxs)(`div`, {
                                children: [
                                  (0, X.jsx)(`h5`, {
                                    className: `font-display text-sm tracking-[0.12em] text-foreground uppercase`,
                                    children: e.phase,
                                  }),
                                  (0, X.jsx)(`p`, {
                                    className: `font-body text-[0.72rem] text-muted-foreground leading-relaxed mt-1`,
                                    children: e.desc,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      e.phase,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        (0, X.jsxs)(`div`, {
          className: `grid gap-12 lg:grid-cols-12 items-center border-t border-hairline pt-20`,
          children: [
            (0, X.jsxs)(`div`, {
              className: `lg:col-span-6 space-y-6`,
              children: [
                (0, X.jsxs)(Pu, {
                  children: [
                    (0, X.jsx)(ku, { children: `Leadership` }),
                    (0, X.jsx)(Au, {
                      className: `mt-4 text-[clamp(2rem,4vw,3rem)] leading-none lowercase first-letter:uppercase`,
                      children: `From an idea to a standard.`,
                    }),
                  ],
                }),
                (0, X.jsxs)(Pu, {
                  className: `space-y-4`,
                  delay: 0.1,
                  children: [
                    (0, X.jsx)(`blockquote`, {
                      className: `border-l-2 border-accent-gold pl-6 italic`,
                      children: (0, X.jsx)(`p`, {
                        className: `font-body text-base text-foreground leading-relaxed tracking-wide`,
                        children: `“I believe every great brand begins with a simple decision — to build something that people can trust and remember.”`,
                      }),
                    }),
                    (0, X.jsx)(`blockquote`, {
                      className: `border-l-2 border-accent-gold pl-6 italic`,
                      children: (0, X.jsx)(`p`, {
                        className: `font-body text-base text-foreground leading-relaxed tracking-wide`,
                        children: `“Billionaire's Aqua is our commitment to building a premium Indian water brand with a long-term vision.”`,
                      }),
                    }),
                  ],
                }),
                (0, X.jsxs)(Pu, {
                  className: `pt-4`,
                  delay: 0.15,
                  children: [
                    (0, X.jsx)(`p`, {
                      className: `font-display text-base tracking-[0.15em] text-foreground uppercase`,
                      children: `Suraj Ishwar`,
                    }),
                    (0, X.jsx)(`p`, {
                      className: `font-body text-[0.68rem] tracking-[0.24em] text-accent-gold uppercase mt-1`,
                      children: `Founder & Chairman / Managing Director`,
                    }),
                  ],
                }),
              ],
            }),
            (0, X.jsx)(`div`, {
              className: `lg:col-span-6 flex justify-center lg:justify-end`,
              children: (0, X.jsxs)(Pu, {
                className: `w-full max-w-md aspect-[4/5] bg-gradient-to-br from-emerald-950 to-neutral-950 border border-accent-gold/20 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-accent-gold/50 transition-all duration-700`,
                delay: 0.2,
                children: [
                  (0, X.jsx)(`div`, {
                    className: `absolute -top-1/4 -right-1/4 size-80 rounded-full bg-accent-gold/5 blur-[80px]`,
                  }),
                  (0, X.jsx)(`div`, {
                    className: `absolute -bottom-1/4 -left-1/4 size-80 rounded-full bg-emerald-800/10 blur-[80px]`,
                  }),
                  (0, X.jsxs)(`div`, {
                    className: `relative z-10`,
                    children: [
                      (0, X.jsx)(`span`, {
                        className: `font-display text-[0.62rem] tracking-[0.35em] text-accent-gold uppercase`,
                        children: `THE BILLIONAIRE'S AQUA`,
                      }),
                      (0, X.jsx)(`h4`, {
                        className: `font-display text-2xl tracking-[0.2em] text-foreground uppercase mt-4`,
                        children: `COMMITMENT`,
                      }),
                    ],
                  }),
                  (0, X.jsxs)(`div`, {
                    className: `relative z-10 space-y-4`,
                    children: [
                      (0, X.jsx)(`div`, { className: `w-16 h-px bg-accent-gold/40` }),
                      (0, X.jsx)(`p`, {
                        className: `font-display text-sm tracking-[0.25em] text-foreground uppercase`,
                        children: `SURAJ ISHWAR`,
                      }),
                      (0, X.jsx)(`p`, {
                        className: `font-body text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase`,
                        children: `Pune, India`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
e();
function qu(e) {
  if (!e || typeof document > `u`) return;
  let t = document.head || document.getElementsByTagName(`head`)[0],
    n = document.createElement(`style`);
  ((n.type = `text/css`),
    t.appendChild(n),
    n.styleSheet ? (n.styleSheet.cssText = e) : n.appendChild(document.createTextNode(e)));
}
Array(12).fill(0);
var Ju = 1,
  Yu = 100,
  Xu = (e) => (typeof e?.id == `number` || e?.id?.length > 0 ? e.id : Ju++),
  Zu = new (class {
    constructor() {
      ((this.subscribe = (e) => (
        this.subscribers.push(e),
        this.getActiveToasts().forEach((t) => e(t)),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          (this.publish(e), (this.toasts = [...this.toasts, e]), this.trimHistory());
        }),
        (this.trimHistory = () => {
          let e = this.toasts.length - Yu;
          e <= 0 ||
            (this.toasts = this.toasts.filter((t) =>
              e > 0 && this.dismissedToasts.has(t.id)
                ? (this.dismissedToasts.delete(t.id), e--, !1)
                : !0,
            ));
        }),
        (this.create = (e) => {
          let { message: t, ...n } = e,
            r = Xu(e),
            i = this.pendingDismissals.get(r);
          i !== void 0 &&
            (cancelAnimationFrame(i),
            this.pendingDismissals.delete(r),
            this.dismissedToasts.delete(r));
          let a = this.dismissedToasts.has(r),
            o = e.dismissible === void 0 || e.dismissible;
          return (
            a &&
              (this.dismissedToasts.delete(r),
              (this.toasts = this.toasts.filter((e) => e.id !== r))),
            !a && this.toasts.find((e) => e.id === r)
              ? (this.toasts = this.toasts.map((n) =>
                  n.id === r
                    ? (this.publish({ ...n, ...e, id: r, title: t }),
                      { ...n, ...e, id: r, dismissible: o, title: t })
                    : n,
                ))
              : this.addToast({ title: t, ...n, dismissible: o, id: r }),
            r
          );
        }),
        (this.dismiss = (e) => {
          if (e == null)
            return (
              this.getActiveToasts().forEach((e) => {
                (this.dismissedToasts.add(e.id),
                  this.subscribers.forEach((t) => t({ id: e.id, dismiss: !0 })));
              }),
              e
            );
          this.dismissedToasts.add(e);
          let t = this.pendingDismissals.get(e);
          return (
            t !== void 0 && cancelAnimationFrame(t),
            this.pendingDismissals.set(
              e,
              requestAnimationFrame(() => {
                (this.pendingDismissals.delete(e),
                  this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })));
              }),
            ),
            e
          );
        }),
        (this.message = (e, t) => this.create({ ...t, message: e, type: void 0 })),
        (this.error = (e, t) => this.create({ ...t, message: e, type: `error` })),
        (this.success = (e, t) => this.create({ ...t, type: `success`, message: e })),
        (this.info = (e, t) => this.create({ ...t, type: `info`, message: e })),
        (this.warning = (e, t) => this.create({ ...t, type: `warning`, message: e })),
        (this.loading = (e, t) => this.create({ ...t, type: `loading`, message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: `loading`,
              message: t.loading,
              description: typeof t.description == `function` ? void 0 : t.description,
            }));
          let r = Promise.resolve(e instanceof Function ? e() : e),
            i = n !== void 0,
            a,
            o = r
              .then(async (e) => {
                if (((a = [`resolve`, e]), s.isValidElement(e)))
                  ((i = !1), this.create({ id: n, type: `default`, message: e }));
                else if ($u(e) && !e.ok) {
                  i = !1;
                  let r =
                      typeof t.error == `function`
                        ? await t.error(`HTTP error! status: ${e.status}`)
                        : t.error,
                    a =
                      typeof t.description == `function`
                        ? await t.description(`HTTP error! status: ${e.status}`)
                        : t.description,
                    o = typeof r == `object` && !s.isValidElement(r) ? r : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                } else if (e instanceof Error) {
                  i = !1;
                  let r = typeof t.error == `function` ? await t.error(e) : t.error,
                    a = typeof t.description == `function` ? await t.description(e) : t.description,
                    o = typeof r == `object` && !s.isValidElement(r) ? r : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                } else if (t.success !== void 0) {
                  i = !1;
                  let r = typeof t.success == `function` ? await t.success(e) : t.success,
                    a = typeof t.description == `function` ? await t.description(e) : t.description,
                    o = typeof r == `object` && !s.isValidElement(r) ? r : { message: r };
                  this.create({ id: n, type: `success`, description: a, ...o });
                }
              })
              .catch(async (e) => {
                if (((a = [`reject`, e]), t.error !== void 0)) {
                  i = !1;
                  let r = typeof t.error == `function` ? await t.error(e) : t.error,
                    a = typeof t.description == `function` ? await t.description(e) : t.description,
                    o = typeof r == `object` && !s.isValidElement(r) ? r : { message: r };
                  this.create({ id: n, type: `error`, description: a, ...o });
                }
              })
              .finally(() => {
                (i && (this.dismiss(n), (n = void 0)), t.finally == null || t.finally.call(t));
              }),
            c = () =>
              new Promise((e, t) => o.then(() => (a[0] === `reject` ? t(a[1]) : e(a[1]))).catch(t));
          return typeof n != `string` && typeof n != `number`
            ? { unwrap: c }
            : Object.assign(n, { unwrap: c });
        }),
        (this.custom = (e, t) => {
          let n = Xu(t);
          return (this.create({ ...t, jsx: e(n), id: n, type: void 0 }), n);
        }),
        (this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set()),
        (this.pendingDismissals = new Map()));
    }
  })(),
  Qu = (e, t) => Zu.message(e, t),
  $u = (e) =>
    e &&
    typeof e == `object` &&
    `ok` in e &&
    typeof e.ok == `boolean` &&
    `status` in e &&
    typeof e.status == `number`,
  ed = Object.assign(
    Qu,
    {
      success: Zu.success,
      info: Zu.info,
      warning: Zu.warning,
      error: Zu.error,
      custom: Zu.custom,
      message: Zu.message,
      promise: Zu.promise,
      dismiss: Zu.dismiss,
      loading: Zu.loading,
    },
    { getHistory: () => Zu.toasts, getToasts: () => Zu.getActiveToasts() },
  );
qu(
  `[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}`,
);
var td = [
  {
    q: `What is Billionaire's Aqua?`,
    a: `Billionaire's Aqua is a premium packaged drinking water brand built around quality, consistency, and a bigger vision.`,
  },
  {
    q: `Where is Billionaire's Aqua launching?`,
    a: `We are launching initially in Pune and PCMC, followed by a phased expansion across Maharashtra and eventually across India.`,
  },
  {
    q: `What sizes are available?`,
    a: `Our collection will be available in 250ml, 500ml, 1L, 2L, 5L, and 20L returnable cans.`,
  },
  {
    q: `Is Billionaire's Aqua available for distributors?`,
    a: `Yes, we are actively building a strong distribution network. Interested partners can fill out the Partner With Us form.`,
  },
  {
    q: `How can I become a distributor?`,
    a: `Submit your details via the Partner With Us distributor application form on this website. Our business development team will contact you.`,
  },
  {
    q: `Where is the water manufactured?`,
    a: `The water is processed and packaged at state-of-the-art licensed contract manufacturing facilities under strict quality controls.`,
  },
  {
    q: `What certifications does Billionaire's Aqua have?`,
    a: `All manufacturing operations are audited and certified. We present only officially verified certifications (FSSAI/BIS) in accordance with the regulatory standards.`,
  },
];
function nd() {
  let [e, t] = (0, s.useState)(`enquiry`);
  return (0, X.jsx)(Ou, {
    id: `cta`,
    scene: `cta`,
    labelledBy: `cta-title`,
    className: `items-center py-20`,
    children: (0, X.jsxs)(`div`, {
      className: `w-full space-y-16`,
      children: [
        (0, X.jsxs)(`div`, {
          className: `grid gap-12 lg:grid-cols-12 items-end`,
          children: [
            (0, X.jsx)(`div`, {
              className: `lg:col-span-6`,
              children: (0, X.jsxs)(Pu, {
                children: [
                  (0, X.jsx)(ku, { children: `Connect With Us` }),
                  (0, X.jsx)(Au, {
                    id: `cta-title`,
                    className: `mt-4 text-[clamp(2.2rem,4.5vw,3.8rem)] leading-none lowercase first-letter:uppercase`,
                    children: `Grow with us.`,
                  }),
                  (0, X.jsx)(ju, {
                    className: `mt-6 text-muted-foreground`,
                    children: `We are building the foundation for a scalable, premium packaged drinking water business, beginning with focused regional expansion and a long-term national vision.`,
                  }),
                ],
              }),
            }),
            (0, X.jsxs)(`div`, {
              className: `lg:col-span-6 flex justify-start lg:justify-end gap-6 border-b border-hairline pb-4 w-full`,
              children: [
                (0, X.jsxs)(`button`, {
                  onClick: () => t(`enquiry`),
                  className: `pb-3 font-display text-[0.68rem] tracking-[0.2em] uppercase transition-all duration-500 relative focus-visible:outline-none ${e === `enquiry` ? `text-accent-gold` : `text-muted-foreground hover:text-foreground`}`,
                  children: [
                    `Enquiries`,
                    e === `enquiry` &&
                      (0, X.jsx)(`span`, {
                        className: `absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold`,
                      }),
                  ],
                }),
                (0, X.jsxs)(`button`, {
                  onClick: () => t(`partner`),
                  className: `pb-3 font-display text-[0.68rem] tracking-[0.2em] uppercase transition-all duration-500 relative focus-visible:outline-none ${e === `partner` ? `text-accent-gold` : `text-muted-foreground hover:text-foreground`}`,
                  children: [
                    `Partner With Us`,
                    e === `partner` &&
                      (0, X.jsx)(`span`, {
                        className: `absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold`,
                      }),
                  ],
                }),
                (0, X.jsxs)(`button`, {
                  onClick: () => t(`faq`),
                  className: `pb-3 font-display text-[0.68rem] tracking-[0.2em] uppercase transition-all duration-500 relative focus-visible:outline-none ${e === `faq` ? `text-accent-gold` : `text-muted-foreground hover:text-foreground`}`,
                  children: [
                    `FAQs`,
                    e === `faq` &&
                      (0, X.jsx)(`span`, {
                        className: `absolute bottom-0 left-0 w-full h-0.5 bg-accent-gold`,
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, X.jsxs)(`div`, {
          className: `grid gap-12 lg:grid-cols-12 items-start`,
          children: [
            (0, X.jsxs)(`div`, {
              className: `lg:col-span-4 space-y-8`,
              children: [
                (0, X.jsxs)(Pu, {
                  className: `space-y-6`,
                  children: [
                    (0, X.jsx)(`h4`, {
                      id: `contact`,
                      className: `font-display text-sm tracking-[0.2em] text-foreground uppercase border-b border-hairline pb-3`,
                      children: `THE BILLIONAIRE'S AQUA`,
                    }),
                    (0, X.jsxs)(`div`, {
                      className: `flex items-start gap-4 text-muted-foreground`,
                      children: [
                        (0, X.jsx)(Gc, { className: `size-5 text-accent-gold shrink-0 mt-0.5` }),
                        (0, X.jsxs)(`div`, {
                          className: `font-body text-xs tracking-wider space-y-1`,
                          children: [
                            (0, X.jsx)(`p`, {
                              className: `text-foreground font-semibold`,
                              children: `Pune Office`,
                            }),
                            (0, X.jsx)(`p`, { children: `Pune, PCMC, Maharashtra, India` }),
                          ],
                        }),
                      ],
                    }),
                    (0, X.jsxs)(`div`, {
                      className: `flex items-start gap-4 text-muted-foreground`,
                      children: [
                        (0, X.jsx)(Wc, { className: `size-5 text-accent-gold shrink-0 mt-0.5` }),
                        (0, X.jsxs)(`div`, {
                          className: `font-body text-xs tracking-wider space-y-1`,
                          children: [
                            (0, X.jsx)(`p`, {
                              className: `text-foreground font-semibold`,
                              children: `Email Us`,
                            }),
                            (0, X.jsx)(`a`, {
                              href: `mailto:enquiry@billionairesaqua.com`,
                              className: `hover:text-accent-gold transition-colors`,
                              children: `enquiry@billionairesaqua.com`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, X.jsxs)(`div`, {
                      className: `flex items-start gap-4 text-muted-foreground`,
                      children: [
                        (0, X.jsx)(qc, { className: `size-5 text-accent-gold shrink-0 mt-0.5` }),
                        (0, X.jsxs)(`div`, {
                          className: `font-body text-xs tracking-wider space-y-1`,
                          children: [
                            (0, X.jsx)(`p`, {
                              className: `text-foreground font-semibold`,
                              children: `Phone Support`,
                            }),
                            (0, X.jsx)(`p`, { children: `[Verification Pending]` }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, X.jsxs)(Pu, {
                  className: `border border-hairline p-6 rounded-xl bg-black/20 space-y-4`,
                  delay: 0.1,
                  children: [
                    (0, X.jsx)(`h5`, {
                      className: `font-display text-[0.62rem] tracking-[0.25em] text-accent-gold uppercase`,
                      children: `Institutional Bulk Supply`,
                    }),
                    (0, X.jsx)(`p`, {
                      className: `font-body text-[0.72rem] text-muted-foreground leading-relaxed`,
                      children: `Premium hydration customized for Corporate Offices, Luxury Hotels, Fine-dining Restaurants, Events, and Special Occasions.`,
                    }),
                  ],
                }),
              ],
            }),
            (0, X.jsxs)(`div`, {
              className: `lg:col-span-8 bg-black/40 border border-hairline rounded-xl p-8`,
              children: [
                e === `enquiry` &&
                  (0, X.jsx)(Pu, {
                    children: (0, X.jsxs)(`form`, {
                      onSubmit: (e) => {
                        (e.preventDefault(),
                          ed.success(
                            `Enquiry submitted successfully! Our team will get back to you.`,
                          ),
                          e.target.reset());
                      },
                      className: `space-y-6`,
                      children: [
                        (0, X.jsx)(`h4`, {
                          className: `font-display text-xs tracking-[0.25em] text-accent-gold uppercase mb-4`,
                          children: `Business & Institutional Enquiry`,
                        }),
                        (0, X.jsxs)(`div`, {
                          className: `grid gap-6 sm:grid-cols-2`,
                          children: [
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `Full Name`,
                                }),
                                (0, X.jsx)(`input`, {
                                  required: !0,
                                  type: `text`,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors`,
                                }),
                              ],
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `Company / Institution`,
                                }),
                                (0, X.jsx)(`input`, {
                                  required: !0,
                                  type: `text`,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors`,
                                }),
                              ],
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `Mobile Number`,
                                }),
                                (0, X.jsx)(`input`, {
                                  required: !0,
                                  type: `tel`,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors`,
                                }),
                              ],
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `Email Address`,
                                }),
                                (0, X.jsx)(`input`, {
                                  required: !0,
                                  type: `email`,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors`,
                                }),
                              ],
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2 sm:col-span-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `Enquiry Type`,
                                }),
                                (0, X.jsxs)(`select`, {
                                  required: !0,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors select-custom`,
                                  children: [
                                    (0, X.jsx)(`option`, {
                                      className: `bg-neutral-950`,
                                      value: `general`,
                                      children: `General Enquiry`,
                                    }),
                                    (0, X.jsx)(`option`, {
                                      className: `bg-neutral-950`,
                                      value: `distributor`,
                                      children: `Distributor Partnership`,
                                    }),
                                    (0, X.jsx)(`option`, {
                                      className: `bg-neutral-950`,
                                      value: `retailer`,
                                      children: `Retailer Supply`,
                                    }),
                                    (0, X.jsx)(`option`, {
                                      className: `bg-neutral-950`,
                                      value: `corporate`,
                                      children: `Corporate Supply`,
                                    }),
                                    (0, X.jsx)(`option`, {
                                      className: `bg-neutral-950`,
                                      value: `bulk`,
                                      children: `Bulk Order`,
                                    }),
                                    (0, X.jsx)(`option`, {
                                      className: `bg-neutral-950`,
                                      value: `partnership`,
                                      children: `Strategic Partnership`,
                                    }),
                                    (0, X.jsx)(`option`, {
                                      className: `bg-neutral-950`,
                                      value: `investor`,
                                      children: `Investor / Business Opportunities`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2 sm:col-span-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `Your Message`,
                                }),
                                (0, X.jsx)(`textarea`, {
                                  required: !0,
                                  rows: 4,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors resize-none`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, X.jsxs)(`button`, {
                          type: `submit`,
                          className: `w-full py-4 rounded-lg bg-foreground text-background font-body text-[0.72rem] tracking-[0.25em] uppercase hover:bg-accent-gold hover:text-background transition-colors duration-500 flex items-center justify-center gap-2 focus-visible:outline-none`,
                          children: [`Send Enquiry `, (0, X.jsx)(Hc, { className: `size-4` })],
                        }),
                      ],
                    }),
                  }),
                e === `partner` &&
                  (0, X.jsx)(Pu, {
                    children: (0, X.jsxs)(`form`, {
                      onSubmit: (e) => {
                        (e.preventDefault(),
                          ed.success(
                            `Distributor application received! Our team will contact you shortly.`,
                          ),
                          e.target.reset());
                      },
                      className: `space-y-6`,
                      children: [
                        (0, X.jsxs)(`div`, {
                          className: `mb-4`,
                          children: [
                            (0, X.jsx)(`h4`, {
                              className: `font-display text-xs tracking-[0.25em] text-accent-gold uppercase`,
                              children: `Distributor Partner Application`,
                            }),
                            (0, X.jsx)(`p`, {
                              className: `font-body text-[0.68rem] text-muted-foreground mt-1`,
                              children: `We are building a strong distribution network for the next generation of premium packaged drinking water.`,
                            }),
                          ],
                        }),
                        (0, X.jsxs)(`div`, {
                          className: `grid gap-6 sm:grid-cols-2`,
                          children: [
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `Full Name`,
                                }),
                                (0, X.jsx)(`input`, {
                                  required: !0,
                                  type: `text`,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors`,
                                }),
                              ],
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `Company Name`,
                                }),
                                (0, X.jsx)(`input`, {
                                  required: !0,
                                  type: `text`,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors`,
                                }),
                              ],
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `Mobile Number`,
                                }),
                                (0, X.jsx)(`input`, {
                                  required: !0,
                                  type: `tel`,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors`,
                                }),
                              ],
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `Email Address`,
                                }),
                                (0, X.jsx)(`input`, {
                                  required: !0,
                                  type: `email`,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors`,
                                }),
                              ],
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `City`,
                                }),
                                (0, X.jsx)(`input`, {
                                  required: !0,
                                  type: `text`,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors`,
                                }),
                              ],
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `State`,
                                }),
                                (0, X.jsx)(`input`, {
                                  required: !0,
                                  type: `text`,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors`,
                                }),
                              ],
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `Business Type`,
                                }),
                                (0, X.jsx)(`input`, {
                                  required: !0,
                                  placeholder: `Retail / Wholesale / Beverage Dist.`,
                                  type: `text`,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors`,
                                }),
                              ],
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `Years in Business`,
                                }),
                                (0, X.jsx)(`input`, {
                                  required: !0,
                                  type: `number`,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors`,
                                }),
                              ],
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2 sm:col-span-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `Current Distribution Network`,
                                }),
                                (0, X.jsx)(`textarea`, {
                                  placeholder: `Briefly describe your existing distribution network and outlets covered...`,
                                  rows: 3,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors resize-none`,
                                }),
                              ],
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2 sm:col-span-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `Investment & Infrastructure Capacity`,
                                }),
                                (0, X.jsx)(`input`, {
                                  placeholder: `E.g., Warehouse space, delivery vehicles, available capital...`,
                                  type: `text`,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors`,
                                }),
                              ],
                            }),
                            (0, X.jsxs)(`div`, {
                              className: `space-y-2 sm:col-span-2`,
                              children: [
                                (0, X.jsx)(`label`, {
                                  className: `font-body text-[0.58rem] tracking-[0.25em] text-muted-foreground uppercase`,
                                  children: `Additional Message`,
                                }),
                                (0, X.jsx)(`textarea`, {
                                  rows: 3,
                                  className: `w-full bg-black/30 border border-hairline rounded-lg px-4 py-3 text-xs text-foreground focus:border-accent-gold focus-visible:outline-none transition-colors resize-none`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, X.jsxs)(`button`, {
                          type: `submit`,
                          className: `w-full py-4 rounded-lg bg-foreground text-background font-body text-[0.72rem] tracking-[0.25em] uppercase hover:bg-accent-gold hover:text-background transition-colors duration-500 flex items-center justify-center gap-2 focus-visible:outline-none`,
                          children: [
                            `Submit Application `,
                            (0, X.jsx)(Hc, { className: `size-4` }),
                          ],
                        }),
                      ],
                    }),
                  }),
                e === `faq` &&
                  (0, X.jsx)(Pu, {
                    children: (0, X.jsxs)(`div`, {
                      id: `faq`,
                      className: `space-y-6`,
                      children: [
                        (0, X.jsxs)(`h4`, {
                          className: `font-display text-xs tracking-[0.25em] text-accent-gold uppercase mb-4 flex items-center gap-2`,
                          children: [
                            (0, X.jsx)(Uc, { className: `size-4` }),
                            ` Frequently Asked Questions`,
                          ],
                        }),
                        (0, X.jsx)(`div`, {
                          className: `space-y-4`,
                          children: td.map((e, t) =>
                            (0, X.jsxs)(
                              `div`,
                              {
                                className: `border border-hairline p-5 rounded-lg bg-black/20`,
                                children: [
                                  (0, X.jsx)(`h5`, {
                                    className: `font-display text-xs tracking-[0.15em] text-foreground uppercase mb-2`,
                                    children: e.q,
                                  }),
                                  (0, X.jsx)(`p`, {
                                    className: `font-body text-xs text-muted-foreground leading-relaxed`,
                                    children: e.a,
                                  }),
                                ],
                              },
                              t,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var rd = t({ component: () => id });
function id() {
  let e = C(),
    [t, n] = (0, s.useState)(!1),
    r = (0, s.useCallback)(() => n(!0), []);
  return (0, X.jsxs)(X.Fragment, {
    children: [
      (0, X.jsx)(Mc, { ready: t && e.ready }),
      (0, X.jsx)(kc, { reducedMotion: e.reducedMotion }),
      (0, X.jsx)(jc, { device: e, onReady: r }),
      (0, X.jsx)(`div`, { className: `stage-atmosphere`, "aria-hidden": `true` }),
      (0, X.jsx)(wu, {}),
      (0, X.jsx)(Eu, {}),
      (0, X.jsxs)(`main`, {
        className: `relative`,
        children: [
          (0, X.jsx)(Nu, { ready: t }),
          (0, X.jsx)(Fu, {}),
          (0, X.jsx)(Iu, {}),
          (0, X.jsx)(Ru, {}),
          (0, X.jsx)(zu, {}),
          (0, X.jsx)(Bu, {}),
          (0, X.jsx)(Uu, {}),
          (0, X.jsx)(Wu, {}),
          (0, X.jsx)(Ku, {}),
          (0, X.jsx)(nd, {}),
        ],
      }),
      (0, X.jsx)(Du, {}),
    ],
  });
}
export { l as a, id as component, f as i, g as n, h as o, u as r, rd as t };
