---
title: Move
description: Drag and keyboard nudge for selected devices
---

Move selected conveyors and racks in **idle** editor mode. Select devices first — see [Selection](/editor/selection/).

**⌘** = macOS · **Ctrl** = Windows/Linux

## Mouse drag

1. Select one or more devices.
2. Press on a selected device, or inside the [group outline](/editor/selection/#multi-select-group) when several are selected.
3. Drag on the floor grid.

| Property | Behavior |
| -------- | -------- |
| Floor position (X, Z) | Snaps to the grid while dragging |
| Height (Y) | Unchanged during drag |
| Multi-select | All selected devices move together |
| Release | One [undo](/editor/edit-history/) step for the whole drag |

Drag threshold is 4 px — shorter movement counts as a click, not a move.

## Keyboard — floor

Arrow keys move the selection on the floor. Direction follows the camera view (forward, back, strafe left, strafe right), snapped to world X or Z.

| Input | Step |
| ----- | ---- |
| Arrow keys | **0.1 m** |
| Shift + arrow keys | **1.0 m** |

Hold a key to repeat; release to commit one undo step.

## Keyboard — vertical

| Input | Step |
| ----- | ---- |
| **⌘/Ctrl + ↑** | Raise **0.1 m** on Y |
| **⌘/Ctrl + ↓** | Lower **0.1 m** on Y |
| **⌘/Ctrl + Shift + ↑ / ↓** | **1.0 m** |

**⌘/Ctrl + left / right** does not move devices.

Conveyors keep their Y after a vertical nudge. Racks also move on Y.

## When move is disabled

Same gates as [selection](/editor/selection/#when-selection-is-disabled): editor mode only, not during placement, linking, simulation, or while **Space** is held.

Shortcuts do not run when focus is in a text field.

## See also

- [Selection](/editor/selection/)
- [Edit history](/editor/edit-history/) — undo a move
