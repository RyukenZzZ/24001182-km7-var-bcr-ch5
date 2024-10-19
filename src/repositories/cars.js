const cars = require("../../data/cars.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const dataPath = "./data/cars.json";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// use `prisma` in your application to read and write data in your DB
const JSONBigInt = require(`json-bigint`);

exports.getCars = async () => {
  const carsData = await prisma.cars.findMany({
    include: { manufactures: true, models: true, types: true },
  });
  if (!carsData) {
    return null;
  }
  const serializeData = JSONBigInt.stringify(carsData);
  return JSONBigInt.parse(serializeData);
};

exports.getCarsByQuery = async (plate, manufacture) => {
  const searchedCars = await prisma.cars.findMany({
    where: {
      OR: [
        {
          plate: {
            contains: plate,
            mode: "insensitive",
          },
          manufacture: {
            contains: manufacture,
            mode: "insensitive",
          },
        },
      ],
    },
  });
  if (!searchedCars) {
    return null;
  }
  const serializeData = JSONBigInt.stringify(searchedCars);
  return JSONBigInt.parse(serializeData);
};

exports.getCarsById = async (id) => {
  const carsById = await prisma.cars.findUnique({
    where: {
      id: id,
    },
  });
  if (!carsById) {
    return null;
  }
  const serializeData = JSONBigInt.stringify(carsById);
  return JSONBigInt.parse(serializeData);
};

exports.addCars = async (data) => {
  const newCars = await prisma.cars.createManyAndReturn({
    data,
  });
  const serializeData = JSONBigInt.stringify(newCars);
  return JSONBigInt.parse(serializeData);
};

exports.updateCars = async (id, data) => {
  const newCars = await prisma.cars.update({
    where: { id: Number(id) },
    data,
  });
  const serializeData = JSONBigInt.stringify(newCars);
  return JSONBigInt.parse(serializeData);
};

exports.deleteCars = async (id) => {
  const deletedCars = await prisma.cars.delete({
    where: {
      id: Number(id),
    },
  });
  const serializeData = JSONBigInt.stringify(deletedCars);
  return JSONBigInt.parse(serializeData);
};
