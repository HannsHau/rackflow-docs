---
title: Selection
description: Click, shift-select, screen marquee, and multi-select
---

Selection works in **idle** editor mode only. See [Editor controls](/editor/controls/) for mode and camera gates.

**⌘** = macOS · **Ctrl** = Windows/Linux

## Single click

| Action | Result |
| ------ | ------ |
| Click a device | Select that device; previous selection cleared |
| Click empty canvas | Clear selection |
| Click an already selected device | Selection unchanged |

## Shift+click

| Action | Result |
| ------ | ------ |
| Shift+click unselected device | Add to selection |
| Shift+click selected device | Remove from selection |

## Screen marquee

Drag on **empty** canvas (no device under the pointer at press) to draw a dashed blue rectangle.

| Phase | Behavior |
| ----- | -------- |
| While dragging | Blue highlight on devices inside the box |
| Release | Selection set to highlighted devices |
| Shift held | Add highlighted devices to existing selection |
| Release with empty box | Clear selection (replace mode) |
| Escape | Cancel box; selection unchanged |

The box uses **screen space**, not the floor grid. Devices at the same floor position but different heights can be selected independently — only devices the box covers on screen are included.

## Multi-select group

With two or more devices selected:

- Each device shows a blue floor highlight.
- A dashed blue outline encloses the group on the floor.
- Drag **inside** the group outline to move all selected devices together — see [Move](/editor/move/).

## Parameters panel

| Selection | Panel |
| --------- | ----- |
| One device | Full parameter panel ([right-tap](/editor/controls/#device-parameters) or select then edit) |
| Multiple devices | Summary **Attributes** panel (no per-device fields) |

## When selection is disabled

| Condition | Selection |
| --------- | --------- |
| Simulation mode | Off |
| Placement tool active (conveyor or rack) | Off |
| Linking mode | Off |
| **Space** held (camera pan) | Off |

## See also

- [Editor controls](/editor/controls/)
- [Delete Mode](/reference/deletemode/) — delete all selected with **Delete** / **Backspace**
- [Move](/editor/move/)
- [Edit history](/editor/edit-history/)
