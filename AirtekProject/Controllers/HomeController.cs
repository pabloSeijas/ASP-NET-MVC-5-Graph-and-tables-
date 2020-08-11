using AirtekProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Web;
using System.Web.Mvc;

namespace AirtekProject.Controllers
{
    public class Product
    {
        string Name { get; set; }
    }
    public class HomeController : Controller
    {
        
        public ActionResult Index()
        {
         
            return View();
        }

        //public JsonResult GetData()
        //{
        //    NotasContext db = new NotasContext();

        //    List<Notas> lista = db.Notas.ToList();

     
        //    string product;
        //    product = "Message from server";

        //    return Json(db.Notas.ToList(), JsonRequestBehavior.AllowGet);
        //}
        //public JsonResult ReciboGetData()
        //{
        //    AirtekContext db = new AirtekContext();

        //    List<PHRECIBOCAJA> lista = db.PHRECIBOCAJA.ToList();


        //    string product;
        //    product = "Message from server";

        //    return Json(db.PHRECIBOCAJA.ToList(), JsonRequestBehavior.AllowGet);
        //}

        public JsonResult equiposGetData()
        {
            equiposContext db = new equiposContext();

            List<reporte> lista = db.reporte.ToList();


            string product;
            product = "Message from server";

            return Json(db.reporte.ToList(), JsonRequestBehavior.AllowGet);
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        //public ActionResult Contact()
        //{
        //    NotasContext db = new NotasContext();
        //    List<Notas> Lista = db.Notas.ToList();

        //    return View(db.Notas.ToList());
        //}

        //public ActionResult Table()
        //{

        //     NotasContext db = new NotasContext();
        //     List<Notas> lista = db.Notas.ToList();

        //    //return Json(db.Notas.ToList(), JsonRequestBehavior.AllowGet);
        //    return View();
        //}
    }
}