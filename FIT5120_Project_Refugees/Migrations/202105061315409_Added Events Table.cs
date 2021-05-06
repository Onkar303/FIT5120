namespace FIT5120_Project_Refugees.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedEventsTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Events",
                c => new
                    {
                        event_id = c.Int(nullable: false, identity: true),
                        event_name = c.String(),
                        event_kind = c.String(),
                        event_description = c.String(),
                        event_address = c.String(),
                        event_vacancy = c.Int(nullable: false),
                        event_duration = c.Int(nullable: false),
                        event_startDate = c.DateTime(nullable: false),
                        event_endDate = c.DateTime(nullable: false),
                        event_startTime = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.event_id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Events");
        }
    }
}
