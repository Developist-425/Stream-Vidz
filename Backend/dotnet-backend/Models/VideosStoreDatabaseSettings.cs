using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace streamapi.Models
{
    public class VideosStoreDatabaseSettings : IVideosStoreDatabaseSettings
    {
               public string VideosCollectionName {get; set;} = String.Empty;
        public string ConnectionString {get; set;} = String.Empty;
       public string DatabaseName {get; set;} = String.Empty;
    }
}