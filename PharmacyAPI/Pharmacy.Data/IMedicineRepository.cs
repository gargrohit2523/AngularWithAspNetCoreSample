using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Pharmacy.Data
{
    public interface IMedicineRepository
    {
        IEnumerable<Medicine> All(string key);

        Medicine Get(Guid id);

        int Add(Medicine medicine);

        int Update(Medicine medicine);


    }
}
