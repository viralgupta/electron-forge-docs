import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  docs: [
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'README',
    },
    {
      type: 'doc',
      label: 'Importing an Existing Project',
      id: 'import-existing-project',
    },
    {
      type: 'doc',
      label: 'CLI',
      id: 'cli',
    },
    {
      type: 'category',
      label: 'CONFIGURATION',
      collapsible: false,
      items: [
        'config/configuration',
        {
          type: 'category',
          label: 'Plugins',
          // add id readme
          items: [
            'config/plugins/webpack',
            'config/plugins/vite',
            'config/plugins/electronegativity',
            'config/plugins/auto-unpack-natives',
            'config/plugins/local-electron',
            'config/plugins/fuses',
          ],
        },
        {
          type: 'category',
          label: 'Makers',
          // add id readme
          items: [
            'config/makers/appx',
            'config/makers/deb',
            'config/makers/dmg',
            'config/makers/flatpak',
            'config/makers/pkg',
            'config/makers/rpm',
            'config/makers/snapcraft',
            'config/makers/squirrel.windows',
            'config/makers/wix-msi',
            'config/makers/zip',
          ],
        },
        {
          type: 'category',
          label: 'Publishers',
          // add id readme
          items: [
            'config/publishers/bitbucket',
            'config/publishers/electron-release-server',
            'config/publishers/gcs',
            'config/publishers/github',
            'config/publishers/nucleus',
            'config/publishers/s3',
            'config/publishers/snapcraft',
          ],
        },
        'config/hooks',
      ],
    },
    {
      type: 'category',
      label: 'CORE CONCEPTS',
      collapsible: false,
      items: [
        'core-concepts/build-lifecycle',
        'core-concepts/why-electron-forge',
      ],
    },
    {
      type: 'category',
      label: 'BUILT-IN TEMPLATES',
      collapsible: false,
      items: [
        'templates/vite',
        'templates/vite-+-typescript',
        'templates/webpack-template',
        'templates/typescript-+-webpack-template',
      ],
    },
    {
      type: 'category',
      label: 'GUIDES',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'CODE SIGNING',
          // add id readme
          items: [
            'guides/code-signing/code-signing-macos',
            'guides/code-signing/code-signing-windows',
          ],
        },
        'guides/create-and-add-icons',
        {
          type: 'category',
          label: 'FRAMEWORK INTEGRATION',
          // add id readme
          items: [
            'guides/framework-integration/parcel',
            'guides/framework-integration/react',
            'guides/framework-integration/react-with-typescript',
            'guides/framework-integration/vue-3',
          ],
        },
        'guides/developing-with-wsl',
      ],
    },
    {
      type: 'category',
      label: 'ADVANCED',
      collapsible: false,
      items: [
        'advanced/auto-update',
        'advanced/debugging',
        {
          type: 'category',
          label: 'EXTENDING ELECTRON FORGE',
          // add id readme
          items: [
            'advanced/extending-electron-forge/writing-plugins',
            'advanced/extending-electron-forge/writing-templates',
            'advanced/extending-electron-forge/writing-makers',
            'advanced/extending-electron-forge/writing-publishers',
          ],
        },
      ],
    },
    {
      type: 'link',
      href: 'https://js.electronforge.io/',
      label: 'API Docs',
    },
  ],
};

export default sidebars;
