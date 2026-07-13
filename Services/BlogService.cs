using System.Text.Json;
using RapsLepeli.Models;

namespace RapsLepeli.Services;

public class BlogService
{
    private readonly IWebHostEnvironment _environment;

    public BlogService(IWebHostEnvironment environment)
    {
        _environment = environment;
    }

    public async Task<List<BlogPost>> GetPostsAsync()
    {
        var file = Path.Combine(
            _environment.WebRootPath,
            "blog",
            "blog.json");

        if (!File.Exists(file))
            return new();

        var json = await File.ReadAllTextAsync(file);

        var posts = JsonSerializer.Deserialize<List<BlogPost>>(
            json,
            new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

        return posts?
            .OrderByDescending(p => p.Published)
            .ToList()
            ?? new();
    }

    public async Task<string> GetMarkdownAsync(string relativePath)
    {
        var path = Path.Combine(
            _environment.WebRootPath,
            relativePath.Replace('/', Path.DirectorySeparatorChar));

        if (!File.Exists(path))
            return "# Article not found";

        return await File.ReadAllTextAsync(path);
    }
}