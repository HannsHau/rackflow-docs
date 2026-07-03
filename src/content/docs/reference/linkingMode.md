---
title: Linking Mode
description: Connect elements in material flow direction
---

![Link icon](../../../assets/icons/link_icon.png)

Linking Mode connects conveyors, creators, destroyers, SRMs, and racks so loading units follow the material flow. Arrows show direction from source to target.

## Activate

- Click the **Link** icon in the toolbar — no prior selection required.
- Press **L** — enters Linking Mode with the currently selected device as the first source (one device must be selected).

## Connect devices

1. Enter Linking Mode.
2. If no source is set yet, click the **source** device (where flow starts).
3. Click the **target** device (where flow goes next).
4. Repeat step 3 to chain more targets from the same source, or click a new source and continue.

### Stale selection

If a device was still selected when you entered Linking Mode, it becomes the source automatically. The next click creates a link from that device — not from the device you intended if you forgot the old selection.

Check the active source before clicking a target. To set a different source, click that device first.

### Undo a link

Each link is one edit. **⌘/Ctrl+Z** removes the last link added.

## Exit

- Press **Escape**, or
- Click the Link icon again, or
- Switch to another toolbar tool.

## Notes

- Editor mode only — linking is disabled while simulation is running.
- Deleting a device does not remove its links.
