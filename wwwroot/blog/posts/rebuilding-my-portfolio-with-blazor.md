# Rebuilding My Portfolio with Blazor

> Published: 11 July 2026  
> Reading Time: 8 min

---

## Why I Rebuilt My Portfolio

My previous portfolio was built using HTML, CSS, and JavaScript. While it worked well, I wanted something that better represented the technologies I work with every day as a Full Stack .NET Developer.

Since I spend most of my time building applications with C#, ASP.NET Core, Blazor, SQL Server, and Microsoft Azure, it made sense for my portfolio to reflect those skills instead of relying on a traditional static website.

This rebuild wasn't simply about changing technologies—it was about creating a portfolio that is easier to maintain, more scalable, and capable of growing alongside my career.

---

## What Was Wrong With My Old Portfolio?

There wasn't anything fundamentally wrong with it.

It was fast, responsive, and looked professional.

However, as I started adding more projects and planning a technical blog, I noticed a few limitations:

- Every new section required manually editing HTML.
- Content wasn't reusable.
- Adding new projects became repetitive.
- Creating a blog would have required another platform.
- The codebase wasn't structured like the applications I normally build.

As developers, we naturally want our tools to evolve with us.

---

## Why Blazor?

Blazor allows developers to build modern web applications using C# instead of JavaScript for most of the application logic.

Because I already work extensively within the .NET ecosystem, Blazor felt like the perfect choice.

Some of the biggest advantages include:

- Reusable Razor components
- Strong typing with C#
- Dependency Injection
- Clean project structure
- Easy integration with APIs
- Shared models across projects
- Excellent developer experience

Instead of thinking in terms of HTML pages, I now build reusable components that can be used throughout the application.

---

## Building the New Portfolio

Rather than copying the previous design, I decided to redesign everything from scratch.

The goals were simple:

- Keep the design clean and modern
- Make every page responsive
- Highlight my projects
- Add a technical blog
- Make the portfolio easy to maintain
- Showcase my actual .NET skills

Every page became its own Blazor component.

Examples include:

- Home
- About
- Projects
- Blog
- Contact

This approach keeps the application modular and much easier to extend in the future.

---

## Integrating GitHub

One of my favourite features is the Projects page.

Instead of manually listing repositories, the portfolio communicates directly with the GitHub API to retrieve my latest repositories.

That means every time I publish a new project, updating my portfolio becomes much easier.

---

## Adding a Blog

One feature I always wanted was a technical blog.

Instead of relying on Blogger or another external platform, I decided to build the blog directly into my portfolio.

Each article is written as a Markdown file.

The application reads those files and displays them as blog posts, allowing me to focus on writing while keeping everything inside a single project.

This also means every article is version-controlled using Git.

---

## Lessons Learned

Rebuilding the portfolio reminded me that software projects are never truly finished.

As developers improve, their applications should improve as well.

The project also gave me an opportunity to strengthen my understanding of:

- Blazor Components
- Dependency Injection
- Service Architecture
- GitHub API Integration
- Responsive Design
- Clean UI Design

Every challenge encountered while building the portfolio became another learning opportunity.

---

## What's Next?

This portfolio will continue evolving.

Some of the features I'm planning include:

- Dark and Light themes
- Blog search
- Categories and tags
- Reading time calculation
- Code syntax highlighting
- Azure deployment
- CI/CD with GitHub Actions
- AI-powered features

---

## Final Thoughts

Building software is one of the best ways to learn.

This portfolio is more than just a collection of projects—it's a reflection of my growth as a developer.

Every commit, every component, and every article represents another step in my journey toward becoming a better Full Stack .NET and Cloud Engineer.

Thanks for reading, and I hope you enjoy following the journey as much as I enjoy building it.