namespace RapsLepeli.Models;

public class BlogPost
{
    public string Title { get; set; } = string.Empty;

    public string Slug { get; set; } = string.Empty;

    public string Summary { get; set; } = string.Empty;

    public DateTime Published { get; set; }

    public string ReadingTime { get; set; } = string.Empty;

    public List<string> Tags { get; set; } =[];

    public string File { get; set; } = string.Empty;
}