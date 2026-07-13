using System.Net.Http.Headers;
using System.Net.Http.Json;
using RapsLepeli.Models;

namespace RapsLepeli.Services;

public class GitHubService
{
    private readonly HttpClient _http;

    public GitHubService(HttpClient http)
    {
        _http = http;

        _http.DefaultRequestHeaders.UserAgent.Clear();
        _http.DefaultRequestHeaders.UserAgent.ParseAdd("RapsLepeli");

        // Required for GitHub Topics API
        _http.DefaultRequestHeaders.Accept.Clear();
        _http.DefaultRequestHeaders.Accept.Add(
            new MediaTypeWithQualityHeaderValue("application/vnd.github+json"));
    }

public async Task<List<GitHubRepo>> GetReposAsync()
{
    var repos = await _http.GetFromJsonAsync<List<GitHubRepo>>(
        "https://api.github.com/users/RapsLepeli/repos?per_page=100");

    if (repos == null)
        return new();

    return repos
        .OrderByDescending(r => r.UpdatedAt)
        .Take(10)
        .ToList();
}
}