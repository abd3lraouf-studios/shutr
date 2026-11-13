# Using Shutr

On Linux, use the [Linux setup and capture guide](linux.md).

Shutr lives in the menu bar, or the tray on Windows. Every capture is in its menu, and Settings → Hotkeys gives any of them a shortcut.

The first launch walks through Screen Recording access, the capture shortcuts, and the look. Settings → General changes the appearance later: System, Light, or Dark.

## Capturing

- **Capture Area** (⇧⌘2): drag a rectangle. Hold `Space` while dragging to move it, or `Option` to grow it from the center. `Space` before dragging switches to picking a window. `Esc` cancels.
- Shutr’s default selector freezes the screen when you press the hotkey so menus and hover states stay visible. To use live selection, turn off **Freeze the screen while selecting**. On macOS you can also choose **Settings → Capture → Selection → macOS** to use the system selector.
- With the screen frozen, press `L` for the pixel magnifier and hold `Z` for 10× zoom. Hold Cmd on macOS or Ctrl on Windows and X11 to slow the pointer. WASD and the arrow keys nudge it, and Shift keeps the selection square.
- **Capture Screen** (⇧⌘1) takes the display under the pointer, or every display in one image with Settings → Capture → All displays in one image. **Delayed Screenshot** waits a few seconds first (3 by default, set in Settings → Capture).
- **Capture Window**: click a window. `Tab` picks the one behind it. Settings → Capture chooses what goes behind the window: wallpaper, transparency, a color, or nothing but the window.
- **Scrolling Capture**: select the area, then keep your hands off the mouse while Shutr scrolls and stitches. `Esc` stops and keeps what was captured. It needs Accessibility access. If an app ignores it, turn on Settings → Capture → Scroll by hand and scroll yourself.
- **Recognize Text or QR** (⌃⌥⌘O): select an area and its text or QR code is copied.
- **Repeat Area Capture** takes the last area again. It remembers only areas selected with Shutr's selection. **Reopen Last Edit** brings back the last editor you closed, with its annotations still editable.

To capture with ⇧⌘3 and ⇧⌘4 instead, pick Instead of macOS on first launch, or Use ⇧⌘3 and ⇧⌘4 in Settings → Hotkeys. Shutr turns those two shortcuts off in macOS; ⇧⌘5 still opens the macOS screenshot toolbar. To get them back, turn them on in System Settings → Keyboard → Keyboard Shortcuts → Screenshots.

When a shortcut you give Shutr is also a macOS shortcut, macOS gets it first. Settings → Hotkeys marks that shortcut in red, names the macOS shortcut and where it is, and Open Settings takes you to Keyboard Shortcuts to turn it off.

A Hyper key works in shortcuts: if Raycast, Karabiner, or a similar app makes Caps Lock hold ⌃⌥⇧⌘, hold it and press a key while recording. Shutr shows those four as ✦. To remove a shortcut, press `Esc` while recording or click the × that appears beside it.

## After a capture

In Settings → General → After capture, choose **Thumbnail**, **Editor**, or **None** under **Show capture**. You can independently copy or save each capture. Drag the thumbnail's top grip to move the card, or drag the image into another app to drop the file there. On macOS the card closes when the file drag starts. Click **Edit** to open the editor, or use the keyboard button to enable the thumbnail's shortcuts.

When cards overlap, click the stack count to bring another capture forward. The menu bar’s **Thumbnails** submenu has **Focus Latest Thumbnail** and **Close All Thumbnails**. **Recover Last Capture** opens the most recent original. You can assign shortcuts to Focus and Recover in Settings → Hotkeys. Recover keeps one capture until Shutr quits, including after a thumbnail closes.

In the editor, `Esc` copies and closes, `⌘C` does the same, and `⇧⌘C` copies and keeps the editor open. `⌘S` saves to the configured folder, which starts out as the Desktop. **Save Image As** uses the filename and format you choose (`.png`, `.jpg`, or `.jpeg`). Later saves update that file. The File name setting supports `%Y`, `%m`, `%d`, `%H`, `%M`, and `%S` for the date and time.

