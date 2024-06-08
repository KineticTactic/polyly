/* @license twgl.js 5.5.3 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */
let z = Float32Array;
function Ye(e) {
  const t = z;
  return z = e, t;
}
function q(e, t, n) {
  const r = new z(3);
  return e && (r[0] = e), t && (r[1] = t), n && (r[2] = n), r;
}
function qe(e, t, n) {
  return n = n || new z(3), n[0] = e[0] + t[0], n[1] = e[1] + t[1], n[2] = e[2] + t[2], n;
}
function te(e, t, n) {
  return n = n || new z(3), n[0] = e[0] - t[0], n[1] = e[1] - t[1], n[2] = e[2] - t[2], n;
}
function je(e, t, n, r) {
  return r = r || new z(3), r[0] = e[0] + n * (t[0] - e[0]), r[1] = e[1] + n * (t[1] - e[1]), r[2] = e[2] + n * (t[2] - e[2]), r;
}
function Xe(e, t, n, r) {
  return r = r || new z(3), r[0] = e[0] + n[0] * (t[0] - e[0]), r[1] = e[1] + n[1] * (t[1] - e[1]), r[2] = e[2] + n[2] * (t[2] - e[2]), r;
}
function Ke(e, t, n) {
  return n = n || new z(3), n[0] = Math.max(e[0], t[0]), n[1] = Math.max(e[1], t[1]), n[2] = Math.max(e[2], t[2]), n;
}
function Ze(e, t, n) {
  return n = n || new z(3), n[0] = Math.min(e[0], t[0]), n[1] = Math.min(e[1], t[1]), n[2] = Math.min(e[2], t[2]), n;
}
function Je(e, t, n) {
  return n = n || new z(3), n[0] = e[0] * t, n[1] = e[1] * t, n[2] = e[2] * t, n;
}
function Qe(e, t, n) {
  return n = n || new z(3), n[0] = e[0] / t, n[1] = e[1] / t, n[2] = e[2] / t, n;
}
function gt(e, t, n) {
  n = n || new z(3);
  const r = e[2] * t[0] - e[0] * t[2], i = e[0] * t[1] - e[1] * t[0];
  return n[0] = e[1] * t[2] - e[2] * t[1], n[1] = r, n[2] = i, n;
}
function tn(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function en(e) {
  return Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
}
function nn(e) {
  return e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
}
function rn(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
  return Math.sqrt(n * n + r * r + i * i);
}
function on(e, t) {
  const n = e[0] - t[0], r = e[1] - t[1], i = e[2] - t[2];
  return n * n + r * r + i * i;
}
function lt(e, t) {
  t = t || new z(3);
  const n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], r = Math.sqrt(n);
  return r > 1e-5 ? (t[0] = e[0] / r, t[1] = e[1] / r, t[2] = e[2] / r) : (t[0] = 0, t[1] = 0, t[2] = 0), t;
}
function sn(e, t) {
  return t = t || new z(3), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t;
}
function cn(e, t) {
  return t = t || new z(3), t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
}
function an(e, t, n) {
  return n = n || new z(3), n[0] = e[0] * t[0], n[1] = e[1] * t[1], n[2] = e[2] * t[2], n;
}
function un(e, t, n) {
  return n = n || new z(3), n[0] = e[0] / t[0], n[1] = e[1] / t[1], n[2] = e[2] / t[2], n;
}
var fn = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  add: qe,
  copy: cn,
  create: q,
  cross: gt,
  distance: rn,
  distanceSq: on,
  divide: un,
  divScalar: Qe,
  dot: tn,
  lerp: je,
  lerpV: Xe,
  length: en,
  lengthSq: nn,
  max: Ke,
  min: Ze,
  mulScalar: Je,
  multiply: an,
  negate: sn,
  normalize: lt,
  setDefaultType: Ye,
  subtract: te
});
let w = Float32Array;
function hn(e) {
  const t = w;
  return w = e, t;
}
function ln(e, t) {
  return t = t || new w(16), t[0] = -e[0], t[1] = -e[1], t[2] = -e[2], t[3] = -e[3], t[4] = -e[4], t[5] = -e[5], t[6] = -e[6], t[7] = -e[7], t[8] = -e[8], t[9] = -e[9], t[10] = -e[10], t[11] = -e[11], t[12] = -e[12], t[13] = -e[13], t[14] = -e[14], t[15] = -e[15], t;
}
function xn() {
  return new w(16).fill(0);
}
function ee(e, t) {
  return t = t || new w(16), t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
}
function ne(e) {
  return e = e || new w(16), e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
}
function yn(e, t) {
  if (t = t || new w(16), t === e) {
    let A;
    return A = e[1], e[1] = e[4], e[4] = A, A = e[2], e[2] = e[8], e[8] = A, A = e[3], e[3] = e[12], e[12] = A, A = e[6], e[6] = e[9], e[9] = A, A = e[7], e[7] = e[13], e[13] = A, A = e[11], e[11] = e[14], e[14] = A, t;
  }
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], o = e[0 * 4 + 3], s = e[1 * 4 + 0], c = e[1 * 4 + 1], a = e[1 * 4 + 2], u = e[1 * 4 + 3], h = e[2 * 4 + 0], f = e[2 * 4 + 1], l = e[2 * 4 + 2], y = e[2 * 4 + 3], p = e[3 * 4 + 0], S = e[3 * 4 + 1], T = e[3 * 4 + 2], b = e[3 * 4 + 3];
  return t[0] = n, t[1] = s, t[2] = h, t[3] = p, t[4] = r, t[5] = c, t[6] = f, t[7] = S, t[8] = i, t[9] = a, t[10] = l, t[11] = T, t[12] = o, t[13] = u, t[14] = y, t[15] = b, t;
}
function re(e, t) {
  t = t || new w(16);
  const n = e[0 * 4 + 0], r = e[0 * 4 + 1], i = e[0 * 4 + 2], o = e[0 * 4 + 3], s = e[1 * 4 + 0], c = e[1 * 4 + 1], a = e[1 * 4 + 2], u = e[1 * 4 + 3], h = e[2 * 4 + 0], f = e[2 * 4 + 1], l = e[2 * 4 + 2], y = e[2 * 4 + 3], p = e[3 * 4 + 0], S = e[3 * 4 + 1], T = e[3 * 4 + 2], b = e[3 * 4 + 3], A = l * b, P = T * y, M = a * b, R = T * u, _ = a * y, E = l * u, g = i * b, v = T * o, D = i * y, L = l * o, V = i * u, k = a * o, O = h * S, $ = p * f, G = s * S, d = p * c, H = s * f, nt = h * c, rt = n * S, it = p * r, ot = n * f, st = h * r, ct = n * c, at = s * r, Gt = A * c + R * f + _ * S - (P * c + M * f + E * S), dt = P * r + g * f + L * S - (A * r + v * f + D * S), Ht = M * r + v * c + V * S - (R * r + g * c + k * S), Wt = E * r + D * c + k * f - (_ * r + L * c + V * f), F = 1 / (n * Gt + s * dt + h * Ht + p * Wt);
  return t[0] = F * Gt, t[1] = F * dt, t[2] = F * Ht, t[3] = F * Wt, t[4] = F * (P * s + M * h + E * p - (A * s + R * h + _ * p)), t[5] = F * (A * n + v * h + D * p - (P * n + g * h + L * p)), t[6] = F * (R * n + g * s + k * p - (M * n + v * s + V * p)), t[7] = F * (_ * n + L * s + V * h - (E * n + D * s + k * h)), t[8] = F * (O * u + d * y + H * b - ($ * u + G * y + nt * b)), t[9] = F * ($ * o + rt * y + st * b - (O * o + it * y + ot * b)), t[10] = F * (G * o + it * u + ct * b - (d * o + rt * u + at * b)), t[11] = F * (nt * o + ot * u + at * y - (H * o + st * u + ct * y)), t[12] = F * (G * l + nt * T + $ * a - (H * T + O * a + d * l)), t[13] = F * (ot * T + O * i + it * l - (rt * l + st * T + $ * i)), t[14] = F * (rt * a + at * T + d * i - (ct * T + G * i + it * a)), t[15] = F * (ct * l + H * i + st * a - (ot * a + at * l + nt * i)), t;
}
function pn(e, t, n) {
  n = n || new w(16);
  const r = e[0], i = e[1], o = e[2], s = e[3], c = e[4 + 0], a = e[4 + 1], u = e[4 + 2], h = e[4 + 3], f = e[8 + 0], l = e[8 + 1], y = e[8 + 2], p = e[8 + 3], S = e[12 + 0], T = e[12 + 1], b = e[12 + 2], A = e[12 + 3], P = t[0], M = t[1], R = t[2], _ = t[3], E = t[4 + 0], g = t[4 + 1], v = t[4 + 2], D = t[4 + 3], L = t[8 + 0], V = t[8 + 1], k = t[8 + 2], O = t[8 + 3], $ = t[12 + 0], G = t[12 + 1], d = t[12 + 2], H = t[12 + 3];
  return n[0] = r * P + c * M + f * R + S * _, n[1] = i * P + a * M + l * R + T * _, n[2] = o * P + u * M + y * R + b * _, n[3] = s * P + h * M + p * R + A * _, n[4] = r * E + c * g + f * v + S * D, n[5] = i * E + a * g + l * v + T * D, n[6] = o * E + u * g + y * v + b * D, n[7] = s * E + h * g + p * v + A * D, n[8] = r * L + c * V + f * k + S * O, n[9] = i * L + a * V + l * k + T * O, n[10] = o * L + u * V + y * k + b * O, n[11] = s * L + h * V + p * k + A * O, n[12] = r * $ + c * G + f * d + S * H, n[13] = i * $ + a * G + l * d + T * H, n[14] = o * $ + u * G + y * d + b * H, n[15] = s * $ + h * G + p * d + A * H, n;
}
function mn(e, t, n) {
  return n = n || ne(), e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11]), n[12] = t[0], n[13] = t[1], n[14] = t[2], n[15] = 1, n;
}
function An(e, t) {
  return t = t || q(), t[0] = e[12], t[1] = e[13], t[2] = e[14], t;
}
function Tn(e, t, n) {
  n = n || q();
  const r = t * 4;
  return n[0] = e[r + 0], n[1] = e[r + 1], n[2] = e[r + 2], n;
}
function Sn(e, t, n, r) {
  r !== e && (r = ee(e, r));
  const i = n * 4;
  return r[i + 0] = t[0], r[i + 1] = t[1], r[i + 2] = t[2], r;
}
function bn(e, t, n, r, i) {
  i = i || new w(16);
  const o = Math.tan(Math.PI * 0.5 - 0.5 * e), s = 1 / (n - r);
  return i[0] = o / t, i[1] = 0, i[2] = 0, i[3] = 0, i[4] = 0, i[5] = o, i[6] = 0, i[7] = 0, i[8] = 0, i[9] = 0, i[10] = (n + r) * s, i[11] = -1, i[12] = 0, i[13] = 0, i[14] = n * r * s * 2, i[15] = 0, i;
}
function wn(e, t, n, r, i, o, s) {
  return s = s || new w(16), s[0] = 2 / (t - e), s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 2 / (r - n), s[6] = 0, s[7] = 0, s[8] = 0, s[9] = 0, s[10] = 2 / (i - o), s[11] = 0, s[12] = (t + e) / (e - t), s[13] = (r + n) / (n - r), s[14] = (o + i) / (i - o), s[15] = 1, s;
}
function En(e, t, n, r, i, o, s) {
  s = s || new w(16);
  const c = t - e, a = r - n, u = i - o;
  return s[0] = 2 * i / c, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0, s[5] = 2 * i / a, s[6] = 0, s[7] = 0, s[8] = (e + t) / c, s[9] = (r + n) / a, s[10] = o / u, s[11] = -1, s[12] = 0, s[13] = 0, s[14] = i * o / u, s[15] = 0, s;
}
let j, J, Y;
function gn(e, t, n, r) {
  return r = r || new w(16), j = j || q(), J = J || q(), Y = Y || q(), lt(
    te(e, t, Y),
    Y
  ), lt(gt(n, Y, j), j), lt(gt(Y, j, J), J), r[0] = j[0], r[1] = j[1], r[2] = j[2], r[3] = 0, r[4] = J[0], r[5] = J[1], r[6] = J[2], r[7] = 0, r[8] = Y[0], r[9] = Y[1], r[10] = Y[2], r[11] = 0, r[12] = e[0], r[13] = e[1], r[14] = e[2], r[15] = 1, r;
}
function In(e, t) {
  return t = t || new w(16), t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = e[0], t[13] = e[1], t[14] = e[2], t[15] = 1, t;
}
function _n(e, t, n) {
  n = n || new w(16);
  const r = t[0], i = t[1], o = t[2], s = e[0], c = e[1], a = e[2], u = e[3], h = e[1 * 4 + 0], f = e[1 * 4 + 1], l = e[1 * 4 + 2], y = e[1 * 4 + 3], p = e[2 * 4 + 0], S = e[2 * 4 + 1], T = e[2 * 4 + 2], b = e[2 * 4 + 3], A = e[3 * 4 + 0], P = e[3 * 4 + 1], M = e[3 * 4 + 2], R = e[3 * 4 + 3];
  return e !== n && (n[0] = s, n[1] = c, n[2] = a, n[3] = u, n[4] = h, n[5] = f, n[6] = l, n[7] = y, n[8] = p, n[9] = S, n[10] = T, n[11] = b), n[12] = s * r + h * i + p * o + A, n[13] = c * r + f * i + S * o + P, n[14] = a * r + l * i + T * o + M, n[15] = u * r + y * i + b * o + R, n;
}
function Bn(e, t) {
  t = t || new w(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = n, t[6] = r, t[7] = 0, t[8] = 0, t[9] = -r, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Pn(e, t, n) {
  n = n || new w(16);
  const r = e[4], i = e[5], o = e[6], s = e[7], c = e[8], a = e[9], u = e[10], h = e[11], f = Math.cos(t), l = Math.sin(t);
  return n[4] = f * r + l * c, n[5] = f * i + l * a, n[6] = f * o + l * u, n[7] = f * s + l * h, n[8] = f * c - l * r, n[9] = f * a - l * i, n[10] = f * u - l * o, n[11] = f * h - l * s, e !== n && (n[0] = e[0], n[1] = e[1], n[2] = e[2], n[3] = e[3], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function Mn(e, t) {
  t = t || new w(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = 0, t[2] = -r, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = r, t[9] = 0, t[10] = n, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Rn(e, t, n) {
  n = n || new w(16);
  const r = e[0 * 4 + 0], i = e[0 * 4 + 1], o = e[0 * 4 + 2], s = e[0 * 4 + 3], c = e[2 * 4 + 0], a = e[2 * 4 + 1], u = e[2 * 4 + 2], h = e[2 * 4 + 3], f = Math.cos(t), l = Math.sin(t);
  return n[0] = f * r - l * c, n[1] = f * i - l * a, n[2] = f * o - l * u, n[3] = f * s - l * h, n[8] = f * c + l * r, n[9] = f * a + l * i, n[10] = f * u + l * o, n[11] = f * h + l * s, e !== n && (n[4] = e[4], n[5] = e[5], n[6] = e[6], n[7] = e[7], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function vn(e, t) {
  t = t || new w(16);
  const n = Math.cos(e), r = Math.sin(e);
  return t[0] = n, t[1] = r, t[2] = 0, t[3] = 0, t[4] = -r, t[5] = n, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Dn(e, t, n) {
  n = n || new w(16);
  const r = e[0 * 4 + 0], i = e[0 * 4 + 1], o = e[0 * 4 + 2], s = e[0 * 4 + 3], c = e[1 * 4 + 0], a = e[1 * 4 + 1], u = e[1 * 4 + 2], h = e[1 * 4 + 3], f = Math.cos(t), l = Math.sin(t);
  return n[0] = f * r + l * c, n[1] = f * i + l * a, n[2] = f * o + l * u, n[3] = f * s + l * h, n[4] = f * c - l * r, n[5] = f * a - l * i, n[6] = f * u - l * o, n[7] = f * h - l * s, e !== n && (n[8] = e[8], n[9] = e[9], n[10] = e[10], n[11] = e[11], n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function zn(e, t, n) {
  n = n || new w(16);
  let r = e[0], i = e[1], o = e[2];
  const s = Math.sqrt(r * r + i * i + o * o);
  r /= s, i /= s, o /= s;
  const c = r * r, a = i * i, u = o * o, h = Math.cos(t), f = Math.sin(t), l = 1 - h;
  return n[0] = c + (1 - c) * h, n[1] = r * i * l + o * f, n[2] = r * o * l - i * f, n[3] = 0, n[4] = r * i * l - o * f, n[5] = a + (1 - a) * h, n[6] = i * o * l + r * f, n[7] = 0, n[8] = r * o * l + i * f, n[9] = i * o * l - r * f, n[10] = u + (1 - u) * h, n[11] = 0, n[12] = 0, n[13] = 0, n[14] = 0, n[15] = 1, n;
}
function Fn(e, t, n, r) {
  r = r || new w(16);
  let i = t[0], o = t[1], s = t[2];
  const c = Math.sqrt(i * i + o * o + s * s);
  i /= c, o /= c, s /= c;
  const a = i * i, u = o * o, h = s * s, f = Math.cos(n), l = Math.sin(n), y = 1 - f, p = a + (1 - a) * f, S = i * o * y + s * l, T = i * s * y - o * l, b = i * o * y - s * l, A = u + (1 - u) * f, P = o * s * y + i * l, M = i * s * y + o * l, R = o * s * y - i * l, _ = h + (1 - h) * f, E = e[0], g = e[1], v = e[2], D = e[3], L = e[4], V = e[5], k = e[6], O = e[7], $ = e[8], G = e[9], d = e[10], H = e[11];
  return r[0] = p * E + S * L + T * $, r[1] = p * g + S * V + T * G, r[2] = p * v + S * k + T * d, r[3] = p * D + S * O + T * H, r[4] = b * E + A * L + P * $, r[5] = b * g + A * V + P * G, r[6] = b * v + A * k + P * d, r[7] = b * D + A * O + P * H, r[8] = M * E + R * L + _ * $, r[9] = M * g + R * V + _ * G, r[10] = M * v + R * k + _ * d, r[11] = M * D + R * O + _ * H, e !== r && (r[12] = e[12], r[13] = e[13], r[14] = e[14], r[15] = e[15]), r;
}
function Nn(e, t) {
  return t = t || new w(16), t[0] = e[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = e[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = e[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function Un(e, t, n) {
  n = n || new w(16);
  const r = t[0], i = t[1], o = t[2];
  return n[0] = r * e[0 * 4 + 0], n[1] = r * e[0 * 4 + 1], n[2] = r * e[0 * 4 + 2], n[3] = r * e[0 * 4 + 3], n[4] = i * e[1 * 4 + 0], n[5] = i * e[1 * 4 + 1], n[6] = i * e[1 * 4 + 2], n[7] = i * e[1 * 4 + 3], n[8] = o * e[2 * 4 + 0], n[9] = o * e[2 * 4 + 1], n[10] = o * e[2 * 4 + 2], n[11] = o * e[2 * 4 + 3], e !== n && (n[12] = e[12], n[13] = e[13], n[14] = e[14], n[15] = e[15]), n;
}
function Cn(e, t, n) {
  n = n || q();
  const r = t[0], i = t[1], o = t[2], s = r * e[0 * 4 + 3] + i * e[1 * 4 + 3] + o * e[2 * 4 + 3] + e[3 * 4 + 3];
  return n[0] = (r * e[0 * 4 + 0] + i * e[1 * 4 + 0] + o * e[2 * 4 + 0] + e[3 * 4 + 0]) / s, n[1] = (r * e[0 * 4 + 1] + i * e[1 * 4 + 1] + o * e[2 * 4 + 1] + e[3 * 4 + 1]) / s, n[2] = (r * e[0 * 4 + 2] + i * e[1 * 4 + 2] + o * e[2 * 4 + 2] + e[3 * 4 + 2]) / s, n;
}
function Ln(e, t, n) {
  n = n || q();
  const r = t[0], i = t[1], o = t[2];
  return n[0] = r * e[0 * 4 + 0] + i * e[1 * 4 + 0] + o * e[2 * 4 + 0], n[1] = r * e[0 * 4 + 1] + i * e[1 * 4 + 1] + o * e[2 * 4 + 1], n[2] = r * e[0 * 4 + 2] + i * e[1 * 4 + 2] + o * e[2 * 4 + 2], n;
}
function Vn(e, t, n) {
  n = n || q();
  const r = re(e), i = t[0], o = t[1], s = t[2];
  return n[0] = i * r[0 * 4 + 0] + o * r[0 * 4 + 1] + s * r[0 * 4 + 2], n[1] = i * r[1 * 4 + 0] + o * r[1 * 4 + 1] + s * r[1 * 4 + 2], n[2] = i * r[2 * 4 + 0] + o * r[2 * 4 + 1] + s * r[2 * 4 + 2], n;
}
var Q = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  axisRotate: Fn,
  axisRotation: zn,
  copy: ee,
  create: xn,
  frustum: En,
  getAxis: Tn,
  getTranslation: An,
  identity: ne,
  inverse: re,
  lookAt: gn,
  multiply: pn,
  negate: ln,
  ortho: wn,
  perspective: bn,
  rotateX: Pn,
  rotateY: Rn,
  rotateZ: Dn,
  rotationX: Bn,
  rotationY: Mn,
  rotationZ: vn,
  scale: Un,
  scaling: Nn,
  setAxis: Sn,
  setDefaultType: hn,
  setTranslation: mn,
  transformDirection: Ln,
  transformNormal: Vn,
  transformPoint: Cn,
  translate: _n,
  translation: In,
  transpose: yn
});
const Pt = 5120, et = 5121, Mt = 5122, Rt = 5123, vt = 5124, Dt = 5125, zt = 5126, kn = 32819, On = 32820, $n = 33635, Gn = 5131, dn = 33640, Hn = 35899, Wn = 35902, Yn = 36269, qn = 34042, ie = {};
{
  const e = ie;
  e[Pt] = Int8Array, e[et] = Uint8Array, e[Mt] = Int16Array, e[Rt] = Uint16Array, e[vt] = Int32Array, e[Dt] = Uint32Array, e[zt] = Float32Array, e[kn] = Uint16Array, e[On] = Uint16Array, e[$n] = Uint16Array, e[Gn] = Uint16Array, e[dn] = Uint32Array, e[Hn] = Uint32Array, e[Wn] = Uint32Array, e[Yn] = Uint32Array, e[qn] = Uint32Array;
}
function oe(e) {
  if (e instanceof Int8Array)
    return Pt;
  if (e instanceof Uint8Array || e instanceof Uint8ClampedArray)
    return et;
  if (e instanceof Int16Array)
    return Mt;
  if (e instanceof Uint16Array)
    return Rt;
  if (e instanceof Int32Array)
    return vt;
  if (e instanceof Uint32Array)
    return Dt;
  if (e instanceof Float32Array)
    return zt;
  throw new Error("unsupported typed array type");
}
function se(e) {
  if (e === Int8Array)
    return Pt;
  if (e === Uint8Array || e === Uint8ClampedArray)
    return et;
  if (e === Int16Array)
    return Mt;
  if (e === Uint16Array)
    return Rt;
  if (e === Int32Array)
    return vt;
  if (e === Uint32Array)
    return Dt;
  if (e === Float32Array)
    return zt;
  throw new Error("unsupported typed array type");
}
function jn(e) {
  const t = ie[e];
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
const Yt = /* @__PURE__ */ new Map();
function ce(e, t) {
  if (!e || typeof e != "object")
    return !1;
  let n = Yt.get(t);
  n || (n = /* @__PURE__ */ new WeakMap(), Yt.set(t, n));
  let r = n.get(e);
  if (r === void 0) {
    const i = Object.prototype.toString.call(e);
    r = i.substring(8, i.length - 1) === t, n.set(e, r);
  }
  return r;
}
function Kn(e, t) {
  return typeof WebGLBuffer < "u" && ce(t, "WebGLBuffer");
}
function ae(e, t) {
  return typeof WebGLTexture < "u" && ce(t, "WebGLTexture");
}
const ue = 35044, W = 34962, Zn = 34963, Jn = 34660, Qn = 5120, tr = 5121, er = 5122, nr = 5123, rr = 5124, ir = 5125, fe = 5126, he = {
  attribPrefix: ""
};
function le(e, t, n, r, i) {
  e.bindBuffer(t, n), e.bufferData(t, r, i || ue);
}
function xe(e, t, n, r) {
  if (Kn(e, t))
    return t;
  n = n || W;
  const i = e.createBuffer();
  return le(e, n, i, t, r), i;
}
function ye(e) {
  return e === "indices";
}
function or(e) {
  return e === Int8Array || e === Uint8Array;
}
function sr(e) {
  return e.length ? e : e.data;
}
const cr = /coord|texture/i, ar = /color|colour/i;
function ur(e, t) {
  let n;
  if (cr.test(e) ? n = 2 : ar.test(e) ? n = 4 : n = 3, t % n > 0)
    throw new Error(`Can not guess numComponents for attribute '${e}'. Tried ${n} but ${t} values is not evenly divisible by ${n}. You should specify it.`);
  return n;
}
function fr(e, t, n) {
  return e.numComponents || e.size || ur(t, n || sr(e).length);
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
  return n || (ye(t) ? n = Uint16Array : n = Float32Array), new n(e.data);
}
function hr(e) {
  return typeof e == "number" ? e : e ? se(e) : fe;
}
function Nt(e) {
  return typeof e == "number" ? jn(e) : e || Float32Array;
}
function lr(e, t) {
  return {
    buffer: t.buffer,
    numValues: 2 * 3 * 4,
    // safely divided by 2, 3, 4
    type: hr(t.type),
    arrayType: Nt(t.type)
  };
}
function xr(e, t) {
  const n = t.data || t, r = Nt(t.type), i = n * r.BYTES_PER_ELEMENT, o = e.createBuffer();
  return e.bindBuffer(W, o), e.bufferData(W, i, t.drawType || ue), {
    buffer: o,
    numValues: n,
    type: se(r),
    arrayType: r
  };
}
function yr(e, t, n) {
  const r = Ft(t, n);
  return {
    arrayType: r.constructor,
    buffer: xe(e, r, void 0, t.drawType),
    type: oe(r),
    numValues: 0
  };
}
function pr(e, t) {
  const n = {};
  return Object.keys(t).forEach(function(r) {
    if (!ye(r)) {
      const i = t[r], o = i.attrib || i.name || i.attribName || he.attribPrefix + r;
      if (i.value) {
        if (!Array.isArray(i.value) && !It(i.value))
          throw new Error("array.value is not array or typedarray");
        n[o] = {
          value: i.value
        };
      } else {
        let s;
        i.buffer && i.buffer instanceof WebGLBuffer ? s = lr : typeof i == "number" || typeof i.data == "number" ? s = xr : s = yr;
        const { buffer: c, type: a, numValues: u, arrayType: h } = s(e, i, r), f = i.normalize !== void 0 ? i.normalize : or(h), l = fr(i, r, u);
        n[o] = {
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
  }), e.bindBuffer(W, null), n;
}
function qt(e, t, n, r) {
  n = Ft(n), r !== void 0 ? (e.bindBuffer(W, t.buffer), e.bufferSubData(W, r, n)) : le(e, W, t.buffer, n, t.drawType);
}
function mr(e, t) {
  return t === Qn || t === tr ? 1 : t === er || t === nr ? 2 : t === rr || t === ir || t === fe ? 4 : 0;
}
const Et = ["position", "positions", "a_position"];
function Ar(e, t) {
  let n, r;
  for (r = 0; r < Et.length && (n = Et[r], !(n in t || (n = he.attribPrefix + n, n in t))); ++r)
    ;
  r === Et.length && (n = Object.keys(t)[0]);
  const i = t[n];
  if (!i.buffer)
    return 1;
  e.bindBuffer(W, i.buffer);
  const o = e.getBufferParameter(W, Jn);
  e.bindBuffer(W, null);
  const s = mr(e, i.type), c = o / s, a = i.numComponents || i.size, u = c / a;
  if (u % 1 !== 0)
    throw new Error(`numComponents ${a} not correct for length ${length}`);
  return u;
}
function Tr(e, t, n) {
  const r = pr(e, t), i = Object.assign({}, n || {});
  i.attribs = Object.assign({}, n ? n.attribs : {}, r);
  const o = t.indices;
  if (o) {
    const s = Ft(o, "indices");
    i.indices = xe(e, s, Zn), i.numElements = s.length, i.elementType = oe(s);
  } else
    i.numElements || (i.numElements = Ar(e, i.attribs));
  return i;
}
function Ut(e) {
  return !!e.texStorage2D;
}
const Sr = function() {
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
}(), Ct = Xn;
function pe(e) {
  return typeof document < "u" && document.getElementById ? document.getElementById(e) : null;
}
const xt = 33984, yt = 34962, br = 34963, wr = 35713, Er = 35714, gr = 35632, Ir = 35633, _r = 35981, me = 35718, Br = 35721, Pr = 35971, Mr = 35382, Rr = 35396, vr = 35398, Dr = 35392, zr = 35395, pt = 5126, Ae = 35664, Te = 35665, Se = 35666, Lt = 5124, be = 35667, we = 35668, Ee = 35669, ge = 35670, Ie = 35671, _e = 35672, Be = 35673, Pe = 35674, Me = 35675, Re = 35676, Fr = 35678, Nr = 35680, Ur = 35679, Cr = 35682, Lr = 35685, Vr = 35686, kr = 35687, Or = 35688, $r = 35689, Gr = 35690, dr = 36289, Hr = 36292, Wr = 36293, Vt = 5125, ve = 36294, De = 36295, ze = 36296, Yr = 36298, qr = 36299, jr = 36300, Xr = 36303, Kr = 36306, Zr = 36307, Jr = 36308, Qr = 36311, mt = 3553, At = 34067, kt = 32879, Tt = 35866, m = {};
function Fe(e, t) {
  return m[t].bindPoint;
}
function ti(e, t) {
  return function(n) {
    e.uniform1f(t, n);
  };
}
function ei(e, t) {
  return function(n) {
    e.uniform1fv(t, n);
  };
}
function ni(e, t) {
  return function(n) {
    e.uniform2fv(t, n);
  };
}
function ri(e, t) {
  return function(n) {
    e.uniform3fv(t, n);
  };
}
function ii(e, t) {
  return function(n) {
    e.uniform4fv(t, n);
  };
}
function Ne(e, t) {
  return function(n) {
    e.uniform1i(t, n);
  };
}
function Ue(e, t) {
  return function(n) {
    e.uniform1iv(t, n);
  };
}
function Ce(e, t) {
  return function(n) {
    e.uniform2iv(t, n);
  };
}
function Le(e, t) {
  return function(n) {
    e.uniform3iv(t, n);
  };
}
function Ve(e, t) {
  return function(n) {
    e.uniform4iv(t, n);
  };
}
function oi(e, t) {
  return function(n) {
    e.uniform1ui(t, n);
  };
}
function si(e, t) {
  return function(n) {
    e.uniform1uiv(t, n);
  };
}
function ci(e, t) {
  return function(n) {
    e.uniform2uiv(t, n);
  };
}
function ai(e, t) {
  return function(n) {
    e.uniform3uiv(t, n);
  };
}
function ui(e, t) {
  return function(n) {
    e.uniform4uiv(t, n);
  };
}
function fi(e, t) {
  return function(n) {
    e.uniformMatrix2fv(t, !1, n);
  };
}
function hi(e, t) {
  return function(n) {
    e.uniformMatrix3fv(t, !1, n);
  };
}
function li(e, t) {
  return function(n) {
    e.uniformMatrix4fv(t, !1, n);
  };
}
function xi(e, t) {
  return function(n) {
    e.uniformMatrix2x3fv(t, !1, n);
  };
}
function yi(e, t) {
  return function(n) {
    e.uniformMatrix3x2fv(t, !1, n);
  };
}
function pi(e, t) {
  return function(n) {
    e.uniformMatrix2x4fv(t, !1, n);
  };
}
function mi(e, t) {
  return function(n) {
    e.uniformMatrix4x2fv(t, !1, n);
  };
}
function Ai(e, t) {
  return function(n) {
    e.uniformMatrix3x4fv(t, !1, n);
  };
}
function Ti(e, t) {
  return function(n) {
    e.uniformMatrix4x3fv(t, !1, n);
  };
}
function U(e, t, n, r) {
  const i = Fe(e, t);
  return Ut(e) ? function(o) {
    let s, c;
    !o || ae(e, o) ? (s = o, c = null) : (s = o.texture, c = o.sampler), e.uniform1i(r, n), e.activeTexture(xt + n), e.bindTexture(i, s), e.bindSampler(n, c);
  } : function(o) {
    e.uniform1i(r, n), e.activeTexture(xt + n), e.bindTexture(i, o);
  };
}
function C(e, t, n, r, i) {
  const o = Fe(e, t), s = new Int32Array(i);
  for (let c = 0; c < i; ++c)
    s[c] = n + c;
  return Ut(e) ? function(c) {
    e.uniform1iv(r, s), c.forEach(function(a, u) {
      e.activeTexture(xt + s[u]);
      let h, f;
      !a || ae(e, a) ? (h = a, f = null) : (h = a.texture, f = a.sampler), e.bindSampler(n, f), e.bindTexture(o, h);
    });
  } : function(c) {
    e.uniform1iv(r, s), c.forEach(function(a, u) {
      e.activeTexture(xt + s[u]), e.bindTexture(o, a);
    });
  };
}
m[pt] = { Type: Float32Array, size: 4, setter: ti, arraySetter: ei };
m[Ae] = { Type: Float32Array, size: 8, setter: ni, cols: 2 };
m[Te] = { Type: Float32Array, size: 12, setter: ri, cols: 3 };
m[Se] = { Type: Float32Array, size: 16, setter: ii, cols: 4 };
m[Lt] = { Type: Int32Array, size: 4, setter: Ne, arraySetter: Ue };
m[be] = { Type: Int32Array, size: 8, setter: Ce, cols: 2 };
m[we] = { Type: Int32Array, size: 12, setter: Le, cols: 3 };
m[Ee] = { Type: Int32Array, size: 16, setter: Ve, cols: 4 };
m[Vt] = { Type: Uint32Array, size: 4, setter: oi, arraySetter: si };
m[ve] = { Type: Uint32Array, size: 8, setter: ci, cols: 2 };
m[De] = { Type: Uint32Array, size: 12, setter: ai, cols: 3 };
m[ze] = { Type: Uint32Array, size: 16, setter: ui, cols: 4 };
m[ge] = { Type: Uint32Array, size: 4, setter: Ne, arraySetter: Ue };
m[Ie] = { Type: Uint32Array, size: 8, setter: Ce, cols: 2 };
m[_e] = { Type: Uint32Array, size: 12, setter: Le, cols: 3 };
m[Be] = { Type: Uint32Array, size: 16, setter: Ve, cols: 4 };
m[Pe] = { Type: Float32Array, size: 32, setter: fi, rows: 2, cols: 2 };
m[Me] = { Type: Float32Array, size: 48, setter: hi, rows: 3, cols: 3 };
m[Re] = { Type: Float32Array, size: 64, setter: li, rows: 4, cols: 4 };
m[Lr] = { Type: Float32Array, size: 32, setter: xi, rows: 2, cols: 3 };
m[Vr] = { Type: Float32Array, size: 32, setter: pi, rows: 2, cols: 4 };
m[kr] = { Type: Float32Array, size: 48, setter: yi, rows: 3, cols: 2 };
m[Or] = { Type: Float32Array, size: 48, setter: Ai, rows: 3, cols: 4 };
m[$r] = { Type: Float32Array, size: 64, setter: mi, rows: 4, cols: 2 };
m[Gr] = { Type: Float32Array, size: 64, setter: Ti, rows: 4, cols: 3 };
m[Fr] = { Type: null, size: 0, setter: U, arraySetter: C, bindPoint: mt };
m[Nr] = { Type: null, size: 0, setter: U, arraySetter: C, bindPoint: At };
m[Ur] = { Type: null, size: 0, setter: U, arraySetter: C, bindPoint: kt };
m[Cr] = { Type: null, size: 0, setter: U, arraySetter: C, bindPoint: mt };
m[dr] = { Type: null, size: 0, setter: U, arraySetter: C, bindPoint: Tt };
m[Hr] = { Type: null, size: 0, setter: U, arraySetter: C, bindPoint: Tt };
m[Wr] = { Type: null, size: 0, setter: U, arraySetter: C, bindPoint: At };
m[Yr] = { Type: null, size: 0, setter: U, arraySetter: C, bindPoint: mt };
m[qr] = { Type: null, size: 0, setter: U, arraySetter: C, bindPoint: kt };
m[jr] = { Type: null, size: 0, setter: U, arraySetter: C, bindPoint: At };
m[Xr] = { Type: null, size: 0, setter: U, arraySetter: C, bindPoint: Tt };
m[Kr] = { Type: null, size: 0, setter: U, arraySetter: C, bindPoint: mt };
m[Zr] = { Type: null, size: 0, setter: U, arraySetter: C, bindPoint: kt };
m[Jr] = { Type: null, size: 0, setter: U, arraySetter: C, bindPoint: At };
m[Qr] = { Type: null, size: 0, setter: U, arraySetter: C, bindPoint: Tt };
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
      e.bindBuffer(yt, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribPointer(
        t,
        n.numComponents || n.size,
        n.type || pt,
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
      e.bindBuffer(yt, n.buffer), e.enableVertexAttribArray(t), e.vertexAttribIPointer(
        t,
        n.numComponents || n.size,
        n.type || Lt,
        n.stride || 0,
        n.offset || 0
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t, n.divisor || 0);
  };
}
function bt(e, t) {
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
function Ot(e, t, n) {
  const r = n.size, i = n.count;
  return function(o) {
    e.bindBuffer(yt, o.buffer);
    const s = o.size || o.numComponents || r, c = s / i, a = o.type || pt, h = m[a].size * s, f = o.normalize || !1, l = o.offset || 0, y = h / i;
    for (let p = 0; p < i; ++p)
      e.enableVertexAttribArray(t + p), e.vertexAttribPointer(
        t + p,
        c,
        a,
        f,
        h,
        l + y * p
      ), e.vertexAttribDivisor && e.vertexAttribDivisor(t + p, o.divisor || 0);
  };
}
const B = {};
B[pt] = { size: 4, setter: St };
B[Ae] = { size: 8, setter: St };
B[Te] = { size: 12, setter: St };
B[Se] = { size: 16, setter: St };
B[Lt] = { size: 4, setter: Z };
B[be] = { size: 8, setter: Z };
B[we] = { size: 12, setter: Z };
B[Ee] = { size: 16, setter: Z };
B[Vt] = { size: 4, setter: bt };
B[ve] = { size: 8, setter: bt };
B[De] = { size: 12, setter: bt };
B[ze] = { size: 16, setter: bt };
B[ge] = { size: 4, setter: Z };
B[Ie] = { size: 8, setter: Z };
B[_e] = { size: 12, setter: Z };
B[Be] = { size: 16, setter: Z };
B[Pe] = { size: 4, setter: Ot, count: 2 };
B[Me] = { size: 9, setter: Ot, count: 3 };
B[Re] = { size: 16, setter: Ot, count: 4 };
const Si = /ERROR:\s*\d+:(\d+)/gi;
function bi(e, t = "", n = 0) {
  const r = [...t.matchAll(Si)], i = new Map(r.map((o, s) => {
    const c = parseInt(o[1]), a = r[s + 1], u = a ? a.index : t.length, h = t.substring(o.index, u);
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
const jt = /^[ \t]*\n/;
function ke(e) {
  let t = 0;
  return jt.test(e) && (t = 1, e = e.replace(jt, "")), { lineOffset: t, shaderSource: e };
}
function wi(e, t) {
  return e.errorCallback(t), e.callback && setTimeout(() => {
    e.callback(`${t}
${e.errors.join(`
`)}`);
  }), null;
}
function Ei(e, t, n, r) {
  if (r = r || Ct, !e.getShaderParameter(n, wr)) {
    const o = e.getShaderInfoLog(n), { lineOffset: s, shaderSource: c } = ke(e.getShaderSource(n)), a = `${bi(c, o, s)}
Error compiling ${Sr(e, t)}: ${o}`;
    return r(a), a;
  }
  return "";
}
function $t(e, t, n) {
  let r, i, o;
  if (typeof t == "function" && (n = t, t = void 0), typeof e == "function")
    n = e, e = void 0;
  else if (e && !Array.isArray(e)) {
    const u = e;
    n = u.errorCallback, e = u.attribLocations, r = u.transformFeedbackVaryings, i = u.transformFeedbackMode, o = u.callback;
  }
  const s = n || Ct, c = [], a = {
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
    Array.isArray(e) ? e.forEach(function(h, f) {
      u[h] = t ? t[f] : f;
    }) : u = e || {}, a.attribLocations = u;
  }
  return a;
}
const gi = [
  "VERTEX_SHADER",
  "FRAGMENT_SHADER"
];
function Ii(e, t) {
  if (t.indexOf("frag") >= 0)
    return gr;
  if (t.indexOf("vert") >= 0)
    return Ir;
}
function _i(e, t, n) {
  const r = e.getAttachedShaders(t);
  for (const i of r)
    n.has(i) && e.deleteShader(i);
  e.deleteProgram(t);
}
const Bi = (e = 0) => new Promise((t) => setTimeout(t, e));
function Pi(e, t, n) {
  const r = e.createProgram(), {
    attribLocations: i,
    transformFeedbackVaryings: o,
    transformFeedbackMode: s
  } = $t(n);
  for (let c = 0; c < t.length; ++c) {
    let a = t[c];
    if (typeof a == "string") {
      const u = pe(a), h = u ? u.text : a;
      let f = e[gi[c]];
      u && u.type && (f = Ii(e, u.type) || f), a = e.createShader(f), e.shaderSource(a, ke(h).shaderSource), e.compileShader(a), e.attachShader(r, a);
    }
  }
  Object.entries(i).forEach(([c, a]) => e.bindAttribLocation(r, a, c));
  {
    let c = o;
    c && (c.attribs && (c = c.attribs), Array.isArray(c) || (c = Object.keys(c)), e.transformFeedbackVaryings(r, c, s || _r));
  }
  return e.linkProgram(r), r;
}
function Mi(e, t, n, r, i) {
  const o = $t(n, r, i), s = new Set(t), c = Pi(e, t, o);
  function a(u, h) {
    const f = vi(u, h, o.errorCallback);
    return f && _i(u, h, s), f;
  }
  if (o.callback) {
    Ri(e, c).then(() => {
      const u = a(e, c);
      o.callback(u, u ? void 0 : c);
    });
    return;
  }
  return a(e, c) ? void 0 : c;
}
async function Ri(e, t) {
  const n = e.getExtension("KHR_parallel_shader_compile"), r = n ? (o, s) => o.getProgramParameter(s, n.COMPLETION_STATUS_KHR) : () => !0;
  let i = 0;
  do
    await Bi(i), i = 1e3 / 60;
  while (!r(e, t));
}
function vi(e, t, n) {
  if (n = n || Ct, !e.getProgramParameter(t, Er)) {
    const i = e.getProgramInfoLog(t);
    n(`Error in program linking: ${i}`);
    const s = e.getAttachedShaders(t).map((c) => Ei(e, e.getShaderParameter(c, e.SHADER_TYPE), c, n));
    return `${i}
${s.filter((c) => c).join(`
`)}`;
  }
}
function Di(e, t, n, r, i) {
  return Mi(e, t, n, r, i);
}
function Oe(e) {
  const t = e.name;
  return t.startsWith("gl_") || t.startsWith("webgl_");
}
const zi = /(\.|\[|]|\w+)/g, Fi = (e) => e >= "0" && e <= "9";
function Ni(e, t, n, r) {
  const i = e.split(zi).filter((c) => c !== "");
  let o = 0, s = "";
  for (; ; ) {
    const c = i[o++];
    s += c;
    const a = Fi(c[0]), u = a ? parseInt(c) : c;
    if (a && (s += i[o++]), o === i.length) {
      n[u] = t;
      break;
    } else {
      const f = i[o++], l = f === "[", y = n[u] || (l ? [] : {});
      n[u] = y, n = y, r[s] = r[s] || function(p) {
        return function(S) {
          $e(p, S);
        };
      }(y), s += f;
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
  const i = {}, o = {}, s = e.getProgramParameter(t, me);
  for (let c = 0; c < s; ++c) {
    const a = e.getActiveUniform(t, c);
    if (Oe(a))
      continue;
    let u = a.name;
    u.endsWith("[0]") && (u = u.substr(0, u.length - 3));
    const h = e.getUniformLocation(t, a.name);
    if (h) {
      const f = r(t, a, h);
      i[u] = f, Ni(u, f, o, i);
    }
  }
  return i;
}
function Ci(e, t) {
  const n = {}, r = e.getProgramParameter(t, Pr);
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
  const n = e.getProgramParameter(t, me), r = [], i = [];
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
  const o = {}, s = e.getProgramParameter(t, Mr);
  for (let c = 0; c < s; ++c) {
    const a = e.getActiveUniformBlockName(t, c), u = {
      index: e.getUniformBlockIndex(t, a),
      usedByVertexShader: e.getActiveUniformBlockParameter(t, c, Rr),
      usedByFragmentShader: e.getActiveUniformBlockParameter(t, c, vr),
      size: e.getActiveUniformBlockParameter(t, c, Dr),
      uniformIndices: e.getActiveUniformBlockParameter(t, c, zr)
    };
    u.used = u.usedByVertexShader || u.usedByFragmentShader, o[a] = u;
  }
  return {
    blockSpecs: o,
    uniformData: r
  };
}
function $e(e, t) {
  for (const n in t) {
    const r = e[n];
    typeof r == "function" ? r(t[n]) : $e(e[n], t[n]);
  }
}
function wt(e, ...t) {
  const n = e.uniformSetters || e, r = t.length;
  for (let i = 0; i < r; ++i) {
    const o = t[i];
    if (Array.isArray(o)) {
      const s = o.length;
      for (let c = 0; c < s; ++c)
        wt(n, o[c]);
    } else
      for (const s in o) {
        const c = n[s];
        c && c(o[s]);
      }
  }
}
function Vi(e, t) {
  const n = {}, r = e.getProgramParameter(t, Br);
  for (let i = 0; i < r; ++i) {
    const o = e.getActiveAttrib(t, i);
    if (Oe(o))
      continue;
    const s = e.getAttribLocation(t, o.name), c = B[o.type], a = c.setter(e, s, c);
    a.location = s, n[o.name] = a;
  }
  return n;
}
function ki(e, t) {
  for (const n in t) {
    const r = e[n];
    r && r(t[n]);
  }
}
function Ge(e, t, n) {
  n.vertexArrayObject ? e.bindVertexArray(n.vertexArrayObject) : (ki(t.attribSetters || t, n.attribs), n.indices && e.bindBuffer(br, n.indices));
}
function Xt(e, t) {
  const n = Ui(e, t), r = Vi(e, t), i = {
    program: t,
    uniformSetters: n,
    attribSetters: r
  };
  return Ut(e) && (i.uniformBlockSpec = Li(e, t), i.transformFeedbackInfo = Ci(e, t)), i;
}
const Oi = /\s|{|}|;/;
function $i(e, t, n, r, i) {
  const o = $t(n, r, i), s = [];
  if (t = t.map(function(u) {
    if (!Oi.test(u)) {
      const h = pe(u);
      if (h)
        u = h.text;
      else {
        const f = `no element with id: ${u}`;
        o.errorCallback(f), s.push(f);
      }
    }
    return u;
  }), s.length)
    return wi(o, "");
  const c = o.callback;
  c && (o.callback = (u, h) => {
    c(u, u ? void 0 : Xt(e, h));
  });
  const a = Di(e, t, o);
  return a ? Xt(e, a) : null;
}
const Gi = 4, Kt = 5123;
function de(e, t, n, r, i, o) {
  n = n === void 0 ? Gi : n;
  const s = t.indices, c = t.elementType, a = r === void 0 ? t.numElements : r;
  i = i === void 0 ? 0 : i, c || s ? o !== void 0 ? e.drawElementsInstanced(n, a, c === void 0 ? Kt : t.elementType, i, o) : e.drawElements(n, a, c === void 0 ? Kt : t.elementType, i) : o !== void 0 ? e.drawArraysInstanced(n, i, a, o) : e.drawArrays(n, i, a);
}
function di(e, t) {
  t = t || 1, t = Math.max(0, t);
  const n = e.clientWidth * t | 0, r = e.clientHeight * t | 0;
  return e.width !== n || e.height !== r ? (e.width = n, e.height = r, !0) : !1;
}
const Zt = {
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
function ji(e, t) {
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
    return new x(this.x, this.y);
  }
}
class I {
  pos;
  color;
  constructor(t, n) {
    this.pos = t, this.color = n;
  }
}
class X {
  static canvas;
  static ctx;
  static camera;
  static init(t) {
    this.canvas = t.canvas, this.ctx = this.canvas.getContext("2d"), this.camera = t.camera;
  }
  static clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
  static debugLine(t, n = "red") {
    const i = (-t.c - t.a * 0) / t.b, o = this.ctx.canvas.width, s = (-t.c - t.a * o) / t.b, c = this.camera.worldSpaceToScreenSpace(new x(0, i)), a = this.camera.worldSpaceToScreenSpace(new x(o, s));
    this.ctx.strokeStyle = n, this.ctx.beginPath(), this.ctx.moveTo(c.x, c.y), this.ctx.lineTo(a.x, a.y), this.ctx.stroke();
  }
  static debugPoint(t, n = "red") {
    this.ctx.fillStyle = n;
    const r = this.camera.worldSpaceToScreenSpace(t);
    this.ctx.beginPath(), this.ctx.arc(r.x, r.y, 5, 0, Math.PI * 2), this.ctx.fill();
  }
}
function K(e, t, n, r, i) {
  return r + (e - t) * ((i - r) / (n - t));
}
function tt(e, t, n) {
  const r = x.sub(t, e).normalize().mult(n / 2).rotate(Math.PI / 2).add(e), i = x.sub(t, e).normalize().mult(n / 2).rotate(-Math.PI / 2).add(e);
  return [r, i];
}
function _t(e, t, n) {
  return tt(e.pos, t.pos, n).map((r) => new I(r, e.color));
}
function Jt(e, t) {
  const n = e.y - t.y, r = t.x - e.x, i = e.x * t.y - t.x * e.y;
  return { a: n, b: r, c: i };
}
function ut(e, t) {
  const n = -e.b, r = e.a, i = -n * t.x - r * t.y;
  return { a: n, b: r, c: i };
}
function ft(e, t) {
  const n = e.a, r = e.b, i = e.c + t * Math.sqrt(n * n + r * r);
  return { a: n, b: r, c: i };
}
function ht(e, t) {
  const n = (e.b * t.c - t.b * e.c) / (e.a * t.b - t.a * e.b), r = (t.a * e.c - e.a * t.c) / (e.a * t.b - t.a * e.b);
  return new x(n, r);
}
function Qt(e, t, n, r, i = 60) {
  const o = e.pos, s = t.pos, c = n.pos, a = (180 - i) * (Math.PI / 180), u = x.angleBetween(x.sub(t.pos, e.pos), x.sub(n.pos, t.pos));
  if (Math.abs(u) <= 1e-3)
    return {
      vertices: _t(t, n, r),
      indices: [0, 1, 2, 1, 2, 3]
    };
  const h = Jt(e.pos, t.pos), f = Jt(t.pos, n.pos), l = ft(h, -r / 2), y = ft(h, r / 2), p = ft(f, -r / 2), S = ft(f, r / 2);
  let T = ht(l, p), b = ht(y, S);
  if (u < a && u > -a)
    return { vertices: [new I(T, t.color), new I(b, t.color)], indices: [0, 1, 2, 1, 2, 3] };
  if (u <= -a) {
    let [A, P] = tt(s, o, r), [M, R] = tt(s, c, r);
    const _ = x.sub(s, b).magSq(), E = x.sub(s, o).magSq(), g = x.sub(s, c).magSq();
    if (_ > E || _ > g) {
      const v = g > E ? ut(h, o) : ut(f, c), D = ht(v, g > E ? S : y);
      X.debugPoint(D, "cyan"), X.debugLine(S, "cyan"), X.debugLine(v, "cyan"), b = D;
    }
    return {
      vertices: [new I(P, t.color), new I(M, t.color), new I(b, t.color)],
      indices: [0, 1, 2, 1, 2, 4, 2, 3, 4],
      right: !0
    };
  } else {
    const [A, P] = tt(t.pos, e.pos, r), [M, R] = tt(t.pos, n.pos, r), _ = x.sub(s, T).magSq(), E = x.sub(s, o).magSq(), g = x.sub(s, c).magSq();
    if (_ > E || _ > g) {
      const v = g > E ? ut(h, o) : ut(f, c), D = ht(v, g > E ? p : l);
      X.debugPoint(D, "cyan"), X.debugLine(g > E ? p : l, "pink"), X.debugLine(v, "cyan"), T = D;
    }
    return {
      vertices: [new I(A, t.color), new I(T, t.color), new I(R, t.color)],
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
      fn.create(-this.pos.x, -this.pos.y)
    );
  }
  /**
   * Converts a vector (position) in screen space into world space
   * @param vector
   * @returns The Vector converted to World space
   */
  screenSpaceToWorldSpace(t) {
    const n = window.innerHeight / this.zoom, r = K(t.x, 0, window.innerWidth, -this.aspect * n, this.aspect * n) + this.pos.x, i = K(t.y, 0, window.innerHeight, -1 * n, 1 * n) + this.pos.y;
    return new x(r, i);
  }
  /**
   * Converts a vector (position) in world space into screen space
   * @param vector
   * @returns The Vector converted to Screen space
   */
  worldSpaceToScreenSpace(t) {
    const n = window.innerHeight / this.zoom, r = K(t.x, -this.aspect * n + this.pos.x, this.aspect * n + this.pos.x, 0, window.innerWidth), i = K(t.y, -1 * n + this.pos.y, 1 * n + this.pos.y, 0, window.innerHeight);
    return new x(r, i);
  }
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
    qt(t, this.bufferInfo.attribs.position, this.positions), qt(t, this.bufferInfo.attribs.color, this.colors), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.bufferInfo.indices), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.DYNAMIC_DRAW);
  }
  fill() {
    this.positions.fill(0, this.currentVertices * 2), this.colors.fill(0, this.currentVertices * 4), this.indices.fill(0, this.currentIndices);
  }
  resetCount() {
    this.currentVertices = 0, this.currentIndices = 0;
  }
}
class He {
  translation;
  rotation;
  scaling;
  transformed = !1;
  constructor() {
    this.translation = new x(0, 0), this.rotation = 0, this.scaling = new x(1, 1);
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
    return this.transformed ? t.map((n) => new I(n.pos.copy().rotate(this.rotation).mult(this.scaling).add(this.translation), n.color)) : t;
  }
  getMatrix() {
    return Q.translate(Q.scale(Q.rotateZ(Q.identity(), this.rotation), [this.scaling.x, this.scaling.y, 1]), [
      this.translation.x,
      this.translation.y,
      0
    ]);
  }
}
class We {
  gl;
  id = -1;
  transform;
  constructor(t) {
    this.gl = t, this.transform = new He();
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
class Wi extends We {
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
    wt(t, {
      modelMatrix: this.transform.getMatrix()
    });
    for (let n = 0; n <= this.currentBufferIndex; n++)
      Ge(this.gl, t, this.buffers[n].bufferInfo), de(this.gl, this.buffers[n].bufferInfo, this.gl.TRIANGLES, this.buffers[n].currentIndices);
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
function Xi(e, t, n) {
  return new N(e, t, n);
}
function Yi(e, t, n, r = 255) {
  return new N(e, t, n, r);
}
class N {
  r;
  g;
  b;
  a;
  static WHITE = new N(255, 255, 255);
  static BLACK = new N(0, 0, 0);
  static RED = new N(255, 0, 0);
  static GREEN = new N(0, 255, 0);
  static BLUE = new N(0, 0, 255);
  static YELLOW = new N(255, 255, 0);
  static MAGENTA = new N(255, 0, 255);
  static CYAN = new N(0, 255, 255);
  static TRANSPARENT = new N(0, 0, 0, 0);
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
    return Yi(i, o, s, n);
  }
  /**
   * Interpolates between two colors
   * @param color1 the first color
   * @param color2 the second color
   * @param t amount to interpolate by (a number between 0 and 1)
   * @returns The interpolated color
   */
  static interpolate(t, n, r) {
    return new N(
      K(r, 0, 1, t.r, n.r),
      K(r, 0, 1, t.g, n.g),
      K(r, 0, 1, t.b, n.b),
      K(r, 0, 1, t.a, n.a)
    );
  }
}
class qi {
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
class Ki {
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
  vertexColor = new N(255, 255, 255, 255);
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
      r.width = window.innerWidth, r.height = window.innerHeight, this.canvas.parentElement.appendChild(r), r.style.position = "absolute", r.style.top = "0", r.style.left = "0", this.textRenderer = new qi({ canvas: r });
    } else
      this.textRenderer = null;
    if (t.camera ? (this.camera = t.camera, this.camera.setDisplaySize(new x(this.canvas.width, this.canvas.height))) : this.camera = new Hi(new x(this.canvas.width, this.canvas.height)), this.shaderProgramInfo = $i(this.gl, [Zt.vertexShader, Zt.fragmentShader]), this.gl.enable(this.gl.BLEND), this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE), di(this.gl.canvas), this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.setBuffer(new Wi(this.gl, { bufferSize: 1e3 })), this.transform = new He(), t.enableDebugRenderer) {
      const r = document.createElement("canvas");
      r.width = window.innerWidth, r.height = window.innerHeight, this.canvas.parentElement.appendChild(r), r.style.position = "absolute", r.style.top = "0", r.style.left = "0", X.init({ canvas: r, camera: this.camera });
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
   * Clears the screen with the specified color
   * @param color The clear color
   */
  clear(t = new N(0, 0, 0, 255)) {
    this.gl.clearColor(t.r / 255, t.g / 255, t.b / 255, t.a / 255), this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT), this.textRenderer && this.textRenderer.clear(), X.clear();
  }
  buildPath(t, n, r = !1, i) {
    const o = [], s = [], c = t[0], a = t[1];
    t.length === 2 && (r = !1);
    let u = !1, h = !1;
    if (!r)
      o.push(..._t(c, a, n));
    else {
      const f = Qt(t[t.length - 1], c, a, n, i);
      o.push(...f.vertices), o.length === 3 && (s.push(0, 1, 2), u = !0, h = f.right), console.log(o.length);
    }
    for (let f = 0; f < t.length - (r ? 1 : 2); f++) {
      const l = Qt(t[f], t[f + 1], t[(f + 2) % t.length], n, i);
      s.push(...l.indices.map((y) => y + o.length - 2)), o.push(...l.vertices);
    }
    if (!r)
      s.push(...[0, 1, 2, 1, 2, 3].map((f) => f + o.length - 2)), o.push(..._t(t[t.length - 1], t[t.length - 2], n).reverse());
    else {
      const f = o.length - 2;
      u ? h ? (s.push(f, f + 1, 2, f, 0, 2), console.log("YES")) : s.push(f, f + 1, 0, f, 0, 1) : s.push(f, f + 1, 1, f, 0, 1);
    }
    this.buffers[this.currentBufferIndex].addVerticesAndIndices(this.transform.transformVertices(o), s);
  }
  buildDashedPath(t, n, r = !1, i = 10, o) {
    let s = null;
    const c = r ? t.length + 1 : t.length;
    for (let a = 0; a < c; a++) {
      const u = t[a % t.length], h = t[(a + 1) % t.length], f = u.pos.dist(h.pos), l = Math.floor(f / i), y = f / l;
      let p = t[a];
      const S = h.pos.copy().sub(u.pos);
      for (let T = 1; T < l; T++) {
        const b = u.pos.copy().add(S.copy().setMag(y * T));
        let A = new I(b, N.interpolate(u.color, h.color, T / l));
        if (T === 1 && s && (this.buildPath([s, u, A], n, r, o), a === c - 1))
          break;
        T % 2 === 0 && this.buildPath([p, A], n, r, o), p = A;
      }
      s = p;
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
    t instanceof I ? this.currentPath.push(t) : n ? this.currentPath.push(new I(t, n)) : this.currentPath.push(new I(t, this.vertexColor));
  }
  vertices(t, n) {
    t[0] instanceof I ? this.currentPath = [...this.currentPath, ...t] : n ? this.currentPath = [...this.currentPath, ...t.map((r) => new I(r, n))] : this.currentPath = [...this.currentPath, ...t.map((r) => new I(r, this.vertexColor))];
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
    const r = new I(t, this.vertexColor), i = new I(n, this.vertexColor);
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
  arc(t, n, r, i, o = 1) {
    const s = 30 * o, c = (i - r) / s, a = [];
    let u = 0;
    for (let h = 0; h <= s; h++)
      u = r + c * h, a.push(new I(new x(t.x + n * Math.cos(u), t.y + n * Math.sin(u)), this.vertexColor));
    i - u > 0.01 && a.push(new I(new x(t.x + n * Math.cos(i), t.y + n * Math.sin(i)), this.vertexColor)), this.currentPath.push(...a);
  }
  /**
   * Draws a rectangle (to the current path).
   * Note that it does not close the path. So if you want to stroke() it, use the `closed` option in the `stroke()` method.
   * @param pos The position of the top left corner of the rectangle
   * @param size The size (width and height) of the rectangle
   */
  rect(t, n) {
    const r = [t, new x(t.x + n.x, t.y), new x(t.x + n.y, t.y + n.y), new x(t.x, t.y + n.y)];
    this.currentPath.push(...r.map((i) => new I(i, this.vertexColor)));
  }
  /**
   * Strokes (outlines) everything in the current path since the last `beginPath()` call with the specified width and options.
   * @param width The stroke width
   * @param options Options for the stroke
   */
  stroke(t, { closed: n = !1, dashed: r = !1, dashLength: i = 10, miterLimit: o = 60 } = {}) {
    let s = this.currentPath.findIndex((c) => c === null);
    if (s === -1) {
      r ? this.buildDashedPath(this.currentPath, t, n, i, o) : this.buildPath(this.currentPath, t, n, o);
      return;
    }
    for (; s !== -1; ) {
      if (r ? this.buildDashedPath(this.currentPath.slice(0, s), t, n, i, o) : this.buildPath(this.currentPath.slice(0, s), t, n, o), this.currentPath = this.currentPath.slice(s + 1), this.currentPath.length === 0)
        return;
      s = this.currentPath.findIndex((c) => c === null), s = s === -1 ? this.currentPath.length : s;
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
    this.gl.useProgram(this.shaderProgramInfo.program), wt(this.shaderProgramInfo, t);
    for (const n of this.buffers)
      n.render(this.shaderProgramInfo);
    this.buffers[0].reset(), this.textRenderer && this.textRenderer.render(this.camera);
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
class Zi extends We {
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
    wt(t, {
      modelMatrix: this.transform.getMatrix()
    }), Ge(this.gl, t, this.buffer.bufferInfo), de(this.gl, this.buffer.bufferInfo, this.gl.TRIANGLES, this.buffer.currentIndices);
  }
}
export {
  We as Buffer,
  Bt as BufferData,
  Hi as Camera,
  qi as CanvasTextRenderer,
  N as Color,
  X as DebugRenderer,
  Wi as DynamicBuffer,
  Xi as RGB,
  Yi as RGBA,
  Ki as Renderer,
  Zi as StaticBuffer,
  He as Transform,
  ji as Vec,
  x as Vector,
  I as Vertex
};
