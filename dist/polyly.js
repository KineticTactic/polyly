/* @license twgl.js 5.5.3 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */
let D = Float32Array;
function qe(e) {
  const t = D;
  return D = e, t;
}
function q(e, t, n) {
  const r = new D(3);
  return e && (r[0] = e), t && (r[1] = t), n && (r[2] = n), r;
}
function je(e, t, n) {
  return n = n || new D(3), n[0] = e[0] + t[0], n[1] = e[1] + t[1], n[2] = e[2] + t[2], n;
}
function ne(e, t, n) {
  return n = n || new D(3), n[0] = e[0] - t[0], n[1] = e[1] - t[1], n[2] = e[2] - t[2], n;
}
function Xe(e, t, n, r) {
  return r = r || new D(3), r[0] = e[0] + n * (t[0] - e[0]), r[1] = e[1] + n * (t[1] - e[1]), r[2] = e[2] + n * (t[2] - e[2]), r;
}
function Ke(e, t, n, r) {
  return r = r || new D(3), r[0] = e[0] + n[0] * (t[0] - e[0]), r[1] = e[1] + n[1] * (t[1] - e[1]), r[2] = e[2] + n[2] * (t[2] - e[2]), r;
}
function Ze(e, t, n) {
  return n = n || new D(3), n[0] = Math.max(e[0], t[0]), n[1] = Math.max(e[1], t[1]), n[2] = Math.max(e[2], t[2]), n;
}
function Je(e, t, n) {
  return n = n || new D(3), n[0] = Math.min(e[0], t[0]), n[1] = Math.min(e[1], t[1]), n[2] = Math.min(e[2], t[2]), n;
}
function Qe(e, t, n) {
  return n = n || new D(3), n[0] = e[0] * t, n[1] = e[1] * t, n[2] = e[2] * t, n;
}
function tn(e, t, n) {
  return n = n || new D(3), n[0] = e[0] / t, n[1] = e[1] / t, n[2] = e[2] / t, n;
}
function gt(e, t, n) {
  n = n || new D(3);
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
function sn(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
  return Math.sqrt(n * n + r * r + i * i);
}
function on(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
  return n * n + r * r + i * i;
}
function ht(e, t) {
  t = t || new D(3);
  const n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], r = Math.sqrt(n);
  return r > 1e-5 ? (t[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r) : (t[0] = 0, t[1] = 0, t[2] = 0), t;
}
function cn(e, t) {
  return t = t || new D(3), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t;
}
function an(e, t) {
  return t = t || new D(3), t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
}
function un(e, t, n) {
  return n = n || new D(3), n[0] = e[0] * t[0], n[1] = e[1] * t[1], n[2] = e[2] * t[2], n;
}
function fn(e, t, n) {
  return n = n || new D(3), n[0] = e[0] / t[0], n[1] = e[1] / t[1], n[2] = e[2] / t[2], n;
}
var hn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  add: je,
  copy: an,
  create: q,
  cross: gt,
  distance: sn,
  distanceSq: on,
  divide: fn,
  divScalar: tn,
  dot: en,
  lerp: Xe,
  lerpV: Ke,
  length: nn,
  lengthSq: rn,
  max: Ze,
  min: Je,
  mulScalar: Qe,
  multiply: un,
  negate: cn,
  normalize: ht,
  setDefaultType: qe,
  subtract: ne
});
let w = Float32Array;
function ln(e) {
  const t = w;
  return w = e, t;
}
function xn(e, t) {
  return t = t || new w(16), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t[4] = -e[4], t[5] = -e[5], t[6] = -e[6], t[7] = -e[7], t[8] = -e[8], t[9] = -e[9], t[10] = -e[10], t[11] = -e[11], t[12] = -e[12], t[13] = -e[13], t[14] = -e[14], t[15] = -e[15], t;
}
function yn() {
  return new w(16).fill(0);
}
function re(e, t) {
  return t = t || new w(16), t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
}
function ie(e) {
  return e = e || new w(16), e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function pn(e, t) {
  if (t = t || new w(16), t === e) {
    let A;
    return A = e[1], e[1] = e[4], e[4] = A, A = e[2], e[2] = e[8], e[8] = A, A = e[3], e[3] = e[12], e[12] = A, A = e[6], e[6] = e[9], e[9] = A, A = e[7], e[7] = e[13], e[13] = A, A = e[11], e[11] = e[14], e[14] = A, t;
  }
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], s = e[0 * 4 + 3], o = e[1 * 4 + 0], c = e[1 * 4 + 1], a = e[1 * 4 + 2], u = e[1 * 4 + 3], h = e[2 * 4 + 0], f = e[2 * 4 + 1], l = e[2 * 4 + 2], y = e[2 * 4 + 3], p = e[3 * 4 + 0], T = e[3 * 4 + 1], S = e[3 * 4 + 2], b = e[3 * 4 + 3];
  return t[0] = n, t[1] = o, t[2] = h, t[3] = p, t[4] = r, t[5] = c, t[6] = f, t[7] = T, t[8] = i, t[9] = a, t[10] = l, t[11] = S, t[12] = s, t[13] = u, t[14] = y, t[15] = b, t;
}
function se(e, t) {
  t = t || new w(16);
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], s = e[0 * 4 + 3], o = e[1 * 4 + 0], c = e[1 * 4 + 1], a = e[1 * 4 + 2], u = e[1 * 4 + 3], h = e[2 * 4 + 0], f = e[2 * 4 + 1], l = e[2 * 4 + 2], y = e[2 * 4 + 3], p = e[3 * 4 + 0], T = e[3 * 4 + 1], S = e[3 * 4 + 2], b = e[3 * 4 + 3], A = l * b, P = S * y, R = a * b, M = S * u, _ = a * y, g = l * u, I = i * b, v = S * s, N = i * y, L = l * s, V = i * u, d = a * s, k = h * T, O = p * f, $ = o * T, G = p * c, W = o * f, et = h * c, nt = n * T, rt = p * r, it = n * f, st = h * r, ot = n * c, ct = o * r, Gt = A * c + M * f + _ * T - (P * c + R * f + g * T), Wt = P * r + I * f + L * T - (A * r + v * f + N * T), Ht = R * r + v * c + V * T - (M * r + I * c + d * T), Yt = g * r + N * c + d * f - (_ * r + L * c + V * f), F = 1 / (n * Gt + o * Wt + h * Ht + p * Yt);
  return t[0] = F * Gt, t[1] = F * Wt, t[2] = F * Ht, t[3] = F * Yt, t[4] = F * (P * o + R * h + g * p - (A * o + M * h + _ * p)), t[5] = F * (A * n + v * h + N * p - (P * n + I * h + L * p)), t[6] = F * (M * n + I * o + d * p - (R * n + v * o + V * p)), t[7] = F * (_ * n + L * o + V * h - (g * n + N * o + d * h)), t[8] = F * (k * u + G * y + W * b - (O * u + $ * y + et * b)), t[9] = F * (O * s + nt * y + st * b - (k * s + rt * y + it * b)), t[10] = F * ($ * s + rt * u + ot * b - (G * s + nt * u + ct * b)), t[11] = F * (et * s + it * u + ct * y - (W * s + st * u + ot * y)), t[12] = F * ($ * l + et * S + O * a - (W * S + k * a + G * l)), t[13] = F * (it * S + k * i + rt * l - (nt * l + st * S + O * i)), t[14] = F * (nt * a + ct * S + G * i - (ot * S + $ * i + rt * a)), t[15] = F * (ot * l + W * i + st * a - (it * a + ct * l + et * i)), t;
}
function mn(e, t, n) {
  n = n || new w(16);
  const r = e[0], i = e[1], s = e[2], o = e[3], c = e[4 + 0], a = e[4 + 1], u = e[4 + 2], h = e[4 + 3], f = e[8 + 0], l = e[8 + 1], y = e[8 + 2], p = e[8 + 3], T = e[12 + 0], S = e[12 + 1], b = e[12 + 2], A = e[12 + 3], P = t[0], R = t[1], M = t[2], _ = t[3], g = t[4 + 0], I = t[4 + 1], v = t[4 + 2], N = t[4 + 3], L = t[8 + 0], V = t[8 + 1], d = t[8 + 2], k = t[8 + 3], O = t[12 + 0], $ = t[12 + 1], G = t[12 + 2], W = t[12 + 3];
  return n[0] = r * P + c * R + f * M + T * _, n[1] = i * P + a * R + l * M + S * _, n[2] = s * P + u * R + y * M + b * _, n[3] = o * P + h * R + p * M + A * _, n[4] = r * g + c * I + f * v + T * N, n[5] = i * g + a * I + l * v + S * N, n[6] = s * g + u * I + y * v + b * N, n[7] = o * g + h * I + p * v + A * N, n[8] = r * L + c * V + f * d + T * k, n[9] = i * L + a * V + l * d + S * k, n[10] = s * L + u * V + y * d + b * k, n[11] = o * L + h * V + p * d + A * k, n[12] = r * O + c * $ + f * G + T * W, n[13] = i * O + a * $ + l * G + S * W, n[14] = s * O + u * $ + y * G + b * W, n[15] = o * O + h * $ + p * G + A * W, n;
}
function An(e, t, n) {
  return n = n || ie(), e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11]), n[12] = t[0], n[13] = t[1], n[14] = t[2], n[15] = 1, n;
}
function Sn(e, t) {
  return t = t || q(), t[0] = e[12], t[1] = e[13], t[2] = e[14], t;
}
function Tn(e, t, n) {
  n = n || q();
  const r = t * 4;
  return n[0] = e[r + 0], n[1] = e[r + 1], n[2] = e[r + 2], n;
}
function bn(e, t, n, r) {
  r !== e && (r = re(e, r));
  const i = n * 4;
  return r[i + 0] = t[0], r[i + 1] = t[1], r[i + 2] = t[2], r;
}
function wn(e, t, n, r, i) {
  i = i || new w(16);
  const s = Math.tan(Math.PI * 0.5 - 0.5 * e), o = 1 / (n - r);
  return i[0] = s / t, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = s, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = (n + r) * o, i[11] = -1, i[12] = 0, i[13] = 0, i[14] = n * r * o * 2, i[15] = 0, i;
}
function En(e, t, n, r, i, s, o) {
  return o = o || new w(16), o[0] = 2 / (t - e), o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 / (r - n), o[6] = 0, o[7] = 0, o[8] = 0, o[9] = 0, o[10] = 2 / (i - s), o[11] = 0, o[12] = (t + e) / (e - t), o[13] = (r + n) / (n - r), o[14] = (s + i) / (i - s), o[15] = 1, o;
}
function gn(e, t, n, r, i, s, o) {
  o = o || new w(16);
  const c = t - e, a = r - n, u = i - s;
  return o[0] = 2 * i / c, o[1] = 0, o[2] = 0, o[3] = 0, o[4] = 0, o[5] = 2 * i / a, o[6] = 0, o[7] = 0, o[8] = (e + t) / c, o[9] = (r + n) / a, o[10] = s / u, o[11] = -1, o[12] = 0, o[13] = 0, o[14] = i * s / u, o[15] = 0, o;
}
let j, Z, Y;
function In(e, t, n, r) {
  return r = r || new w(16), j = j || q(), Z = Z || q(), Y = Y || q(), ht(
    ne(e, t, Y),
    Y
  ), ht(gt(n, Y, j), j), ht(gt(Y, j, Z), Z), r[0] = j[0], r[1] = j[1], r[2] = j[2], r[3] = 0, r[4] = Z[0], r[5] = Z[1], r[6] = Z[2], r[7] = 0, r[8] = Y[0], r[9] = Y[1], r[10] = Y[2], r[11] = 0, r[12] = e[0], r[13] = e[1], r[14] = e[2], r[15] = 1, r;
}
function _n(e, t) {
  return t = t || new w(16), t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t;
}
function Bn(e, t, n) {
  n = n || new w(16);
  const r = t[0], i = t[1], s = t[2], o = e[0], c = e[1], a = e[2], u = e[3], h = e[1 * 4 + 0], f = e[1 * 4 + 1], l = e[1 * 4 + 2], y = e[1 * 4 + 3], p = e[2 * 4 + 0], T = e[2 * 4 + 1], S = e[2 * 4 + 2], b = e[2 * 4 + 3], A = e[3 * 4 + 0], P = e[3 * 4 + 1], R = e[3 * 4 + 2], M = e[3 * 4 + 3];
  return e !== n && (n[0] = o, n[1] = c, n[2] = a, n[3] = u, n[4] = h, n[5] = f, n[6] = l, n[7] = y, n[8] = p, n[9] = T, n[10] = S, n[11] = b), n[12] = o * r + h * i + p * s + A, n[13] = c * r + f * i + T * s + P, n[14] = a * r + l * i + S * s + R, n[15] = u * r + y * i + b * s + M, n;
}
function Pn(e, t) {
  t = t || new w(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Rn(e, t, n) {
  n = n || new w(16);
  const r = e[4], i = e[5], s = e[6], o = e[7], c = e[8], a = e[9], u = e[10], h = e[11], f = Math.cos(t), l = Math.sin(t);
  return n[4] = f * r + l * c, n[5] = f * i + l * a, n[6] = f * s + l * u, n[7] = f * o + l * h, n[8] = f * c - l * r, n[9] = f * a - l * i, n[10] = f * u - l * s, n[11] = f * h - l * o, e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function Mn(e, t) {
  t = t || new w(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function vn(e, t, n) {
  n = n || new w(16);
  const r = e[0 * 4 + 0], i = e[0 * 4 + 1], s = e[0 * 4 + 2], o = e[0 * 4 + 3], c = e[2 * 4 + 0], a = e[2 * 4 + 1], u = e[2 * 4 + 2], h = e[2 * 4 + 3], f = Math.cos(t), l = Math.sin(t);
  return n[0] = f * r - l * c, n[1] = f * i - l * a, n[2] = f * s - l * u, n[3] = f * o - l * h, n[8] = f * c + l * r, n[9] = f * a + l * i, n[10] = f * u + l * s, n[11] = f * h + l * o, e !== n && (n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function Dn(e, t) {
  t = t || new w(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Fn(e, t, n) {
  n = n || new w(16);
  const r = e[0 * 4 + 0], i = e[0 * 4 + 1], s = e[0 * 4 + 2], o = e[0 * 4 + 3], c = e[1 * 4 + 0], a = e[1 * 4 + 1], u = e[1 * 4 + 2], h = e[1 * 4 + 3], f = Math.cos(t), l = Math.sin(t);
  return n[0] = f * r + l * c, n[1] = f * i + l * a, n[2] = f * s + l * u, n[3] = f * o + l * h, n[4] = f * c - l * r, n[5] = f * a - l * i, n[6] = f * u - l * s, n[7] = f * h - l * o, e !== n && (n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function zn(e, t, n) {
  n = n || new w(16);
  let r = e[0], i = e[1], s = e[2];
  const o = Math.sqrt(r * r + i * i + s * s);
  r /= o, i /= o, s /= o;
  const c = r * r, a = i * i, u = s * s, h = Math.cos(t), f = Math.sin(t), l = 1 - h;
  return n[0] = c + (1 - c) * h, n[1] = r * i * l + s * f, n[2] = r * s * l - i * f, n[3] = 0, n[4] = r * i * l - s * f, n[5] = a + (1 - a) * h, n[6] = i * s * l + r * f, n[7] = 0, n[8] = r * s * l + i * f, n[9] = i * s * l - r * f, n[10] = u + (1 - u) * h, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
}
function Nn(e, t, n, r) {
  r = r || new w(16);
  let i = t[0], s = t[1], o = t[2];
  const c = Math.sqrt(i * i + s * s + o * o);
  i /= c, s /= c, o /= c;
  const a = i * i, u = s * s, h = o * o, f = Math.cos(n), l = Math.sin(n), y = 1 - f, p = a + (1 - a) * f, T = i * s * y + o * l, S = i * o * y - s * l, b = i * s * y - o * l, A = u + (1 - u) * f, P = s * o * y + i * l, R = i * o * y + s * l, M = s * o * y - i * l, _ = h + (1 - h) * f, g = e[0], I = e[1], v = e[2], N = e[3], L = e[4], V = e[5], d = e[6], k = e[7], O = e[8], $ = e[9], G = e[10], W = e[11];
  return r[0] = p * g + T * L + S * O, r[1] = p * I + T * V + S * $, r[2] = p * v + T * d + S * G, r[3] = p * N + T * k + S * W, r[4] = b * g + A * L + P * O, r[5] = b * I + A * V + P * $, r[6] = b * v + A * d + P * G, r[7] = b * N + A * k + P * W, r[8] = R * g + M * L + _ * O, r[9] = R * I + M * V + _ * $, r[10] = R * v + M * d + _ * G, r[11] = R * N + M * k + _ * W, e !== r && (r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15]), r;
}
function Cn(e, t) {
  return t = t || new w(16), t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Un(e, t, n) {
  n = n || new w(16);
  const r = t[0], i = t[1], s = t[2];
  return n[0] = r * e[0 * 4 + 0], n[1] = r * e[0 * 4 + 1], n[2] = r * e[0 * 4 + 2], n[3] = r * e[0 * 4 + 3], n[4] = i * e[1 * 4 + 0], n[5] = i * e[1 * 4 + 1], n[6] = i * e[1 * 4 + 2], n[7] = i * e[1 * 4 + 3], n[8] = s * e[2 * 4 + 0], n[9] = s * e[2 * 4 + 1], n[10] = s * e[2 * 4 + 2], n[11] = s * e[2 * 4 + 3], e !== n && (n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function Ln(e, t, n) {
  n = n || q();
  const r = t[0], i = t[1], s = t[2], o = r * e[0 * 4 + 3] + i * e[1 * 4 + 3] + s * e[2 * 4 + 3] + e[3 * 4 + 3];
  return n[0] = (r * e[0 * 4 + 0] + i * e[1 * 4 + 0] + s * e[2 * 4 + 0] + e[3 * 4 + 0]) / o, n[1] = (r * e[0 * 4 + 1] + i * e[1 * 4 + 1] + s * e[2 * 4 + 1] + e[3 * 4 + 1]) / o, n[2] = (r * e[0 * 4 + 2] + i * e[1 * 4 + 2] + s * e[2 * 4 + 2] + e[3 * 4 + 2]) / o, n;
}
function Vn(e, t, n) {
  n = n || q();
  const r = t[0], i = t[1], s = t[2];
  return n[0] = r * e[0 * 4 + 0] + i * e[1 * 4 + 0] + s * e[2 * 4 + 0], n[1] = r * e[0 * 4 + 1] + i * e[1 * 4 + 1] + s * e[2 * 4 + 1], n[2] = r * e[0 * 4 + 2] + i * e[1 * 4 + 2] + s * e[2 * 4 + 2], n;
}
function dn(e, t, n) {
  n = n || q();
  const r = se(e), i = t[0], s = t[1], o = t[2];
  return n[0] = i * r[0 * 4 + 0] + s * r[0 * 4 + 1] + o * r[0 * 4 + 2], n[1] = i * r[1 * 4 + 0] + s * r[1 * 4 + 1] + o * r[1 * 4 + 2], n[2] = i * r[2 * 4 + 0] + s * r[2 * 4 + 1] + o * r[2 * 4 + 2], n;
}
var J = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  axisRotate: Nn,
  axisRotation: zn,
  copy: re,
  create: yn,
  frustum: gn,
  getAxis: Tn,
  getTranslation: Sn,
  identity: ie,
  inverse: se,
  lookAt: In,
  multiply: mn,
  negate: xn,
  ortho: En,
  perspective: wn,
  rotateX: Rn,
  rotateY: vn,
  rotateZ: Fn,
  rotationX: Pn,
  rotationY: Mn,
  rotationZ: Dn,
  scale: Un,
  scaling: Cn,
  setAxis: bn,
  setDefaultType: ln,
  setTranslation: An,
  transformDirection: Vn,
  transformNormal: dn,
  transformPoint: Ln,
  translate: Bn,
  translation: _n,
  transpose: pn
});
const Rt = 5120, tt = 5121, Mt = 5122, vt = 5123, Dt = 5124, Ft = 5125, zt = 5126, kn = 32819, On = 32820, $n = 33635, Gn = 5131, Wn = 33640, Hn = 35899, Yn = 35902, qn = 36269, jn = 34042, oe = {};
{
  const e = oe;
  e[Rt] = Int8Array, e[tt] = Uint8Array, e[Mt] = Int16Array, e[vt] = Uint16Array, e[Dt] = Int32Array, e[Ft] = Uint32Array, e[zt] = Float32Array, e[kn] = Uint16Array, e[On] = Uint16Array, e[$n] = Uint16Array, e[Gn] = Uint16Array, e[Wn] = Uint32Array, e[Hn] = Uint32Array, e[Yn] = Uint32Array, e[qn] = Uint32Array, e[jn] = Uint32Array;
}
function ce(e) {
  if (e instanceof Int8Array)
    return Rt;
  if (e instanceof Uint8Array || e instanceof Uint8ClampedArray)
    return tt;
  if (e instanceof Int16Array)
    return Mt;
  if (e instanceof Uint16Array)
    return vt;
  if (e instanceof Int32Array)
    return Dt;
  if (e instanceof Uint32Array)
    return Ft;
  if (e instanceof Float32Array)
    return zt;
  throw new Error("unsupported typed array type");
}
function ae(e) {
  if (e === Int8Array)
    return Rt;
  if (e === Uint8Array || e === Uint8ClampedArray)
    return tt;
  if (e === Int16Array)
    return Mt;
  if (e === Uint16Array)
    return vt;
  if (e === Int32Array)
    return Dt;
  if (e === Uint32Array)
    return Ft;
  if (e === Float32Array)
    return zt;
  throw new Error("unsupported typed array type");
}
function Xn(e) {
  const t = oe[e];
  if (!t)
    throw new Error("unknown gl type");
  return t;
}
const It = typeof SharedArrayBuffer < "u" ? function(t) {
  return t && t.buffer && (t.buffer instanceof ArrayBuffer || t.buffer instanceof SharedArrayBuffer);
} : function(t) {
  return t && t.buffer && t.buffer instanceof ArrayBuffer;
};
function Kn(...e) {
  console.error(...e);
}
const qt = /* @__PURE__ */ new Map();
function ue(e, t) {
  if (!e || typeof e != "object")
    return !1;
  let n = qt.get(t);
  n || (n = /* @__PURE__ */ new WeakMap(), qt.set(t, n));
  let r = n.get(e);
  if (r === void 0) {
    const i = Object.prototype.toString.call(e);
    r = i.substring(8, i.length - 1) === t, n.set(e, r);
  }
  return r;
}
function Zn(e, t) {
  return typeof WebGLBuffer < "u" && ue(t, "WebGLBuffer");
}
function fe(e, t) {
  return typeof WebGLTexture < "u" && ue(t, "WebGLTexture");
}
const he = 35044, H = 34962, Jn = 34963, Qn = 34660, tr = 5120, er = 5121, nr = 5122, rr = 5123, ir = 5124, sr = 5125, le = 5126, xe = {
  attribPrefix: ""
};
function ye(e, t, n, r, i) {
  e.bindBuffer(t, n), e.bufferData(t, r, i || he);
}
function pe(e, t, n, r) {
  if (Zn(e, t))
    return t;
  n = n || H;
  const i = e.createBuffer();
  return ye(e, n, i, t, r), i;
}
function me(e) {
  return e === "indices";
}
function or(e) {
  return e === Int8Array || e === Uint8Array;
}
function cr(e) {
  return e.length ? e : e.data;
}
const ar = /coord|texture/i, ur = /color|colour/i;
function fr(e, t) {
  let n;
  if (ar.test(e) ? n = 2 : ur.test(e) ? n = 4 : n = 3, t % n > 0)
    throw new Error(`Can not guess numComponents for attribute '${e}'. Tried ${n} but ${t} values is not evenly divisible by ${n}. You should specify it.`);
  return n;
}
function hr(e, t, n) {
  return e.numComponents || e.size || fr(t, n || cr(e).length);
}
function Nt(e, t) {
  if (It(e))
    return e;
  if (It(e.data))
    return e.data;
  Array.isArray(e) && (e = {
    data: e
  });
  let n = e.type ? Ct(e.type) : void 0;
  return n || (me(t) ? n = Uint16Array : n = Float32Array), new n(e.data);
}
function lr(e) {
  return typeof e == "number" ? e : e ? ae(e) : le;
}
function Ct(e) {
  return typeof e == "number" ? Xn(e) : e || Float32Array;
}
function xr(e, t) {
  return {
    buffer: t.buffer,
    numValues: 2 * 3 * 4,
    // safely divided by 2, 3, 4
    type: lr(t.type),
    arrayType: Ct(t.type)
  };
}
function yr(e, t) {
  const n = t.data || t, r = Ct(t.type), i = n * r.BYTES_PER_ELEMENT, s = e.createBuffer();
  return e.bindBuffer(H, s), e.bufferData(H, i, t.drawType || he), {
    buffer: s,
    numValues: n,
    type: ae(r),
    arrayType: r
  };
}
function pr(e, t, n) {
  const r = Nt(t, n);
  return {
    arrayType: r.constructor,
    buffer: pe(e, r, void 0, t.drawType),
    type: ce(r),
    numValues: 0
  };
}
function mr(e, t) {
  const n = {};
  return Object.keys(t).forEach(function(r) {
    if (!me(r)) {
      const i = t[r], s = i.attrib || i.name || i.attribName || xe.attribPrefix + r;
      if (i.value) {
        if (!Array.isArray(i.value) && !It(i.value))
          throw new Error("array.value is not array or typedarray");
        n[s] = {
          value: i.value
        };
      } else {
        let o;
        i.buffer && i.buffer instanceof WebGLBuffer ? o = xr : typeof i == "number" || typeof i.data == "number" ? o = yr : o = pr;
        const { buffer: c, type: a, numValues: u, arrayType: h } = o(e, i, r), f = i.normalize !== void 0 ? i.normalize : or(h), l = hr(i, r, u);
        n[s] = {
          buffer: c,
          numComponents: l,
          type: a,
          normalize: f,
          stride: i.stride || 0,
          offset: i.offset || 0,
          divisor: i.divisor === void 0 ? void 0 : i.divisor,
          drawType: i.drawType
        };
      }
    }
  }), e.bindBuffer(H, null), n;
}
function jt(e, t, n, r) {
  n = Nt(n), r !== void 0 ? (e.bindBuffer(H, t.buffer), e.bufferSubData(H, r, n)) : ye(e, H, t.buffer, n, t.drawType);
}
function Ar(e, t) {
  return t === tr || t === er ? 1 : t === nr || t === rr ? 2 : t === ir || t === sr || t === le ? 4 : 0;
}
const Et = ["position", "positions", "a_position"];
function Sr(e, t) {
  let n, r;
  for (r = 0; r < Et.length && (n = Et[r], !(n in t || (n = xe.attribPrefix + n, n in t))); ++r)
    ;
  r === Et.length && (n = Object.keys(t)[0]);
  const i = t[n];
  if (!i.buffer)
    return 1;
  e.bindBuffer(H, i.buffer);
  const s = e.getBufferParameter(H, Qn);
  e.bindBuffer(H, null);
  const o = Ar(e, i.type), c = s / o, a = i.numComponents || i.size, u = c / a;
  if (u % 1 !== 0)
    throw new Error(`numComponents ${a} not correct for length ${length}`);
  return u;
}
function Tr(e, t, n) {
  const r = mr(e, t), i = Object.assign({}, n || {});
  i.attribs = Object.assign({}, n ? n.attribs : {}, r);
  const s = t.indices;
  if (s) {
    const o = Nt(s, "indices");
    i.indices = pe(e, o, Jn), i.numElements = o.length, i.elementType = ce(o);
  } else
    i.numElements || (i.numElements = Sr(e, i.attribs));
  return i;
}
function Ut(e) {
  return !!e.texStorage2D;
}
const br = function() {
  const e = {}, t = {};
  function n(r) {
    const i = r.constructor.name;
    if (!e[i]) {
      for (const s in r)
        if (typeof r[s] == "number") {
          const o = t[r[s]];
          t[r[s]] = o ? `${o} | ${s}` : s;
        }
      e[i] = !0;
    }
  }
  return function(i, s) {
    return n(i), t[s] || (typeof s == "number" ? `0x${s.toString(16)}` : s);
  };
}(), Lt = Kn;
function Ae(e) {
  return typeof document < "u" && document.getElementById ? document.getElementById(e) : null;
}
const lt = 33984, xt = 34962, wr = 34963, Er = 35713, gr = 35714, Ir = 35632, _r = 35633, Br = 35981, Se = 35718, Pr = 35721, Rr = 35971, Mr = 35382, vr = 35396, Dr = 35398, Fr = 35392, zr = 35395, yt = 5126, Te = 35664, be = 35665, we = 35666, Vt = 5124, Ee = 35667, ge = 35668, Ie = 35669, _e = 35670, Be = 35671, Pe = 35672, Re = 35673, Me = 35674, ve = 35675, De = 35676, Nr = 35678, Cr = 35680, Ur = 35679, Lr = 35682, Vr = 35685, dr = 35686, kr = 35687, Or = 35688, $r = 35689, Gr = 35690, Wr = 36289, Hr = 36292, Yr = 36293, dt = 5125, Fe = 36294, ze = 36295, Ne = 36296, qr = 36298, jr = 36299, Xr = 36300, Kr = 36303, Zr = 36306, Jr = 36307, Qr = 36308, ti = 36311, pt = 3553, mt = 34067, kt = 32879, At = 35866, m = {};
function Ce(e, t) {
  return m[t].bindPoint;
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
function si(e, t) {
  return function(n) {
    e.uniform4fv(t, n);
  };
}
function Ue(e, t) {
  return function(n) {
    e.uniform1i(t, n);
  };
}
function Le(e, t) {
  return function(n) {
    e.uniform1iv(t, n);
  };
}
function Ve(e, t) {
  return function(n) {
    e.uniform2iv(t, n);
  };
}
function de(e, t) {
  return function(n) {
    e.uniform3iv(t, n);
  };
}
function ke(e, t) {
  return function(n) {
    e.uniform4iv(t, n);
  };
}
function oi(e, t) {
  return function(n) {
    e.uniform1ui(t, n);
  };
}
function ci(e, t) {
  return function(n) {
    e.uniform1uiv(t, n);
  };
}
function ai(e, t) {
  return function(n) {
    e.uniform2uiv(t, n);
  };
}
function ui(e, t) {
  return function(n) {
    e.uniform3uiv(t, n);
  };
}
function fi(e, t) {
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
function xi(e, t) {
  return function(n) {
    e.uniformMatrix4fv(t, !1, n);
  };
}
function yi(e, t) {
  return function(n) {
    e.uniformMatrix2x3fv(t, !1, n);
  };
}
function pi(e, t) {
  return function(n) {
    e.uniformMatrix3x2fv(t, !1, n);
  };
}
function mi(e, t) {
  return function(n) {
    e.uniformMatrix2x4fv(t, !1, n);
  };
}
function Ai(e, t) {
  return function(n) {
    e.uniformMatrix4x2fv(t, !1, n);
  };
}
function Si(e, t) {
  return function(n) {
    e.uniformMatrix3x4fv(t, !1, n);
  };
}
function Ti(e, t) {
  return function(n) {
    e.uniformMatrix4x3fv(t, !1, n);
  };
}
function C(e, t, n, r) {
  const i = Ce(e, t);
  return Ut(e) ? function(s) {
    let o, c;
    !s || fe(e, s) ? (o = s, c = null) : (o = s.texture, c = s.sampler), e.uniform1i(r, n), e.activeTexture(lt + n), e.bindTexture(i, o), e.bindSampler(n, c);
  } : function(s) {
    e.uniform1i(r, n), e.activeTexture(lt + n), e.bindTexture(i, s);
  };
}
function U(e, t, n, r, i) {
  const s = Ce(e, t), o = new Int32Array(i);
  for (let c = 0; c < i; ++c)
    o[c] = n + c;
  return Ut(e) ? function(c) {
    e.uniform1iv(r, o), c.forEach(function(a, u) {
      e.activeTexture(lt + o[u]);
      let h, f;
      !a || fe(e, a) ? (h = a, f = null) : (h = a.texture, f = a.sampler), e.bindSampler(n, f), e.bindTexture(s, h);
    });
  } : function(c) {
    e.uniform1iv(r, o), c.forEach(function(a, u) {
      e.activeTexture(lt + o[u]), e.bindTexture(s, a);
    });
  };
}
m[yt] = { Type: Float32Array, size: 4, setter: ei, arraySetter: ni };
m[Te] = { Type: Float32Array, size: 8, setter: ri, cols: 2 };
m[be] = { Type: Float32Array, size: 12, setter: ii, cols: 3 };
m[we] = { Type: Float32Array, size: 16, setter: si, cols: 4 };
m[Vt] = { Type: Int32Array, size: 4, setter: Ue, arraySetter: Le };
m[Ee] = { Type: Int32Array, size: 8, setter: Ve, cols: 2 };
m[ge] = { Type: Int32Array, size: 12, setter: de, cols: 3 };
m[Ie] = { Type: Int32Array, size: 16, setter: ke, cols: 4 };
m[dt] = { Type: Uint32Array, size: 4, setter: oi, arraySetter: ci };
m[Fe] = { Type: Uint32Array, size: 8, setter: ai, cols: 2 };
m[ze] = { Type: Uint32Array, size: 12, setter: ui, cols: 3 };
m[Ne] = { Type: Uint32Array, size: 16, setter: fi, cols: 4 };
m[_e] = { Type: Uint32Array, size: 4, setter: Ue, arraySetter: Le };
m[Be] = { Type: Uint32Array, size: 8, setter: Ve, cols: 2 };
m[Pe] = { Type: Uint32Array, size: 12, setter: de, cols: 3 };
m[Re] = { Type: Uint32Array, size: 16, setter: ke, cols: 4 };
m[Me] = { Type: Float32Array, size: 32, setter: hi, rows: 2, cols: 2 };
m[ve] = { Type: Float32Array, size: 48, setter: li, rows: 3, cols: 3 };
m[De] = { Type: Float32Array, size: 64, setter: xi, rows: 4, cols: 4 };
m[Vr] = { Type: Float32Array, size: 32, setter: yi, rows: 2, cols: 3 };
m[dr] = { Type: Float32Array, size: 32, setter: mi, rows: 2, cols: 4 };
m[kr] = { Type: Float32Array, size: 48, setter: pi, rows: 3, cols: 2 };
m[Or] = { Type: Float32Array, size: 48, setter: Si, rows: 3, cols: 4 };
m[$r] = { Type: Float32Array, size: 64, setter: Ai, rows: 4, cols: 2 };
m[Gr] = { Type: Float32Array, size: 64, setter: Ti, rows: 4, cols: 3 };
m[Nr] = { Type: null, size: 0, setter: C, arraySetter: U, bindPoint: pt };
m[Cr] = { Type: null, size: 0, setter: C, arraySetter: U, bindPoint: mt };
m[Ur] = { Type: null, size: 0, setter: C, arraySetter: U, bindPoint: kt };
m[Lr] = { Type: null, size: 0, setter: C, arraySetter: U, bindPoint: pt };
m[Wr] = { Type: null, size: 0, setter: C, arraySetter: U, bindPoint: At };
m[Hr] = { Type: null, size: 0, setter: C, arraySetter: U, bindPoint: At };
m[Yr] = { Type: null, size: 0, setter: C, arraySetter: U, bindPoint: mt };
m[qr] = { Type: null, size: 0, setter: C, arraySetter: U, bindPoint: pt };
m[jr] = { Type: null, size: 0, setter: C, arraySetter: U, bindPoint: kt };
m[Xr] = { Type: null, size: 0, setter: C, arraySetter: U, bindPoint: mt };
m[Kr] = { Type: null, size: 0, setter: C, arraySetter: U, bindPoint: At };
m[Zr] = { Type: null, size: 0, setter: C, arraySetter: U, bindPoint: pt };
m[Jr] = { Type: null, size: 0, setter: C, arraySetter: U, bindPoint: kt };
m[Qr] = { Type: null, size: 0, setter: C, arraySetter: U, bindPoint: mt };
m[ti] = { Type: null, size: 0, setter: C, arraySetter: U, bindPoint: At };
function St(e, t) {
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
      e.bindBuffer(xt, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribPointer(
        t,
        n.numComponents || n.size,
        n.type || yt,
        n.normalize || !1,
        n.stride || 0,
        n.offset || 0
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t, n.divisor || 0);
  };
}
function K(e, t) {
  return function(n) {
    if (n.value)
      if (e.disableVertexAttribArray(t), n.value.length === 4)
        e.vertexAttrib4iv(t, n.value);
      else
        throw new Error("The length of an integer constant value must be 4!");
    else
      e.bindBuffer(xt, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribIPointer(
        t,
        n.numComponents || n.size,
        n.type || Vt,
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
      e.bindBuffer(xt, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribIPointer(
        t,
        n.numComponents || n.size,
        n.type || dt,
        n.stride || 0,
        n.offset || 0
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t, n.divisor || 0);
  };
}
function Ot(e, t, n) {
  const r = n.size, i = n.count;
  return function(s) {
    e.bindBuffer(xt, s.buffer);
    const o = s.size || s.numComponents || r, c = o / i, a = s.type || yt, h = m[a].size * o, f = s.normalize || !1, l = s.offset || 0, y = h / i;
    for (let p = 0; p < i; ++p)
      e.enableVertexAttribArray(t + p), e.vertexAttribPointer(
        t + p,
        c,
        a,
        f,
        h,
        l + y * p
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t + p, s.divisor || 0);
  };
}
const B = {};
B[yt] = { size: 4, setter: St };
B[Te] = { size: 8, setter: St };
B[be] = { size: 12, setter: St };
B[we] = { size: 16, setter: St };
B[Vt] = { size: 4, setter: K };
B[Ee] = { size: 8, setter: K };
B[ge] = { size: 12, setter: K };
B[Ie] = { size: 16, setter: K };
B[dt] = { size: 4, setter: Tt };
B[Fe] = { size: 8, setter: Tt };
B[ze] = { size: 12, setter: Tt };
B[Ne] = { size: 16, setter: Tt };
B[_e] = { size: 4, setter: K };
B[Be] = { size: 8, setter: K };
B[Pe] = { size: 12, setter: K };
B[Re] = { size: 16, setter: K };
B[Me] = { size: 4, setter: Ot, count: 2 };
B[ve] = { size: 9, setter: Ot, count: 3 };
B[De] = { size: 16, setter: Ot, count: 4 };
const bi = /ERROR:\s*\d+:(\d+)/gi;
function wi(e, t = "", n = 0) {
  const r = [...t.matchAll(bi)], i = new Map(r.map((s, o) => {
    const c = parseInt(s[1]), a = r[o + 1], u = a ? a.index : t.length, h = t.substring(s.index, u);
    return [c - 1, h];
  }));
  return e.split(`
`).map((s, o) => {
    const c = i.get(o);
    return `${o + 1 + n}: ${s}${c ? `

^^^ ${c}` : ""}`;
  }).join(`
`);
}
const Xt = /^[ \t]*\n/;
function Oe(e) {
  let t = 0;
  return Xt.test(e) && (t = 1, e = e.replace(Xt, "")), { lineOffset: t, shaderSource: e };
}
function Ei(e, t) {
  return e.errorCallback(t), e.callback && setTimeout(() => {
    e.callback(`${t}
${e.errors.join(`
`)}`);
  }), null;
}
function gi(e, t, n, r) {
  if (r = r || Lt, !e.getShaderParameter(n, Er)) {
    const s = e.getShaderInfoLog(n), { lineOffset: o, shaderSource: c } = Oe(e.getShaderSource(n)), a = `${wi(c, s, o)}
Error compiling ${br(e, t)}: ${s}`;
    return r(a), a;
  }
  return "";
}
function $t(e, t, n) {
  let r, i, s;
  if (typeof t == "function" && (n = t, t = void 0), typeof e == "function")
    n = e, e = void 0;
  else if (e && !Array.isArray(e)) {
    const u = e;
    n = u.errorCallback, e = u.attribLocations, r = u.transformFeedbackVaryings, i = u.transformFeedbackMode, s = u.callback;
  }
  const o = n || Lt, c = [], a = {
    errorCallback(u, ...h) {
      c.push(u), o(u, ...h);
    },
    transformFeedbackVaryings: r,
    transformFeedbackMode: i,
    callback: s,
    errors: c
  };
  {
    let u = {};
    Array.isArray(e) ? e.forEach(function(h, f) {
      u[h] = t ? t[f] : f;
    }) : u = e || {}, a.attribLocations = u;
  }
  return a;
}
const Ii = [
  "VERTEX_SHADER",
  "FRAGMENT_SHADER"
];
function _i(e, t) {
  if (t.indexOf("frag") >= 0)
    return Ir;
  if (t.indexOf("vert") >= 0)
    return _r;
}
function Bi(e, t, n) {
  const r = e.getAttachedShaders(t);
  for (const i of r)
    n.has(i) && e.deleteShader(i);
  e.deleteProgram(t);
}
const Pi = (e = 0) => new Promise((t) => setTimeout(t, e));
function Ri(e, t, n) {
  const r = e.createProgram(), {
    attribLocations: i,
    transformFeedbackVaryings: s,
    transformFeedbackMode: o
  } = $t(n);
  for (let c = 0; c < t.length; ++c) {
    let a = t[c];
    if (typeof a == "string") {
      const u = Ae(a), h = u ? u.text : a;
      let f = e[Ii[c]];
      u && u.type && (f = _i(e, u.type) || f), a = e.createShader(f), e.shaderSource(a, Oe(h).shaderSource), e.compileShader(a), e.attachShader(r, a);
    }
  }
  Object.entries(i).forEach(([c, a]) => e.bindAttribLocation(r, a, c));
  {
    let c = s;
    c && (c.attribs && (c = c.attribs), Array.isArray(c) || (c = Object.keys(c)), e.transformFeedbackVaryings(r, c, o || Br));
  }
  return e.linkProgram(r), r;
}
function Mi(e, t, n, r, i) {
  const s = $t(n, r, i), o = new Set(t), c = Ri(e, t, s);
  function a(u, h) {
    const f = Di(u, h, s.errorCallback);
    return f && Bi(u, h, o), f;
  }
  if (s.callback) {
    vi(e, c).then(() => {
      const u = a(e, c);
      s.callback(u, u ? void 0 : c);
    });
    return;
  }
  return a(e, c) ? void 0 : c;
}
async function vi(e, t) {
  const n = e.getExtension("KHR_parallel_shader_compile"), r = n ? (s, o) => s.getProgramParameter(o, n.COMPLETION_STATUS_KHR) : () => !0;
  let i = 0;
  do
    await Pi(i), i = 1e3 / 60;
  while (!r(e, t));
}
function Di(e, t, n) {
  if (n = n || Lt, !e.getProgramParameter(t, gr)) {
    const i = e.getProgramInfoLog(t);
    n(`Error in program linking: ${i}`);
    const o = e.getAttachedShaders(t).map((c) => gi(e, e.getShaderParameter(c, e.SHADER_TYPE), c, n));
    return `${i}
${o.filter((c) => c).join(`
`)}`;
  }
}
function Fi(e, t, n, r, i) {
  return Mi(e, t, n, r, i);
}
function $e(e) {
  const t = e.name;
  return t.startsWith("gl_") || t.startsWith("webgl_");
}
const zi = /(\.|\[|]|\w+)/g, Ni = (e) => e >= "0" && e <= "9";
function Ci(e, t, n, r) {
  const i = e.split(zi).filter((c) => c !== "");
  let s = 0, o = "";
  for (; ; ) {
    const c = i[s++];
    o += c;
    const a = Ni(c[0]), u = a ? parseInt(c) : c;
    if (a && (o += i[s++]), s === i.length) {
      n[u] = t;
      break;
    } else {
      const f = i[s++], l = f === "[", y = n[u] || (l ? [] : {});
      n[u] = y, n = y, r[o] = r[o] || function(p) {
        return function(T) {
          Ge(p, T);
        };
      }(y), o += f;
    }
  }
}
function Ui(e, t) {
  let n = 0;
  function r(c, a, u) {
    const h = a.name.endsWith("[0]"), f = a.type, l = m[f];
    if (!l)
      throw new Error(`unknown type: 0x${f.toString(16)}`);
    let y;
    if (l.bindPoint) {
      const p = n;
      n += a.size, h ? y = l.arraySetter(e, f, p, u, a.size) : y = l.setter(e, f, p, u, a.size);
    } else
      l.arraySetter && h ? y = l.arraySetter(e, u) : y = l.setter(e, u);
    return y.location = u, y;
  }
  const i = {}, s = {}, o = e.getProgramParameter(t, Se);
  for (let c = 0; c < o; ++c) {
    const a = e.getActiveUniform(t, c);
    if ($e(a))
      continue;
    let u = a.name;
    u.endsWith("[0]") && (u = u.substr(0, u.length - 3));
    const h = e.getUniformLocation(t, a.name);
    if (h) {
      const f = r(t, a, h);
      i[u] = f, Ci(u, f, s, i);
    }
  }
  return i;
}
function Li(e, t) {
  const n = {}, r = e.getProgramParameter(t, Rr);
  for (let i = 0; i < r; ++i) {
    const s = e.getTransformFeedbackVarying(t, i);
    n[s.name] = {
      index: i,
      type: s.type,
      size: s.size
    };
  }
  return n;
}
function Vi(e, t) {
  const n = e.getProgramParameter(t, Se), r = [], i = [];
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
    const a = c[0], u = c[1];
    e.getActiveUniforms(t, i, e[a]).forEach(function(h, f) {
      r[f][u] = h;
    });
  });
  const s = {}, o = e.getProgramParameter(t, Mr);
  for (let c = 0; c < o; ++c) {
    const a = e.getActiveUniformBlockName(t, c), u = {
      index: e.getUniformBlockIndex(t, a),
      usedByVertexShader: e.getActiveUniformBlockParameter(t, c, vr),
      usedByFragmentShader: e.getActiveUniformBlockParameter(t, c, Dr),
      size: e.getActiveUniformBlockParameter(t, c, Fr),
      uniformIndices: e.getActiveUniformBlockParameter(t, c, zr)
    };
    u.used = u.usedByVertexShader || u.usedByFragmentShader, s[a] = u;
  }
  return {
    blockSpecs: s,
    uniformData: r
  };
}
function Ge(e, t) {
  for (const n in t) {
    const r = e[n];
    typeof r == "function" ? r(t[n]) : Ge(e[n], t[n]);
  }
}
function bt(e, ...t) {
  const n = e.uniformSetters || e, r = t.length;
  for (let i = 0; i < r; ++i) {
    const s = t[i];
    if (Array.isArray(s)) {
      const o = s.length;
      for (let c = 0; c < o; ++c)
        bt(n, s[c]);
    } else
      for (const o in s) {
        const c = n[o];
        c && c(s[o]);
      }
  }
}
function di(e, t) {
  const n = {}, r = e.getProgramParameter(t, Pr);
  for (let i = 0; i < r; ++i) {
    const s = e.getActiveAttrib(t, i);
    if ($e(s))
      continue;
    const o = e.getAttribLocation(t, s.name), c = B[s.type], a = c.setter(e, o, c);
    a.location = o, n[s.name] = a;
  }
  return n;
}
function ki(e, t) {
  for (const n in t) {
    const r = e[n];
    r && r(t[n]);
  }
}
function We(e, t, n) {
  n.vertexArrayObject ? e.bindVertexArray(n.vertexArrayObject) : (ki(t.attribSetters || t, n.attribs), n.indices && e.bindBuffer(wr, n.indices));
}
function Kt(e, t) {
  const n = Ui(e, t), r = di(e, t), i = {
    program: t,
    uniformSetters: n,
    attribSetters: r
  };
  return Ut(e) && (i.uniformBlockSpec = Vi(e, t), i.transformFeedbackInfo = Li(e, t)), i;
}
const Oi = /\s|{|}|;/;
function $i(e, t, n, r, i) {
  const s = $t(n, r, i), o = [];
  if (t = t.map(function(u) {
    if (!Oi.test(u)) {
      const h = Ae(u);
      if (h)
        u = h.text;
      else {
        const f = `no element with id: ${u}`;
        s.errorCallback(f), o.push(f);
      }
    }
    return u;
  }), o.length)
    return Ei(s, "");
  const c = s.callback;
  c && (s.callback = (u, h) => {
    c(u, u ? void 0 : Kt(e, h));
  });
  const a = Fi(e, t, s);
  return a ? Kt(e, a) : null;
}
const Gi = 4, Zt = 5123;
function He(e, t, n, r, i, s) {
  n = n === void 0 ? Gi : n;
  const o = t.indices, c = t.elementType, a = r === void 0 ? t.numElements : r;
  i = i === void 0 ? 0 : i, c || o ? s !== void 0 ? e.drawElementsInstanced(n, a, c === void 0 ? Zt : t.elementType, i, s) : e.drawElements(n, a, c === void 0 ? Zt : t.elementType, i) : s !== void 0 ? e.drawArraysInstanced(n, i, a, s) : e.drawArrays(n, i, a);
}
function Wi(e, t) {
  t = t || 1, t = Math.max(0, t);
  const n = e.clientWidth * t | 0, r = e.clientHeight * t | 0;
  return e.width !== n || e.height !== r ? (e.width = n, e.height = r, !0) : !1;
}
const Jt = {
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
function Xi(e, t) {
  return new x(e, t);
}
class x {
  x;
  y;
  constructor(t, n) {
    this.x = t, this.y = n;
  }
  static zero = () => new x(0, 0);
  static up = () => new x(0, -1);
  static down = () => new x(0, 1);
  static left = () => new x(-1, 0);
  static right = () => new x(1, 0);
  add(t, n) {
    return t instanceof x ? (this.x += t.x, this.y += t.y) : n ? (this.x += t, this.y += n) : (this.x += t, this.y += t), this;
  }
  static add(t, n) {
    return new x(t.x + n.x, t.y + n.y);
  }
  mult(t, n) {
    return t instanceof x ? (this.x *= t.x, this.y *= t.y) : n ? (this.x *= t, this.y *= n) : (this.x *= t, this.y *= t), this;
  }
  static mult(t, n) {
    return n instanceof x ? new x(t.x * n.x, t.y * n.y) : new x(t.x * n, t.y * n);
  }
  sub(t, n) {
    return t instanceof x ? (this.x -= t.x, this.y -= t.y) : n ? (this.x -= t, this.y -= n) : (this.x -= t, this.y -= t), this;
  }
  static sub(t, n) {
    return new x(t.x - n.x, t.y - n.y);
  }
  div(t, n) {
    return t instanceof x ? (this.x /= t.x, this.y /= t.y) : n ? (this.x /= t, this.y /= n) : (this.x /= t, this.y /= t), this;
  }
  static div(t, n) {
    return new x(t.x / n.x, t.y / n.y);
  }
  set(t, n) {
    return t instanceof x ? (this.x = t.x, this.y = t.y) : n ? (this.x = t, this.y = n) : (this.x = t, this.y = t), this;
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
    let n = Math.cos(t), r = Math.sin(t), i = n * this.x - r * this.y, s = n * this.y + r * this.x;
    return this.x = i, this.y = s, this;
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
    return new x(this.x, this.y);
  }
}
class E {
  pos;
  color;
  constructor(t, n) {
    this.pos = t, this.color = n;
  }
}
function X(e, t, n, r, i) {
  return r + (e - t) * ((i - r) / (n - t));
}
function Q(e, t, n) {
  const r = x.sub(t, e).normalize().mult(n / 2).rotate(Math.PI / 2).add(e), i = x.sub(t, e).normalize().mult(n / 2).rotate(-Math.PI / 2).add(e);
  return [r, i];
}
function _t(e, t, n) {
  return Q(e.pos, t.pos, n).map((r) => new E(r, e.color));
}
function Qt(e, t) {
  const n = e.y - t.y, r = t.x - e.x, i = e.x * t.y - t.x * e.y;
  return { a: n, b: r, c: i };
}
function at(e, t) {
  const n = -e.b, r = e.a, i = -n * t.x - r * t.y;
  return { a: n, b: r, c: i };
}
function ut(e, t) {
  const n = e.a, r = e.b, i = e.c + t * Math.sqrt(n * n + r * r);
  return { a: n, b: r, c: i };
}
function ft(e, t) {
  const n = (e.b * t.c - t.b * e.c) / (e.a * t.b - t.a * e.b), r = (t.a * e.c - e.a * t.c) / (e.a * t.b - t.a * e.b);
  return new x(n, r);
}
function te(e, t, n, r, i = 60) {
  const s = e.pos, o = t.pos, c = n.pos, a = (180 - i) * (Math.PI / 180), u = x.angleBetween(x.sub(t.pos, e.pos), x.sub(n.pos, t.pos));
  if (Math.abs(u) <= 1e-3)
    return {
      vertices: _t(t, n, r),
      indices: [0, 1, 2, 1, 2, 3]
    };
  const h = Qt(e.pos, t.pos), f = Qt(t.pos, n.pos), l = ut(h, -r / 2), y = ut(h, r / 2), p = ut(f, -r / 2), T = ut(f, r / 2);
  let S = ft(l, p), b = ft(y, T);
  if (u < a && u > -a)
    return { vertices: [new E(S, t.color), new E(b, t.color)], indices: [0, 1, 2, 1, 2, 3] };
  if (u <= -a) {
    let [A, P] = Q(o, s, r), [R, M] = Q(o, c, r);
    const _ = x.sub(o, b).magSq(), g = x.sub(o, s).magSq(), I = x.sub(o, c).magSq();
    if (_ > g || _ > I) {
      const v = I > g ? at(h, s) : at(f, c);
      b = ft(v, I > g ? T : y);
    }
    return {
      vertices: [new E(P, t.color), new E(R, t.color), new E(b, t.color)],
      indices: [0, 1, 2, 1, 2, 4, 2, 3, 4],
      right: !0
    };
  } else {
    const [A, P] = Q(t.pos, e.pos, r), [R, M] = Q(t.pos, n.pos, r), _ = x.sub(o, S).magSq(), g = x.sub(o, s).magSq(), I = x.sub(o, c).magSq();
    if (_ > g || _ > I) {
      const v = I > g ? at(h, s) : at(f, c);
      S = ft(v, I > g ? p : l);
    }
    return {
      vertices: [new E(A, t.color), new E(S, t.color), new E(M, t.color)],
      indices: [0, 1, 2, 0, 2, 3, 2, 3, 4],
      right: !1
    };
  }
}
class Hi {
  zoom = 1;
  pos = new x(0, 0);
  displaySize = new x(0, 0);
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
    const t = this.displaySize.y / this.zoom / 2;
    this.matrix = J.translate(
      J.ortho(-this.aspect * t, this.aspect * t, 1 * t, -1 * t, -1, 1),
      hn.create(-this.pos.x, -this.pos.y)
    );
  }
  /**
   * Converts a vector (position) in screen space into world space
   * @param vector
   * @returns The Vector converted to World space
   */
  screenSpaceToWorldSpace(t) {
    const n = window.innerHeight / this.zoom / 2, r = X(t.x, 0, window.innerWidth, -this.aspect * n, this.aspect * n) + this.pos.x, i = X(t.y, 0, window.innerHeight, -1 * n, 1 * n) + this.pos.y;
    return new x(r, i);
  }
  /**
   * Converts a vector (position) in world space into screen space
   * @param vector
   * @returns The Vector converted to Screen space
   */
  worldSpaceToScreenSpace(t) {
    const n = window.innerHeight / this.zoom / 2, r = X(t.x, -this.aspect * n + this.pos.x, this.aspect * n + this.pos.x, 0, window.innerWidth), i = X(t.y, -1 * n + this.pos.y, 1 * n + this.pos.y, 0, window.innerHeight);
    return new x(r, i);
  }
  // /**
  //  * Converts a distance in world space into a distance in screen space (pixels)
  //  * @param distance The distance in world space
  //  * @returns The distance in screen space (pixels)
  //  */
  // public worldSpaceToScreenSpaceDistance(distance: number) {
  //     return distance * this.zoom;
  // }
  /**
   * Returns the camera matrix
   * @returns The camera matrix
   */
  getMatrix() {
    return this.matrix;
  }
}
class Bt {
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
    this.bufferInfo = Tr(t, {
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
    jt(t, this.bufferInfo.attribs.position, this.positions), jt(t, this.bufferInfo.attribs.color, this.colors), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.bufferInfo.indices), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.DYNAMIC_DRAW);
  }
  fill() {
    this.positions.fill(0, this.currentVertices * 2), this.colors.fill(0, this.currentVertices * 4), this.indices.fill(0, this.currentIndices);
  }
  resetCount() {
    this.currentVertices = 0, this.currentIndices = 0;
  }
}
class wt {
  translation;
  rotation;
  scaling;
  transformed = !1;
  constructor() {
    this.translation = new x(0, 0), this.rotation = 0, this.scaling = new x(1, 1);
  }
  copy() {
    const t = new wt();
    return t.translation = this.translation.copy(), t.rotation = this.rotation, t.scaling = this.scaling.copy(), t.transformed = this.transformed, t;
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
    this.translation = new x(0, 0), this.rotation = 0, this.scaling = new x(1, 1), this.transformed = !1;
  }
  transformVertices(t) {
    return this.transformed ? t.map((n) => new E(n.pos.copy().rotate(this.rotation).mult(this.scaling).add(this.translation), n.color)) : t;
  }
  getMatrix() {
    return J.translate(J.scale(J.rotateZ(J.identity(), this.rotation), [this.scaling.x, this.scaling.y, 1]), [
      this.translation.x,
      this.translation.y,
      0
    ]);
  }
}
class Ye {
  gl;
  id = -1;
  transform;
  constructor(t) {
    this.gl = t, this.transform = new wt();
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
class Yi extends Ye {
  buffers = [];
  bufferSize;
  currentBufferIndex = -1;
  constructor(t, n) {
    super(t), this.bufferSize = n.bufferSize, this.addBuffer();
  }
  addVerticesAndIndices(t, n) {
    (this.buffers[this.currentBufferIndex].currentIndices + n.length >= this.buffers[this.currentBufferIndex].indexCapacity || this.buffers[this.currentBufferIndex].currentVertices + t.length >= this.buffers[this.currentBufferIndex].vertexCapacity) && this.changeBuffer(), this.addIndices(n), this.addVertices(t);
  }
  update() {
    this.buffers[this.currentBufferIndex].fill(), this.buffers[this.currentBufferIndex].updateBufferData(this.gl);
  }
  render(t) {
    bt(t, {
      modelMatrix: this.transform.getMatrix()
    });
    for (let n = 0; n <= this.currentBufferIndex; n++)
      We(this.gl, t, this.buffers[n].bufferInfo), He(this.gl, this.buffers[n].bufferInfo, this.gl.TRIANGLES, this.buffers[n].currentIndices);
  }
  reset() {
    this.currentBufferIndex = 0;
    for (const t of this.buffers)
      t.resetCount();
  }
  addBuffer() {
    this.currentBufferIndex++, this.buffers.push(new Bt(this.gl, { numVertices: this.bufferSize }));
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
function Ki(e, t, n) {
  return new z(e, t, n);
}
function qi(e, t, n, r = 255) {
  return new z(e, t, n, r);
}
class z {
  r;
  g;
  b;
  a;
  static WHITE = new z(255, 255, 255);
  static BLACK = new z(0, 0, 0);
  static RED = new z(255, 0, 0);
  static GREEN = new z(0, 255, 0);
  static BLUE = new z(0, 0, 255);
  static YELLOW = new z(255, 255, 0);
  static MAGENTA = new z(255, 0, 255);
  static CYAN = new z(0, 255, 255);
  static TRANSPARENT = new z(0, 0, 0, 0);
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
    const r = parseInt(t.slice(1), 16), i = r >> 16 & 255, s = r >> 8 & 255, o = r & 255;
    return qi(i, s, o, n);
  }
  /**
   * Interpolates between two colors
   * @param color1 the first color
   * @param color2 the second color
   * @param t amount to interpolate by (a number between 0 and 1)
   * @returns The interpolated color
   */
  static interpolate(t, n, r) {
    return new z(
      X(r, 0, 1, t.r, n.r),
      X(r, 0, 1, t.g, n.g),
      X(r, 0, 1, t.b, n.b),
      X(r, 0, 1, t.a, n.a)
    );
  }
}
var Pt = /* @__PURE__ */ ((e) => (e[e.Fill = 0] = "Fill", e[e.Stroke = 1] = "Stroke", e))(Pt || {});
class ji {
  canvas;
  ctx;
  renderer;
  currentFont = "Arial";
  currentFontSize = 32;
  constructor(t, n) {
    this.renderer = t, this.canvas = n.canvas, this.ctx = this.canvas.getContext("2d");
  }
  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
  setFontFace(t) {
    this.currentFont = t, this.ctx.font = `${this.currentFontSize}px ${t}`;
  }
  setFontSize(t) {
    this.currentFontSize = t, this.ctx.font = `${t}px ${this.currentFont}`;
  }
  setLineWidth(t) {
    this.ctx.lineWidth = t;
  }
  setTextAlign(t) {
    this.ctx.textAlign = t;
  }
  setLetterSpacing(t) {
    this.ctx.letterSpacing = t;
  }
  setWordSpacing(t) {
    this.ctx.wordSpacing = t;
  }
  renderText(t, n, r, i = 0) {
    const s = this.renderer.camera.worldSpaceToScreenSpace(n).add(this.renderer.transform.translation);
    this.ctx.save(), this.ctx.translate(s.x, s.y), this.ctx.rotate(this.renderer.transform.rotation), this.ctx.scale(this.renderer.transform.scaling.x * this.renderer.camera.zoom, this.renderer.transform.scaling.y * this.renderer.camera.zoom), i === 0 ? (this.ctx.fillStyle = `rgba(${r.r}, ${r.g}, ${r.b}, ${r.a})`, this.ctx.fillText(t, 0, 0)) : (this.ctx.strokeStyle = `rgba(${r.r}, ${r.g}, ${r.b}, ${r.a})`, this.ctx.strokeText(t, 0, 0)), this.ctx.fillStyle = "red", this.ctx.restore();
  }
  getTextMetrics(t) {
    const n = this.ctx.measureText(t);
    return console.log(n.actualBoundingBoxDescent), {
      width: n.actualBoundingBoxRight + n.actualBoundingBoxLeft,
      height: n.actualBoundingBoxAscent + n.actualBoundingBoxDescent,
      deltaY: n.actualBoundingBoxDescent
    };
  }
}
class ee {
  static canvas;
  static ctx;
  static camera;
  static enabled = !1;
  static init(t) {
    this.canvas = t.canvas, this.ctx = this.canvas.getContext("2d"), this.camera = t.camera, this.enabled = !0;
  }
  static clear() {
    this.enabled && this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
  static debugLine(t, n = "red") {
    if (!this.enabled)
      return;
    const r = 0, i = (-t.c - t.a * r) / t.b, s = this.ctx.canvas.width, o = (-t.c - t.a * s) / t.b, c = this.camera.worldSpaceToScreenSpace(new x(r, i)), a = this.camera.worldSpaceToScreenSpace(new x(s, o));
    this.ctx.strokeStyle = n, this.ctx.beginPath(), this.ctx.moveTo(c.x, c.y), this.ctx.lineTo(a.x, a.y), this.ctx.stroke();
  }
  static debugPoint(t, n = "red") {
    if (!this.enabled)
      return;
    this.ctx.fillStyle = n;
    const r = this.camera.worldSpaceToScreenSpace(t);
    this.ctx.beginPath(), this.ctx.arc(r.x, r.y, 5, 0, Math.PI * 2), this.ctx.fill();
  }
}
class Zi {
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
  vertexColor = new z(255, 255, 255, 255);
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
      r.width = window.innerWidth, r.height = window.innerHeight, this.canvas.parentElement.appendChild(r), r.style.position = "absolute", r.style.top = "0", r.style.left = "0", r.style.pointerEvents = "none", this.textRenderer = new ji(this, { canvas: r });
    } else
      this.textRenderer = null;
    if (t.camera ? (this.camera = t.camera, this.camera.setDisplaySize(new x(this.canvas.width, this.canvas.height))) : this.camera = new Hi(new x(this.canvas.width, this.canvas.height)), this.shaderProgramInfo = $i(this.gl, [Jt.vertexShader, Jt.fragmentShader]), this.gl.enable(this.gl.BLEND), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE), Wi(this.gl.canvas), this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.setBuffer(new Yi(this.gl, { bufferSize: 1e3 })), this.transform = new wt(), t.enableDebugRenderer) {
      const r = document.createElement("canvas");
      r.width = window.innerWidth, r.height = window.innerHeight, this.canvas.parentElement.appendChild(r), r.style.position = "absolute", r.style.top = "0", r.style.left = "0", r.style.pointerEvents = "none", ee.init({ canvas: r, camera: this.camera });
    }
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
   * Enables or disables blending
   * @param enable Whether to enable or disable blending
   */
  enableBlending(t) {
    t ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND);
  }
  /**
   * Set Blend Mode
   * @param buffer The buffer to draw to
   */
  setBlendMode(t) {
    switch (t) {
      case 0:
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
        break;
      case 1:
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE);
        break;
    }
  }
  /**
   * Clears the screen with the specified color
   * @param color The clear color
   */
  clear(t = new z(0, 0, 0, 255)) {
    this.gl.clearColor(t.r / 255, t.g / 255, t.b / 255, t.a / 255), this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT), this.textRenderer && this.textRenderer.clear(), ee.clear();
  }
  buildPath(t, n, r = !1, i) {
    const s = [], o = [], c = t[0], a = t[1];
    t.length === 2 && (r = !1);
    let u = !1, h = !1;
    if (!r)
      s.push(..._t(c, a, n));
    else {
      const f = te(t[t.length - 1], c, a, n, i);
      s.push(...f.vertices), s.length === 3 && (o.push(0, 1, 2), u = !0, h = f.right);
    }
    for (let f = 0; f < t.length - (r ? 1 : 2); f++) {
      const l = te(t[f], t[f + 1], t[(f + 2) % t.length], n, i);
      o.push(...l.indices.map((y) => y + s.length - 2)), s.push(...l.vertices);
    }
    if (!r)
      o.push(...[0, 1, 2, 1, 2, 3].map((f) => f + s.length - 2)), s.push(..._t(t[t.length - 1], t[t.length - 2], n).reverse());
    else {
      const f = s.length - 2;
      u ? h ? o.push(f, f + 1, 2, f, 0, 2) : o.push(f, f + 1, 0, f, 0, 1) : o.push(f, f + 1, 1, f, 0, 1);
    }
    this.buffers[this.currentBufferIndex].addVerticesAndIndices(this.transform.transformVertices(s), o);
  }
  buildDashedPath(t, n, r = !1, i = 10, s) {
    let o = null;
    const c = r ? t.length + 1 : t.length;
    for (let a = 0; a < c; a++) {
      const u = t[a % t.length], h = t[(a + 1) % t.length], f = u.pos.dist(h.pos), l = Math.floor(f / i), y = f / l;
      let p = t[a];
      const T = h.pos.copy().sub(u.pos);
      for (let S = 1; S < l; S++) {
        const b = u.pos.copy().add(T.copy().setMag(y * S));
        let A = new E(b, z.interpolate(u.color, h.color, S / l));
        if (S === 1 && o && (this.buildPath([o, u, A], n, r, s), a === c - 1))
          break;
        S % 2 === 0 && this.buildPath([p, A], n, r, s), p = A;
      }
      o = p;
    }
  }
  /**
   * Sets the default vertex color
   * @param color The color to set
   */
  setColor(t) {
    this.vertexColor = t;
  }
  /**
   * Starts a new path by clearing everything in the current path. Call this before using any drawing methods.
   */
  beginPath() {
    this.currentPath = [];
  }
  vertex(t, n) {
    t instanceof E ? this.currentPath.push(t) : n ? this.currentPath.push(new E(t, n)) : this.currentPath.push(new E(t, this.vertexColor));
  }
  vertices(t, n) {
    t[0] instanceof E ? this.currentPath = [...this.currentPath, ...t] : n ? this.currentPath = [...this.currentPath, ...t.map((r) => new E(r, n))] : this.currentPath = [...this.currentPath, ...t.map((r) => new E(r, this.vertexColor))];
  }
  /**
   * Splits the current path. Call this before using any drawing methods to start a new path without clearing the current one.
   */
  splitPath() {
    this.currentPath.push(null);
  }
  /**
   * Draws a line.
   * @param startPos Starting position of the line
   * @param endPos Ending position of the line
   * @param width Width of the line
   */
  line(t, n) {
    const r = new E(t, this.vertexColor), i = new E(n, this.vertexColor);
    this.currentPath.push(r, i, null);
  }
  /**
   * Draws an arc (to the current path). For a circle, set `startAngle` to `0` and `endAngle` to `Math.PI * 2`
   * @param pos The center of the arc
   * @param radius The radius of the arc
   * @param startAngle The starting angle of the arc
   * @param endAngle The ending angle of the arc
   * @param detail The detail of the arc. Higher values = smoother arc. Defaults to `1`
   */
  arc(t, n, r, i, s = 1) {
    const o = 30 * s, c = (i - r) / o, a = [];
    let u = 0;
    for (let h = 0; h <= o; h++)
      u = r + c * h, a.push(new E(new x(t.x + n * Math.cos(u), t.y + n * Math.sin(u)), this.vertexColor));
    i - u > 0.01 && a.push(new E(new x(t.x + n * Math.cos(i), t.y + n * Math.sin(i)), this.vertexColor)), this.currentPath.push(...a);
  }
  /**
   * Draws a rectangle (to the current path).
   * Note that it does not close the path. So if you want to stroke() it, use the `closed` option in the `stroke()` method.
   * @param pos The position of the top left corner of the rectangle
   * @param size The size (width and height) of the rectangle
   */
  rect(t, n) {
    const r = [t, new x(t.x + n.x, t.y), new x(t.x + n.x, t.y + n.y), new x(t.x, t.y + n.y)];
    this.currentPath.push(...r.map((i) => new E(i, this.vertexColor)));
  }
  /**
   * Strokes (outlines) everything in the current path since the last `beginPath()` call with the specified width and options.
   * @param width The stroke width
   * @param options Options for the stroke
   */
  stroke(t, { closed: n = !1, dashed: r = !1, dashLength: i = 10, miterLimit: s = 60 } = {}) {
    let o = this.currentPath.findIndex((c) => c === null);
    if (o === -1) {
      r ? this.buildDashedPath(this.currentPath, t, n, i, s) : this.buildPath(this.currentPath, t, n, s);
      return;
    }
    for (; o !== -1; ) {
      if (r ? this.buildDashedPath(this.currentPath.slice(0, o), t, n, i, s) : this.buildPath(this.currentPath.slice(0, o), t, n, s), this.currentPath = this.currentPath.slice(o + 1), this.currentPath.length === 0)
        return;
      o = this.currentPath.findIndex((c) => c === null), o = o === -1 ? this.currentPath.length : o;
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
   * @param fontFace The font to set
   * @example renderer.setFont("30px Arial");
   */
  setFontFace(t) {
    if (!this.textRenderer)
      throw new Error("Text renderer not initialized!");
    this.textRenderer.setFontFace(t);
  }
  /**
   * Sets the font size of the text renderer
   * @param fontSize The font size to set
   * @example renderer.setFontSize(20);
   */
  setFontSize(t) {
    this.textRenderer && this.textRenderer.setFontSize(t);
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
   * Sets the text align of the text renderer
   * @param align The text align to set
   * @example renderer.setTextAlign("center");
   */
  setLetterSpacing(t) {
    if (!this.textRenderer)
      throw new Error("Text renderer not initialized!");
    this.textRenderer.setLetterSpacing(t);
  }
  /**
   * Sets the text align of the text renderer
   * @param align The text align to set
   * @example renderer.setTextAlign("center");
   */
  setWordSpacing(t) {
    if (!this.textRenderer)
      throw new Error("Text renderer not initialized!");
    this.textRenderer.setWordSpacing(t);
  }
  /**
   *
   * @param text The text to render
   * @param pos The position to render the text at
   * @param maxWidth Max width of the text
   */
  fillText(t, n) {
    if (!this.textRenderer)
      throw new Error("Text renderer not initialized!");
    this.textRenderer.renderText(t, n, this.vertexColor, Pt.Fill);
  }
  /**
   *
   * @param text The text to render
   * @param pos The position to render the text at
   * @param maxWidth Max width of the text
   */
  strokeText(t, n, r = 1) {
    if (!this.textRenderer)
      throw new Error("Text renderer not initialized!");
    this.textRenderer.setLineWidth(r), this.textRenderer.renderText(t, n, this.vertexColor, Pt.Stroke);
  }
  /**
   * Returns the width of the specified text using the current font and text renderer
   * @param text The text to measure
   * @returns The width of the text
   */
  getTextMetrics(t) {
    if (!this.textRenderer)
      throw new Error("Text renderer not initialized!");
    return this.textRenderer.getTextMetrics(t);
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
    this.gl.useProgram(this.shaderProgramInfo.program), bt(this.shaderProgramInfo, t);
    for (const n of this.buffers)
      n.render(this.shaderProgramInfo);
    this.buffers[0].reset();
  }
  translate(t, n = 0) {
    this.transform.translate(t instanceof x ? t : new x(t, n));
  }
  /**
   * Rotates the camera by the specified angle
   * @param angle The angle to rotate the camera by
   */
  rotate(t) {
    this.transform.rotate(t);
  }
  scale(t, n) {
    this.transform.scale(t instanceof x ? t : new x(t, n || t));
  }
  /**
   * Resets all transforms
   */
  resetTransforms() {
    this.transform.resetTransforms();
  }
  /**
   * Returns the size of the canvas
   */
  getDisplaySize() {
    return new x(this.canvas.width, this.canvas.height);
  }
}
class Ji extends Ye {
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
        this.gl.deleteBuffer(this.buffer.bufferInfo.indices), this.buffer = new Bt(this.gl, {
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
      this.buffer = new Bt(this.gl, {
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
    bt(t, {
      modelMatrix: this.transform.getMatrix()
    }), We(this.gl, t, this.buffer.bufferInfo), He(this.gl, this.buffer.bufferInfo, this.gl.TRIANGLES, this.buffer.currentIndices);
  }
}
export {
  Ye as Buffer,
  Bt as BufferData,
  Hi as Camera,
  ji as CanvasTextRenderer,
  z as Color,
  ee as DebugRenderer,
  Yi as DynamicBuffer,
  Ki as RGB,
  qi as RGBA,
  Zi as Renderer,
  Ji as StaticBuffer,
  wt as Transform,
  Xi as Vec,
  x as Vector,
  E as Vertex
};
