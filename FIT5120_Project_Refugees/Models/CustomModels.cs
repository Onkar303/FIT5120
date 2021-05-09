using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FIT5120_Project_Refugees.Models
{
    public class CustomSportsInformationModel
    {
        public List<int> sportsid;

        public List<string> sportsName;

        public List<Term> termsList;

        public Sport sport;
    }

    public class CustomEventsModel
    {

        public List<Event> events;

        public List<string> sportsName = new List<string>(new string[] { "Soccer", "Basketball","Swimming","Cycling","Dancing","All"});

        public string selected;


    }
}