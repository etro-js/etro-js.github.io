# etrojs.dev

> Documentation for the [Etro] video editing framework

## Contributing

First off, thanks for contributing to Etro's documentation! Every contribution
helps make Etro more popular and accessible. There are a few ways you can help:

- If you would like to request a change to be made to the site, please open an
  [issue].
- If you would like to make the change yourself, [fork] this repo, push the
  change to a feature branch on the fork, and open a PR.

## Getting Started

This site uses the [Docusaurus 2] static docs site generator.

### Installation

```console
$ npm install
```

### Local Development

```console
$ npm run start
```

This command starts a local development server and open up a browser window.

## Versioning

Etro follows [Semantic Versioning]. The latest three minor releases are
documented ([related Docusaurus docs][Docusaurus versioning]). The documentation
for the latest release can be found in [docs/](docs/). The previous two releases
can be found in [versioned_docs/](versioned_docs/) (see [configuring Docusaurus
versioning]).

When a new minor version is released:

1. Run `npm run docusaurus docs:version <version>` to copy the current docs to
   the versioned folder for the previous release.
2. Update the new documentation in [docs/](docs/) to reflect the changes in the
   latest release.
3. Remove the versioned folder for the fourth previous release.

When documenting an existing feature, please add the documentation to both
[docs/](docs/) and the relevant versioned folders (e.g.
[versioned_docs/version-0.11/](versioned_docs/version-0.11/)).

## License

Licensed under the Apache License 2.0

[Etro]: https://github.com/etro-js/etro
[Fork]: https://github.com/etro-js/etro-js.github.io/fork
[issue]: https://github.com/etro-js/etro-js.github.io/issues
[Docusaurus 2]: https://docusaurus.io
[Semantic Versioning]: https://semver.org/
[Docusaurus versioning]: https://docusaurus.io/docs/versioning
[configuring Docusaurus versioning]: https://docusaurus.io/docs/versioning#configuring-versioning-behavior
