# Why My Blazor Portfolio Takes a While to Load (And Why That's Okay... For Now)

> **Published:** 14 July 2026  
> **Category:** Azure • Blazor • Cloud • Performance

---

## Introduction

After rebuilding my portfolio from a static HTML, CSS, and JavaScript website into a modern **Blazor Web App**, I deployed it to **Microsoft Azure App Service** using the **Free (F1)** hosting tier.

The migration wasn't just about changing frameworks, it was an opportunity to learn more about cloud hosting, CI/CD, deployment, and how infrastructure affects application performance.

Soon after deploying the application, I noticed something interesting.

If someone visits my portfolio after it has been inactive for around 20 minutes, the first page takes several seconds to load. Every request after that is almost instantaneous.

Initially, I assumed something was wrong with my application.

It wasn't.

---

## Understanding the Cold Start

My portfolio is hosted on the **Azure App Service Free (F1)** plan.

To conserve resources on shared infrastructure, Azure automatically unloads idle applications from memory after they've been inactive for a period of time.

When the next visitor arrives, Azure must restart the application before serving the first request.

This process is commonly known as a **Cold Start**.

During startup Azure needs to:

- Allocate compute resources
- Start the ASP.NET Core runtime
- Initialize Dependency Injection
- Configure middleware
- Build the routing pipeline
- Start the Blazor application
- Render the first page

Only after completing these steps can the browser receive the requested page.

---

## Cold Start Lifecycle

```text
                     Visitor Opens Portfolio
                              │
                              ▼
                 Is the application running?
                     ┌───────────────┐
               Yes ◄─┤               ├─► No
                     └───────────────┘
                      │                 │
                      ▼                 ▼
           Instant response     Azure starts Web App
                                        │
                                        ▼
                             Start ASP.NET Core
                                        │
                                        ▼
                    Configure Dependency Injection
                                        │
                                        ▼
                       Build Middleware & Routing
                                        │
                                        ▼
                         Render Blazor Application
                                        │
                                        ▼
                           Return First Page
                                        │
                                        ▼
               Fast responses until the app sleeps again
```

---

## Why Blazor Makes It More Noticeable

Unlike a traditional HTML website, my portfolio is built using **Blazor Web App with Interactive Server rendering**.

This means every request depends on an ASP.NET Core server being available before the page can be rendered.

When Azure has unloaded the application, every layer of the application stack must be initialized before the first visitor receives a response.

Once the application has started, navigation becomes extremely fast because everything is already loaded into memory.

---

## Is This Actually a Problem?

For a personal portfolio...

Not really.

The Azure Free tier is designed for:

- Learning Azure
- Development
- Testing
- Personal projects

Its goal is to provide developers with an accessible platform for learning cloud technologies, not production-level performance.

Considering it costs **nothing**, it's an excellent environment for experimentation.

---

## Cold Start Summary

    | Stage           | What Happens |
    |-----------------|------------- |
    | Visitor         | Opens the portfolio |
    | Azure           | Detects the application is sleeping |
    | ASP.NET Core    | Starts the runtime |
    | Services        | Initializes Dependency Injection |
    | Middleware      | Configures the request pipeline |
    | Blazor          | Renders the application |
    | Browser         | Receives the first page |
    | Future Requests | Fast until Azure unloads the application again |


---
The application then remains responsive until Azure puts it back to sleep.

## Possible Solutions

### 1. Upgrade the Hosting Plan

Moving from the Free tier to a paid Azure App Service plan keeps the application running continuously.

Benefits include:

- No cold starts
- Faster response times
- Dedicated resources
- Better scalability
- Production-ready reliability

---

### 2. Enable Always On

Azure App Service includes an **Always On** feature that periodically sends requests to the application, preventing it from going idle.

Unfortunately, this feature isn't available on the Free (F1) plan.

---

### 3. External Health Checks

Some developers use monitoring services that periodically visit their application.

Examples include:

- UptimeRobot
- Better Stack
- Scheduled GitHub Actions

This keeps the application active, although it's generally considered a workaround rather than a permanent solution.

---

### 4. Blazor WebAssembly

