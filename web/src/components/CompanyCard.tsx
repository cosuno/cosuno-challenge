import { Company } from '../types';
import './CompanyCard.css';

const CompanyCard: React.FC<Company> = ({ name, logoUrl, specialties }) => (
  <div className="CompanyCard">
    <div className="CompanyLogo">
      <img src={logoUrl} alt={name} />
    </div>
    <div className="CompanyDetails">
      <div className="CompanyName">{name}</div>
      <div className="CompanySpecialties">
        {specialties.map((specialty) => (
          <div key={specialty} className="CompanySpecialty">
            {specialty}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CompanyCard;
