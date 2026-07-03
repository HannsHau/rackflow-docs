---
title: Edit history
description: Undo, redo, copy, paste, and delete
---

Edit history and clipboard shortcuts apply in **editor mode** only, not during simulation, and not when focus is in a text field.

**⌘** = macOS · **Ctrl** = Windows/Linux

## Undo and redo

| Input | Action |
| ----- | ------ |
| **⌘/Ctrl + Z** | Undo |
| **⌘/Ctrl + Shift + Z** | Redo |

Undo and redo buttons sit in the top toolbar next to the file menu. They are disabled in simulation mode.

Each undo step reverses one edit action (see table below).

## What one undo step covers

| Edit | One undo step |
| ---- | ------------- |
| Mouse [move](/editor/move/) | Whole drag (pointer up or key release) |
| Keyboard move | Whole key-hold gesture |
| [Delete](/reference/deletemode/) | All devices removed in that delete |
| Add conveyor or rack | That placement |
| [Link](/reference/linkingmode/) | That link |
| Parameter panel | All field changes since the panel opened, when the panel closes |

Parameter values update on the canvas while you type. Closing the panel (Close, **Escape**, or deselect) records one undo step for the session.

Opening a new model clears undo and redo history.

## Copy and paste

| Input | Action |
| ----- | ------ |
| **⌘/Ctrl + C** | Copy selected conveyors and racks |
| **⌘/Ctrl + V** | Paste at the last grid cell under the pointer |

Copy includes [links](/reference/linkingmode/) whose source and target are both in the selection. Pasted devices get new IDs. Paste again at the same cursor cell to stack copies.

Move the pointer on the canvas before pasting to choose the target cell.

## Delete

| Method | Scope |
| ------ | ----- |
| **Delete** or **Backspace** | All selected devices |
| Toolbar **Delete** icon | Primary selected device only |

See [Delete Mode](/reference/deletemode/) for link cleanup notes.

## Persist to cloud

Undo and redo affect the open session on the canvas only. Use the save icon (file menu) to write changes to your cloud model.

## See also

- [Move](/editor/move/)
- [Selection](/editor/selection/)
- [Editor controls](/editor/controls/)
