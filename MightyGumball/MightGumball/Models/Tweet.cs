namespace MightGumball.Models
{
    public class Tweet
    {
        public int Id { get; }

        public string Text { get; }

        public Tweet(int id, string text)
        {
            Id = id;
            Text = text;
        }

    }
}
