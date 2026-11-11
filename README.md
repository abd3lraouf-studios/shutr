# Kiri marketing

Landing page and interactive demos for the macOS and Windows screenshot tool. Access to the [private Kiri releases](https://github.com/abd3lraouf-studios/kiri-source/releases) requires a GitHub account with repository permissions.

## Development

```sh
bun install --frozen-lockfile
bun run dev
```

Run `bun run build` to generate the static site in `dist/`. The build works from this repository root.

- `KIRI_VERSION` sets the displayed app version at build time. It defaults to `0.3.2`.
- `KIRI_SITE_URL` sets the canonical URL and social preview image origin. Set it to the site's own HTTPS URL once one has been assigned. Leave it unset for local builds.

## Attribution

The site and demos come from [the original Kiri project](https://github.com/Moltenship/kiri) by Timofey Maximov and Kiri contributors. This repository retains the website's Git history and original [MIT license](LICENSE).
