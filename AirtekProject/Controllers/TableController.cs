using AirtekProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AirtekProject.Controllers
{
    public class TableController : Controller
    {
        public class Product
        {
            string Name { get; set; }
        }
        // GET: Table
       
        public ActionResult Index()
        {

            return View();
        }
        public JsonResult DataTable()
        {
            NotasContext db = new NotasContext();

            List<Notas> lista = db.Notas.ToList();


            string product;
            product = "Message from server";

            return Json(db.Notas.ToList(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult Table()
        {

            return View();
        }

    }
}