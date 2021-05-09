using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using FIT5120_Project_Refugees.DatabaseContext;
using FIT5120_Project_Refugees.Models;

namespace FIT5120_Project_Refugees.Controllers
{


    [RequireHttps]
    public class HomeController : Controller
    {
        private DataContext db = new DataContext();

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


        public ActionResult Map()
        {

            return View();
        }



        public ActionResult Events(string id)
        {
           
            CustomEventsModel eventsModel = new CustomEventsModel();
            if (String.IsNullOrEmpty(id))
            {
                id = "All";
            }

            if (id == "All")
            {
                eventsModel.events =  db.Events.ToList();
                eventsModel.selected = "All";

            } else if(id == "Soccer"){
                eventsModel.events = db.Events.Where(s => s.event_kind.Equals("Soccer")).ToList();
                eventsModel.selected = "Soccer";
            } else if(id == "Swimming")
            {
                eventsModel.events = db.Events.Where(s => s.event_kind.Equals("Swimming")).ToList();
                eventsModel.selected = "Swimming";
            } else if(id == "Basketball")
            {
                eventsModel.events = db.Events.Where(s => s.event_kind.Equals("Basketball")).ToList();
                eventsModel.selected = "Basketball";
            }
            else if (id == "Cycling")
            {
                eventsModel.events = db.Events.Where(s => s.event_kind.Equals("Cycling")).ToList();
                eventsModel.selected = "Cycling";

            }
            else if (id == "Dancing")
            {
                eventsModel.events = db.Events.Where(s => s.event_kind.Equals("Dancing")).ToList();
                eventsModel.selected = "Dancing";
            }

            return View(eventsModel);
        }


        public ActionResult SportsInformation(int? id)
        {
            if (id == null)
            {
                id = 0;
            }
            CustomSportsInformationModel obj = getSportsInformation(id);

            if (obj.sport == null)
            {
                return HttpNotFound();
            }

            return View(obj);
        }

        public CustomSportsInformationModel getSportsInformation(int? id)
        {
            List<Sport> sportList = db.Sports.ToList();
            List<Term> termList = db.Terms.ToList();
            CustomSportsInformationModel obj = new CustomSportsInformationModel();

            var terms = db.Terms.Where(t => t.Sports.Any(s => s.SPORT_ID == id)).ToList();

            obj.sport = db.Sports.Find(id);

            obj.sportsid = new List<int>();
            obj.sportsName = new List<string>();
            obj.termsList = new List<Term>(terms);
           

            for (int i = 0; i < sportList.Count; i++)
            {
                obj.sportsid.Add(sportList[i].SPORT_ID);
                obj.sportsName.Add(sportList[i].SPORT_NAME);
            }

            return obj;
        }


        public IEnumerable<Sport> getRandomSports()
        {
            List<Sport> sportList = db.Sports.ToList();
            //CustomSportsInformationModel obj = new CustomSportsInformationModel();

            //for (int i = 0; i < sportList.Count; i++)
            //{
            //    obj.sports_id.Add(sportList[i].sport_id);
            //    obj.sports_name.Add(sportList[i].sport_name);
            //}
            Random rnd = new Random();
            var randomList = sportList.OrderBy(item => rnd.Next());
            var fourRandomSports = randomList.Take(3);

            return fourRandomSports;
        }
    }
}