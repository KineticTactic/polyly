/* @license twgl.js 5.5.3 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */
let M = Float32Array;
function ke(e) {
  const t = M;
  return M = e, t;
}
function j(e, t, n) {
  const r = new M(3);
  return e && (r[0] = e), t && (r[1] = t), n && (r[2] = n), r;
}
function $e(e, t, n) {
  return n = n || new M(3), n[0] = e[0] + t[0], n[1] = e[1] + t[1], n[2] = e[2] + t[2], n;
}
function Xt(e, t, n) {
  return n = n || new M(3), n[0] = e[0] - t[0], n[1] = e[1] - t[1], n[2] = e[2] - t[2], n;
}
function Ge(e, t, n, r) {
  return r = r || new M(3), r[0] = e[0] + n * (t[0] - e[0]), r[1] = e[1] + n * (t[1] - e[1]), r[2] = e[2] + n * (t[2] - e[2]), r;
}
function He(e, t, n, r) {
  return r = r || new M(3), r[0] = e[0] + n[0] * (t[0] - e[0]), r[1] = e[1] + n[1] * (t[1] - e[1]), r[2] = e[2] + n[2] * (t[2] - e[2]), r;
}
function We(e, t, n) {
  return n = n || new M(3), n[0] = Math.max(e[0], t[0]), n[1] = Math.max(e[1], t[1]), n[2] = Math.max(e[2], t[2]), n;
}
function Ye(e, t, n) {
  return n = n || new M(3), n[0] = Math.min(e[0], t[0]), n[1] = Math.min(e[1], t[1]), n[2] = Math.min(e[2], t[2]), n;
}
function qe(e, t, n) {
  return n = n || new M(3), n[0] = e[0] * t, n[1] = e[1] * t, n[2] = e[2] * t, n;
}
function je(e, t, n) {
  return n = n || new M(3), n[0] = e[0] / t, n[1] = e[1] / t, n[2] = e[2] / t, n;
}
function St(e, t, n) {
  n = n || new M(3);
  const r = e[2] * t[0] - e[0] * t[2], i = e[0] * t[1] - e[1] * t[0];
  return n[0] = e[1] * t[2] - e[2] * t[1], n[1] = r, n[2] = i, n;
}
function Xe(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Ke(e) {
  return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
}
function Ze(e) {
  return e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
}
function Je(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
  return Math.sqrt(n * n + r * r + i * i);
}
function Qe(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
  return n * n + r * r + i * i;
}
function ft(e, t) {
  t = t || new M(3);
  const n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], r = Math.sqrt(n);
  return r > 1e-5 ? (t[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r) : (t[0] = 0, t[1] = 0, t[2] = 0), t;
}
function de(e, t) {
  return t = t || new M(3), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t;
}
function tn(e, t) {
  return t = t || new M(3), t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
}
function en(e, t, n) {
  return n = n || new M(3), n[0] = e[0] * t[0], n[1] = e[1] * t[1], n[2] = e[2] * t[2], n;
}
function nn(e, t, n) {
  return n = n || new M(3), n[0] = e[0] / t[0], n[1] = e[1] / t[1], n[2] = e[2] / t[2], n;
}
var rn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  add: $e,
  copy: tn,
  create: j,
  cross: St,
  distance: Je,
  distanceSq: Qe,
  divide: nn,
  divScalar: je,
  dot: Xe,
  lerp: Ge,
  lerpV: He,
  length: Ke,
  lengthSq: Ze,
  max: We,
  min: Ye,
  mulScalar: qe,
  multiply: en,
  negate: de,
  normalize: ft,
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
function Zt(e) {
  return e = e || new E(16), e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function fn(e, t) {
  if (t = t || new E(16), t === e) {
    let T;
    return T = e[1], e[1] = e[4], e[4] = T, T = e[2], e[2] = e[8], e[8] = T, T = e[3], e[3] = e[12], e[12] = T, T = e[6], e[6] = e[9], e[9] = T, T = e[7], e[7] = e[13], e[13] = T, T = e[11], e[11] = e[14], e[14] = T, t;
  }
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], o = e[0 * 4 + 3], s = e[1 * 4 + 0], c = e[1 * 4 + 1], f = e[1 * 4 + 2], a = e[1 * 4 + 3], h = e[2 * 4 + 0], u = e[2 * 4 + 1], l = e[2 * 4 + 2], y = e[2 * 4 + 3], x = e[3 * 4 + 0], m = e[3 * 4 + 1], w = e[3 * 4 + 2], S = e[3 * 4 + 3];
  return t[0] = n, t[1] = s, t[2] = h, t[3] = x, t[4] = r, t[5] = c, t[6] = u, t[7] = m, t[8] = i, t[9] = f, t[10] = l, t[11] = w, t[12] = o, t[13] = a, t[14] = y, t[15] = S, t;
}
function Jt(e, t) {
  t = t || new E(16);
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], o = e[0 * 4 + 3], s = e[1 * 4 + 0], c = e[1 * 4 + 1], f = e[1 * 4 + 2], a = e[1 * 4 + 3], h = e[2 * 4 + 0], u = e[2 * 4 + 1], l = e[2 * 4 + 2], y = e[2 * 4 + 3], x = e[3 * 4 + 0], m = e[3 * 4 + 1], w = e[3 * 4 + 2], S = e[3 * 4 + 3], T = l * S, I = w * y, _ = f * S, B = w * a, g = f * y, v = l * a, z = i * S, U = w * o, V = i * y, C = l * o, L = i * a, O = f * o, k = h * m, $ = x * u, G = s * m, H = x * c, W = s * u, tt = h * c, et = n * m, nt = x * r, rt = n * u, it = h * r, ot = n * c, st = s * r, Ct = T * c + B * u + g * m - (I * c + _ * u + v * m), Lt = I * r + z * u + C * m - (T * r + U * u + V * m), Ot = _ * r + U * c + L * m - (B * r + z * c + O * m), kt = v * r + V * c + O * u - (g * r + C * c + L * u), R = 1 / (n * Ct + s * Lt + h * Ot + x * kt);
  return t[0] = R * Ct, t[1] = R * Lt, t[2] = R * Ot, t[3] = R * kt, t[4] = R * (I * s + _ * h + v * x - (T * s + B * h + g * x)), t[5] = R * (T * n + U * h + V * x - (I * n + z * h + C * x)), t[6] = R * (B * n + z * s + O * x - (_ * n + U * s + L * x)), t[7] = R * (g * n + C * s + L * h - (v * n + V * s + O * h)), t[8] = R * (k * a + H * y + W * S - ($ * a + G * y + tt * S)), t[9] = R * ($ * o + et * y + it * S - (k * o + nt * y + rt * S)), t[10] = R * (G * o + nt * a + ot * S - (H * o + et * a + st * S)), t[11] = R * (tt * o + rt * a + st * y - (W * o + it * a + ot * y)), t[12] = R * (G * l + tt * w + $ * f - (W * w + k * f + H * l)), t[13] = R * (rt * w + k * i + nt * l - (et * l + it * w + $ * i)), t[14] = R * (et * f + st * w + H * i - (ot * w + G * i + nt * f)), t[15] = R * (ot * l + W * i + it * f - (rt * f + st * l + tt * i)), t;
}
function an(e, t, n) {
  n = n || new E(16);
  const r = e[0], i = e[1], o = e[2], s = e[3], c = e[4 + 0], f = e[4 + 1], a = e[4 + 2], h = e[4 + 3], u = e[8 + 0], l = e[8 + 1], y = e[8 + 2], x = e[8 + 3], m = e[12 + 0], w = e[12 + 1], S = e[12 + 2], T = e[12 + 3], I = t[0], _ = t[1], B = t[2], g = t[3], v = t[4 + 0], z = t[4 + 1], U = t[4 + 2], V = t[4 + 3], C = t[8 + 0], L = t[8 + 1], O = t[8 + 2], k = t[8 + 3], $ = t[12 + 0], G = t[12 + 1], H = t[12 + 2], W = t[12 + 3];
  return n[0] = r * I + c * _ + u * B + m * g, n[1] = i * I + f * _ + l * B + w * g, n[2] = o * I + a * _ + y * B + S * g, n[3] = s * I + h * _ + x * B + T * g, n[4] = r * v + c * z + u * U + m * V, n[5] = i * v + f * z + l * U + w * V, n[6] = o * v + a * z + y * U + S * V, n[7] = s * v + h * z + x * U + T * V, n[8] = r * C + c * L + u * O + m * k, n[9] = i * C + f * L + l * O + w * k, n[10] = o * C + a * L + y * O + S * k, n[11] = s * C + h * L + x * O + T * k, n[12] = r * $ + c * G + u * H + m * W, n[13] = i * $ + f * G + l * H + w * W, n[14] = o * $ + a * G + y * H + S * W, n[15] = s * $ + h * G + x * H + T * W, n;
}
function un(e, t, n) {
  return n = n || Zt(), e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11]), n[12] = t[0], n[13] = t[1], n[14] = t[2], n[15] = 1, n;
}
function hn(e, t) {
  return t = t || j(), t[0] = e[12], t[1] = e[13], t[2] = e[14], t;
}
function ln(e, t, n) {
  n = n || j();
  const r = t * 4;
  return n[0] = e[r + 0], n[1] = e[r + 1], n[2] = e[r + 2], n;
}
function yn(e, t, n, r) {
  r !== e && (r = Kt(e, r));
  const i = n * 4;
  return r[i + 0] = t[0], r[i + 1] = t[1], r[i + 2] = t[2], r;
}
function xn(e, t, n, r, i) {
  i = i || new E(16);
  const o = Math.tan(Math.PI * 0.5 - 0.5 * e), s = 1 / (n - r);
  return i[0] = o / t, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = o, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = (n + r) * s, i[11] = -1, i[12] = 0, i[13] = 0, i[14] = n * r * s * 2, i[15] = 0, i;
}
function pn(e, t, n, r, i, o, s) {
  return s = s || new E(16), s[0] = 2 / (t - e), s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 2 / (r - n), s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = 2 / (i - o), s[11] = 0, s[12] = (t + e) / (e - t), s[13] = (r + n) / (n - r), s[14] = (o + i) / (i - o), s[15] = 1, s;
}
function An(e, t, n, r, i, o, s) {
  s = s || new E(16);
  const c = t - e, f = r - n, a = i - o;
  return s[0] = 2 * i / c, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 2 * i / f, s[6] = 0, s[7] = 0, s[8] = (e + t) / c, s[9] = (r + n) / f, s[10] = o / a, s[11] = -1, s[12] = 0, s[13] = 0, s[14] = i * o / a, s[15] = 0, s;
}
let X, J, q;
function mn(e, t, n, r) {
  return r = r || new E(16), X = X || j(), J = J || j(), q = q || j(), ft(
    Xt(e, t, q),
    q
  ), ft(St(n, q, X), X), ft(St(q, X, J), J), r[0] = X[0], r[1] = X[1], r[2] = X[2], r[3] = 0, r[4] = J[0], r[5] = J[1], r[6] = J[2], r[7] = 0, r[8] = q[0], r[9] = q[1], r[10] = q[2], r[11] = 0, r[12] = e[0], r[13] = e[1], r[14] = e[2], r[15] = 1, r;
}
function Tn(e, t) {
  return t = t || new E(16), t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t;
}
function Sn(e, t, n) {
  n = n || new E(16);
  const r = t[0], i = t[1], o = t[2], s = e[0], c = e[1], f = e[2], a = e[3], h = e[1 * 4 + 0], u = e[1 * 4 + 1], l = e[1 * 4 + 2], y = e[1 * 4 + 3], x = e[2 * 4 + 0], m = e[2 * 4 + 1], w = e[2 * 4 + 2], S = e[2 * 4 + 3], T = e[3 * 4 + 0], I = e[3 * 4 + 1], _ = e[3 * 4 + 2], B = e[3 * 4 + 3];
  return e !== n && (n[0] = s, n[1] = c, n[2] = f, n[3] = a, n[4] = h, n[5] = u, n[6] = l, n[7] = y, n[8] = x, n[9] = m, n[10] = w, n[11] = S), n[12] = s * r + h * i + x * o + T, n[13] = c * r + u * i + m * o + I, n[14] = f * r + l * i + w * o + _, n[15] = a * r + y * i + S * o + B, n;
}
function wn(e, t) {
  t = t || new E(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function En(e, t, n) {
  n = n || new E(16);
  const r = e[4], i = e[5], o = e[6], s = e[7], c = e[8], f = e[9], a = e[10], h = e[11], u = Math.cos(t), l = Math.sin(t);
  return n[4] = u * r + l * c, n[5] = u * i + l * f, n[6] = u * o + l * a, n[7] = u * s + l * h, n[8] = u * c - l * r, n[9] = u * f - l * i, n[10] = u * a - l * o, n[11] = u * h - l * s, e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function bn(e, t) {
  t = t || new E(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function In(e, t, n) {
  n = n || new E(16);
  const r = e[0 * 4 + 0], i = e[0 * 4 + 1], o = e[0 * 4 + 2], s = e[0 * 4 + 3], c = e[2 * 4 + 0], f = e[2 * 4 + 1], a = e[2 * 4 + 2], h = e[2 * 4 + 3], u = Math.cos(t), l = Math.sin(t);
  return n[0] = u * r - l * c, n[1] = u * i - l * f, n[2] = u * o - l * a, n[3] = u * s - l * h, n[8] = u * c + l * r, n[9] = u * f + l * i, n[10] = u * a + l * o, n[11] = u * h + l * s, e !== n && (n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function _n(e, t) {
  t = t || new E(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Bn(e, t, n) {
  n = n || new E(16);
  const r = e[0 * 4 + 0], i = e[0 * 4 + 1], o = e[0 * 4 + 2], s = e[0 * 4 + 3], c = e[1 * 4 + 0], f = e[1 * 4 + 1], a = e[1 * 4 + 2], h = e[1 * 4 + 3], u = Math.cos(t), l = Math.sin(t);
  return n[0] = u * r + l * c, n[1] = u * i + l * f, n[2] = u * o + l * a, n[3] = u * s + l * h, n[4] = u * c - l * r, n[5] = u * f - l * i, n[6] = u * a - l * o, n[7] = u * h - l * s, e !== n && (n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function Mn(e, t, n) {
  n = n || new E(16);
  let r = e[0], i = e[1], o = e[2];
  const s = Math.sqrt(r * r + i * i + o * o);
  r /= s, i /= s, o /= s;
  const c = r * r, f = i * i, a = o * o, h = Math.cos(t), u = Math.sin(t), l = 1 - h;
  return n[0] = c + (1 - c) * h, n[1] = r * i * l + o * u, n[2] = r * o * l - i * u, n[3] = 0, n[4] = r * i * l - o * u, n[5] = f + (1 - f) * h, n[6] = i * o * l + r * u, n[7] = 0, n[8] = r * o * l + i * u, n[9] = i * o * l - r * u, n[10] = a + (1 - a) * h, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
}
function gn(e, t, n, r) {
  r = r || new E(16);
  let i = t[0], o = t[1], s = t[2];
  const c = Math.sqrt(i * i + o * o + s * s);
  i /= c, o /= c, s /= c;
  const f = i * i, a = o * o, h = s * s, u = Math.cos(n), l = Math.sin(n), y = 1 - u, x = f + (1 - f) * u, m = i * o * y + s * l, w = i * s * y - o * l, S = i * o * y - s * l, T = a + (1 - a) * u, I = o * s * y + i * l, _ = i * s * y + o * l, B = o * s * y - i * l, g = h + (1 - h) * u, v = e[0], z = e[1], U = e[2], V = e[3], C = e[4], L = e[5], O = e[6], k = e[7], $ = e[8], G = e[9], H = e[10], W = e[11];
  return r[0] = x * v + m * C + w * $, r[1] = x * z + m * L + w * G, r[2] = x * U + m * O + w * H, r[3] = x * V + m * k + w * W, r[4] = S * v + T * C + I * $, r[5] = S * z + T * L + I * G, r[6] = S * U + T * O + I * H, r[7] = S * V + T * k + I * W, r[8] = _ * v + B * C + g * $, r[9] = _ * z + B * L + g * G, r[10] = _ * U + B * O + g * H, r[11] = _ * V + B * k + g * W, e !== r && (r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15]), r;
}
function Rn(e, t) {
  return t = t || new E(16), t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function vn(e, t, n) {
  n = n || new E(16);
  const r = t[0], i = t[1], o = t[2];
  return n[0] = r * e[0 * 4 + 0], n[1] = r * e[0 * 4 + 1], n[2] = r * e[0 * 4 + 2], n[3] = r * e[0 * 4 + 3], n[4] = i * e[1 * 4 + 0], n[5] = i * e[1 * 4 + 1], n[6] = i * e[1 * 4 + 2], n[7] = i * e[1 * 4 + 3], n[8] = o * e[2 * 4 + 0], n[9] = o * e[2 * 4 + 1], n[10] = o * e[2 * 4 + 2], n[11] = o * e[2 * 4 + 3], e !== n && (n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function Pn(e, t, n) {
  n = n || j();
  const r = t[0], i = t[1], o = t[2], s = r * e[0 * 4 + 3] + i * e[1 * 4 + 3] + o * e[2 * 4 + 3] + e[3 * 4 + 3];
  return n[0] = (r * e[0 * 4 + 0] + i * e[1 * 4 + 0] + o * e[2 * 4 + 0] + e[3 * 4 + 0]) / s, n[1] = (r * e[0 * 4 + 1] + i * e[1 * 4 + 1] + o * e[2 * 4 + 1] + e[3 * 4 + 1]) / s, n[2] = (r * e[0 * 4 + 2] + i * e[1 * 4 + 2] + o * e[2 * 4 + 2] + e[3 * 4 + 2]) / s, n;
}
function Fn(e, t, n) {
  n = n || j();
  const r = t[0], i = t[1], o = t[2];
  return n[0] = r * e[0 * 4 + 0] + i * e[1 * 4 + 0] + o * e[2 * 4 + 0], n[1] = r * e[0 * 4 + 1] + i * e[1 * 4 + 1] + o * e[2 * 4 + 1], n[2] = r * e[0 * 4 + 2] + i * e[1 * 4 + 2] + o * e[2 * 4 + 2], n;
}
function Nn(e, t, n) {
  n = n || j();
  const r = Jt(e), i = t[0], o = t[1], s = t[2];
  return n[0] = i * r[0 * 4 + 0] + o * r[0 * 4 + 1] + s * r[0 * 4 + 2], n[1] = i * r[1 * 4 + 0] + o * r[1 * 4 + 1] + s * r[1 * 4 + 2], n[2] = i * r[2 * 4 + 0] + o * r[2 * 4 + 1] + s * r[2 * 4 + 2], n;
}
var Q = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  axisRotate: gn,
  axisRotation: Mn,
  copy: Kt,
  create: cn,
  frustum: An,
  getAxis: ln,
  getTranslation: hn,
  identity: Zt,
  inverse: Jt,
  lookAt: mn,
  multiply: an,
  negate: sn,
  ortho: pn,
  perspective: xn,
  rotateX: En,
  rotateY: In,
  rotateZ: Bn,
  rotationX: wn,
  rotationY: bn,
  rotationZ: _n,
  scale: vn,
  scaling: Rn,
  setAxis: yn,
  setDefaultType: on,
  setTranslation: un,
  transformDirection: Fn,
  transformNormal: Nn,
  transformPoint: Pn,
  translate: Sn,
  translation: Tn,
  transpose: fn
});
const bt = 5120, d = 5121, It = 5122, _t = 5123, Bt = 5124, Mt = 5125, gt = 5126, Dn = 32819, zn = 32820, Un = 33635, Vn = 5131, Cn = 33640, Ln = 35899, On = 35902, kn = 36269, $n = 34042, Qt = {};
{
  const e = Qt;
  e[bt] = Int8Array, e[d] = Uint8Array, e[It] = Int16Array, e[_t] = Uint16Array, e[Bt] = Int32Array, e[Mt] = Uint32Array, e[gt] = Float32Array, e[Dn] = Uint16Array, e[zn] = Uint16Array, e[Un] = Uint16Array, e[Vn] = Uint16Array, e[Cn] = Uint32Array, e[Ln] = Uint32Array, e[On] = Uint32Array, e[kn] = Uint32Array, e[$n] = Uint32Array;
}
function dt(e) {
  if (e instanceof Int8Array)
    return bt;
  if (e instanceof Uint8Array || e instanceof Uint8ClampedArray)
    return d;
  if (e instanceof Int16Array)
    return It;
  if (e instanceof Uint16Array)
    return _t;
  if (e instanceof Int32Array)
    return Bt;
  if (e instanceof Uint32Array)
    return Mt;
  if (e instanceof Float32Array)
    return gt;
  throw new Error("unsupported typed array type");
}
function te(e) {
  if (e === Int8Array)
    return bt;
  if (e === Uint8Array || e === Uint8ClampedArray)
    return d;
  if (e === Int16Array)
    return It;
  if (e === Uint16Array)
    return _t;
  if (e === Int32Array)
    return Bt;
  if (e === Uint32Array)
    return Mt;
  if (e === Float32Array)
    return gt;
  throw new Error("unsupported typed array type");
}
function Gn(e) {
  const t = Qt[e];
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
const re = 35044, Y = 34962, Yn = 34963, qn = 34660, jn = 5120, Xn = 5121, Kn = 5122, Zn = 5123, Jn = 5124, Qn = 5125, ie = 5126, oe = {
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
function fe(e) {
  return e === "indices";
}
function dn(e) {
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
function Rt(e, t) {
  if (wt(e))
    return e;
  if (wt(e.data))
    return e.data;
  Array.isArray(e) && (e = {
    data: e
  });
  let n = e.type ? vt(e.type) : void 0;
  return n || (fe(t) ? n = Uint16Array : n = Float32Array), new n(e.data);
}
function or(e) {
  return typeof e == "number" ? e : e ? te(e) : ie;
}
function vt(e) {
  return typeof e == "number" ? Gn(e) : e || Float32Array;
}
function sr(e, t) {
  return {
    buffer: t.buffer,
    numValues: 2 * 3 * 4,
    // safely divided by 2, 3, 4
    type: or(t.type),
    arrayType: vt(t.type)
  };
}
function cr(e, t) {
  const n = t.data || t, r = vt(t.type), i = n * r.BYTES_PER_ELEMENT, o = e.createBuffer();
  return e.bindBuffer(Y, o), e.bufferData(Y, i, t.drawType || re), {
    buffer: o,
    numValues: n,
    type: te(r),
    arrayType: r
  };
}
function fr(e, t, n) {
  const r = Rt(t, n);
  return {
    arrayType: r.constructor,
    buffer: ce(e, r, void 0, t.drawType),
    type: dt(r),
    numValues: 0
  };
}
function ar(e, t) {
  const n = {};
  return Object.keys(t).forEach(function(r) {
    if (!fe(r)) {
      const i = t[r], o = i.attrib || i.name || i.attribName || oe.attribPrefix + r;
      if (i.value) {
        if (!Array.isArray(i.value) && !wt(i.value))
          throw new Error("array.value is not array or typedarray");
        n[o] = {
          value: i.value
        };
      } else {
        let s;
        i.buffer && i.buffer instanceof WebGLBuffer ? s = sr : typeof i == "number" || typeof i.data == "number" ? s = cr : s = fr;
        const { buffer: c, type: f, numValues: a, arrayType: h } = s(e, i, r), u = i.normalize !== void 0 ? i.normalize : dn(h), l = ir(i, r, a);
        n[o] = {
          buffer: c,
          numComponents: l,
          type: f,
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
  n = Rt(n), r !== void 0 ? (e.bindBuffer(Y, t.buffer), e.bufferSubData(Y, r, n)) : se(e, Y, t.buffer, n, t.drawType);
}
function ur(e, t) {
  return t === jn || t === Xn ? 1 : t === Kn || t === Zn ? 2 : t === Jn || t === Qn || t === ie ? 4 : 0;
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
  const s = ur(e, i.type), c = o / s, f = i.numComponents || i.size, a = c / f;
  if (a % 1 !== 0)
    throw new Error(`numComponents ${f} not correct for length ${length}`);
  return a;
}
function lr(e, t, n) {
  const r = ar(e, t), i = Object.assign({}, n || {});
  i.attribs = Object.assign({}, n ? n.attribs : {}, r);
  const o = t.indices;
  if (o) {
    const s = Rt(o, "indices");
    i.indices = ce(e, s, Yn), i.numElements = s.length, i.elementType = dt(s);
  } else
    i.numElements || (i.numElements = hr(e, i.attribs));
  return i;
}
function Pt(e) {
  return !!e.texStorage2D;
}
const yr = function() {
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
}(), Ft = Hn;
function ae(e) {
  return typeof document < "u" && document.getElementById ? document.getElementById(e) : null;
}
const at = 33984, ut = 34962, xr = 34963, pr = 35713, Ar = 35714, mr = 35632, Tr = 35633, Sr = 35981, ue = 35718, wr = 35721, Er = 35971, br = 35382, Ir = 35396, _r = 35398, Br = 35392, Mr = 35395, ht = 5126, he = 35664, le = 35665, ye = 35666, Nt = 5124, xe = 35667, pe = 35668, Ae = 35669, me = 35670, Te = 35671, Se = 35672, we = 35673, Ee = 35674, be = 35675, Ie = 35676, gr = 35678, Rr = 35680, vr = 35679, Pr = 35682, Fr = 35685, Nr = 35686, Dr = 35687, zr = 35688, Ur = 35689, Vr = 35690, Cr = 36289, Lr = 36292, Or = 36293, Dt = 5125, _e = 36294, Be = 36295, Me = 36296, kr = 36298, $r = 36299, Gr = 36300, Hr = 36303, Wr = 36306, Yr = 36307, qr = 36308, jr = 36311, lt = 3553, yt = 34067, zt = 32879, xt = 35866, p = {};
function ge(e, t) {
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
function Zr(e, t) {
  return function(n) {
    e.uniform2fv(t, n);
  };
}
function Jr(e, t) {
  return function(n) {
    e.uniform3fv(t, n);
  };
}
function Qr(e, t) {
  return function(n) {
    e.uniform4fv(t, n);
  };
}
function Re(e, t) {
  return function(n) {
    e.uniform1i(t, n);
  };
}
function ve(e, t) {
  return function(n) {
    e.uniform1iv(t, n);
  };
}
function Pe(e, t) {
  return function(n) {
    e.uniform2iv(t, n);
  };
}
function Fe(e, t) {
  return function(n) {
    e.uniform3iv(t, n);
  };
}
function Ne(e, t) {
  return function(n) {
    e.uniform4iv(t, n);
  };
}
function dr(e, t) {
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
function fi(e, t) {
  return function(n) {
    e.uniformMatrix3x2fv(t, !1, n);
  };
}
function ai(e, t) {
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
  const i = ge(e, t);
  return Pt(e) ? function(o) {
    let s, c;
    !o || ne(e, o) ? (s = o, c = null) : (s = o.texture, c = o.sampler), e.uniform1i(r, n), e.activeTexture(at + n), e.bindTexture(i, s), e.bindSampler(n, c);
  } : function(o) {
    e.uniform1i(r, n), e.activeTexture(at + n), e.bindTexture(i, o);
  };
}
function N(e, t, n, r, i) {
  const o = ge(e, t), s = new Int32Array(i);
  for (let c = 0; c < i; ++c)
    s[c] = n + c;
  return Pt(e) ? function(c) {
    e.uniform1iv(r, s), c.forEach(function(f, a) {
      e.activeTexture(at + s[a]);
      let h, u;
      !f || ne(e, f) ? (h = f, u = null) : (h = f.texture, u = f.sampler), e.bindSampler(n, u), e.bindTexture(o, h);
    });
  } : function(c) {
    e.uniform1iv(r, s), c.forEach(function(f, a) {
      e.activeTexture(at + s[a]), e.bindTexture(o, f);
    });
  };
}
p[ht] = { Type: Float32Array, size: 4, setter: Xr, arraySetter: Kr };
p[he] = { Type: Float32Array, size: 8, setter: Zr, cols: 2 };
p[le] = { Type: Float32Array, size: 12, setter: Jr, cols: 3 };
p[ye] = { Type: Float32Array, size: 16, setter: Qr, cols: 4 };
p[Nt] = { Type: Int32Array, size: 4, setter: Re, arraySetter: ve };
p[xe] = { Type: Int32Array, size: 8, setter: Pe, cols: 2 };
p[pe] = { Type: Int32Array, size: 12, setter: Fe, cols: 3 };
p[Ae] = { Type: Int32Array, size: 16, setter: Ne, cols: 4 };
p[Dt] = { Type: Uint32Array, size: 4, setter: dr, arraySetter: ti };
p[_e] = { Type: Uint32Array, size: 8, setter: ei, cols: 2 };
p[Be] = { Type: Uint32Array, size: 12, setter: ni, cols: 3 };
p[Me] = { Type: Uint32Array, size: 16, setter: ri, cols: 4 };
p[me] = { Type: Uint32Array, size: 4, setter: Re, arraySetter: ve };
p[Te] = { Type: Uint32Array, size: 8, setter: Pe, cols: 2 };
p[Se] = { Type: Uint32Array, size: 12, setter: Fe, cols: 3 };
p[we] = { Type: Uint32Array, size: 16, setter: Ne, cols: 4 };
p[Ee] = { Type: Float32Array, size: 32, setter: ii, rows: 2, cols: 2 };
p[be] = { Type: Float32Array, size: 48, setter: oi, rows: 3, cols: 3 };
p[Ie] = { Type: Float32Array, size: 64, setter: si, rows: 4, cols: 4 };
p[Fr] = { Type: Float32Array, size: 32, setter: ci, rows: 2, cols: 3 };
p[Nr] = { Type: Float32Array, size: 32, setter: ai, rows: 2, cols: 4 };
p[Dr] = { Type: Float32Array, size: 48, setter: fi, rows: 3, cols: 2 };
p[zr] = { Type: Float32Array, size: 48, setter: hi, rows: 3, cols: 4 };
p[Ur] = { Type: Float32Array, size: 64, setter: ui, rows: 4, cols: 2 };
p[Vr] = { Type: Float32Array, size: 64, setter: li, rows: 4, cols: 3 };
p[gr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: lt };
p[Rr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: yt };
p[vr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: zt };
p[Pr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: lt };
p[Cr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: xt };
p[Lr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: xt };
p[Or] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: yt };
p[kr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: lt };
p[$r] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: zt };
p[Gr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: yt };
p[Hr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: xt };
p[Wr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: lt };
p[Yr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: zt };
p[qr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: yt };
p[jr] = { Type: null, size: 0, setter: F, arraySetter: N, bindPoint: xt };
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
function Z(e, t) {
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
        n.type || Nt,
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
        n.type || Dt,
        n.stride || 0,
        n.offset || 0
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t, n.divisor || 0);
  };
}
function Ut(e, t, n) {
  const r = n.size, i = n.count;
  return function(o) {
    e.bindBuffer(ut, o.buffer);
    const s = o.size || o.numComponents || r, c = s / i, f = o.type || ht, h = p[f].size * s, u = o.normalize || !1, l = o.offset || 0, y = h / i;
    for (let x = 0; x < i; ++x)
      e.enableVertexAttribArray(t + x), e.vertexAttribPointer(
        t + x,
        c,
        f,
        u,
        h,
        l + y * x
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t + x, o.divisor || 0);
  };
}
const b = {};
b[ht] = { size: 4, setter: pt };
b[he] = { size: 8, setter: pt };
b[le] = { size: 12, setter: pt };
b[ye] = { size: 16, setter: pt };
b[Nt] = { size: 4, setter: Z };
b[xe] = { size: 8, setter: Z };
b[pe] = { size: 12, setter: Z };
b[Ae] = { size: 16, setter: Z };
b[Dt] = { size: 4, setter: At };
b[_e] = { size: 8, setter: At };
b[Be] = { size: 12, setter: At };
b[Me] = { size: 16, setter: At };
b[me] = { size: 4, setter: Z };
b[Te] = { size: 8, setter: Z };
b[Se] = { size: 12, setter: Z };
b[we] = { size: 16, setter: Z };
b[Ee] = { size: 4, setter: Ut, count: 2 };
b[be] = { size: 9, setter: Ut, count: 3 };
b[Ie] = { size: 16, setter: Ut, count: 4 };
const yi = /ERROR:\s*\d+:(\d+)/gi;
function xi(e, t = "", n = 0) {
  const r = [...t.matchAll(yi)], i = new Map(r.map((o, s) => {
    const c = parseInt(o[1]), f = r[s + 1], a = f ? f.index : t.length, h = t.substring(o.index, a);
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
function De(e) {
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
  if (r = r || Ft, !e.getShaderParameter(n, pr)) {
    const o = e.getShaderInfoLog(n), { lineOffset: s, shaderSource: c } = De(e.getShaderSource(n)), f = `${xi(c, o, s)}
Error compiling ${yr(e, t)}: ${o}`;
    return r(f), f;
  }
  return "";
}
function Vt(e, t, n) {
  let r, i, o;
  if (typeof t == "function" && (n = t, t = void 0), typeof e == "function")
    n = e, e = void 0;
  else if (e && !Array.isArray(e)) {
    const a = e;
    n = a.errorCallback, e = a.attribLocations, r = a.transformFeedbackVaryings, i = a.transformFeedbackMode, o = a.callback;
  }
  const s = n || Ft, c = [], f = {
    errorCallback(a, ...h) {
      c.push(a), s(a, ...h);
    },
    transformFeedbackVaryings: r,
    transformFeedbackMode: i,
    callback: o,
    errors: c
  };
  {
    let a = {};
    Array.isArray(e) ? e.forEach(function(h, u) {
      a[h] = t ? t[u] : u;
    }) : a = e || {}, f.attribLocations = a;
  }
  return f;
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
  } = Vt(n);
  for (let c = 0; c < t.length; ++c) {
    let f = t[c];
    if (typeof f == "string") {
      const a = ae(f), h = a ? a.text : f;
      let u = e[mi[c]];
      a && a.type && (u = Ti(e, a.type) || u), f = e.createShader(u), e.shaderSource(f, De(h).shaderSource), e.compileShader(f), e.attachShader(r, f);
    }
  }
  Object.entries(i).forEach(([c, f]) => e.bindAttribLocation(r, f, c));
  {
    let c = o;
    c && (c.attribs && (c = c.attribs), Array.isArray(c) || (c = Object.keys(c)), e.transformFeedbackVaryings(r, c, s || Sr));
  }
  return e.linkProgram(r), r;
}
function bi(e, t, n, r, i) {
  const o = Vt(n, r, i), s = new Set(t), c = Ei(e, t, o);
  function f(a, h) {
    const u = _i(a, h, o.errorCallback);
    return u && Si(a, h, s), u;
  }
  if (o.callback) {
    Ii(e, c).then(() => {
      const a = f(e, c);
      o.callback(a, a ? void 0 : c);
    });
    return;
  }
  return f(e, c) ? void 0 : c;
}
async function Ii(e, t) {
  const n = e.getExtension("KHR_parallel_shader_compile"), r = n ? (o, s) => o.getProgramParameter(s, n.COMPLETION_STATUS_KHR) : () => !0;
  let i = 0;
  do
    await wi(i), i = 1e3 / 60;
  while (!r(e, t));
}
function _i(e, t, n) {
  if (n = n || Ft, !e.getProgramParameter(t, Ar)) {
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
const Mi = /(\.|\[|]|\w+)/g, gi = (e) => e >= "0" && e <= "9";
function Ri(e, t, n, r) {
  const i = e.split(Mi).filter((c) => c !== "");
  let o = 0, s = "";
  for (; ; ) {
    const c = i[o++];
    s += c;
    const f = gi(c[0]), a = f ? parseInt(c) : c;
    if (f && (s += i[o++]), o === i.length) {
      n[a] = t;
      break;
    } else {
      const u = i[o++], l = u === "[", y = n[a] || (l ? [] : {});
      n[a] = y, n = y, r[s] = r[s] || function(x) {
        return function(m) {
          Ue(x, m);
        };
      }(y), s += u;
    }
  }
}
function vi(e, t) {
  let n = 0;
  function r(c, f, a) {
    const h = f.name.endsWith("[0]"), u = f.type, l = p[u];
    if (!l)
      throw new Error(`unknown type: 0x${u.toString(16)}`);
    let y;
    if (l.bindPoint) {
      const x = n;
      n += f.size, h ? y = l.arraySetter(e, u, x, a, f.size) : y = l.setter(e, u, x, a, f.size);
    } else
      l.arraySetter && h ? y = l.arraySetter(e, a) : y = l.setter(e, a);
    return y.location = a, y;
  }
  const i = {}, o = {}, s = e.getProgramParameter(t, ue);
  for (let c = 0; c < s; ++c) {
    const f = e.getActiveUniform(t, c);
    if (ze(f))
      continue;
    let a = f.name;
    a.endsWith("[0]") && (a = a.substr(0, a.length - 3));
    const h = e.getUniformLocation(t, f.name);
    if (h) {
      const u = r(t, f, h);
      i[a] = u, Ri(a, u, o, i);
    }
  }
  return i;
}
function Pi(e, t) {
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
function Fi(e, t) {
  const n = e.getProgramParameter(t, ue), r = [], i = [];
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
    const f = c[0], a = c[1];
    e.getActiveUniforms(t, i, e[f]).forEach(function(h, u) {
      r[u][a] = h;
    });
  });
  const o = {}, s = e.getProgramParameter(t, br);
  for (let c = 0; c < s; ++c) {
    const f = e.getActiveUniformBlockName(t, c), a = {
      index: e.getUniformBlockIndex(t, f),
      usedByVertexShader: e.getActiveUniformBlockParameter(t, c, Ir),
      usedByFragmentShader: e.getActiveUniformBlockParameter(t, c, _r),
      size: e.getActiveUniformBlockParameter(t, c, Br),
      uniformIndices: e.getActiveUniformBlockParameter(t, c, Mr)
    };
    a.used = a.usedByVertexShader || a.usedByFragmentShader, o[f] = a;
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
function Ni(e, t) {
  const n = {}, r = e.getProgramParameter(t, wr);
  for (let i = 0; i < r; ++i) {
    const o = e.getActiveAttrib(t, i);
    if (ze(o))
      continue;
    const s = e.getAttribLocation(t, o.name), c = b[o.type], f = c.setter(e, s, c);
    f.location = s, n[o.name] = f;
  }
  return n;
}
function Di(e, t) {
  for (const n in t) {
    const r = e[n];
    r && r(t[n]);
  }
}
function Ve(e, t, n) {
  n.vertexArrayObject ? e.bindVertexArray(n.vertexArrayObject) : (Di(t.attribSetters || t, n.attribs), n.indices && e.bindBuffer(xr, n.indices));
}
function Wt(e, t) {
  const n = vi(e, t), r = Ni(e, t), i = {
    program: t,
    uniformSetters: n,
    attribSetters: r
  };
  return Pt(e) && (i.uniformBlockSpec = Fi(e, t), i.transformFeedbackInfo = Pi(e, t)), i;
}
const zi = /\s|{|}|;/;
function Ui(e, t, n, r, i) {
  const o = Vt(n, r, i), s = [];
  if (t = t.map(function(a) {
    if (!zi.test(a)) {
      const h = ae(a);
      if (h)
        a = h.text;
      else {
        const u = `no element with id: ${a}`;
        o.errorCallback(u), s.push(u);
      }
    }
    return a;
  }), s.length)
    return pi(o, "");
  const c = o.callback;
  c && (o.callback = (a, h) => {
    c(a, a ? void 0 : Wt(e, h));
  });
  const f = Bi(e, t, o);
  return f ? Wt(e, f) : null;
}
const Vi = 4, Yt = 5123;
function Ce(e, t, n, r, i, o) {
  n = n === void 0 ? Vi : n;
  const s = t.indices, c = t.elementType, f = r === void 0 ? t.numElements : r;
  i = i === void 0 ? 0 : i, c || s ? o !== void 0 ? e.drawElementsInstanced(n, f, c === void 0 ? Yt : t.elementType, i, o) : e.drawElements(n, f, c === void 0 ? Yt : t.elementType, i) : o !== void 0 ? e.drawArraysInstanced(n, i, f, o) : e.drawArrays(n, i, f);
}
function Ci(e, t) {
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
class D {
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
  const r = e.pos, i = t.pos, o = Math.atan2(i.y - r.y, i.x - r.x), s = Math.cos(o), c = Math.sin(o), f = r.x - n / 2 * c, a = r.y + n / 2 * s, h = r.x + n / 2 * c, u = r.y - n / 2 * s;
  return [new D(new A(f, a), e.color), new D(new A(h, u), e.color)];
}
function jt(e, t, n, r) {
  let i = e.pos.x, o = e.pos.y, s = t.pos.x, c = t.pos.y, f = n.pos.x, a = n.pos.y;
  const h = o - c, u = i - s, l = o * (i - s) - i * (o - c), y = c - a, x = s - f, m = c * (s - f) - s * (c - a), w = r / 2 * Math.sqrt(h * h + u * u) - l, S = r / 2 * Math.sqrt(h * h + u * u) + l, T = r / 2 * Math.sqrt(y * y + x * x) - m, I = r / 2 * Math.sqrt(y * y + x * x) + m, _ = (u * T - x * w) / (h * x - y * u), B = (y * w - h * T) / (h * x - y * u), g = (u * I - x * S) / (h * x - y * u), v = (y * S - h * I) / (h * x - y * u);
  return [new D(new A(-_, B), t.color), new D(new A(g, -v), t.color)];
}
class Li {
  zoom = 1;
  pos = new A(0, 0);
  displaySize = new A(0, 0);
  aspect = 1;
  // Aspect ratio
  matrix = Q.identity();
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
    this.matrix = Q.translate(
      Q.ortho(-this.aspect * t, this.aspect * t, 1 * t, -1 * t, -1, 1),
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
    this.translation = t, this.transformed = !0;
  }
  rotate(t) {
    this.rotation = t, this.transformed = !0;
  }
  scale(t) {
    this.scaling = t, this.transformed = !0;
  }
  resetTransforms() {
    this.translation = new A(0, 0), this.rotation = 0, this.scaling = new A(1, 1), this.transformed = !1;
  }
  transformVertices(t) {
    return this.transformed ? t.map((n) => new D(n.pos.copy().rotate(this.rotation).mult(this.scaling).add(this.translation), n.color)) : t;
  }
  getMatrix() {
    return Q.translate(Q.scale(Q.rotateZ(Q.identity(), this.rotation), [this.scaling.x, this.scaling.y, 1]), [
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
    super(t), this.bufferSize = n.bufferSize | 1e4, this.addBuffer();
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
      Ve(this.gl, t, this.buffers[n].bufferInfo), Ce(this.gl, this.buffers[n].bufferInfo, this.gl.TRIANGLES, this.buffers[n].currentIndices);
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
  return new P(e, t, n);
}
function ki(e, t, n, r = 255) {
  return new P(e, t, n, r);
}
class P {
  r;
  g;
  b;
  a;
  static WHITE = new P(255, 255, 255);
  static BLACK = new P(0, 0, 0);
  static RED = new P(255, 0, 0);
  static GREEN = new P(0, 255, 0);
  static BLUE = new P(0, 0, 255);
  static YELLOW = new P(255, 255, 0);
  static MAGENTA = new P(255, 0, 255);
  static CYAN = new P(0, 255, 255);
  static TRANSPARENT = new P(0, 0, 0, 0);
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
    return new P(
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
    t.camera ? (this.camera = t.camera, this.camera.setDisplaySize(new A(this.canvas.width, this.canvas.height))) : this.camera = new Li(new A(this.canvas.width, this.canvas.height)), this.shaderProgramInfo = Ui(this.gl, [qt.vertexShader, qt.fragmentShader]), this.gl.enable(this.gl.BLEND), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE), Ci(this.gl.canvas), this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.setBuffer(new Oi(this.gl, { bufferSize: 1e3 })), this.transform = new Le();
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
  clear(t = new P(0, 0, 0, 255)) {
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
    const o = new D(t, i), s = new D(n, i);
    this.buffers[this.currentBufferIndex].addVerticesAndIndices(
      this.transform.transformVertices([...ct(o, s, r), ...ct(s, o, r)]),
      [0, 1, 2, 0, 2, 3]
    );
  }
  path(t, n, r = !1) {
    const i = [], o = [], s = t[0], c = t[1];
    r ? i.push(...jt(t[t.length - 1], s, c, n)) : i.push(...ct(s, c, n));
    for (let f = 0; f < t.length - (r ? 1 : 2); f++)
      o.push(0 + f * 2, 1 + f * 2, 2 + f * 2, 1 + f * 2, 2 + f * 2, 3 + f * 2), i.push(...jt(t[f], t[f + 1], t[(f + 2) % t.length], n));
    if (r) {
      const f = i.length - 2;
      o.push(f, f + 1, 0, f + 1, 0, 1);
    } else {
      const f = i.length - 2;
      o.push(f + 0, f + 1, f + 2, f + 0, f + 2, f + 3), i.push(...ct(t[t.length - 1], t[t.length - 2], n));
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
    t instanceof D ? this.currentPath.push(t) : n && this.currentPath.push(new D(t, n));
  }
  vertices(t, n) {
    t[0] instanceof D ? this.currentPath = [...this.currentPath, ...t] : n && (this.currentPath = [...this.currentPath, ...t.map((r) => new D(r, n))]);
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
    const c = Math.PI * 2 * n * s / 20, f = (i - r) / c, a = [];
    for (let h = 0; h <= c; h++) {
      const u = r + f * h;
      a.push(new D(new A(t.x + n * Math.cos(u), t.y + n * Math.sin(u)), o));
    }
    this.currentPath.push(...a);
  }
  /**
   * Draws a rectangle (to the current path).
   * @param pos The position of the top left corner of the rectangle
   * @param size The size (width and height) of the rectangle
   * @param color The color of the rectangle
   */
  rect(t, n, r) {
    const i = [t, new A(t.x + n.x, t.y), new A(t.x + n.y, t.y + n.y), new A(t.x, t.y + n.y)];
    this.currentPath.push(...i.map((o) => new D(o, r)));
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
      const f = this.currentPath[c % this.currentPath.length], a = this.currentPath[(c + 1) % this.currentPath.length], h = f.pos.dist(a.pos), u = Math.floor(h / i), l = h / u;
      let y = this.currentPath[c];
      const x = a.pos.copy().sub(f.pos);
      for (let m = 1; m < u; m++) {
        const w = f.pos.copy().add(x.copy().setMag(l * m));
        let S = new D(w, P.interpolate(f.color, a.color, m / u));
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
      throw new Error("Buffer not initialized! Run buffer.updateBuffer()");
    mt(t, {
      modelMatrix: this.transform.getMatrix()
    }), Ve(this.gl, t, this.buffer.bufferInfo), Ce(this.gl, this.buffer.bufferInfo, this.gl.TRIANGLES, this.buffer.currentIndices);
  }
}
export {
  Oe as Buffer,
  Et as BufferData,
  Li as Camera,
  $i as CanvasTextRenderer,
  P as Color,
  Oi as DynamicBuffer,
  Gi as RGB,
  ki as RGBA,
  Hi as Renderer,
  Wi as StaticBuffer,
  Le as Transform,
  A as Vector,
  D as Vertex
};
