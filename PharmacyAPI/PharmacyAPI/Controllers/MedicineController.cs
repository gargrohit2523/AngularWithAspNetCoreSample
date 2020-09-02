using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pharmacy.Data;

namespace PharmacyAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineController : ControllerBase
    {
        private IMedicineRepository repository;
        public MedicineController(IMedicineRepository repo)
        {
            this.repository = repo;
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetMedicine(Guid id)
        {
            if (id == null)
                return BadRequest("Please select valid medicine");
            var medicine = this.repository.Get(id);
            return Ok(medicine);
        }

        [HttpGet]
        [Route("all/{key?}")]
        public IActionResult Get(string key)
        {
            var medicines = this.repository.All(key);
            return Ok(medicines);
        }

        [HttpPost]
        public IActionResult Add([FromBody]Medicine med)
        {
            if (med == null)
                return BadRequest("Invalid medicine");
            return Ok(this.repository.Add(med));
        }

        [HttpPut]
        public IActionResult Update([FromBody]Medicine med)
        {
            if (med == null)
                return BadRequest("Invalid medicine");

            return Ok(this.repository.Update(med));
        }
    }
}
