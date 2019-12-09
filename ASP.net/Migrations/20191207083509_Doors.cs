﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.net.Migrations
{
    public partial class Doors : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Doors",
                table: "Cars",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Doors",
                table: "Cars");
        }
    }
}
