using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infastructure.Models;
namespace APIs
{
    public interface IServices<T> where T : tblPatient
    {
        IEnumerable<T> GetAll();
        T GetById(object Id);
        T Insert(T obj);
        T Update(T obj);
        void Delete(object ID);
    }
}
