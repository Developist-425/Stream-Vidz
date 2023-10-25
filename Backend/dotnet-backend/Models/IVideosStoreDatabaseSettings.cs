using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace streamapi.Models
{
    public interface IVideosStoreDatabaseSettings
    {
        string VideosCollectionName {get; set;}
        string ConnectionString {get; set;}
        string DatabaseName {get; set;}
    }
}