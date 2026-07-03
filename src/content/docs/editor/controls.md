---
title: Editor controls
description: Camera, toolbar modes, and editor vs simulation
---

RackFlow opens in **editor mode** after sign-in. Use it to build and edit the layout. Switch to **simulation mode** to run the model.

**⌘** = macOS · **Ctrl** = Windows/Linux

## Editor vs simulation mode

| | Editor mode | Simulation mode |
| --- | --- | --- |
| Place conveyors and racks | Yes | No |
| Select, move, delete | Yes | No |
| Linking mode | Yes | No |
| Link arrows on canvas | Shown | Hidden |
| Loading units and statistics | No | Yes |

Toggle simulation with the switch in the simulation panel (lower right).

## Camera

| Input | Action |
| ----- | ------ |
| Right drag | Rotate view |
| Middle drag | Pan |
| Shift + right drag | Pan |
| Space + right drag | Pan |
| Space + left drag | Pan |
| Scroll | Zoom |
| Left drag (idle) | Select or move devices — see [Selection](/editor/selection/) |

While **Space** is held, the left button selection does not respond.

Camera controls work in editor and simulation mode.

## Toolbar modes

There is no separate “select tool”. When no placement or linking tool is active, the editor is **idle** — left-click selects and moves devices.

| Toolbar action | Effect |
| -------------- | ------ |
| Conveyor types | Place [conveyors](/reference/conveyor/) |
| Rack | Place [racks](/reference/rack/) |
| Link | [Linking Mode](/reference/linkingmode/) |
| Delete | [Delete Mode](/reference/deletemode/) |

Exit placement or linking with **Escape**, another toolbar tool, or the same link/placement control again.

## Device parameters

**Right-tap** a device (press and release without dragging) to open its parameter panel.


## Escape

**Escape** exits placement and linking, clears selection, closes parameter panel.

## See also

- [Selection](/editor/selection/)
- [Move](/editor/move/)
- [Edit history](/editor/edit-history/)
- [Delete Mode](/reference/deletemode/)
- [Linking Mode](/reference/linkingmode/)