## Editing

Each tool has a letter: `V` select and crop, `A` arrow, `T` text, `R` rectangle, `O` oval, `L` line, `D` pen, `H` highlighter, `C` counter, `B` blur and erase, `S` spotlight, `M` magnifier.

- `Shift` straightens lines and makes squares and circles. `Option` draws from the center. Holding `⌘` while drawing an arrow points it back at where you started. On Windows, `Alt` points the arrow back and `Ctrl` draws it from the center.
- Annotations can extend the canvas up to 6,000 points per side, within the export size limit. The new area takes the image's background color, or stays transparent around a window capture.
- Zoom with the scroll wheel, a pinch, `⌘+` and `⌘-`. `⌘1` fits the image, `⌘0` shows it at 100%.
- The editor opens with the select tool. With it, drag to select an area: `Enter` crops to it, `A` trims it to its content, and `Q` or `W` zooms in on its corners for a pixel-exact edge.
- With the select tool, Cmd-click on macOS or Ctrl-click on Windows and Linux to select the bounds of the connected color region around a pixel.
- With no area selected, `Enter` copies the image and keeps the editor open.
- Use **Edit → Rotate Clockwise** or **Rotate Counterclockwise** to rotate the image, crop, and annotations together. Annotations stay editable.
- Use **Previous Edit** and **Next Edit** in the editor’s Edit menu or the tray’s **Recent Edits** submenu to revisit recent captures, including copy-only and save-only screenshots. Shutr keeps up to eight documents with editable annotations until it quits.
- To insert date or time tokens into the filename template, choose **Settings → General → Insert Date Field**. The preview shows how Shutr names the next save.
- Settings → Editor sets the tool the editor opens with, what `Enter` does, whether to go back to the select tool after drawing, and which tools and readouts the toolbar shows.
- `K` adds a backdrop. Under Image, Wallpaper puts the screenshot on your current desktop picture. `P` switches the units between points and pixels.

## Measuring and colors

- Hold `1` to measure vertically, or `2` horizontally, between the nearest edges around the pointer. Hold both to see an element's width and height at once. Click to keep a measurement on the image.
- Select a saved measurement and choose **Edit → Convert Ruler to Double Arrow** to turn it into an editable arrow.
- `Tab` copies the color under the pointer, and `⇧Tab` the color of the text under it. With an area selected, `C` copies its average color. Settings → Editor picks the color format.

## Pins

`⌘P` pins the screenshot above other windows on its current display. Scroll or pinch to resize a pin, and right-click it for opacity and click-through. A click-through pin lets clicks pass to whatever is under it. Hold `Option` to grab it again or turn click-through off. Close All Pins in the menu bar removes every pin.

## S3 sharing

Install and configure the AWS CLI, then open **Settings → Advanced → S3 sharing**. Enter the bucket and signing region. For an S3-compatible provider, enter its HTTPS endpoint. For a named AWS CLI profile, enter the profile name. Credentials stay in the AWS CLI credential provider.

For a provider that requires Signature Version 4, use AWS CLI v2 or set `s3.signature_version` to `s3v4` in your CLI profile.

Choose **File → Upload to S3…** and confirm the destination. If the profile can read the uploaded object, **Copy Link** gives you a download link that expires after one hour. The bucket policy controls the object's access outside the link.

## Automation

Run the Shutr executable with `--capture <action>` from a script, Shortcuts, or a launcher. On macOS, a new install uses `/Applications/Shutr.app/Contents/MacOS/shutr`. If you updated an older version in place, use the path to the bundle you installed. On Windows, use `%LOCALAPPDATA%\Programs\Shutr\Shutr.exe` for the installed app or `Shutr.exe` for the portable app. Versions before 0.7 used other paths, so update scripts that call the old ones. The actions are `area`, `fullscreen`, `delayed`, `delayed-area`, `repeat-area`, `window`, `active-window`, `scrolling`, `scrolling-up`, `text`, `reopen`, and `settings`.

