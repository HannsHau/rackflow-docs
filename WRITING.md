# Writing RackFlow user documentation

Audience: warehouse engineers and simulation professionals using RackFlow in production.  
Published site: `docs/src/content/docs/` (Starlight).  
Implementation reference (not user-facing): `frontend/docs/`.

---

## Rules

### 1. Document only what ships

- State behavior that exists in the app today.
- Do not publish pages, sections, or links for features that are not documented yet.
- Do not use: “coming soon”, “being expanded”, “will be added”, “planned”, “currently”, “for now”, or roadmap language on user pages.

If a topic is not ready, omit it. Add it when the page is written.

### 2. No meta-commentary about the docs

- Do not describe whether a section is complete, stubbed, or outdated.
- Do not tell readers to check back later.
- The docs site is the product manual, not a project status board.

Use `docs/plans/` for internal rollout plans.

### 3. Be direct and precise

- Prefer tables for shortcuts, inputs, and modes.
- Use numbered steps for procedures.
- Name keys explicitly: **Delete**, **⌘/Ctrl+Z**, **Shift+click**.
- Give units where relevant: **0.1 m**, **1.0 m**.
- One idea per sentence; no marketing filler (“powerful”, “seamless”, “intuitive”).
- No subjective labels: “(recommended)”, “preferred”, “best”, “easiest”. State what each method does; let the reader choose.

### 4. One topic per page

- Cover only what the page title promises.
- Do not append generic reminders (save, sign-in, simulation mode) unless they are specific to that feature or prevent a common mistake on that page.
- Cross-link to another reference page instead of repeating shared workflow (e.g. link to a save/how-to page when one exists; do not add a **Save** section to every tool page).

### 5. Diátaxis (content types)

| Type | Location | Write as |
| ---- | -------- | -------- |
| **Tutorial** | `tutorials/` | Goal-oriented sequence; one path to a first success |
| **How-to** | `editor/how-to/` (when added) | Single task, minimal context |
| **Reference** | `reference/`, `editor/` | Facts: parameters, keys, constraints, edge cases |
| **Explanation** | Sparingly | Why a design choice matters to the user — only when it prevents mistakes |

Do not mix reference tables into tutorials, or tutorial steps into reference pages.

### 6. Links must deliver

- Link only to pages that contain the answer.
- Anchor text must match what the target page covers.
- Do not link to a hub page when a specific reference page exists.

### 7. Platform and mode gates

Always state when behavior applies:

- **Editor mode** vs **simulation mode**
- Shortcuts disabled in text fields
- **⌘** on macOS, **Ctrl** on Windows/Linux (write both once per page or table footnote)

### 8. Accuracy over completeness

- Wrong docs are worse than missing docs.
- When unsure, verify in `frontend/src/editor/` or the running app before publishing.
- If behavior differs between toolbar and keyboard (e.g. delete primary vs delete all selected), document both explicitly.

### 9. Assets

- Screenshots and GIFs show the current UI.
- Replace images when the UI changes; do not leave obsolete chrome in place.
- Store under `docs/src/assets/images/`.

### 10. What stays out of user docs

- Module names, file paths, FSM diagrams, store names
- Internal plans (`docs/plans/`)
- Developer setup (`frontend/docs/editor-interaction.md`)

---

## Page checklist (before merge)

- [ ] Every claim matches the app
- [ ] No future tense or roadmap wording
- [ ] No links to empty or placeholder sections
- [ ] Editor vs simulation gates stated where needed
- [ ] No subjective labels or off-topic sections (save, etc.)
- [ ] `npm run build` in `docs/` passes
