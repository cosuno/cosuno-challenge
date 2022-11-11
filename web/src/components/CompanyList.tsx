import React, { useEffect, useState } from "react";
import { Company } from "../types";
import CompanyCard from "./CompanyCard";

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    void (async () => {
      const response = await fetch("http://localhost:3001/companies");
      setCompanies(await response.json());
    })();
  }, []);

  return (
    <div className="CompanyList">
      {companies.map((company) => (
        <CompanyCard key={company.id} {...company} />
      ))}
    </div>
  );
};

export default CompanyList;
