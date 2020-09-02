using Microsoft.AspNetCore.Mvc;
using Moq;
using Pharmacy.Data;
using PharmacyAPI.Controllers;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace PharmacyAPI.UnitTests
{
    public class MedicineControllerTests
    {
        private readonly Mock<IMedicineRepository> repo;
        private readonly MedicineController controller;

        public MedicineControllerTests()
        {
            repo = new Mock<IMedicineRepository>();
            controller = new MedicineController(repo.Object);
        }

        [Fact]
        public void GetAllMed_ShouldReturnAvailMeds()
        {
            repo.Setup(m => m.All(null)).Returns(new List<Medicine>() { new Medicine() { Name = "Saridon", Brand = "Saridon", Price = 10.00, ExpiryDate = DateTime.Now.AddDays(30), Id = Guid.NewGuid(), Notes = "hello", Quantity = 100 } });
            var response = controller.Get(null) as ObjectResult;

            var meds = response.Value as List<Medicine>;
            Assert.Single<Medicine>(meds);
        }

        [Fact]
        public void Update_ShouldReturnBadRequestIfInputNULL()
        {
            repo.Setup(m => m.All(null)).Returns(new List<Medicine>() { new Medicine() { Name = "Saridon", Brand = "Saridon", Price = 10.00, ExpiryDate = DateTime.Now.AddDays(30), Id = Guid.NewGuid(), Notes = "hello", Quantity = 100 } });
            var response = controller.Update(null) as ObjectResult;

            Assert.Equal(400, response.StatusCode);
        }
    }
}
