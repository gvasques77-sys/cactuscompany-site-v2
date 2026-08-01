/* @ds-bundle: {"format":3,"namespace":"CactusDesignSystem_7d7c0b","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"AttendanceScreen","sourcePath":"ui_kits/frequencia_internato/AttendanceScreen.jsx"},{"name":"DashboardScreen","sourcePath":"ui_kits/frequencia_internato/DashboardScreen.jsx"},{"name":"LoginScreen","sourcePath":"ui_kits/frequencia_internato/LoginScreen.jsx"},{"name":"StudentListScreen","sourcePath":"ui_kits/frequencia_internato/StudentListScreen.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"739cafeba22e","components/core/Badge.jsx":"887601dc18d0","components/core/Button.jsx":"20623f693eb3","components/core/Card.jsx":"f62c13d4c902","components/core/Checkbox.jsx":"4530c90db765","components/core/Input.jsx":"a7cd7263e5a2","components/core/Select.jsx":"83f71c53ea5a","ui_kits/frequencia_internato/AttendanceScreen.jsx":"27cafe3f1225","ui_kits/frequencia_internato/DashboardScreen.jsx":"f66868f9f60d","ui_kits/frequencia_internato/LoginScreen.jsx":"3766d9a2a573","ui_kits/frequencia_internato/StudentListScreen.jsx":"6b095633d06a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CactusDesignSystem_7d7c0b = window.CactusDesignSystem_7d7c0b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
const PALETTE = [['#C7EDCB', '#10590A'], ['#E5F0FC', '#1E5DB0'], ['#FFF4DC', '#B07600'], ['#FCEAEA', '#B02828'], ['#BFD0C5', '#0F2118'], ['#9FE0A6', '#10590A'], ['#EAF8EC', '#248B1A']];

/**
 * Circular avatar: shows initials (color-hashed from name) or an image.
 */
