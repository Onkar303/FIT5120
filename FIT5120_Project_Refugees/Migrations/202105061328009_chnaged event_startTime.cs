namespace FIT5120_Project_Refugees.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class chnagedevent_startTime : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Events", "event_startTime", c => c.Time(nullable: false, precision: 7));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Events", "event_startTime", c => c.DateTime(nullable: false));
        }
    }
}
