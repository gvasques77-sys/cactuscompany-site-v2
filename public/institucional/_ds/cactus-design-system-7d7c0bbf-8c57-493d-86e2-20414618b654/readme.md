# Cactus Design System

> Design system for **Cactus Company** and the **Frequência Internato** mobile application.

## Company Context

**Cactus Company** is a young Brazilian startup building digital products for the medical education sector. Their flagship product, **Frequência Internato**, is a mobile attendance-tracking app targeting private medical universities in Brazil that lack robust control over internship (internato) student attendance.

The cactus symbol represents determination, resilience, and persistence in challenging conditions — fitting for both the startup journey and the demanding medical internship experience.

**Tagline:** *Controle de presença no internato médico*

## Sources

This design system was derived from the following uploaded brand assets. No external codebase or Figma file was provided.

- `assets/icon_1024.png` — 1024×1024 full-resolution app icon
- `assets/icon_512.png` — 512×512 app icon
- `assets/feature_1024x500.png` — Feature graphic: full wordmark + tagline

## Products

| Product | Type | Description |
|---|---|---|
| Frequência Internato | Mobile App (iOS + Android) | Attendance control for medical internship students |

## File Index

```
styles.css                     Root stylesheet — import this in consuming projects
tokens/
  typography.css               Google Fonts import + type scale, weight, leading tokens
  colors.css                   Full color system (brand, neutral, semantic, attendance)
  spacing.css                  Spacing scale + border radius tokens
  effects.css                  Shadows, motion, blur tokens
  base.css                     Base HTML element resets
components/core/
  Button.jsx / .d.ts           CTA element (6 variants, 4 sizes)
  Badge.jsx  / .d.ts           Status label incl. presente/ausente/justificado
  Input.jsx  / .d.ts           Text field with label, hint, error
  Card.jsx   / .d.ts           Content container (5 variants)
  Avatar.jsx / .d.ts           Initials avatar with color hashing
  Checkbox.jsx / .d.ts         Attendance-marking checkbox
  Select.jsx / .d.ts           Native-styled dropdown
  core.card.html               Component showcase card
guidelines/                    Foundation specimen cards (visible in Design System tab)
ui_kits/frequencia_internato/
  index.html                   Full interactive app prototype (login → dashboard → attendance)
  LoginScreen.jsx              Login screen component
  DashboardScreen.jsx          Home/dashboard component
  AttendanceScreen.jsx         Attendance marking component
  StudentListScreen.jsx        Student list component
assets/
  icon_1024.png                App icon (1024px)
  icon_512.png                 App icon (512px)
  feature_1024x500.png         Feature graphic / full wordmark
```

---

## CONTENT FUNDAMENTALS

### Language & Voice
- **Language**: Brazilian Portuguese throughout all UI copy
- **Register**: Informal ("você"), warm, direct — like a helpful colleague in the medical faculty
- **Tone**: Encouraging yet professional; a startup that respects the rigor of medical education
- **Person**: Second person ("Você tem 3 ausências este mês"), never first
- **Casing**: Sentence case for all UI labels. Title case for product names only ("Frequência Internato")
- **Emoji**: Not used in the UI — the medical context demands visual cleanliness
- **Length**: Short, action-oriented. "Marcar presença" over "Clique aqui para registrar a presença"

### Copy Patterns

| Context | Copy |
|---|---|
| Primary CTA | "Entrar", "Salvar", "Marcar Presença", "Confirmar" |
| Destructive | "Remover", "Cancelar" |
| Success | "Presença registrada com sucesso!" |
| Error | "Não foi possível salvar. Tente novamente." |
| Empty state | "Nenhum aluno encontrado. Ajuste os filtros." |
| Loading | "Carregando alunos..." |
| Attendance status | "Presente", "Ausente", "Justificado" |

---

## VISUAL FOUNDATIONS

### Colors
Two brand anchors: **Cactus Green** `#38B82C` for primary actions and success states, and **Forest Dark** `#0F2118` for the logomark's "C", navigation bars, and high-emphasis text. App backgrounds use a very light mint `#EBF8EE`. All surfaces maintain the brand's chromatic green family.

### Typography
**Nunito** is the system typeface — rounded terminals, approachable geometry, excellent mobile readability. The wordmark "Frequência Internato" uses ExtraBold (800); UI labels use Bold (700); body copy uses Regular (400). *⚠ Substitution: if you have the original font files, please provide them.*

### Spacing
4px base grid. Component-level padding: 8–24px range. Layout-level spacing: 16–48px range.

### Backgrounds
Very light mint `#EBF8EE` for app-level backgrounds. White `#FFFFFF` for cards and surfaces. The mint tint keeps all backgrounds in the brand's chromatic family without being clinical.

### Corner Radius
- **Buttons**: pill-shaped (`border-radius: 9999px`)
- **Cards**: 16px
- **Inputs / Selects**: 12px
- **Badges**: pill-shaped (`9999px`)
- **Avatars**: circular (`50%`)
- **Modal sheets**: 20–28px

### Shadows
Forest-dark-tinted shadows `rgba(15,33,24,…)` give a chromatic depth effect. Elevation scale from `shadow-xs` (near-flat) to `shadow-2xl` (modals/drawers).

### Animations
- **Color transitions**: 120ms `ease-out`
- **Hover lift**: `translateY(-1px)` with spring easing `cubic-bezier(0.34,1.56,0.64,1)`
- **Press state**: `scale(0.97)` on active
- **Entrance**: 200ms spring for cards/modals
- No decorative loops or heavy motion — medical UI demands focus

### Hover & Press States
| Element | Hover | Press |
|---|---|---|
| Button | lift + darken one step | scale(0.97) + darken |
| Card | lift (-2px) + shadow-lg | — |
| Row | mint background fill | — |
| Checkbox | border turns green | instant fill |

### Cards
White background + `shadow-sm` or `shadow-md` + 16px radius. "Tinted" variant uses `cactus-50` for highlighted content. Dark variant uses `forest-900` for inverse contexts.

### Iconography
No proprietary icon set identified. **Recommended: [Lucide Icons](https://lucide.dev/)** — stroke-based, 1.5px weight, rounded caps — harmonizes with Nunito's rounded character.

Load via CDN:
```html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
```

### Logo Assets
The logomark is a composite of:
1. A dark "C" letterform (forest-900) — the company initial
2. A bright cactus shape (cactus-500) centered inside — the brand icon
3. Cactus arms styled as bar-chart columns — a subtle data/analytics nod

| Asset | Path | Use |
|---|---|---|
| App icon 1024px | `assets/icon_1024.png` | App stores, splash screens |
| App icon 512px | `assets/icon_512.png` | General use |
| Feature graphic | `assets/feature_1024x500.png` | Full wordmark + tagline |

---

## SKILL.md

See [`SKILL.md`](SKILL.md) for Claude Code integration.
