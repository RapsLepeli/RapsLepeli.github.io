using System.Net.Http.Json;
using RapsLepeli.Models;

namespace RapsLepeli.Services;

public class GitHubService
{
    private readonly HttpClient _httpClient;

    public GitHubService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.DefaultRequestHeaders.UserAgent.ParseAdd("RapsLepeli");
    }

    public async Task<List<GitHubRepo>> GetReposAsync()
    {
        var repos = await _httpClient.GetFromJsonAsync<List<GitHubRepo>>($"https://api.github.com/users/RapsLepeli/repos");

        if(repos== null){
            return new List<GitHubRepo>();
        }
        return repos.Where(repo => !repo.Fork && !repo.Archived)
                    .OrderByDescending(repo => repo.CreatedAt)
                    .ToList();
    }
}