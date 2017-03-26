using System.Linq;
using System.Web.Mvc;
using NoAuth.Models;

namespace NoAuth.Controllers
{
    public class PersonController : Controller
    {
        private PersonDBContext db = new PersonDBContext();

        // GET: Person
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public JsonResult Search(string searchString)
        {
            System.Threading.Thread.Sleep(1500);
            var persons = from p in db.Persons
                        where (p.FirstName.Contains(searchString) || p.LastName.Contains(searchString))
                        select p;
            return Json(persons);
        }

        // GET: Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,FirstName,LastName,Address,Age,ImagePath")] Person person)
        {
            db.Persons.Add(person);
            db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}