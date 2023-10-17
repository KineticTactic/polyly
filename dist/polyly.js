var Ge = Object.defineProperty;
var He = (e, t, n) => t in e ? Ge(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var p = (e, t, n) => (He(e, typeof t != "symbol" ? t + "" : t, n), n);
/* @license twgl.js 5.5.3 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */
let R = Float32Array;
function Ye(e) {
  const t = R;
  return R = e, t;
}
function X(e, t, n) {
  const r = new R(3);
  return e && (r[0] = e), t && (r[1] = t), n && (r[2] = n), r;
}
function We(e, t, n) {
  return n = n || new R(3), n[0] = e[0] + t[0], n[1] = e[1] + t[1], n[2] = e[2] + t[2], n;
}
function Zt(e, t, n) {
  return n = n || new R(3), n[0] = e[0] - t[0], n[1] = e[1] - t[1], n[2] = e[2] - t[2], n;
}
function qe(e, t, n, r) {
  return r = r || new R(3), r[0] = e[0] + n * (t[0] - e[0]), r[1] = e[1] + n * (t[1] - e[1]), r[2] = e[2] + n * (t[2] - e[2]), r;
}
function je(e, t, n, r) {
  return r = r || new R(3), r[0] = e[0] + n[0] * (t[0] - e[0]), r[1] = e[1] + n[1] * (t[1] - e[1]), r[2] = e[2] + n[2] * (t[2] - e[2]), r;
}
function Xe(e, t, n) {
  return n = n || new R(3), n[0] = Math.max(e[0], t[0]), n[1] = Math.max(e[1], t[1]), n[2] = Math.max(e[2], t[2]), n;
}
function Ke(e, t, n) {
  return n = n || new R(3), n[0] = Math.min(e[0], t[0]), n[1] = Math.min(e[1], t[1]), n[2] = Math.min(e[2], t[2]), n;
}
function Ze(e, t, n) {
  return n = n || new R(3), n[0] = e[0] * t, n[1] = e[1] * t, n[2] = e[2] * t, n;
}
function Je(e, t, n) {
  return n = n || new R(3), n[0] = e[0] / t, n[1] = e[1] / t, n[2] = e[2] / t, n;
}
function Et(e, t, n) {
  n = n || new R(3);
  const r = e[2] * t[0] - e[0] * t[2], i = e[0] * t[1] - e[1] * t[0];
  return n[0] = e[1] * t[2] - e[2] * t[1], n[1] = r, n[2] = i, n;
}
function Qe(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function de(e) {
  return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
}
function tn(e) {
  return e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
}
function en(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
  return Math.sqrt(n * n + r * r + i * i);
}
function nn(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
  return n * n + r * r + i * i;
}
function at(e, t) {
  t = t || new R(3);
  const n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], r = Math.sqrt(n);
  return r > 1e-5 ? (t[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r) : (t[0] = 0, t[1] = 0, t[2] = 0), t;
}
function rn(e, t) {
  return t = t || new R(3), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t;
}
function on(e, t) {
  return t = t || new R(3), t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
}
function sn(e, t, n) {
  return n = n || new R(3), n[0] = e[0] * t[0], n[1] = e[1] * t[1], n[2] = e[2] * t[2], n;
}
function cn(e, t, n) {
  return n = n || new R(3), n[0] = e[0] / t[0], n[1] = e[1] / t[1], n[2] = e[2] / t[2], n;
}
var fn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  add: We,
  copy: on,
  create: X,
  cross: Et,
  distance: en,
  distanceSq: nn,
  divide: cn,
  divScalar: Je,
  dot: Qe,
  lerp: qe,
  lerpV: je,
  length: de,
  lengthSq: tn,
  max: Xe,
  min: Ke,
  mulScalar: Ze,
  multiply: sn,
  negate: rn,
  normalize: at,
  setDefaultType: Ye,
  subtract: Zt
});
let E = Float32Array;
function un(e) {
  const t = E;
  return E = e, t;
}
function an(e, t) {
  return t = t || new E(16), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t[4] = -e[4], t[5] = -e[5], t[6] = -e[6], t[7] = -e[7], t[8] = -e[8], t[9] = -e[9], t[10] = -e[10], t[11] = -e[11], t[12] = -e[12], t[13] = -e[13], t[14] = -e[14], t[15] = -e[15], t;
}
function hn() {
  return new E(16).fill(0);
}
function Jt(e, t) {
  return t = t || new E(16), t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
}
function Qt(e) {
  return e = e || new E(16), e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function ln(e, t) {
  if (t = t || new E(16), t === e) {
    let T;
    return T = e[1], e[1] = e[4], e[4] = T, T = e[2], e[2] = e[8], e[8] = T, T = e[3], e[3] = e[12], e[12] = T, T = e[6], e[6] = e[9], e[9] = T, T = e[7], e[7] = e[13], e[13] = T, T = e[11], e[11] = e[14], e[14] = T, t;
  }
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], o = e[0 * 4 + 3], s = e[1 * 4 + 0], c = e[1 * 4 + 1], f = e[1 * 4 + 2], u = e[1 * 4 + 3], h = e[2 * 4 + 0], a = e[2 * 4 + 1], l = e[2 * 4 + 2], y = e[2 * 4 + 3], x = e[3 * 4 + 0], m = e[3 * 4 + 1], b = e[3 * 4 + 2], S = e[3 * 4 + 3];
  return t[0] = n, t[1] = s, t[2] = h, t[3] = x, t[4] = r, t[5] = c, t[6] = a, t[7] = m, t[8] = i, t[9] = f, t[10] = l, t[11] = b, t[12] = o, t[13] = u, t[14] = y, t[15] = S, t;
}
function dt(e, t) {
  t = t || new E(16);
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], o = e[0 * 4 + 3], s = e[1 * 4 + 0], c = e[1 * 4 + 1], f = e[1 * 4 + 2], u = e[1 * 4 + 3], h = e[2 * 4 + 0], a = e[2 * 4 + 1], l = e[2 * 4 + 2], y = e[2 * 4 + 3], x = e[3 * 4 + 0], m = e[3 * 4 + 1], b = e[3 * 4 + 2], S = e[3 * 4 + 3], T = l * S, _ = b * y, B = f * S, M = b * u, D = f * y, N = l * u, z = i * S, U = b * o, V = i * y, C = l * o, L = i * u, O = f * o, k = h * m, $ = x * a, G = s * m, H = x * c, Y = s * a, nt = h * c, rt = n * m, it = x * r, ot = n * a, st = h * r, ct = n * c, ft = s * r, Ot = T * c + M * a + D * m - (_ * c + B * a + N * m), kt = _ * r + z * a + C * m - (T * r + U * a + V * m), $t = B * r + U * c + L * m - (M * r + z * c + O * m), Gt = N * r + V * c + O * a - (D * r + C * c + L * a), F = 1 / (n * Ot + s * kt + h * $t + x * Gt);
  return t[0] = F * Ot, t[1] = F * kt, t[2] = F * $t, t[3] = F * Gt, t[4] = F * (_ * s + B * h + N * x - (T * s + M * h + D * x)), t[5] = F * (T * n + U * h + V * x - (_ * n + z * h + C * x)), t[6] = F * (M * n + z * s + O * x - (B * n + U * s + L * x)), t[7] = F * (D * n + C * s + L * h - (N * n + V * s + O * h)), t[8] = F * (k * u + H * y + Y * S - ($ * u + G * y + nt * S)), t[9] = F * ($ * o + rt * y + st * S - (k * o + it * y + ot * S)), t[10] = F * (G * o + it * u + ct * S - (H * o + rt * u + ft * S)), t[11] = F * (nt * o + ot * u + ft * y - (Y * o + st * u + ct * y)), t[12] = F * (G * l + nt * b + $ * f - (Y * b + k * f + H * l)), t[13] = F * (ot * b + k * i + it * l - (rt * l + st * b + $ * i)), t[14] = F * (rt * f + ft * b + H * i - (ct * b + G * i + it * f)), t[15] = F * (ct * l + Y * i + st * f - (ot * f + ft * l + nt * i)), t;
}
function yn(e, t, n) {
  n = n || new E(16);
  const r = e[0], i = e[1], o = e[2], s = e[3], c = e[4 + 0], f = e[4 + 1], u = e[4 + 2], h = e[4 + 3], a = e[8 + 0], l = e[8 + 1], y = e[8 + 2], x = e[8 + 3], m = e[12 + 0], b = e[12 + 1], S = e[12 + 2], T = e[12 + 3], _ = t[0], B = t[1], M = t[2], D = t[3], N = t[4 + 0], z = t[4 + 1], U = t[4 + 2], V = t[4 + 3], C = t[8 + 0], L = t[8 + 1], O = t[8 + 2], k = t[8 + 3], $ = t[12 + 0], G = t[12 + 1], H = t[12 + 2], Y = t[12 + 3];
  return n[0] = r * _ + c * B + a * M + m * D, n[1] = i * _ + f * B + l * M + b * D, n[2] = o * _ + u * B + y * M + S * D, n[3] = s * _ + h * B + x * M + T * D, n[4] = r * N + c * z + a * U + m * V, n[5] = i * N + f * z + l * U + b * V, n[6] = o * N + u * z + y * U + S * V, n[7] = s * N + h * z + x * U + T * V, n[8] = r * C + c * L + a * O + m * k, n[9] = i * C + f * L + l * O + b * k, n[10] = o * C + u * L + y * O + S * k, n[11] = s * C + h * L + x * O + T * k, n[12] = r * $ + c * G + a * H + m * Y, n[13] = i * $ + f * G + l * H + b * Y, n[14] = o * $ + u * G + y * H + S * Y, n[15] = s * $ + h * G + x * H + T * Y, n;
}
function xn(e, t, n) {
  return n = n || Qt(), e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11]), n[12] = t[0], n[13] = t[1], n[14] = t[2], n[15] = 1, n;
}
function pn(e, t) {
  return t = t || X(), t[0] = e[12], t[1] = e[13], t[2] = e[14], t;
}
function An(e, t, n) {
  n = n || X();
  const r = t * 4;
  return n[0] = e[r + 0], n[1] = e[r + 1], n[2] = e[r + 2], n;
}
function mn(e, t, n, r) {
  r !== e && (r = Jt(e, r));
  const i = n * 4;
  return r[i + 0] = t[0], r[i + 1] = t[1], r[i + 2] = t[2], r;
}
function Tn(e, t, n, r, i) {
  i = i || new E(16);
  const o = Math.tan(Math.PI * 0.5 - 0.5 * e), s = 1 / (n - r);
  return i[0] = o / t, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = o, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = (n + r) * s, i[11] = -1, i[12] = 0, i[13] = 0, i[14] = n * r * s * 2, i[15] = 0, i;
}
function Sn(e, t, n, r, i, o, s) {
  return s = s || new E(16), s[0] = 2 / (t - e), s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 2 / (r - n), s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = 2 / (i - o), s[11] = 0, s[12] = (t + e) / (e - t), s[13] = (r + n) / (n - r), s[14] = (o + i) / (i - o), s[15] = 1, s;
}
function bn(e, t, n, r, i, o, s) {
  s = s || new E(16);
  const c = t - e, f = r - n, u = i - o;
  return s[0] = 2 * i / c, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 2 * i / f, s[6] = 0, s[7] = 0, s[8] = (e + t) / c, s[9] = (r + n) / f, s[10] = o / u, s[11] = -1, s[12] = 0, s[13] = 0, s[14] = i * o / u, s[15] = 0, s;
}
let K, Q, j;
function En(e, t, n, r) {
  return r = r || new E(16), K = K || X(), Q = Q || X(), j = j || X(), at(
    Zt(e, t, j),
    j
  ), at(Et(n, j, K), K), at(Et(j, K, Q), Q), r[0] = K[0], r[1] = K[1], r[2] = K[2], r[3] = 0, r[4] = Q[0], r[5] = Q[1], r[6] = Q[2], r[7] = 0, r[8] = j[0], r[9] = j[1], r[10] = j[2], r[11] = 0, r[12] = e[0], r[13] = e[1], r[14] = e[2], r[15] = 1, r;
}
function In(e, t) {
  return t = t || new E(16), t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t;
}
function wn(e, t, n) {
  n = n || new E(16);
  const r = t[0], i = t[1], o = t[2], s = e[0], c = e[1], f = e[2], u = e[3], h = e[1 * 4 + 0], a = e[1 * 4 + 1], l = e[1 * 4 + 2], y = e[1 * 4 + 3], x = e[2 * 4 + 0], m = e[2 * 4 + 1], b = e[2 * 4 + 2], S = e[2 * 4 + 3], T = e[3 * 4 + 0], _ = e[3 * 4 + 1], B = e[3 * 4 + 2], M = e[3 * 4 + 3];
  return e !== n && (n[0] = s, n[1] = c, n[2] = f, n[3] = u, n[4] = h, n[5] = a, n[6] = l, n[7] = y, n[8] = x, n[9] = m, n[10] = b, n[11] = S), n[12] = s * r + h * i + x * o + T, n[13] = c * r + a * i + m * o + _, n[14] = f * r + l * i + b * o + B, n[15] = u * r + y * i + S * o + M, n;
}
function _n(e, t) {
  t = t || new E(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Bn(e, t, n) {
  n = n || new E(16);
  const r = e[4], i = e[5], o = e[6], s = e[7], c = e[8], f = e[9], u = e[10], h = e[11], a = Math.cos(t), l = Math.sin(t);
  return n[4] = a * r + l * c, n[5] = a * i + l * f, n[6] = a * o + l * u, n[7] = a * s + l * h, n[8] = a * c - l * r, n[9] = a * f - l * i, n[10] = a * u - l * o, n[11] = a * h - l * s, e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function Mn(e, t) {
  t = t || new E(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function gn(e, t, n) {
  n = n || new E(16);
  const r = e[0 * 4 + 0], i = e[0 * 4 + 1], o = e[0 * 4 + 2], s = e[0 * 4 + 3], c = e[2 * 4 + 0], f = e[2 * 4 + 1], u = e[2 * 4 + 2], h = e[2 * 4 + 3], a = Math.cos(t), l = Math.sin(t);
  return n[0] = a * r - l * c, n[1] = a * i - l * f, n[2] = a * o - l * u, n[3] = a * s - l * h, n[8] = a * c + l * r, n[9] = a * f + l * i, n[10] = a * u + l * o, n[11] = a * h + l * s, e !== n && (n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function Rn(e, t) {
  t = t || new E(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Dn(e, t, n) {
  n = n || new E(16);
  const r = e[0 * 4 + 0], i = e[0 * 4 + 1], o = e[0 * 4 + 2], s = e[0 * 4 + 3], c = e[1 * 4 + 0], f = e[1 * 4 + 1], u = e[1 * 4 + 2], h = e[1 * 4 + 3], a = Math.cos(t), l = Math.sin(t);
  return n[0] = a * r + l * c, n[1] = a * i + l * f, n[2] = a * o + l * u, n[3] = a * s + l * h, n[4] = a * c - l * r, n[5] = a * f - l * i, n[6] = a * u - l * o, n[7] = a * h - l * s, e !== n && (n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function Fn(e, t, n) {
  n = n || new E(16);
  let r = e[0], i = e[1], o = e[2];
  const s = Math.sqrt(r * r + i * i + o * o);
  r /= s, i /= s, o /= s;
  const c = r * r, f = i * i, u = o * o, h = Math.cos(t), a = Math.sin(t), l = 1 - h;
  return n[0] = c + (1 - c) * h, n[1] = r * i * l + o * a, n[2] = r * o * l - i * a, n[3] = 0, n[4] = r * i * l - o * a, n[5] = f + (1 - f) * h, n[6] = i * o * l + r * a, n[7] = 0, n[8] = r * o * l + i * a, n[9] = i * o * l - r * a, n[10] = u + (1 - u) * h, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
}
function Nn(e, t, n, r) {
  r = r || new E(16);
  let i = t[0], o = t[1], s = t[2];
  const c = Math.sqrt(i * i + o * o + s * s);
  i /= c, o /= c, s /= c;
  const f = i * i, u = o * o, h = s * s, a = Math.cos(n), l = Math.sin(n), y = 1 - a, x = f + (1 - f) * a, m = i * o * y + s * l, b = i * s * y - o * l, S = i * o * y - s * l, T = u + (1 - u) * a, _ = o * s * y + i * l, B = i * s * y + o * l, M = o * s * y - i * l, D = h + (1 - h) * a, N = e[0], z = e[1], U = e[2], V = e[3], C = e[4], L = e[5], O = e[6], k = e[7], $ = e[8], G = e[9], H = e[10], Y = e[11];
  return r[0] = x * N + m * C + b * $, r[1] = x * z + m * L + b * G, r[2] = x * U + m * O + b * H, r[3] = x * V + m * k + b * Y, r[4] = S * N + T * C + _ * $, r[5] = S * z + T * L + _ * G, r[6] = S * U + T * O + _ * H, r[7] = S * V + T * k + _ * Y, r[8] = B * N + M * C + D * $, r[9] = B * z + M * L + D * G, r[10] = B * U + M * O + D * H, r[11] = B * V + M * k + D * Y, e !== r && (r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15]), r;
}
function Pn(e, t) {
  return t = t || new E(16), t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function vn(e, t, n) {
  n = n || new E(16);
  const r = t[0], i = t[1], o = t[2];
  return n[0] = r * e[0 * 4 + 0], n[1] = r * e[0 * 4 + 1], n[2] = r * e[0 * 4 + 2], n[3] = r * e[0 * 4 + 3], n[4] = i * e[1 * 4 + 0], n[5] = i * e[1 * 4 + 1], n[6] = i * e[1 * 4 + 2], n[7] = i * e[1 * 4 + 3], n[8] = o * e[2 * 4 + 0], n[9] = o * e[2 * 4 + 1], n[10] = o * e[2 * 4 + 2], n[11] = o * e[2 * 4 + 3], e !== n && (n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function zn(e, t, n) {
  n = n || X();
  const r = t[0], i = t[1], o = t[2], s = r * e[0 * 4 + 3] + i * e[1 * 4 + 3] + o * e[2 * 4 + 3] + e[3 * 4 + 3];
  return n[0] = (r * e[0 * 4 + 0] + i * e[1 * 4 + 0] + o * e[2 * 4 + 0] + e[3 * 4 + 0]) / s, n[1] = (r * e[0 * 4 + 1] + i * e[1 * 4 + 1] + o * e[2 * 4 + 1] + e[3 * 4 + 1]) / s, n[2] = (r * e[0 * 4 + 2] + i * e[1 * 4 + 2] + o * e[2 * 4 + 2] + e[3 * 4 + 2]) / s, n;
}
function Un(e, t, n) {
  n = n || X();
  const r = t[0], i = t[1], o = t[2];
  return n[0] = r * e[0 * 4 + 0] + i * e[1 * 4 + 0] + o * e[2 * 4 + 0], n[1] = r * e[0 * 4 + 1] + i * e[1 * 4 + 1] + o * e[2 * 4 + 1], n[2] = r * e[0 * 4 + 2] + i * e[1 * 4 + 2] + o * e[2 * 4 + 2], n;
}
function Vn(e, t, n) {
  n = n || X();
  const r = dt(e), i = t[0], o = t[1], s = t[2];
  return n[0] = i * r[0 * 4 + 0] + o * r[0 * 4 + 1] + s * r[0 * 4 + 2], n[1] = i * r[1 * 4 + 0] + o * r[1 * 4 + 1] + s * r[1 * 4 + 2], n[2] = i * r[2 * 4 + 0] + o * r[2 * 4 + 1] + s * r[2 * 4 + 2], n;
}
var Z = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  axisRotate: Nn,
  axisRotation: Fn,
  copy: Jt,
  create: hn,
  frustum: bn,
  getAxis: An,
  getTranslation: pn,
  identity: Qt,
  inverse: dt,
  lookAt: En,
  multiply: yn,
  negate: an,
  ortho: Sn,
  perspective: Tn,
  rotateX: Bn,
  rotateY: gn,
  rotateZ: Dn,
  rotationX: _n,
  rotationY: Mn,
  rotationZ: Rn,
  scale: vn,
  scaling: Pn,
  setAxis: mn,
  setDefaultType: un,
  setTranslation: xn,
  transformDirection: Un,
  transformNormal: Vn,
  transformPoint: zn,
  translate: wn,
  translation: In,
  transpose: ln
});
const _t = 5120, et = 5121, Bt = 5122, Mt = 5123, gt = 5124, Rt = 5125, Dt = 5126, Cn = 32819, Ln = 32820, On = 33635, kn = 5131, $n = 33640, Gn = 35899, Hn = 35902, Yn = 36269, Wn = 34042, te = {};
{
  const e = te;
  e[_t] = Int8Array, e[et] = Uint8Array, e[Bt] = Int16Array, e[Mt] = Uint16Array, e[gt] = Int32Array, e[Rt] = Uint32Array, e[Dt] = Float32Array, e[Cn] = Uint16Array, e[Ln] = Uint16Array, e[On] = Uint16Array, e[kn] = Uint16Array, e[$n] = Uint32Array, e[Gn] = Uint32Array, e[Hn] = Uint32Array, e[Yn] = Uint32Array, e[Wn] = Uint32Array;
}
function ee(e) {
  if (e instanceof Int8Array)
    return _t;
  if (e instanceof Uint8Array || e instanceof Uint8ClampedArray)
    return et;
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
function ne(e) {
  if (e === Int8Array)
    return _t;
  if (e === Uint8Array || e === Uint8ClampedArray)
    return et;
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
function qn(e) {
  const t = te[e];
  if (!t)
    throw new Error("unknown gl type");
  return t;
}
const It = typeof SharedArrayBuffer < "u" ? function(t) {
  return t && t.buffer && (t.buffer instanceof ArrayBuffer || t.buffer instanceof SharedArrayBuffer);
} : function(t) {
  return t && t.buffer && t.buffer instanceof ArrayBuffer;
};
function jn(...e) {
  console.error(...e);
}
const Ht = /* @__PURE__ */ new Map();
function re(e, t) {
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
function Xn(e, t) {
  return typeof WebGLBuffer < "u" && re(t, "WebGLBuffer");
}
function ie(e, t) {
  return typeof WebGLTexture < "u" && re(t, "WebGLTexture");
}
const oe = 35044, q = 34962, Kn = 34963, Zn = 34660, Jn = 5120, Qn = 5121, dn = 5122, tr = 5123, er = 5124, nr = 5125, se = 5126, ce = {
  attribPrefix: ""
};
function fe(e, t, n, r, i) {
  e.bindBuffer(t, n), e.bufferData(t, r, i || oe);
}
function ue(e, t, n, r) {
  if (Xn(e, t))
    return t;
  n = n || q;
  const i = e.createBuffer();
  return fe(e, n, i, t, r), i;
}
function ae(e) {
  return e === "indices";
}
function rr(e) {
  return e === Int8Array || e === Uint8Array;
}
function ir(e) {
  return e.length ? e : e.data;
}
const or = /coord|texture/i, sr = /color|colour/i;
function cr(e, t) {
  let n;
  if (or.test(e) ? n = 2 : sr.test(e) ? n = 4 : n = 3, t % n > 0)
    throw new Error(`Can not guess numComponents for attribute '${e}'. Tried ${n} but ${t} values is not evenly divisible by ${n}. You should specify it.`);
  return n;
}
function fr(e, t, n) {
  return e.numComponents || e.size || cr(t, n || ir(e).length);
}
function Ft(e, t) {
  if (It(e))
    return e;
  if (It(e.data))
    return e.data;
  Array.isArray(e) && (e = {
    data: e
  });
  let n = e.type ? Nt(e.type) : void 0;
  return n || (ae(t) ? n = Uint16Array : n = Float32Array), new n(e.data);
}
function ur(e) {
  return typeof e == "number" ? e : e ? ne(e) : se;
}
function Nt(e) {
  return typeof e == "number" ? qn(e) : e || Float32Array;
}
function ar(e, t) {
  return {
    buffer: t.buffer,
    numValues: 2 * 3 * 4,
    // safely divided by 2, 3, 4
    type: ur(t.type),
    arrayType: Nt(t.type)
  };
}
function hr(e, t) {
  const n = t.data || t, r = Nt(t.type), i = n * r.BYTES_PER_ELEMENT, o = e.createBuffer();
  return e.bindBuffer(q, o), e.bufferData(q, i, t.drawType || oe), {
    buffer: o,
    numValues: n,
    type: ne(r),
    arrayType: r
  };
}
function lr(e, t, n) {
  const r = Ft(t, n);
  return {
    arrayType: r.constructor,
    buffer: ue(e, r, void 0, t.drawType),
    type: ee(r),
    numValues: 0
  };
}
function yr(e, t) {
  const n = {};
  return Object.keys(t).forEach(function(r) {
    if (!ae(r)) {
      const i = t[r], o = i.attrib || i.name || i.attribName || ce.attribPrefix + r;
      if (i.value) {
        if (!Array.isArray(i.value) && !It(i.value))
          throw new Error("array.value is not array or typedarray");
        n[o] = {
          value: i.value
        };
      } else {
        let s;
        i.buffer && i.buffer instanceof WebGLBuffer ? s = ar : typeof i == "number" || typeof i.data == "number" ? s = hr : s = lr;
        const { buffer: c, type: f, numValues: u, arrayType: h } = s(e, i, r), a = i.normalize !== void 0 ? i.normalize : rr(h), l = fr(i, r, u);
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
function Yt(e, t, n, r) {
  n = Ft(n), r !== void 0 ? (e.bindBuffer(q, t.buffer), e.bufferSubData(q, r, n)) : fe(e, q, t.buffer, n, t.drawType);
}
function xr(e, t) {
  return t === Jn || t === Qn ? 1 : t === dn || t === tr ? 2 : t === er || t === nr || t === se ? 4 : 0;
}
const bt = ["position", "positions", "a_position"];
function pr(e, t) {
  let n, r;
  for (r = 0; r < bt.length && (n = bt[r], !(n in t || (n = ce.attribPrefix + n, n in t))); ++r)
    ;
  r === bt.length && (n = Object.keys(t)[0]);
  const i = t[n];
  if (!i.buffer)
    return 1;
  e.bindBuffer(q, i.buffer);
  const o = e.getBufferParameter(q, Zn);
  e.bindBuffer(q, null);
  const s = xr(e, i.type), c = o / s, f = i.numComponents || i.size, u = c / f;
  if (u % 1 !== 0)
    throw new Error(`numComponents ${f} not correct for length ${length}`);
  return u;
}
function Ar(e, t, n) {
  const r = yr(e, t), i = Object.assign({}, n || {});
  i.attribs = Object.assign({}, n ? n.attribs : {}, r);
  const o = t.indices;
  if (o) {
    const s = Ft(o, "indices");
    i.indices = ue(e, s, Kn), i.numElements = s.length, i.elementType = ee(s);
  } else
    i.numElements || (i.numElements = pr(e, i.attribs));
  return i;
}
function Pt(e) {
  return !!e.texStorage2D;
}
const mr = function() {
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
}(), vt = jn;
function he(e) {
  return typeof document < "u" && document.getElementById ? document.getElementById(e) : null;
}
const ht = 33984, lt = 34962, Tr = 34963, Sr = 35713, br = 35714, Er = 35632, Ir = 35633, wr = 35981, le = 35718, _r = 35721, Br = 35971, Mr = 35382, gr = 35396, Rr = 35398, Dr = 35392, Fr = 35395, yt = 5126, ye = 35664, xe = 35665, pe = 35666, zt = 5124, Ae = 35667, me = 35668, Te = 35669, Se = 35670, be = 35671, Ee = 35672, Ie = 35673, we = 35674, _e = 35675, Be = 35676, Nr = 35678, Pr = 35680, vr = 35679, zr = 35682, Ur = 35685, Vr = 35686, Cr = 35687, Lr = 35688, Or = 35689, kr = 35690, $r = 36289, Gr = 36292, Hr = 36293, Ut = 5125, Me = 36294, ge = 36295, Re = 36296, Yr = 36298, Wr = 36299, qr = 36300, jr = 36303, Xr = 36306, Kr = 36307, Zr = 36308, Jr = 36311, xt = 3553, pt = 34067, Vt = 32879, At = 35866, A = {};
function De(e, t) {
  return A[t].bindPoint;
}
function Qr(e, t) {
  return function(n) {
    e.uniform1f(t, n);
  };
}
function dr(e, t) {
  return function(n) {
    e.uniform1fv(t, n);
  };
}
function ti(e, t) {
  return function(n) {
    e.uniform2fv(t, n);
  };
}
function ei(e, t) {
  return function(n) {
    e.uniform3fv(t, n);
  };
}
function ni(e, t) {
  return function(n) {
    e.uniform4fv(t, n);
  };
}
function Fe(e, t) {
  return function(n) {
    e.uniform1i(t, n);
  };
}
function Ne(e, t) {
  return function(n) {
    e.uniform1iv(t, n);
  };
}
function Pe(e, t) {
  return function(n) {
    e.uniform2iv(t, n);
  };
}
function ve(e, t) {
  return function(n) {
    e.uniform3iv(t, n);
  };
}
function ze(e, t) {
  return function(n) {
    e.uniform4iv(t, n);
  };
}
function ri(e, t) {
  return function(n) {
    e.uniform1ui(t, n);
  };
}
function ii(e, t) {
  return function(n) {
    e.uniform1uiv(t, n);
  };
}
function oi(e, t) {
  return function(n) {
    e.uniform2uiv(t, n);
  };
}
function si(e, t) {
  return function(n) {
    e.uniform3uiv(t, n);
  };
}
function ci(e, t) {
  return function(n) {
    e.uniform4uiv(t, n);
  };
}
function fi(e, t) {
  return function(n) {
    e.uniformMatrix2fv(t, !1, n);
  };
}
function ui(e, t) {
  return function(n) {
    e.uniformMatrix3fv(t, !1, n);
  };
}
function ai(e, t) {
  return function(n) {
    e.uniformMatrix4fv(t, !1, n);
  };
}
function hi(e, t) {
  return function(n) {
    e.uniformMatrix2x3fv(t, !1, n);
  };
}
function li(e, t) {
  return function(n) {
    e.uniformMatrix3x2fv(t, !1, n);
  };
}
function yi(e, t) {
  return function(n) {
    e.uniformMatrix2x4fv(t, !1, n);
  };
}
function xi(e, t) {
  return function(n) {
    e.uniformMatrix4x2fv(t, !1, n);
  };
}
function pi(e, t) {
  return function(n) {
    e.uniformMatrix3x4fv(t, !1, n);
  };
}
function Ai(e, t) {
  return function(n) {
    e.uniformMatrix4x3fv(t, !1, n);
  };
}
function P(e, t, n, r) {
  const i = De(e, t);
  return Pt(e) ? function(o) {
    let s, c;
    !o || ie(e, o) ? (s = o, c = null) : (s = o.texture, c = o.sampler), e.uniform1i(r, n), e.activeTexture(ht + n), e.bindTexture(i, s), e.bindSampler(n, c);
  } : function(o) {
    e.uniform1i(r, n), e.activeTexture(ht + n), e.bindTexture(i, o);
  };
}
function v(e, t, n, r, i) {
  const o = De(e, t), s = new Int32Array(i);
  for (let c = 0; c < i; ++c)
    s[c] = n + c;
  return Pt(e) ? function(c) {
    e.uniform1iv(r, s), c.forEach(function(f, u) {
      e.activeTexture(ht + s[u]);
      let h, a;
      !f || ie(e, f) ? (h = f, a = null) : (h = f.texture, a = f.sampler), e.bindSampler(n, a), e.bindTexture(o, h);
    });
  } : function(c) {
    e.uniform1iv(r, s), c.forEach(function(f, u) {
      e.activeTexture(ht + s[u]), e.bindTexture(o, f);
    });
  };
}
A[yt] = { Type: Float32Array, size: 4, setter: Qr, arraySetter: dr };
A[ye] = { Type: Float32Array, size: 8, setter: ti, cols: 2 };
A[xe] = { Type: Float32Array, size: 12, setter: ei, cols: 3 };
A[pe] = { Type: Float32Array, size: 16, setter: ni, cols: 4 };
A[zt] = { Type: Int32Array, size: 4, setter: Fe, arraySetter: Ne };
A[Ae] = { Type: Int32Array, size: 8, setter: Pe, cols: 2 };
A[me] = { Type: Int32Array, size: 12, setter: ve, cols: 3 };
A[Te] = { Type: Int32Array, size: 16, setter: ze, cols: 4 };
A[Ut] = { Type: Uint32Array, size: 4, setter: ri, arraySetter: ii };
A[Me] = { Type: Uint32Array, size: 8, setter: oi, cols: 2 };
A[ge] = { Type: Uint32Array, size: 12, setter: si, cols: 3 };
A[Re] = { Type: Uint32Array, size: 16, setter: ci, cols: 4 };
A[Se] = { Type: Uint32Array, size: 4, setter: Fe, arraySetter: Ne };
A[be] = { Type: Uint32Array, size: 8, setter: Pe, cols: 2 };
A[Ee] = { Type: Uint32Array, size: 12, setter: ve, cols: 3 };
A[Ie] = { Type: Uint32Array, size: 16, setter: ze, cols: 4 };
A[we] = { Type: Float32Array, size: 32, setter: fi, rows: 2, cols: 2 };
A[_e] = { Type: Float32Array, size: 48, setter: ui, rows: 3, cols: 3 };
A[Be] = { Type: Float32Array, size: 64, setter: ai, rows: 4, cols: 4 };
A[Ur] = { Type: Float32Array, size: 32, setter: hi, rows: 2, cols: 3 };
A[Vr] = { Type: Float32Array, size: 32, setter: yi, rows: 2, cols: 4 };
A[Cr] = { Type: Float32Array, size: 48, setter: li, rows: 3, cols: 2 };
A[Lr] = { Type: Float32Array, size: 48, setter: pi, rows: 3, cols: 4 };
A[Or] = { Type: Float32Array, size: 64, setter: xi, rows: 4, cols: 2 };
A[kr] = { Type: Float32Array, size: 64, setter: Ai, rows: 4, cols: 3 };
A[Nr] = { Type: null, size: 0, setter: P, arraySetter: v, bindPoint: xt };
A[Pr] = { Type: null, size: 0, setter: P, arraySetter: v, bindPoint: pt };
A[vr] = { Type: null, size: 0, setter: P, arraySetter: v, bindPoint: Vt };
A[zr] = { Type: null, size: 0, setter: P, arraySetter: v, bindPoint: xt };
A[$r] = { Type: null, size: 0, setter: P, arraySetter: v, bindPoint: At };
A[Gr] = { Type: null, size: 0, setter: P, arraySetter: v, bindPoint: At };
A[Hr] = { Type: null, size: 0, setter: P, arraySetter: v, bindPoint: pt };
A[Yr] = { Type: null, size: 0, setter: P, arraySetter: v, bindPoint: xt };
A[Wr] = { Type: null, size: 0, setter: P, arraySetter: v, bindPoint: Vt };
A[qr] = { Type: null, size: 0, setter: P, arraySetter: v, bindPoint: pt };
A[jr] = { Type: null, size: 0, setter: P, arraySetter: v, bindPoint: At };
A[Xr] = { Type: null, size: 0, setter: P, arraySetter: v, bindPoint: xt };
A[Kr] = { Type: null, size: 0, setter: P, arraySetter: v, bindPoint: Vt };
A[Zr] = { Type: null, size: 0, setter: P, arraySetter: v, bindPoint: pt };
A[Jr] = { Type: null, size: 0, setter: P, arraySetter: v, bindPoint: At };
function mt(e, t) {
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
      e.bindBuffer(lt, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribPointer(
        t,
        n.numComponents || n.size,
        n.type || yt,
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
      e.bindBuffer(lt, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribIPointer(
        t,
        n.numComponents || n.size,
        n.type || zt,
        n.stride || 0,
        n.offset || 0
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t, n.divisor || 0);
  };
}
function Tt(e, t) {
  return function(n) {
    if (n.value)
      if (e.disableVertexAttribArray(t), n.value.length === 4)
        e.vertexAttrib4uiv(t, n.value);
      else
        throw new Error("The length of an unsigned integer constant value must be 4!");
    else
      e.bindBuffer(lt, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribIPointer(
        t,
        n.numComponents || n.size,
        n.type || Ut,
        n.stride || 0,
        n.offset || 0
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t, n.divisor || 0);
  };
}
function Ct(e, t, n) {
  const r = n.size, i = n.count;
  return function(o) {
    e.bindBuffer(lt, o.buffer);
    const s = o.size || o.numComponents || r, c = s / i, f = o.type || yt, h = A[f].size * s, a = o.normalize || !1, l = o.offset || 0, y = h / i;
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
const w = {};
w[yt] = { size: 4, setter: mt };
w[ye] = { size: 8, setter: mt };
w[xe] = { size: 12, setter: mt };
w[pe] = { size: 16, setter: mt };
w[zt] = { size: 4, setter: J };
w[Ae] = { size: 8, setter: J };
w[me] = { size: 12, setter: J };
w[Te] = { size: 16, setter: J };
w[Ut] = { size: 4, setter: Tt };
w[Me] = { size: 8, setter: Tt };
w[ge] = { size: 12, setter: Tt };
w[Re] = { size: 16, setter: Tt };
w[Se] = { size: 4, setter: J };
w[be] = { size: 8, setter: J };
w[Ee] = { size: 12, setter: J };
w[Ie] = { size: 16, setter: J };
w[we] = { size: 4, setter: Ct, count: 2 };
w[_e] = { size: 9, setter: Ct, count: 3 };
w[Be] = { size: 16, setter: Ct, count: 4 };
const mi = /ERROR:\s*\d+:(\d+)/gi;
function Ti(e, t = "", n = 0) {
  const r = [...t.matchAll(mi)], i = new Map(r.map((o, s) => {
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
const Wt = /^[ \t]*\n/;
function Ue(e) {
  let t = 0;
  return Wt.test(e) && (t = 1, e = e.replace(Wt, "")), { lineOffset: t, shaderSource: e };
}
function Si(e, t) {
  return e.errorCallback(t), e.callback && setTimeout(() => {
    e.callback(`${t}
${e.errors.join(`
`)}`);
  }), null;
}
function bi(e, t, n, r) {
  if (r = r || vt, !e.getShaderParameter(n, Sr)) {
    const o = e.getShaderInfoLog(n), { lineOffset: s, shaderSource: c } = Ue(e.getShaderSource(n)), f = `${Ti(c, o, s)}
Error compiling ${mr(e, t)}: ${o}`;
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
const Ei = [
  "VERTEX_SHADER",
  "FRAGMENT_SHADER"
];
function Ii(e, t) {
  if (t.indexOf("frag") >= 0)
    return Er;
  if (t.indexOf("vert") >= 0)
    return Ir;
}
function wi(e, t, n) {
  const r = e.getAttachedShaders(t);
  for (const i of r)
    n.has(i) && e.deleteShader(i);
  e.deleteProgram(t);
}
const _i = (e = 0) => new Promise((t) => setTimeout(t, e));
function Bi(e, t, n) {
  const r = e.createProgram(), {
    attribLocations: i,
    transformFeedbackVaryings: o,
    transformFeedbackMode: s
  } = Lt(n);
  for (let c = 0; c < t.length; ++c) {
    let f = t[c];
    if (typeof f == "string") {
      const u = he(f), h = u ? u.text : f;
      let a = e[Ei[c]];
      u && u.type && (a = Ii(e, u.type) || a), f = e.createShader(a), e.shaderSource(f, Ue(h).shaderSource), e.compileShader(f), e.attachShader(r, f);
    }
  }
  Object.entries(i).forEach(([c, f]) => e.bindAttribLocation(r, f, c));
  {
    let c = o;
    c && (c.attribs && (c = c.attribs), Array.isArray(c) || (c = Object.keys(c)), e.transformFeedbackVaryings(r, c, s || wr));
  }
  return e.linkProgram(r), r;
}
function Mi(e, t, n, r, i) {
  const o = Lt(n, r, i), s = new Set(t), c = Bi(e, t, o);
  function f(u, h) {
    const a = Ri(u, h, o.errorCallback);
    return a && wi(u, h, s), a;
  }
  if (o.callback) {
    gi(e, c).then(() => {
      const u = f(e, c);
      o.callback(u, u ? void 0 : c);
    });
    return;
  }
  return f(e, c) ? void 0 : c;
}
async function gi(e, t) {
  const n = e.getExtension("KHR_parallel_shader_compile"), r = n ? (o, s) => o.getProgramParameter(s, n.COMPLETION_STATUS_KHR) : () => !0;
  let i = 0;
  do
    await _i(i), i = 1e3 / 60;
  while (!r(e, t));
}
function Ri(e, t, n) {
  if (n = n || vt, !e.getProgramParameter(t, br)) {
    const i = e.getProgramInfoLog(t);
    n(`Error in program linking: ${i}`);
    const s = e.getAttachedShaders(t).map((c) => bi(e, e.getShaderParameter(c, e.SHADER_TYPE), c, n));
    return `${i}
${s.filter((c) => c).join(`
`)}`;
  }
}
function Di(e, t, n, r, i) {
  return Mi(e, t, n, r, i);
}
function Ve(e) {
  const t = e.name;
  return t.startsWith("gl_") || t.startsWith("webgl_");
}
const Fi = /(\.|\[|]|\w+)/g, Ni = (e) => e >= "0" && e <= "9";
function Pi(e, t, n, r) {
  const i = e.split(Fi).filter((c) => c !== "");
  let o = 0, s = "";
  for (; ; ) {
    const c = i[o++];
    s += c;
    const f = Ni(c[0]), u = f ? parseInt(c) : c;
    if (f && (s += i[o++]), o === i.length) {
      n[u] = t;
      break;
    } else {
      const a = i[o++], l = a === "[", y = n[u] || (l ? [] : {});
      n[u] = y, n = y, r[s] = r[s] || function(x) {
        return function(m) {
          Ce(x, m);
        };
      }(y), s += a;
    }
  }
}
function vi(e, t) {
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
  const i = {}, o = {}, s = e.getProgramParameter(t, le);
  for (let c = 0; c < s; ++c) {
    const f = e.getActiveUniform(t, c);
    if (Ve(f))
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
function zi(e, t) {
  const n = {}, r = e.getProgramParameter(t, Br);
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
function Ui(e, t) {
  const n = e.getProgramParameter(t, le), r = [], i = [];
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
  const o = {}, s = e.getProgramParameter(t, Mr);
  for (let c = 0; c < s; ++c) {
    const f = e.getActiveUniformBlockName(t, c), u = {
      index: e.getUniformBlockIndex(t, f),
      usedByVertexShader: e.getActiveUniformBlockParameter(t, c, gr),
      usedByFragmentShader: e.getActiveUniformBlockParameter(t, c, Rr),
      size: e.getActiveUniformBlockParameter(t, c, Dr),
      uniformIndices: e.getActiveUniformBlockParameter(t, c, Fr)
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
function St(e, ...t) {
  const n = e.uniformSetters || e, r = t.length;
  for (let i = 0; i < r; ++i) {
    const o = t[i];
    if (Array.isArray(o)) {
      const s = o.length;
      for (let c = 0; c < s; ++c)
        St(n, o[c]);
    } else
      for (const s in o) {
        const c = n[s];
        c && c(o[s]);
      }
  }
}
function Vi(e, t) {
  const n = {}, r = e.getProgramParameter(t, _r);
  for (let i = 0; i < r; ++i) {
    const o = e.getActiveAttrib(t, i);
    if (Ve(o))
      continue;
    const s = e.getAttribLocation(t, o.name), c = w[o.type], f = c.setter(e, s, c);
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
function Le(e, t, n) {
  n.vertexArrayObject ? e.bindVertexArray(n.vertexArrayObject) : (Ci(t.attribSetters || t, n.attribs), n.indices && e.bindBuffer(Tr, n.indices));
}
function qt(e, t) {
  const n = vi(e, t), r = Vi(e, t), i = {
    program: t,
    uniformSetters: n,
    attribSetters: r
  };
  return Pt(e) && (i.uniformBlockSpec = Ui(e, t), i.transformFeedbackInfo = zi(e, t)), i;
}
const Li = /\s|{|}|;/;
function Oi(e, t, n, r, i) {
  const o = Lt(n, r, i), s = [];
  if (t = t.map(function(u) {
    if (!Li.test(u)) {
      const h = he(u);
      if (h)
        u = h.text;
      else {
        const a = `no element with id: ${u}`;
        o.errorCallback(a), s.push(a);
      }
    }
    return u;
  }), s.length)
    return Si(o, "");
  const c = o.callback;
  c && (o.callback = (u, h) => {
    c(u, u ? void 0 : qt(e, h));
  });
  const f = Di(e, t, o);
  return f ? qt(e, f) : null;
}
const ki = 4, jt = 5123;
function Oe(e, t, n, r, i, o) {
  n = n === void 0 ? ki : n;
  const s = t.indices, c = t.elementType, f = r === void 0 ? t.numElements : r;
  i = i === void 0 ? 0 : i, c || s ? o !== void 0 ? e.drawElementsInstanced(n, f, c === void 0 ? jt : t.elementType, i, o) : e.drawElements(n, f, c === void 0 ? jt : t.elementType, i) : o !== void 0 ? e.drawArraysInstanced(n, i, f, o) : e.drawArrays(n, i, f);
}
function $i(e, t) {
  t = t || 1, t = Math.max(0, t);
  const n = e.clientWidth * t | 0, r = e.clientHeight * t | 0;
  return e.width !== n || e.height !== r ? (e.width = n, e.height = r, !0) : !1;
}
const Xt = {
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
class wt {
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
    this.bufferInfo = Ar(t, {
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
    Yt(t, this.bufferInfo.attribs.position, this.positions), Yt(t, this.bufferInfo.attribs.color, this.colors), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.bufferInfo.indices), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.DYNAMIC_DRAW);
  }
  fill() {
    this.positions.fill(0, this.currentVertices * 2), this.colors.fill(0, this.currentVertices * 4), this.indices.fill(0, this.currentIndices);
  }
  resetCount() {
    this.currentVertices = 0, this.currentIndices = 0;
  }
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
class ke {
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
class $e {
  constructor(t) {
    p(this, "gl");
    p(this, "id", -1);
    p(this, "transform");
    this.gl = t, this.transform = new ke();
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
class Gi extends $e {
  constructor(n, r) {
    super(n);
    p(this, "buffers", []);
    p(this, "bufferSize");
    p(this, "currentBufferIndex", -1);
    this.bufferSize = r.bufferSize | 1e4, this.addBuffer();
  }
  addVerticesAndIndices(n, r) {
    (this.buffers[this.currentBufferIndex].currentIndices + r.length >= this.buffers[this.currentBufferIndex].indexCapacity || this.buffers[this.currentBufferIndex].currentVertices + n.length >= this.buffers[this.currentBufferIndex].vertexCapacity) && this.changeBuffer(), this.addIndices(r), this.addVertices(n);
  }
  update() {
    this.buffers[this.currentBufferIndex].fill(), this.buffers[this.currentBufferIndex].updateBufferData(this.gl);
  }
  render(n) {
    St(n, {
      modelMatrix: this.transform.getMatrix()
    });
    for (let r = 0; r <= this.currentBufferIndex; r++)
      Le(this.gl, n, this.buffers[r].bufferInfo), Oe(this.gl, this.buffers[r].bufferInfo, this.gl.TRIANGLES, this.buffers[r].currentIndices);
  }
  reset() {
    this.currentBufferIndex = 0;
    for (const n of this.buffers)
      n.resetCount();
  }
  addBuffer() {
    this.currentBufferIndex++, this.buffers.push(new wt(this.gl, { numVertices: this.bufferSize }));
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
function d(e, t, n, r, i) {
  return r + (e - t) * ((i - r) / (n - t));
}
function ut(e, t, n) {
  const r = e.pos, i = t.pos, o = Math.atan2(i.y - r.y, i.x - r.x), s = Math.cos(o), c = Math.sin(o), f = r.x - n / 2 * c, u = r.y + n / 2 * s, h = r.x + n / 2 * c, a = r.y - n / 2 * s;
  return [new W(new g(f, u), e.color), new W(new g(h, a), e.color)];
}
function Kt(e, t, n, r) {
  let i = e.pos.x, o = e.pos.y, s = t.pos.x, c = t.pos.y, f = n.pos.x, u = n.pos.y;
  const h = o - c, a = i - s, l = o * (i - s) - i * (o - c), y = c - u, x = s - f, m = c * (s - f) - s * (c - u), b = r / 2 * Math.sqrt(h * h + a * a) - l, S = r / 2 * Math.sqrt(h * h + a * a) + l, T = r / 2 * Math.sqrt(y * y + x * x) - m, _ = r / 2 * Math.sqrt(y * y + x * x) + m, B = (a * T - x * b) / (h * x - y * a), M = (y * b - h * T) / (h * x - y * a), D = (a * _ - x * S) / (h * x - y * a), N = (y * S - h * _) / (h * x - y * a);
  return [new W(new g(-B, M), t.color), new W(new g(D, -N), t.color)];
}
function Wi(e, t, n) {
  return new tt(e, t, n);
}
function Hi(e, t, n, r = 255) {
  return new tt(e, t, n, r);
}
class tt {
  constructor(t, n, r, i = 255) {
    p(this, "r");
    p(this, "g");
    p(this, "b");
    p(this, "a");
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
    return new tt(
      d(r, 0, 1, t.r, n.r),
      d(r, 0, 1, t.g, n.g),
      d(r, 0, 1, t.b, n.b),
      d(r, 0, 1, t.a, n.a)
    );
  }
}
class qi {
  /**
   * @param options Options for the renderer
   */
  constructor(t) {
    /** The HTML canvas element */
    p(this, "canvas");
    /** The WebGL Rendering Context */
    p(this, "gl");
    /** The global transform */
    p(this, "transform");
    p(this, "shaderProgramInfo");
    p(this, "buffers", []);
    p(this, "currentBufferIndex", 0);
    p(this, "currentPath", []);
    t.canvas ? this.canvas = t.canvas : (this.canvas = document.createElement("canvas"), this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, document.body.appendChild(this.canvas));
    let n = null;
    if ((t.webglVersion === 2 || !t.webglVersion) && (n = this.canvas.getContext("webgl2"), n || console.warn("WebGL 2 not supported, falling back to WebGL 1")), (!n || t.webglVersion === 1) && (n = this.canvas.getContext("webgl")), !n)
      throw new Error("WebGL not supported");
    this.gl = n, this.shaderProgramInfo = Oi(this.gl, [Xt.vertexShader, Xt.fragmentShader]), this.gl.enable(this.gl.BLEND), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE), $i(this.gl.canvas), this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.setBuffer(new Gi(this.gl, { bufferSize: 1e3 })), this.transform = new ke();
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
  clear(t = new tt(0, 0, 0, 255)) {
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
    const o = new W(t, i), s = new W(n, i);
    this.buffers[this.currentBufferIndex].addVerticesAndIndices(
      this.transform.transformVertices([...ut(o, s, r), ...ut(s, o, r)]),
      [0, 1, 2, 0, 2, 3]
    );
  }
  path(t, n, r = !1) {
    const i = [], o = [], s = t[0], c = t[1];
    r ? i.push(...Kt(t[t.length - 1], s, c, n)) : i.push(...ut(s, c, n));
    for (let f = 0; f < t.length - (r ? 1 : 2); f++)
      o.push(0 + f * 2, 1 + f * 2, 2 + f * 2, 1 + f * 2, 2 + f * 2, 3 + f * 2), i.push(...Kt(t[f], t[f + 1], t[(f + 2) % t.length], n));
    if (r) {
      const f = i.length - 2;
      o.push(f, f + 1, 0, f + 1, 0, 1);
    } else {
      const f = i.length - 2;
      o.push(f + 0, f + 1, f + 2, f + 0, f + 2, f + 3), i.push(...ut(t[t.length - 1], t[t.length - 2], n));
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
    t instanceof W ? this.currentPath.push(t) : n && this.currentPath.push(new W(t, n));
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
      f.push(new W(new g(t.x + n * Math.cos(h), t.y + n * Math.sin(h)), o));
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
    const i = [t, new g(t.x + n.x, t.y), new g(t.x + n.y, t.y + n.y), new g(t.x, t.y + n.y)];
    this.currentPath.push(...i.map((o) => new W(o, r)));
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
      let y = this.currentPath[c];
      const x = u.pos.copy().sub(f.pos);
      for (let m = 1; m < a; m++) {
        const b = f.pos.copy().add(x.copy().setMag(l * m));
        let S = new W(b, tt.interpolate(f.color, u.color, m / a));
        if (m === 1 && o && (this.path([o, f, S], t), c === s - 1))
          break;
        m % 2 === 0 && this.path([y, S], t), y = S;
      }
      o = y;
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
      viewProjectionMatrix: t ? t.getMatrix() : Z.identity()
    };
    this.gl.useProgram(this.shaderProgramInfo.program), St(this.shaderProgramInfo, n);
    for (const r of this.buffers)
      console.log(r), r.render(this.shaderProgramInfo);
    this.buffers[0].reset();
  }
  /**
   * Returns the size of the canvas
   */
  getDisplaySize() {
    return new g(this.canvas.width, this.canvas.height);
  }
}
class ji extends $e {
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
        this.gl.deleteBuffer(this.buffer.bufferInfo.indices), this.buffer = new wt(this.gl, {
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
      this.buffer = new wt(this.gl, {
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
    St(n, {
      modelMatrix: this.transform.getMatrix()
    }), Le(this.gl, n, this.buffer.bufferInfo), Oe(this.gl, this.buffer.bufferInfo, this.gl.TRIANGLES, this.buffer.currentIndices);
  }
}
class Xi {
  constructor(t) {
    p(this, "zoom", 1);
    p(this, "pos", new g(0, 0));
    p(this, "displaySize", new g(0, 0));
    p(this, "aspect", 1);
    // Aspect ratio
    p(this, "matrix", Z.identity());
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
    this.matrix = Z.translate(
      Z.ortho(-this.aspect * t, this.aspect * t, 1 * t, -1 * t, -1, 1),
      fn.create(-this.pos.x, -this.pos.y)
    );
  }
  /**
   * Converts a vector (position) in screen space into world space
   * @param vector
   * @returns The Vector converted to World space
   */
  screenSpaceToWorldSpace(t) {
    const n = window.innerHeight / this.zoom, r = d(t.x, 0, window.innerWidth, -this.aspect * n, this.aspect * n) + this.pos.x, i = d(t.y, 0, window.innerHeight, -1 * n, 1 * n) + this.pos.y;
    return new g(r, i);
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
  $e as Buffer,
  wt as BufferData,
  Xi as Camera,
  tt as Color,
  Gi as DynamicBuffer,
  Wi as RGB,
  Hi as RGBA,
  qi as Renderer,
  ji as StaticBuffer,
  ke as Transform,
  g as Vector,
  W as Vertex
};
