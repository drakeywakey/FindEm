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
                    FirstName = "Someone",
                    LastName = "New",
                    Age = 1,
                    Address = "Earth",
                    Interests = "Breathing, Eating, Acting",
                    ImagePath = "/Content/Images/person1.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Drake",
                    LastName = "Bennion",
                    Age = 24,
                    Address = "Murray",
                    Interests = "Sleeping, Video Games, Crying",
                    ImagePath = "https://lh6.googleusercontent.com/-aSR6vBntq54/AAAAAAAAAAI/AAAAAAAAAAA/bAAXNZ7ObxQ/s128-c-k/photo.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Dolores",
                    LastName = "?",
                    Age = -1,
                    Address = "Westworld",
                    Interests = "Breathing, Acting, Contemplating",
                    ImagePath = "http://i.lv3.hbo.com/assets/images/series/westworld/character/dolores-1024.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Someone",
                    LastName = "New",
                    Age = 1,
                    Address = "Earth",
                    Interests = "Breathing, Eating, Acting",
                    ImagePath = "/Content/Images/person1.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Drake",
                    LastName = "Bennion",
                    Age = 24,
                    Address = "Murray",
                    Interests = "Sleeping, Video Games, Crying",
                    ImagePath = "https://lh6.googleusercontent.com/-aSR6vBntq54/AAAAAAAAAAI/AAAAAAAAAAA/bAAXNZ7ObxQ/s128-c-k/photo.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Dolores",
                    LastName = "?",
                    Age = -1,
                    Address = "Westworld",
                    Interests = "Breathing, Acting, Contemplating",
                    ImagePath = "http://i.lv3.hbo.com/assets/images/series/westworld/character/dolores-1024.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Someone",
                    LastName = "New",
                    Age = 1,
                    Address = "Earth",
                    Interests = "Breathing, Eating, Acting",
                    ImagePath = "/Content/Images/person1.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Drake",
                    LastName = "Bennion",
                    Age = 24,
                    Address = "Murray",
                    Interests = "Sleeping, Video Games, Crying",
                    ImagePath = "https://lh6.googleusercontent.com/-aSR6vBntq54/AAAAAAAAAAI/AAAAAAAAAAA/bAAXNZ7ObxQ/s128-c-k/photo.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Dolores",
                    LastName = "?",
                    Age = -1,
                    Address = "Westworld",
                    Interests = "Breathing, Acting, Contemplating",
                    ImagePath = "http://i.lv3.hbo.com/assets/images/series/westworld/character/dolores-1024.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Someone",
                    LastName = "New",
                    Age = 1,
                    Address = "Earth",
                    Interests = "Breathing, Eating, Acting",
                    ImagePath = "/Content/Images/person1.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Drake",
                    LastName = "Bennion",
                    Age = 24,
                    Address = "Murray",
                    Interests = "Sleeping, Video Games, Crying",
                    ImagePath = "https://lh6.googleusercontent.com/-aSR6vBntq54/AAAAAAAAAAI/AAAAAAAAAAA/bAAXNZ7ObxQ/s128-c-k/photo.jpg"
                });

                persons.Add(new Person()
                {
                    FirstName = "Dolores",
                    LastName = "?",
                    Age = -1,
                    Address = "Westworld",
                    Interests = "Breathing, Acting, Contemplating",
                    ImagePath = "http://i.lv3.hbo.com/assets/images/series/westworld/character/dolores-1024.jpg"
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