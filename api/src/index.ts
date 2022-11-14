import cors from "cors";
import express from "express";
import { faker } from "@faker-js/faker";
import companies from "./data/companies.json";

const SPECIALTIES = [
  "Carpentry",
  "Insulation",
  "Ironworking",
  "Landscaping",
  "Masonry",
  "Painting",
  "Plumbing",
  "Welding",
];

const app = express();
const port = 3001;

app.use(cors());

app.get("/companies", (req, res) => {
  const searchQuery = req.query.query as string | undefined;
  const filteredCompanies = companies.filter((company) =>
    searchQuery
      ? company.name.toLowerCase().includes(searchQuery.toLowerCase())
      : true
  );

  res.send(filteredCompanies);
});

app.get("/companies/random", (_req, res) => {
  const randomCompanies = Array(100)
    .fill(undefined)
    .map((_, index) => {
      const id = index + 1;

      return {
        id,
        name: faker.company.name(),
        logoUrl: `https://picsum.photos/seed/cosuno-${id}/200`,
        specialties: faker.helpers.arrayElements(
          SPECIALTIES,
          faker.datatype.number({ min: 1, max: 4 })
        ),
      };
    });

  res.send(randomCompanies);
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
