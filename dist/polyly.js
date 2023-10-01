var We = Object.defineProperty;
var qe = (e, t, n) => t in e ? We(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var p = (e, t, n) => (qe(e, typeof t != "symbol" ? t + "" : t, n), n);
/* @license twgl.js 5.5.3 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */
let R = Float32Array;
function je(e) {
  const t = R;
  return R = e, t;
}
function X(e, t, n) {
  const r = new R(3);
  return e && (r[0] = e), t && (r[1] = t), n && (r[2] = n), r;
}
function Xe(e, t, n) {
  return n = n || new R(3), n[0] = e[0] + t[0], n[1] = e[1] + t[1], n[2] = e[2] + t[2], n;
}
function Qt(e, t, n) {
  return n = n || new R(3), n[0] = e[0] - t[0], n[1] = e[1] - t[1], n[2] = e[2] - t[2], n;
}
function Ke(e, t, n, r) {
  return r = r || new R(3), r[0] = e[0] + n * (t[0] - e[0]), r[1] = e[1] + n * (t[1] - e[1]), r[2] = e[2] + n * (t[2] - e[2]), r;
}
function Ze(e, t, n, r) {
  return r = r || new R(3), r[0] = e[0] + n[0] * (t[0] - e[0]), r[1] = e[1] + n[1] * (t[1] - e[1]), r[2] = e[2] + n[2] * (t[2] - e[2]), r;
}
function Je(e, t, n) {
  return n = n || new R(3), n[0] = Math.max(e[0], t[0]), n[1] = Math.max(e[1], t[1]), n[2] = Math.max(e[2], t[2]), n;
}
function Qe(e, t, n) {
  return n = n || new R(3), n[0] = Math.min(e[0], t[0]), n[1] = Math.min(e[1], t[1]), n[2] = Math.min(e[2], t[2]), n;
}
function de(e, t, n) {
  return n = n || new R(3), n[0] = e[0] * t, n[1] = e[1] * t, n[2] = e[2] * t, n;
}
function tn(e, t, n) {
  return n = n || new R(3), n[0] = e[0] / t, n[1] = e[1] / t, n[2] = e[2] / t, n;
}
function It(e, t, n) {
  n = n || new R(3);
  const r = e[2] * t[0] - e[0] * t[2], i = e[0] * t[1] - e[1] * t[0];
  return n[0] = e[1] * t[2] - e[2] * t[1], n[1] = r, n[2] = i, n;
}
function en(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function nn(e) {
  return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
}
function rn(e) {
  return e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
}
function on(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
  return Math.sqrt(n * n + r * r + i * i);
}
function sn(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
  return n * n + r * r + i * i;
}
function ft(e, t) {
  t = t || new R(3);
  const n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], r = Math.sqrt(n);
  return r > 1e-5 ? (t[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r) : (t[0] = 0, t[1] = 0, t[2] = 0), t;
}
function cn(e, t) {
  return t = t || new R(3), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t;
}
function fn(e, t) {
  return t = t || new R(3), t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
}
function un(e, t, n) {
  return n = n || new R(3), n[0] = e[0] * t[0], n[1] = e[1] * t[1], n[2] = e[2] * t[2], n;
}
function an(e, t, n) {
  return n = n || new R(3), n[0] = e[0] / t[0], n[1] = e[1] / t[1], n[2] = e[2] / t[2], n;
}
var hn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  add: Xe,
  copy: fn,
  create: X,
  cross: It,
  distance: on,
  distanceSq: sn,
  divide: an,
  divScalar: tn,
  dot: en,
  lerp: Ke,
  lerpV: Ze,
  length: nn,
  lengthSq: rn,
  max: Je,
  min: Qe,
  mulScalar: de,
  multiply: un,
  negate: cn,
  normalize: ft,
  setDefaultType: je,
  subtract: Qt
});
let b = Float32Array;
function ln(e) {
  const t = b;
  return b = e, t;
}
function yn(e, t) {
  return t = t || new b(16), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t[4] = -e[4], t[5] = -e[5], t[6] = -e[6], t[7] = -e[7], t[8] = -e[8], t[9] = -e[9], t[10] = -e[10], t[11] = -e[11], t[12] = -e[12], t[13] = -e[13], t[14] = -e[14], t[15] = -e[15], t;
}
function xn() {
  return new b(16).fill(0);
}
function dt(e, t) {
  return t = t || new b(16), t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
}
function te(e) {
  return e = e || new b(16), e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function pn(e, t) {
  if (t = t || new b(16), t === e) {
    let m;
    return m = e[1], e[1] = e[4], e[4] = m, m = e[2], e[2] = e[8], e[8] = m, m = e[3], e[3] = e[12], e[12] = m, m = e[6], e[6] = e[9], e[9] = m, m = e[7], e[7] = e[13], e[13] = m, m = e[11], e[11] = e[14], e[14] = m, t;
  }
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], o = e[0 * 4 + 3], s = e[1 * 4 + 0], c = e[1 * 4 + 1], f = e[1 * 4 + 2], u = e[1 * 4 + 3], h = e[2 * 4 + 0], a = e[2 * 4 + 1], l = e[2 * 4 + 2], y = e[2 * 4 + 3], x = e[3 * 4 + 0], T = e[3 * 4 + 1], S = e[3 * 4 + 2], E = e[3 * 4 + 3];
  return t[0] = n, t[1] = s, t[2] = h, t[3] = x, t[4] = r, t[5] = c, t[6] = a, t[7] = T, t[8] = i, t[9] = f, t[10] = l, t[11] = S, t[12] = o, t[13] = u, t[14] = y, t[15] = E, t;
}
function ee(e, t) {
  t = t || new b(16);
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], o = e[0 * 4 + 3], s = e[1 * 4 + 0], c = e[1 * 4 + 1], f = e[1 * 4 + 2], u = e[1 * 4 + 3], h = e[2 * 4 + 0], a = e[2 * 4 + 1], l = e[2 * 4 + 2], y = e[2 * 4 + 3], x = e[3 * 4 + 0], T = e[3 * 4 + 1], S = e[3 * 4 + 2], E = e[3 * 4 + 3], m = l * E, w = S * y, B = f * E, M = S * u, D = f * y, N = l * u, U = i * E, P = S * o, V = i * y, C = l * o, L = i * u, O = f * o, k = h * T, $ = x * a, G = s * T, Y = x * c, H = s * a, tt = h * c, et = n * T, nt = x * r, rt = n * a, it = h * r, ot = n * c, st = s * r, kt = m * c + M * a + D * T - (w * c + B * a + N * T), $t = w * r + U * a + C * T - (m * r + P * a + V * T), Gt = B * r + P * c + L * T - (M * r + U * c + O * T), Yt = N * r + V * c + O * a - (D * r + C * c + L * a), F = 1 / (n * kt + s * $t + h * Gt + x * Yt);
  return t[0] = F * kt, t[1] = F * $t, t[2] = F * Gt, t[3] = F * Yt, t[4] = F * (w * s + B * h + N * x - (m * s + M * h + D * x)), t[5] = F * (m * n + P * h + V * x - (w * n + U * h + C * x)), t[6] = F * (M * n + U * s + O * x - (B * n + P * s + L * x)), t[7] = F * (D * n + C * s + L * h - (N * n + V * s + O * h)), t[8] = F * (k * u + Y * y + H * E - ($ * u + G * y + tt * E)), t[9] = F * ($ * o + et * y + it * E - (k * o + nt * y + rt * E)), t[10] = F * (G * o + nt * u + ot * E - (Y * o + et * u + st * E)), t[11] = F * (tt * o + rt * u + st * y - (H * o + it * u + ot * y)), t[12] = F * (G * l + tt * S + $ * f - (H * S + k * f + Y * l)), t[13] = F * (rt * S + k * i + nt * l - (et * l + it * S + $ * i)), t[14] = F * (et * f + st * S + Y * i - (ot * S + G * i + nt * f)), t[15] = F * (ot * l + H * i + it * f - (rt * f + st * l + tt * i)), t;
}
function An(e, t, n) {
  n = n || new b(16);
  const r = e[0], i = e[1], o = e[2], s = e[3], c = e[4 + 0], f = e[4 + 1], u = e[4 + 2], h = e[4 + 3], a = e[8 + 0], l = e[8 + 1], y = e[8 + 2], x = e[8 + 3], T = e[12 + 0], S = e[12 + 1], E = e[12 + 2], m = e[12 + 3], w = t[0], B = t[1], M = t[2], D = t[3], N = t[4 + 0], U = t[4 + 1], P = t[4 + 2], V = t[4 + 3], C = t[8 + 0], L = t[8 + 1], O = t[8 + 2], k = t[8 + 3], $ = t[12 + 0], G = t[12 + 1], Y = t[12 + 2], H = t[12 + 3];
  return n[0] = r * w + c * B + a * M + T * D, n[1] = i * w + f * B + l * M + S * D, n[2] = o * w + u * B + y * M + E * D, n[3] = s * w + h * B + x * M + m * D, n[4] = r * N + c * U + a * P + T * V, n[5] = i * N + f * U + l * P + S * V, n[6] = o * N + u * U + y * P + E * V, n[7] = s * N + h * U + x * P + m * V, n[8] = r * C + c * L + a * O + T * k, n[9] = i * C + f * L + l * O + S * k, n[10] = o * C + u * L + y * O + E * k, n[11] = s * C + h * L + x * O + m * k, n[12] = r * $ + c * G + a * Y + T * H, n[13] = i * $ + f * G + l * Y + S * H, n[14] = o * $ + u * G + y * Y + E * H, n[15] = s * $ + h * G + x * Y + m * H, n;
}
function mn(e, t, n) {
  return n = n || te(), e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11]), n[12] = t[0], n[13] = t[1], n[14] = t[2], n[15] = 1, n;
}
function Tn(e, t) {
  return t = t || X(), t[0] = e[12], t[1] = e[13], t[2] = e[14], t;
}
function Sn(e, t, n) {
  n = n || X();
  const r = t * 4;
  return n[0] = e[r + 0], n[1] = e[r + 1], n[2] = e[r + 2], n;
}
function En(e, t, n, r) {
  r !== e && (r = dt(e, r));
  const i = n * 4;
  return r[i + 0] = t[0], r[i + 1] = t[1], r[i + 2] = t[2], r;
}
function bn(e, t, n, r, i) {
  i = i || new b(16);
  const o = Math.tan(Math.PI * 0.5 - 0.5 * e), s = 1 / (n - r);
  return i[0] = o / t, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = o, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = (n + r) * s, i[11] = -1, i[12] = 0, i[13] = 0, i[14] = n * r * s * 2, i[15] = 0, i;
}
function In(e, t, n, r, i, o, s) {
  return s = s || new b(16), s[0] = 2 / (t - e), s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 2 / (r - n), s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = 2 / (i - o), s[11] = 0, s[12] = (t + e) / (e - t), s[13] = (r + n) / (n - r), s[14] = (o + i) / (i - o), s[15] = 1, s;
}
function _n(e, t, n, r, i, o, s) {
  s = s || new b(16);
  const c = t - e, f = r - n, u = i - o;
  return s[0] = 2 * i / c, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 2 * i / f, s[6] = 0, s[7] = 0, s[8] = (e + t) / c, s[9] = (r + n) / f, s[10] = o / u, s[11] = -1, s[12] = 0, s[13] = 0, s[14] = i * o / u, s[15] = 0, s;
}
let K, Q, j;
function wn(e, t, n, r) {
  return r = r || new b(16), K = K || X(), Q = Q || X(), j = j || X(), ft(
    Qt(e, t, j),
    j
  ), ft(It(n, j, K), K), ft(It(j, K, Q), Q), r[0] = K[0], r[1] = K[1], r[2] = K[2], r[3] = 0, r[4] = Q[0], r[5] = Q[1], r[6] = Q[2], r[7] = 0, r[8] = j[0], r[9] = j[1], r[10] = j[2], r[11] = 0, r[12] = e[0], r[13] = e[1], r[14] = e[2], r[15] = 1, r;
}
function Bn(e, t) {
  return t = t || new b(16), t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t;
}
function Mn(e, t, n) {
  n = n || new b(16);
  const r = t[0], i = t[1], o = t[2], s = e[0], c = e[1], f = e[2], u = e[3], h = e[1 * 4 + 0], a = e[1 * 4 + 1], l = e[1 * 4 + 2], y = e[1 * 4 + 3], x = e[2 * 4 + 0], T = e[2 * 4 + 1], S = e[2 * 4 + 2], E = e[2 * 4 + 3], m = e[3 * 4 + 0], w = e[3 * 4 + 1], B = e[3 * 4 + 2], M = e[3 * 4 + 3];
  return e !== n && (n[0] = s, n[1] = c, n[2] = f, n[3] = u, n[4] = h, n[5] = a, n[6] = l, n[7] = y, n[8] = x, n[9] = T, n[10] = S, n[11] = E), n[12] = s * r + h * i + x * o + m, n[13] = c * r + a * i + T * o + w, n[14] = f * r + l * i + S * o + B, n[15] = u * r + y * i + E * o + M, n;
}
function gn(e, t) {
  t = t || new b(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Rn(e, t, n) {
  n = n || new b(16);
  const r = e[4], i = e[5], o = e[6], s = e[7], c = e[8], f = e[9], u = e[10], h = e[11], a = Math.cos(t), l = Math.sin(t);
  return n[4] = a * r + l * c, n[5] = a * i + l * f, n[6] = a * o + l * u, n[7] = a * s + l * h, n[8] = a * c - l * r, n[9] = a * f - l * i, n[10] = a * u - l * o, n[11] = a * h - l * s, e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function Dn(e, t) {
  t = t || new b(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Fn(e, t, n) {
  n = n || new b(16);
  const r = e[0 * 4 + 0], i = e[0 * 4 + 1], o = e[0 * 4 + 2], s = e[0 * 4 + 3], c = e[2 * 4 + 0], f = e[2 * 4 + 1], u = e[2 * 4 + 2], h = e[2 * 4 + 3], a = Math.cos(t), l = Math.sin(t);
  return n[0] = a * r - l * c, n[1] = a * i - l * f, n[2] = a * o - l * u, n[3] = a * s - l * h, n[8] = a * c + l * r, n[9] = a * f + l * i, n[10] = a * u + l * o, n[11] = a * h + l * s, e !== n && (n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function Nn(e, t) {
  t = t || new b(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function zn(e, t, n) {
  n = n || new b(16);
  const r = e[0 * 4 + 0], i = e[0 * 4 + 1], o = e[0 * 4 + 2], s = e[0 * 4 + 3], c = e[1 * 4 + 0], f = e[1 * 4 + 1], u = e[1 * 4 + 2], h = e[1 * 4 + 3], a = Math.cos(t), l = Math.sin(t);
  return n[0] = a * r + l * c, n[1] = a * i + l * f, n[2] = a * o + l * u, n[3] = a * s + l * h, n[4] = a * c - l * r, n[5] = a * f - l * i, n[6] = a * u - l * o, n[7] = a * h - l * s, e !== n && (n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function vn(e, t, n) {
  n = n || new b(16);
  let r = e[0], i = e[1], o = e[2];
  const s = Math.sqrt(r * r + i * i + o * o);
  r /= s, i /= s, o /= s;
  const c = r * r, f = i * i, u = o * o, h = Math.cos(t), a = Math.sin(t), l = 1 - h;
  return n[0] = c + (1 - c) * h, n[1] = r * i * l + o * a, n[2] = r * o * l - i * a, n[3] = 0, n[4] = r * i * l - o * a, n[5] = f + (1 - f) * h, n[6] = i * o * l + r * a, n[7] = 0, n[8] = r * o * l + i * a, n[9] = i * o * l - r * a, n[10] = u + (1 - u) * h, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
}
function Un(e, t, n, r) {
  r = r || new b(16);
  let i = t[0], o = t[1], s = t[2];
  const c = Math.sqrt(i * i + o * o + s * s);
  i /= c, o /= c, s /= c;
  const f = i * i, u = o * o, h = s * s, a = Math.cos(n), l = Math.sin(n), y = 1 - a, x = f + (1 - f) * a, T = i * o * y + s * l, S = i * s * y - o * l, E = i * o * y - s * l, m = u + (1 - u) * a, w = o * s * y + i * l, B = i * s * y + o * l, M = o * s * y - i * l, D = h + (1 - h) * a, N = e[0], U = e[1], P = e[2], V = e[3], C = e[4], L = e[5], O = e[6], k = e[7], $ = e[8], G = e[9], Y = e[10], H = e[11];
  return r[0] = x * N + T * C + S * $, r[1] = x * U + T * L + S * G, r[2] = x * P + T * O + S * Y, r[3] = x * V + T * k + S * H, r[4] = E * N + m * C + w * $, r[5] = E * U + m * L + w * G, r[6] = E * P + m * O + w * Y, r[7] = E * V + m * k + w * H, r[8] = B * N + M * C + D * $, r[9] = B * U + M * L + D * G, r[10] = B * P + M * O + D * Y, r[11] = B * V + M * k + D * H, e !== r && (r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15]), r;
}
function Pn(e, t) {
  return t = t || new b(16), t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Vn(e, t, n) {
  n = n || new b(16);
  const r = t[0], i = t[1], o = t[2];
  return n[0] = r * e[0 * 4 + 0], n[1] = r * e[0 * 4 + 1], n[2] = r * e[0 * 4 + 2], n[3] = r * e[0 * 4 + 3], n[4] = i * e[1 * 4 + 0], n[5] = i * e[1 * 4 + 1], n[6] = i * e[1 * 4 + 2], n[7] = i * e[1 * 4 + 3], n[8] = o * e[2 * 4 + 0], n[9] = o * e[2 * 4 + 1], n[10] = o * e[2 * 4 + 2], n[11] = o * e[2 * 4 + 3], e !== n && (n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function Cn(e, t, n) {
  n = n || X();
  const r = t[0], i = t[1], o = t[2], s = r * e[0 * 4 + 3] + i * e[1 * 4 + 3] + o * e[2 * 4 + 3] + e[3 * 4 + 3];
  return n[0] = (r * e[0 * 4 + 0] + i * e[1 * 4 + 0] + o * e[2 * 4 + 0] + e[3 * 4 + 0]) / s, n[1] = (r * e[0 * 4 + 1] + i * e[1 * 4 + 1] + o * e[2 * 4 + 1] + e[3 * 4 + 1]) / s, n[2] = (r * e[0 * 4 + 2] + i * e[1 * 4 + 2] + o * e[2 * 4 + 2] + e[3 * 4 + 2]) / s, n;
}
function Ln(e, t, n) {
  n = n || X();
  const r = t[0], i = t[1], o = t[2];
  return n[0] = r * e[0 * 4 + 0] + i * e[1 * 4 + 0] + o * e[2 * 4 + 0], n[1] = r * e[0 * 4 + 1] + i * e[1 * 4 + 1] + o * e[2 * 4 + 1], n[2] = r * e[0 * 4 + 2] + i * e[1 * 4 + 2] + o * e[2 * 4 + 2], n;
}
function On(e, t, n) {
  n = n || X();
  const r = ee(e), i = t[0], o = t[1], s = t[2];
  return n[0] = i * r[0 * 4 + 0] + o * r[0 * 4 + 1] + s * r[0 * 4 + 2], n[1] = i * r[1 * 4 + 0] + o * r[1 * 4 + 1] + s * r[1 * 4 + 2], n[2] = i * r[2 * 4 + 0] + o * r[2 * 4 + 1] + s * r[2 * 4 + 2], n;
}
var Z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  axisRotate: Un,
  axisRotation: vn,
  copy: dt,
  create: xn,
  frustum: _n,
  getAxis: Sn,
  getTranslation: Tn,
  identity: te,
  inverse: ee,
  lookAt: wn,
  multiply: An,
  negate: yn,
  ortho: In,
  perspective: bn,
  rotateX: Rn,
  rotateY: Fn,
  rotateZ: zn,
  rotationX: gn,
  rotationY: Dn,
  rotationZ: Nn,
  scale: Vn,
  scaling: Pn,
  setAxis: En,
  setDefaultType: ln,
  setTranslation: mn,
  transformDirection: Ln,
  transformNormal: On,
  transformPoint: Cn,
  translate: Mn,
  translation: Bn,
  transpose: pn
});
const wt = 5120, d = 5121, Bt = 5122, Mt = 5123, gt = 5124, Rt = 5125, Dt = 5126, kn = 32819, $n = 32820, Gn = 33635, Yn = 5131, Hn = 33640, Wn = 35899, qn = 35902, jn = 36269, Xn = 34042, ne = {};
{
  const e = ne;
  e[wt] = Int8Array, e[d] = Uint8Array, e[Bt] = Int16Array, e[Mt] = Uint16Array, e[gt] = Int32Array, e[Rt] = Uint32Array, e[Dt] = Float32Array, e[kn] = Uint16Array, e[$n] = Uint16Array, e[Gn] = Uint16Array, e[Yn] = Uint16Array, e[Hn] = Uint32Array, e[Wn] = Uint32Array, e[qn] = Uint32Array, e[jn] = Uint32Array, e[Xn] = Uint32Array;
}
function re(e) {
  if (e instanceof Int8Array)
    return wt;
  if (e instanceof Uint8Array || e instanceof Uint8ClampedArray)
    return d;
  if (e instanceof Int16Array)
    return Bt;
  if (e instanceof Uint16Array)
    return Mt;
  if (e instanceof Int32Array)
    return gt;
  if (e instanceof Uint32Array)
    return Rt;
  if (e instanceof Float32Array)
    return Dt;
  throw new Error("unsupported typed array type");
}
function ie(e) {
  if (e === Int8Array)
    return wt;
  if (e === Uint8Array || e === Uint8ClampedArray)
    return d;
  if (e === Int16Array)
    return Bt;
  if (e === Uint16Array)
    return Mt;
  if (e === Int32Array)
    return gt;
  if (e === Uint32Array)
    return Rt;
  if (e === Float32Array)
    return Dt;
  throw new Error("unsupported typed array type");
}
function Kn(e) {
  const t = ne[e];
  if (!t)
    throw new Error("unknown gl type");
  return t;
}
const _t = typeof SharedArrayBuffer < "u" ? function(t) {
  return t && t.buffer && (t.buffer instanceof ArrayBuffer || t.buffer instanceof SharedArrayBuffer);
} : function(t) {
  return t && t.buffer && t.buffer instanceof ArrayBuffer;
};
function Zn(...e) {
  console.error(...e);
}
const Ht = /* @__PURE__ */ new Map();
function oe(e, t) {
  if (!e || typeof e != "object")
    return !1;
  let n = Ht.get(t);
  n || (n = /* @__PURE__ */ new WeakMap(), Ht.set(t, n));
  let r = n.get(e);
  if (r === void 0) {
    const i = Object.prototype.toString.call(e);
    r = i.substring(8, i.length - 1) === t, n.set(e, r);
  }
  return r;
}
function Jn(e, t) {
  return typeof WebGLBuffer < "u" && oe(t, "WebGLBuffer");
}
function se(e, t) {
  return typeof WebGLTexture < "u" && oe(t, "WebGLTexture");
}
const ce = 35044, q = 34962, Qn = 34963, dn = 34660, tr = 5120, er = 5121, nr = 5122, rr = 5123, ir = 5124, or = 5125, fe = 5126, ue = {
  attribPrefix: ""
};
function ae(e, t, n, r, i) {
  e.bindBuffer(t, n), e.bufferData(t, r, i || ce);
}
function he(e, t, n, r) {
  if (Jn(e, t))
    return t;
  n = n || q;
  const i = e.createBuffer();
  return ae(e, n, i, t, r), i;
}
function le(e) {
  return e === "indices";
}
function sr(e) {
  return e === Int8Array || e === Uint8Array;
}
function cr(e) {
  return e.length ? e : e.data;
}
const fr = /coord|texture/i, ur = /color|colour/i;
function ar(e, t) {
  let n;
  if (fr.test(e) ? n = 2 : ur.test(e) ? n = 4 : n = 3, t % n > 0)
    throw new Error(`Can not guess numComponents for attribute '${e}'. Tried ${n} but ${t} values is not evenly divisible by ${n}. You should specify it.`);
  return n;
}
function hr(e, t, n) {
  return e.numComponents || e.size || ar(t, n || cr(e).length);
}
function Ft(e, t) {
  if (_t(e))
    return e;
  if (_t(e.data))
    return e.data;
  Array.isArray(e) && (e = {
    data: e
  });
  let n = e.type ? Nt(e.type) : void 0;
  return n || (le(t) ? n = Uint16Array : n = Float32Array), new n(e.data);
}
function lr(e) {
  return typeof e == "number" ? e : e ? ie(e) : fe;
}
function Nt(e) {
  return typeof e == "number" ? Kn(e) : e || Float32Array;
}
function yr(e, t) {
  return {
    buffer: t.buffer,
    numValues: 2 * 3 * 4,
    // safely divided by 2, 3, 4
    type: lr(t.type),
    arrayType: Nt(t.type)
  };
}
function xr(e, t) {
  const n = t.data || t, r = Nt(t.type), i = n * r.BYTES_PER_ELEMENT, o = e.createBuffer();
  return e.bindBuffer(q, o), e.bufferData(q, i, t.drawType || ce), {
    buffer: o,
    numValues: n,
    type: ie(r),
    arrayType: r
  };
}
function pr(e, t, n) {
  const r = Ft(t, n);
  return {
    arrayType: r.constructor,
    buffer: he(e, r, void 0, t.drawType),
    type: re(r),
    numValues: 0
  };
}
function Ar(e, t) {
  const n = {};
  return Object.keys(t).forEach(function(r) {
    if (!le(r)) {
      const i = t[r], o = i.attrib || i.name || i.attribName || ue.attribPrefix + r;
      if (i.value) {
        if (!Array.isArray(i.value) && !_t(i.value))
          throw new Error("array.value is not array or typedarray");
        n[o] = {
          value: i.value
        };
      } else {
        let s;
        i.buffer && i.buffer instanceof WebGLBuffer ? s = yr : typeof i == "number" || typeof i.data == "number" ? s = xr : s = pr;
        const { buffer: c, type: f, numValues: u, arrayType: h } = s(e, i, r), a = i.normalize !== void 0 ? i.normalize : sr(h), l = hr(i, r, u);
        n[o] = {
          buffer: c,
          numComponents: l,
          type: f,
          normalize: a,
          stride: i.stride || 0,
          offset: i.offset || 0,
          divisor: i.divisor === void 0 ? void 0 : i.divisor,
          drawType: i.drawType
        };
      }
    }
  }), e.bindBuffer(q, null), n;
}
function Wt(e, t, n, r) {
  n = Ft(n), r !== void 0 ? (e.bindBuffer(q, t.buffer), e.bufferSubData(q, r, n)) : ae(e, q, t.buffer, n, t.drawType);
}
function mr(e, t) {
  return t === tr || t === er ? 1 : t === nr || t === rr ? 2 : t === ir || t === or || t === fe ? 4 : 0;
}
const Et = ["position", "positions", "a_position"];
function Tr(e, t) {
  let n, r;
  for (r = 0; r < Et.length && (n = Et[r], !(n in t || (n = ue.attribPrefix + n, n in t))); ++r)
    ;
  r === Et.length && (n = Object.keys(t)[0]);
  const i = t[n];
  if (!i.buffer)
    return 1;
  e.bindBuffer(q, i.buffer);
  const o = e.getBufferParameter(q, dn);
  e.bindBuffer(q, null);
  const s = mr(e, i.type), c = o / s, f = i.numComponents || i.size, u = c / f;
  if (u % 1 !== 0)
    throw new Error(`numComponents ${f} not correct for length ${length}`);
  return u;
}
function Sr(e, t, n) {
  const r = Ar(e, t), i = Object.assign({}, n || {});
  i.attribs = Object.assign({}, n ? n.attribs : {}, r);
  const o = t.indices;
  if (o) {
    const s = Ft(o, "indices");
    i.indices = he(e, s, Qn), i.numElements = s.length, i.elementType = re(s);
  } else
    i.numElements || (i.numElements = Tr(e, i.attribs));
  return i;
}
function zt(e) {
  return !!e.texStorage2D;
}
const Er = function() {
  const e = {}, t = {};
  function n(r) {
    const i = r.constructor.name;
    if (!e[i]) {
      for (const o in r)
        if (typeof r[o] == "number") {
          const s = t[r[o]];
          t[r[o]] = s ? `${s} | ${o}` : o;
        }
      e[i] = !0;
    }
  }
  return function(i, o) {
    return n(i), t[o] || (typeof o == "number" ? `0x${o.toString(16)}` : o);
  };
}(), vt = Zn;
function ye(e) {
  return typeof document < "u" && document.getElementById ? document.getElementById(e) : null;
}
const ut = 33984, ht = 34962, br = 34963, Ir = 35713, _r = 35714, wr = 35632, Br = 35633, Mr = 35981, xe = 35718, gr = 35721, Rr = 35971, Dr = 35382, Fr = 35396, Nr = 35398, zr = 35392, vr = 35395, lt = 5126, pe = 35664, Ae = 35665, me = 35666, Ut = 5124, Te = 35667, Se = 35668, Ee = 35669, be = 35670, Ie = 35671, _e = 35672, we = 35673, Be = 35674, Me = 35675, ge = 35676, Ur = 35678, Pr = 35680, Vr = 35679, Cr = 35682, Lr = 35685, Or = 35686, kr = 35687, $r = 35688, Gr = 35689, Yr = 35690, Hr = 36289, Wr = 36292, qr = 36293, Pt = 5125, Re = 36294, De = 36295, Fe = 36296, jr = 36298, Xr = 36299, Kr = 36300, Zr = 36303, Jr = 36306, Qr = 36307, dr = 36308, ti = 36311, yt = 3553, xt = 34067, Vt = 32879, pt = 35866, A = {};
function Ne(e, t) {
  return A[t].bindPoint;
}
function ei(e, t) {
  return function(n) {
    e.uniform1f(t, n);
  };
}
function ni(e, t) {
  return function(n) {
    e.uniform1fv(t, n);
  };
}
function ri(e, t) {
  return function(n) {
    e.uniform2fv(t, n);
  };
}
function ii(e, t) {
  return function(n) {
    e.uniform3fv(t, n);
  };
}
function oi(e, t) {
  return function(n) {
    e.uniform4fv(t, n);
  };
}
function ze(e, t) {
  return function(n) {
    e.uniform1i(t, n);
  };
}
function ve(e, t) {
  return function(n) {
    e.uniform1iv(t, n);
  };
}
function Ue(e, t) {
  return function(n) {
    e.uniform2iv(t, n);
  };
}
function Pe(e, t) {
  return function(n) {
    e.uniform3iv(t, n);
  };
}
function Ve(e, t) {
  return function(n) {
    e.uniform4iv(t, n);
  };
}
function si(e, t) {
  return function(n) {
    e.uniform1ui(t, n);
  };
}
function ci(e, t) {
  return function(n) {
    e.uniform1uiv(t, n);
  };
}
function fi(e, t) {
  return function(n) {
    e.uniform2uiv(t, n);
  };
}
function ui(e, t) {
  return function(n) {
    e.uniform3uiv(t, n);
  };
}
function ai(e, t) {
  return function(n) {
    e.uniform4uiv(t, n);
  };
}
function hi(e, t) {
  return function(n) {
    e.uniformMatrix2fv(t, !1, n);
  };
}
function li(e, t) {
  return function(n) {
    e.uniformMatrix3fv(t, !1, n);
  };
}
function yi(e, t) {
  return function(n) {
    e.uniformMatrix4fv(t, !1, n);
  };
}
function xi(e, t) {
  return function(n) {
    e.uniformMatrix2x3fv(t, !1, n);
  };
}
function pi(e, t) {
  return function(n) {
    e.uniformMatrix3x2fv(t, !1, n);
  };
}
function Ai(e, t) {
  return function(n) {
    e.uniformMatrix2x4fv(t, !1, n);
  };
}
function mi(e, t) {
  return function(n) {
    e.uniformMatrix4x2fv(t, !1, n);
  };
}
function Ti(e, t) {
  return function(n) {
    e.uniformMatrix3x4fv(t, !1, n);
  };
}
function Si(e, t) {
  return function(n) {
    e.uniformMatrix4x3fv(t, !1, n);
  };
}
function z(e, t, n, r) {
  const i = Ne(e, t);
  return zt(e) ? function(o) {
    let s, c;
    !o || se(e, o) ? (s = o, c = null) : (s = o.texture, c = o.sampler), e.uniform1i(r, n), e.activeTexture(ut + n), e.bindTexture(i, s), e.bindSampler(n, c);
  } : function(o) {
    e.uniform1i(r, n), e.activeTexture(ut + n), e.bindTexture(i, o);
  };
}
function v(e, t, n, r, i) {
  const o = Ne(e, t), s = new Int32Array(i);
  for (let c = 0; c < i; ++c)
    s[c] = n + c;
  return zt(e) ? function(c) {
    e.uniform1iv(r, s), c.forEach(function(f, u) {
      e.activeTexture(ut + s[u]);
      let h, a;
      !f || se(e, f) ? (h = f, a = null) : (h = f.texture, a = f.sampler), e.bindSampler(n, a), e.bindTexture(o, h);
    });
  } : function(c) {
    e.uniform1iv(r, s), c.forEach(function(f, u) {
      e.activeTexture(ut + s[u]), e.bindTexture(o, f);
    });
  };
}
A[lt] = { Type: Float32Array, size: 4, setter: ei, arraySetter: ni };
A[pe] = { Type: Float32Array, size: 8, setter: ri, cols: 2 };
A[Ae] = { Type: Float32Array, size: 12, setter: ii, cols: 3 };
A[me] = { Type: Float32Array, size: 16, setter: oi, cols: 4 };
A[Ut] = { Type: Int32Array, size: 4, setter: ze, arraySetter: ve };
A[Te] = { Type: Int32Array, size: 8, setter: Ue, cols: 2 };
A[Se] = { Type: Int32Array, size: 12, setter: Pe, cols: 3 };
A[Ee] = { Type: Int32Array, size: 16, setter: Ve, cols: 4 };
A[Pt] = { Type: Uint32Array, size: 4, setter: si, arraySetter: ci };
A[Re] = { Type: Uint32Array, size: 8, setter: fi, cols: 2 };
A[De] = { Type: Uint32Array, size: 12, setter: ui, cols: 3 };
A[Fe] = { Type: Uint32Array, size: 16, setter: ai, cols: 4 };
A[be] = { Type: Uint32Array, size: 4, setter: ze, arraySetter: ve };
A[Ie] = { Type: Uint32Array, size: 8, setter: Ue, cols: 2 };
A[_e] = { Type: Uint32Array, size: 12, setter: Pe, cols: 3 };
A[we] = { Type: Uint32Array, size: 16, setter: Ve, cols: 4 };
A[Be] = { Type: Float32Array, size: 32, setter: hi, rows: 2, cols: 2 };
A[Me] = { Type: Float32Array, size: 48, setter: li, rows: 3, cols: 3 };
A[ge] = { Type: Float32Array, size: 64, setter: yi, rows: 4, cols: 4 };
A[Lr] = { Type: Float32Array, size: 32, setter: xi, rows: 2, cols: 3 };
A[Or] = { Type: Float32Array, size: 32, setter: Ai, rows: 2, cols: 4 };
A[kr] = { Type: Float32Array, size: 48, setter: pi, rows: 3, cols: 2 };
A[$r] = { Type: Float32Array, size: 48, setter: Ti, rows: 3, cols: 4 };
A[Gr] = { Type: Float32Array, size: 64, setter: mi, rows: 4, cols: 2 };
A[Yr] = { Type: Float32Array, size: 64, setter: Si, rows: 4, cols: 3 };
A[Ur] = { Type: null, size: 0, setter: z, arraySetter: v, bindPoint: yt };
A[Pr] = { Type: null, size: 0, setter: z, arraySetter: v, bindPoint: xt };
A[Vr] = { Type: null, size: 0, setter: z, arraySetter: v, bindPoint: Vt };
A[Cr] = { Type: null, size: 0, setter: z, arraySetter: v, bindPoint: yt };
A[Hr] = { Type: null, size: 0, setter: z, arraySetter: v, bindPoint: pt };
A[Wr] = { Type: null, size: 0, setter: z, arraySetter: v, bindPoint: pt };
A[qr] = { Type: null, size: 0, setter: z, arraySetter: v, bindPoint: xt };
A[jr] = { Type: null, size: 0, setter: z, arraySetter: v, bindPoint: yt };
A[Xr] = { Type: null, size: 0, setter: z, arraySetter: v, bindPoint: Vt };
A[Kr] = { Type: null, size: 0, setter: z, arraySetter: v, bindPoint: xt };
A[Zr] = { Type: null, size: 0, setter: z, arraySetter: v, bindPoint: pt };
A[Jr] = { Type: null, size: 0, setter: z, arraySetter: v, bindPoint: yt };
A[Qr] = { Type: null, size: 0, setter: z, arraySetter: v, bindPoint: Vt };
A[dr] = { Type: null, size: 0, setter: z, arraySetter: v, bindPoint: xt };
A[ti] = { Type: null, size: 0, setter: z, arraySetter: v, bindPoint: pt };
function At(e, t) {
  return function(n) {
    if (n.value)
      switch (e.disableVertexAttribArray(t), n.value.length) {
        case 4:
          e.vertexAttrib4fv(t, n.value);
          break;
        case 3:
          e.vertexAttrib3fv(t, n.value);
          break;
        case 2:
          e.vertexAttrib2fv(t, n.value);
          break;
        case 1:
          e.vertexAttrib1fv(t, n.value);
          break;
        default:
          throw new Error("the length of a float constant value must be between 1 and 4!");
      }
    else
      e.bindBuffer(ht, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribPointer(
        t,
        n.numComponents || n.size,
        n.type || lt,
        n.normalize || !1,
        n.stride || 0,
        n.offset || 0
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t, n.divisor || 0);
  };
}
function J(e, t) {
  return function(n) {
    if (n.value)
      if (e.disableVertexAttribArray(t), n.value.length === 4)
        e.vertexAttrib4iv(t, n.value);
      else
        throw new Error("The length of an integer constant value must be 4!");
    else
      e.bindBuffer(ht, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribIPointer(
        t,
        n.numComponents || n.size,
        n.type || Ut,
        n.stride || 0,
        n.offset || 0
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t, n.divisor || 0);
  };
}
function mt(e, t) {
  return function(n) {
    if (n.value)
      if (e.disableVertexAttribArray(t), n.value.length === 4)
        e.vertexAttrib4uiv(t, n.value);
      else
        throw new Error("The length of an unsigned integer constant value must be 4!");
    else
      e.bindBuffer(ht, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribIPointer(
        t,
        n.numComponents || n.size,
        n.type || Pt,
        n.stride || 0,
        n.offset || 0
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t, n.divisor || 0);
  };
}
function Ct(e, t, n) {
  const r = n.size, i = n.count;
  return function(o) {
    e.bindBuffer(ht, o.buffer);
    const s = o.size || o.numComponents || r, c = s / i, f = o.type || lt, h = A[f].size * s, a = o.normalize || !1, l = o.offset || 0, y = h / i;
    for (let x = 0; x < i; ++x)
      e.enableVertexAttribArray(t + x), e.vertexAttribPointer(
        t + x,
        c,
        f,
        a,
        h,
        l + y * x
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t + x, o.divisor || 0);
  };
}
const _ = {};
_[lt] = { size: 4, setter: At };
_[pe] = { size: 8, setter: At };
_[Ae] = { size: 12, setter: At };
_[me] = { size: 16, setter: At };
_[Ut] = { size: 4, setter: J };
_[Te] = { size: 8, setter: J };
_[Se] = { size: 12, setter: J };
_[Ee] = { size: 16, setter: J };
_[Pt] = { size: 4, setter: mt };
_[Re] = { size: 8, setter: mt };
_[De] = { size: 12, setter: mt };
_[Fe] = { size: 16, setter: mt };
_[be] = { size: 4, setter: J };
_[Ie] = { size: 8, setter: J };
_[_e] = { size: 12, setter: J };
_[we] = { size: 16, setter: J };
_[Be] = { size: 4, setter: Ct, count: 2 };
_[Me] = { size: 9, setter: Ct, count: 3 };
_[ge] = { size: 16, setter: Ct, count: 4 };
const Ei = /ERROR:\s*\d+:(\d+)/gi;
function bi(e, t = "", n = 0) {
  const r = [...t.matchAll(Ei)], i = new Map(r.map((o, s) => {
    const c = parseInt(o[1]), f = r[s + 1], u = f ? f.index : t.length, h = t.substring(o.index, u);
    return [c - 1, h];
  }));
  return e.split(`
`).map((o, s) => {
    const c = i.get(s);
    return `${s + 1 + n}: ${o}${c ? `

^^^ ${c}` : ""}`;
  }).join(`
`);
}
const qt = /^[ \t]*\n/;
function Ce(e) {
  let t = 0;
  return qt.test(e) && (t = 1, e = e.replace(qt, "")), { lineOffset: t, shaderSource: e };
}
function Ii(e, t) {
  return e.errorCallback(t), e.callback && setTimeout(() => {
    e.callback(`${t}
${e.errors.join(`
`)}`);
  }), null;
}
function _i(e, t, n, r) {
  if (r = r || vt, !e.getShaderParameter(n, Ir)) {
    const o = e.getShaderInfoLog(n), { lineOffset: s, shaderSource: c } = Ce(e.getShaderSource(n)), f = `${bi(c, o, s)}
Error compiling ${Er(e, t)}: ${o}`;
    return r(f), f;
  }
  return "";
}
function Lt(e, t, n) {
  let r, i, o;
  if (typeof t == "function" && (n = t, t = void 0), typeof e == "function")
    n = e, e = void 0;
  else if (e && !Array.isArray(e)) {
    const u = e;
    n = u.errorCallback, e = u.attribLocations, r = u.transformFeedbackVaryings, i = u.transformFeedbackMode, o = u.callback;
  }
  const s = n || vt, c = [], f = {
    errorCallback(u, ...h) {
      c.push(u), s(u, ...h);
    },
    transformFeedbackVaryings: r,
    transformFeedbackMode: i,
    callback: o,
    errors: c
  };
  {
    let u = {};
    Array.isArray(e) ? e.forEach(function(h, a) {
      u[h] = t ? t[a] : a;
    }) : u = e || {}, f.attribLocations = u;
  }
  return f;
}
const wi = [
  "VERTEX_SHADER",
  "FRAGMENT_SHADER"
];
function Bi(e, t) {
  if (t.indexOf("frag") >= 0)
    return wr;
  if (t.indexOf("vert") >= 0)
    return Br;
}
function Mi(e, t, n) {
  const r = e.getAttachedShaders(t);
  for (const i of r)
    n.has(i) && e.deleteShader(i);
  e.deleteProgram(t);
}
const gi = (e = 0) => new Promise((t) => setTimeout(t, e));
function Ri(e, t, n) {
  const r = e.createProgram(), {
    attribLocations: i,
    transformFeedbackVaryings: o,
    transformFeedbackMode: s
  } = Lt(n);
  for (let c = 0; c < t.length; ++c) {
    let f = t[c];
    if (typeof f == "string") {
      const u = ye(f), h = u ? u.text : f;
      let a = e[wi[c]];
      u && u.type && (a = Bi(e, u.type) || a), f = e.createShader(a), e.shaderSource(f, Ce(h).shaderSource), e.compileShader(f), e.attachShader(r, f);
    }
  }
  Object.entries(i).forEach(([c, f]) => e.bindAttribLocation(r, f, c));
  {
    let c = o;
    c && (c.attribs && (c = c.attribs), Array.isArray(c) || (c = Object.keys(c)), e.transformFeedbackVaryings(r, c, s || Mr));
  }
  return e.linkProgram(r), r;
}
function Di(e, t, n, r, i) {
  const o = Lt(n, r, i), s = new Set(t), c = Ri(e, t, o);
  function f(u, h) {
    const a = Ni(u, h, o.errorCallback);
    return a && Mi(u, h, s), a;
  }
  if (o.callback) {
    Fi(e, c).then(() => {
      const u = f(e, c);
      o.callback(u, u ? void 0 : c);
    });
    return;
  }
  return f(e, c) ? void 0 : c;
}
async function Fi(e, t) {
  const n = e.getExtension("KHR_parallel_shader_compile"), r = n ? (o, s) => o.getProgramParameter(s, n.COMPLETION_STATUS_KHR) : () => !0;
  let i = 0;
  do
    await gi(i), i = 1e3 / 60;
  while (!r(e, t));
}
function Ni(e, t, n) {
  if (n = n || vt, !e.getProgramParameter(t, _r)) {
    const i = e.getProgramInfoLog(t);
    n(`Error in program linking: ${i}`);
    const s = e.getAttachedShaders(t).map((c) => _i(e, e.getShaderParameter(c, e.SHADER_TYPE), c, n));
    return `${i}
${s.filter((c) => c).join(`
`)}`;
  }
}
function zi(e, t, n, r, i) {
  return Di(e, t, n, r, i);
}
function Le(e) {
  const t = e.name;
  return t.startsWith("gl_") || t.startsWith("webgl_");
}
const vi = /(\.|\[|]|\w+)/g, Ui = (e) => e >= "0" && e <= "9";
function Pi(e, t, n, r) {
  const i = e.split(vi).filter((c) => c !== "");
  let o = 0, s = "";
  for (; ; ) {
    const c = i[o++];
    s += c;
    const f = Ui(c[0]), u = f ? parseInt(c) : c;
    if (f && (s += i[o++]), o === i.length) {
      n[u] = t;
      break;
    } else {
      const a = i[o++], l = a === "[", y = n[u] || (l ? [] : {});
      n[u] = y, n = y, r[s] = r[s] || function(x) {
        return function(T) {
          Oe(x, T);
        };
      }(y), s += a;
    }
  }
}
function Vi(e, t) {
  let n = 0;
  function r(c, f, u) {
    const h = f.name.endsWith("[0]"), a = f.type, l = A[a];
    if (!l)
      throw new Error(`unknown type: 0x${a.toString(16)}`);
    let y;
    if (l.bindPoint) {
      const x = n;
      n += f.size, h ? y = l.arraySetter(e, a, x, u, f.size) : y = l.setter(e, a, x, u, f.size);
    } else
      l.arraySetter && h ? y = l.arraySetter(e, u) : y = l.setter(e, u);
    return y.location = u, y;
  }
  const i = {}, o = {}, s = e.getProgramParameter(t, xe);
  for (let c = 0; c < s; ++c) {
    const f = e.getActiveUniform(t, c);
    if (Le(f))
      continue;
    let u = f.name;
    u.endsWith("[0]") && (u = u.substr(0, u.length - 3));
    const h = e.getUniformLocation(t, f.name);
    if (h) {
      const a = r(t, f, h);
      i[u] = a, Pi(u, a, o, i);
    }
  }
  return i;
}
function Ci(e, t) {
  const n = {}, r = e.getProgramParameter(t, Rr);
  for (let i = 0; i < r; ++i) {
    const o = e.getTransformFeedbackVarying(t, i);
    n[o.name] = {
      index: i,
      type: o.type,
      size: o.size
    };
  }
  return n;
}
function Li(e, t) {
  const n = e.getProgramParameter(t, xe), r = [], i = [];
  for (let c = 0; c < n; ++c) {
    i.push(c), r.push({});
    const f = e.getActiveUniform(t, c);
    r[c].name = f.name;
  }
  [
    ["UNIFORM_TYPE", "type"],
    ["UNIFORM_SIZE", "size"],
    // num elements
    ["UNIFORM_BLOCK_INDEX", "blockNdx"],
    ["UNIFORM_OFFSET", "offset"]
  ].forEach(function(c) {
    const f = c[0], u = c[1];
    e.getActiveUniforms(t, i, e[f]).forEach(function(h, a) {
      r[a][u] = h;
    });
  });
  const o = {}, s = e.getProgramParameter(t, Dr);
  for (let c = 0; c < s; ++c) {
    const f = e.getActiveUniformBlockName(t, c), u = {
      index: e.getUniformBlockIndex(t, f),
      usedByVertexShader: e.getActiveUniformBlockParameter(t, c, Fr),
      usedByFragmentShader: e.getActiveUniformBlockParameter(t, c, Nr),
      size: e.getActiveUniformBlockParameter(t, c, zr),
      uniformIndices: e.getActiveUniformBlockParameter(t, c, vr)
    };
    u.used = u.usedByVertexShader || u.usedByFragmentShader, o[f] = u;
  }
  return {
    blockSpecs: o,
    uniformData: r
  };
}
function Oe(e, t) {
  for (const n in t) {
    const r = e[n];
    typeof r == "function" ? r(t[n]) : Oe(e[n], t[n]);
  }
}
function Tt(e, ...t) {
  const n = e.uniformSetters || e, r = t.length;
  for (let i = 0; i < r; ++i) {
    const o = t[i];
    if (Array.isArray(o)) {
      const s = o.length;
      for (let c = 0; c < s; ++c)
        Tt(n, o[c]);
    } else
      for (const s in o) {
        const c = n[s];
        c && c(o[s]);
      }
  }
}
function Oi(e, t) {
  const n = {}, r = e.getProgramParameter(t, gr);
  for (let i = 0; i < r; ++i) {
    const o = e.getActiveAttrib(t, i);
    if (Le(o))
      continue;
    const s = e.getAttribLocation(t, o.name), c = _[o.type], f = c.setter(e, s, c);
    f.location = s, n[o.name] = f;
  }
  return n;
}
function ki(e, t) {
  for (const n in t) {
    const r = e[n];
    r && r(t[n]);
  }
}
function ke(e, t, n) {
  n.vertexArrayObject ? e.bindVertexArray(n.vertexArrayObject) : (ki(t.attribSetters || t, n.attribs), n.indices && e.bindBuffer(br, n.indices));
}
function jt(e, t) {
  const n = Vi(e, t), r = Oi(e, t), i = {
    program: t,
    uniformSetters: n,
    attribSetters: r
  };
  return zt(e) && (i.uniformBlockSpec = Li(e, t), i.transformFeedbackInfo = Ci(e, t)), i;
}
const $i = /\s|{|}|;/;
function Gi(e, t, n, r, i) {
  const o = Lt(n, r, i), s = [];
  if (t = t.map(function(u) {
    if (!$i.test(u)) {
      const h = ye(u);
      if (h)
        u = h.text;
      else {
        const a = `no element with id: ${u}`;
        o.errorCallback(a), s.push(a);
      }
    }
    return u;
  }), s.length)
    return Ii(o, "");
  const c = o.callback;
  c && (o.callback = (u, h) => {
    c(u, u ? void 0 : jt(e, h));
  });
  const f = zi(e, t, o);
  return f ? jt(e, f) : null;
}
const Yi = 4, Xt = 5123;
function $e(e, t, n, r, i, o) {
  n = n === void 0 ? Yi : n;
  const s = t.indices, c = t.elementType, f = r === void 0 ? t.numElements : r;
  i = i === void 0 ? 0 : i, c || s ? o !== void 0 ? e.drawElementsInstanced(n, f, c === void 0 ? Xt : t.elementType, i, o) : e.drawElements(n, f, c === void 0 ? Xt : t.elementType, i) : o !== void 0 ? e.drawArraysInstanced(n, i, f, o) : e.drawArrays(n, i, f);
}
function Hi(e, t) {
  t = t || 1, t = Math.max(0, t);
  const n = e.clientWidth * t | 0, r = e.clientHeight * t | 0;
  return e.width !== n || e.height !== r ? (e.width = n, e.height = r, !0) : !1;
}
const Kt = {
  vertexShader: `
attribute vec2 position;
attribute vec4 color;

varying vec4 v_color;

uniform mat4 viewProjectionMatrix;
uniform mat4 modelMatrix;

void main() {
  gl_Position = viewProjectionMatrix * modelMatrix *  vec4(position.x, position.y, 0.0, 1.0);
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
class W {
  constructor(t, n) {
    p(this, "pos");
    p(this, "color");
    this.pos = t, this.color = n;
  }
}
class at {
  constructor(t, n) {
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
      this.positions = new Float32Array(n.numVertices * 2), this.colors = new Uint8Array(n.numVertices * 4), this.indices = new Uint16Array(n.numIndices ? n.numIndices : n.numVertices * 3);
    else
      throw new Error("Invalid BufferDataOptions! Must provide positions, colors, and indices arrays, or specify numVertices");
    this.vertexCapacity = this.positions.length / 2, this.indexCapacity = this.indices.length;
    const i = (n.type ? n.type : "dynamic") === "dynamic" ? t.DYNAMIC_DRAW : t.STATIC_DRAW;
    this.bufferInfo = Sr(t, {
      position: { numComponents: 2, data: this.positions, drawType: i },
      color: { numComponents: 4, data: this.colors, drawType: i },
      indices: { numComponents: 3, data: this.indices, drawType: i }
    });
  }
  addVertex(t) {
    this.positions[this.currentVertices * 2 + 0] = t.pos.x, this.positions[this.currentVertices * 2 + 1] = t.pos.y;
    for (let n = 0; n < 4; n++)
      this.colors[this.currentVertices * 4 + n] = t.color.array()[n];
    this.currentVertices++;
  }
  addIndex(t) {
    for (let n = 0; n < t.length; n++)
      this.indices[this.currentIndices + n] = t[n] + this.currentVertices;
    this.currentIndices += t.length;
  }
  updateBufferData(t) {
    Wt(t, this.bufferInfo.attribs.position, this.positions), Wt(t, this.bufferInfo.attribs.color, this.colors), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.bufferInfo.indices), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.DYNAMIC_DRAW);
  }
  fill() {
    this.positions.fill(0, this.currentVertices * 2), this.colors.fill(0, this.currentVertices * 4), this.indices.fill(0, this.currentIndices);
  }
  resetCount() {
    this.currentVertices = 0, this.currentIndices = 0;
  }
}
function bt(e, t) {
  return new g(e, t);
}
const I = class I {
  constructor(t, n) {
    p(this, "x");
    p(this, "y");
    this.x = t, this.y = n;
  }
  add(t, n) {
    return t instanceof I ? (this.x += t.x, this.y += t.y) : n ? (this.x += t, this.y += n) : (this.x += t, this.y += t), this;
  }
  static add(t, n) {
    return new I(t.x + n.x, t.y + n.y);
  }
  mult(t, n) {
    return t instanceof I ? (this.x *= t.x, this.y *= t.y) : n ? (this.x *= t, this.y *= n) : (this.x *= t, this.y *= t), this;
  }
  static mult(t, n) {
    return n instanceof I ? new I(t.x * n.x, t.y * n.y) : new I(t.x * n, t.y * n);
  }
  sub(t, n) {
    return t instanceof I ? (this.x -= t.x, this.y -= t.y) : n ? (this.x -= t, this.y -= n) : (this.x -= t, this.y -= t), this;
  }
  static sub(t, n) {
    return new I(t.x - n.x, t.y - n.y);
  }
  div(t, n) {
    return t instanceof I ? (this.x /= t.x, this.y /= t.y) : n ? (this.x /= t, this.y /= n) : (this.x /= t, this.y /= t), this;
  }
  static div(t, n) {
    return new I(t.x / n.x, t.y / n.y);
  }
  set(t, n) {
    return t instanceof I ? (this.x = t.x, this.y = t.y) : n ? (this.x = t, this.y = n) : (this.x = t, this.y = t), this;
  }
  mag() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  static mag(t) {
    return Math.sqrt(t.x * t.x + t.y * t.y);
  }
  magSq() {
    return this.x * this.x + this.y * this.y;
  }
  static magSq(t) {
    return t.x * t.x + t.y * t.y;
  }
  setMag(t) {
    let n = this.mag();
    return this.x *= t / n, this.y *= t / n, this;
  }
  normalize() {
    return this.setMag(1), this;
  }
  limit(t) {
    return this.mag() > t && this.setMag(t), this;
  }
  heading() {
    return Math.atan2(this.y, this.x);
  }
  rotate(t) {
    let n = Math.cos(t), r = Math.sin(t), i = n * this.x - r * this.y, o = n * this.y + r * this.x;
    return this.x = i, this.y = o, this;
  }
  rotateAboutAxis(t, n) {
    return this.sub(n).rotate(t).add(n), this;
  }
  dot(t) {
    return t.x * this.x + t.y * this.y;
  }
  static dot(t, n) {
    return t.x * n.x + t.y * n.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  static cross(t, n) {
    return t.x * n.y - t.y * n.x;
  }
  dist(t) {
    return Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2));
  }
  static dist(t, n) {
    return Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2));
  }
  lerp(t, n) {
    let r = t.x - this.x, i = t.y - this.y;
    return this.x += n * r, this.y += n * i, this;
  }
  // angleBetween(a: Vector): number {
  //     return Math.atan2(a.y, a.x) - Math.atan2(this.y, this.x);
  // }
  static angleBetween(t, n) {
    return Math.atan2(t.x * n.y - t.y * n.x, t.x * n.x + t.y * n.y);
  }
  copy() {
    return new I(this.x, this.y);
  }
};
p(I, "zero", () => new I(0, 0)), p(I, "up", () => new I(0, -1)), p(I, "down", () => new I(0, 1)), p(I, "left", () => new I(-1, 0)), p(I, "right", () => new I(1, 0));
let g = I;
class Ge {
  constructor() {
    p(this, "translation");
    p(this, "rotation");
    p(this, "scaling");
    p(this, "transformed", !1);
    this.translation = new g(0, 0), this.rotation = 0, this.scaling = new g(1, 1);
  }
  translate(t) {
    this.translation = t, this.transformed = !0;
  }
  rotate(t) {
    this.rotation = t, this.transformed = !0;
  }
  scale(t) {
    this.scaling = t, this.transformed = !0;
  }
  resetTransforms() {
    this.translation = new g(0, 0), this.rotation = 0, this.scaling = new g(1, 1), this.transformed = !1;
  }
  transformVertices(t) {
    return this.transformed ? t.map((n) => new W(n.pos.copy().rotate(this.rotation).mult(this.scaling).add(this.translation), n.color)) : t;
  }
  getMatrix() {
    return Z.translate(Z.scale(Z.rotateZ(Z.identity(), this.rotation), [this.scaling.x, this.scaling.y, 1]), [
      this.translation.x,
      this.translation.y,
      0
    ]);
  }
}
class Ot {
  constructor(t) {
    p(this, "gl");
    p(this, "id", -1);
    p(this, "transform");
    this.gl = t, this.transform = new Ge();
  }
  addVerticesAndIndices(t, n) {
  }
  update() {
  }
  render(t) {
  }
  reset() {
  }
}
class Ye extends Ot {
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
  update() {
    this.buffers[this.currentBufferIndex].fill(), this.buffers[this.currentBufferIndex].updateBufferData(this.gl);
  }
  render(n) {
    Tt(n, {
      modelMatrix: this.transform.getMatrix()
    });
    for (let r = 0; r <= this.currentBufferIndex; r++)
      ke(this.gl, n, this.buffers[r].bufferInfo), $e(this.gl, this.buffers[r].bufferInfo, this.gl.TRIANGLES, this.buffers[r].currentIndices);
  }
  reset() {
    this.currentBufferIndex = 0;
    for (const n of this.buffers)
      n.resetCount();
  }
  addBuffer() {
    this.currentBufferIndex++, this.buffers.push(new at(this.gl, { numVertices: this.bufferSize }));
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
function Wi(e, t, n) {
  return new St(e, t, n);
}
function He(e, t, n, r = 255) {
  return new St(e, t, n, r);
}
class St {
  constructor(t, n, r, i = 255) {
    p(this, "r");
    p(this, "g");
    p(this, "b");
    p(this, "a");
    this.r = t, this.g = n, this.b = r, this.a = i;
  }
  array() {
    return [this.r, this.g, this.b, this.a];
  }
  static rgbToHex(t) {
    return "#" + (1 << 24 | t.r << 16 | t.g << 8 | t.b).toString(16).slice(1);
  }
  static hexToRGBA(t, n = 255) {
    const r = parseInt(t.slice(1), 16), i = r >> 16 & 255, o = r >> 8 & 255, s = r & 255;
    return He(i, o, s, n);
  }
}
function Zt(e, t, n, r, i) {
  return r + (e - t) * ((i - r) / (n - t));
}
function ct(e, t, n) {
  const r = e.pos, i = t.pos, o = Math.atan2(i.y - r.y, i.x - r.x), s = Math.cos(o), c = Math.sin(o), f = r.x - n / 2 * c, u = r.y + n / 2 * s, h = r.x + n / 2 * c, a = r.y - n / 2 * s;
  return [new W(new g(f, u), e.color), new W(new g(h, a), e.color)];
}
function Jt(e, t, n, r) {
  let i = e.pos.x, o = e.pos.y, s = t.pos.x, c = t.pos.y, f = n.pos.x, u = n.pos.y;
  const h = o - c, a = i - s, l = o * (i - s) - i * (o - c), y = c - u, x = s - f, T = c * (s - f) - s * (c - u), S = r / 2 * Math.sqrt(h * h + a * a) - l, E = r / 2 * Math.sqrt(h * h + a * a) + l, m = r / 2 * Math.sqrt(y * y + x * x) - T, w = r / 2 * Math.sqrt(y * y + x * x) + T, B = (a * m - x * S) / (h * x - y * a), M = (y * S - h * m) / (h * x - y * a), D = (a * w - x * E) / (h * x - y * a), N = (y * E - h * w) / (h * x - y * a);
  return [new W(new g(-B, M), t.color), new W(new g(D, -N), t.color)];
}
class qi {
  constructor(t) {
    p(this, "canvas");
    p(this, "gl");
    p(this, "transform");
    p(this, "shaderProgramInfo");
    p(this, "buffers", []);
    p(this, "currentBufferIndex", 0);
    // private defaultBuffer: DynamicBuffer;
    p(this, "currentPath", []);
    t.canvas ? this.canvas = t.canvas : (this.canvas = document.createElement("canvas"), this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, document.body.appendChild(this.canvas));
    let n = null;
    if ((t.webglVersion === 2 || !t.webglVersion) && (n = this.canvas.getContext("webgl2"), n || console.warn("WebGL 2 not supported, falling back to WebGL 1")), (!n || t.webglVersion === 1) && (n = this.canvas.getContext("webgl")), !n)
      throw new Error("WebGL not supported");
    this.gl = n, this.shaderProgramInfo = Gi(this.gl, [Kt.vertexShader, Kt.fragmentShader]), this.gl.enable(this.gl.BLEND), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE), Hi(this.gl.canvas), this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.setBuffer(new Ye(this.gl, { bufferSize: 1e3 })), this.transform = new Ge();
  }
  setBuffer(t) {
    if (t === 0) {
      this.currentBufferIndex = 0;
      return;
    }
    t.id === -1 && (t.id = this.buffers.length, this.buffers.push(t)), this.currentBufferIndex = t.id;
  }
  clear(t = new St(0, 0, 0, 255)) {
    this.gl.clearColor(t.r / 255, t.g / 255, t.b / 255, t.a / 255), this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
  }
  line(t, n, r, i) {
    const o = new W(t, i), s = new W(n, i);
    this.buffers[this.currentBufferIndex].addVerticesAndIndices(
      this.transform.transformVertices([...ct(o, s, r), ...ct(s, o, r)]),
      [0, 1, 2, 0, 2, 3]
    );
  }
  path(t, n, r = !1) {
    const i = [], o = [], s = t[0], c = t[1];
    r ? i.push(...Jt(t[t.length - 1], s, c, n)) : i.push(...ct(s, c, n));
    for (let f = 0; f < t.length - (r ? 1 : 2); f++)
      o.push(0 + f * 2, 1 + f * 2, 2 + f * 2, 1 + f * 2, 2 + f * 2, 3 + f * 2), i.push(...Jt(t[f], t[f + 1], t[(f + 2) % t.length], n));
    if (r) {
      const f = i.length - 2;
      o.push(f, f + 1, 0, f + 1, 0, 1);
    } else {
      const f = i.length - 2;
      o.push(f + 0, f + 1, f + 2, f + 0, f + 2, f + 3), i.push(...ct(t[t.length - 1], t[t.length - 2], n));
    }
    this.buffers[this.currentBufferIndex].addVerticesAndIndices(this.transform.transformVertices(i), o);
  }
  beginPath() {
    this.currentPath = [];
  }
  vertex(t, n) {
    t instanceof W ? this.currentPath.push(t) : n && this.currentPath.push(new W(t, n));
  }
  arc(t, n, r, i, o) {
    const c = (i - r) / 40, f = [];
    for (let u = 0; u <= 40; u++) {
      const h = r + c * u;
      f.push(new W(new g(t.x + n * Math.cos(h), t.y + n * Math.sin(h)), o));
    }
    this.currentPath.push(...f);
  }
  rect(t, n, r) {
    const i = [t, new g(t.x + n.x, t.y), new g(t.x + n.y, t.y + n.y), new g(t.x, t.y + n.y)];
    this.currentPath.push(...i.map((o) => new W(o, r)));
  }
  strokePath(t, n = !1) {
    this.path(this.currentPath, t, n);
  }
  fillPath() {
    const t = [];
    for (let n = 1; n < this.currentPath.length - 1; n++)
      t.push(0, n, n + 1);
    this.buffers[this.currentBufferIndex].addVerticesAndIndices(this.transform.transformVertices(this.currentPath), t);
  }
  render(t) {
    this.buffers[0].update();
    const n = {
      resolution: [this.gl.canvas.width, this.gl.canvas.height],
      viewProjectionMatrix: t ? t.getMatrix() : Z.identity()
    };
    this.gl.useProgram(this.shaderProgramInfo.program), Tt(this.shaderProgramInfo, n);
    for (const r of this.buffers)
      console.log(r), r.render(this.shaderProgramInfo);
    this.buffers[0].reset();
  }
  getDisplaySize() {
    return new g(this.canvas.width, this.canvas.height);
  }
}
class ji extends Ot {
  constructor(n) {
    super(n);
    p(this, "buffer");
    p(this, "tempVertices", []);
    p(this, "tempIndices", []);
    this.buffer = null;
  }
  addVerticesAndIndices(n, r) {
    this.tempVertices.push(...n), this.tempIndices.push(...r);
  }
  update() {
    if (this.buffer) {
      if (this.tempVertices.length > this.buffer.vertexCapacity || this.tempIndices.length > this.buffer.indexCapacity) {
        for (const n of Object.values(this.buffer.bufferInfo.attribs))
          this.gl.deleteBuffer(n.buffer);
        this.gl.deleteBuffer(this.buffer.bufferInfo.indices), this.buffer = new at(this.gl, {
          numVertices: this.tempVertices.length,
          numIndices: this.tempIndices.length,
          type: "static"
        });
      } else
        this.buffer.resetCount();
      this.buffer.addIndex(this.tempIndices);
      for (const n of this.tempVertices)
        this.buffer.addVertex(n);
      this.buffer.updateBufferData(this.gl);
    } else {
      this.buffer = new at(this.gl, {
        numVertices: this.tempVertices.length,
        numIndices: this.tempIndices.length,
        type: "static"
      }), this.buffer.addIndex(this.tempIndices);
      for (const n of this.tempVertices)
        this.buffer.addVertex(n);
      this.buffer.updateBufferData(this.gl);
    }
    this.tempIndices = [], this.tempVertices = [];
  }
  render(n) {
    if (!this.buffer)
      throw new Error("Buffer not initialized! Run buffer.updateBuffer()");
    Tt(n, {
      modelMatrix: this.transform.getMatrix()
    }), ke(this.gl, n, this.buffer.bufferInfo), $e(this.gl, this.buffer.bufferInfo, this.gl.TRIANGLES, this.buffer.currentIndices);
  }
}
class Xi {
  constructor(t) {
    p(this, "zoom", 1);
    p(this, "pos", bt(0, 0));
    p(this, "displaySize", bt(0, 0));
    p(this, "aspect", 1);
    // Aspect ratio
    p(this, "matrix", Z.identity());
    this.setDisplaySize(t);
  }
  translate(t) {
    this.pos = this.pos.add(t), this.calculateMatrix();
  }
  setZoom(t) {
    this.zoom = t, this.calculateMatrix();
  }
  setDisplaySize(t) {
    this.displaySize = t, this.calculateAspectRatio(), this.calculateMatrix();
  }
  calculateAspectRatio() {
    this.aspect = this.displaySize.x / this.displaySize.y;
  }
  calculateMatrix() {
    const t = this.displaySize.y / this.zoom;
    this.matrix = Z.translate(
      Z.ortho(-this.aspect * t, this.aspect * t, 1 * t, -1 * t, -1, 1),
      hn.create(-this.pos.x, -this.pos.y)
    );
  }
  screenSpaceToWorldSpace(t) {
    const n = window.innerHeight / this.zoom, r = Zt(t.x, 0, window.innerWidth, -this.aspect * n, this.aspect * n) + this.pos.x, i = Zt(t.y, 0, window.innerHeight, -1 * n, 1 * n) + this.pos.y;
    return bt(r, i);
  }
  getMatrix() {
    return this.matrix;
  }
}
const Zi = { Renderer: qi, DynamicBuffer: Ye, Buffer: Ot, BufferData: at, Camera: Xi, Color: St, Vertex: W, Vector: g, RGB: Wi, RGBA: He, StaticBuffer: ji };
export {
  Zi as default
};
