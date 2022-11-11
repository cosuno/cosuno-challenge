import express from "express";
import { faker } from "@faker-js/faker";

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
const port = 3000;

app.get("/companies", (_req, res) => {
  const companies = Array(100)
    .fill(undefined)
    .map((_, index) => ({
      id: index + 1,
      name: faker.company.name(),
      logoUrl: "https://picsum.photos/200/200",
      specialties: faker.helpers.arrayElements(
        SPECIALTIES,
        faker.datatype.number({ min: 1, max: 4 })
      ),
    }));

  res.send(companies);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
