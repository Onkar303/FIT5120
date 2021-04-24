namespace FIT5120_Project_Refugees.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class firstmigration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Countries",
                c => new
                    {
                        COUNTRY_ID = c.Int(nullable: false, identity: true),
                        COUNTRY_NAME = c.String(),
                        REFUGEE_COUNT = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.COUNTRY_ID);
            
            CreateTable(
                "dbo.Sports",
                c => new
                    {
                        SPORT_ID = c.Int(nullable: false, identity: true),
                        SPORT_NAME = c.String(),
                        SPORT_DESC = c.String(),
                        SPORT_BENIFIT = c.String(),
                    })
                .PrimaryKey(t => t.SPORT_ID);
            
            CreateTable(
                "dbo.Terms",
                c => new
                    {
                        TERM_ID = c.Int(nullable: false, identity: true),
                        TERM_NAME = c.String(),
                        TERM_DESC = c.String(),
                    })
                .PrimaryKey(t => t.TERM_ID);
            
            CreateTable(
                "dbo.SportCountries",
                c => new
                    {
                        Sport_SPORT_ID = c.Int(nullable: false),
                        Country_COUNTRY_ID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Sport_SPORT_ID, t.Country_COUNTRY_ID })
                .ForeignKey("dbo.Sports", t => t.Sport_SPORT_ID, cascadeDelete: true)
                .ForeignKey("dbo.Countries", t => t.Country_COUNTRY_ID, cascadeDelete: true)
                .Index(t => t.Sport_SPORT_ID)
                .Index(t => t.Country_COUNTRY_ID);
            
            CreateTable(
                "dbo.TermSports",
                c => new
                    {
                        Term_TERM_ID = c.Int(nullable: false),
                        Sport_SPORT_ID = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Term_TERM_ID, t.Sport_SPORT_ID })
                .ForeignKey("dbo.Terms", t => t.Term_TERM_ID, cascadeDelete: true)
                .ForeignKey("dbo.Sports", t => t.Sport_SPORT_ID, cascadeDelete: true)
                .Index(t => t.Term_TERM_ID)
                .Index(t => t.Sport_SPORT_ID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.TermSports", "Sport_SPORT_ID", "dbo.Sports");
            DropForeignKey("dbo.TermSports", "Term_TERM_ID", "dbo.Terms");
            DropForeignKey("dbo.SportCountries", "Country_COUNTRY_ID", "dbo.Countries");
            DropForeignKey("dbo.SportCountries", "Sport_SPORT_ID", "dbo.Sports");
            DropIndex("dbo.TermSports", new[] { "Sport_SPORT_ID" });
            DropIndex("dbo.TermSports", new[] { "Term_TERM_ID" });
            DropIndex("dbo.SportCountries", new[] { "Country_COUNTRY_ID" });
            DropIndex("dbo.SportCountries", new[] { "Sport_SPORT_ID" });
            DropTable("dbo.TermSports");
            DropTable("dbo.SportCountries");
            DropTable("dbo.Terms");
            DropTable("dbo.Sports");
            DropTable("dbo.Countries");
        }
    }
}
