namespace FIT5120_Project_Refugees.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedEntites : DbMigration
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
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Terms");
            DropTable("dbo.Sports");
            DropTable("dbo.Countries");
        }
    }
}