Applications that don't require server-side rendering can instead be built using **Blazor WebAssembly**.

Everything is delivered as static files, making platforms such as:

- GitHub Pages
- Azure Static Web Apps
- Cloudflare Pages

excellent hosting choices with no server-side cold starts.

---

### 5. Optimize Application Startup

Cold starts can also be reduced by improving startup performance.

Examples include:

- Removing unnecessary services
- Optimizing middleware
- Lazy-loading dependencies
- Reducing package references
- Minimizing startup work

While these optimizations don't eliminate cold starts, they can significantly reduce startup time.

---

## Choosing the Right Hosting Option

```text
                   Need to Host a Blazor App
                             │
               ┌─────────────┴─────────────┐
               │                           │
               ▼                           ▼
     Blazor WebAssembly       Blazor Web App (Server)
               │                           │
      ┌────────┼────────┐        ┌─────────┼─────────┐
      │        │        │        │         │         │
      ▼        ▼        ▼        ▼         ▼         ▼
 GitHub    Azure SWA  Cloudflare Azure   Container   AKS
  Pages                  Pages   AppSvc     Apps
```

---

## What I Learned

One of the biggest lessons from this project is that application performance isn't determined solely by code quality.

Infrastructure plays an equally important role.

Hosting plans, deployment strategies, runtime behavior, and cloud services all contribute to the overall user experience.

Writing software is only one part of software engineering.

Deploying, monitoring, and optimizing applications are equally important.

---

## My Future Roadmap

This portfolio is more than a showcase of completed projects—it's also a record of my growth as a software developer and future cloud engineer.

Over the next few weeks and months, I'll be working through Microsoft's Azure certification path while gradually applying what I learn directly to this portfolio.

Rather than implementing every Azure service immediately, I want each addition to be backed by practical experience and a solid understanding of why it's useful.

```text
                  Current Portfolio
                          │
                          ▼
                  Azure App Service (Free)
                          │
                          ▼
                  Upgrade to Paid Plan
                          │
                          ▼
                  Enable Always On
                          │
                          ▼
                  Azure Application Insights
                          │
                          ▼
                  Azure Front Door
                          │
                          ▼
                      Azure CDN
                          │
                          ▼
                  Azure Container Apps
                          │
                          ▼
                        Docker
                          │
                          ▼
                  Azure Kubernetes Service (AKS)
```

### What's Next?

The technologies below are part of my current learning roadmap and **have not yet been implemented**. As I complete my studies and hands-on projects, I'll integrate each one into this portfolio and document the experience through future blog posts.

    | Technology                     | Status    |
    |--------------------------------|---------------|
    | Azure App Service              | ✅ Currently hosting this portfolio |
    | GitHub Actions CI/CD           | ✅ Currently used for deployment |
    | Azure Application Insights     | 🔄 Learning & implementing soon |
    | Azure Front Door               | 📚 Planned |
    | Azure CDN                      | 📚 Planned |
    | Azure Container Apps           | 📚 Planned |
    | Docker                         | 📚 Planned |
    | Azure Kubernetes Service (AKS) | 📚 Planned |
    | Azure DevOps                   | 📚 Planned |

My goal isn't simply to earn certifications, it's to understand when each Azure service should be used, why it exists, and how it improves the scalability, security, reliability, and maintainability of real-world applications.

As I progress through Microsoft's Azure learning path, this portfolio will evolve alongside my skills. Each new technology I implement will become the subject of a future blog post, documenting both the successes and the challenges I encounter along the way.

---

## Final Thoughts

At first, I thought the slower first page load meant there was a problem with my Blazor application.

Instead, it became a valuable lesson about cloud infrastructure and hosting trade-offs.

Sometimes the slowest part of an application isn't the code, it's the environment running it.

As I continue learning Azure, DevOps, AI, and cloud engineering, experiences like this remind me that becoming a better software engineer means understanding not only how to build applications, but also how to deploy, monitor, secure, and optimize them in production.

This portfolio isn't just a place to showcase my work, it's also where I document my journey as I continue growing into a Full Stack .NET and Cloud Engineer.