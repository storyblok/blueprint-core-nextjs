
# Astro Storyblok Starter Blueprint

Integrate [Astro](https://astro.build/) and [Storyblok](http://www.storyblok.com) as a headless CMS.

The blueprint is ideal for kick-starting new Storyblok and Astro projects. It features the following:
- Pre-configured default blocks: `page`, `teaser`, `grid`, and `feature`.
- Support for the Visual Editor's live preview.
- Dynamic routing to fetch and render new stories automatically.
- Rich text rendering and global content management.
- Authentication-ready.
- Internationalization-ready.
- Minimal styling.

> [!SUMMARY] Live preview
> This feature provides real-time editing capabilities. [Learn how to enable the complete solution](https://github.com/storyblok/storyblok-astro?tab=readme-ov-file#enabling-live-preview-for-storybloks-visual-editor).

## Get Started

1. Clone this repository
2. Open the project on your device
3. Install dependencies

```sh
npm install
```

### Authentication

In the root of the project, create a `.env` file to store the Storyblok access token:

```sh
STORYBLOK_ACCESS_TOKEN="<REPLACE_WITH_YOUR_TOKEN>"
```

> [!INFO] API access token
> Copy your space's preview access token from **Settings** > **Access Tokens**.
> Learn more about Storyblok [access tokens](https://www.storyblok.com/docs/concepts/access-tokens).

### Set the default environment

To connect to the Storyblok Visual Editor, the local project must run over HTTPS.

> [!INFO] HTTPS
> Learn how to [create a local HTTPS certificate on macOS](https://www.storyblok.com/faq/setup-dev-server-https-proxy)

To render a preview of the local project in the Visual Editor, follow these steps:

1. Navigate to **Settings > Visual Editor**.
2. Set the default environment to `https://localhost:3000`.
3. Save.
4. Open the `home` story.
5. Click **Config**.
6. Type `/` in the **Real path**.

>[!TIP] Proxy command
>Edit your `package.json` file to add a dedicated command:
> > [!EXAMPLE]
> > ```sh
> > "proxy": "local-ssl-proxy --source 3000 --target 4321 --cert PATH/TO/localhost.pem --key PATH/TO/localhost-key.pem",
> > "storyblok": "npm run dev & npm run proxy"
> 
> Change `PATH/TO/` to match the path of your `localhost.pem` and `localhost-key.pem` files.

Run the development server with HTTPS enabled:
```sh
npm run storyblok
```

Back in Storyblok, open the **Home** story to start editing.

Happy building!

## Project Structure

This blueprint includes the following directories and files:

```sh
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│       └── Layout.astro
│   └── pages/
│       └── _index.astro
│       └── [...slug].astro
│       └── _[...slug]-pre-i18n.astro
│   ├── components/
│   ├── assets/
│       └── astro.svg
│   ├── styles/
│       └── global.css
│   ├── storyblok/
│       └── ArticleOverview.astro
│       └── Feature.astro
│       └── FeaturedArticles.astro
│       └── Page.astro
│       └── Article.astro
│       └── Teaser.astro
│       └── Grid.astro
└── package.json
└── .gitignore
└── .env.example
└── README
└── astro.config.mjs
└── tsconfig.json
```

To learn more about Astro's file structure, refer to [the official guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## Commands

The blueprint supports the following commands. Run these from the root of the project:

| Command                | Action                                                                           |
| :--------------------- | :------------------------------------------------------------------------------- |
| `npm install`          | Installs dependencies                                                            |
| `npm run storyblok`    | Starts a local development server with HTTPS enabled at `https://localhost:3000` |
| `npm run dev`          | Starts a local dev server at `localhost:4321`                                    |
| `npm run build`        | Build your production site to `./dist/`                                          |
| `npm run preview`      | Preview your build locally, before deploying                                     |
| `npm run astro ...`    | Run CLI commands like `astro add` or `astro check`                               |
| `npm run astro --help` | Get help using the Astro CLI                                                     |

## Learn more

To learn more about Storyblok, visit [Storyblok Documentation](https://www.storyblok.com/docs).

To learn more about Astro, check the [official documentation](https://docs.astro.build/en/getting-started/).

To learn more about the integration between Storyblok and Astro, check out our [dedicated developer tutorials](https://www.storyblok.com/tutorials?technologies=astro).

***

> [!TODO]
> - [ ] Add GitHub Codespaces [badge](https://github.com/codespaces/badge.svg) ([Prebuilding your codespaces - GitHub Docs](https://docs.github.com/en/codespaces/prebuilding-your-codespaces))
> - [ ] Add link to Discord + badge [![Discord Chat](https://img.shields.io/discord/308323056592486420.svg)](https://discord.gg/)  
> - [ ] Add link to [docs](https://www.storyblok.com/docs)
> - [ ] Add link to [Help Center](https://support.storyblok.com/hc/en-us)
> - [ ] Add link to the specific technology guide
> - [ ] Add link to [sign up](https://app.storyblok.com/#/signup)
> - [ ] List packages and versions: Astro [5.7.1](https://github.com/withastro/astro/releases/tag/astro%405.7.1), SDK [6.1.1](https://github.com/storyblok/storyblok-astro/releases/tag/v6.1.1), Vite [6.3.3](https://github.com/vitejs/vite/releases/tag/v6.3.3)
> - [ ] Add license

> [!QUESTION] Repo template
> Would it be helpful to turn each blueprint repo into a template?
