using FIT5120_Project_Refugees.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace FIT5120_Project_Refugees.DatabaseContext
{
    public class DataContext:DbContext
    {
        public DataContext() : base("name=RefugeeDatabaseConnection") { }

        public DbSet<Country> Countries { get; set; }

        public DbSet<Term> Terms { get; set; }

        public DbSet<Sport> Sports { get; set; }

    }
}