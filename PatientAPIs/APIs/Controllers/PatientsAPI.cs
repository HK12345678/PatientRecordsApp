using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Domain;
using Infastructure;
using Infastructure.Models;

namespace APIs
{
    public class PatientsController : ApiController
    {
        private IServices<tblPatient> _PatientsRepository = null;

        public PatientsController()
        {
            this._PatientsRepository = new Services<tblPatient>();
        }

        [Route("api/GetPatientsRecordList")]
        [HttpGet]
        public HttpResponseMessage GetPatientsList()
        {
            var result = _PatientsRepository.GetAll();
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, result);
            return response;
        }

        [Route("api/GetPatientRecordByID")]
        [HttpGet]
        public HttpResponseMessage GetPatientRecord(int PatientId)
        {
            var result = _PatientsRepository.GetById(PatientId);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, result);
            return response;
        }

        [Route("api/UpdatePatientRecord")]
        [HttpPut]
        public HttpResponseMessage UpdatePatientRecord(tblPatient patientDetails)
        {
            var result = _PatientsRepository.Update(patientDetails);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, result);
            return response;
        }

        [Route("api/InsertPatientRecord")]
        [HttpPost]
        public HttpResponseMessage InsertPatientRecord(tblPatient patientDetails)
        {
            var result = _PatientsRepository.Insert(patientDetails);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, result);
            return response;
        }

        [Route("api/DeletePatientRecord")]
        [HttpGet]
        public HttpResponseMessage DeletePatientRecord(int ID)
        {
            _PatientsRepository.Delete(ID);
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK);
            return response;
        }

        //private PatientEntities db = new PatientEntities();

        //// GET: api/tblPatients
        //[Route("api/GetPatients")]
        //public IQueryable<tblPatient> GettblPatients()
        //{
        //    return db.tblPatients;
        //}

        //// GET: api/tblPatients/5
        //[ResponseType(typeof(tblPatient))]
        //public IHttpActionResult GettblPatient(int id)
        //{
        //    tblPatient tblPatient = db.tblPatients.Find(id);
        //    if (tblPatient == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(tblPatient);
        //}

        //// PUT: api/tblPatients/5
        //[ResponseType(typeof(void))]
        //public IHttpActionResult PuttblPatient(int id, tblPatient tblPatient)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != tblPatient.ID)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(tblPatient).State = EntityState.Modified;

        //    try
        //    {
        //        db.SaveChanges();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!tblPatientExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        //// POST: api/tblPatients
        //[ResponseType(typeof(tblPatient))]
        //public IHttpActionResult PosttblPatient(tblPatient tblPatient)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.tblPatients.Add(tblPatient);
        //    db.SaveChanges();

        //    return CreatedAtRoute("DefaultApi", new { id = tblPatient.ID }, tblPatient);
        //}

        //// DELETE: api/tblPatients/5
        //[ResponseType(typeof(tblPatient))]
        //public IHttpActionResult DeletetblPatient(int id)
        //{
        //    tblPatient tblPatient = db.tblPatients.Find(id);
        //    if (tblPatient == null)
        //    {
        //        return NotFound();
        //    }

        //    db.tblPatients.Remove(tblPatient);
        //    db.SaveChanges();

        //    return Ok(tblPatient);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool tblPatientExists(int id)
        //{
        //    return db.tblPatients.Count(e => e.ID == id) > 0;
        //}
    }
}