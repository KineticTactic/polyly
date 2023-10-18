var Ye = Object.defineProperty;
var He = (e, t, n) => t in e ? Ye(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var y = (e, t, n) => (He(e, typeof t != "symbol" ? t + "" : t, n), n);
/* @license twgl.js 5.5.3 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */
let N = Float32Array;
function We(e) {
  const t = N;
  return N = e, t;
}
function K(e, t, n) {
  const r = new N(3);
  return e && (r[0] = e), t && (r[1] = t), n && (r[2] = n), r;
}
function qe(e, t, n) {
  return n = n || new N(3), n[0] = e[0] + t[0], n[1] = e[1] + t[1], n[2] = e[2] + t[2], n;
}
function Jt(e, t, n) {
  return n = n || new N(3), n[0] = e[0] - t[0], n[1] = e[1] - t[1], n[2] = e[2] - t[2], n;
}
function je(e, t, n, r) {
  return r = r || new N(3), r[0] = e[0] + n * (t[0] - e[0]), r[1] = e[1] + n * (t[1] - e[1]), r[2] = e[2] + n * (t[2] - e[2]), r;
}
function Xe(e, t, n, r) {
  return r = r || new N(3), r[0] = e[0] + n[0] * (t[0] - e[0]), r[1] = e[1] + n[1] * (t[1] - e[1]), r[2] = e[2] + n[2] * (t[2] - e[2]), r;
}
function Ke(e, t, n) {
  return n = n || new N(3), n[0] = Math.max(e[0], t[0]), n[1] = Math.max(e[1], t[1]), n[2] = Math.max(e[2], t[2]), n;
}
function Ze(e, t, n) {
  return n = n || new N(3), n[0] = Math.min(e[0], t[0]), n[1] = Math.min(e[1], t[1]), n[2] = Math.min(e[2], t[2]), n;
}
function Je(e, t, n) {
  return n = n || new N(3), n[0] = e[0] * t, n[1] = e[1] * t, n[2] = e[2] * t, n;
}
function Qe(e, t, n) {
  return n = n || new N(3), n[0] = e[0] / t, n[1] = e[1] / t, n[2] = e[2] / t, n;
}
function wt(e, t, n) {
  n = n || new N(3);
  const r = e[2] * t[0] - e[0] * t[2], i = e[0] * t[1] - e[1] * t[0];
  return n[0] = e[1] * t[2] - e[2] * t[1], n[1] = r, n[2] = i, n;
}
function de(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function tn(e) {
  return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
}
function en(e) {
  return e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
}
function nn(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
  return Math.sqrt(n * n + r * r + i * i);
}
function rn(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
  return n * n + r * r + i * i;
}
function ht(e, t) {
  t = t || new N(3);
  const n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], r = Math.sqrt(n);
  return r > 1e-5 ? (t[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r) : (t[0] = 0, t[1] = 0, t[2] = 0), t;
}
function on(e, t) {
  return t = t || new N(3), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t;
}
function sn(e, t) {
  return t = t || new N(3), t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
}
function cn(e, t, n) {
  return n = n || new N(3), n[0] = e[0] * t[0], n[1] = e[1] * t[1], n[2] = e[2] * t[2], n;
}
function fn(e, t, n) {
  return n = n || new N(3), n[0] = e[0] / t[0], n[1] = e[1] / t[1], n[2] = e[2] / t[2], n;
}
var un = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  add: qe,
  copy: sn,
  create: K,
  cross: wt,
  distance: nn,
  distanceSq: rn,
  divide: fn,
  divScalar: Qe,
  dot: de,
  lerp: je,
  lerpV: Xe,
  length: tn,
  lengthSq: en,
  max: Ke,
  min: Ze,
  mulScalar: Je,
  multiply: cn,
  negate: on,
  normalize: ht,
  setDefaultType: We,
  subtract: Jt
});
let b = Float32Array;
function an(e) {
  const t = b;
  return b = e, t;
}
function hn(e, t) {
  return t = t || new b(16), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t[4] = -e[4], t[5] = -e[5], t[6] = -e[6], t[7] = -e[7], t[8] = -e[8], t[9] = -e[9], t[10] = -e[10], t[11] = -e[11], t[12] = -e[12], t[13] = -e[13], t[14] = -e[14], t[15] = -e[15], t;
}
function ln() {
  return new b(16).fill(0);
}
function Qt(e, t) {
  return t = t || new b(16), t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
}
function dt(e) {
  return e = e || new b(16), e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function yn(e, t) {
  if (t = t || new b(16), t === e) {
    let T;
    return T = e[1], e[1] = e[4], e[4] = T, T = e[2], e[2] = e[8], e[8] = T, T = e[3], e[3] = e[12], e[12] = T, T = e[6], e[6] = e[9], e[9] = T, T = e[7], e[7] = e[13], e[13] = T, T = e[11], e[11] = e[14], e[14] = T, t;
  }
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], o = e[0 * 4 + 3], s = e[1 * 4 + 0], c = e[1 * 4 + 1], f = e[1 * 4 + 2], u = e[1 * 4 + 3], h = e[2 * 4 + 0], a = e[2 * 4 + 1], l = e[2 * 4 + 2], x = e[2 * 4 + 3], p = e[3 * 4 + 0], m = e[3 * 4 + 1], E = e[3 * 4 + 2], S = e[3 * 4 + 3];
  return t[0] = n, t[1] = s, t[2] = h, t[3] = p, t[4] = r, t[5] = c, t[6] = a, t[7] = m, t[8] = i, t[9] = f, t[10] = l, t[11] = E, t[12] = o, t[13] = u, t[14] = x, t[15] = S, t;
}
function te(e, t) {
  t = t || new b(16);
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], o = e[0 * 4 + 3], s = e[1 * 4 + 0], c = e[1 * 4 + 1], f = e[1 * 4 + 2], u = e[1 * 4 + 3], h = e[2 * 4 + 0], a = e[2 * 4 + 1], l = e[2 * 4 + 2], x = e[2 * 4 + 3], p = e[3 * 4 + 0], m = e[3 * 4 + 1], E = e[3 * 4 + 2], S = e[3 * 4 + 3], T = l * S, _ = E * x, M = f * S, g = E * u, P = f * x, D = l * u, V = i * S, L = E * o, C = i * x, O = l * o, k = i * u, $ = f * o, G = h * m, Y = p * a, H = s * m, W = p * c, q = s * a, rt = h * c, it = n * m, ot = p * r, st = n * a, ct = h * r, ft = n * c, ut = s * r, kt = T * c + g * a + P * m - (_ * c + M * a + D * m), $t = _ * r + V * a + O * m - (T * r + L * a + C * m), Gt = M * r + L * c + k * m - (g * r + V * c + $ * m), Yt = D * r + C * c + $ * a - (P * r + O * c + k * a), v = 1 / (n * kt + s * $t + h * Gt + p * Yt);
  return t[0] = v * kt, t[1] = v * $t, t[2] = v * Gt, t[3] = v * Yt, t[4] = v * (_ * s + M * h + D * p - (T * s + g * h + P * p)), t[5] = v * (T * n + L * h + C * p - (_ * n + V * h + O * p)), t[6] = v * (g * n + V * s + $ * p - (M * n + L * s + k * p)), t[7] = v * (P * n + O * s + k * h - (D * n + C * s + $ * h)), t[8] = v * (G * u + W * x + q * S - (Y * u + H * x + rt * S)), t[9] = v * (Y * o + it * x + ct * S - (G * o + ot * x + st * S)), t[10] = v * (H * o + ot * u + ft * S - (W * o + it * u + ut * S)), t[11] = v * (rt * o + st * u + ut * x - (q * o + ct * u + ft * x)), t[12] = v * (H * l + rt * E + Y * f - (q * E + G * f + W * l)), t[13] = v * (st * E + G * i + ot * l - (it * l + ct * E + Y * i)), t[14] = v * (it * f + ut * E + W * i - (ft * E + H * i + ot * f)), t[15] = v * (ft * l + q * i + ct * f - (st * f + ut * l + rt * i)), t;
}
function xn(e, t, n) {
  n = n || new b(16);
  const r = e[0], i = e[1], o = e[2], s = e[3], c = e[4 + 0], f = e[4 + 1], u = e[4 + 2], h = e[4 + 3], a = e[8 + 0], l = e[8 + 1], x = e[8 + 2], p = e[8 + 3], m = e[12 + 0], E = e[12 + 1], S = e[12 + 2], T = e[12 + 3], _ = t[0], M = t[1], g = t[2], P = t[3], D = t[4 + 0], V = t[4 + 1], L = t[4 + 2], C = t[4 + 3], O = t[8 + 0], k = t[8 + 1], $ = t[8 + 2], G = t[8 + 3], Y = t[12 + 0], H = t[12 + 1], W = t[12 + 2], q = t[12 + 3];
  return n[0] = r * _ + c * M + a * g + m * P, n[1] = i * _ + f * M + l * g + E * P, n[2] = o * _ + u * M + x * g + S * P, n[3] = s * _ + h * M + p * g + T * P, n[4] = r * D + c * V + a * L + m * C, n[5] = i * D + f * V + l * L + E * C, n[6] = o * D + u * V + x * L + S * C, n[7] = s * D + h * V + p * L + T * C, n[8] = r * O + c * k + a * $ + m * G, n[9] = i * O + f * k + l * $ + E * G, n[10] = o * O + u * k + x * $ + S * G, n[11] = s * O + h * k + p * $ + T * G, n[12] = r * Y + c * H + a * W + m * q, n[13] = i * Y + f * H + l * W + E * q, n[14] = o * Y + u * H + x * W + S * q, n[15] = s * Y + h * H + p * W + T * q, n;
}
function pn(e, t, n) {
  return n = n || dt(), e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11]), n[12] = t[0], n[13] = t[1], n[14] = t[2], n[15] = 1, n;
}
function An(e, t) {
  return t = t || K(), t[0] = e[12], t[1] = e[13], t[2] = e[14], t;
}
function mn(e, t, n) {
  n = n || K();
  const r = t * 4;
  return n[0] = e[r + 0], n[1] = e[r + 1], n[2] = e[r + 2], n;
}
function Tn(e, t, n, r) {
  r !== e && (r = Qt(e, r));
  const i = n * 4;
  return r[i + 0] = t[0], r[i + 1] = t[1], r[i + 2] = t[2], r;
}
function Sn(e, t, n, r, i) {
  i = i || new b(16);
  const o = Math.tan(Math.PI * 0.5 - 0.5 * e), s = 1 / (n - r);
  return i[0] = o / t, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = o, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = (n + r) * s, i[11] = -1, i[12] = 0, i[13] = 0, i[14] = n * r * s * 2, i[15] = 0, i;
}
function En(e, t, n, r, i, o, s) {
  return s = s || new b(16), s[0] = 2 / (t - e), s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 2 / (r - n), s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = 2 / (i - o), s[11] = 0, s[12] = (t + e) / (e - t), s[13] = (r + n) / (n - r), s[14] = (o + i) / (i - o), s[15] = 1, s;
}
function bn(e, t, n, r, i, o, s) {
  s = s || new b(16);
  const c = t - e, f = r - n, u = i - o;
  return s[0] = 2 * i / c, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 2 * i / f, s[6] = 0, s[7] = 0, s[8] = (e + t) / c, s[9] = (r + n) / f, s[10] = o / u, s[11] = -1, s[12] = 0, s[13] = 0, s[14] = i * o / u, s[15] = 0, s;
}
let Z, d, X;
function wn(e, t, n, r) {
  return r = r || new b(16), Z = Z || K(), d = d || K(), X = X || K(), ht(
    Jt(e, t, X),
    X
  ), ht(wt(n, X, Z), Z), ht(wt(X, Z, d), d), r[0] = Z[0], r[1] = Z[1], r[2] = Z[2], r[3] = 0, r[4] = d[0], r[5] = d[1], r[6] = d[2], r[7] = 0, r[8] = X[0], r[9] = X[1], r[10] = X[2], r[11] = 0, r[12] = e[0], r[13] = e[1], r[14] = e[2], r[15] = 1, r;
}
function In(e, t) {
  return t = t || new b(16), t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t;
}
function Bn(e, t, n) {
  n = n || new b(16);
  const r = t[0], i = t[1], o = t[2], s = e[0], c = e[1], f = e[2], u = e[3], h = e[1 * 4 + 0], a = e[1 * 4 + 1], l = e[1 * 4 + 2], x = e[1 * 4 + 3], p = e[2 * 4 + 0], m = e[2 * 4 + 1], E = e[2 * 4 + 2], S = e[2 * 4 + 3], T = e[3 * 4 + 0], _ = e[3 * 4 + 1], M = e[3 * 4 + 2], g = e[3 * 4 + 3];
  return e !== n && (n[0] = s, n[1] = c, n[2] = f, n[3] = u, n[4] = h, n[5] = a, n[6] = l, n[7] = x, n[8] = p, n[9] = m, n[10] = E, n[11] = S), n[12] = s * r + h * i + p * o + T, n[13] = c * r + a * i + m * o + _, n[14] = f * r + l * i + E * o + M, n[15] = u * r + x * i + S * o + g, n;
}
function _n(e, t) {
  t = t || new b(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Mn(e, t, n) {
  n = n || new b(16);
  const r = e[4], i = e[5], o = e[6], s = e[7], c = e[8], f = e[9], u = e[10], h = e[11], a = Math.cos(t), l = Math.sin(t);
  return n[4] = a * r + l * c, n[5] = a * i + l * f, n[6] = a * o + l * u, n[7] = a * s + l * h, n[8] = a * c - l * r, n[9] = a * f - l * i, n[10] = a * u - l * o, n[11] = a * h - l * s, e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function gn(e, t) {
  t = t || new b(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Rn(e, t, n) {
  n = n || new b(16);
  const r = e[0 * 4 + 0], i = e[0 * 4 + 1], o = e[0 * 4 + 2], s = e[0 * 4 + 3], c = e[2 * 4 + 0], f = e[2 * 4 + 1], u = e[2 * 4 + 2], h = e[2 * 4 + 3], a = Math.cos(t), l = Math.sin(t);
  return n[0] = a * r - l * c, n[1] = a * i - l * f, n[2] = a * o - l * u, n[3] = a * s - l * h, n[8] = a * c + l * r, n[9] = a * f + l * i, n[10] = a * u + l * o, n[11] = a * h + l * s, e !== n && (n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function Nn(e, t) {
  t = t || new b(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Pn(e, t, n) {
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
function Dn(e, t, n, r) {
  r = r || new b(16);
  let i = t[0], o = t[1], s = t[2];
  const c = Math.sqrt(i * i + o * o + s * s);
  i /= c, o /= c, s /= c;
  const f = i * i, u = o * o, h = s * s, a = Math.cos(n), l = Math.sin(n), x = 1 - a, p = f + (1 - f) * a, m = i * o * x + s * l, E = i * s * x - o * l, S = i * o * x - s * l, T = u + (1 - u) * a, _ = o * s * x + i * l, M = i * s * x + o * l, g = o * s * x - i * l, P = h + (1 - h) * a, D = e[0], V = e[1], L = e[2], C = e[3], O = e[4], k = e[5], $ = e[6], G = e[7], Y = e[8], H = e[9], W = e[10], q = e[11];
  return r[0] = p * D + m * O + E * Y, r[1] = p * V + m * k + E * H, r[2] = p * L + m * $ + E * W, r[3] = p * C + m * G + E * q, r[4] = S * D + T * O + _ * Y, r[5] = S * V + T * k + _ * H, r[6] = S * L + T * $ + _ * W, r[7] = S * C + T * G + _ * q, r[8] = M * D + g * O + P * Y, r[9] = M * V + g * k + P * H, r[10] = M * L + g * $ + P * W, r[11] = M * C + g * G + P * q, e !== r && (r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15]), r;
}
function Fn(e, t) {
  return t = t || new b(16), t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function zn(e, t, n) {
  n = n || new b(16);
  const r = t[0], i = t[1], o = t[2];
  return n[0] = r * e[0 * 4 + 0], n[1] = r * e[0 * 4 + 1], n[2] = r * e[0 * 4 + 2], n[3] = r * e[0 * 4 + 3], n[4] = i * e[1 * 4 + 0], n[5] = i * e[1 * 4 + 1], n[6] = i * e[1 * 4 + 2], n[7] = i * e[1 * 4 + 3], n[8] = o * e[2 * 4 + 0], n[9] = o * e[2 * 4 + 1], n[10] = o * e[2 * 4 + 2], n[11] = o * e[2 * 4 + 3], e !== n && (n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function Un(e, t, n) {
  n = n || K();
  const r = t[0], i = t[1], o = t[2], s = r * e[0 * 4 + 3] + i * e[1 * 4 + 3] + o * e[2 * 4 + 3] + e[3 * 4 + 3];
  return n[0] = (r * e[0 * 4 + 0] + i * e[1 * 4 + 0] + o * e[2 * 4 + 0] + e[3 * 4 + 0]) / s, n[1] = (r * e[0 * 4 + 1] + i * e[1 * 4 + 1] + o * e[2 * 4 + 1] + e[3 * 4 + 1]) / s, n[2] = (r * e[0 * 4 + 2] + i * e[1 * 4 + 2] + o * e[2 * 4 + 2] + e[3 * 4 + 2]) / s, n;
}
function Vn(e, t, n) {
  n = n || K();
  const r = t[0], i = t[1], o = t[2];
  return n[0] = r * e[0 * 4 + 0] + i * e[1 * 4 + 0] + o * e[2 * 4 + 0], n[1] = r * e[0 * 4 + 1] + i * e[1 * 4 + 1] + o * e[2 * 4 + 1], n[2] = r * e[0 * 4 + 2] + i * e[1 * 4 + 2] + o * e[2 * 4 + 2], n;
}
function Ln(e, t, n) {
  n = n || K();
  const r = te(e), i = t[0], o = t[1], s = t[2];
  return n[0] = i * r[0 * 4 + 0] + o * r[0 * 4 + 1] + s * r[0 * 4 + 2], n[1] = i * r[1 * 4 + 0] + o * r[1 * 4 + 1] + s * r[1 * 4 + 2], n[2] = i * r[2 * 4 + 0] + o * r[2 * 4 + 1] + s * r[2 * 4 + 2], n;
}
var J = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  axisRotate: Dn,
  axisRotation: vn,
  copy: Qt,
  create: ln,
  frustum: bn,
  getAxis: mn,
  getTranslation: An,
  identity: dt,
  inverse: te,
  lookAt: wn,
  multiply: xn,
  negate: hn,
  ortho: En,
  perspective: Sn,
  rotateX: Mn,
  rotateY: Rn,
  rotateZ: Pn,
  rotationX: _n,
  rotationY: gn,
  rotationZ: Nn,
  scale: zn,
  scaling: Fn,
  setAxis: Tn,
  setDefaultType: an,
  setTranslation: pn,
  transformDirection: Vn,
  transformNormal: Ln,
  transformPoint: Un,
  translate: Bn,
  translation: In,
  transpose: yn
});
const _t = 5120, nt = 5121, Mt = 5122, gt = 5123, Rt = 5124, Nt = 5125, Pt = 5126, Cn = 32819, On = 32820, kn = 33635, $n = 5131, Gn = 33640, Yn = 35899, Hn = 35902, Wn = 36269, qn = 34042, ee = {};
{
  const e = ee;
  e[_t] = Int8Array, e[nt] = Uint8Array, e[Mt] = Int16Array, e[gt] = Uint16Array, e[Rt] = Int32Array, e[Nt] = Uint32Array, e[Pt] = Float32Array, e[Cn] = Uint16Array, e[On] = Uint16Array, e[kn] = Uint16Array, e[$n] = Uint16Array, e[Gn] = Uint32Array, e[Yn] = Uint32Array, e[Hn] = Uint32Array, e[Wn] = Uint32Array, e[qn] = Uint32Array;
}
function ne(e) {
  if (e instanceof Int8Array)
    return _t;
  if (e instanceof Uint8Array || e instanceof Uint8ClampedArray)
    return nt;
  if (e instanceof Int16Array)
    return Mt;
  if (e instanceof Uint16Array)
    return gt;
  if (e instanceof Int32Array)
    return Rt;
  if (e instanceof Uint32Array)
    return Nt;
  if (e instanceof Float32Array)
    return Pt;
  throw new Error("unsupported typed array type");
}
function re(e) {
  if (e === Int8Array)
    return _t;
  if (e === Uint8Array || e === Uint8ClampedArray)
    return nt;
  if (e === Int16Array)
    return Mt;
  if (e === Uint16Array)
    return gt;
  if (e === Int32Array)
    return Rt;
  if (e === Uint32Array)
    return Nt;
  if (e === Float32Array)
    return Pt;
  throw new Error("unsupported typed array type");
}
function jn(e) {
  const t = ee[e];
  if (!t)
    throw new Error("unknown gl type");
  return t;
}
const It = typeof SharedArrayBuffer < "u" ? function(t) {
  return t && t.buffer && (t.buffer instanceof ArrayBuffer || t.buffer instanceof SharedArrayBuffer);
} : function(t) {
  return t && t.buffer && t.buffer instanceof ArrayBuffer;
};
function Xn(...e) {
  console.error(...e);
}
const Ht = /* @__PURE__ */ new Map();
function ie(e, t) {
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
function Kn(e, t) {
  return typeof WebGLBuffer < "u" && ie(t, "WebGLBuffer");
}
function oe(e, t) {
  return typeof WebGLTexture < "u" && ie(t, "WebGLTexture");
}
const se = 35044, j = 34962, Zn = 34963, Jn = 34660, Qn = 5120, dn = 5121, tr = 5122, er = 5123, nr = 5124, rr = 5125, ce = 5126, fe = {
  attribPrefix: ""
};
function ue(e, t, n, r, i) {
  e.bindBuffer(t, n), e.bufferData(t, r, i || se);
}
function ae(e, t, n, r) {
  if (Kn(e, t))
    return t;
  n = n || j;
  const i = e.createBuffer();
  return ue(e, n, i, t, r), i;
}
function he(e) {
  return e === "indices";
}
function ir(e) {
  return e === Int8Array || e === Uint8Array;
}
function or(e) {
  return e.length ? e : e.data;
}
const sr = /coord|texture/i, cr = /color|colour/i;
function fr(e, t) {
  let n;
  if (sr.test(e) ? n = 2 : cr.test(e) ? n = 4 : n = 3, t % n > 0)
    throw new Error(`Can not guess numComponents for attribute '${e}'. Tried ${n} but ${t} values is not evenly divisible by ${n}. You should specify it.`);
  return n;
}
function ur(e, t, n) {
  return e.numComponents || e.size || fr(t, n || or(e).length);
}
function vt(e, t) {
  if (It(e))
    return e;
  if (It(e.data))
    return e.data;
  Array.isArray(e) && (e = {
    data: e
  });
  let n = e.type ? Dt(e.type) : void 0;
  return n || (he(t) ? n = Uint16Array : n = Float32Array), new n(e.data);
}
function ar(e) {
  return typeof e == "number" ? e : e ? re(e) : ce;
}
function Dt(e) {
  return typeof e == "number" ? jn(e) : e || Float32Array;
}
function hr(e, t) {
  return {
    buffer: t.buffer,
    numValues: 2 * 3 * 4,
    // safely divided by 2, 3, 4
    type: ar(t.type),
    arrayType: Dt(t.type)
  };
}
function lr(e, t) {
  const n = t.data || t, r = Dt(t.type), i = n * r.BYTES_PER_ELEMENT, o = e.createBuffer();
  return e.bindBuffer(j, o), e.bufferData(j, i, t.drawType || se), {
    buffer: o,
    numValues: n,
    type: re(r),
    arrayType: r
  };
}
function yr(e, t, n) {
  const r = vt(t, n);
  return {
    arrayType: r.constructor,
    buffer: ae(e, r, void 0, t.drawType),
    type: ne(r),
    numValues: 0
  };
}
function xr(e, t) {
  const n = {};
  return Object.keys(t).forEach(function(r) {
    if (!he(r)) {
      const i = t[r], o = i.attrib || i.name || i.attribName || fe.attribPrefix + r;
      if (i.value) {
        if (!Array.isArray(i.value) && !It(i.value))
          throw new Error("array.value is not array or typedarray");
        n[o] = {
          value: i.value
        };
      } else {
        let s;
        i.buffer && i.buffer instanceof WebGLBuffer ? s = hr : typeof i == "number" || typeof i.data == "number" ? s = lr : s = yr;
        const { buffer: c, type: f, numValues: u, arrayType: h } = s(e, i, r), a = i.normalize !== void 0 ? i.normalize : ir(h), l = ur(i, r, u);
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
  }), e.bindBuffer(j, null), n;
}
function Wt(e, t, n, r) {
  n = vt(n), r !== void 0 ? (e.bindBuffer(j, t.buffer), e.bufferSubData(j, r, n)) : ue(e, j, t.buffer, n, t.drawType);
}
function pr(e, t) {
  return t === Qn || t === dn ? 1 : t === tr || t === er ? 2 : t === nr || t === rr || t === ce ? 4 : 0;
}
const bt = ["position", "positions", "a_position"];
function Ar(e, t) {
  let n, r;
  for (r = 0; r < bt.length && (n = bt[r], !(n in t || (n = fe.attribPrefix + n, n in t))); ++r)
    ;
  r === bt.length && (n = Object.keys(t)[0]);
  const i = t[n];
  if (!i.buffer)
    return 1;
  e.bindBuffer(j, i.buffer);
  const o = e.getBufferParameter(j, Jn);
  e.bindBuffer(j, null);
  const s = pr(e, i.type), c = o / s, f = i.numComponents || i.size, u = c / f;
  if (u % 1 !== 0)
    throw new Error(`numComponents ${f} not correct for length ${length}`);
  return u;
}
function mr(e, t, n) {
  const r = xr(e, t), i = Object.assign({}, n || {});
  i.attribs = Object.assign({}, n ? n.attribs : {}, r);
  const o = t.indices;
  if (o) {
    const s = vt(o, "indices");
    i.indices = ae(e, s, Zn), i.numElements = s.length, i.elementType = ne(s);
  } else
    i.numElements || (i.numElements = Ar(e, i.attribs));
  return i;
}
function Ft(e) {
  return !!e.texStorage2D;
}
const Tr = function() {
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
}(), zt = Xn;
function le(e) {
  return typeof document < "u" && document.getElementById ? document.getElementById(e) : null;
}
const lt = 33984, yt = 34962, Sr = 34963, Er = 35713, br = 35714, wr = 35632, Ir = 35633, Br = 35981, ye = 35718, _r = 35721, Mr = 35971, gr = 35382, Rr = 35396, Nr = 35398, Pr = 35392, vr = 35395, xt = 5126, xe = 35664, pe = 35665, Ae = 35666, Ut = 5124, me = 35667, Te = 35668, Se = 35669, Ee = 35670, be = 35671, we = 35672, Ie = 35673, Be = 35674, _e = 35675, Me = 35676, Dr = 35678, Fr = 35680, zr = 35679, Ur = 35682, Vr = 35685, Lr = 35686, Cr = 35687, Or = 35688, kr = 35689, $r = 35690, Gr = 36289, Yr = 36292, Hr = 36293, Vt = 5125, ge = 36294, Re = 36295, Ne = 36296, Wr = 36298, qr = 36299, jr = 36300, Xr = 36303, Kr = 36306, Zr = 36307, Jr = 36308, Qr = 36311, pt = 3553, At = 34067, Lt = 32879, mt = 35866, A = {};
function Pe(e, t) {
  return A[t].bindPoint;
}
function dr(e, t) {
  return function(n) {
    e.uniform1f(t, n);
  };
}
function ti(e, t) {
  return function(n) {
    e.uniform1fv(t, n);
  };
}
function ei(e, t) {
  return function(n) {
    e.uniform2fv(t, n);
  };
}
function ni(e, t) {
  return function(n) {
    e.uniform3fv(t, n);
  };
}
function ri(e, t) {
  return function(n) {
    e.uniform4fv(t, n);
  };
}
function ve(e, t) {
  return function(n) {
    e.uniform1i(t, n);
  };
}
function De(e, t) {
  return function(n) {
    e.uniform1iv(t, n);
  };
}
function Fe(e, t) {
  return function(n) {
    e.uniform2iv(t, n);
  };
}
function ze(e, t) {
  return function(n) {
    e.uniform3iv(t, n);
  };
}
function Ue(e, t) {
  return function(n) {
    e.uniform4iv(t, n);
  };
}
function ii(e, t) {
  return function(n) {
    e.uniform1ui(t, n);
  };
}
function oi(e, t) {
  return function(n) {
    e.uniform1uiv(t, n);
  };
}
function si(e, t) {
  return function(n) {
    e.uniform2uiv(t, n);
  };
}
function ci(e, t) {
  return function(n) {
    e.uniform3uiv(t, n);
  };
}
function fi(e, t) {
  return function(n) {
    e.uniform4uiv(t, n);
  };
}
function ui(e, t) {
  return function(n) {
    e.uniformMatrix2fv(t, !1, n);
  };
}
function ai(e, t) {
  return function(n) {
    e.uniformMatrix3fv(t, !1, n);
  };
}
function hi(e, t) {
  return function(n) {
    e.uniformMatrix4fv(t, !1, n);
  };
}
function li(e, t) {
  return function(n) {
    e.uniformMatrix2x3fv(t, !1, n);
  };
}
function yi(e, t) {
  return function(n) {
    e.uniformMatrix3x2fv(t, !1, n);
  };
}
function xi(e, t) {
  return function(n) {
    e.uniformMatrix2x4fv(t, !1, n);
  };
}
function pi(e, t) {
  return function(n) {
    e.uniformMatrix4x2fv(t, !1, n);
  };
}
function Ai(e, t) {
  return function(n) {
    e.uniformMatrix3x4fv(t, !1, n);
  };
}
function mi(e, t) {
  return function(n) {
    e.uniformMatrix4x3fv(t, !1, n);
  };
}
function F(e, t, n, r) {
  const i = Pe(e, t);
  return Ft(e) ? function(o) {
    let s, c;
    !o || oe(e, o) ? (s = o, c = null) : (s = o.texture, c = o.sampler), e.uniform1i(r, n), e.activeTexture(lt + n), e.bindTexture(i, s), e.bindSampler(n, c);
  } : function(o) {
    e.uniform1i(r, n), e.activeTexture(lt + n), e.bindTexture(i, o);
  };
}
function z(e, t, n, r, i) {
  const o = Pe(e, t), s = new Int32Array(i);
  for (let c = 0; c < i; ++c)
    s[c] = n + c;
  return Ft(e) ? function(c) {
    e.uniform1iv(r, s), c.forEach(function(f, u) {
      e.activeTexture(lt + s[u]);
      let h, a;
      !f || oe(e, f) ? (h = f, a = null) : (h = f.texture, a = f.sampler), e.bindSampler(n, a), e.bindTexture(o, h);
    });
  } : function(c) {
    e.uniform1iv(r, s), c.forEach(function(f, u) {
      e.activeTexture(lt + s[u]), e.bindTexture(o, f);
    });
  };
}
A[xt] = { Type: Float32Array, size: 4, setter: dr, arraySetter: ti };
A[xe] = { Type: Float32Array, size: 8, setter: ei, cols: 2 };
A[pe] = { Type: Float32Array, size: 12, setter: ni, cols: 3 };
A[Ae] = { Type: Float32Array, size: 16, setter: ri, cols: 4 };
A[Ut] = { Type: Int32Array, size: 4, setter: ve, arraySetter: De };
A[me] = { Type: Int32Array, size: 8, setter: Fe, cols: 2 };
A[Te] = { Type: Int32Array, size: 12, setter: ze, cols: 3 };
A[Se] = { Type: Int32Array, size: 16, setter: Ue, cols: 4 };
A[Vt] = { Type: Uint32Array, size: 4, setter: ii, arraySetter: oi };
A[ge] = { Type: Uint32Array, size: 8, setter: si, cols: 2 };
A[Re] = { Type: Uint32Array, size: 12, setter: ci, cols: 3 };
A[Ne] = { Type: Uint32Array, size: 16, setter: fi, cols: 4 };
A[Ee] = { Type: Uint32Array, size: 4, setter: ve, arraySetter: De };
A[be] = { Type: Uint32Array, size: 8, setter: Fe, cols: 2 };
A[we] = { Type: Uint32Array, size: 12, setter: ze, cols: 3 };
A[Ie] = { Type: Uint32Array, size: 16, setter: Ue, cols: 4 };
A[Be] = { Type: Float32Array, size: 32, setter: ui, rows: 2, cols: 2 };
A[_e] = { Type: Float32Array, size: 48, setter: ai, rows: 3, cols: 3 };
A[Me] = { Type: Float32Array, size: 64, setter: hi, rows: 4, cols: 4 };
A[Vr] = { Type: Float32Array, size: 32, setter: li, rows: 2, cols: 3 };
A[Lr] = { Type: Float32Array, size: 32, setter: xi, rows: 2, cols: 4 };
A[Cr] = { Type: Float32Array, size: 48, setter: yi, rows: 3, cols: 2 };
A[Or] = { Type: Float32Array, size: 48, setter: Ai, rows: 3, cols: 4 };
A[kr] = { Type: Float32Array, size: 64, setter: pi, rows: 4, cols: 2 };
A[$r] = { Type: Float32Array, size: 64, setter: mi, rows: 4, cols: 3 };
A[Dr] = { Type: null, size: 0, setter: F, arraySetter: z, bindPoint: pt };
A[Fr] = { Type: null, size: 0, setter: F, arraySetter: z, bindPoint: At };
A[zr] = { Type: null, size: 0, setter: F, arraySetter: z, bindPoint: Lt };
A[Ur] = { Type: null, size: 0, setter: F, arraySetter: z, bindPoint: pt };
A[Gr] = { Type: null, size: 0, setter: F, arraySetter: z, bindPoint: mt };
A[Yr] = { Type: null, size: 0, setter: F, arraySetter: z, bindPoint: mt };
A[Hr] = { Type: null, size: 0, setter: F, arraySetter: z, bindPoint: At };
A[Wr] = { Type: null, size: 0, setter: F, arraySetter: z, bindPoint: pt };
A[qr] = { Type: null, size: 0, setter: F, arraySetter: z, bindPoint: Lt };
A[jr] = { Type: null, size: 0, setter: F, arraySetter: z, bindPoint: At };
A[Xr] = { Type: null, size: 0, setter: F, arraySetter: z, bindPoint: mt };
A[Kr] = { Type: null, size: 0, setter: F, arraySetter: z, bindPoint: pt };
A[Zr] = { Type: null, size: 0, setter: F, arraySetter: z, bindPoint: Lt };
A[Jr] = { Type: null, size: 0, setter: F, arraySetter: z, bindPoint: At };
A[Qr] = { Type: null, size: 0, setter: F, arraySetter: z, bindPoint: mt };
function Tt(e, t) {
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
      e.bindBuffer(yt, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribPointer(
        t,
        n.numComponents || n.size,
        n.type || xt,
        n.normalize || !1,
        n.stride || 0,
        n.offset || 0
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t, n.divisor || 0);
  };
}
function Q(e, t) {
  return function(n) {
    if (n.value)
      if (e.disableVertexAttribArray(t), n.value.length === 4)
        e.vertexAttrib4iv(t, n.value);
      else
        throw new Error("The length of an integer constant value must be 4!");
    else
      e.bindBuffer(yt, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribIPointer(
        t,
        n.numComponents || n.size,
        n.type || Ut,
        n.stride || 0,
        n.offset || 0
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t, n.divisor || 0);
  };
}
function St(e, t) {
  return function(n) {
    if (n.value)
      if (e.disableVertexAttribArray(t), n.value.length === 4)
        e.vertexAttrib4uiv(t, n.value);
      else
        throw new Error("The length of an unsigned integer constant value must be 4!");
    else
      e.bindBuffer(yt, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribIPointer(
        t,
        n.numComponents || n.size,
        n.type || Vt,
        n.stride || 0,
        n.offset || 0
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t, n.divisor || 0);
  };
}
function Ct(e, t, n) {
  const r = n.size, i = n.count;
  return function(o) {
    e.bindBuffer(yt, o.buffer);
    const s = o.size || o.numComponents || r, c = s / i, f = o.type || xt, h = A[f].size * s, a = o.normalize || !1, l = o.offset || 0, x = h / i;
    for (let p = 0; p < i; ++p)
      e.enableVertexAttribArray(t + p), e.vertexAttribPointer(
        t + p,
        c,
        f,
        a,
        h,
        l + x * p
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t + p, o.divisor || 0);
  };
}
const B = {};
B[xt] = { size: 4, setter: Tt };
B[xe] = { size: 8, setter: Tt };
B[pe] = { size: 12, setter: Tt };
B[Ae] = { size: 16, setter: Tt };
B[Ut] = { size: 4, setter: Q };
B[me] = { size: 8, setter: Q };
B[Te] = { size: 12, setter: Q };
B[Se] = { size: 16, setter: Q };
B[Vt] = { size: 4, setter: St };
B[ge] = { size: 8, setter: St };
B[Re] = { size: 12, setter: St };
B[Ne] = { size: 16, setter: St };
B[Ee] = { size: 4, setter: Q };
B[be] = { size: 8, setter: Q };
B[we] = { size: 12, setter: Q };
B[Ie] = { size: 16, setter: Q };
B[Be] = { size: 4, setter: Ct, count: 2 };
B[_e] = { size: 9, setter: Ct, count: 3 };
B[Me] = { size: 16, setter: Ct, count: 4 };
const Ti = /ERROR:\s*\d+:(\d+)/gi;
function Si(e, t = "", n = 0) {
  const r = [...t.matchAll(Ti)], i = new Map(r.map((o, s) => {
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
function Ve(e) {
  let t = 0;
  return qt.test(e) && (t = 1, e = e.replace(qt, "")), { lineOffset: t, shaderSource: e };
}
function Ei(e, t) {
  return e.errorCallback(t), e.callback && setTimeout(() => {
    e.callback(`${t}
${e.errors.join(`
`)}`);
  }), null;
}
function bi(e, t, n, r) {
  if (r = r || zt, !e.getShaderParameter(n, Er)) {
    const o = e.getShaderInfoLog(n), { lineOffset: s, shaderSource: c } = Ve(e.getShaderSource(n)), f = `${Si(c, o, s)}
Error compiling ${Tr(e, t)}: ${o}`;
    return r(f), f;
  }
  return "";
}
function Ot(e, t, n) {
  let r, i, o;
  if (typeof t == "function" && (n = t, t = void 0), typeof e == "function")
    n = e, e = void 0;
  else if (e && !Array.isArray(e)) {
    const u = e;
    n = u.errorCallback, e = u.attribLocations, r = u.transformFeedbackVaryings, i = u.transformFeedbackMode, o = u.callback;
  }
  const s = n || zt, c = [], f = {
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
function Ii(e, t) {
  if (t.indexOf("frag") >= 0)
    return wr;
  if (t.indexOf("vert") >= 0)
    return Ir;
}
function Bi(e, t, n) {
  const r = e.getAttachedShaders(t);
  for (const i of r)
    n.has(i) && e.deleteShader(i);
  e.deleteProgram(t);
}
const _i = (e = 0) => new Promise((t) => setTimeout(t, e));
function Mi(e, t, n) {
  const r = e.createProgram(), {
    attribLocations: i,
    transformFeedbackVaryings: o,
    transformFeedbackMode: s
  } = Ot(n);
  for (let c = 0; c < t.length; ++c) {
    let f = t[c];
    if (typeof f == "string") {
      const u = le(f), h = u ? u.text : f;
      let a = e[wi[c]];
      u && u.type && (a = Ii(e, u.type) || a), f = e.createShader(a), e.shaderSource(f, Ve(h).shaderSource), e.compileShader(f), e.attachShader(r, f);
    }
  }
  Object.entries(i).forEach(([c, f]) => e.bindAttribLocation(r, f, c));
  {
    let c = o;
    c && (c.attribs && (c = c.attribs), Array.isArray(c) || (c = Object.keys(c)), e.transformFeedbackVaryings(r, c, s || Br));
  }
  return e.linkProgram(r), r;
}
function gi(e, t, n, r, i) {
  const o = Ot(n, r, i), s = new Set(t), c = Mi(e, t, o);
  function f(u, h) {
    const a = Ni(u, h, o.errorCallback);
    return a && Bi(u, h, s), a;
  }
  if (o.callback) {
    Ri(e, c).then(() => {
      const u = f(e, c);
      o.callback(u, u ? void 0 : c);
    });
    return;
  }
  return f(e, c) ? void 0 : c;
}
async function Ri(e, t) {
  const n = e.getExtension("KHR_parallel_shader_compile"), r = n ? (o, s) => o.getProgramParameter(s, n.COMPLETION_STATUS_KHR) : () => !0;
  let i = 0;
  do
    await _i(i), i = 1e3 / 60;
  while (!r(e, t));
}
function Ni(e, t, n) {
  if (n = n || zt, !e.getProgramParameter(t, br)) {
    const i = e.getProgramInfoLog(t);
    n(`Error in program linking: ${i}`);
    const s = e.getAttachedShaders(t).map((c) => bi(e, e.getShaderParameter(c, e.SHADER_TYPE), c, n));
    return `${i}
${s.filter((c) => c).join(`
`)}`;
  }
}
function Pi(e, t, n, r, i) {
  return gi(e, t, n, r, i);
}
function Le(e) {
  const t = e.name;
  return t.startsWith("gl_") || t.startsWith("webgl_");
}
const vi = /(\.|\[|]|\w+)/g, Di = (e) => e >= "0" && e <= "9";
function Fi(e, t, n, r) {
  const i = e.split(vi).filter((c) => c !== "");
  let o = 0, s = "";
  for (; ; ) {
    const c = i[o++];
    s += c;
    const f = Di(c[0]), u = f ? parseInt(c) : c;
    if (f && (s += i[o++]), o === i.length) {
      n[u] = t;
      break;
    } else {
      const a = i[o++], l = a === "[", x = n[u] || (l ? [] : {});
      n[u] = x, n = x, r[s] = r[s] || function(p) {
        return function(m) {
          Ce(p, m);
        };
      }(x), s += a;
    }
  }
}
function zi(e, t) {
  let n = 0;
  function r(c, f, u) {
    const h = f.name.endsWith("[0]"), a = f.type, l = A[a];
    if (!l)
      throw new Error(`unknown type: 0x${a.toString(16)}`);
    let x;
    if (l.bindPoint) {
      const p = n;
      n += f.size, h ? x = l.arraySetter(e, a, p, u, f.size) : x = l.setter(e, a, p, u, f.size);
    } else
      l.arraySetter && h ? x = l.arraySetter(e, u) : x = l.setter(e, u);
    return x.location = u, x;
  }
  const i = {}, o = {}, s = e.getProgramParameter(t, ye);
  for (let c = 0; c < s; ++c) {
    const f = e.getActiveUniform(t, c);
    if (Le(f))
      continue;
    let u = f.name;
    u.endsWith("[0]") && (u = u.substr(0, u.length - 3));
    const h = e.getUniformLocation(t, f.name);
    if (h) {
      const a = r(t, f, h);
      i[u] = a, Fi(u, a, o, i);
    }
  }
  return i;
}
function Ui(e, t) {
  const n = {}, r = e.getProgramParameter(t, Mr);
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
function Vi(e, t) {
  const n = e.getProgramParameter(t, ye), r = [], i = [];
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
  const o = {}, s = e.getProgramParameter(t, gr);
  for (let c = 0; c < s; ++c) {
    const f = e.getActiveUniformBlockName(t, c), u = {
      index: e.getUniformBlockIndex(t, f),
      usedByVertexShader: e.getActiveUniformBlockParameter(t, c, Rr),
      usedByFragmentShader: e.getActiveUniformBlockParameter(t, c, Nr),
      size: e.getActiveUniformBlockParameter(t, c, Pr),
      uniformIndices: e.getActiveUniformBlockParameter(t, c, vr)
    };
    u.used = u.usedByVertexShader || u.usedByFragmentShader, o[f] = u;
  }
  return {
    blockSpecs: o,
    uniformData: r
  };
}
function Ce(e, t) {
  for (const n in t) {
    const r = e[n];
    typeof r == "function" ? r(t[n]) : Ce(e[n], t[n]);
  }
}
function Et(e, ...t) {
  const n = e.uniformSetters || e, r = t.length;
  for (let i = 0; i < r; ++i) {
    const o = t[i];
    if (Array.isArray(o)) {
      const s = o.length;
      for (let c = 0; c < s; ++c)
        Et(n, o[c]);
    } else
      for (const s in o) {
        const c = n[s];
        c && c(o[s]);
      }
  }
}
function Li(e, t) {
  const n = {}, r = e.getProgramParameter(t, _r);
  for (let i = 0; i < r; ++i) {
    const o = e.getActiveAttrib(t, i);
    if (Le(o))
      continue;
    const s = e.getAttribLocation(t, o.name), c = B[o.type], f = c.setter(e, s, c);
    f.location = s, n[o.name] = f;
  }
  return n;
}
function Ci(e, t) {
  for (const n in t) {
    const r = e[n];
    r && r(t[n]);
  }
}
function Oe(e, t, n) {
  n.vertexArrayObject ? e.bindVertexArray(n.vertexArrayObject) : (Ci(t.attribSetters || t, n.attribs), n.indices && e.bindBuffer(Sr, n.indices));
}
function jt(e, t) {
  const n = zi(e, t), r = Li(e, t), i = {
    program: t,
    uniformSetters: n,
    attribSetters: r
  };
  return Ft(e) && (i.uniformBlockSpec = Vi(e, t), i.transformFeedbackInfo = Ui(e, t)), i;
}
const Oi = /\s|{|}|;/;
function ki(e, t, n, r, i) {
  const o = Ot(n, r, i), s = [];
  if (t = t.map(function(u) {
    if (!Oi.test(u)) {
      const h = le(u);
      if (h)
        u = h.text;
      else {
        const a = `no element with id: ${u}`;
        o.errorCallback(a), s.push(a);
      }
    }
    return u;
  }), s.length)
    return Ei(o, "");
  const c = o.callback;
  c && (o.callback = (u, h) => {
    c(u, u ? void 0 : jt(e, h));
  });
  const f = Pi(e, t, o);
  return f ? jt(e, f) : null;
}
const $i = 4, Xt = 5123;
function ke(e, t, n, r, i, o) {
  n = n === void 0 ? $i : n;
  const s = t.indices, c = t.elementType, f = r === void 0 ? t.numElements : r;
  i = i === void 0 ? 0 : i, c || s ? o !== void 0 ? e.drawElementsInstanced(n, f, c === void 0 ? Xt : t.elementType, i, o) : e.drawElements(n, f, c === void 0 ? Xt : t.elementType, i) : o !== void 0 ? e.drawArraysInstanced(n, i, f, o) : e.drawArrays(n, i, f);
}
function Gi(e, t) {
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
class U {
  constructor(t, n) {
    y(this, "pos");
    y(this, "color");
    this.pos = t, this.color = n;
  }
}
class Bt {
  constructor(t, n) {
    y(this, "positions");
    // 8 bytes per vertex
    y(this, "colors");
    // 4 bytes per vertex
    y(this, "indices");
    y(this, "bufferInfo");
    y(this, "currentVertices", 0);
    y(this, "currentIndices", 0);
    y(this, "vertexCapacity", 0);
    y(this, "indexCapacity", 0);
    if (n.positions && n.colors && n.indices)
      this.positions = n.positions, this.colors = n.colors, this.indices = n.indices;
    else if (n.numVertices)
      this.positions = new Float32Array(n.numVertices * 2), this.colors = new Uint8Array(n.numVertices * 4), this.indices = new Uint16Array(n.numIndices ? n.numIndices : n.numVertices * 3);
    else
      throw new Error("Invalid BufferDataOptions! Must provide positions, colors, and indices arrays, or specify numVertices");
    this.vertexCapacity = this.positions.length / 2, this.indexCapacity = this.indices.length;
    const i = (n.type ? n.type : "dynamic") === "dynamic" ? t.DYNAMIC_DRAW : t.STATIC_DRAW;
    this.bufferInfo = mr(t, {
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
const w = class w {
  constructor(t, n) {
    y(this, "x");
    y(this, "y");
    this.x = t, this.y = n;
  }
  add(t, n) {
    return t instanceof w ? (this.x += t.x, this.y += t.y) : n ? (this.x += t, this.y += n) : (this.x += t, this.y += t), this;
  }
  static add(t, n) {
    return new w(t.x + n.x, t.y + n.y);
  }
  mult(t, n) {
    return t instanceof w ? (this.x *= t.x, this.y *= t.y) : n ? (this.x *= t, this.y *= n) : (this.x *= t, this.y *= t), this;
  }
  static mult(t, n) {
    return n instanceof w ? new w(t.x * n.x, t.y * n.y) : new w(t.x * n, t.y * n);
  }
  sub(t, n) {
    return t instanceof w ? (this.x -= t.x, this.y -= t.y) : n ? (this.x -= t, this.y -= n) : (this.x -= t, this.y -= t), this;
  }
  static sub(t, n) {
    return new w(t.x - n.x, t.y - n.y);
  }
  div(t, n) {
    return t instanceof w ? (this.x /= t.x, this.y /= t.y) : n ? (this.x /= t, this.y /= n) : (this.x /= t, this.y /= t), this;
  }
  static div(t, n) {
    return new w(t.x / n.x, t.y / n.y);
  }
  set(t, n) {
    return t instanceof w ? (this.x = t.x, this.y = t.y) : n ? (this.x = t, this.y = n) : (this.x = t, this.y = t), this;
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
    return new w(this.x, this.y);
  }
};
y(w, "zero", () => new w(0, 0)), y(w, "up", () => new w(0, -1)), y(w, "down", () => new w(0, 1)), y(w, "left", () => new w(-1, 0)), y(w, "right", () => new w(1, 0));
let R = w;
class $e {
  constructor() {
    y(this, "translation");
    y(this, "rotation");
    y(this, "scaling");
    y(this, "transformed", !1);
    this.translation = new R(0, 0), this.rotation = 0, this.scaling = new R(1, 1);
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
    this.translation = new R(0, 0), this.rotation = 0, this.scaling = new R(1, 1), this.transformed = !1;
  }
  transformVertices(t) {
    return this.transformed ? t.map((n) => new U(n.pos.copy().rotate(this.rotation).mult(this.scaling).add(this.translation), n.color)) : t;
  }
  getMatrix() {
    return J.translate(J.scale(J.rotateZ(J.identity(), this.rotation), [this.scaling.x, this.scaling.y, 1]), [
      this.translation.x,
      this.translation.y,
      0
    ]);
  }
}
class Ge {
  constructor(t) {
    y(this, "gl");
    y(this, "id", -1);
    y(this, "transform");
    this.gl = t, this.transform = new $e();
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
class Yi extends Ge {
  constructor(n, r) {
    super(n);
    y(this, "buffers", []);
    y(this, "bufferSize");
    y(this, "currentBufferIndex", -1);
    this.bufferSize = r.bufferSize | 1e4, this.addBuffer();
  }
  addVerticesAndIndices(n, r) {
    (this.buffers[this.currentBufferIndex].currentIndices + r.length >= this.buffers[this.currentBufferIndex].indexCapacity || this.buffers[this.currentBufferIndex].currentVertices + n.length >= this.buffers[this.currentBufferIndex].vertexCapacity) && this.changeBuffer(), this.addIndices(r), this.addVertices(n);
  }
  update() {
    this.buffers[this.currentBufferIndex].fill(), this.buffers[this.currentBufferIndex].updateBufferData(this.gl);
  }
  render(n) {
    Et(n, {
      modelMatrix: this.transform.getMatrix()
    });
    for (let r = 0; r <= this.currentBufferIndex; r++)
      Oe(this.gl, n, this.buffers[r].bufferInfo), ke(this.gl, this.buffers[r].bufferInfo, this.gl.TRIANGLES, this.buffers[r].currentIndices);
  }
  reset() {
    this.currentBufferIndex = 0;
    for (const n of this.buffers)
      n.resetCount();
  }
  addBuffer() {
    this.currentBufferIndex++, this.buffers.push(new Bt(this.gl, { numVertices: this.bufferSize }));
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
function tt(e, t, n, r, i) {
  return r + (e - t) * ((i - r) / (n - t));
}
function at(e, t, n) {
  const r = e.pos, i = t.pos, o = Math.atan2(i.y - r.y, i.x - r.x), s = Math.cos(o), c = Math.sin(o), f = r.x - n / 2 * c, u = r.y + n / 2 * s, h = r.x + n / 2 * c, a = r.y - n / 2 * s;
  return [new U(new R(f, u), e.color), new U(new R(h, a), e.color)];
}
function Zt(e, t, n, r) {
  let i = e.pos.x, o = e.pos.y, s = t.pos.x, c = t.pos.y, f = n.pos.x, u = n.pos.y;
  const h = o - c, a = i - s, l = o * (i - s) - i * (o - c), x = c - u, p = s - f, m = c * (s - f) - s * (c - u), E = r / 2 * Math.sqrt(h * h + a * a) - l, S = r / 2 * Math.sqrt(h * h + a * a) + l, T = r / 2 * Math.sqrt(x * x + p * p) - m, _ = r / 2 * Math.sqrt(x * x + p * p) + m, M = (a * T - p * E) / (h * p - x * a), g = (x * E - h * T) / (h * p - x * a), P = (a * _ - p * S) / (h * p - x * a), D = (x * S - h * _) / (h * p - x * a);
  return [new U(new R(-M, g), t.color), new U(new R(P, -D), t.color)];
}
function qi(e, t, n) {
  return new et(e, t, n);
}
function Hi(e, t, n, r = 255) {
  return new et(e, t, n, r);
}
const I = class I {
  constructor(t, n, r, i = 255) {
    y(this, "r");
    y(this, "g");
    y(this, "b");
    y(this, "a");
    this.r = t, this.g = n, this.b = r, this.a = i;
  }
  /**
   * Returns an array of the colour values [r, g, b, a]
   * @returns
   */
  array() {
    return [this.r, this.g, this.b, this.a];
  }
  /**
   * Converts the color to a hex value
   * @param color The color to convert to hex
   * @returns The hex value
   */
  static toHex(t) {
    return "#" + (1 << 24 | t.r << 16 | t.g << 8 | t.b).toString(16).slice(1);
  }
  /**
   * Creates a Color object from a hex value
   * @param hex The hex value of the colour
   * @param alpha The alpha value of the colour
   * @returns A Color Object
   */
  static fromHex(t, n = 255) {
    const r = parseInt(t.slice(1), 16), i = r >> 16 & 255, o = r >> 8 & 255, s = r & 255;
    return Hi(i, o, s, n);
  }
  /**
   * Interpolates between two colors
   * @param color1 the first color
   * @param color2 the second color
   * @param t amount to interpolate by (a number between 0 and 1)
   * @returns The interpolated color
   */
  static interpolate(t, n, r) {
    return new I(
      tt(r, 0, 1, t.r, n.r),
      tt(r, 0, 1, t.g, n.g),
      tt(r, 0, 1, t.b, n.b),
      tt(r, 0, 1, t.a, n.a)
    );
  }
};
y(I, "WHITE", new I(255, 255, 255)), y(I, "BLACK", new I(0, 0, 0)), y(I, "RED", new I(255, 0, 0)), y(I, "GREEN", new I(0, 255, 0)), y(I, "BLUE", new I(0, 0, 255)), y(I, "YELLOW", new I(255, 255, 0)), y(I, "MAGENTA", new I(255, 0, 255)), y(I, "CYAN", new I(0, 255, 255)), y(I, "TRANSPARENT", new I(0, 0, 0, 0));
let et = I;
class ji {
  /**
   * @param options Options for the renderer
   */
  constructor(t) {
    /** The HTML canvas element */
    y(this, "canvas");
    /** The WebGL Rendering Context */
    y(this, "gl");
    /** The global transform */
    y(this, "transform");
    y(this, "shaderProgramInfo");
    y(this, "buffers", []);
    y(this, "currentBufferIndex", 0);
    y(this, "currentPath", []);
    t.canvas ? this.canvas = t.canvas : (this.canvas = document.createElement("canvas"), this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, document.body.appendChild(this.canvas));
    let n = null;
    if ((t.webglVersion === 2 || !t.webglVersion) && (n = this.canvas.getContext("webgl2"), n || console.warn("WebGL 2 not supported, falling back to WebGL 1")), (!n || t.webglVersion === 1) && (n = this.canvas.getContext("webgl")), !n)
      throw new Error("WebGL not supported");
    this.gl = n, this.shaderProgramInfo = ki(this.gl, [Kt.vertexShader, Kt.fragmentShader]), this.gl.enable(this.gl.BLEND), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE), Gi(this.gl.canvas), this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.setBuffer(new Yi(this.gl, { bufferSize: 1e3 })), this.transform = new $e();
  }
  /**
   * Resizes the canvas to the specified width and height
   * @param width
   * @param height
   */
  resizeCanvas(t, n) {
    this.canvas.width = t, this.canvas.height = n, this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
  }
  /**
   * Sets the current buffer to draw to
   * @param buffer The buffer to draw to
   */
  setBuffer(t) {
    if (t === 0) {
      this.currentBufferIndex = 0;
      return;
    }
    t.id === -1 && (t.id = this.buffers.length, this.buffers.push(t)), this.currentBufferIndex = t.id;
  }
  /**
   * Clears the screen with the specified color
   * @param color The clear color
   */
  clear(t = new et(0, 0, 0, 255)) {
    this.gl.clearColor(t.r / 255, t.g / 255, t.b / 255, t.a / 255), this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
  }
  /**
   * Draws a line. *Note:* This method does not need there to be a current active path.
   * @param startPos Starting position of the line
   * @param endPos Ending position of the line
   * @param width Width of the line
   * @param color Color of the line
   */
  line(t, n, r, i) {
    const o = new U(t, i), s = new U(n, i);
    this.buffers[this.currentBufferIndex].addVerticesAndIndices(
      this.transform.transformVertices([...at(o, s, r), ...at(s, o, r)]),
      [0, 1, 2, 0, 2, 3]
    );
  }
  path(t, n, r = !1) {
    const i = [], o = [], s = t[0], c = t[1];
    r ? i.push(...Zt(t[t.length - 1], s, c, n)) : i.push(...at(s, c, n));
    for (let f = 0; f < t.length - (r ? 1 : 2); f++)
      o.push(0 + f * 2, 1 + f * 2, 2 + f * 2, 1 + f * 2, 2 + f * 2, 3 + f * 2), i.push(...Zt(t[f], t[f + 1], t[(f + 2) % t.length], n));
    if (r) {
      const f = i.length - 2;
      o.push(f, f + 1, 0, f + 1, 0, 1);
    } else {
      const f = i.length - 2;
      o.push(f + 0, f + 1, f + 2, f + 0, f + 2, f + 3), i.push(...at(t[t.length - 1], t[t.length - 2], n));
    }
    this.buffers[this.currentBufferIndex].addVerticesAndIndices(this.transform.transformVertices(i), o);
  }
  /**
   * Starts a new path by clearing everything in the current path. Call this before using any drawing methods.
   */
  beginPath() {
    this.currentPath = [];
  }
  vertex(t, n) {
    t instanceof U ? this.currentPath.push(t) : n && this.currentPath.push(new U(t, n));
  }
  vertices(t, n) {
    t[0] instanceof U ? this.currentPath = [...this.currentPath, ...t] : n && (this.currentPath = [...this.currentPath, ...t.map((r) => new U(r, n))]);
  }
  /**
   * Draws an arc (to the current path). For a circle, set `startAngle` to `0` and `endAngle` to `Math.PI * 2`
   * @param pos The center of the arc
   * @param radius The radius of the arc
   * @param startAngle The starting angle of the arc
   * @param endAngle The ending angle of the arc
   * @param color The color of the arc
   */
  arc(t, n, r, i, o) {
    const c = (i - r) / 40, f = [];
    for (let u = 0; u <= 40; u++) {
      const h = r + c * u;
      f.push(new U(new R(t.x + n * Math.cos(h), t.y + n * Math.sin(h)), o));
    }
    this.currentPath.push(...f);
  }
  /**
   * Draws a rectangle (to the current path).
   * @param pos The position of the top left corner of the rectangle
   * @param size The size (width and height) of the rectangle
   * @param color The color of the rectangle
   */
  rect(t, n, r) {
    const i = [t, new R(t.x + n.x, t.y), new R(t.x + n.y, t.y + n.y), new R(t.x, t.y + n.y)];
    this.currentPath.push(...i.map((o) => new U(o, r)));
  }
  /**
   * Strokes (outlines) everything in the current path since the last `beginPath()` call with the specified width and options.
   * @param width The stroke width
   * @param options Options for the stroke
   */
  strokePath(t, { closed: n = !1, dashed: r = !1, dashLength: i = 10 } = {}) {
    if (!r) {
      this.path(this.currentPath, t, n);
      return;
    }
    let o = null;
    const s = n ? this.currentPath.length + 1 : this.currentPath.length;
    for (let c = 0; c < s; c++) {
      const f = this.currentPath[c % this.currentPath.length], u = this.currentPath[(c + 1) % this.currentPath.length], h = f.pos.dist(u.pos), a = Math.floor(h / i), l = h / a;
      let x = this.currentPath[c];
      const p = u.pos.copy().sub(f.pos);
      for (let m = 1; m < a; m++) {
        const E = f.pos.copy().add(p.copy().setMag(l * m));
        let S = new U(E, et.interpolate(f.color, u.color, m / a));
        if (m === 1 && o && (this.path([o, f, S], t), c === s - 1))
          break;
        m % 2 === 0 && this.path([x, S], t), x = S;
      }
      o = x;
    }
  }
  /**
   * Fills everything in the current path since the last `beginPath()` call with the specified color.
   */
  fillPath() {
    const t = [];
    for (let n = 1; n < this.currentPath.length - 1; n++)
      t.push(0, n, n + 1);
    this.buffers[this.currentBufferIndex].addVerticesAndIndices(this.transform.transformVertices(this.currentPath), t);
  }
  /**
   * The main render function. Call this every frame once to render everything.
   * @param camera The camera to render with
   */
  render(t) {
    this.buffers[0].update();
    const n = {
      resolution: [this.gl.canvas.width, this.gl.canvas.height],
      viewProjectionMatrix: t ? t.getMatrix() : J.identity()
    };
    this.gl.useProgram(this.shaderProgramInfo.program), Et(this.shaderProgramInfo, n);
    for (const r of this.buffers)
      r.render(this.shaderProgramInfo);
    this.buffers[0].reset();
  }
  /**
   * Returns the size of the canvas
   */
  getDisplaySize() {
    return new R(this.canvas.width, this.canvas.height);
  }
}
class Xi extends Ge {
  constructor(n) {
    super(n);
    y(this, "buffer");
    y(this, "tempVertices", []);
    y(this, "tempIndices", []);
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
        this.gl.deleteBuffer(this.buffer.bufferInfo.indices), this.buffer = new Bt(this.gl, {
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
      this.buffer = new Bt(this.gl, {
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
    Et(n, {
      modelMatrix: this.transform.getMatrix()
    }), Oe(this.gl, n, this.buffer.bufferInfo), ke(this.gl, this.buffer.bufferInfo, this.gl.TRIANGLES, this.buffer.currentIndices);
  }
}
class Ki {
  constructor(t) {
    y(this, "zoom", 1);
    y(this, "pos", new R(0, 0));
    y(this, "displaySize", new R(0, 0));
    y(this, "aspect", 1);
    // Aspect ratio
    y(this, "matrix", J.identity());
    this.setDisplaySize(t);
  }
  /**
   * Translates the camera
   * @param delta The amount to translate the camera by
   */
  translate(t) {
    this.pos = this.pos.add(t), this.calculateMatrix();
  }
  /**
   * Sets the zoom level of the camera
   * @param zoom The zoom level of the camera
   */
  setZoom(t) {
    this.zoom = t, this.calculateMatrix();
  }
  /**
   * Sets the display size of the camera. Must be called whenever the canvas is resized.
   * @param displaySize The display size of the camera
   */
  setDisplaySize(t) {
    this.displaySize = t, this.calculateAspectRatio(), this.calculateMatrix();
  }
  calculateAspectRatio() {
    this.aspect = this.displaySize.x / this.displaySize.y;
  }
  calculateMatrix() {
    const t = this.displaySize.y / this.zoom;
    this.matrix = J.translate(
      J.ortho(-this.aspect * t, this.aspect * t, 1 * t, -1 * t, -1, 1),
      un.create(-this.pos.x, -this.pos.y)
    );
  }
  /**
   * Converts a vector (position) in screen space into world space
   * @param vector
   * @returns The Vector converted to World space
   */
  screenSpaceToWorldSpace(t) {
    const n = window.innerHeight / this.zoom, r = tt(t.x, 0, window.innerWidth, -this.aspect * n, this.aspect * n) + this.pos.x, i = tt(t.y, 0, window.innerHeight, -1 * n, 1 * n) + this.pos.y;
    return new R(r, i);
  }
  /**
   * Returns the camera matrix
   * @returns The camera matrix
   */
  getMatrix() {
    return this.matrix;
  }
}
export {
  Ge as Buffer,
  Bt as BufferData,
  Ki as Camera,
  et as Color,
  Yi as DynamicBuffer,
  qi as RGB,
  Hi as RGBA,
  ji as Renderer,
  Xi as StaticBuffer,
  $e as Transform,
  R as Vector,
  U as Vertex
};
