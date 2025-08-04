# Acadiana Mesh Website

A Hugo-powered website for the Acadiana Mesh community, dedicated to mesh networking and Meshtastic technology in Acadiana and Southern Louisiana.

## 🌐 About

Acadiana Mesh is a community-driven initiative focused on building resilient mesh networks throughout Acadiana and Southern Louisiana using Meshtastic technology. This website serves as the central hub for information, guides, node status, and community coordination.

## ✨ Features

- **Responsive Design**: Mobile-first approach with collapsible navigation
- **Light/Dark Theme**: Automatic theme detection with manual toggle
- **Professional Layout**: Clean, minimal design focused on content
- **No External Dependencies**: Built with vanilla CSS and JavaScript only
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: ARIA attributes and keyboard navigation support

## 🚀 Quick Start

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (Extended version recommended)
- Git

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/acadianamesh/acadianamesh.org.git
   cd acadianamesh
   ```

2. **Start the development server:**

   ```bash
   hugo server
   ```

3. **Open your browser:**
   Navigate to `http://localhost:1313`

### Building for Production

```bash
# Build the site
hugo

# The built site will be in the 'public' directory
```

## 📁 Project Structure

```
acadianamesh/
├── archetypes/          # Content templates
├── content/             # Site content
│   ├── about/
│   ├── guides/
│   ├── nodes/
│   ├── contact/
│   └── _index.md
├── themes/
│   └── acadiana-mesh/   # Custom Hugo theme
│       ├── layouts/     # HTML templates
│       ├── static/      # CSS, JS, images
│       └── theme.toml
├── hugo.toml           # Hugo configuration
└── README.md
```

## 🎨 Theme: Acadiana Mesh

The site uses a custom Hugo theme built specifically for the Acadiana Mesh community.

### Theme Features

- **Responsive Navigation**: Burger menu for mobile devices
- **Theme Switching**: Toggle between light and dark modes
- **Modern CSS**: Uses CSS custom properties for theming
- **Performance Optimized**: Minimal CSS and JavaScript
- **Content-Focused**: Clean typography and layout

### Theme Structure

```
themes/acadiana-mesh/
├── layouts/
│   ├── _default/
│   │   ├── baseof.html     # Base template
│   │   ├── single.html     # Individual pages
│   │   └── list.html       # Section listings
│   ├── index.html          # Homepage
│   └── partials/
│       ├── header.html     # Navigation
│       └── footer.html     # Footer
└── static/
    ├── css/style.css       # Main stylesheet
    └── js/main.js          # Theme functionality
```

## 📝 Content Management

### Adding New Content

1. **Create a new post/guide:**

   ```bash
   hugo new guides/my-new-guide.md
   ```

2. **Edit the front matter:**

   ```yaml
   +++
   title = "My New Guide"
   date = 2024-01-01T00:00:00-06:00
   draft = false
   categories = ["Getting Started"]
   tags = ["meshtastic", "setup"]
   +++
   ```

3. **Write your content in Markdown**

### Content Sections

- **About** (`/about/`): Information about Acadiana Mesh
- **Guides** (`/guides/`): Technical documentation and tutorials
- **Nodes** (`/nodes/`): Network status and node information
- **Contact** (`/contact/`): Community channels and support

### Front Matter Options

```yaml
+++
title = "Page Title"
date = 2024-01-01T00:00:00-06:00
draft = false                    # Set to true to hide from production
categories = ["Category Name"]   # Used for organization
tags = ["tag1", "tag2"]         # Used for cross-referencing
+++
```

## ⚙️ Configuration

The site configuration is managed in `hugo.toml`:

### Key Configuration Options

```toml
baseURL = 'https://www.acadianamesh.org/'
languageCode = 'en-us'
title = 'Acadiana Mesh'
theme = 'acadiana-mesh'

[params]
  description = 'Connecting Acadiana and Southern Louisiana through mesh networking'
  author = 'Acadiana Mesh'

[menu]
  [[menu.main]]
    name = 'Home'
    url = '/'
    weight = 10
  # ... additional menu items
```

### Menu Configuration

The main navigation is configured in `hugo.toml`. To add/modify menu items:

