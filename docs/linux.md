# Shutr on Linux

Shutr opens PNG and JPEG images, captures screenshots, and edits them with the same tools as on macOS and Windows. The launcher works on Wayland and X11. Desktops with StatusNotifier support can also show the tray menu.

- **X11** supports Shutr’s area and window picker, repeat area, scrolling capture, floating thumbnails and pins, and drag-out to other apps. In frozen area capture, hold Ctrl for precision pointer movement, hold Z for 10× zoom, and press L for the magnifier. Global hotkeys are configured in Settings.
- **Wayland** uses the desktop screenshot picker. The picker handles permission and controls the capture options. For hotkeys, choose **Settings → Hotkeys → Enable Desktop Shortcuts** on a desktop with the Global Shortcuts portal. If your desktop does not provide it, enable Automation in Shutr and bind `shutr --capture area` in the desktop keyboard settings. Shutr opens captures in the editor on Wayland, where you can drag out the image file.
- **Text recognition** runs locally. Install a Tesseract language pack for each language you need, then select one in **Settings → Advanced**. QR recognition uses the same **Recognize Text or QR** command.
- **Print** opens the desktop print dialog on systems with the Print portal.

## Install the Debian package

If you have a `Shutr-linux-x64.deb` build, open a terminal in its folder and run:

```sh
sudo apt install ./Shutr-linux-x64.deb
```

Open **Shutr** from the application menu. The package includes the launcher entry and its icon.

## Build on Debian or Ubuntu

Install a current stable Rust toolchain and the native build dependencies:

```sh
sudo apt install build-essential pkg-config libfontconfig1-dev libfreetype-dev \
  libwayland-dev libx11-dev libxcb1-dev libxkbcommon-dev libxkbcommon-x11-dev \
  libvulkan1 mesa-vulkan-drivers xclip wl-clipboard tesseract-ocr tesseract-ocr-eng
cargo build --release --locked
./target/release/shutr
```

For portal capture, use your desktop’s XDG Desktop Portal backend, such as `xdg-desktop-portal-gnome` or `xdg-desktop-portal-kde`. A session D-Bus and graphics driver are required for desktop integration and rendering. Clipboard export uses `wl-copy` on Wayland and `xclip` on X11.

## Add Shutr to the application menu

Put `~/.local/bin` on your desktop session’s PATH, then install the binary, desktop entry, and icon:

```sh
install -Dm755 target/release/shutr ~/.local/bin/shutr
data_dir="${XDG_DATA_HOME:-$HOME/.local/share}"
app_id=dev.abd3lraouf.shutr
install -Dm644 "linux/$app_id.desktop" "$data_dir/applications/$app_id.desktop"
install -Dm644 src/icon.png "$data_dir/icons/hicolor/256x256/apps/$app_id.png"
```

Run `shutr --open /path/to/image.png` to edit an image. Enable Automation before requesting screenshots from a script or a desktop shortcut with `shutr --capture area`. Add `--then edit,copy,save` to choose the outputs for that capture.

Settings live at `$XDG_CONFIG_HOME/shutr/settings.json` or `~/.config/shutr/settings.json`. When a Debian package update is available, the tray menu opens its download. Install it through your package manager.
