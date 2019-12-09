
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ASP.net.Models{
    /*
    represents the connection with the DB
    will be used to access the different tables (classes)
    to retrieve and store information/records
    */
    public class DataContext : DbContext{
        
         public DataContext(DbContextOptions<DataContext> options) : base(options)
         {

         }

         // specify which model requires to be a table in the DB

         public DbSet<Car> Cars {get; set;}

    }
}