function Avatar({
  name,
  src,
  size = 'md',
  online,
  style: customStyle
}) {
  const SIZES = {
    xs: {
      dim: '24px',
      font: '9px',
      dot: '7px',
      dotOffset: '0px'
    },
    sm: {
      dim: '32px',
      font: '12px',
      dot: '8px',
      dotOffset: '0px'
    },
    md: {
      dim: '40px',
      font: '15px',
      dot: '10px',
      dotOffset: '1px'
    },
    lg: {
      dim: '48px',
      font: '18px',
      dot: '11px',
      dotOffset: '1px'
    },
    xl: {
      dim: '64px',
      font: '22px',
      dot: '13px',
      dotOffset: '1px'
    },
    '2xl': {
      dim: '80px',
      font: '28px',
      dot: '15px',
      dotOffset: '2px'
    }
  };
  const s = SIZES[size] || SIZES.md;
  const initials = name ? name.trim().split(/\s+/).slice(0, 2).map(n => (n[0] || '').toUpperCase()).join('') : '?';
  const colorIdx = name ? [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0) % PALETTE.length : 0;
  const [bg, fg] = PALETTE[colorIdx];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.dim,
      height: s.dim,
      minWidth: s.dim,
      borderRadius: '50%',
      background: src ? '#EAECEA' : bg,
      color: fg,
      fontFamily: "'Nunito', system-ui, sans-serif",
      fontWeight: 800,
      fontSize: s.font,
      overflow: 'hidden',
      flexShrink: 0,
      userSelect: 'none',
      ...customStyle
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("span", null, initials), online !== undefined && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: s.dotOffset,
      right: s.dotOffset,
      width: s.dot,
      height: s.dot,
      borderRadius: '50%',
      background: online ? '#38B82C' : '#929E92',
      border: '2px solid white',
      boxSizing: 'border-box'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/**
 * Compact label for statuses, categories, and counts.
 * Includes domain-specific attendance variants.
 */
function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  style: customStyle
}) {
  const SIZES = {
    sm: {
      fontSize: '10px',
      padding: '2px 7px',
      height: '18px',
      dotSize: '5px'
    },
    md: {
      fontSize: '12px',
      padding: '2px 9px',
      height: '22px',
      dotSize: '6px'
    },
    lg: {
      fontSize: '13px',
      padding: '3px 11px',
      height: '26px',
      dotSize: '7px'
    }
  };
  const VARIANTS = {
    default: {
      bg: '#EAECEA',
      color: '#3E4A3E'
    },
    primary: {
      bg: '#EAF8EC',
      color: '#248B1A'
    },
    dark: {
      bg: '#0F2118',
      color: '#ffffff'
    },
    success: {
      bg: '#EAF8EC',
      color: '#248B1A'
    },
    warning: {
      bg: '#FFF4DC',
      color: '#B07600'
    },
    error: {
      bg: '#FCEAEA',
      color: '#B02828'
    },
    info: {
      bg: '#E5F0FC',
      color: '#1E5DB0'
    },
    presente: {
      bg: '#EAF8EC',
      color: '#248B1A'
    },
    ausente: {
      bg: '#FCEAEA',
      color: '#B02828'
    },
    justificado: {
      bg: '#FFF4DC',
      color: '#B07600'
    }
  };
  const DOT_COLORS = {
    default: '#929E92',
    primary: '#38B82C',
    dark: '#ffffff',
    success: '#38B82C',
    warning: '#E09820',
    error: '#DC3535',
    info: '#2A7ADB',
    presente: '#38B82C',
    ausente: '#DC3535',
    justificado: '#E09820'
  };
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.default;
  const dotColor = DOT_COLORS[variant] || '#929E92';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      background: v.bg,
      color: v.color,
      fontSize: s.fontSize,
      fontWeight: 700,
      height: s.height,
      padding: s.padding,
      borderRadius: '9999px',
      fontFamily: "'Nunito', system-ui, sans-serif",
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
      lineHeight: 1,
      ...customStyle
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.dotSize,
      height: s.dotSize,
      minWidth: s.dotSize,
      borderRadius: '50%',
      background: dotColor,
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * Primary interactive element. Pill-shaped with hover lift and press shrink.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  onClick,
  type = 'button',
  style: customStyle
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const SIZES = {
    sm: {
      padding: '5px 14px',
      fontSize: '13px',
      height: '30px',
      gap: '5px',
      iconW: '14px'
    },
    md: {
      padding: '9px 20px',
      fontSize: '15px',
      height: '38px',
      gap: '7px',
      iconW: '16px'
    },
    lg: {
      padding: '12px 24px',
      fontSize: '16px',
      height: '46px',
      gap: '8px',
      iconW: '18px'
    },
    xl: {
      padding: '15px 32px',
      fontSize: '18px',
      height: '54px',
      gap: '10px',
      iconW: '20px'
    }
  };
  const VARIANTS = {
    primary: {
      bg: '#38B82C',
      hbg: '#2EA323',
      color: '#fff',
      border: '#38B82C'
    },
    secondary: {
      bg: '#EAF8EC',
      hbg: '#C7EDCB',
      color: '#248B1A',
      border: '#EAF8EC'
    },
    outline: {
      bg: 'transparent',
      hbg: '#EAF8EC',
      color: '#38B82C',
      border: '#38B82C'
    },
    ghost: {
      bg: 'transparent',
      hbg: '#F5F8F5',
      color: '#707D70',
      border: 'transparent'
    },
    dark: {
      bg: '#0F2118',
      hbg: '#164021',
      color: '#fff',
      border: '#0F2118'
    },
    danger: {
      bg: '#DC3535',
      hbg: '#B02828',
      color: '#fff',
      border: '#DC3535'
    }
  };
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const active = hovered && !disabled;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    fontSize: s.fontSize,
    height: s.height,
    fontFamily: "'Nunito', system-ui, sans-serif",
    fontWeight: 700,
    borderRadius: '9999px',
    border: `2px solid ${v.border}`,
    background: active ? v.hbg : v.bg,
    color: v.color,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background 120ms ease, border-color 120ms ease, transform 150ms cubic-bezier(0.34,1.56,0.64,1)',
    transform: pressed && !disabled ? 'scale(0.97)' : active ? 'translateY(-1px)' : 'none',
    whiteSpace: 'nowrap',
    outline: 'none',
    width: fullWidth ? '100%' : undefined,
    letterSpacing: '0.01em',
    boxSizing: 'border-box',
    textDecoration: 'none',
    ...customStyle
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false)
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      width: s.iconW,
      height: s.iconW,
      flexShrink: 0
    }
  }, leftIcon), children, rightIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      width: s.iconW,
      height: s.iconW,
      flexShrink: 0
    }
  }, rightIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/**
 * Content container with consistent border radius, shadow, and padding.
 */
