var Gt = Object.defineProperty;
var Yt = (t, e, n) => e in t ? Gt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var p = (t, e, n) => (Yt(t, typeof e != "symbol" ? e + "" : e, n), n);
/* @license twgl.js 5.5.3 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */
let R = Float32Array;
function Ht(t) {
  const e = R;
  return R = t, e;
}
function j(t, e, n) {
  const r = new R(3);
  return t && (r[0] = t), e && (r[1] = e), n && (r[2] = n), r;
}
function Wt(t, e, n) {
  return n = n || new R(3), n[0] = t[0] + e[0], n[1] = t[1] + e[1], n[2] = t[2] + e[2], n;
}
function Ke(t, e, n) {
  return n = n || new R(3), n[0] = t[0] - e[0], n[1] = t[1] - e[1], n[2] = t[2] - e[2], n;
}
function qt(t, e, n, r) {
  return r = r || new R(3), r[0] = t[0] + n * (e[0] - t[0]), r[1] = t[1] + n * (e[1] - t[1]), r[2] = t[2] + n * (e[2] - t[2]), r;
}
function Xt(t, e, n, r) {
  return r = r || new R(3), r[0] = t[0] + n[0] * (e[0] - t[0]), r[1] = t[1] + n[1] * (e[1] - t[1]), r[2] = t[2] + n[2] * (e[2] - t[2]), r;
}
function jt(t, e, n) {
  return n = n || new R(3), n[0] = Math.max(t[0], e[0]), n[1] = Math.max(t[1], e[1]), n[2] = Math.max(t[2], e[2]), n;
}
function Kt(t, e, n) {
  return n = n || new R(3), n[0] = Math.min(t[0], e[0]), n[1] = Math.min(t[1], e[1]), n[2] = Math.min(t[2], e[2]), n;
}
function Zt(t, e, n) {
  return n = n || new R(3), n[0] = t[0] * e, n[1] = t[1] * e, n[2] = t[2] * e, n;
}
function Jt(t, e, n) {
  return n = n || new R(3), n[0] = t[0] / e, n[1] = t[1] / e, n[2] = t[2] / e, n;
}
function Ee(t, e, n) {
  n = n || new R(3);
  const r = t[2] * e[0] - t[0] * e[2], i = t[0] * e[1] - t[1] * e[0];
  return n[0] = t[1] * e[2] - t[2] * e[1], n[1] = r, n[2] = i, n;
}
function Qt(t, e) {
  return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
}
function dt(t) {
  return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
}
function en(t) {
  return t[0] * t[0] + t[1] * t[1] + t[2] * t[2];
}
function tn(t, e) {
  const n = t[0] - e[0], r = t[1] - e[1], i = t[2] - e[2];
  return Math.sqrt(n * n + r * r + i * i);
}
function nn(t, e) {
  const n = t[0] - e[0], r = t[1] - e[1], i = t[2] - e[2];
  return n * n + r * r + i * i;
}
function se(t, e) {
  e = e || new R(3);
  const n = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], r = Math.sqrt(n);
  return r > 1e-5 ? (e[0] = t[0] / r, e[1] = t[1] / r, e[2] = t[2] / r) : (e[0] = 0, e[1] = 0, e[2] = 0), e;
}
function rn(t, e) {
  return e = e || new R(3), e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e;
}
function on(t, e) {
  return e = e || new R(3), e[0] = t[0], e[1] = t[1], e[2] = t[2], e;
}
function cn(t, e, n) {
  return n = n || new R(3), n[0] = t[0] * e[0], n[1] = t[1] * e[1], n[2] = t[2] * e[2], n;
}
function sn(t, e, n) {
  return n = n || new R(3), n[0] = t[0] / e[0], n[1] = t[1] / e[1], n[2] = t[2] / e[2], n;
}
var un = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  add: Wt,
  copy: on,
  create: j,
  cross: Ee,
  distance: tn,
  distanceSq: nn,
  divide: sn,
  divScalar: Jt,
  dot: Qt,
  lerp: qt,
  lerpV: Xt,
  length: dt,
  lengthSq: en,
  max: jt,
  min: Kt,
  mulScalar: Zt,
  multiply: cn,
  negate: rn,
  normalize: se,
  setDefaultType: Ht,
  subtract: Ke
});
let _ = Float32Array;
function fn(t) {
  const e = _;
  return _ = t, e;
}
function an(t, e) {
  return e = e || new _(16), e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = -t[3], e[4] = -t[4], e[5] = -t[5], e[6] = -t[6], e[7] = -t[7], e[8] = -t[8], e[9] = -t[9], e[10] = -t[10], e[11] = -t[11], e[12] = -t[12], e[13] = -t[13], e[14] = -t[14], e[15] = -t[15], e;
}
function hn() {
  return new _(16).fill(0);
}
function Ze(t, e) {
  return e = e || new _(16), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
}
function Je(t) {
  return t = t || new _(16), t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function ln(t, e) {
  if (e = e || new _(16), e === t) {
    let T;
    return T = t[1], t[1] = t[4], t[4] = T, T = t[2], t[2] = t[8], t[8] = T, T = t[3], t[3] = t[12], t[12] = T, T = t[6], t[6] = t[9], t[9] = T, T = t[7], t[7] = t[13], t[13] = T, T = t[11], t[11] = t[14], t[14] = T, e;
  }
  const n = t[0 * 4 + 0], r = t[0 * 4 + 1], i = t[0 * 4 + 2], o = t[0 * 4 + 3], c = t[1 * 4 + 0], s = t[1 * 4 + 1], u = t[1 * 4 + 2], f = t[1 * 4 + 3], h = t[2 * 4 + 0], a = t[2 * 4 + 1], l = t[2 * 4 + 2], y = t[2 * 4 + 3], x = t[3 * 4 + 0], S = t[3 * 4 + 1], m = t[3 * 4 + 2], E = t[3 * 4 + 3];
  return e[0] = n, e[1] = c, e[2] = h, e[3] = x, e[4] = r, e[5] = s, e[6] = a, e[7] = S, e[8] = i, e[9] = u, e[10] = l, e[11] = m, e[12] = o, e[13] = f, e[14] = y, e[15] = E, e;
}
function Qe(t, e) {
  e = e || new _(16);
  const n = t[0 * 4 + 0], r = t[0 * 4 + 1], i = t[0 * 4 + 2], o = t[0 * 4 + 3], c = t[1 * 4 + 0], s = t[1 * 4 + 1], u = t[1 * 4 + 2], f = t[1 * 4 + 3], h = t[2 * 4 + 0], a = t[2 * 4 + 1], l = t[2 * 4 + 2], y = t[2 * 4 + 3], x = t[3 * 4 + 0], S = t[3 * 4 + 1], m = t[3 * 4 + 2], E = t[3 * 4 + 3], T = l * E, w = m * y, I = u * E, M = m * f, D = u * y, N = l * f, P = i * E, g = m * o, v = i * y, C = l * o, V = i * f, L = u * o, O = h * S, k = x * a, $ = c * S, G = x * s, Y = c * a, d = h * s, ee = n * S, te = x * r, ne = n * a, re = h * r, ie = n * s, oe = c * r, Ve = T * s + M * a + D * S - (w * s + I * a + N * S), Le = w * r + P * a + C * S - (T * r + g * a + v * S), Oe = I * r + g * s + V * S - (M * r + P * s + L * S), ke = N * r + v * s + L * a - (D * r + C * s + V * a), F = 1 / (n * Ve + c * Le + h * Oe + x * ke);
  return e[0] = F * Ve, e[1] = F * Le, e[2] = F * Oe, e[3] = F * ke, e[4] = F * (w * c + I * h + N * x - (T * c + M * h + D * x)), e[5] = F * (T * n + g * h + v * x - (w * n + P * h + C * x)), e[6] = F * (M * n + P * c + L * x - (I * n + g * c + V * x)), e[7] = F * (D * n + C * c + V * h - (N * n + v * c + L * h)), e[8] = F * (O * f + G * y + Y * E - (k * f + $ * y + d * E)), e[9] = F * (k * o + ee * y + re * E - (O * o + te * y + ne * E)), e[10] = F * ($ * o + te * f + ie * E - (G * o + ee * f + oe * E)), e[11] = F * (d * o + ne * f + oe * y - (Y * o + re * f + ie * y)), e[12] = F * ($ * l + d * m + k * u - (Y * m + O * u + G * l)), e[13] = F * (ne * m + O * i + te * l - (ee * l + re * m + k * i)), e[14] = F * (ee * u + oe * m + G * i - (ie * m + $ * i + te * u)), e[15] = F * (ie * l + Y * i + re * u - (ne * u + oe * l + d * i)), e;
}
function yn(t, e, n) {
  n = n || new _(16);
  const r = t[0], i = t[1], o = t[2], c = t[3], s = t[4 + 0], u = t[4 + 1], f = t[4 + 2], h = t[4 + 3], a = t[8 + 0], l = t[8 + 1], y = t[8 + 2], x = t[8 + 3], S = t[12 + 0], m = t[12 + 1], E = t[12 + 2], T = t[12 + 3], w = e[0], I = e[1], M = e[2], D = e[3], N = e[4 + 0], P = e[4 + 1], g = e[4 + 2], v = e[4 + 3], C = e[8 + 0], V = e[8 + 1], L = e[8 + 2], O = e[8 + 3], k = e[12 + 0], $ = e[12 + 1], G = e[12 + 2], Y = e[12 + 3];
  return n[0] = r * w + s * I + a * M + S * D, n[1] = i * w + u * I + l * M + m * D, n[2] = o * w + f * I + y * M + E * D, n[3] = c * w + h * I + x * M + T * D, n[4] = r * N + s * P + a * g + S * v, n[5] = i * N + u * P + l * g + m * v, n[6] = o * N + f * P + y * g + E * v, n[7] = c * N + h * P + x * g + T * v, n[8] = r * C + s * V + a * L + S * O, n[9] = i * C + u * V + l * L + m * O, n[10] = o * C + f * V + y * L + E * O, n[11] = c * C + h * V + x * L + T * O, n[12] = r * k + s * $ + a * G + S * Y, n[13] = i * k + u * $ + l * G + m * Y, n[14] = o * k + f * $ + y * G + E * Y, n[15] = c * k + h * $ + x * G + T * Y, n;
}
function xn(t, e, n) {
  return n = n || Je(), t !== n && (n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11]), n[12] = e[0], n[13] = e[1], n[14] = e[2], n[15] = 1, n;
}
function An(t, e) {
  return e = e || j(), e[0] = t[12], e[1] = t[13], e[2] = t[14], e;
}
function pn(t, e, n) {
  n = n || j();
  const r = e * 4;
  return n[0] = t[r + 0], n[1] = t[r + 1], n[2] = t[r + 2], n;
}
function Tn(t, e, n, r) {
  r !== t && (r = Ze(t, r));
  const i = n * 4;
  return r[i + 0] = e[0], r[i + 1] = e[1], r[i + 2] = e[2], r;
}
function Sn(t, e, n, r, i) {
  i = i || new _(16);
  const o = Math.tan(Math.PI * 0.5 - 0.5 * t), c = 1 / (n - r);
  return i[0] = o / e, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = o, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = (n + r) * c, i[11] = -1, i[12] = 0, i[13] = 0, i[14] = n * r * c * 2, i[15] = 0, i;
}
function mn(t, e, n, r, i, o, c) {
  return c = c || new _(16), c[0] = 2 / (e - t), c[1] = 0, c[2] = 0, c[3] = 0, c[4] = 0, c[5] = 2 / (r - n), c[6] = 0, c[7] = 0, c[8] = 0, c[9] = 0, c[10] = 2 / (i - o), c[11] = 0, c[12] = (e + t) / (t - e), c[13] = (r + n) / (n - r), c[14] = (o + i) / (i - o), c[15] = 1, c;
}
function En(t, e, n, r, i, o, c) {
  c = c || new _(16);
  const s = e - t, u = r - n, f = i - o;
  return c[0] = 2 * i / s, c[1] = 0, c[2] = 0, c[3] = 0, c[4] = 0, c[5] = 2 * i / u, c[6] = 0, c[7] = 0, c[8] = (t + e) / s, c[9] = (r + n) / u, c[10] = o / f, c[11] = -1, c[12] = 0, c[13] = 0, c[14] = i * o / f, c[15] = 0, c;
}
let K, J, X;
function _n(t, e, n, r) {
  return r = r || new _(16), K = K || j(), J = J || j(), X = X || j(), se(
    Ke(t, e, X),
    X
  ), se(Ee(n, X, K), K), se(Ee(X, K, J), J), r[0] = K[0], r[1] = K[1], r[2] = K[2], r[3] = 0, r[4] = J[0], r[5] = J[1], r[6] = J[2], r[7] = 0, r[8] = X[0], r[9] = X[1], r[10] = X[2], r[11] = 0, r[12] = t[0], r[13] = t[1], r[14] = t[2], r[15] = 1, r;
}
function bn(t, e) {
  return e = e || new _(16), e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e;
}
function Bn(t, e, n) {
  n = n || new _(16);
  const r = e[0], i = e[1], o = e[2], c = t[0], s = t[1], u = t[2], f = t[3], h = t[1 * 4 + 0], a = t[1 * 4 + 1], l = t[1 * 4 + 2], y = t[1 * 4 + 3], x = t[2 * 4 + 0], S = t[2 * 4 + 1], m = t[2 * 4 + 2], E = t[2 * 4 + 3], T = t[3 * 4 + 0], w = t[3 * 4 + 1], I = t[3 * 4 + 2], M = t[3 * 4 + 3];
  return t !== n && (n[0] = c, n[1] = s, n[2] = u, n[3] = f, n[4] = h, n[5] = a, n[6] = l, n[7] = y, n[8] = x, n[9] = S, n[10] = m, n[11] = E), n[12] = c * r + h * i + x * o + T, n[13] = s * r + a * i + S * o + w, n[14] = u * r + l * i + m * o + I, n[15] = f * r + y * i + E * o + M, n;
}
function wn(t, e) {
  e = e || new _(16);
  const n = Math.cos(t), r = Math.sin(t);
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = n, e[6] = r, e[7] = 0, e[8] = 0, e[9] = -r, e[10] = n, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function In(t, e, n) {
  n = n || new _(16);
  const r = t[4], i = t[5], o = t[6], c = t[7], s = t[8], u = t[9], f = t[10], h = t[11], a = Math.cos(e), l = Math.sin(e);
  return n[4] = a * r + l * s, n[5] = a * i + l * u, n[6] = a * o + l * f, n[7] = a * c + l * h, n[8] = a * s - l * r, n[9] = a * u - l * i, n[10] = a * f - l * o, n[11] = a * h - l * c, t !== n && (n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15]), n;
}
function Mn(t, e) {
  e = e || new _(16);
  const n = Math.cos(t), r = Math.sin(t);
  return e[0] = n, e[1] = 0, e[2] = -r, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = r, e[9] = 0, e[10] = n, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Rn(t, e, n) {
  n = n || new _(16);
  const r = t[0 * 4 + 0], i = t[0 * 4 + 1], o = t[0 * 4 + 2], c = t[0 * 4 + 3], s = t[2 * 4 + 0], u = t[2 * 4 + 1], f = t[2 * 4 + 2], h = t[2 * 4 + 3], a = Math.cos(e), l = Math.sin(e);
  return n[0] = a * r - l * s, n[1] = a * i - l * u, n[2] = a * o - l * f, n[3] = a * c - l * h, n[8] = a * s + l * r, n[9] = a * u + l * i, n[10] = a * f + l * o, n[11] = a * h + l * c, t !== n && (n[4] = t[4], n[5] = t[5], n[6] = t[6], n[7] = t[7], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15]), n;
}
function Dn(t, e) {
  e = e || new _(16);
  const n = Math.cos(t), r = Math.sin(t);
  return e[0] = n, e[1] = r, e[2] = 0, e[3] = 0, e[4] = -r, e[5] = n, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Fn(t, e, n) {
  n = n || new _(16);
  const r = t[0 * 4 + 0], i = t[0 * 4 + 1], o = t[0 * 4 + 2], c = t[0 * 4 + 3], s = t[1 * 4 + 0], u = t[1 * 4 + 1], f = t[1 * 4 + 2], h = t[1 * 4 + 3], a = Math.cos(e), l = Math.sin(e);
  return n[0] = a * r + l * s, n[1] = a * i + l * u, n[2] = a * o + l * f, n[3] = a * c + l * h, n[4] = a * s - l * r, n[5] = a * u - l * i, n[6] = a * f - l * o, n[7] = a * h - l * c, t !== n && (n[8] = t[8], n[9] = t[9], n[10] = t[10], n[11] = t[11], n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15]), n;
}
function Nn(t, e, n) {
  n = n || new _(16);
  let r = t[0], i = t[1], o = t[2];
  const c = Math.sqrt(r * r + i * i + o * o);
  r /= c, i /= c, o /= c;
  const s = r * r, u = i * i, f = o * o, h = Math.cos(e), a = Math.sin(e), l = 1 - h;
  return n[0] = s + (1 - s) * h, n[1] = r * i * l + o * a, n[2] = r * o * l - i * a, n[3] = 0, n[4] = r * i * l - o * a, n[5] = u + (1 - u) * h, n[6] = i * o * l + r * a, n[7] = 0, n[8] = r * o * l + i * a, n[9] = i * o * l - r * a, n[10] = f + (1 - f) * h, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
}
function zn(t, e, n, r) {
  r = r || new _(16);
  let i = e[0], o = e[1], c = e[2];
  const s = Math.sqrt(i * i + o * o + c * c);
  i /= s, o /= s, c /= s;
  const u = i * i, f = o * o, h = c * c, a = Math.cos(n), l = Math.sin(n), y = 1 - a, x = u + (1 - u) * a, S = i * o * y + c * l, m = i * c * y - o * l, E = i * o * y - c * l, T = f + (1 - f) * a, w = o * c * y + i * l, I = i * c * y + o * l, M = o * c * y - i * l, D = h + (1 - h) * a, N = t[0], P = t[1], g = t[2], v = t[3], C = t[4], V = t[5], L = t[6], O = t[7], k = t[8], $ = t[9], G = t[10], Y = t[11];
  return r[0] = x * N + S * C + m * k, r[1] = x * P + S * V + m * $, r[2] = x * g + S * L + m * G, r[3] = x * v + S * O + m * Y, r[4] = E * N + T * C + w * k, r[5] = E * P + T * V + w * $, r[6] = E * g + T * L + w * G, r[7] = E * v + T * O + w * Y, r[8] = I * N + M * C + D * k, r[9] = I * P + M * V + D * $, r[10] = I * g + M * L + D * G, r[11] = I * v + M * O + D * Y, t !== r && (r[12] = t[12], r[13] = t[13], r[14] = t[14], r[15] = t[15]), r;
}
function Un(t, e) {
  return e = e || new _(16), e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function Pn(t, e, n) {
  n = n || new _(16);
  const r = e[0], i = e[1], o = e[2];
  return n[0] = r * t[0 * 4 + 0], n[1] = r * t[0 * 4 + 1], n[2] = r * t[0 * 4 + 2], n[3] = r * t[0 * 4 + 3], n[4] = i * t[1 * 4 + 0], n[5] = i * t[1 * 4 + 1], n[6] = i * t[1 * 4 + 2], n[7] = i * t[1 * 4 + 3], n[8] = o * t[2 * 4 + 0], n[9] = o * t[2 * 4 + 1], n[10] = o * t[2 * 4 + 2], n[11] = o * t[2 * 4 + 3], t !== n && (n[12] = t[12], n[13] = t[13], n[14] = t[14], n[15] = t[15]), n;
}
function gn(t, e, n) {
  n = n || j();
  const r = e[0], i = e[1], o = e[2], c = r * t[0 * 4 + 3] + i * t[1 * 4 + 3] + o * t[2 * 4 + 3] + t[3 * 4 + 3];
  return n[0] = (r * t[0 * 4 + 0] + i * t[1 * 4 + 0] + o * t[2 * 4 + 0] + t[3 * 4 + 0]) / c, n[1] = (r * t[0 * 4 + 1] + i * t[1 * 4 + 1] + o * t[2 * 4 + 1] + t[3 * 4 + 1]) / c, n[2] = (r * t[0 * 4 + 2] + i * t[1 * 4 + 2] + o * t[2 * 4 + 2] + t[3 * 4 + 2]) / c, n;
}
function vn(t, e, n) {
  n = n || j();
  const r = e[0], i = e[1], o = e[2];
  return n[0] = r * t[0 * 4 + 0] + i * t[1 * 4 + 0] + o * t[2 * 4 + 0], n[1] = r * t[0 * 4 + 1] + i * t[1 * 4 + 1] + o * t[2 * 4 + 1], n[2] = r * t[0 * 4 + 2] + i * t[1 * 4 + 2] + o * t[2 * 4 + 2], n;
}
function Cn(t, e, n) {
  n = n || j();
  const r = Qe(t), i = e[0], o = e[1], c = e[2];
  return n[0] = i * r[0 * 4 + 0] + o * r[0 * 4 + 1] + c * r[0 * 4 + 2], n[1] = i * r[1 * 4 + 0] + o * r[1 * 4 + 1] + c * r[1 * 4 + 2], n[2] = i * r[2 * 4 + 0] + o * r[2 * 4 + 1] + c * r[2 * 4 + 2], n;
}
var ue = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  axisRotate: zn,
  axisRotation: Nn,
  copy: Ze,
  create: hn,
  frustum: En,
  getAxis: pn,
  getTranslation: An,
  identity: Je,
  inverse: Qe,
  lookAt: _n,
  multiply: yn,
  negate: an,
  ortho: mn,
  perspective: Sn,
  rotateX: In,
  rotateY: Rn,
  rotateZ: Fn,
  rotationX: wn,
  rotationY: Mn,
  rotationZ: Dn,
  scale: Pn,
  scaling: Un,
  setAxis: Tn,
  setDefaultType: fn,
  setTranslation: xn,
  transformDirection: vn,
  transformNormal: Cn,
  transformPoint: gn,
  translate: Bn,
  translation: bn,
  transpose: ln
});
const be = 5120, Q = 5121, Be = 5122, we = 5123, Ie = 5124, Me = 5125, Re = 5126, Vn = 32819, Ln = 32820, On = 33635, kn = 5131, $n = 33640, Gn = 35899, Yn = 35902, Hn = 36269, Wn = 34042, de = {};
{
  const t = de;
  t[be] = Int8Array, t[Q] = Uint8Array, t[Be] = Int16Array, t[we] = Uint16Array, t[Ie] = Int32Array, t[Me] = Uint32Array, t[Re] = Float32Array, t[Vn] = Uint16Array, t[Ln] = Uint16Array, t[On] = Uint16Array, t[kn] = Uint16Array, t[$n] = Uint32Array, t[Gn] = Uint32Array, t[Yn] = Uint32Array, t[Hn] = Uint32Array, t[Wn] = Uint32Array;
}
function et(t) {
  if (t instanceof Int8Array)
    return be;
  if (t instanceof Uint8Array || t instanceof Uint8ClampedArray)
    return Q;
  if (t instanceof Int16Array)
    return Be;
  if (t instanceof Uint16Array)
    return we;
  if (t instanceof Int32Array)
    return Ie;
  if (t instanceof Uint32Array)
    return Me;
  if (t instanceof Float32Array)
    return Re;
  throw new Error("unsupported typed array type");
}
function tt(t) {
  if (t === Int8Array)
    return be;
  if (t === Uint8Array || t === Uint8ClampedArray)
    return Q;
  if (t === Int16Array)
    return Be;
  if (t === Uint16Array)
    return we;
  if (t === Int32Array)
    return Ie;
  if (t === Uint32Array)
    return Me;
  if (t === Float32Array)
    return Re;
  throw new Error("unsupported typed array type");
}
function qn(t) {
  const e = de[t];
  if (!e)
    throw new Error("unknown gl type");
  return e;
}
const _e = typeof SharedArrayBuffer < "u" ? function(e) {
  return e && e.buffer && (e.buffer instanceof ArrayBuffer || e.buffer instanceof SharedArrayBuffer);
} : function(e) {
  return e && e.buffer && e.buffer instanceof ArrayBuffer;
};
function Xn(...t) {
  console.error(...t);
}
const $e = /* @__PURE__ */ new Map();
function nt(t, e) {
  if (!t || typeof t != "object")
    return !1;
  let n = $e.get(e);
  n || (n = /* @__PURE__ */ new WeakMap(), $e.set(e, n));
  let r = n.get(t);
  if (r === void 0) {
    const i = Object.prototype.toString.call(t);
    r = i.substring(8, i.length - 1) === e, n.set(t, r);
  }
  return r;
}
function jn(t, e) {
  return typeof WebGLBuffer < "u" && nt(e, "WebGLBuffer");
}
function rt(t, e) {
  return typeof WebGLTexture < "u" && nt(e, "WebGLTexture");
}
const it = 35044, W = 34962, Kn = 34963, Zn = 34660, Jn = 5120, Qn = 5121, dn = 5122, er = 5123, tr = 5124, nr = 5125, ot = 5126, ct = {
  attribPrefix: ""
};
function st(t, e, n, r, i) {
  t.bindBuffer(e, n), t.bufferData(e, r, i || it);
}
function ut(t, e, n, r) {
  if (jn(t, e))
    return e;
  n = n || W;
  const i = t.createBuffer();
  return st(t, n, i, e, r), i;
}
function ft(t) {
  return t === "indices";
}
function rr(t) {
  return t === Int8Array || t === Uint8Array;
}
function ir(t) {
  return t.length ? t : t.data;
}
const or = /coord|texture/i, cr = /color|colour/i;
function sr(t, e) {
  let n;
  if (or.test(t) ? n = 2 : cr.test(t) ? n = 4 : n = 3, e % n > 0)
    throw new Error(`Can not guess numComponents for attribute '${t}'. Tried ${n} but ${e} values is not evenly divisible by ${n}. You should specify it.`);
  return n;
}
function ur(t, e, n) {
  return t.numComponents || t.size || sr(e, n || ir(t).length);
}
function De(t, e) {
  if (_e(t))
    return t;
  if (_e(t.data))
    return t.data;
  Array.isArray(t) && (t = {
    data: t
  });
  let n = t.type ? Fe(t.type) : void 0;
  return n || (ft(e) ? n = Uint16Array : n = Float32Array), new n(t.data);
}
function fr(t) {
  return typeof t == "number" ? t : t ? tt(t) : ot;
}
function Fe(t) {
  return typeof t == "number" ? qn(t) : t || Float32Array;
}
function ar(t, e) {
  return {
    buffer: e.buffer,
    numValues: 2 * 3 * 4,
    // safely divided by 2, 3, 4
    type: fr(e.type),
    arrayType: Fe(e.type)
  };
}
function hr(t, e) {
  const n = e.data || e, r = Fe(e.type), i = n * r.BYTES_PER_ELEMENT, o = t.createBuffer();
  return t.bindBuffer(W, o), t.bufferData(W, i, e.drawType || it), {
    buffer: o,
    numValues: n,
    type: tt(r),
    arrayType: r
  };
}
function lr(t, e, n) {
  const r = De(e, n);
  return {
    arrayType: r.constructor,
    buffer: ut(t, r, void 0, e.drawType),
    type: et(r),
    numValues: 0
  };
}
function yr(t, e) {
  const n = {};
  return Object.keys(e).forEach(function(r) {
    if (!ft(r)) {
      const i = e[r], o = i.attrib || i.name || i.attribName || ct.attribPrefix + r;
      if (i.value) {
        if (!Array.isArray(i.value) && !_e(i.value))
          throw new Error("array.value is not array or typedarray");
        n[o] = {
          value: i.value
        };
      } else {
        let c;
        i.buffer && i.buffer instanceof WebGLBuffer ? c = ar : typeof i == "number" || typeof i.data == "number" ? c = hr : c = lr;
        const { buffer: s, type: u, numValues: f, arrayType: h } = c(t, i, r), a = i.normalize !== void 0 ? i.normalize : rr(h), l = ur(i, r, f);
        n[o] = {
          buffer: s,
          numComponents: l,
          type: u,
          normalize: a,
          stride: i.stride || 0,
          offset: i.offset || 0,
          divisor: i.divisor === void 0 ? void 0 : i.divisor,
          drawType: i.drawType
        };
      }
    }
  }), t.bindBuffer(W, null), n;
}
function Ge(t, e, n, r) {
  n = De(n), r !== void 0 ? (t.bindBuffer(W, e.buffer), t.bufferSubData(W, r, n)) : st(t, W, e.buffer, n, e.drawType);
}
function xr(t, e) {
  return e === Jn || e === Qn ? 1 : e === dn || e === er ? 2 : e === tr || e === nr || e === ot ? 4 : 0;
}
const Se = ["position", "positions", "a_position"];
function Ar(t, e) {
  let n, r;
  for (r = 0; r < Se.length && (n = Se[r], !(n in e || (n = ct.attribPrefix + n, n in e))); ++r)
    ;
  r === Se.length && (n = Object.keys(e)[0]);
  const i = e[n];
  if (!i.buffer)
    return 1;
  t.bindBuffer(W, i.buffer);
  const o = t.getBufferParameter(W, Zn);
  t.bindBuffer(W, null);
  const c = xr(t, i.type), s = o / c, u = i.numComponents || i.size, f = s / u;
  if (f % 1 !== 0)
    throw new Error(`numComponents ${u} not correct for length ${length}`);
  return f;
}
function pr(t, e, n) {
  const r = yr(t, e), i = Object.assign({}, n || {});
  i.attribs = Object.assign({}, n ? n.attribs : {}, r);
  const o = e.indices;
  if (o) {
    const c = De(o, "indices");
    i.indices = ut(t, c, Kn), i.numElements = c.length, i.elementType = et(c);
  } else
    i.numElements || (i.numElements = Ar(t, i.attribs));
  return i;
}
function Ne(t) {
  return !!t.texStorage2D;
}
const Tr = function() {
  const t = {}, e = {};
  function n(r) {
    const i = r.constructor.name;
    if (!t[i]) {
      for (const o in r)
        if (typeof r[o] == "number") {
          const c = e[r[o]];
          e[r[o]] = c ? `${c} | ${o}` : o;
        }
      t[i] = !0;
    }
  }
  return function(i, o) {
    return n(i), e[o] || (typeof o == "number" ? `0x${o.toString(16)}` : o);
  };
}(), ze = Xn;
function at(t) {
  return typeof document < "u" && document.getElementById ? document.getElementById(t) : null;
}
const fe = 33984, ae = 34962, Sr = 34963, mr = 35713, Er = 35714, _r = 35632, br = 35633, Br = 35981, ht = 35718, wr = 35721, Ir = 35971, Mr = 35382, Rr = 35396, Dr = 35398, Fr = 35392, Nr = 35395, he = 5126, lt = 35664, yt = 35665, xt = 35666, Ue = 5124, At = 35667, pt = 35668, Tt = 35669, St = 35670, mt = 35671, Et = 35672, _t = 35673, bt = 35674, Bt = 35675, wt = 35676, zr = 35678, Ur = 35680, Pr = 35679, gr = 35682, vr = 35685, Cr = 35686, Vr = 35687, Lr = 35688, Or = 35689, kr = 35690, $r = 36289, Gr = 36292, Yr = 36293, Pe = 5125, It = 36294, Mt = 36295, Rt = 36296, Hr = 36298, Wr = 36299, qr = 36300, Xr = 36303, jr = 36306, Kr = 36307, Zr = 36308, Jr = 36311, le = 3553, ye = 34067, ge = 32879, xe = 35866, A = {};
function Dt(t, e) {
  return A[e].bindPoint;
}
function Qr(t, e) {
  return function(n) {
    t.uniform1f(e, n);
  };
}
function dr(t, e) {
  return function(n) {
    t.uniform1fv(e, n);
  };
}
function ei(t, e) {
  return function(n) {
    t.uniform2fv(e, n);
  };
}
function ti(t, e) {
  return function(n) {
    t.uniform3fv(e, n);
  };
}
function ni(t, e) {
  return function(n) {
    t.uniform4fv(e, n);
  };
}
function Ft(t, e) {
  return function(n) {
    t.uniform1i(e, n);
  };
}
function Nt(t, e) {
  return function(n) {
    t.uniform1iv(e, n);
  };
}
function zt(t, e) {
  return function(n) {
    t.uniform2iv(e, n);
  };
}
function Ut(t, e) {
  return function(n) {
    t.uniform3iv(e, n);
  };
}
function Pt(t, e) {
  return function(n) {
    t.uniform4iv(e, n);
  };
}
function ri(t, e) {
  return function(n) {
    t.uniform1ui(e, n);
  };
}
function ii(t, e) {
  return function(n) {
    t.uniform1uiv(e, n);
  };
}
function oi(t, e) {
  return function(n) {
    t.uniform2uiv(e, n);
  };
}
function ci(t, e) {
  return function(n) {
    t.uniform3uiv(e, n);
  };
}
function si(t, e) {
  return function(n) {
    t.uniform4uiv(e, n);
  };
}
function ui(t, e) {
  return function(n) {
    t.uniformMatrix2fv(e, !1, n);
  };
}
function fi(t, e) {
  return function(n) {
    t.uniformMatrix3fv(e, !1, n);
  };
}
function ai(t, e) {
  return function(n) {
    t.uniformMatrix4fv(e, !1, n);
  };
}
function hi(t, e) {
  return function(n) {
    t.uniformMatrix2x3fv(e, !1, n);
  };
}
function li(t, e) {
  return function(n) {
    t.uniformMatrix3x2fv(e, !1, n);
  };
}
function yi(t, e) {
  return function(n) {
    t.uniformMatrix2x4fv(e, !1, n);
  };
}
function xi(t, e) {
  return function(n) {
    t.uniformMatrix4x2fv(e, !1, n);
  };
}
function Ai(t, e) {
  return function(n) {
    t.uniformMatrix3x4fv(e, !1, n);
  };
}
function pi(t, e) {
  return function(n) {
    t.uniformMatrix4x3fv(e, !1, n);
  };
}
function z(t, e, n, r) {
  const i = Dt(t, e);
  return Ne(t) ? function(o) {
    let c, s;
    !o || rt(t, o) ? (c = o, s = null) : (c = o.texture, s = o.sampler), t.uniform1i(r, n), t.activeTexture(fe + n), t.bindTexture(i, c), t.bindSampler(n, s);
  } : function(o) {
    t.uniform1i(r, n), t.activeTexture(fe + n), t.bindTexture(i, o);
  };
}
function U(t, e, n, r, i) {
  const o = Dt(t, e), c = new Int32Array(i);
  for (let s = 0; s < i; ++s)
    c[s] = n + s;
  return Ne(t) ? function(s) {
    t.uniform1iv(r, c), s.forEach(function(u, f) {
      t.activeTexture(fe + c[f]);
      let h, a;
      !u || rt(t, u) ? (h = u, a = null) : (h = u.texture, a = u.sampler), t.bindSampler(n, a), t.bindTexture(o, h);
    });
  } : function(s) {
    t.uniform1iv(r, c), s.forEach(function(u, f) {
      t.activeTexture(fe + c[f]), t.bindTexture(o, u);
    });
  };
}
A[he] = { Type: Float32Array, size: 4, setter: Qr, arraySetter: dr };
A[lt] = { Type: Float32Array, size: 8, setter: ei, cols: 2 };
A[yt] = { Type: Float32Array, size: 12, setter: ti, cols: 3 };
A[xt] = { Type: Float32Array, size: 16, setter: ni, cols: 4 };
A[Ue] = { Type: Int32Array, size: 4, setter: Ft, arraySetter: Nt };
A[At] = { Type: Int32Array, size: 8, setter: zt, cols: 2 };
A[pt] = { Type: Int32Array, size: 12, setter: Ut, cols: 3 };
A[Tt] = { Type: Int32Array, size: 16, setter: Pt, cols: 4 };
A[Pe] = { Type: Uint32Array, size: 4, setter: ri, arraySetter: ii };
A[It] = { Type: Uint32Array, size: 8, setter: oi, cols: 2 };
A[Mt] = { Type: Uint32Array, size: 12, setter: ci, cols: 3 };
A[Rt] = { Type: Uint32Array, size: 16, setter: si, cols: 4 };
A[St] = { Type: Uint32Array, size: 4, setter: Ft, arraySetter: Nt };
A[mt] = { Type: Uint32Array, size: 8, setter: zt, cols: 2 };
A[Et] = { Type: Uint32Array, size: 12, setter: Ut, cols: 3 };
A[_t] = { Type: Uint32Array, size: 16, setter: Pt, cols: 4 };
A[bt] = { Type: Float32Array, size: 32, setter: ui, rows: 2, cols: 2 };
A[Bt] = { Type: Float32Array, size: 48, setter: fi, rows: 3, cols: 3 };
A[wt] = { Type: Float32Array, size: 64, setter: ai, rows: 4, cols: 4 };
A[vr] = { Type: Float32Array, size: 32, setter: hi, rows: 2, cols: 3 };
A[Cr] = { Type: Float32Array, size: 32, setter: yi, rows: 2, cols: 4 };
A[Vr] = { Type: Float32Array, size: 48, setter: li, rows: 3, cols: 2 };
A[Lr] = { Type: Float32Array, size: 48, setter: Ai, rows: 3, cols: 4 };
A[Or] = { Type: Float32Array, size: 64, setter: xi, rows: 4, cols: 2 };
A[kr] = { Type: Float32Array, size: 64, setter: pi, rows: 4, cols: 3 };
A[zr] = { Type: null, size: 0, setter: z, arraySetter: U, bindPoint: le };
A[Ur] = { Type: null, size: 0, setter: z, arraySetter: U, bindPoint: ye };
A[Pr] = { Type: null, size: 0, setter: z, arraySetter: U, bindPoint: ge };
A[gr] = { Type: null, size: 0, setter: z, arraySetter: U, bindPoint: le };
A[$r] = { Type: null, size: 0, setter: z, arraySetter: U, bindPoint: xe };
A[Gr] = { Type: null, size: 0, setter: z, arraySetter: U, bindPoint: xe };
A[Yr] = { Type: null, size: 0, setter: z, arraySetter: U, bindPoint: ye };
A[Hr] = { Type: null, size: 0, setter: z, arraySetter: U, bindPoint: le };
A[Wr] = { Type: null, size: 0, setter: z, arraySetter: U, bindPoint: ge };
A[qr] = { Type: null, size: 0, setter: z, arraySetter: U, bindPoint: ye };
A[Xr] = { Type: null, size: 0, setter: z, arraySetter: U, bindPoint: xe };
A[jr] = { Type: null, size: 0, setter: z, arraySetter: U, bindPoint: le };
A[Kr] = { Type: null, size: 0, setter: z, arraySetter: U, bindPoint: ge };
A[Zr] = { Type: null, size: 0, setter: z, arraySetter: U, bindPoint: ye };
A[Jr] = { Type: null, size: 0, setter: z, arraySetter: U, bindPoint: xe };
function Ae(t, e) {
  return function(n) {
    if (n.value)
      switch (t.disableVertexAttribArray(e), n.value.length) {
        case 4:
          t.vertexAttrib4fv(e, n.value);
          break;
        case 3:
          t.vertexAttrib3fv(e, n.value);
          break;
        case 2:
          t.vertexAttrib2fv(e, n.value);
          break;
        case 1:
          t.vertexAttrib1fv(e, n.value);
          break;
        default:
          throw new Error("the length of a float constant value must be between 1 and 4!");
      }
    else
      t.bindBuffer(ae, n.buffer), t.enableVertexAttribArray(e), t.vertexAttribPointer(
        e,
        n.numComponents || n.size,
        n.type || he,
        n.normalize || !1,
        n.stride || 0,
        n.offset || 0
      ), t.vertexAttribDivisor && t.vertexAttribDivisor(e, n.divisor || 0);
  };
}
function Z(t, e) {
  return function(n) {
    if (n.value)
      if (t.disableVertexAttribArray(e), n.value.length === 4)
        t.vertexAttrib4iv(e, n.value);
      else
        throw new Error("The length of an integer constant value must be 4!");
    else
      t.bindBuffer(ae, n.buffer), t.enableVertexAttribArray(e), t.vertexAttribIPointer(
        e,
        n.numComponents || n.size,
        n.type || Ue,
        n.stride || 0,
        n.offset || 0
      ), t.vertexAttribDivisor && t.vertexAttribDivisor(e, n.divisor || 0);
  };
}
function pe(t, e) {
  return function(n) {
    if (n.value)
      if (t.disableVertexAttribArray(e), n.value.length === 4)
        t.vertexAttrib4uiv(e, n.value);
      else
        throw new Error("The length of an unsigned integer constant value must be 4!");
    else
      t.bindBuffer(ae, n.buffer), t.enableVertexAttribArray(e), t.vertexAttribIPointer(
        e,
        n.numComponents || n.size,
        n.type || Pe,
        n.stride || 0,
        n.offset || 0
      ), t.vertexAttribDivisor && t.vertexAttribDivisor(e, n.divisor || 0);
  };
}
function ve(t, e, n) {
  const r = n.size, i = n.count;
  return function(o) {
    t.bindBuffer(ae, o.buffer);
    const c = o.size || o.numComponents || r, s = c / i, u = o.type || he, h = A[u].size * c, a = o.normalize || !1, l = o.offset || 0, y = h / i;
    for (let x = 0; x < i; ++x)
      t.enableVertexAttribArray(e + x), t.vertexAttribPointer(
        e + x,
        s,
        u,
        a,
        h,
        l + y * x
      ), t.vertexAttribDivisor && t.vertexAttribDivisor(e + x, o.divisor || 0);
  };
}
const B = {};
B[he] = { size: 4, setter: Ae };
B[lt] = { size: 8, setter: Ae };
B[yt] = { size: 12, setter: Ae };
B[xt] = { size: 16, setter: Ae };
B[Ue] = { size: 4, setter: Z };
B[At] = { size: 8, setter: Z };
B[pt] = { size: 12, setter: Z };
B[Tt] = { size: 16, setter: Z };
B[Pe] = { size: 4, setter: pe };
B[It] = { size: 8, setter: pe };
B[Mt] = { size: 12, setter: pe };
B[Rt] = { size: 16, setter: pe };
B[St] = { size: 4, setter: Z };
B[mt] = { size: 8, setter: Z };
B[Et] = { size: 12, setter: Z };
B[_t] = { size: 16, setter: Z };
B[bt] = { size: 4, setter: ve, count: 2 };
B[Bt] = { size: 9, setter: ve, count: 3 };
B[wt] = { size: 16, setter: ve, count: 4 };
const Ti = /ERROR:\s*\d+:(\d+)/gi;
function Si(t, e = "", n = 0) {
  const r = [...e.matchAll(Ti)], i = new Map(r.map((o, c) => {
    const s = parseInt(o[1]), u = r[c + 1], f = u ? u.index : e.length, h = e.substring(o.index, f);
    return [s - 1, h];
  }));
  return t.split(`
`).map((o, c) => {
    const s = i.get(c);
    return `${c + 1 + n}: ${o}${s ? `

^^^ ${s}` : ""}`;
  }).join(`
`);
}
const Ye = /^[ \t]*\n/;
function gt(t) {
  let e = 0;
  return Ye.test(t) && (e = 1, t = t.replace(Ye, "")), { lineOffset: e, shaderSource: t };
}
function mi(t, e) {
  return t.errorCallback(e), t.callback && setTimeout(() => {
    t.callback(`${e}
${t.errors.join(`
`)}`);
  }), null;
}
function Ei(t, e, n, r) {
  if (r = r || ze, !t.getShaderParameter(n, mr)) {
    const o = t.getShaderInfoLog(n), { lineOffset: c, shaderSource: s } = gt(t.getShaderSource(n)), u = `${Si(s, o, c)}
Error compiling ${Tr(t, e)}: ${o}`;
    return r(u), u;
  }
  return "";
}
function Ce(t, e, n) {
  let r, i, o;
  if (typeof e == "function" && (n = e, e = void 0), typeof t == "function")
    n = t, t = void 0;
  else if (t && !Array.isArray(t)) {
    const f = t;
    n = f.errorCallback, t = f.attribLocations, r = f.transformFeedbackVaryings, i = f.transformFeedbackMode, o = f.callback;
  }
  const c = n || ze, s = [], u = {
    errorCallback(f, ...h) {
      s.push(f), c(f, ...h);
    },
    transformFeedbackVaryings: r,
    transformFeedbackMode: i,
    callback: o,
    errors: s
  };
  {
    let f = {};
    Array.isArray(t) ? t.forEach(function(h, a) {
      f[h] = e ? e[a] : a;
    }) : f = t || {}, u.attribLocations = f;
  }
  return u;
}
const _i = [
  "VERTEX_SHADER",
  "FRAGMENT_SHADER"
];
function bi(t, e) {
  if (e.indexOf("frag") >= 0)
    return _r;
  if (e.indexOf("vert") >= 0)
    return br;
}
function Bi(t, e, n) {
  const r = t.getAttachedShaders(e);
  for (const i of r)
    n.has(i) && t.deleteShader(i);
  t.deleteProgram(e);
}
const wi = (t = 0) => new Promise((e) => setTimeout(e, t));
function Ii(t, e, n) {
  const r = t.createProgram(), {
    attribLocations: i,
    transformFeedbackVaryings: o,
    transformFeedbackMode: c
  } = Ce(n);
  for (let s = 0; s < e.length; ++s) {
    let u = e[s];
    if (typeof u == "string") {
      const f = at(u), h = f ? f.text : u;
      let a = t[_i[s]];
      f && f.type && (a = bi(t, f.type) || a), u = t.createShader(a), t.shaderSource(u, gt(h).shaderSource), t.compileShader(u), t.attachShader(r, u);
    }
  }
  Object.entries(i).forEach(([s, u]) => t.bindAttribLocation(r, u, s));
  {
    let s = o;
    s && (s.attribs && (s = s.attribs), Array.isArray(s) || (s = Object.keys(s)), t.transformFeedbackVaryings(r, s, c || Br));
  }
  return t.linkProgram(r), r;
}
function Mi(t, e, n, r, i) {
  const o = Ce(n, r, i), c = new Set(e), s = Ii(t, e, o);
  function u(f, h) {
    const a = Di(f, h, o.errorCallback);
    return a && Bi(f, h, c), a;
  }
  if (o.callback) {
    Ri(t, s).then(() => {
      const f = u(t, s);
      o.callback(f, f ? void 0 : s);
    });
    return;
  }
  return u(t, s) ? void 0 : s;
}
async function Ri(t, e) {
  const n = t.getExtension("KHR_parallel_shader_compile"), r = n ? (o, c) => o.getProgramParameter(c, n.COMPLETION_STATUS_KHR) : () => !0;
  let i = 0;
  do
    await wi(i), i = 1e3 / 60;
  while (!r(t, e));
}
function Di(t, e, n) {
  if (n = n || ze, !t.getProgramParameter(e, Er)) {
    const i = t.getProgramInfoLog(e);
    n(`Error in program linking: ${i}`);
    const c = t.getAttachedShaders(e).map((s) => Ei(t, t.getShaderParameter(s, t.SHADER_TYPE), s, n));
    return `${i}
${c.filter((s) => s).join(`
`)}`;
  }
}
function Fi(t, e, n, r, i) {
  return Mi(t, e, n, r, i);
}
function vt(t) {
  const e = t.name;
  return e.startsWith("gl_") || e.startsWith("webgl_");
}
const Ni = /(\.|\[|]|\w+)/g, zi = (t) => t >= "0" && t <= "9";
function Ui(t, e, n, r) {
  const i = t.split(Ni).filter((s) => s !== "");
  let o = 0, c = "";
  for (; ; ) {
    const s = i[o++];
    c += s;
    const u = zi(s[0]), f = u ? parseInt(s) : s;
    if (u && (c += i[o++]), o === i.length) {
      n[f] = e;
      break;
    } else {
      const a = i[o++], l = a === "[", y = n[f] || (l ? [] : {});
      n[f] = y, n = y, r[c] = r[c] || function(x) {
        return function(S) {
          Ct(x, S);
        };
      }(y), c += a;
    }
  }
}
function Pi(t, e) {
  let n = 0;
  function r(s, u, f) {
    const h = u.name.endsWith("[0]"), a = u.type, l = A[a];
    if (!l)
      throw new Error(`unknown type: 0x${a.toString(16)}`);
    let y;
    if (l.bindPoint) {
      const x = n;
      n += u.size, h ? y = l.arraySetter(t, a, x, f, u.size) : y = l.setter(t, a, x, f, u.size);
    } else
      l.arraySetter && h ? y = l.arraySetter(t, f) : y = l.setter(t, f);
    return y.location = f, y;
  }
  const i = {}, o = {}, c = t.getProgramParameter(e, ht);
  for (let s = 0; s < c; ++s) {
    const u = t.getActiveUniform(e, s);
    if (vt(u))
      continue;
    let f = u.name;
    f.endsWith("[0]") && (f = f.substr(0, f.length - 3));
    const h = t.getUniformLocation(e, u.name);
    if (h) {
      const a = r(e, u, h);
      i[f] = a, Ui(f, a, o, i);
    }
  }
  return i;
}
function gi(t, e) {
  const n = {}, r = t.getProgramParameter(e, Ir);
  for (let i = 0; i < r; ++i) {
    const o = t.getTransformFeedbackVarying(e, i);
    n[o.name] = {
      index: i,
      type: o.type,
      size: o.size
    };
  }
  return n;
}
function vi(t, e) {
  const n = t.getProgramParameter(e, ht), r = [], i = [];
  for (let s = 0; s < n; ++s) {
    i.push(s), r.push({});
    const u = t.getActiveUniform(e, s);
    r[s].name = u.name;
  }
  [
    ["UNIFORM_TYPE", "type"],
    ["UNIFORM_SIZE", "size"],
    // num elements
    ["UNIFORM_BLOCK_INDEX", "blockNdx"],
    ["UNIFORM_OFFSET", "offset"]
  ].forEach(function(s) {
    const u = s[0], f = s[1];
    t.getActiveUniforms(e, i, t[u]).forEach(function(h, a) {
      r[a][f] = h;
    });
  });
  const o = {}, c = t.getProgramParameter(e, Mr);
  for (let s = 0; s < c; ++s) {
    const u = t.getActiveUniformBlockName(e, s), f = {
      index: t.getUniformBlockIndex(e, u),
      usedByVertexShader: t.getActiveUniformBlockParameter(e, s, Rr),
      usedByFragmentShader: t.getActiveUniformBlockParameter(e, s, Dr),
      size: t.getActiveUniformBlockParameter(e, s, Fr),
      uniformIndices: t.getActiveUniformBlockParameter(e, s, Nr)
    };
    f.used = f.usedByVertexShader || f.usedByFragmentShader, o[u] = f;
  }
  return {
    blockSpecs: o,
    uniformData: r
  };
}
function Ct(t, e) {
  for (const n in e) {
    const r = t[n];
    typeof r == "function" ? r(e[n]) : Ct(t[n], e[n]);
  }
}
function Vt(t, ...e) {
  const n = t.uniformSetters || t, r = e.length;
  for (let i = 0; i < r; ++i) {
    const o = e[i];
    if (Array.isArray(o)) {
      const c = o.length;
      for (let s = 0; s < c; ++s)
        Vt(n, o[s]);
    } else
      for (const c in o) {
        const s = n[c];
        s && s(o[c]);
      }
  }
}
function Ci(t, e) {
  const n = {}, r = t.getProgramParameter(e, wr);
  for (let i = 0; i < r; ++i) {
    const o = t.getActiveAttrib(e, i);
    if (vt(o))
      continue;
    const c = t.getAttribLocation(e, o.name), s = B[o.type], u = s.setter(t, c, s);
    u.location = c, n[o.name] = u;
  }
  return n;
}
function Vi(t, e) {
  for (const n in e) {
    const r = t[n];
    r && r(e[n]);
  }
}
function Li(t, e, n) {
  n.vertexArrayObject ? t.bindVertexArray(n.vertexArrayObject) : (Vi(e.attribSetters || e, n.attribs), n.indices && t.bindBuffer(Sr, n.indices));
}
function He(t, e) {
  const n = Pi(t, e), r = Ci(t, e), i = {
    program: e,
    uniformSetters: n,
    attribSetters: r
  };
  return Ne(t) && (i.uniformBlockSpec = vi(t, e), i.transformFeedbackInfo = gi(t, e)), i;
}
const Oi = /\s|{|}|;/;
function ki(t, e, n, r, i) {
  const o = Ce(n, r, i), c = [];
  if (e = e.map(function(f) {
    if (!Oi.test(f)) {
      const h = at(f);
      if (h)
        f = h.text;
      else {
        const a = `no element with id: ${f}`;
        o.errorCallback(a), c.push(a);
      }
    }
    return f;
  }), c.length)
    return mi(o, "");
  const s = o.callback;
  s && (o.callback = (f, h) => {
    s(f, f ? void 0 : He(t, h));
  });
  const u = Fi(t, e, o);
  return u ? He(t, u) : null;
}
const $i = 4, We = 5123;
function Gi(t, e, n, r, i, o) {
  n = n === void 0 ? $i : n;
  const c = e.indices, s = e.elementType, u = r === void 0 ? e.numElements : r;
  i = i === void 0 ? 0 : i, s || c ? o !== void 0 ? t.drawElementsInstanced(n, u, s === void 0 ? We : e.elementType, i, o) : t.drawElements(n, u, s === void 0 ? We : e.elementType, i) : o !== void 0 ? t.drawArraysInstanced(n, i, u, o) : t.drawArrays(n, i, u);
}
function Yi(t, e) {
  e = e || 1, e = Math.max(0, e);
  const n = t.clientWidth * e | 0, r = t.clientHeight * e | 0;
  return t.width !== n || t.height !== r ? (t.width = n, t.height = r, !0) : !1;
}
const qe = {
  vertexShader: `
attribute vec2 position;
attribute vec4 color;

varying vec4 v_color;

uniform mat4 u_matrix;


void main() {
  gl_Position = u_matrix * vec4(position.x, position.y, 0.0, 1.0);
  v_color = color;
}
`,
  fragmentShader: `
precision mediump float;

varying vec4 v_color;

void main() {
  // vec2 uv = gl_FragCoord.xy / resolution;

  gl_FragColor = v_color;
}

  `
};
class H {
  constructor(e, n) {
    p(this, "pos");
    p(this, "color");
    this.pos = e, this.color = n;
  }
}
class Lt {
  constructor(e, n) {
    p(this, "positions");
    // 8 bytes per vertex
    p(this, "colors");
    // 4 bytes per vertex
    p(this, "indices");
    p(this, "bufferInfo");
    p(this, "currentVertices", 0);
    p(this, "currentIndices", 0);
    p(this, "vertexCapacity", 0);
    p(this, "indexCapacity", 0);
    if (n.positions && n.colors && n.indices)
      this.positions = n.positions, this.colors = n.colors, this.indices = n.indices;
    else if (n.numVertices)
      this.positions = new Float32Array(n.numVertices * 2), this.colors = new Uint8Array(n.numVertices * 4), this.indices = new Uint16Array(n.numVertices * 3);
    else
      throw new Error("Invalid BufferDataOptions! Must provide positions, colors, and indices arrays, or specify numVertices");
    this.vertexCapacity = this.positions.length / 2, this.indexCapacity = this.indices.length, this.bufferInfo = pr(e, {
      position: { numComponents: 2, data: this.positions, drawType: e.DYNAMIC_DRAW },
      color: { numComponents: 4, data: this.colors, drawType: e.DYNAMIC_DRAW },
      indices: { numComponents: 3, data: this.indices, drawType: e.DYNAMIC_DRAW }
    });
  }
  addVertex(e) {
    this.positions[this.currentVertices * 2 + 0] = e.pos.x, this.positions[this.currentVertices * 2 + 1] = e.pos.y;
    for (let n = 0; n < 4; n++)
      this.colors[this.currentVertices * 4 + n] = e.color.array()[n];
    this.currentVertices++;
  }
  addIndex(e) {
    for (let n = 0; n < e.length; n++)
      this.indices[this.currentIndices + n] = e[n] + this.currentVertices;
    this.currentIndices += e.length;
  }
  updateBufferData(e) {
    Ge(e, this.bufferInfo.attribs.position, this.positions), Ge(e, this.bufferInfo.attribs.color, this.colors), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.bufferInfo.indices), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.DYNAMIC_DRAW);
  }
  fill() {
    this.positions.fill(0, this.currentVertices * 2), this.colors.fill(0, this.currentVertices * 4), this.indices.fill(0, this.currentIndices);
  }
  resetCount() {
    this.currentVertices = 0, this.currentIndices = 0;
  }
}
class Ot {
  constructor(e) {
    p(this, "gl");
    this.gl = e;
  }
  addVerticesAndIndices(e, n) {
  }
  updateBuffers() {
  }
  render(e) {
  }
}
class kt extends Ot {
  constructor(n, r) {
    super(n);
    p(this, "buffers", []);
    p(this, "bufferSize");
    p(this, "currentBufferIndex", -1);
    this.bufferSize = r.bufferSize, this.addBuffer();
  }
  addVerticesAndIndices(n, r) {
    (this.buffers[this.currentBufferIndex].currentIndices + r.length >= this.buffers[this.currentBufferIndex].indexCapacity || this.buffers[this.currentBufferIndex].currentVertices + n.length >= this.buffers[this.currentBufferIndex].vertexCapacity) && this.changeBuffer(), this.addIndices(r), this.addVertices(n);
  }
  updateBuffers() {
    this.buffers[this.currentBufferIndex].fill(), this.buffers[this.currentBufferIndex].updateBufferData(this.gl);
  }
  render(n) {
    console.log(this.buffers);
    for (let r = 0; r <= this.currentBufferIndex; r++)
      Li(this.gl, n, this.buffers[r].bufferInfo), Gi(this.gl, this.buffers[r].bufferInfo, this.gl.TRIANGLES, this.buffers[r].currentIndices);
  }
  reset() {
    this.currentBufferIndex = 0;
    for (const n of this.buffers)
      n.resetCount();
  }
  addBuffer() {
    this.currentBufferIndex++, this.buffers.push(new Lt(this.gl, { numVertices: this.bufferSize }));
  }
  changeBuffer() {
    this.buffers[this.currentBufferIndex].fill(), this.buffers[this.currentBufferIndex].updateBufferData(this.gl), this.buffers.length <= this.currentBufferIndex + 1 ? this.addBuffer() : this.currentBufferIndex++;
  }
  addVertex(n) {
    this.buffers[this.currentBufferIndex].addVertex(n);
  }
  addIndices(n) {
    this.buffers[this.currentBufferIndex].addIndex(n);
  }
  addVertices(n) {
    for (let r = 0; r < n.length; r++)
      this.addVertex(n[r]);
  }
}
function me(t, e) {
  return new q(t, e);
}
const b = class b {
  constructor(e, n) {
    p(this, "x");
    p(this, "y");
    this.x = e, this.y = n;
  }
  add(e, n) {
    return e instanceof b ? (this.x += e.x, this.y += e.y) : n ? (this.x += e, this.y += n) : (this.x += e, this.y += e), this;
  }
  static add(e, n) {
    return new b(e.x + n.x, e.y + n.y);
  }
  mult(e, n) {
    return e instanceof b ? (this.x *= e.x, this.y *= e.y) : n ? (this.x *= e, this.y *= n) : (this.x *= e, this.y *= e), this;
  }
  static mult(e, n) {
    return n instanceof b ? new b(e.x * n.x, e.y * n.y) : new b(e.x * n, e.y * n);
  }
  sub(e, n) {
    return e instanceof b ? (this.x -= e.x, this.y -= e.y) : n ? (this.x -= e, this.y -= n) : (this.x -= e, this.y -= e), this;
  }
  static sub(e, n) {
    return new b(e.x - n.x, e.y - n.y);
  }
  div(e, n) {
    return e instanceof b ? (this.x /= e.x, this.y /= e.y) : n ? (this.x /= e, this.y /= n) : (this.x /= e, this.y /= e), this;
  }
  static div(e, n) {
    return new b(e.x / n.x, e.y / n.y);
  }
  set(e, n) {
    return e instanceof b ? (this.x = e.x, this.y = e.y) : n ? (this.x = e, this.y = n) : (this.x = e, this.y = e), this;
  }
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  static mag(e) {
    return Math.sqrt(e.x * e.x + e.y * e.y);
  }
  magSq() {
    return this.x * this.x + this.y * this.y;
  }
  static magSq(e) {
    return e.x * e.x + e.y * e.y;
  }
  setMag(e) {
    let n = this.mag();
    return this.x *= e / n, this.y *= e / n, this;
  }
  normalize() {
    return this.setMag(1), this;
  }
  limit(e) {
    return this.mag() > e && this.setMag(e), this;
  }
  heading() {
    return Math.atan2(this.y, this.x);
  }
  rotate(e) {
    let n = Math.cos(e), r = Math.sin(e), i = n * this.x - r * this.y, o = n * this.y + r * this.x;
    return this.x = i, this.y = o, this;
  }
  rotateAboutAxis(e, n) {
    return this.sub(n).rotate(e).add(n), this;
  }
  dot(e) {
    return e.x * this.x + e.y * this.y;
  }
  static dot(e, n) {
    return e.x * n.x + e.y * n.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  static cross(e, n) {
    return e.x * n.y - e.y * n.x;
  }
  dist(e) {
    return Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2));
  }
  static dist(e, n) {
    return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
  }
  lerp(e, n) {
    let r = e.x - this.x, i = e.y - this.y;
    return this.x += n * r, this.y += n * i, this;
  }
  // angleBetween(a: Vector): number {
  //     return Math.atan2(a.y, a.x) - Math.atan2(this.y, this.x);
  // }
  static angleBetween(e, n) {
    return Math.atan2(e.x * n.y - e.y * n.x, e.x * n.x + e.y * n.y);
  }
  copy() {
    return new b(this.x, this.y);
  }
};
p(b, "zero", () => new b(0, 0)), p(b, "up", () => new b(0, -1)), p(b, "down", () => new b(0, 1)), p(b, "left", () => new b(-1, 0)), p(b, "right", () => new b(1, 0));
let q = b;
function Hi(t, e, n) {
  return new Te(t, e, n);
}
function $t(t, e, n, r = 255) {
  return new Te(t, e, n, r);
}
class Te {
  constructor(e, n, r, i = 255) {
    p(this, "r");
    p(this, "g");
    p(this, "b");
    p(this, "a");
    this.r = e, this.g = n, this.b = r, this.a = i;
  }
  array() {
    return [this.r, this.g, this.b, this.a];
  }
  static rgbToHex(e) {
    return "#" + (1 << 24 | e.r << 16 | e.g << 8 | e.b).toString(16).slice(1);
  }
  static hexToRGBA(e, n = 255) {
    const r = parseInt(e.slice(1), 16), i = r >> 16 & 255, o = r >> 8 & 255, c = r & 255;
    return $t(i, o, c, n);
  }
}
function Xe(t, e, n, r, i) {
  return r + (t - e) * ((i - r) / (n - e));
}
function ce(t, e, n) {
  const r = t.pos, i = e.pos, o = Math.atan2(i.y - r.y, i.x - r.x), c = Math.cos(o), s = Math.sin(o), u = r.x - n / 2 * s, f = r.y + n / 2 * c, h = r.x + n / 2 * s, a = r.y - n / 2 * c;
  return [new H(new q(u, f), t.color), new H(new q(h, a), t.color)];
}
function je(t, e, n, r) {
  let i = t.pos.x, o = t.pos.y, c = e.pos.x, s = e.pos.y, u = n.pos.x, f = n.pos.y;
  const h = o - s, a = i - c, l = o * (i - c) - i * (o - s), y = s - f, x = c - u, S = s * (c - u) - c * (s - f), m = r / 2 * Math.sqrt(h * h + a * a) - l, E = r / 2 * Math.sqrt(h * h + a * a) + l, T = r / 2 * Math.sqrt(y * y + x * x) - S, w = r / 2 * Math.sqrt(y * y + x * x) + S, I = (a * T - x * m) / (h * x - y * a), M = (y * m - h * T) / (h * x - y * a), D = (a * w - x * E) / (h * x - y * a), N = (y * E - h * w) / (h * x - y * a);
  return [new H(new q(-I, M), e.color), new H(new q(D, -N), e.color)];
}
class Wi {
  constructor(e) {
    p(this, "canvas");
    p(this, "gl");
    p(this, "shaderProgramInfo");
    p(this, "buffers", []);
    p(this, "defaultBuffer");
    p(this, "currentPath", []);
    e.canvas ? this.canvas = e.canvas : (this.canvas = document.createElement("canvas"), this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, document.body.appendChild(this.canvas));
    let n = null;
    if ((e.webglVersion === 2 || !e.webglVersion) && (n = this.canvas.getContext("webgl2"), n || console.warn("WebGL 2 not supported, falling back to WebGL 1")), (!n || e.webglVersion === 1) && (n = this.canvas.getContext("webgl")), !n)
      throw new Error("WebGL not supported");
    this.gl = n, this.shaderProgramInfo = ki(this.gl, [qe.vertexShader, qe.fragmentShader]), this.gl.enable(this.gl.BLEND), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE), Yi(this.gl.canvas), this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.defaultBuffer = new kt(this.gl, { bufferSize: 100 });
  }
  addBuffer(e) {
    this.buffers.push(e);
  }
  clear(e = new Te(0, 0, 0, 255)) {
    this.gl.clearColor(e.r / 255, e.g / 255, e.b / 255, e.a / 255), this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
  }
  line(e, n, r, i) {
    const o = new H(e, i), c = new H(n, i);
    this.defaultBuffer.addVerticesAndIndices(
      [...ce(o, c, r), ...ce(c, o, r)],
      [0, 1, 2, 0, 2, 3]
    );
  }
  path(e, n, r = !1) {
    const i = [], o = [], c = e[0], s = e[1];
    r ? i.push(...je(e[e.length - 1], c, s, n)) : i.push(...ce(c, s, n));
    for (let u = 0; u < e.length - (r ? 1 : 2); u++)
      o.push(0 + u * 2, 1 + u * 2, 2 + u * 2, 1 + u * 2, 2 + u * 2, 3 + u * 2), i.push(...je(e[u], e[u + 1], e[(u + 2) % e.length], n));
    if (r) {
      const u = i.length - 2;
      o.push(u, u + 1, 0, u + 1, 0, 1);
    } else {
      const u = i.length - 2;
      o.push(u + 0, u + 1, u + 2, u + 0, u + 2, u + 3), i.push(...ce(e[e.length - 1], e[e.length - 2], n));
    }
    this.defaultBuffer.addVerticesAndIndices(i, o);
  }
  beginPath() {
    this.currentPath = [];
  }
  vertex(e, n) {
    e instanceof H ? this.currentPath.push(e) : n && this.currentPath.push(new H(e, n));
  }
  arc(e, n, r, i, o) {
    const s = (i - r) / 40, u = [];
    for (let f = 0; f <= 40; f++) {
      const h = r + s * f;
      u.push(new H(new q(e.x + n * Math.cos(h), e.y + n * Math.sin(h)), o));
    }
    this.currentPath.push(...u);
  }
  strokePath(e, n = !1) {
    this.path(this.currentPath, e, n);
  }
  fillPath() {
    const e = [];
    for (let n = 1; n < this.currentPath.length - 1; n++)
      e.push(0, n, n + 1);
    this.defaultBuffer.addVerticesAndIndices(this.currentPath, e);
  }
  render(e) {
    this.defaultBuffer.updateBuffers();
    const n = {
      resolution: [this.gl.canvas.width, this.gl.canvas.height],
      u_matrix: e ? e.getMatrix() : ue.identity()
    };
    this.gl.useProgram(this.shaderProgramInfo.program), Vt(this.shaderProgramInfo, n), this.defaultBuffer.render(this.shaderProgramInfo);
    for (const r of this.buffers)
      r.render(this.shaderProgramInfo);
    this.defaultBuffer.reset();
  }
  getDisplaySize() {
    return new q(this.canvas.width, this.canvas.height);
  }
}
class qi {
  constructor(e) {
    p(this, "zoom", 1);
    p(this, "pos", me(0, 0));
    p(this, "displaySize", me(0, 0));
    p(this, "aspect", 1);
    // Aspect ratio
    p(this, "matrix", ue.identity());
    this.setDisplaySize(e);
  }
  translate(e) {
    this.pos = this.pos.add(e), this.calculateMatrix();
  }
  setZoom(e) {
    this.zoom = e, this.calculateMatrix();
  }
  setDisplaySize(e) {
    this.displaySize = e, this.calculateAspectRatio(), this.calculateMatrix();
  }
  calculateAspectRatio() {
    this.aspect = this.displaySize.x / this.displaySize.y;
  }
  calculateMatrix() {
    const e = this.displaySize.y / this.zoom;
    this.matrix = ue.translate(
      ue.ortho(-this.aspect * e, this.aspect * e, 1 * e, -1 * e, -1, 1),
      un.create(-this.pos.x, -this.pos.y)
    );
  }
  screenSpaceToWorldSpace(e) {
    const n = window.innerHeight / this.zoom, r = Xe(e.x, 0, window.innerWidth, -this.aspect * n, this.aspect * n) + this.pos.x, i = Xe(e.y, 0, window.innerHeight, -1 * n, 1 * n) + this.pos.y;
    return me(r, i);
  }
  getMatrix() {
    return this.matrix;
  }
}
const ji = { Renderer: Wi, DynamicBuffer: kt, Buffer: Ot, BufferData: Lt, Camera: qi, Color: Te, Vertex: H, Vector: q, RGB: Hi, RGBA: $t };
export {
  ji as default
};
