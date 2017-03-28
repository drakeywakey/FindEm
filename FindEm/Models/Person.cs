using System.Collections.Generic;
using System.Data.Entity;

namespace NoAuth.Models
{
    public class Person
    {
        public int ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public int Age { get; set; }
        public string Interests { get; set; }
        public string ImagePath { get; set; }
    }

    public class PersonDBContext : DbContext
    {
        // https://www.tutorialspoint.com/entity_framework/entity_framework_seed_database.htm
        public DbSet<Person> Persons { get; set; }

        public PersonDBContext()
            :base("name=PersonDBContext")
        {
            Database.SetInitializer<PersonDBContext>(new PersonDBInitializer<PersonDBContext>());
        }

       private class PersonDBInitializer<T> : DropCreateDatabaseAlways<PersonDBContext>
       {
            protected override void Seed(PersonDBContext context)
            {
                IList<Person> persons = new List<Person>();

                persons.Add(new Person()
                {
                    FirstName = "Jon",
                    LastName = "Hamm",
                    Age = 46,
                    Address = "St. Louis, Missouri, U.S.",
                    Interests = "Golf, Tennis, Acting",
                    ImagePath = "/Content/Images/jonHamm.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Evan Rachel",
                    LastName = "Wood",
                    Age = 29,
                    Address = "Raleigh, North Carolina, U.S.",
                    Interests = "Singing, Acting, Taekwondo",
                    ImagePath = "/Content/Images/evanRachel.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Sean",
                    LastName = "Bean",
                    Age = 57,
                    Address = "West Riding of Yorkshire, England",
                    Interests = "Acting, Football, Art",
                    ImagePath = "/Content/Images/seanBean.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Nick",
                    LastName = "Offerman",
                    Age = 46,
                    Address = "Minooka, Illinois, U.S.",
                    Interests = "Woodworking, Writing, Directing",
                    ImagePath = "/Content/Images/nickOfferman.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Mary",
                    LastName = "Berry",
                    Age = 82,
                    Address = "Bath, Somerset, England",
                    Interests = "Baking, Judging, Writing",
                    ImagePath = "/Content/Images/maryBerry.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Drake",
                    LastName = "Bennion",
                    Age = 24,
                    Address = "Murray, Utah, U.S.",
                    Interests = "Sleeping, Video Games, Crying",
                    ImagePath = "https://lh6.googleusercontent.com/-aSR6vBntq54/AAAAAAAAAAI/AAAAAAAAAAA/bAAXNZ7ObxQ/s128-c-k/photo.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Kanye",
                    LastName = "West",
                    Age = 39,
                    Address = "Atlanta, Georgia, U.S.",
                    Interests = "Rapping, Mirrors, Fashion",
                    ImagePath = "/Content/Images/kanyeWest.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Steve",
                    LastName = "Buscemi",
                    Age = 59,
                    Address = "Brooklyn, New York, U.S.",
                    Interests = "Acting, Firefighting",
                    ImagePath = "/Content/Images/steveBuscemi.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Ella Marija",
                    LastName = "Lani Yelich-O'Connor",
                    Age = 20,
                    Address = "Takapuna, Auckland, New Zealand",
                    Interests = "Singing, Songwriting, Being Lorde",
                    ImagePath = "/Content/Images/lorde.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Scarlett",
                    LastName = "Johansson",
                    Age = 32,
                    Address = "Manhattan, New York City, U.S.",
                    Interests = "Singing, Acting, Avengers",
                    ImagePath = "/Content/Images/scarletJo.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Shaquille",
                    LastName = "O'Neal",
                    Age = 45,
                    Address = "Newark, New Jersey, U.S.",
                    Interests = "Basketball, Commercials",
                    ImagePath = "/Content/Images/shaqONeal.jpg"
                });

                foreach (Person person in persons)
                {
                    context.Persons.Add(person);
                }

                base.Seed(context);
            }
        }
    }
}