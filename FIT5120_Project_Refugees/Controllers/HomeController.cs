using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FIT5120_Project_Refugees.Models;

namespace FIT5120_Project_Refugees.Controllers
{
    
    [RequireHttps]
    public class HomeController : Controller
    {
        private RefugeeDatabaseEntities db = new RefugeeDatabaseEntities();
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Analytics()
        {
            return View();
        }


        public ActionResult Suggestions()
        {


            return View(getRandomSports());
        }


        public ActionResult SportsInformation(int? id)
        {
            if(id == null)
            {
                id = 0;
            }
            CustomSportsInformationModel obj = getSportsInformation(id);
            
            if (obj.selectedSport == null)
            {
                return HttpNotFound();
            }

            return View(obj);
        }


        public CustomSportsInformationModel getSportsInformation(int? id)
        {
            List<SPORT> sportList = db.SPORTs.ToList();
            List<TERM> termList = db.TERMs.ToList();
            CustomSportsInformationModel obj = new CustomSportsInformationModel();

            obj.selectedSport = db.SPORTs.Find(id);

            obj.sports_id = new List<int>();
            obj.sports_name = new List<string>();

           
           
            for (int i = 0; i < sportList.Count; i++)
            {
                obj.sports_id.Add(sportList[i].sport_id);
                obj.sports_name.Add(sportList[i].sport_name);
            }
           
            return obj;
        }


        public IEnumerable<SPORT> getRandomSports()
        {
            List<SPORT> sportList = db.SPORTs.ToList();
            //CustomSportsInformationModel obj = new CustomSportsInformationModel();

            //for (int i = 0; i < sportList.Count; i++)
            //{
            //    obj.sports_id.Add(sportList[i].sport_id);
            //    obj.sports_name.Add(sportList[i].sport_name);
            //}
            Random rnd = new Random();
            var randomList = sportList.OrderBy(item => rnd.Next());
            var fourRandomSports = randomList.Take(4);


            foreach(var name in randomList)
            {
                name.sport_desc = System.Text.RegularExpressions.Regex.Replace(name.sport_desc, @"<[^>]+>|&nbsp;", "").Trim();
            }


            return fourRandomSports;
        }
    }
}