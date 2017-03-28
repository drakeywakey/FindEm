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
        public JsonResult Search(string searchString, int delay)
        {
            System.Threading.Thread.Sleep(delay * 1000);
            var persons = from p in db.Persons
                        where (p.FirstName.Contains(searchString) || p.LastName.Contains(searchString))
                        select p;
            return Json(persons);
        }
    }
}