```toml
[[menu.main]]
  name = 'New Section'
  url = '/new-section/'
  weight = 60  # Controls order (lower = earlier)
```

## 🎨 Customization

### Colors and Theming

The theme uses CSS custom properties for easy customization. Edit `themes/acadiana-mesh/static/css/style.css`:

```css
:root {
  /* Light theme colors */
  --bg-primary: #ffffff;
  --text-primary: #212529;
  --accent-primary: #0066cc;
  /* ... */
}

[data-theme="dark"] {
  /* Dark theme colors */
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
  --accent-primary: #4da6ff;
  /* ... */
}
```

### Typography

Font settings can be adjusted in the CSS:

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
}
```

## 🚀 Deployment

### GitHub Pages

1. **Enable GitHub Pages** in repository settings
2. **Set up GitHub Actions** (see `.github/workflows/deploy.yaml`)
3. **Push to main branch** to trigger deployment

### Netlify

1. **Connect your repository** to Netlify
2. **Set build command:** `hugo`
3. **Set publish directory:** `public`
4. **Deploy**

### Manual Deployment

```bash
# Build the site
hugo

# Upload the 'public' directory to your web server
rsync -avz public/ user@server:/path/to/website/
```

## 🛠️ Development

### Local Development

```bash
# Start development server with drafts
hugo server -D

# Start with live reload
hugo server --disableFastRender

# Build without minification
hugo --minify=false
```

### Adding Features

1. **CSS changes**: Edit `themes/acadiana-mesh/static/css/style.css`
2. **JavaScript changes**: Edit `themes/acadiana-mesh/static/js/main.js`
3. **Layout changes**: Edit files in `themes/acadiana-mesh/layouts/`
4. **Test changes**: Use `hugo server` to preview

### Code Style

- **CSS**: Use CSS custom properties for theming
- **JavaScript**: Vanilla JS, no external dependencies
- **HTML**: Semantic markup with proper accessibility attributes
- **Markdown**: Standard markdown with Hugo shortcodes where needed

## 📱 Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Features**: CSS Grid, CSS Custom Properties, ES6+ JavaScript

## 🤝 Contributing

We welcome contributions to improve the website!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch:** `git checkout -b feature/new-feature`
3. **Make your changes**
4. **Test locally:** `hugo server`
5. **Commit changes:** `git commit -am 'Add new feature'`
6. **Push to branch:** `git push origin feature/new-feature`
7. **Create Pull Request**

### Content Contributions

- **Guides**: Share your Meshtastic knowledge
- **Node information**: Update network status
- **Bug reports**: Help us improve the site
- **Translations**: Help make content accessible

### Code Contributions

- **Theme improvements**: Enhance the user experience
- **Performance optimizations**: Make the site faster
- **Accessibility improvements**: Make the site more inclusive
- **Mobile enhancements**: Improve mobile experience

## 📋 Troubleshooting

### Common Issues

**Hugo server not starting:**

```bash
# Check Hugo version
hugo version

# Try clearing cache
hugo --gc
```

**Theme not loading:**

```bash
# Verify theme is in correct location
ls themes/acadiana-mesh/

# Check hugo.toml theme setting
grep "theme" hugo.toml
```

**CSS/JS not updating:**

```bash
# Clear browser cache
# Or use incognito/private browsing mode

# Force Hugo to rebuild
hugo server --disableFastRender
```

**Build errors:**

```bash
# Check for draft content
hugo list drafts

# Validate configuration
hugo config
```

## 📞 Support

### Community Channels

- **Discord**: Join our #acadiana-mesh channel
- **GitHub Issues**: Report bugs or request features
- **Email**: Contact us directly for questions

### Documentation

- **Hugo Documentation**: [gohugo.io/documentation/](https://gohugo.io/documentation/)
- **Markdown Guide**: [markdownguide.org](https://www.markdownguide.org/)
- **Meshtastic Docs**: [meshtastic.org/docs/](https://meshtastic.org/docs/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Hugo**: Static site generator
- **Meshtastic**: Open-source mesh networking project
- **Community**: All contributors and mesh enthusiasts
- **Design inspiration**: Modern, accessible web design principles

---

**Built with ❤️ by the Acadiana Mesh community**

_Connecting Acadiana through resilient mesh networks_
