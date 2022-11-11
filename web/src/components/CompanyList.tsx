import React, { useEffect, useState } from "react";

interface Company {
  id: string;
  name: string;
  logoUrl: string;
  specialties: string[];
}

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    void (async () => {
      const response = await fetch("http://localhost:3001/companies");
      setCompanies(await response.json());
    })();
  }, []);

  return (
    <>
      {companies.map((company) => (
        <div key={company.id}>{company.name}</div>
      ))}
    </>
  );
};

export default CompanyList;
