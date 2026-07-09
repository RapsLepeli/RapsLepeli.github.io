using System.Text.Json.Serialization;
namespace RapsLepeli.Models;
public class GitHubRepo
{
    [JsonPropertyName("name")]
    public string Name{get;set;} = string.Empty;

    [JsonPropertyName("description")]
    public string Description{get;set;} = string.Empty;

    [JsonPropertyName("html_url")]
    public string HtmlUrl{get;set;} = string.Empty;
    
    [JsonPropertyName("language")]
    public string Language{get;set;} = string.Empty;

    [JsonPropertyName("created_at")]
    public DateTime CreatedAt{get;set;}

    [JsonPropertyName("stargazers_count")]
    public int Stars{get;set;}

    [JsonPropertyName("fork")]
    public bool Fork {get;set;}
    
    [JsonPropertyName("archived")]
    public bool Archived{get;set;}
}