function Card({
  children,
  variant = 'default',
  padding = 'md',
  hoverable = false,
  onClick,
  style: customStyle
}) {
  const [hovered, setHovered] = React.useState(false);
  const VARIANTS = {
    default: {
      background: '#ffffff',
      border: '1px solid #D2D7D2',
      boxShadow: 'none'
    },
    raised: {
      background: '#ffffff',
      border: 'none',
      boxShadow: '0 4px 8px rgba(15,33,24,0.10),0 2px 4px rgba(15,33,24,0.06)'
    },
    tinted: {
      background: '#EAF8EC',
      border: '1px solid #C7EDCB',
      boxShadow: 'none'
    },
    dark: {
      background: '#0F2118',
      border: 'none',
      boxShadow: 'none',
      color: '#ffffff'
    },
    ghost: {
      background: '#F5F8F5',
      border: 'none',
      boxShadow: 'none'
    }
  };
  const PADDING = {
    none: '0',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  };
  const v = VARIANTS[variant] || VARIANTS.default;
  const isInteractive = hoverable || Boolean(onClick);
  const lift = hovered && isInteractive;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: '16px',
      padding: PADDING[padding],
      transition: 'transform 200ms ease, box-shadow 200ms ease',
      cursor: isInteractive ? 'pointer' : 'default',
      transform: lift ? 'translateY(-2px)' : 'none',
      ...v,
      boxShadow: lift ? '0 8px 20px rgba(15,33,24,0.12),0 4px 8px rgba(15,33,24,0.06)' : v.boxShadow,
      ...customStyle
    },
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
/**
 * Boolean toggle with label. Primary use case: marking student attendance.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  size = 'md',
  style: customStyle
}) {
  const [hovered, setHovered] = React.useState(false);
  const SIZES = {
    sm: {
      box: '16px',
      radius: '4px',
      fontSize: '13px',
      gap: '7px',
      checkW: '9px'
    },
    md: {
      box: '20px',
      radius: '5px',
      fontSize: '15px',
      gap: '9px',
      checkW: '11px'
    },
    lg: {
      box: '24px',
      radius: '6px',
      fontSize: '16px',
      gap: '10px',
      checkW: '13px'
    }
  };
  const s = SIZES[size] || SIZES.md;
  const boxBorder = checked ? '#38B82C' : hovered && !disabled ? '#72D27E' : '#D2D7D2';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: "'Nunito', system-ui, sans-serif",
      fontSize: s.fontSize,
      fontWeight: 500,
      color: disabled ? '#B3BAB3' : '#0F2118',
      userSelect: 'none',
      opacity: disabled ? 0.55 : 1,
      ...customStyle
    },
    onMouseEnter: () => !disabled && setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: s.box,
      height: s.box,
      minWidth: s.box,
      borderRadius: s.radius,
      border: `2px solid ${boxBorder}`,
      background: checked ? '#38B82C' : '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background 120ms ease, border-color 120ms ease',
      boxSizing: 'border-box',
      flexShrink: 0
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: s.checkW,
    height: s.checkW,
    viewBox: "0 0 12 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5L4.5 8.5L11 1.5",
    stroke: "#ffffff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
/**
 * Text input with label, hint, error state, and optional leading/trailing icons.
 */
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  size = 'md',
  disabled = false,
  error,
  hint,
  leftIcon,
  rightIcon,
  style: customStyle,
  inputStyle: customInputStyle
}) {
  const [focused, setFocused] = React.useState(false);
  const SIZES = {
    sm: {
      height: '34px',
      fontSize: '13px',
      px: '12px',
      labelSz: '12px'
    },
    md: {
      height: '42px',
      fontSize: '15px',
      px: '14px',
      labelSz: '13px'
    },
    lg: {
      height: '50px',
      fontSize: '16px',
      px: '16px',
      labelSz: '13px'
    }
  };
  const s = SIZES[size] || SIZES.md;
  const hasError = Boolean(error);
  const borderColor = hasError ? '#DC3535' : focused ? '#38B82C' : '#D2D7D2';
  const boxShadow = focused ? hasError ? '0 0 0 3px rgba(220,53,53,0.18)' : '0 0 0 3px rgba(56,184,44,0.20)' : 'none';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      width: '100%',
      ...customStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: s.labelSz,
      fontWeight: 600,
      color: hasError ? '#DC3535' : '#0F2118',
      fontFamily: "'Nunito', system-ui, sans-serif",
      letterSpacing: '0.01em',
      display: 'block'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: s.px,
      display: 'flex',
      alignItems: 'center',
      color: focused ? '#38B82C' : '#929E92',
      pointerEvents: 'none',
      fontSize: '16px',
      transition: 'color 120ms ease'
    }
  }, leftIcon), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      height: s.height,
      fontSize: s.fontSize,
      fontFamily: "'Nunito', system-ui, sans-serif",
      fontWeight: 500,
      color: disabled ? '#B3BAB3' : '#0F2118',
      background: disabled ? '#F5F8F5' : '#ffffff',
      border: `1.5px solid ${borderColor}`,
      borderRadius: '12px',
      outline: 'none',
      boxShadow,
      transition: 'border-color 120ms ease, box-shadow 120ms ease',
      cursor: disabled ? 'not-allowed' : 'text',
      paddingLeft: leftIcon ? `calc(${s.px} + 24px)` : s.px,
      paddingRight: rightIcon ? `calc(${s.px} + 24px)` : s.px,
      boxSizing: 'border-box',
      ...customInputStyle
    }
  }), rightIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: s.px,
      display: 'flex',
      alignItems: 'center',
      color: '#929E92',
      pointerEvents: 'none',
      fontSize: '16px'
    }
  }, rightIcon)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: hasError ? '#DC3535' : '#707D70',
      fontFamily: "'Nunito', system-ui, sans-serif",
      fontWeight: 500
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
/**
 * Native-styled dropdown — matches Input visual style for consistent form layouts.
 */
