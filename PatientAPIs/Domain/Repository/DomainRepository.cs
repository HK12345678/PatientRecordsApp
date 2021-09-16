using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Infastructure;
using Infastructure.Models;

namespace Domain
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private PatientEntities context;
            
        private DbSet<T> dbSet;

        public Repository()
        {
            context = new PatientEntities();
            dbSet = context.Set<T>();
        }

        public IEnumerable<T> GetAll()
        {
            return dbSet.ToList();
        }
        public T GetById(object id)
        {
            return dbSet.Find(id);
        }
        public T Insert(T obj)
        {
            dbSet.Add(obj);
            Save();
            return obj;
        }
        public void Delete(object id)
        {
            T entityToDelete = dbSet.Find(id);
            Delete(entityToDelete);
        }
        public void Delete(T entityToDelete)
        {
            dbSet.Remove(entityToDelete);
            Save();
        }

        public T Update(T obj)
        {
            dbSet.Attach(obj);
            context.Entry(obj).State = EntityState.Modified;
            Save();
            return obj;
        }

        public void Save()
        {
            try
            {
                context.SaveChanges();
            }
            catch 
            {
                
            }
        }

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (context != null)
                {
                    context.Dispose();
                    context = null;
                }
            }
        }
    }
}