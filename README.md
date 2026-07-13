# Raps Lepeli Portfolio

This is my personal website and portfolio. It shows who I am, what I build, and how to connect with me.

## What the site does

On the site you can:
- see a quick personal introduction and download my CV
- browse my latest GitHub projects
- read blog posts about what I learned
- find contact and social links

## How it is organized

- `Components/Pages/Home.razor` contains the landing page and intro.
- `Components/Pages/Projects.razor` shows repositories from my GitHub account.
- `Components/Pages/Blog.razor` lists blog posts.
- `Components/Pages/Contact.razor` has email and social links.
- `Services/GitHubService.cs` gets project data from GitHub.
- `Services/BlogService.cs` reads blog posts from files in `wwwroot/blog/`.

## Why I built this

I built this site to share my work and learning journey in a clean, easy-to-use format. It lets me keep a public place for my projects, blog posts, and resume without adding extra complexity.

## What I plan next

I want to keep adding new blog posts and projects as I learn more. I also plan to improve the portfolio design over time and make the site more interactive with new features.

## Running locally

1. Install the .NET 10 SDK.
2. Open the repository folder.
3. Run:
   ```bash
   dotnet run
   ```
4. Open the URL shown in the console.
