using Microsoft.Extensions.Options;
using MongoDB.Driver;
using streamapi.Models;
using streamapi.services;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.Configure<VideosStoreDatabaseSettings>(builder.Configuration.GetSection(nameof(VideosStoreDatabaseSettings)));

builder.Services.AddSingleton<IVideosStoreDatabaseSettings>(sp => sp.GetRequiredService<IOptions<VideosStoreDatabaseSettings>>().Value);

builder.Services.AddSingleton<IMongoClient>(s => new MongoClient(builder.Configuration.GetValue<string>("VideosStoreDatabaseSettings:ConnectionString")));

builder.Services.AddScoped<IVideosService, VideosService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// ===================

builder.Services.AddControllers().AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling=Newtonsoft.Json.ReferenceLoopHandling.Ignore).AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver=new DefaultContractResolver());

// ==================

var app = builder.Build();

// ===========

app.UseCors(c => c.AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod());
// ==========

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