function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder,
  disabled = false,
  error,
  hint,
  size = 'md',
  style: customStyle
}) {
  const [focused, setFocused] = React.useState(false);
  const SIZES = {
    sm: {
      height: '34px',
      fontSize: '13px',
      px: '12px',
      labelSz: '12px'
    },
    md: {
      height: '42px',
      fontSize: '15px',
      px: '14px',
      labelSz: '13px'
    },
    lg: {
      height: '50px',
      fontSize: '16px',
      px: '16px',
      labelSz: '13px'
    }
  };
  const s = SIZES[size] || SIZES.md;
  const hasError = Boolean(error);
  const borderColor = hasError ? '#DC3535' : focused ? '#38B82C' : '#D2D7D2';
  const boxShadow = focused ? hasError ? '0 0 0 3px rgba(220,53,53,0.18)' : '0 0 0 3px rgba(56,184,44,0.20)' : 'none';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      width: '100%',
      ...customStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: s.labelSz,
      fontWeight: 600,
      color: hasError ? '#DC3535' : '#0F2118',
      fontFamily: "'Nunito', system-ui, sans-serif",
      letterSpacing: '0.01em',
      display: 'block'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      height: s.height,
      fontSize: s.fontSize,
      fontFamily: "'Nunito', system-ui, sans-serif",
      fontWeight: 500,
      color: value === '' || value === undefined ? '#929E92' : '#0F2118',
      background: disabled ? '#F5F8F5' : '#ffffff',
      border: `1.5px solid ${borderColor}`,
      borderRadius: '12px',
      outline: 'none',
      boxShadow,
      transition: 'border-color 120ms ease, box-shadow 120ms ease',
      cursor: disabled ? 'not-allowed' : 'pointer',
      paddingLeft: s.px,
      paddingRight: '36px',
      appearance: 'none',
      WebkitAppearance: 'none',
      boxSizing: 'border-box'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt.value,
    value: opt.value
  }, opt.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: focused ? '#38B82C' : '#707D70',
      display: 'flex',
      transition: 'color 120ms ease'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: hasError ? '#DC3535' : '#707D70',
      fontFamily: "'Nunito', system-ui, sans-serif",
      fontWeight: 500
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/frequencia_internato/AttendanceScreen.jsx
try { (() => {
const STUDENTS = [{
  id: 1,
  nome: 'Ana Clara Santos',
  presente: true
}, {
  id: 2,
  nome: 'Bruno Oliveira',
  presente: true
}, {
  id: 3,
  nome: 'Carlos Eduardo Mendes',
  presente: false
}, {
  id: 4,
  nome: 'Débora Lima',
  presente: true
}, {
  id: 5,
  nome: 'Eduardo Faria',
  presente: true
}, {
  id: 6,
  nome: 'Fernanda Costa',
  presente: false
}, {
  id: 7,
  nome: 'Gabriel Nascimento',
  presente: true
}, {
  id: 8,
  nome: 'Helena Rodrigues',
  presente: true
}];
const PALETTE = [['#C7EDCB', '#10590A'], ['#E5F0FC', '#1E5DB0'], ['#FFF4DC', '#B07600'], ['#FCEAEA', '#B02828'], ['#BFD0C5', '#0F2118'], ['#9FE0A6', '#10590A']];
const getInitials = n => n.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
const getColor = n => PALETTE[[...n].reduce((a, c) => a + c.charCodeAt(0), 0) % PALETTE.length];

/**
 * AttendanceScreen — mark student presence for a class session.
 *
 * Props:
 *   turma: { id, nome, horario, alunos, presenca }
 *   onBack: () => void
 */
function AttendanceScreen({
  turma,
  onBack
}) {
  const [students, setStudents] = React.useState(STUDENTS);
  const [saved, setSaved] = React.useState(false);
  const presentes = students.filter(s => s.presente).length;
  function toggle(id) {
    setStudents(p => p.map(s => s.id === id ? {
      ...s,
      presente: !s.presente
    } : s));
    setSaved(false);
  }
  function save() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0F2118',
      padding: '12px 16px 18px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15 18l-6-6 6-6",
    stroke: "#72D27E",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Nunito',sans-serif",
      fontSize: 17,
      fontWeight: 800,
      color: '#fff'
    }
  }, turma?.nome || 'Clínica Médica')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(56,184,44,0.2)',
      borderRadius: 9999,
      padding: '3px 12px',
      fontFamily: "'Nunito',sans-serif",
      fontSize: 12,
      fontWeight: 700,
      color: '#72D27E'
    }
  }, "Seg, 30/06/2025"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Nunito',sans-serif",
      fontSize: 12,
      color: '#6B8E72'
    }
  }, presentes, "/", students.length, " presentes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '10px 14px',
      background: '#EBF8EE'
    }
  }, students.map(s => {
    const [bg, fg] = getColor(s.nome);
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        background: '#fff',
        borderRadius: 12,
        padding: '12px 14px',
        marginBottom: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 1px 2px rgba(15,33,24,0.06)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 36,
        borderRadius: '50%',
        background: bg,
        color: fg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Nunito',sans-serif",
        fontWeight: 800,
        fontSize: 12,
        flexShrink: 0
      }
    }, getInitials(s.nome)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Nunito',sans-serif",
        fontSize: 14,
        fontWeight: 600,
        color: '#0F2118'
      }
    }, s.nome)), /*#__PURE__*/React.createElement("div", {
      onClick: () => toggle(s.id),
      style: {
        width: 44,
        height: 26,
        borderRadius: 9999,
        background: s.presente ? '#38B82C' : '#D2D7D2',
        position: 'relative',
        cursor: 'pointer',
        transition: 'background 200ms',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 3,
        left: s.presente ? 21 : 3,
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: '#fff',
        transition: 'left 200ms ease',
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px 12px',
      background: '#fff',
      boxShadow: '0 -4px 8px rgba(15,33,24,0.08)',
      flexShrink: 0
    }
  }, saved && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: "'Nunito',sans-serif",
      fontSize: 13,
      color: '#38B82C',
      fontWeight: 700,
      marginBottom: 8
    }
  }, "\u2713 Presen\xE7a salva com sucesso!"), /*#__PURE__*/React.createElement("button", {
    onClick: save,
    style: {
      width: '100%',
      height: 48,
      background: '#38B82C',
      border: 'none',
      borderRadius: 9999,
      color: '#fff',
      fontFamily: "'Nunito',sans-serif",
      fontSize: 16,
      fontWeight: 800,
      cursor: 'pointer'
    }
  }, "Salvar Presen\xE7as (", presentes, "/", students.length, ")")));
}
Object.assign(__ds_scope, { AttendanceScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/frequencia_internato/AttendanceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/frequencia_internato/DashboardScreen.jsx
try { (() => {
const TURMAS = [{
  id: 1,
  nome: 'Clínica Médica',
  horario: '08:00 – 12:00',
  alunos: 24,
  presenca: 87
}, {
  id: 2,
  nome: 'Cirurgia Geral',
  horario: '13:00 – 17:00',
  alunos: 18,
  presenca: 92
}, {
  id: 3,
  nome: 'Pediatria',
  horario: '07:30 – 11:30',
  alunos: 22,
  presenca: 75
}];

/**
 * DashboardScreen — home tab of Frequência Internato
 *
 * Props:
 *   onTurmaClick: (turma: Turma) => void  — navigate to attendance marking
 */
function DashboardScreen({
  onTurmaClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      background: '#EBF8EE'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0F2118',
      padding: '14px 20px 24px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Nunito',sans-serif",
      fontSize: 12,
      fontWeight: 600,
      color: '#72D27E'
    }
  }, "Bom dia \uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Nunito',sans-serif",
      fontSize: 20,
      fontWeight: 800,
      color: '#fff'
    }
  }, "Dr. Carlos Silva")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      background: '#38B82C',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Nunito',sans-serif",
      fontWeight: 900,
      color: '#fff',
      fontSize: 16
    }
  }, "CS")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Nunito',sans-serif",
      fontSize: 12,
      color: '#6B8E72'
    }
  }, "Segunda-feira, 30 de junho de 2025")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      marginTop: -16,
      display: 'flex',
      gap: 10,
      flexShrink: 0
    }
  }, [{
    val: '82%',
    label: 'Presença geral',
    color: '#38B82C',
    flex: 1.3
  }, {
    val: '3',
    label: 'Aulas hoje',
    color: '#0F2118',
    flex: 1
  }, {
    val: '4',
    label: 'Em risco',
    color: '#DC3535',
    flex: 1
  }].map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      flex: s.flex,
      background: '#fff',
      borderRadius: 14,
      padding: '13px 14px',
      boxShadow: '0 4px 8px rgba(15,33,24,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Nunito',sans-serif",
      fontSize: 28,
      fontWeight: 900,
      color: s.color,
      lineHeight: 1
    }
  }, s.val), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Nunito',sans-serif",
      fontSize: 11,
      color: '#707D70',
      fontWeight: 600,
      marginTop: 3
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Nunito',sans-serif",
      fontSize: 14,
      fontWeight: 800,
      color: '#0F2118',
      marginBottom: 10
    }
  }, "Turmas de Hoje"), TURMAS.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    onClick: () => onTurmaClick?.(t),
    style: {
      background: '#fff',
      borderRadius: 14,
      padding: '14px 16px',
      marginBottom: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 2px 4px rgba(15,33,24,0.08)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Nunito',sans-serif",
      fontSize: 15,
      fontWeight: 700,
      color: '#0F2118'
    }
  }, t.nome), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Nunito',sans-serif",
      fontSize: 12,
      color: '#707D70',
      marginTop: 2
    }
  }, t.horario, " \xB7 ", t.alunos, " alunos")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Nunito',sans-serif",
      fontSize: 18,
      fontWeight: 900,
      color: t.presenca >= 80 ? '#38B82C' : '#DC3535'
    }
  }, t.presenca, "%")))));
}
Object.assign(__ds_scope, { DashboardScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/frequencia_internato/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/frequencia_internato/LoginScreen.jsx
try { (() => {
/**
 * LoginScreen — Frequência Internato
 *
 * Usage in a React app:
 *   <LoginScreen onLogin={() => navigate('/dashboard')} />
 *
 * Props:
 *   onLogin: () => void  — called after successful login simulation
 */
function LoginScreen({
  onLogin
}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [busy, setBusy] = React.useState(false);
  const [error, setError] = React.useState('');
  function submit() {
    if (!email || !password) {
      setError('Preencha todos os campos');
      return;
    }
    setBusy(true);
    setError('');
    setTimeout(() => {
      setBusy(false);
      onLogin?.();
    }, 900);
  }
  const inputBase = {
    width: '100%',
    height: 46,
    border: '1.5px solid #D2D7D2',
    borderRadius: 12,
    padding: '0 14px',
    fontSize: 15,
    fontFamily: "'Nunito', system-ui, sans-serif",
    fontWeight: 500,
    color: '#0F2118',
    outline: 'none',
    boxSizing: 'border-box',
    background: '#fff'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: '#EBF8EE',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '28px 24px',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/icon_1024.png",
    alt: "Cactus",
    style: {
      width: 80,
      height: 80,
      borderRadius: 18,
      display: 'block',
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Nunito',sans-serif",
      fontSize: 22,
      fontWeight: 800,
      color: '#0F2118',
      textAlign: 'center',
      lineHeight: 1.2,
      margin: 0
    }
  }, "Frequ\xEAncia Internato"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Nunito',sans-serif",
      fontSize: 13,
      color: '#707D70',
      textAlign: 'center',
      marginTop: 5,
      marginBottom: 32
    }
  }, "Controle de presen\xE7a no internato m\xE9dico"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      background: '#fff',
      borderRadius: 20,
      padding: 24,
      boxShadow: '0 8px 20px rgba(15,33,24,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 600,
      color: '#0F2118',
      fontFamily: "'Nunito',sans-serif",
      marginBottom: 5
    }
  }, "E-mail"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "seu@email.com",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      setError('');
    },
    style: inputBase
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: error ? 8 : 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 13,
      fontWeight: 600,
      color: '#0F2118',
      fontFamily: "'Nunito',sans-serif",
      marginBottom: 5
    }
  }, "Senha"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    value: password,
    onChange: e => {
      setPassword(e.target.value);
      setError('');
    },
    onKeyDown: e => e.key === 'Enter' && submit(),
    style: {
      ...inputBase,
      borderColor: error ? '#DC3535' : '#D2D7D2'
    }
  })), error && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: '#DC3535',
      fontFamily: "'Nunito',sans-serif",
      marginBottom: 14
    }
  }, error), /*#__PURE__*/React.createElement("button", {
    onClick: submit,
    disabled: busy,
    style: {
      width: '100%',
      height: 48,
      background: '#38B82C',
      border: 'none',
      borderRadius: 9999,
      color: '#fff',
      fontSize: 16,
      fontWeight: 800,
      fontFamily: "'Nunito',sans-serif",
      cursor: 'pointer',
      marginBottom: 14,
      opacity: busy ? 0.8 : 1
    }
  }, busy ? 'Entrando...' : 'Entrar'), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "'Nunito',sans-serif",
      fontSize: 13,
      color: '#38B82C',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "Esqueci minha senha"))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontFamily: "'Nunito',sans-serif",
      fontSize: 11,
      color: '#929E92',
      textAlign: 'center'
    }
  }, "Cactus Company \xA9 2025"));
}
Object.assign(__ds_scope, { LoginScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/frequencia_internato/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/frequencia_internato/StudentListScreen.jsx
try { (() => {
const STUDENTS = [{
  id: 1,
  nome: 'Ana Clara Santos',
  turma: 'Turma A',
  presenca: 92,
  risco: false
}, {
  id: 2,
  nome: 'Bruno Oliveira',
  turma: 'Turma A',
  presenca: 74,
  risco: true
}, {
  id: 3,
  nome: 'Carlos Eduardo Mendes',
  turma: 'Turma B',
  presenca: 85,
  risco: false
}, {
  id: 4,
  nome: 'Débora Lima',
  turma: 'Turma B',
  presenca: 65,
  risco: true
}, {
  id: 5,
  nome: 'Eduardo Faria',
  turma: 'Turma A',
  presenca: 96,
  risco: false
}, {
  id: 6,
  nome: 'Fernanda Costa',
  turma: 'Turma C',
  presenca: 71,
  risco: true
}, {
  id: 7,
  nome: 'Gabriel Nascimento',
  turma: 'Turma C',
  presenca: 88,
  risco: false
}, {
  id: 8,
  nome: 'Helena Rodrigues',
  turma: 'Turma B',
  presenca: 55,
  risco: true
}];
const PALETTE = [['#C7EDCB', '#10590A'], ['#E5F0FC', '#1E5DB0'], ['#FFF4DC', '#B07600'], ['#FCEAEA', '#B02828'], ['#BFD0C5', '#0F2118'], ['#9FE0A6', '#10590A']];
const getInitials = n => n.trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase();
const getColor = n => PALETTE[[...n].reduce((a, c) => a + c.charCodeAt(0), 0) % PALETTE.length];

/**
 * StudentListScreen — searchable, filterable student roster.
 * No props needed — self-contained with demo data.
 */
function StudentListScreen() {
  const [search, setSearch] = React.useState('');
  const [filter, setFilter] = React.useState('todos');
  const filtered = STUDENTS.filter(s => {
    const ms = s.nome.toLowerCase().includes(search.toLowerCase());
    const mf = filter === 'todos' || filter === 'risco' && s.risco || filter === 'regular' && !s.risco;
    return ms && mf;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#EBF8EE'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0F2118',
      padding: '14px 16px 16px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Nunito',sans-serif",
      fontSize: 20,
      fontWeight: 800,
      color: '#fff',
      marginBottom: 10
    }
  }, "Alunos"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: 'absolute',
      left: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'rgba(255,255,255,0.5)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.35-4.35",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: e => setSearch(e.target.value),
    placeholder: "Buscar aluno...",
    style: {
      width: '100%',
      height: 40,
      background: 'rgba(255,255,255,0.12)',
      border: '1.5px solid rgba(255,255,255,0.2)',
      borderRadius: 12,
      outline: 'none',
      fontFamily: "'Nunito',sans-serif",
      fontSize: 14,
      color: '#fff',
      paddingLeft: 36,
      paddingRight: 14,
      boxSizing: 'border-box'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderBottom: '1px solid #EAECEA',
      display: 'flex',
      flexShrink: 0
    }
  }, [['todos', 'Todos'], ['risco', 'Em risco'], ['regular', 'Regulares']].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setFilter(v),
    style: {
      flex: 1,
      padding: '10px 0',
      border: 'none',
      background: 'none',
      fontFamily: "'Nunito',sans-serif",
      fontSize: 13,
      fontWeight: 700,
      color: filter === v ? '#38B82C' : '#929E92',
      borderBottom: `2px solid ${filter === v ? '#38B82C' : 'transparent'}`,
      cursor: 'pointer'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '10px 14px'
    }
  }, filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px 20px',
      fontFamily: "'Nunito',sans-serif",
      fontSize: 14,
      color: '#929E92'
    }
  }, "Nenhum aluno encontrado. Ajuste os filtros."), filtered.map(s => {
    const [bg, fg] = getColor(s.nome);
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        background: '#fff',
        borderRadius: 12,
        padding: '12px 14px',
        marginBottom: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        boxShadow: '0 1px 2px rgba(15,33,24,0.06)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: bg,
        color: fg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Nunito',sans-serif",
        fontWeight: 800,
        fontSize: 13,
        flexShrink: 0
      }
    }, getInitials(s.nome)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Nunito',sans-serif",
        fontSize: 14,
        fontWeight: 700,
        color: '#0F2118',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, s.nome), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Nunito',sans-serif",
        fontSize: 12,
        color: '#929E92'
      }
    }, s.turma)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "'Nunito',sans-serif",
        fontSize: 17,
        fontWeight: 900,
        color: s.presenca >= 75 ? '#38B82C' : '#DC3535'
      }
    }, s.presenca, "%"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: 9999,
        background: s.risco ? '#FCEAEA' : '#EAF8EC',
        color: s.risco ? '#B02828' : '#248B1A',
        fontFamily: "'Nunito',sans-serif",
        fontSize: 10,
        fontWeight: 700
      }
    }, s.risco ? 'Em risco' : 'Regular')));
  })));
}
Object.assign(__ds_scope, { StudentListScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/frequencia_internato/StudentListScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.AttendanceScreen = __ds_scope.AttendanceScreen;

__ds_ns.DashboardScreen = __ds_scope.DashboardScreen;

__ds_ns.LoginScreen = __ds_scope.LoginScreen;

__ds_ns.StudentListScreen = __ds_scope.StudentListScreen;

})();
