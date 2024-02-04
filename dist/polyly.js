/* @license twgl.js 5.5.3 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */
let g = Float32Array;
function ke(e) {
  const t = g;
  return g = e, t;
}
function j(e, t, n) {
  const r = new g(3);
  return e && (r[0] = e), t && (r[1] = t), n && (r[2] = n), r;
}
function $e(e, t, n) {
  return n = n || new g(3), n[0] = e[0] + t[0], n[1] = e[1] + t[1], n[2] = e[2] + t[2], n;
}
function Xt(e, t, n) {
  return n = n || new g(3), n[0] = e[0] - t[0], n[1] = e[1] - t[1], n[2] = e[2] - t[2], n;
}
function Ge(e, t, n, r) {
  return r = r || new g(3), r[0] = e[0] + n * (t[0] - e[0]), r[1] = e[1] + n * (t[1] - e[1]), r[2] = e[2] + n * (t[2] - e[2]), r;
}
function He(e, t, n, r) {
  return r = r || new g(3), r[0] = e[0] + n[0] * (t[0] - e[0]), r[1] = e[1] + n[1] * (t[1] - e[1]), r[2] = e[2] + n[2] * (t[2] - e[2]), r;
}
function We(e, t, n) {
  return n = n || new g(3), n[0] = Math.max(e[0], t[0]), n[1] = Math.max(e[1], t[1]), n[2] = Math.max(e[2], t[2]), n;
}
function Ye(e, t, n) {
  return n = n || new g(3), n[0] = Math.min(e[0], t[0]), n[1] = Math.min(e[1], t[1]), n[2] = Math.min(e[2], t[2]), n;
}
function qe(e, t, n) {
  return n = n || new g(3), n[0] = e[0] * t, n[1] = e[1] * t, n[2] = e[2] * t, n;
}
function je(e, t, n) {
  return n = n || new g(3), n[0] = e[0] / t, n[1] = e[1] / t, n[2] = e[2] / t, n;
}
function St(e, t, n) {
  n = n || new g(3);
  const r = e[2] * t[0] - e[0] * t[2], i = e[0] * t[1] - e[1] * t[0];
  return n[0] = e[1] * t[2] - e[2] * t[1], n[1] = r, n[2] = i, n;
}
function Xe(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Ke(e) {
  return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
}
function de(e) {
  return e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
}
function Ze(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
  return Math.sqrt(n * n + r * r + i * i);
}
function Je(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
  return n * n + r * r + i * i;
}
function at(e, t) {
  t = t || new g(3);
  const n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], r = Math.sqrt(n);
  return r > 1e-5 ? (t[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r) : (t[0] = 0, t[1] = 0, t[2] = 0), t;
}
function Qe(e, t) {
  return t = t || new g(3), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t;
}
function tn(e, t) {
  return t = t || new g(3), t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
}
function en(e, t, n) {
  return n = n || new g(3), n[0] = e[0] * t[0], n[1] = e[1] * t[1], n[2] = e[2] * t[2], n;
}
function nn(e, t, n) {
  return n = n || new g(3), n[0] = e[0] / t[0], n[1] = e[1] / t[1], n[2] = e[2] / t[2], n;
}
var rn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  add: $e,
  copy: tn,
  create: j,
  cross: St,
  distance: Ze,
  distanceSq: Je,
  divide: nn,
  divScalar: je,
  dot: Xe,
  lerp: Ge,
  lerpV: He,
  length: Ke,
  lengthSq: de,
  max: We,
  min: Ye,
  mulScalar: qe,
  multiply: en,
  negate: Qe,
  normalize: at,
  setDefaultType: ke,
  subtract: Xt
});
let E = Float32Array;
function on(e) {
  const t = E;
  return E = e, t;
}
function sn(e, t) {
  return t = t || new E(16), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t[4] = -e[4], t[5] = -e[5], t[6] = -e[6], t[7] = -e[7], t[8] = -e[8], t[9] = -e[9], t[10] = -e[10], t[11] = -e[11], t[12] = -e[12], t[13] = -e[13], t[14] = -e[14], t[15] = -e[15], t;
}
function cn() {
  return new E(16).fill(0);
}
function Kt(e, t) {
  return t = t || new E(16), t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
}
function dt(e) {
  return e = e || new E(16), e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function an(e, t) {
  if (t = t || new E(16), t === e) {
    let T;
    return T = e[1], e[1] = e[4], e[4] = T, T = e[2], e[2] = e[8], e[8] = T, T = e[3], e[3] = e[12], e[12] = T, T = e[6], e[6] = e[9], e[9] = T, T = e[7], e[7] = e[13], e[13] = T, T = e[11], e[11] = e[14], e[14] = T, t;
  }
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], o = e[0 * 4 + 3], s = e[1 * 4 + 0], c = e[1 * 4 + 1], a = e[1 * 4 + 2], f = e[1 * 4 + 3], h = e[2 * 4 + 0], u = e[2 * 4 + 1], l = e[2 * 4 + 2], x = e[2 * 4 + 3], y = e[3 * 4 + 0], m = e[3 * 4 + 1], w = e[3 * 4 + 2], S = e[3 * 4 + 3];
  return t[0] = n, t[1] = s, t[2] = h, t[3] = y, t[4] = r, t[5] = c, t[6] = u, t[7] = m, t[8] = i, t[9] = a, t[10] = l, t[11] = w, t[12] = o, t[13] = f, t[14] = x, t[15] = S, t;
}
function Zt(e, t) {
  t = t || new E(16);
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], o = e[0 * 4 + 3], s = e[1 * 4 + 0], c = e[1 * 4 + 1], a = e[1 * 4 + 2], f = e[1 * 4 + 3], h = e[2 * 4 + 0], u = e[2 * 4 + 1], l = e[2 * 4 + 2], x = e[2 * 4 + 3], y = e[3 * 4 + 0], m = e[3 * 4 + 1], w = e[3 * 4 + 2], S = e[3 * 4 + 3], T = l * S, I = w * x, _ = a * S, B = w * f, M = a * x, D = l * f, z = i * S, U = w * o, C = i * x, V = l * o, L = i * f, O = a * o, k = h * m, $ = y * u, G = s * m, H = y * c, W = s * u, tt = h * c, et = n * m, nt = y * r, rt = n * u, it = h * r, ot = n * c, st = s * r, Vt = T * c + B * u + M * m - (I * c + _ * u + D * m), Lt = I * r + z * u + V * m - (T * r + U * u + C * m), Ot = _ * r + U * c + L * m - (B * r + z * c + O * m), kt = D * r + C * c + O * u - (M * r + V * c + L * u), P = 1 / (n * Vt + s * Lt + h * Ot + y * kt);
  return t[0] = P * Vt, t[1] = P * Lt, t[2] = P * Ot, t[3] = P * kt, t[4] = P * (I * s + _ * h + D * y - (T * s + B * h + M * y)), t[5] = P * (T * n + U * h + C * y - (I * n + z * h + V * y)), t[6] = P * (B * n + z * s + O * y - (_ * n + U * s + L * y)), t[7] = P * (M * n + V * s + L * h - (D * n + C * s + O * h)), t[8] = P * (k * f + H * x + W * S - ($ * f + G * x + tt * S)), t[9] = P * ($ * o + et * x + it * S - (k * o + nt * x + rt * S)), t[10] = P * (G * o + nt * f + ot * S - (H * o + et * f + st * S)), t[11] = P * (tt * o + rt * f + st * x - (W * o + it * f + ot * x)), t[12] = P * (G * l + tt * w + $ * a - (W * w + k * a + H * l)), t[13] = P * (rt * w + k * i + nt * l - (et * l + it * w + $ * i)), t[14] = P * (et * a + st * w + H * i - (ot * w + G * i + nt * a)), t[15] = P * (ot * l + W * i + it * a - (rt * a + st * l + tt * i)), t;
}
function fn(e, t, n) {
  n = n || new E(16);
  const r = e[0], i = e[1], o = e[2], s = e[3], c = e[4 + 0], a = e[4 + 1], f = e[4 + 2], h = e[4 + 3], u = e[8 + 0], l = e[8 + 1], x = e[8 + 2], y = e[8 + 3], m = e[12 + 0], w = e[12 + 1], S = e[12 + 2], T = e[12 + 3], I = t[0], _ = t[1], B = t[2], M = t[3], D = t[4 + 0], z = t[4 + 1], U = t[4 + 2], C = t[4 + 3], V = t[8 + 0], L = t[8 + 1], O = t[8 + 2], k = t[8 + 3], $ = t[12 + 0], G = t[12 + 1], H = t[12 + 2], W = t[12 + 3];
  return n[0] = r * I + c * _ + u * B + m * M, n[1] = i * I + a * _ + l * B + w * M, n[2] = o * I + f * _ + x * B + S * M, n[3] = s * I + h * _ + y * B + T * M, n[4] = r * D + c * z + u * U + m * C, n[5] = i * D + a * z + l * U + w * C, n[6] = o * D + f * z + x * U + S * C, n[7] = s * D + h * z + y * U + T * C, n[8] = r * V + c * L + u * O + m * k, n[9] = i * V + a * L + l * O + w * k, n[10] = o * V + f * L + x * O + S * k, n[11] = s * V + h * L + y * O + T * k, n[12] = r * $ + c * G + u * H + m * W, n[13] = i * $ + a * G + l * H + w * W, n[14] = o * $ + f * G + x * H + S * W, n[15] = s * $ + h * G + y * H + T * W, n;
}
function un(e, t, n) {
  return n = n || dt(), e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11]), n[12] = t[0], n[13] = t[1], n[14] = t[2], n[15] = 1, n;
}
function hn(e, t) {
  return t = t || j(), t[0] = e[12], t[1] = e[13], t[2] = e[14], t;
}
function ln(e, t, n) {
  n = n || j();
  const r = t * 4;
  return n[0] = e[r + 0], n[1] = e[r + 1], n[2] = e[r + 2], n;
}
function xn(e, t, n, r) {
  r !== e && (r = Kt(e, r));
  const i = n * 4;
  return r[i + 0] = t[0], r[i + 1] = t[1], r[i + 2] = t[2], r;
}
function yn(e, t, n, r, i) {
  i = i || new E(16);
  const o = Math.tan(Math.PI * 0.5 - 0.5 * e), s = 1 / (n - r);
  return i[0] = o / t, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = o, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = (n + r) * s, i[11] = -1, i[12] = 0, i[13] = 0, i[14] = n * r * s * 2, i[15] = 0, i;
}
function pn(e, t, n, r, i, o, s) {
  return s = s || new E(16), s[0] = 2 / (t - e), s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 2 / (r - n), s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = 2 / (i - o), s[11] = 0, s[12] = (t + e) / (e - t), s[13] = (r + n) / (n - r), s[14] = (o + i) / (i - o), s[15] = 1, s;
}
function An(e, t, n, r, i, o, s) {
  s = s || new E(16);
  const c = t - e, a = r - n, f = i - o;
  return s[0] = 2 * i / c, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 2 * i / a, s[6] = 0, s[7] = 0, s[8] = (e + t) / c, s[9] = (r + n) / a, s[10] = o / f, s[11] = -1, s[12] = 0, s[13] = 0, s[14] = i * o / f, s[15] = 0, s;
}
let X, Z, q;
function mn(e, t, n, r) {
  return r = r || new E(16), X = X || j(), Z = Z || j(), q = q || j(), at(
    Xt(e, t, q),
    q
  ), at(St(n, q, X), X), at(St(q, X, Z), Z), r[0] = X[0], r[1] = X[1], r[2] = X[2], r[3] = 0, r[4] = Z[0], r[5] = Z[1], r[6] = Z[2], r[7] = 0, r[8] = q[0], r[9] = q[1], r[10] = q[2], r[11] = 0, r[12] = e[0], r[13] = e[1], r[14] = e[2], r[15] = 1, r;
}
function Tn(e, t) {
  return t = t || new E(16), t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t;
}
function Sn(e, t, n) {
  n = n || new E(16);
  const r = t[0], i = t[1], o = t[2], s = e[0], c = e[1], a = e[2], f = e[3], h = e[1 * 4 + 0], u = e[1 * 4 + 1], l = e[1 * 4 + 2], x = e[1 * 4 + 3], y = e[2 * 4 + 0], m = e[2 * 4 + 1], w = e[2 * 4 + 2], S = e[2 * 4 + 3], T = e[3 * 4 + 0], I = e[3 * 4 + 1], _ = e[3 * 4 + 2], B = e[3 * 4 + 3];
  return e !== n && (n[0] = s, n[1] = c, n[2] = a, n[3] = f, n[4] = h, n[5] = u, n[6] = l, n[7] = x, n[8] = y, n[9] = m, n[10] = w, n[11] = S), n[12] = s * r + h * i + y * o + T, n[13] = c * r + u * i + m * o + I, n[14] = a * r + l * i + w * o + _, n[15] = f * r + x * i + S * o + B, n;
}
function wn(e, t) {
  t = t || new E(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function En(e, t, n) {
  n = n || new E(16);
  const r = e[4], i = e[5], o = e[6], s = e[7], c = e[8], a = e[9], f = e[10], h = e[11], u = Math.cos(t), l = Math.sin(t);
  return n[4] = u * r + l * c, n[5] = u * i + l * a, n[6] = u * o + l * f, n[7] = u * s + l * h, n[8] = u * c - l * r, n[9] = u * a - l * i, n[10] = u * f - l * o, n[11] = u * h - l * s, e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function bn(e, t) {
  t = t || new E(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function In(e, t, n) {
  n = n || new E(16);
  const r = e[0 * 4 + 0], i = e[0 * 4 + 1], o = e[0 * 4 + 2], s = e[0 * 4 + 3], c = e[2 * 4 + 0], a = e[2 * 4 + 1], f = e[2 * 4 + 2], h = e[2 * 4 + 3], u = Math.cos(t), l = Math.sin(t);
  return n[0] = u * r - l * c, n[1] = u * i - l * a, n[2] = u * o - l * f, n[3] = u * s - l * h, n[8] = u * c + l * r, n[9] = u * a + l * i, n[10] = u * f + l * o, n[11] = u * h + l * s, e !== n && (n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function _n(e, t) {
  t = t || new E(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Bn(e, t, n) {
  n = n || new E(16);
  const r = e[0 * 4 + 0], i = e[0 * 4 + 1], o = e[0 * 4 + 2], s = e[0 * 4 + 3], c = e[1 * 4 + 0], a = e[1 * 4 + 1], f = e[1 * 4 + 2], h = e[1 * 4 + 3], u = Math.cos(t), l = Math.sin(t);
  return n[0] = u * r + l * c, n[1] = u * i + l * a, n[2] = u * o + l * f, n[3] = u * s + l * h, n[4] = u * c - l * r, n[5] = u * a - l * i, n[6] = u * f - l * o, n[7] = u * h - l * s, e !== n && (n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function gn(e, t, n) {
  n = n || new E(16);
  let r = e[0], i = e[1], o = e[2];
  const s = Math.sqrt(r * r + i * i + o * o);
  r /= s, i /= s, o /= s;
  const c = r * r, a = i * i, f = o * o, h = Math.cos(t), u = Math.sin(t), l = 1 - h;
  return n[0] = c + (1 - c) * h, n[1] = r * i * l + o * u, n[2] = r * o * l - i * u, n[3] = 0, n[4] = r * i * l - o * u, n[5] = a + (1 - a) * h, n[6] = i * o * l + r * u, n[7] = 0, n[8] = r * o * l + i * u, n[9] = i * o * l - r * u, n[10] = f + (1 - f) * h, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
}
function Mn(e, t, n, r) {
  r = r || new E(16);
  let i = t[0], o = t[1], s = t[2];
  const c = Math.sqrt(i * i + o * o + s * s);
  i /= c, o /= c, s /= c;
  const a = i * i, f = o * o, h = s * s, u = Math.cos(n), l = Math.sin(n), x = 1 - u, y = a + (1 - a) * u, m = i * o * x + s * l, w = i * s * x - o * l, S = i * o * x - s * l, T = f + (1 - f) * u, I = o * s * x + i * l, _ = i * s * x + o * l, B = o * s * x - i * l, M = h + (1 - h) * u, D = e[0], z = e[1], U = e[2], C = e[3], V = e[4], L = e[5], O = e[6], k = e[7], $ = e[8], G = e[9], H = e[10], W = e[11];
  return r[0] = y * D + m * V + w * $, r[1] = y * z + m * L + w * G, r[2] = y * U + m * O + w * H, r[3] = y * C + m * k + w * W, r[4] = S * D + T * V + I * $, r[5] = S * z + T * L + I * G, r[6] = S * U + T * O + I * H, r[7] = S * C + T * k + I * W, r[8] = _ * D + B * V + M * $, r[9] = _ * z + B * L + M * G, r[10] = _ * U + B * O + M * H, r[11] = _ * C + B * k + M * W, e !== r && (r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15]), r;
}
function Pn(e, t) {
  return t = t || new E(16), t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Rn(e, t, n) {
  n = n || new E(16);
  const r = t[0], i = t[1], o = t[2];
  return n[0] = r * e[0 * 4 + 0], n[1] = r * e[0 * 4 + 1], n[2] = r * e[0 * 4 + 2], n[3] = r * e[0 * 4 + 3], n[4] = i * e[1 * 4 + 0], n[5] = i * e[1 * 4 + 1], n[6] = i * e[1 * 4 + 2], n[7] = i * e[1 * 4 + 3], n[8] = o * e[2 * 4 + 0], n[9] = o * e[2 * 4 + 1], n[10] = o * e[2 * 4 + 2], n[11] = o * e[2 * 4 + 3], e !== n && (n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function vn(e, t, n) {
  n = n || j();
  const r = t[0], i = t[1], o = t[2], s = r * e[0 * 4 + 3] + i * e[1 * 4 + 3] + o * e[2 * 4 + 3] + e[3 * 4 + 3];
  return n[0] = (r * e[0 * 4 + 0] + i * e[1 * 4 + 0] + o * e[2 * 4 + 0] + e[3 * 4 + 0]) / s, n[1] = (r * e[0 * 4 + 1] + i * e[1 * 4 + 1] + o * e[2 * 4 + 1] + e[3 * 4 + 1]) / s, n[2] = (r * e[0 * 4 + 2] + i * e[1 * 4 + 2] + o * e[2 * 4 + 2] + e[3 * 4 + 2]) / s, n;
}
function Dn(e, t, n) {
  n = n || j();
  const r = t[0], i = t[1], o = t[2];
  return n[0] = r * e[0 * 4 + 0] + i * e[1 * 4 + 0] + o * e[2 * 4 + 0], n[1] = r * e[0 * 4 + 1] + i * e[1 * 4 + 1] + o * e[2 * 4 + 1], n[2] = r * e[0 * 4 + 2] + i * e[1 * 4 + 2] + o * e[2 * 4 + 2], n;
}
function Fn(e, t, n) {
  n = n || j();
  const r = Zt(e), i = t[0], o = t[1], s = t[2];
  return n[0] = i * r[0 * 4 + 0] + o * r[0 * 4 + 1] + s * r[0 * 4 + 2], n[1] = i * r[1 * 4 + 0] + o * r[1 * 4 + 1] + s * r[1 * 4 + 2], n[2] = i * r[2 * 4 + 0] + o * r[2 * 4 + 1] + s * r[2 * 4 + 2], n;
}
var J = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  axisRotate: Mn,
  axisRotation: gn,
  copy: Kt,
  create: cn,
  frustum: An,
  getAxis: ln,
  getTranslation: hn,
  identity: dt,
  inverse: Zt,
  lookAt: mn,
  multiply: fn,
  negate: sn,
  ortho: pn,
  perspective: yn,
  rotateX: En,
  rotateY: In,
  rotateZ: Bn,
  rotationX: wn,
  rotationY: bn,
  rotationZ: _n,
  scale: Rn,
  scaling: Pn,
  setAxis: xn,
  setDefaultType: on,
  setTranslation: un,
  transformDirection: Dn,
  transformNormal: Fn,
  transformPoint: vn,
  translate: Sn,
  translation: Tn,
  transpose: an
});
const bt = 5120, Q = 5121, It = 5122, _t = 5123, Bt = 5124, gt = 5125, Mt = 5126, Nn = 32819, zn = 32820, Un = 33635, Cn = 5131, Vn = 33640, Ln = 35899, On = 35902, kn = 36269, $n = 34042, Jt = {};
{
  const e = Jt;
  e[bt] = Int8Array, e[Q] = Uint8Array, e[It] = Int16Array, e[_t] = Uint16Array, e[Bt] = Int32Array, e[gt] = Uint32Array, e[Mt] = Float32Array, e[Nn] = Uint16Array, e[zn] = Uint16Array, e[Un] = Uint16Array, e[Cn] = Uint16Array, e[Vn] = Uint32Array, e[Ln] = Uint32Array, e[On] = Uint32Array, e[kn] = Uint32Array, e[$n] = Uint32Array;
}
function Qt(e) {
  if (e instanceof Int8Array)
    return bt;
  if (e instanceof Uint8Array || e instanceof Uint8ClampedArray)
    return Q;
  if (e instanceof Int16Array)
    return It;
  if (e instanceof Uint16Array)
    return _t;
  if (e instanceof Int32Array)
    return Bt;
  if (e instanceof Uint32Array)
    return gt;
  if (e instanceof Float32Array)
    return Mt;
  throw new Error("unsupported typed array type");
}
function te(e) {
  if (e === Int8Array)
    return bt;
  if (e === Uint8Array || e === Uint8ClampedArray)
    return Q;
  if (e === Int16Array)
    return It;
  if (e === Uint16Array)
    return _t;
  if (e === Int32Array)
    return Bt;
  if (e === Uint32Array)
    return gt;
  if (e === Float32Array)
    return Mt;
  throw new Error("unsupported typed array type");
}
function Gn(e) {
  const t = Jt[e];
  if (!t)
    throw new Error("unknown gl type");
  return t;
}
const wt = typeof SharedArrayBuffer < "u" ? function(t) {
  return t && t.buffer && (t.buffer instanceof ArrayBuffer || t.buffer instanceof SharedArrayBuffer);
} : function(t) {
  return t && t.buffer && t.buffer instanceof ArrayBuffer;
};
function Hn(...e) {
  console.error(...e);
}
const $t = /* @__PURE__ */ new Map();
function ee(e, t) {
  if (!e || typeof e != "object")
    return !1;
  let n = $t.get(t);
  n || (n = /* @__PURE__ */ new WeakMap(), $t.set(t, n));
  let r = n.get(e);
  if (r === void 0) {
    const i = Object.prototype.toString.call(e);
    r = i.substring(8, i.length - 1) === t, n.set(e, r);
  }
  return r;
}
function Wn(e, t) {
  return typeof WebGLBuffer < "u" && ee(t, "WebGLBuffer");
}
function ne(e, t) {
  return typeof WebGLTexture < "u" && ee(t, "WebGLTexture");
}
const re = 35044, Y = 34962, Yn = 34963, qn = 34660, jn = 5120, Xn = 5121, Kn = 5122, dn = 5123, Zn = 5124, Jn = 5125, ie = 5126, oe = {
  attribPrefix: ""
};
function se(e, t, n, r, i) {
  e.bindBuffer(t, n), e.bufferData(t, r, i || re);
}
function ce(e, t, n, r) {
  if (Wn(e, t))
    return t;
  n = n || Y;
  const i = e.createBuffer();
  return se(e, n, i, t, r), i;
}
function ae(e) {
  return e === "indices";
}
function Qn(e) {
  return e === Int8Array || e === Uint8Array;
}
function tr(e) {
  return e.length ? e : e.data;
}
const er = /coord|texture/i, nr = /color|colour/i;
function rr(e, t) {
  let n;
  if (er.test(e) ? n = 2 : nr.test(e) ? n = 4 : n = 3, t % n > 0)
    throw new Error(`Can not guess numComponents for attribute '${e}'. Tried ${n} but ${t} values is not evenly divisible by ${n}. You should specify it.`);
  return n;
}
function ir(e, t, n) {
  return e.numComponents || e.size || rr(t, n || tr(e).length);
}
function Pt(e, t) {
  if (wt(e))
    return e;
  if (wt(e.data))
    return e.data;
  Array.isArray(e) && (e = {
    data: e
  });
  let n = e.type ? Rt(e.type) : void 0;
  return n || (ae(t) ? n = Uint16Array : n = Float32Array), new n(e.data);
}
function or(e) {
  return typeof e == "number" ? e : e ? te(e) : ie;
}
function Rt(e) {
  return typeof e == "number" ? Gn(e) : e || Float32Array;
}
function sr(e, t) {
  return {
    buffer: t.buffer,
    numValues: 2 * 3 * 4,
    // safely divided by 2, 3, 4
    type: or(t.type),
    arrayType: Rt(t.type)
  };
}
function cr(e, t) {
  const n = t.data || t, r = Rt(t.type), i = n * r.BYTES_PER_ELEMENT, o = e.createBuffer();
  return e.bindBuffer(Y, o), e.bufferData(Y, i, t.drawType || re), {
    buffer: o,
    numValues: n,
    type: te(r),
    arrayType: r
  };
}
function ar(e, t, n) {
  const r = Pt(t, n);
  return {
    arrayType: r.constructor,
    buffer: ce(e, r, void 0, t.drawType),
    type: Qt(r),
    numValues: 0
  };
}
function fr(e, t) {
  const n = {};
  return Object.keys(t).forEach(function(r) {
    if (!ae(r)) {
      const i = t[r], o = i.attrib || i.name || i.attribName || oe.attribPrefix + r;
      if (i.value) {
        if (!Array.isArray(i.value) && !wt(i.value))
          throw new Error("array.value is not array or typedarray");
        n[o] = {
          value: i.value
        };
      } else {
        let s;
        i.buffer && i.buffer instanceof WebGLBuffer ? s = sr : typeof i == "number" || typeof i.data == "number" ? s = cr : s = ar;
        const { buffer: c, type: a, numValues: f, arrayType: h } = s(e, i, r), u = i.normalize !== void 0 ? i.normalize : Qn(h), l = ir(i, r, f);
        n[o] = {
          buffer: c,
          numComponents: l,
          type: a,
          normalize: u,
          stride: i.stride || 0,
          offset: i.offset || 0,
          divisor: i.divisor === void 0 ? void 0 : i.divisor,
          drawType: i.drawType
        };
      }
    }
  }), e.bindBuffer(Y, null), n;
}
function Gt(e, t, n, r) {
  n = Pt(n), r !== void 0 ? (e.bindBuffer(Y, t.buffer), e.bufferSubData(Y, r, n)) : se(e, Y, t.buffer, n, t.drawType);
}
function ur(e, t) {
  return t === jn || t === Xn ? 1 : t === Kn || t === dn ? 2 : t === Zn || t === Jn || t === ie ? 4 : 0;
}
const Tt = ["position", "positions", "a_position"];
function hr(e, t) {
  let n, r;
  for (r = 0; r < Tt.length && (n = Tt[r], !(n in t || (n = oe.attribPrefix + n, n in t))); ++r)
    ;
  r === Tt.length && (n = Object.keys(t)[0]);
  const i = t[n];
  if (!i.buffer)
    return 1;
  e.bindBuffer(Y, i.buffer);
  const o = e.getBufferParameter(Y, qn);
  e.bindBuffer(Y, null);
  const s = ur(e, i.type), c = o / s, a = i.numComponents || i.size, f = c / a;
  if (f % 1 !== 0)
    throw new Error(`numComponents ${a} not correct for length ${length}`);
  return f;
}
function lr(e, t, n) {
  const r = fr(e, t), i = Object.assign({}, n || {});
  i.attribs = Object.assign({}, n ? n.attribs : {}, r);
  const o = t.indices;
  if (o) {
    const s = Pt(o, "indices");
    i.indices = ce(e, s, Yn), i.numElements = s.length, i.elementType = Qt(s);
  } else
    i.numElements || (i.numElements = hr(e, i.attribs));
  return i;
}
function vt(e) {
  return !!e.texStorage2D;
}
const xr = function() {
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
}(), Dt = Hn;
function fe(e) {
  return typeof document < "u" && document.getElementById ? document.getElementById(e) : null;
}
const ft = 33984, ut = 34962, yr = 34963, pr = 35713, Ar = 35714, mr = 35632, Tr = 35633, Sr = 35981, ue = 35718, wr = 35721, Er = 35971, br = 35382, Ir = 35396, _r = 35398, Br = 35392, gr = 35395, ht = 5126, he = 35664, le = 35665, xe = 35666, Ft = 5124, ye = 35667, pe = 35668, Ae = 35669, me = 35670, Te = 35671, Se = 35672, we = 35673, Ee = 35674, be = 35675, Ie = 35676, Mr = 35678, Pr = 35680, Rr = 35679, vr = 35682, Dr = 35685, Fr = 35686, Nr = 35687, zr = 35688, Ur = 35689, Cr = 35690, Vr = 36289, Lr = 36292, Or = 36293, Nt = 5125, _e = 36294, Be = 36295, ge = 36296, kr = 36298, $r = 36299, Gr = 36300, Hr = 36303, Wr = 36306, Yr = 36307, qr = 36308, jr = 36311, lt = 3553, xt = 34067, zt = 32879, yt = 35866, p = {};
function Me(e, t) {
  return p[t].bindPoint;
}
function Xr(e, t) {
  return function(n) {
    e.uniform1f(t, n);
  };
}
function Kr(e, t) {
  return function(n) {
    e.uniform1fv(t, n);
  };
}
function dr(e, t) {
  return function(n) {
    e.uniform2fv(t, n);
  };
}
function Zr(e, t) {
  return function(n) {
    e.uniform3fv(t, n);
  };
}
function Jr(e, t) {
  return function(n) {
    e.uniform4fv(t, n);
  };
}
function Pe(e, t) {
  return function(n) {
    e.uniform1i(t, n);
  };
}
function Re(e, t) {
  return function(n) {
    e.uniform1iv(t, n);
  };
}
function ve(e, t) {
  return function(n) {
    e.uniform2iv(t, n);
  };
}
function De(e, t) {
  return function(n) {
    e.uniform3iv(t, n);
  };
}
function Fe(e, t) {
  return function(n) {
    e.uniform4iv(t, n);
  };
}
function Qr(e, t) {
  return function(n) {
    e.uniform1ui(t, n);
  };
}
function ti(e, t) {
  return function(n) {
    e.uniform1uiv(t, n);
  };
}
function ei(e, t) {
  return function(n) {
    e.uniform2uiv(t, n);
  };
}
function ni(e, t) {
  return function(n) {
    e.uniform3uiv(t, n);
  };
}
function ri(e, t) {
  return function(n) {
    e.uniform4uiv(t, n);
  };
}
function ii(e, t) {
  return function(n) {
    e.uniformMatrix2fv(t, !1, n);
  };
}
function oi(e, t) {
  return function(n) {
    e.uniformMatrix3fv(t, !1, n);
  };
}
function si(e, t) {
  return function(n) {
    e.uniformMatrix4fv(t, !1, n);
  };
}
function ci(e, t) {
  return function(n) {
    e.uniformMatrix2x3fv(t, !1, n);
  };
}
function ai(e, t) {
  return function(n) {
    e.uniformMatrix3x2fv(t, !1, n);
  };
}
function fi(e, t) {
  return function(n) {
    e.uniformMatrix2x4fv(t, !1, n);
  };
}
function ui(e, t) {
  return function(n) {
    e.uniformMatrix4x2fv(t, !1, n);
  };
}
function hi(e, t) {
  return function(n) {
    e.uniformMatrix3x4fv(t, !1, n);
  };
}
function li(e, t) {
  return function(n) {
    e.uniformMatrix4x3fv(t, !1, n);
  };
}
function F(e, t, n, r) {
  const i = Me(e, t);
  return vt(e) ? function(o) {
    let s, c;
    !o || ne(e, o) ? (s = o, c = null) : (s = o.texture, c = o.sampler), e.uniform1i(r, n), e.activeTexture(ft + n), e.bindTexture(i, s), e.bindSampler(n, c);
  } : function(o) {
    e.uniform1i(r, n), e.activeTexture(ft + n), e.bindTexture(i, o);
  };
}
function N(e, t, n, r, i) {
  const o = Me(e, t), s = new Int32Array(i);
  for (let c = 0; c < i; ++c)
    s[c] = n + c;
  return vt(e) ? function(c) {
    e.uniform1iv(r, s), c.forEach(function(a, f) {
      e.activeTexture(ft + s[f]);
      let h, u;
      !a || ne(e, a) ? (h = a, u = null) : (h = a.texture, u = a.sampler), e.bindSampler(n, u), e.bindTexture(o, h);
    });
  } : function(c) {
    e.uniform1iv(r, s), c.forEach(function(a, f) {
      e.activeTexture(ft + s[f]), e.bindTexture(o, a);
    });
  };
}
p[ht] = { Type: Float32Array, size: 4, setter: Xr, arraySetter: Kr };
p[he] = { Type: Float32Array, size: 8, setter: dr, cols: 2 };
p[le] = { Type: Float32Array, size: 12, setter: Zr, cols: 3 };
p[xe] = { Type: Float32Array, size: 16, setter: Jr, cols: 4 };
p[Ft] = { Type: Int32Array, size: 4, setter: Pe, arraySetter: Re };
p[ye] = { Type: Int32Array, size: 8, setter: ve, cols: 2 };
p[pe] = { Type: Int32Array, size: 12, setter: De, cols: 3 };
p[Ae] = { Type: Int32Array, size: 16, setter: Fe, cols: 4 };
p[Nt] = { Type: Uint32Array, size: 4, setter: Qr, arraySetter: ti };
p[_e] = { Type: Uint32Array, size: 8, setter: ei, cols: 2 };
p[Be] = { Type: Uint32Array, size: 12, setter: ni, cols: 3 };
p[ge] = { Type: Uint32Array, size: 16, setter: ri, cols: 4 };
p[me] = { Type: Uint32Array, size: 4, setter: Pe, arraySetter: Re };
p[Te] = { Type: Uint32Array, size: 8, setter: ve, cols: 2 };
p[Se] = { Type: Uint32Array, size: 12, setter: De, cols: 3 };
p[we] = { Type: Uint32Array, size: 16, setter: Fe, cols: 4 };
p[Ee] = { Type: Float32Array, size: 32, setter: ii, rows: 2, cols: 2 };
p[be] = { Type: Float32Array, size: 48, setter: oi, rows: 3, cols: 3 };
p[Ie] = { Type: Float32Array, size: 64, setter: si, rows: 4, cols: 4 };
p[Dr] = { Type: Float32Array, size: 32, setter: ci, rows: 2, cols: 3 };
p[Fr] = { Type: Float32Array, size: 32, setter: fi, rows: 2, cols: 4 };
p[Nr] = { Type: Float32Array, size: 48, setter: ai, rows: 3, cols: 2 };
p[zr] = { Type: Float32Array, size: 48, setter: hi, rows: 3, cols: 4 };
p[Ur] = { Type: Float32Array, size: 64, setter: ui, rows: 4, cols: 2 };
p[Cr] = { Type: Float32Array, size: 64, setter: li, rows: 4, cols: 3 };
p[Mr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: lt };
p[Pr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: xt };
p[Rr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: zt };
p[vr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: lt };
p[Vr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: yt };
p[Lr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: yt };
p[Or] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: xt };
p[kr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: lt };
p[$r] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: zt };
p[Gr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: xt };
p[Hr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: yt };
p[Wr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: lt };
p[Yr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: zt };
p[qr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: xt };
p[jr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: yt };
function pt(e, t) {
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
      e.bindBuffer(ut, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribPointer(
        t,
        n.numComponents || n.size,
        n.type || ht,
        n.normalize || !1,
        n.stride || 0,
        n.offset || 0
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t, n.divisor || 0);
  };
}
function d(e, t) {
  return function(n) {
    if (n.value)
      if (e.disableVertexAttribArray(t), n.value.length === 4)
        e.vertexAttrib4iv(t, n.value);
      else
        throw new Error("The length of an integer constant value must be 4!");
    else
      e.bindBuffer(ut, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribIPointer(
        t,
        n.numComponents || n.size,
        n.type || Ft,
        n.stride || 0,
        n.offset || 0
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t, n.divisor || 0);
  };
}
function At(e, t) {
  return function(n) {
    if (n.value)
      if (e.disableVertexAttribArray(t), n.value.length === 4)
        e.vertexAttrib4uiv(t, n.value);
      else
        throw new Error("The length of an unsigned integer constant value must be 4!");
    else
      e.bindBuffer(ut, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribIPointer(
        t,
        n.numComponents || n.size,
        n.type || Nt,
        n.stride || 0,
        n.offset || 0
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t, n.divisor || 0);
  };
}
function Ut(e, t, n) {
  const r = n.size, i = n.count;
  return function(o) {
    e.bindBuffer(ut, o.buffer);
    const s = o.size || o.numComponents || r, c = s / i, a = o.type || ht, h = p[a].size * s, u = o.normalize || !1, l = o.offset || 0, x = h / i;
    for (let y = 0; y < i; ++y)
      e.enableVertexAttribArray(t + y), e.vertexAttribPointer(
        t + y,
        c,
        a,
        u,
        h,
        l + x * y
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t + y, o.divisor || 0);
  };
}
const b = {};
b[ht] = { size: 4, setter: pt };
b[he] = { size: 8, setter: pt };
b[le] = { size: 12, setter: pt };
b[xe] = { size: 16, setter: pt };
b[Ft] = { size: 4, setter: d };
b[ye] = { size: 8, setter: d };
b[pe] = { size: 12, setter: d };
b[Ae] = { size: 16, setter: d };
b[Nt] = { size: 4, setter: At };
b[_e] = { size: 8, setter: At };
b[Be] = { size: 12, setter: At };
b[ge] = { size: 16, setter: At };
b[me] = { size: 4, setter: d };
b[Te] = { size: 8, setter: d };
b[Se] = { size: 12, setter: d };
b[we] = { size: 16, setter: d };
b[Ee] = { size: 4, setter: Ut, count: 2 };
b[be] = { size: 9, setter: Ut, count: 3 };
b[Ie] = { size: 16, setter: Ut, count: 4 };
const xi = /ERROR:\s*\d+:(\d+)/gi;
function yi(e, t = "", n = 0) {
  const r = [...t.matchAll(xi)], i = new Map(r.map((o, s) => {
    const c = parseInt(o[1]), a = r[s + 1], f = a ? a.index : t.length, h = t.substring(o.index, f);
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
const Ht = /^[ \t]*\n/;
function Ne(e) {
  let t = 0;
  return Ht.test(e) && (t = 1, e = e.replace(Ht, "")), { lineOffset: t, shaderSource: e };
}
function pi(e, t) {
  return e.errorCallback(t), e.callback && setTimeout(() => {
    e.callback(`${t}
${e.errors.join(`
`)}`);
  }), null;
}
function Ai(e, t, n, r) {
  if (r = r || Dt, !e.getShaderParameter(n, pr)) {
    const o = e.getShaderInfoLog(n), { lineOffset: s, shaderSource: c } = Ne(e.getShaderSource(n)), a = `${yi(c, o, s)}
Error compiling ${xr(e, t)}: ${o}`;
    return r(a), a;
  }
  return "";
}
function Ct(e, t, n) {
  let r, i, o;
  if (typeof t == "function" && (n = t, t = void 0), typeof e == "function")
    n = e, e = void 0;
  else if (e && !Array.isArray(e)) {
    const f = e;
    n = f.errorCallback, e = f.attribLocations, r = f.transformFeedbackVaryings, i = f.transformFeedbackMode, o = f.callback;
  }
  const s = n || Dt, c = [], a = {
    errorCallback(f, ...h) {
      c.push(f), s(f, ...h);
    },
    transformFeedbackVaryings: r,
    transformFeedbackMode: i,
    callback: o,
    errors: c
  };
  {
    let f = {};
    Array.isArray(e) ? e.forEach(function(h, u) {
      f[h] = t ? t[u] : u;
    }) : f = e || {}, a.attribLocations = f;
  }
  return a;
}
const mi = [
  "VERTEX_SHADER",
  "FRAGMENT_SHADER"
];
function Ti(e, t) {
  if (t.indexOf("frag") >= 0)
    return mr;
  if (t.indexOf("vert") >= 0)
    return Tr;
}
function Si(e, t, n) {
  const r = e.getAttachedShaders(t);
  for (const i of r)
    n.has(i) && e.deleteShader(i);
  e.deleteProgram(t);
}
const wi = (e = 0) => new Promise((t) => setTimeout(t, e));
function Ei(e, t, n) {
  const r = e.createProgram(), {
    attribLocations: i,
    transformFeedbackVaryings: o,
    transformFeedbackMode: s
  } = Ct(n);
  for (let c = 0; c < t.length; ++c) {
    let a = t[c];
    if (typeof a == "string") {
      const f = fe(a), h = f ? f.text : a;
      let u = e[mi[c]];
      f && f.type && (u = Ti(e, f.type) || u), a = e.createShader(u), e.shaderSource(a, Ne(h).shaderSource), e.compileShader(a), e.attachShader(r, a);
    }
  }
  Object.entries(i).forEach(([c, a]) => e.bindAttribLocation(r, a, c));
  {
    let c = o;
    c && (c.attribs && (c = c.attribs), Array.isArray(c) || (c = Object.keys(c)), e.transformFeedbackVaryings(r, c, s || Sr));
  }
  return e.linkProgram(r), r;
}
function bi(e, t, n, r, i) {
  const o = Ct(n, r, i), s = new Set(t), c = Ei(e, t, o);
  function a(f, h) {
    const u = _i(f, h, o.errorCallback);
    return u && Si(f, h, s), u;
  }
  if (o.callback) {
    Ii(e, c).then(() => {
      const f = a(e, c);
      o.callback(f, f ? void 0 : c);
    });
    return;
  }
  return a(e, c) ? void 0 : c;
}
async function Ii(e, t) {
  const n = e.getExtension("KHR_parallel_shader_compile"), r = n ? (o, s) => o.getProgramParameter(s, n.COMPLETION_STATUS_KHR) : () => !0;
  let i = 0;
  do
    await wi(i), i = 1e3 / 60;
  while (!r(e, t));
}
function _i(e, t, n) {
  if (n = n || Dt, !e.getProgramParameter(t, Ar)) {
    const i = e.getProgramInfoLog(t);
    n(`Error in program linking: ${i}`);
    const s = e.getAttachedShaders(t).map((c) => Ai(e, e.getShaderParameter(c, e.SHADER_TYPE), c, n));
    return `${i}
${s.filter((c) => c).join(`
`)}`;
  }
}
function Bi(e, t, n, r, i) {
  return bi(e, t, n, r, i);
}
function ze(e) {
  const t = e.name;
  return t.startsWith("gl_") || t.startsWith("webgl_");
}
const gi = /(\.|\[|]|\w+)/g, Mi = (e) => e >= "0" && e <= "9";
function Pi(e, t, n, r) {
  const i = e.split(gi).filter((c) => c !== "");
  let o = 0, s = "";
  for (; ; ) {
    const c = i[o++];
    s += c;
    const a = Mi(c[0]), f = a ? parseInt(c) : c;
    if (a && (s += i[o++]), o === i.length) {
      n[f] = t;
      break;
    } else {
      const u = i[o++], l = u === "[", x = n[f] || (l ? [] : {});
      n[f] = x, n = x, r[s] = r[s] || function(y) {
        return function(m) {
          Ue(y, m);
        };
      }(x), s += u;
    }
  }
}
function Ri(e, t) {
  let n = 0;
  function r(c, a, f) {
    const h = a.name.endsWith("[0]"), u = a.type, l = p[u];
    if (!l)
      throw new Error(`unknown type: 0x${u.toString(16)}`);
    let x;
    if (l.bindPoint) {
      const y = n;
      n += a.size, h ? x = l.arraySetter(e, u, y, f, a.size) : x = l.setter(e, u, y, f, a.size);
    } else
      l.arraySetter && h ? x = l.arraySetter(e, f) : x = l.setter(e, f);
    return x.location = f, x;
  }
  const i = {}, o = {}, s = e.getProgramParameter(t, ue);
  for (let c = 0; c < s; ++c) {
    const a = e.getActiveUniform(t, c);
    if (ze(a))
      continue;
    let f = a.name;
    f.endsWith("[0]") && (f = f.substr(0, f.length - 3));
    const h = e.getUniformLocation(t, a.name);
    if (h) {
      const u = r(t, a, h);
      i[f] = u, Pi(f, u, o, i);
    }
  }
  return i;
}
function vi(e, t) {
  const n = {}, r = e.getProgramParameter(t, Er);
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
function Di(e, t) {
  const n = e.getProgramParameter(t, ue), r = [], i = [];
  for (let c = 0; c < n; ++c) {
    i.push(c), r.push({});
    const a = e.getActiveUniform(t, c);
    r[c].name = a.name;
  }
  [
    ["UNIFORM_TYPE", "type"],
    ["UNIFORM_SIZE", "size"],
    // num elements
    ["UNIFORM_BLOCK_INDEX", "blockNdx"],
    ["UNIFORM_OFFSET", "offset"]
  ].forEach(function(c) {
    const a = c[0], f = c[1];
    e.getActiveUniforms(t, i, e[a]).forEach(function(h, u) {
      r[u][f] = h;
    });
  });
  const o = {}, s = e.getProgramParameter(t, br);
  for (let c = 0; c < s; ++c) {
    const a = e.getActiveUniformBlockName(t, c), f = {
      index: e.getUniformBlockIndex(t, a),
      usedByVertexShader: e.getActiveUniformBlockParameter(t, c, Ir),
      usedByFragmentShader: e.getActiveUniformBlockParameter(t, c, _r),
      size: e.getActiveUniformBlockParameter(t, c, Br),
      uniformIndices: e.getActiveUniformBlockParameter(t, c, gr)
    };
    f.used = f.usedByVertexShader || f.usedByFragmentShader, o[a] = f;
  }
  return {
    blockSpecs: o,
    uniformData: r
  };
}
function Ue(e, t) {
  for (const n in t) {
    const r = e[n];
    typeof r == "function" ? r(t[n]) : Ue(e[n], t[n]);
  }
}
function mt(e, ...t) {
  const n = e.uniformSetters || e, r = t.length;
  for (let i = 0; i < r; ++i) {
    const o = t[i];
    if (Array.isArray(o)) {
      const s = o.length;
      for (let c = 0; c < s; ++c)
        mt(n, o[c]);
    } else
      for (const s in o) {
        const c = n[s];
        c && c(o[s]);
      }
  }
}
function Fi(e, t) {
  const n = {}, r = e.getProgramParameter(t, wr);
  for (let i = 0; i < r; ++i) {
    const o = e.getActiveAttrib(t, i);
    if (ze(o))
      continue;
    const s = e.getAttribLocation(t, o.name), c = b[o.type], a = c.setter(e, s, c);
    a.location = s, n[o.name] = a;
  }
  return n;
}
function Ni(e, t) {
  for (const n in t) {
    const r = e[n];
    r && r(t[n]);
  }
}
function Ce(e, t, n) {
  n.vertexArrayObject ? e.bindVertexArray(n.vertexArrayObject) : (Ni(t.attribSetters || t, n.attribs), n.indices && e.bindBuffer(yr, n.indices));
}
function Wt(e, t) {
  const n = Ri(e, t), r = Fi(e, t), i = {
    program: t,
    uniformSetters: n,
    attribSetters: r
  };
  return vt(e) && (i.uniformBlockSpec = Di(e, t), i.transformFeedbackInfo = vi(e, t)), i;
}
const zi = /\s|{|}|;/;
function Ui(e, t, n, r, i) {
  const o = Ct(n, r, i), s = [];
  if (t = t.map(function(f) {
    if (!zi.test(f)) {
      const h = fe(f);
      if (h)
        f = h.text;
      else {
        const u = `no element with id: ${f}`;
        o.errorCallback(u), s.push(u);
      }
    }
    return f;
  }), s.length)
    return pi(o, "");
  const c = o.callback;
  c && (o.callback = (f, h) => {
    c(f, f ? void 0 : Wt(e, h));
  });
  const a = Bi(e, t, o);
  return a ? Wt(e, a) : null;
}
const Ci = 4, Yt = 5123;
function Ve(e, t, n, r, i, o) {
  n = n === void 0 ? Ci : n;
  const s = t.indices, c = t.elementType, a = r === void 0 ? t.numElements : r;
  i = i === void 0 ? 0 : i, c || s ? o !== void 0 ? e.drawElementsInstanced(n, a, c === void 0 ? Yt : t.elementType, i, o) : e.drawElements(n, a, c === void 0 ? Yt : t.elementType, i) : o !== void 0 ? e.drawArraysInstanced(n, i, a, o) : e.drawArrays(n, i, a);
}
function Vi(e, t) {
  t = t || 1, t = Math.max(0, t);
  const n = e.clientWidth * t | 0, r = e.clientHeight * t | 0;
  return e.width !== n || e.height !== r ? (e.width = n, e.height = r, !0) : !1;
}
const qt = {
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
class A {
  x;
  y;
  constructor(t, n) {
    this.x = t, this.y = n;
  }
  static zero = () => new A(0, 0);
  static up = () => new A(0, -1);
  static down = () => new A(0, 1);
  static left = () => new A(-1, 0);
  static right = () => new A(1, 0);
  add(t, n) {
    return t instanceof A ? (this.x += t.x, this.y += t.y) : n ? (this.x += t, this.y += n) : (this.x += t, this.y += t), this;
  }
  static add(t, n) {
    return new A(t.x + n.x, t.y + n.y);
  }
  mult(t, n) {
    return t instanceof A ? (this.x *= t.x, this.y *= t.y) : n ? (this.x *= t, this.y *= n) : (this.x *= t, this.y *= t), this;
  }
  static mult(t, n) {
    return n instanceof A ? new A(t.x * n.x, t.y * n.y) : new A(t.x * n, t.y * n);
  }
  sub(t, n) {
    return t instanceof A ? (this.x -= t.x, this.y -= t.y) : n ? (this.x -= t, this.y -= n) : (this.x -= t, this.y -= t), this;
  }
  static sub(t, n) {
    return new A(t.x - n.x, t.y - n.y);
  }
  div(t, n) {
    return t instanceof A ? (this.x /= t.x, this.y /= t.y) : n ? (this.x /= t, this.y /= n) : (this.x /= t, this.y /= t), this;
  }
  static div(t, n) {
    return new A(t.x / n.x, t.y / n.y);
  }
  set(t, n) {
    return t instanceof A ? (this.x = t.x, this.y = t.y) : n ? (this.x = t, this.y = n) : (this.x = t, this.y = t), this;
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
    return new A(this.x, this.y);
  }
}
class R {
  pos;
  color;
  constructor(t, n) {
    this.pos = t, this.color = n;
  }
}
function K(e, t, n, r, i) {
  return r + (e - t) * ((i - r) / (n - t));
}
function ct(e, t, n) {
  const r = e.pos, i = t.pos, o = Math.atan2(i.y - r.y, i.x - r.x), s = Math.cos(o), c = Math.sin(o), a = r.x - n / 2 * c, f = r.y + n / 2 * s, h = r.x + n / 2 * c, u = r.y - n / 2 * s;
  return [new R(new A(a, f), e.color), new R(new A(h, u), e.color)];
}
function jt(e, t, n, r) {
  let i = e.pos.x, o = e.pos.y, s = t.pos.x, c = t.pos.y, a = n.pos.x, f = n.pos.y;
  const h = o - c, u = i - s, l = o * (i - s) - i * (o - c), x = c - f, y = s - a, m = c * (s - a) - s * (c - f), w = r / 2 * Math.sqrt(h * h + u * u) - l, S = r / 2 * Math.sqrt(h * h + u * u) + l, T = r / 2 * Math.sqrt(x * x + y * y) - m, I = r / 2 * Math.sqrt(x * x + y * y) + m, _ = (u * T - y * w) / (h * y - x * u), B = (x * w - h * T) / (h * y - x * u), M = (u * I - y * S) / (h * y - x * u), D = (x * S - h * I) / (h * y - x * u);
  return [new R(new A(-_, B), t.color), new R(new A(M, -D), t.color)];
}
class Li {
  zoom = 1;
  pos = new A(0, 0);
  displaySize = new A(0, 0);
  aspect = 1;
  // Aspect ratio
  matrix = J.identity();
  constructor(t) {
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
      rn.create(-this.pos.x, -this.pos.y)
    );
  }
  /**
   * Converts a vector (position) in screen space into world space
   * @param vector
   * @returns The Vector converted to World space
   */
  screenSpaceToWorldSpace(t) {
    const n = window.innerHeight / this.zoom, r = K(t.x, 0, window.innerWidth, -this.aspect * n, this.aspect * n) + this.pos.x, i = K(t.y, 0, window.innerHeight, -1 * n, 1 * n) + this.pos.y;
    return new A(r, i);
  }
  /**
   * Converts a vector (position) in world space into screen space
   * @param vector
   * @returns The Vector converted to Screen space
   */
  worldSpaceToScreenSpace(t) {
    const n = window.innerHeight / this.zoom, r = K(t.x, -this.aspect * n + this.pos.x, this.aspect * n + this.pos.x, 0, window.innerWidth), i = K(t.y, -1 * n + this.pos.y, 1 * n + this.pos.y, 0, window.innerHeight);
    return new A(r, i);
  }
  /**
   * Returns the camera matrix
   * @returns The camera matrix
   */
  getMatrix() {
    return this.matrix;
  }
}
class Et {
  positions;
  // 8 bytes per vertex
  colors;
  // 4 bytes per vertex
  indices;
  bufferInfo;
  currentVertices = 0;
  currentIndices = 0;
  vertexCapacity = 0;
  indexCapacity = 0;
  constructor(t, n) {
    if (n.positions && n.colors && n.indices)
      this.positions = n.positions, this.colors = n.colors, this.indices = n.indices;
    else if (n.numVertices)
      this.positions = new Float32Array(n.numVertices * 2), this.colors = new Uint8Array(n.numVertices * 4), this.indices = new Uint16Array(n.numIndices ? n.numIndices : n.numVertices * 3);
    else
      throw new Error("Invalid BufferDataOptions! Must provide positions, colors, and indices arrays, or specify numVertices");
    this.vertexCapacity = this.positions.length / 2, this.indexCapacity = this.indices.length;
    const i = (n.type ? n.type : "dynamic") === "dynamic" ? t.DYNAMIC_DRAW : t.STATIC_DRAW;
    this.bufferInfo = lr(t, {
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
    Gt(t, this.bufferInfo.attribs.position, this.positions), Gt(t, this.bufferInfo.attribs.color, this.colors), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.bufferInfo.indices), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.DYNAMIC_DRAW);
  }
  fill() {
    this.positions.fill(0, this.currentVertices * 2), this.colors.fill(0, this.currentVertices * 4), this.indices.fill(0, this.currentIndices);
  }
  resetCount() {
    this.currentVertices = 0, this.currentIndices = 0;
  }
}
class Le {
  translation;
  rotation;
  scaling;
  transformed = !1;
  constructor() {
    this.translation = new A(0, 0), this.rotation = 0, this.scaling = new A(1, 1);
  }
  translate(t) {
    this.translation.add(t), this.transformed = !0;
  }
  setTranslation(t) {
    this.translation = t, this.transformed = !0;
  }
  rotate(t) {
    this.rotation += t, this.transformed = !0;
  }
  setRotation(t) {
    this.rotation = t, this.transformed = !0;
  }
  scale(t) {
    this.scaling.mult(t), this.transformed = !0;
  }
  setScale(t) {
    this.scaling = t, this.transformed = !0;
  }
  resetTransforms() {
    this.translation = new A(0, 0), this.rotation = 0, this.scaling = new A(1, 1), this.transformed = !1;
  }
  transformVertices(t) {
    return this.transformed ? t.map((n) => new R(n.pos.copy().rotate(this.rotation).mult(this.scaling).add(this.translation), n.color)) : t;
  }
  getMatrix() {
    return J.translate(J.scale(J.rotateZ(J.identity(), this.rotation), [this.scaling.x, this.scaling.y, 1]), [
      this.translation.x,
      this.translation.y,
      0
    ]);
  }
}
class Oe {
  gl;
  id = -1;
  transform;
  constructor(t) {
    this.gl = t, this.transform = new Le();
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
class Oi extends Oe {
  buffers = [];
  bufferSize;
  currentBufferIndex = -1;
  constructor(t, n) {
    super(t), this.bufferSize = n.bufferSize, console.log(this.bufferSize), this.addBuffer();
  }
  addVerticesAndIndices(t, n) {
    (this.buffers[this.currentBufferIndex].currentIndices + n.length >= this.buffers[this.currentBufferIndex].indexCapacity || this.buffers[this.currentBufferIndex].currentVertices + t.length >= this.buffers[this.currentBufferIndex].vertexCapacity) && this.changeBuffer(), this.addIndices(n), this.addVertices(t);
  }
  update() {
    this.buffers[this.currentBufferIndex].fill(), this.buffers[this.currentBufferIndex].updateBufferData(this.gl);
  }
  render(t) {
    mt(t, {
      modelMatrix: this.transform.getMatrix()
    });
    for (let n = 0; n <= this.currentBufferIndex; n++)
      Ce(this.gl, t, this.buffers[n].bufferInfo), Ve(this.gl, this.buffers[n].bufferInfo, this.gl.TRIANGLES, this.buffers[n].currentIndices);
  }
  reset() {
    this.currentBufferIndex = 0;
    for (const t of this.buffers)
      t.resetCount();
  }
  addBuffer() {
    this.currentBufferIndex++, this.buffers.push(new Et(this.gl, { numVertices: this.bufferSize }));
  }
  changeBuffer() {
    this.buffers[this.currentBufferIndex].fill(), this.buffers[this.currentBufferIndex].updateBufferData(this.gl), this.buffers.length <= this.currentBufferIndex + 1 ? this.addBuffer() : this.currentBufferIndex++;
  }
  addVertex(t) {
    this.buffers[this.currentBufferIndex].addVertex(t);
  }
  addIndices(t) {
    this.buffers[this.currentBufferIndex].addIndex(t);
  }
  addVertices(t) {
    for (let n = 0; n < t.length; n++)
      this.addVertex(t[n]);
  }
}
function Gi(e, t, n) {
  return new v(e, t, n);
}
function ki(e, t, n, r = 255) {
  return new v(e, t, n, r);
}
class v {
  r;
  g;
  b;
  a;
  static WHITE = new v(255, 255, 255);
  static BLACK = new v(0, 0, 0);
  static RED = new v(255, 0, 0);
  static GREEN = new v(0, 255, 0);
  static BLUE = new v(0, 0, 255);
  static YELLOW = new v(255, 255, 0);
  static MAGENTA = new v(255, 0, 255);
  static CYAN = new v(0, 255, 255);
  static TRANSPARENT = new v(0, 0, 0, 0);
  constructor(t, n, r, i = 255) {
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
    return ki(i, o, s, n);
  }
  /**
   * Interpolates between two colors
   * @param color1 the first color
   * @param color2 the second color
   * @param t amount to interpolate by (a number between 0 and 1)
   * @returns The interpolated color
   */
  static interpolate(t, n, r) {
    return new v(
      K(r, 0, 1, t.r, n.r),
      K(r, 0, 1, t.g, n.g),
      K(r, 0, 1, t.b, n.b),
      K(r, 0, 1, t.a, n.a)
    );
  }
}
class $i {
  canvas;
  ctx;
  textBuffer = [];
  constructor(t) {
    this.canvas = t.canvas, this.ctx = this.canvas.getContext("2d");
  }
  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
  setFont(t) {
    this.ctx.font = t;
  }
  renderText(t, n, r) {
    this.textBuffer.push({ text: t, pos: n, color: r, font: this.ctx.font });
  }
  setTextAlign(t) {
    this.ctx.textAlign = t;
  }
  render(t) {
    for (let n of this.textBuffer) {
      this.ctx.font = n.font, this.ctx.fillStyle = `rgba(${n.color.r}, ${n.color.g}, ${n.color.b}, ${n.color.a})`;
      const r = t.worldSpaceToScreenSpace(n.pos);
      this.ctx.fillText(n.text, r.x, r.y);
    }
  }
}
class Hi {
  /** The HTML canvas element */
  canvas;
  /** The WebGL Rendering Context */
  gl;
  /** The global transform */
  transform;
  /** The camera to render with */
  camera;
  /** The text renderer */
  textRenderer;
  /** The default vertex color */
  vertexColor = new v(255, 255, 255, 255);
  shaderProgramInfo;
  buffers = [];
  currentBufferIndex = 0;
  currentPath = [];
  /**
   * @param options Options for the renderer
   */
  constructor(t) {
    t.canvas ? this.canvas = t.canvas : (this.canvas = document.createElement("canvas"), this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, document.body.appendChild(this.canvas));
    let n = null;
    if ((t.webglVersion === 2 || !t.webglVersion) && (n = this.canvas.getContext("webgl2"), n || console.warn("WebGL 2 not supported, falling back to WebGL 1")), (!n || t.webglVersion === 1) && (n = this.canvas.getContext("webgl")), !n)
      throw new Error("WebGL not supported");
    if (this.gl = n, t.initTextRenderer) {
      const r = document.createElement("canvas");
      r.width = window.innerWidth, r.height = window.innerHeight, this.canvas.parentElement.appendChild(r), r.style.position = "absolute", r.style.top = "0", r.style.left = "0", this.textRenderer = new $i({ canvas: r });
    } else
      this.textRenderer = null;
    t.camera ? (this.camera = t.camera, this.camera.setDisplaySize(new A(this.canvas.width, this.canvas.height))) : this.camera = new Li(new A(this.canvas.width, this.canvas.height)), this.shaderProgramInfo = Ui(this.gl, [qt.vertexShader, qt.fragmentShader]), this.gl.enable(this.gl.BLEND), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE), Vi(this.gl.canvas), this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.setBuffer(new Oi(this.gl, { bufferSize: 1e3 })), this.transform = new Le();
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
  clear(t = new v(0, 0, 0, 255)) {
    this.gl.clearColor(t.r / 255, t.g / 255, t.b / 255, t.a / 255), this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT), this.textRenderer && this.textRenderer.clear();
  }
  /**
   * Draws a line. *Note:* This method does not need there to be a current active path.
   * @param startPos Starting position of the line
   * @param endPos Ending position of the line
   * @param width Width of the line
   * @param color Color of the line
   */
  line(t, n, r, i) {
    const o = new R(t, i), s = new R(n, i);
    this.buffers[this.currentBufferIndex].addVerticesAndIndices(
      this.transform.transformVertices([...ct(o, s, r), ...ct(s, o, r)]),
      [0, 1, 2, 0, 2, 3]
    );
  }
  buildPath(t, n, r = !1) {
    const i = [], o = [], s = t[0], c = t[1];
    t.length === 2 && (r = !1), r ? i.push(...jt(t[t.length - 1], s, c, n)) : i.push(...ct(s, c, n));
    for (let a = 0; a < t.length - (r ? 1 : 2); a++)
      o.push(0 + a * 2, 1 + a * 2, 2 + a * 2, 1 + a * 2, 2 + a * 2, 3 + a * 2), i.push(...jt(t[a], t[a + 1], t[(a + 2) % t.length], n));
    if (r) {
      const a = i.length - 2;
      o.push(a, a + 1, 0, a + 1, 0, 1);
    } else {
      const a = i.length - 2;
      o.push(a + 0, a + 1, a + 2, a + 0, a + 2, a + 3), i.push(...ct(t[t.length - 1], t[t.length - 2], n));
    }
    this.buffers[this.currentBufferIndex].addVerticesAndIndices(this.transform.transformVertices(i), o);
  }
  buildDashedPath(t, n, r = !1, i = 10) {
    let o = null;
    const s = r ? t.length + 1 : t.length;
    for (let c = 0; c < s; c++) {
      const a = t[c % t.length], f = t[(c + 1) % t.length], h = a.pos.dist(f.pos), u = Math.floor(h / i), l = h / u;
      let x = t[c];
      const y = f.pos.copy().sub(a.pos);
      for (let m = 1; m < u; m++) {
        const w = a.pos.copy().add(y.copy().setMag(l * m));
        let S = new R(w, v.interpolate(a.color, f.color, m / u));
        if (m === 1 && o && (this.buildPath([o, a, S], n), c === s - 1))
          break;
        m % 2 === 0 && this.buildPath([x, S], n), x = S;
      }
      o = x;
    }
  }
  /**
   * Sets the default vertex color
   * @param color The color to set
   */
  setVertexColor(t) {
    this.vertexColor = t;
  }
  /**
   * Starts a new path by clearing everything in the current path. Call this before using any drawing methods.
   */
  beginPath() {
    this.currentPath = [];
  }
  vertex(t, n) {
    t instanceof R ? this.currentPath.push(t) : n ? this.currentPath.push(new R(t, n)) : this.currentPath.push(new R(t, this.vertexColor));
  }
  vertices(t, n) {
    t[0] instanceof R ? this.currentPath = [...this.currentPath, ...t] : n ? this.currentPath = [...this.currentPath, ...t.map((r) => new R(r, n))] : this.currentPath = [...this.currentPath, ...t.map((r) => new R(r, this.vertexColor))];
  }
  /**
   * Splits the current path. Call this before using any drawing methods to start a new path without clearing the current one.
   */
  splitPath() {
    this.currentPath.push(null);
  }
  /**
   * Draws an arc (to the current path). For a circle, set `startAngle` to `0` and `endAngle` to `Math.PI * 2`
   * @param pos The center of the arc
   * @param radius The radius of the arc
   * @param startAngle The starting angle of the arc
   * @param endAngle The ending angle of the arc
   * @param color The color of the arc
   * @param detail The detail of the arc. Higher values = smoother arc. Defaults to `1`
   */
  arc(t, n, r, i, o, s = 1) {
    const c = Math.PI * 2 * n * s / 20, a = (i - r) / c, f = [];
    for (let h = 0; h <= c; h++) {
      const u = r + a * h;
      f.push(new R(new A(t.x + n * Math.cos(u), t.y + n * Math.sin(u)), o));
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
    const i = [t, new A(t.x + n.x, t.y), new A(t.x + n.y, t.y + n.y), new A(t.x, t.y + n.y)];
    this.currentPath.push(...i.map((o) => new R(o, r)));
  }
  /**
   * Strokes (outlines) everything in the current path since the last `beginPath()` call with the specified width and options.
   * @param width The stroke width
   * @param options Options for the stroke
   */
  stroke(t, { closed: n = !1, dashed: r = !1, dashLength: i = 10 } = {}) {
    let o = this.currentPath.findIndex((s) => s === null);
    if (o === -1) {
      r ? this.buildDashedPath(this.currentPath, t, n, i) : this.buildPath(this.currentPath, t, n);
      return;
    }
    for (; o !== -1; ) {
      if (r ? this.buildDashedPath(this.currentPath.slice(0, o), t, n, i) : this.buildPath(this.currentPath.slice(0, o), t, n), this.currentPath = this.currentPath.slice(o + 1), this.currentPath.length === 0)
        return;
      o = this.currentPath.findIndex((s) => s === null), o = o === -1 ? this.currentPath.length : o;
    }
  }
  /**
   * Fills everything in the current path since the last `beginPath()` call with the specified color.
   */
  fill() {
    let t = this.currentPath.findIndex((n) => n === null);
    if (this.currentPath = this.currentPath.slice(t + 1), t = this.currentPath.findIndex((n) => n === null), t === -1) {
      this.fillPath(this.currentPath);
      return;
    }
    for (; t !== -1; ) {
      if (this.fillPath(this.currentPath.slice(0, t)), this.currentPath = this.currentPath.slice(t + 1), this.currentPath.length === 0)
        return;
      t = this.currentPath.findIndex((n) => n === null), t = t === -1 ? this.currentPath.length : t;
    }
  }
  fillPath(t) {
    const n = [];
    for (let r = 1; r < t.length - 1; r++)
      n.push(0, r, r + 1);
    this.buffers[this.currentBufferIndex].addVerticesAndIndices(this.transform.transformVertices(t), n);
  }
  /**
   * Sets the font of the text renderer
   * @param font The font to set
   * @example renderer.setFont("30px Arial");
   */
  setFont(t) {
    if (!this.textRenderer)
      throw new Error("Text renderer not initialized!");
    this.textRenderer.setFont(t);
  }
  /**
   * Sets the text align of the text renderer
   * @param align The text align to set
   * @example renderer.setTextAlign("center");
   */
  setTextAlign(t) {
    if (!this.textRenderer)
      throw new Error("Text renderer not initialized!");
    this.textRenderer.setTextAlign(t);
  }
  /**
   *
   * @param text The text to render
   * @param pos The position to render the text at
   * @param maxWidth Max width of the text
   */
  renderText(t, n, r) {
    if (!this.textRenderer)
      throw new Error("Text renderer not initialized!");
    this.textRenderer.renderText(t, n, r);
  }
  /**
   * The main render function. Call this every frame once to render everything.
   * @param camera The camera to render with
   */
  render() {
    this.buffers[0].update();
    const t = {
      resolution: [this.gl.canvas.width, this.gl.canvas.height],
      viewProjectionMatrix: this.camera.getMatrix()
    };
    this.gl.useProgram(this.shaderProgramInfo.program), mt(this.shaderProgramInfo, t);
    for (const n of this.buffers)
      n.render(this.shaderProgramInfo);
    this.buffers[0].reset(), this.textRenderer && this.textRenderer.render(this.camera);
  }
  /**
   * Returns the size of the canvas
   */
  getDisplaySize() {
    return new A(this.canvas.width, this.canvas.height);
  }
}
class Wi extends Oe {
  buffer;
  tempVertices = [];
  tempIndices = [];
  constructor(t) {
    super(t), this.buffer = null;
  }
  addVerticesAndIndices(t, n) {
    this.tempVertices.push(...t), this.tempIndices.push(...n);
  }
  update() {
    if (this.buffer) {
      if (this.tempVertices.length > this.buffer.vertexCapacity || this.tempIndices.length > this.buffer.indexCapacity) {
        for (const t of Object.values(this.buffer.bufferInfo.attribs))
          this.gl.deleteBuffer(t.buffer);
        this.gl.deleteBuffer(this.buffer.bufferInfo.indices), this.buffer = new Et(this.gl, {
          numVertices: this.tempVertices.length,
          numIndices: this.tempIndices.length,
          type: "static"
        });
      } else
        this.buffer.resetCount();
      this.buffer.addIndex(this.tempIndices);
      for (const t of this.tempVertices)
        this.buffer.addVertex(t);
      this.buffer.updateBufferData(this.gl);
    } else {
      this.buffer = new Et(this.gl, {
        numVertices: this.tempVertices.length,
        numIndices: this.tempIndices.length,
        type: "static"
      }), this.buffer.addIndex(this.tempIndices);
      for (const t of this.tempVertices)
        this.buffer.addVertex(t);
      this.buffer.updateBufferData(this.gl);
    }
    this.tempIndices = [], this.tempVertices = [];
  }
  render(t) {
    if (!this.buffer)
      throw new Error("Buffer not initialized! Run buffer.update()");
    mt(t, {
      modelMatrix: this.transform.getMatrix()
    }), Ce(this.gl, t, this.buffer.bufferInfo), Ve(this.gl, this.buffer.bufferInfo, this.gl.TRIANGLES, this.buffer.currentIndices);
  }
}
export {
  Oe as Buffer,
  Et as BufferData,
  Li as Camera,
  $i as CanvasTextRenderer,
  v as Color,
  Oi as DynamicBuffer,
  Gi as RGB,
  ki as RGBA,
  Hi as Renderer,
  Wi as StaticBuffer,
  Le as Transform,
  A as Vector,
  R as Vertex
};