Add `--then` to override the after-capture settings. Separate the actions `edit`, `thumbnail`, `copy`, `save`, and `pin` with commas. For example, `--capture area --then copy,save`.

Shutr can record your screen, so it won't take a capture for another app until you allow it. The first request shows an Allow button. Settings → Advanced → Automation turns it on or off.

### Shutr links

Installed copies register `shutr://` links for launchers and shortcuts. Use `shutr://show` to bring Shutr forward, `shutr://settings` to open Settings, and `shutr://load/file` to open the file picker.

Use `shutr://grab/area?then=copy,save` to select an area, then copy and save it. Other capture paths under `shutr://grab/` are `fullscreen`, `repeat`, `window`, `active-window`, `scrolling`, `scrolling/reverse`, `delayed`, and `delayed-area`. To set the delay for one capture, use a link like `shutr://grab/delayed=10`.

`shutr://grab/append` adds a capture to an open editor. `shutr://ocr` recognizes text or a QR code, and `shutr://load/clipboard` opens an image from the clipboard. Capture and clipboard links use the Automation permission. Available capture modes and floating outputs depend on the desktop.

## On Windows

Install Shutr with `Shutr-Setup.exe` from the [releases page](https://github.com/abd3lraouf-studios/shutr/releases). It installs for your account, without an administrator prompt, and Settings → Apps uninstalls it. Shutr isn't code-signed yet, so SmartScreen may stop the installer the first time: choose More info, then Run anyway.

Everything in this guide works the same way, with Ctrl where macOS uses `⌘` and Alt where it uses `Option`. The differences:

- The capture shortcuts are Ctrl+Shift+2 for Capture Area, Ctrl+Shift+1 for Capture Screen, and Ctrl+Shift+3 for Recognize Text or QR. Use Print Screen in Settings → Hotkeys takes PrtScn from Snipping Tool and gives it to Capture Area, and Shift+PrtScn to Capture Screen. The switch "Print Screen opens Snipping Tool" below it gives PrtScn back to Windows or takes it again. You can also record PrtScn with any modifier for any capture. To use Win+Shift+S, turn off "Win+Shift+S opens Snipping Tool": Windows frees it only together with Win+S, which opens Search, and the taskbar reloads.
- Capture Area always uses Shutr's selection, so Freeze the screen is always available.
- Alt while drawing an arrow points it back at where you started, and Ctrl draws it from the center.
- Recognize Text reads the languages installed in Windows, or the one picked in Settings. Of the barcodes, only QR codes are read.
- The editor has no menu bar: its Menu button holds the same commands, and F11 toggles full screen.
- Windows asks for no permissions, but Shutr can't scroll windows of apps that run as administrator.

## Updates

Choose **Check for Updates…** in the menu bar or tray. A red dot marks a new version; choosing it opens the release notes, where you can install it, be reminded later, or skip that version. After the install, **Relaunch Now** starts the new version, and **Later** keeps the current one running until you next open Shutr. On Windows, the installed app downloads the new installer instead: **Install and Relaunch** runs it, and **Later** keeps the current version running. Settings → General controls the daily check. Turn on **Download and install automatically** there, or tick the box in the update window, and Shutr downloads a new version by itself and installs it the next time you quit it or choose **Relaunch to Update** (macOS and Windows). If an update fails, **Try Again** retries it and **Download Manually…** opens the release page. Builds without an update feed show **Open Releases…** for manual downloads.

If you use version 0.3.x, or version 0.6 or earlier on a Mac, [install Shutr manually](https://github.com/abd3lraouf-studios/shutr/releases/latest) once to move to the current update feed; macOS then asks again for Screen Recording and Accessibility. Your settings carry over. If Windows Start still lists an older name after an in-app update, run Shutr Setup once to update the shortcut.
