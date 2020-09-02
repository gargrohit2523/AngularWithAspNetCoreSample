using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Pharmacy.Data
{
    public class MedicineRepository : IMedicineRepository
    {
        private List<Medicine> state = new List<Medicine>();

        public MedicineRepository()
        {
            this.SeedData();
        }

        private void SeedData()
        {
            this.state.AddRange(new List<Medicine>() {
                new Medicine() { Id = Guid.NewGuid(), Name = "Saridon", Brand = "Saridon", ExpiryDate = DateTime.Now.AddDays(365), Price = 10.00, Quantity = 2, Notes = "sample note" },
                new Medicine() { Id = Guid.NewGuid(), Name = "Analgesic", Brand = "Cadilla", ExpiryDate = DateTime.Now.AddDays(20), Price = 10.00, Quantity = 100, Notes = "sample note" },
                new Medicine() { Id = Guid.NewGuid(), Name = "Dolo", Brand = "Micro Labs", ExpiryDate = DateTime.Now.AddDays(365), Price = 10.00, Quantity = 100, Notes = "sample note" },
                new Medicine() { Id = Guid.NewGuid(), Name = "Volitra", Brand = "Micro labs", ExpiryDate = DateTime.Now.AddDays(365), Price = 10.00, Quantity = 100, Notes = "sample note" },
                new Medicine() { Id = Guid.NewGuid(), Name = "Cefixime", Brand = "Cadilla", ExpiryDate = DateTime.Now.AddDays(365), Price = 10.00, Quantity = 100, Notes = "sample note" }
            });
        }

        public int Add(Medicine medicine)
        {
            medicine.Id = Guid.NewGuid();
            this.state.Add(medicine);

            return 1;
        }

        public IEnumerable<Medicine> All(string key)
        {
            if (!string.IsNullOrEmpty(key))
                return this.state.Where(m => m.Name.Contains(key));
            else
                return this.state;
        }

        public Medicine Get(Guid id)
        {
            return this.state.Where(m => m.Id == id).FirstOrDefault();
        }

        public int Update(Medicine medicine)
        {
            var med = this.state.Where(m => m.Id == medicine.Id).FirstOrDefault();
            if (med == null)
                return 0;

            med.Notes = medicine.Notes;
            return 1;
        }
    }
}
