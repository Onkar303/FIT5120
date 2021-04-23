using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FIT5120_Project_Refugees.Models
{
    public class Country
    {
        [Key]
        public int COUNTRY_ID { get; set; }


        public string COUNTRY_NAME { get; set; }


        public int REFUGEE_COUNT { get; set; }

        public virtual ICollection<Sport> Sports { get; set; }

    }



    public class Sport
    {

        [Key]
        public int SPORT_ID { get; set; }


        public string SPORT_NAME { get; set; }


        public string SPORT_DESC { get; set; }

        public string SPORT_BENIFIT { get; set; }

        public virtual ICollection<Term> Terms { get; set; } 

        public virtual ICollection<Country> Countries { get; set; }

    }



    public class Term
    {

        [Key]
        public int TERM_ID { get; set; }

        public string TERM_NAME { get; set; }

        public string TERM_DESC { get; set; }

        public virtual ICollection<Sport> Sports { get; set; }

    }
}