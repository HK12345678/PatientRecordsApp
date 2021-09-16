using Domain;
using Infastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace APIs
{
    public class Services<T> : IServices<T> where T : tblPatient
    {
        private IRepository<T> _PatientsRepository = null;

        public Services()
        {
            this._PatientsRepository = new Repository<T>();
        }

        public IEnumerable<T> GetAll()
        {
            return _PatientsRepository.GetAll();
        }
        public T GetById(object id)
        {
            return _PatientsRepository.GetById(id);
        }
        public T Insert(T obj)
        {
            return _PatientsRepository.Insert(obj);
        }
        public T Update(T obj)
        {
            return _PatientsRepository.Update(obj);
        }
        public void Delete (object ID)
        {
            _PatientsRepository.Delete(ID);
        }
    }
}
