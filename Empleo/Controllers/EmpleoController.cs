using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Empleo.Controllers
{
    public class EmpleoController : Controller
    {
        // GET: Empleo
        public ActionResult GetAll()
        {
            return View();
        }
    }
}