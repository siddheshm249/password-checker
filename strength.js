(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.Strength = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  const COMMON = ['password', '123456', '12345678', 'qwerty', 'admin', 'letmein', 'welcome'];

  function score(pw) {
    if (typeof pw !== 'string') throw new Error('Password must be text');
    if (COMMON.includes(pw.toLowerCase())) return 0;
    let s = 0;
    if (pw.length >= 8) s++;
    if (pw.length >= 12) s++;
    if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) s++;
    if (/\d/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    return s; // 0 to 5
  }

  function label(s) {
    if (s <= 1) return 'Weak';
    if (s === 2) return 'Fair';
    if (s === 3) return 'Good';
    return 'Strong';
  }

  return { score, label };
});
