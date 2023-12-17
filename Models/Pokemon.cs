namespace PokedexWebApp.Models;

public class Pokemon
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Type1 { get; set; }
    public string? Type2 { get; set; }
    public int Total { get; set; }
    public int HP { get; set; }
    public int Attack { get; set; }
    public int Defense { get; set; }
    public int SPAttack { get; set; }
    public int SPDefense { get; set; }
    public int Speed { get; set; }
    public Pokemon()
    {

    }
}
